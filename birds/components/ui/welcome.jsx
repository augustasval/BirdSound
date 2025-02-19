'use client'
import { useState, useRef } from 'react';
import { GalleryVerticalEnd } from "lucide-react";
import { Input } from "./input";
import { RecordButton } from "./record_button";
import { UploadButton } from "./upload_button";
import Image from 'next/image';
import { Button } from './button';

export function Welcome({
  className,
  ...props
}) {
  const [showRecordButton, setShowRecordButton] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const imageRef = useRef(null);

  const handleUpload = async () => {
    setShowRecordButton(false);
  
    // Fetch the image from the Picsum API
    const response = await fetch('https://picsum.photos/seed/picsum/640');
    setImageUrl(response.url);
  
    // Scroll logic after a slight delay
    setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.classList.add('slow-scroll');
  
        // Get the position of the element relative to the viewport
        const elementPosition = imageRef.current.getBoundingClientRect().top + window.scrollY;
        const offset = window.innerWidth >= 768 ? 50 : 0; // Leave 100px gap on larger screens
  
        // Smooth scroll to the calculated position
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }, 50);
  };
  

  return (
    <div className="flex flex-col items-center h-full w-min-[550px] ">
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-4">
          <GalleryVerticalEnd size={33} className="mr-9 opacity-80" />
          <GalleryVerticalEnd size={33} className="mr-11 opacity-80" />
          <GalleryVerticalEnd size={88} className="opacity-90" />
          <GalleryVerticalEnd size={33} className="ml-11 opacity-80" />
          <GalleryVerticalEnd size={33} className="ml-9 opacity-80" />
        </div>
        <h1 className="md:text-7xl text-6xl font-bold  p-2 text-gray-800 mt-14 bg-gradient-to-r from-emerald-300 to-green-300">
          WHAAT THE BIRD?
        </h1>
        <p className="text-4xl text-gray-700 font-bold md:mb-22 mb-12 mt-12 opacity-90 w-full rounded-xl p-4">
          Discover the wings and feathers behind your favourite backyard voice
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row md:gap-5 gap-y-7 items-center">
        <RecordButton className="md:w-1/2 w-full" />
        <UploadButton className="md:w-1/2 w-full" onUpload={handleUpload} />
      </div>

      {imageUrl && (
        <div className="pt-20 h-full">
        <div
          className="fade-in mt-20 bg-green-100 rounded-xl flex flex-col md:flex-row text-wrap p-4 md:p-6 items-center md:items-start max-w-2xl mx-auto shadow-lg"
          ref={imageRef}
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl md:text-3xl text-gray-700 font-bold p-4 opacity-90 rounded-xl">
              I'm 94% sure that it's  
              <span className="block">European Greenfinch</span>
            </p>
            <p className="text-base md:text-lg text-gray-700 font-medium p-4 opacity-90 rounded-xl">
            A bird common in Europe, Asia and Africa. It is a small bird with a greenish-yellow plumage, a red face and a white wing bar. 
            </p>
            {/*<button className="bg-teal-200 opacity-70 font-bold mb-4 h-10 w-14 text-gray-800 rounded-full mx-auto md:mx-0 rotate-180">
              ↑
            </button>*/}
          </div>

          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt="Bird Image"
            className="opacity-85 rounded-xl max-h-72 md:max-h-96 w-auto mt-4 md:mt-0"
          />
        </div>
        <div
          className="fade-in md:mt-20 mt-0 bg-green-100 rounded-xl flex flex-col md:flex-row-reverse text-wrap p-4 md:p-6 items-center md:items-start max-w-2xl mx-auto shadow-lg"
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-2xl md:text-3xl text-gray-700 font-bold p-4 opacity-90 rounded-xl">
              8% chance that it's  
              <span className="block">Australian Greenfinch</span>
            </p>
            <p className="text-base md:text-lg text-gray-700 font-medium p-4 opacity-90 rounded-xl">
              A bird common in Europe, Asia, and Africa. It has a greenish-yellow plumage, a red face, and a white wing bar.
            </p>
          </div>

          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt="Bird Image"
            className="opacity-85 rounded-xl max-h-72 md:max-h-96 w-auto mt-4 md:mt-0"
          />
        </div>
        </div>
        
      )}

       
      
      

      

      {/* Add a target element to scroll to */}
      <div id="scroll-target" className="mt-96 mb-96">
        <h2 className="text-4xl font-bold">How it works...</h2>
        <p>This is the target element to scroll to.</p>
      </div>
    </div>
  );
}
