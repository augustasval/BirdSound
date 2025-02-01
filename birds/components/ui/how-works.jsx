import { GalleryVerticalEnd } from "lucide-react"
import { Button } from "./button";
export function HowItWorks({
  className,
  ...props
}) {
  return (
    <div className="flex flex-col m-6 h-full w-min-[500]">
        <div className="flex flex-col w-full">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-gray-400 mt-20"> How it works</h1>
            </div>
        </div>
    </div>
  );
}
