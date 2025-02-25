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
        <div className="flex items-center mt-4 ">
    
          <div className='mt-16 mr-10 bg-teal-100 rounded-full'>
            <a href='https://github.com/augustasval/BirdSound'>
              <img src="/images/github-142-svgrepo-com.svg" alt="Upload" className="w-10 h-10 opacity-80"/>
            </a>
          </div>

          <img src="/images/bird-svgrepo-com.svg" alt="Upload" className="w-44 h-32 rounded-full "/>
          
          <div className='mt-16 ml- '>
            <img src="/images/moon-svgrepo-com (1).svg" alt="Upload" className="w-12 h-12 opacity-90 p-1 bg-gray-900 rounded-full"/>
          </div>

        </div>
        <h1 className="md:text-7xl text-6xl font-bold  p-2 text-gray-800 mt-6 bg-gradient-to-r from-emerald-300 to-green-300">
          WHAT THE BIRD?
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
      <div className="pt-20 h-full md:space-y-10 mb-40">
        {/* First container (image on the right for larger screens) */}
        <div
          className="fade-in mt-10 bg-green-100 rounded-xl flex flex-col md:flex-row text-wrap p-4 md:p-6 items-center md:items-start max-w-2xl mx-auto md:shadow-lg gap-4"
          ref={imageRef}
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-3xl md:text-3xl text-gray-700 font-bold p-4 opacity-90 rounded-xl mt-10 md:mt-0">
              I'm 94% sure that it's  
              <span className="block">European Greenfinch</span>
            </p>
            <p className="text-2xl text-gray-700 font-medium p-4 opacity-90 rounded-xl">
              A bird common in Europe, Asia, and Africa. It has a greenish-yellow plumage, a red face, and a white wing bar.
            </p>
          </div>

          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt="Bird Image"
            className="opacity-85 rounded-xl w-72 md:w-auto max-h-72 md:max-h-96 mt-4 md:mt-0"
          />
        </div>

        {/* Second container (image on the left for larger screens) */}
        <div
          className="fade-in bg-green-100 rounded-xl flex flex-col md:flex-row-reverse text-wrap p-4 md:p-6 items-center md:items-start max-w-2xl mx-auto md:shadow-lg gap-4"
        >
          <div className="flex-1 text-center md:text-left ">
            <p className="text-3xl md:text-3xl text-gray-700 font-bold p-4 opacity-90 rounded-xl mt-32 md:mt-0">
              It could also be 
              <span className="block">Asian Cocker</span>
            </p>
            <p className="text-2xl text-gray-700 font-medium p-4 opacity-90 rounded-xl">
              A bird common in Europe, Asia, and Africa. It has a greenish-yellow plumage, a red face.
            </p>
          </div>

          <Image
            src={imageUrl}
            width={250}
            height={250}
            alt="Bird Image"
            className="opacity-85 rounded-xl w-72 md:w-auto max-h-72 md:max-h-96 mt-4 md:mt-0 md:mb-0 mb-28 "
          />
        </div>
      </div>
    )}


       
      
      

      

      
    </div>
  );
}
