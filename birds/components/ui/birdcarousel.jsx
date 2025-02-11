'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function BirdCarousel({
  className,
  ...props
}) {
  return (
    <div className="flex flex-col md:w-4/5 md:flex-row gap-y-7 items-center justify-center md:mt-0 mt-10">
      <Carousel className="w-full rounded-xl p-4 relative" loop>
        <CarouselPrevious className='hidden md:flex'/>
        <CarouselContent className="flex space-x-4">
          <CarouselItem className="flex-none w-1/3 transform transition-transform duration-300 ease-in-out">
            <div className="w-full h-48 bg-emerald-100 rounded-xl shadow-lg">
              <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Photo 1" className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex-none w-1/3 transform transition-transform duration-300 ease-in-out">
            <div className="w-full h-48 bg-emerald-200 rounded-xl shadow-lg">
              <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Photo 2" className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex-none w-1/3 transform transition-transform duration-300 ease-in-out">
            <div className="w-full h-48 bg-emerald-300 rounded-xl shadow-lg">
              <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Photo 3" className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex-none w-1/3 transform transition-transform duration-300 ease-in-out">
            <div className="w-full h-48 bg-emerald-400 rounded-xl shadow-lg">
              <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Photo 4" className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex-none w-1/3 transform transition-transform duration-300 ease-in-out">
            <div className="w-full h-48 bg-emerald-500 rounded-xl shadow-lg">
              <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Photo 5" className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
          <CarouselItem className="flex-none w-1/3 transform transition-transform duration-300 ease-in-out">
            <div className="w-full h-48 bg-emerald-600 rounded-xl shadow-lg">
              <img src="/images/upload-minimalistic-svgrepo-com.svg" alt="Photo 6" className="w-full h-full object-cover rounded-xl" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className='hidden md:flex'/>
      </Carousel>
    </div>
  );
}

