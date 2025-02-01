import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
export function InputFile() {
  return (
    <div className="grid w-1/6 max-w-sm items-center gap-1.5">
      <Input id="picture" type="file"/>
    </div>
  );
}