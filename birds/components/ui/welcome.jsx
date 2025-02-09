'use client'
import { GalleryVerticalEnd } from "lucide-react"
import { Input } from "./input";
export function Welcome({
  className,
  ...props
}) {
  return (
    <div className="flex flex-col items-center h-full  w-min-[500]">
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-2">
          <GalleryVerticalEnd size={30} className="mr-8 opacity-80" />
          <GalleryVerticalEnd size={30} className="mr-10 opacity-80" />
          <GalleryVerticalEnd size={80} className="opacity-90" />
          <GalleryVerticalEnd size={30} className="ml-10 opacity-80" />
          <GalleryVerticalEnd size={30} className="ml-8 opacity-80" />
        </div>
        <h1 className="text-6xl font-bold text-gray-800 mt-12 bg-gradient-to-r from-emerald-400 to-green-400">
          WHAAT THE BIRD?
        </h1>
        <p className="text-3xl text-gray-700 font-bold md:mb-20 mb-10 mt-10 opacity-90 w-3/4">
          Discover the wings and feathers behind your favourite backyard voice
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 gap-y-6 items-center">
        <button>
          <div className="text-gray-500 flex-1 flex flex-col items-center justify-center h-80 w-full transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-20 ">
            <div className="flex flex-col items-center justify-center md:h-4/6 h-56 md:w-full w-full bg-green-100 shadow-sm rounded-t-xl">
              <img src="/images/microphone-svgrepo-com.svg" alt="Microphone" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full"/>
            </div>
            <p className="font-bold bg-emerald-300 md:w-72 min-h-16 h-1/6 flex items-center justify-center p-2  rounded-b-xl">
              Record the the mysterious voice
            </p>
          </div>
        </button>
        <div className="text-gray-500 flex-1 flex flex-col items-center justify-center h-80 w-full transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-20 ">
          <div className="flex flex-col items-center justify-center md:h-4/6 h-56 md:w-full w-full bg-green-100 shadow-md rounded-t-xl">
            <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Microphone" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full"/>
          </div>
          <p className="font-bold bg-emerald-300 md:w-72 w-full min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">
            Upload a recording
          </p>
        </div>
      </div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({
            top: document.body.scrollTop + 800,
            behavior: "smooth",
          });
        }}
        className="font-bold text-2xl mt-40 text-gray-400 opacity-55 cursor-pointer mb-96"
      >
        How this works....
      </a>
      <h1 className="mt-96">hey</h1>
    </div>
  );
}
