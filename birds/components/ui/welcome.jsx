import { GalleryVerticalEnd } from "lucide-react"
import { Input } from "./input";
export function Welcome({
  className,
  ...props
}) {
  return (
    <div className="flex flex-col m-6 h-full w-min-[500]">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center">
          <div className="flex  items-center mt-2">
            <GalleryVerticalEnd size={30} className="mr-8 opacity-80" />
            <GalleryVerticalEnd size={30} className="mr-10 opacity-80" />
            <GalleryVerticalEnd size={80} className=" opacity-90" />
            <GalleryVerticalEnd size={30} className="ml-10 opacity-80" />
            <GalleryVerticalEnd size={30} className="ml-8 opacity-80" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mt-12">WHAAT THE BIRD?</h1>
          <h2 className="text-3xl text-stone-700 font-bold mb-24 mt-4">Leave the guessing to us!</h2>
          <Input className="w-3/5 my-10 bg-slate-50" />
          <div className="flex flex-col md:flex-row gap-4 w-full items-center">
              <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col items-center justify-center  md:h-4/6 h-56 md:w-full w-3/4 bg-slate-100 rounded-t-xl ">
                  <img src="/images/microphone-svgrepo-com.svg" alt="Microphone" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full"  style={{ filter: 'invert(50%) brightness(50%)' }} />
                </div>
                <p className="text-gray-600 bg-gray-200 md:w-full w-3/4 min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">Record the voice of your mysterious bird</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col items-center justify-center  md:h-4/6 h-56 md:w-full w-3/4 bg-slate-100 rounded-t-xl ">
                  <img src="/images/search-alt-svgrepo-com.svg" alt="Microphone" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full"  style={{ filter: 'invert(50%) brightness(50%)' }} />
                </div>
                <p className="text-gray-600 bg-gray-200 md:w-full w-3/4 min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">Discover something new and exciting</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center h-full w-full">
                <div className="flex flex-col items-center justify-center  md:h-4/6 h-56 md:w-full w-3/4 bg-slate-100 rounded-t-xl ">
                  <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Microphone" className="md:p-10 p-4 w-40 h-40 md:w-full md:h-full"  style={{ filter: 'invert(50%) brightness(50%)' }} />
                </div>
                <p className="text-gray-600 bg-gray-200 md:w-full w-3/4 min-h-16 h-1/6 flex items-center justify-center p-2 rounded-b-xl">Upload your favourite bird song</p>
              </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}
