import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BetweenLine } from "./betweenline"
import { InputFile } from "../InputFile"
export function Welcome({
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6 h-full", className)} {...props}>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col items-center gap-2 ">
          <div className="flex  items-center mt-2">
            <GalleryVerticalEnd size={30} className="mr-8 opacity-80" />
            <GalleryVerticalEnd size={30} className="mr-10 opacity-80" />
            <GalleryVerticalEnd size={60} className=" opacity-90" />
            <GalleryVerticalEnd size={30} className="ml-10 opacity-80" />
            <GalleryVerticalEnd size={30} className="ml-8 opacity-80" />
          </div>
          <h1 className="text-6xl font-bold mb-4 mt-3 text-gray-900 pt-5">WHAAT THE BIRD?</h1>
          <h2 className="text-2xl text-stone-700 font-bold mb-20 mt-10">Leave the guessing to us.</h2>
          <div className="flex flex-col md:flex-row gap-4 w-full items-center">
            <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center w-full h-4/6 bg-slate-100 rounded-t-xl">
                <img src="/images/microphone-svgrepo-com.svg" alt="Microphone" className="p-10" style={{ filter: 'invert(50%) brightness(50%)' }} />
              </div>
              <p className="text-gray-600 bg-gray-200 w-full min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">Record the voice of your favourite bird</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center w-full h-4/6 bg-slate-100 rounded-t-xl">
                <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Upload" className="p-10 " style={{ filter: 'invert(50%) brightness(50%)' }} />
              </div>
              <p className="text-gray-600 bg-gray-200 w-full min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">Upload a .wav or .mp3 file or whatever</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
              <div className="flex flex-col items-center justify-center w-full h-4/6 bg-slate-100 rounded-t-xl">
                <img src="/images/search-alt-svgrepo-com.svg" alt="Search" className="p-10" style={{ filter: 'invert(50%) brightness(50%)' }} />
              </div>
              <p className="text-gray-600 bg-gray-200 w-full min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">Upload a .wav or .mp3 file or whatever</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}
