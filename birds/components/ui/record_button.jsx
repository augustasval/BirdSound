import { useState, useRef } from 'react';
import { GalleryVerticalEnd } from "lucide-react"
import { Input } from "./input";

export function RecordButton({
  className,
  ...props
}) {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);
        audio.play();
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <button onClick={isRecording ? handleStopRecording : handleStartRecording}>
      <div className="text-gray-500 flex-1 flex flex-col items-center justify-center h-80 w-full transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-20">
        <div className="flex flex-col items-center justify-center md:h-4/6 h-56 md:w-full w-full bg-green-100 shadow-sm rounded-t-xl">
          <img src="/images/microphone-svgrepo-com.svg" alt="Microphone" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full" />
        </div>
        <p className="font-bold bg-emerald-300 md:w-72 min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">
          {isRecording ? 'Stop Recording' : 'Record the mysterious voice'}
        </p>
      </div>
    </button>
  );
}
