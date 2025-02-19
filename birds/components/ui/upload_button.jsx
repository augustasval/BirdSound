import { useState } from 'react';
import { useRouter } from 'next/router';

export function UploadButton({ className, onAudioFeaturesExtracted, onUpload, ...props }) {

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can add any additional file handling logic here if needed
      if (onAudioFeaturesExtracted) {
        onAudioFeaturesExtracted(file);
      }
      // Call the onUpload callback to hide the RecordButton
      if (onUpload) {
        onUpload();
      }
    }
  };

  return (
    <div className=" text-gray-500 flex-1 flex flex-col items-center justify-center h-80 md:w-96 w-64 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-20">
      <label className="rounded-2xl flex flex-col items-center justify-center md:h-4/6 h-56 md:w-full w-full bg-green-100 shadow-md cursor-pointer">
        <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Upload" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full" />
        <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" />
      </label>
    </div>
  );
}
