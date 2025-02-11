import { useState, useEffect } from 'react';
import Meyda from 'meyda';

export function UploadButton({ className, ...props }) {
  const [audioFeatures, setAudioFeatures] = useState(null);

  const extractAudioFeatures = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  
    const sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
  
    const analyzerNode = Meyda.createMeydaAnalyzer({
      audioContext: audioContext,
      source: sourceNode, // Use the same sourceNode
      bufferSize: 512,
      featureExtractors: ['mfcc', 'spectralCentroid', 'rms'],
      callback: (features) => {
        if (features && features.mfcc) {
          setAudioFeatures((prevFeatures) => {
            if (!prevFeatures) return [features];
            return [...prevFeatures, features];
          });
        }
      }
    });
  
    // Connect the source node to the destination (so you can hear the audio)
    sourceNode.connect(audioContext.destination);
  
    // Start the analyzer and the audio
    analyzerNode.start();
    sourceNode.start();
  
    // Stop the analyzer when the audio finishes playing
    sourceNode.onended = () => {
      analyzerNode.stop();
      audioContext.close();
    };
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFeatures(null); // Reset previous features
      await extractAudioFeatures(file);
    }
  };

  // Convert features to tensor-ready format
  const prepareForTensorflow = () => {
    if (!audioFeatures) return null;
    
    // Calculate average features over time windows
    const windowSize = 10; // Adjust this value based on your needs
    const processedFeatures = [];
    
    for (let i = 0; i < audioFeatures.length; i += windowSize) {
      const window = audioFeatures.slice(i, i + windowSize);
      if (window.length === windowSize) {
        // Calculate average MFCC coefficients for this window
        const avgMfcc = window.reduce((acc, curr) => {
          curr.mfcc.forEach((val, idx) => {
            if (!acc[idx]) acc[idx] = 0;
            acc[idx] += val / windowSize;
          });
          return acc;
        }, []);
        
        // Calculate average spectral centroid for this window
        const avgCentroid = window.reduce((acc, curr) => 
          acc + curr.spectralCentroid / windowSize, 0);
        
        // Calculate average RMS for this window
        const avgRms = window.reduce((acc, curr) => 
          acc + curr.rms / windowSize, 0);
        
        processedFeatures.push([...avgMfcc, avgCentroid, avgRms]);
      }
    }
    
    return processedFeatures;
  };

  useEffect(() => {
    if (audioFeatures) {
      const tensorData = prepareForTensorflow();
      console.log('Processed features for TensorFlow:', tensorData);
    }
  }, [audioFeatures]);

  return (
    <div className="text-gray-500 flex-1 flex flex-col items-center justify-center h-80 w-full transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-20">
      <label className="flex flex-col items-center justify-center md:h-4/6 h-56 md:w-full w-full bg-green-100 shadow-md rounded-t-xl cursor-pointer">
        <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Upload" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full" />
        <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" />
      </label>
      <p className="font-bold bg-emerald-300 md:w-72 w-full min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">
        Upload a recording
      </p>
    </div>
  );
}
