import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Grip } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/ui/avatar";

export default function Social(second) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-0 bg-transparent hover:border-0 hover:bg-transparent"
          >
            <Grip className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="p-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="...">
              <Avatar>
                <AvatarImage
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="...">
              <Avatar>
                <AvatarImage
                  src="https://i.pinimg.com/originals/8e/72/f7/8e72f7331b652b842b0c271ab144d332.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="...">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
