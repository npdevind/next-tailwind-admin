import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import profileCover from "../../../assets/profile_cover.png";
import { Avatar, AvatarFallback } from "@/app/ui/avatar";
import userPng from "../../../assets/user.png";
import { CiHome } from "react-icons/ci";

export default function profile() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 gap-4">
        <div>
          <Card className="rounded-b-lg shadow-lg">
            <Image
              className="w-screen rounded-t-lg h-20"
              src={profileCover}
              alt="Sunset in the mountains"
            />
            {/* <Image
              src={userPng}
              alt="user"
              className="rounded-full h-20 w-20  border-2 border-white dark:border-black relative bottom-10 left-20"
            /> */}

            <CardHeader>
              <CardTitle className="grid">
                <span className="flex gap-1">
                  Nilmoni Patra
                  <BadgeCheck className="fill-blue-600 stroke-white-600 text-white dark:text-black" />
                </span>
                <span className="text-sm">Professional Web Developer</span>
              </CardTitle>
              {/* <CardDescription className="flex gap-1">
                <span className="text-xs font-semibold ">Kolkata, India</span>
              </CardDescription> */}
            </CardHeader>
            <CardContent className="grid grid-rows-1 gap-4">
              <div className="flex">
                <CiHome /> Kolkata, India
              </div>
              <div>1</div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3 lg:col-span-3">dd</div>
      </div>
    </>
  );
}
