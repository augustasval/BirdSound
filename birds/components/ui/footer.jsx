import { GalleryVerticalEnd } from "lucide-react"
import { Input } from "./input";
import { Separator } from "./separator";
export function Footer({
  className,
  ...props
}) {
  return (
    <div className="flex flex-col items-center  mt-20 bg-gray-[200] w-full">
      <Separator className="my-4 " />
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">What the birds limited.</h4>
        <p className="text-sm text-muted-foreground">
          Changing the way you interact with birds.
        </p>
      </div>
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
    
  );
}
