import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import profileCover from "../../../assets/profile_cover.png";
import userPng from "../../../assets/user.png";
import flag from "../../../assets/indian_flag.png";
import { Avatar, AvatarFallback } from "@/app/ui/avatar";

import { Label } from "@/app/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Ellipsis, MessageSquareText } from "lucide-react";

import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function profile() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <div className="absolute overflow-hidden md:top-40 md:left-80">
            <Avatar className="h-28 w-28 border-2 border-white dark:border-black ">
              <Image src={userPng} alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <Card className="rounded-b-lg shadow-lg  mb-4">
            <Image
              className="w-full rounded-t-lg h-36"
              src={profileCover}
              alt="Sunset in the mountains"
            />
            <CardHeader className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <CardTitle className="grid">
                  <span>Nilmoni Patra</span>
                  <span className="text-sm">Professional Web Developer</span>
                </CardTitle>
                <CardDescription className="flex gap-1">
                  <Image src={flag} alt="India" className="h-4 w-4 " />
                  <span className="text-xs font-semibold ">Kolkata, India</span>
                </CardDescription>
              </div>
              <div className="col-end-6 col-span-2">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 gap-1 p-2">
                    <Check className="h-4 w-4" /> Following
                  </Button>

                  <Button variant="outline" className="p-2">
                    <Ellipsis className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex gap-4 cursor-pointer">
              <IoLogoGithub className="h-6 w-6" />
              <FaLinkedin className="h-6 w-6 fill-blue-600" />
              <FaFacebook className="h-6 w-6 fill-blue-600" />
              <FaInstagram className="h-6 w-6 fill-red-600" />
              <FaSquareXTwitter className="h-6 w-6 " />
            </CardContent>
          </Card>

          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-4 ">
              <TabsTrigger value="personal" className="hover:text-blue-600 ">
                Personal
              </TabsTrigger>
              <TabsTrigger value="skill" className="hover:text-blue-600">
                Skill
              </TabsTrigger>
              <TabsTrigger value="education" className="hover:text-blue-600">
                Education
              </TabsTrigger>
              <TabsTrigger value="other" className="hover:text-blue-600">
                Other
              </TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <Card>
                <CardHeader>
                  <CardTitle>Account</CardTitle>
                  <CardDescription>
                    Make changes to your account here. Click save when youre
                    done.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Pedro Duarte" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="@peduarte" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="skill">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, youll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="education">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, youll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="other">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, youll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="shadow-lg ">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-black">
                  shadcn basic card with light color
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
