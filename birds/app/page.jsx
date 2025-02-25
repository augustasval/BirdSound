import { LoginForm } from "@/components/login-form";
import { InputFile } from "@/components/InputFile";
import { Welcome } from "@/components/ui/welcome";
import { GalleryVerticalEnd } from "lucide-react";
import { HowItWorks } from "@/components/ui/how-works";
import { Separator } from "@/components/ui/separator";
import { Footer } from "@/components/ui/footer";
export default function LoginPage() {
  return (
    <div className="w-full h-full bg-teal-50 min-h-screen">
      <div className="w-full max-w-3xl mx-auto w-min-screen  " >
        <div className=" rounded-sm  text-center h-full min-w-[500]" style={{ position: 'sticky', top: 0 }}>
          <div className="flex flex-col items-center">
            <Welcome/>  
           { /*<Footer/>*/}
           
          </div>
        </div>
      </div>
    </div>
  );
}

