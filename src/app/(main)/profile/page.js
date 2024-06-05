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
      <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-1">
        <div className="col-span-2">
          <div className="absolute overflow-hidden md:top-40 md:left-80  max-md:top-40 max-md:left-32">
            <Avatar className="h-28 w-28 border-2 border-white dark:border-black">
              <Image src={userPng} alt="user" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <Card className="rounded-b-lg shadow-lg mb-4">
            <Image
              className="w-full rounded-t-lg h-36"
              src={profileCover}
              alt="Sunset in the mountains"
            />
            <CardHeader className="mt-10 grid grid-cols-3 gap-4 ">
              <div className="max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:w-72">
                <CardTitle className="grid">
                  <span>Nilmoni Patra</span>
                  <span className="text-sm">Professional Web Developer</span>
                </CardTitle>
                <CardDescription className="flex gap-1">
                  <Image src={flag} alt="India" className="h-4 w-4 " />
                  <span className="text-xs font-semibold ">Kolkata, India</span>
                </CardDescription>
              </div>
              <div className="col-end-6 col-span-2 max-md:col-end-1 max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:w-72">
                <div className="flex gap-2">
                  <Button className="bg-blue-600 gap-1 p-2">
                    <Check className="h-4 w-4" /> Following
                  </Button>

                  <Button variant="outline" className="p-2 max-md:hidden">
                    <Ellipsis className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
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

        <div className="grid gap-4 grid-cols-1 max-sm:grid-cols-1">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Social</CardTitle>
              <div className="border-t"></div>
            </CardHeader>
            <CardContent className="grid grid-cols-5 place-items-stretch">
              <IoLogoGithub className="h-10 w-10" />
              <FaLinkedin className="h-10 w-10 fill-blue-600" />
              <FaFacebook className="h-10 w-10 fill-blue-600" />
              <FaInstagram className="h-10 w-10 fill-red-600" />
              <FaSquareXTwitter className="h-10 w-10 " />
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Reviews</CardTitle>
              <div className="border-t"></div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1 max-sm:grid-cols-1">
                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/7"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/9"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/93"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/15"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/45"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/70"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className=" leading-none">Jonathan Reinink</p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
