import { LoginForm } from "@/components/login-form";
import { InputFile } from "@/components/InputFile";
import { Welcome } from "@/components/ui/welcome";
import { GalleryVerticalEnd } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="w-full h-screen  p-4 ">
      <div className="w-full max-w-4xl mx-auto w-min-screen">
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center h-full min-w-[500]" style={{ position: 'sticky', top: 0 }}>
          <div className="flex flex-col items-center">
            <Welcome />
          </div>
        </div>
      </div>
      <div style={{ height: '200vh' }}></div> {/* Add extra height to make the page scrollable */}
    </div>
  );
}

