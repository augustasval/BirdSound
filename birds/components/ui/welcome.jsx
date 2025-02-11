'use client'
import { GalleryVerticalEnd } from "lucide-react"
import { Input } from "./input";
import { RecordButton } from "./record_button";
import { UploadButton } from "./upload_button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { BirdCarousel } from "./birdcarousel";

export function Welcome({
  className,
  ...props
}) {
  return (
    <div className="flex flex-col items-center h-full w-min-[550px]">
      <div className="flex flex-col items-center">
        <div className="flex items-center mt-4">
          <GalleryVerticalEnd size={33} className="mr-9 opacity-80" />
          <GalleryVerticalEnd size={33} className="mr-11 opacity-80" />
          <GalleryVerticalEnd size={88} className="opacity-90" />
          <GalleryVerticalEnd size={33} className="ml-11 opacity-80" />
          <GalleryVerticalEnd size={33} className="ml-9 opacity-80" />
        </div>
        <h1 className="text-7xl font-bold text-gray-800 mt-14 bg-gradient-to-r from-emerald-400 to-green-400">
          WHAAT THE BIRD?
        </h1>
        <p className="text-3xl text-gray-700 font-bold md:mb-22 mb-12 mt-12 opacity-90 w-3/4">
          Discover the wings and feathers behind your favourite backyard voice
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row md:gap-5 gap-y-7 items-center">
        <RecordButton className="md:w-1/2 w-full" />
        <UploadButton className="md:w-1/2 w-full" />
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
        className="font-bold text-3xl mt-44 text-gray-400 opacity-55 cursor-pointer mb-106"
      >
        How this works....
      </a>
      <h1 className="mt-106">hey</h1>
    </div>
  );
}
