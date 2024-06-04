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

export default function profile(second) {
  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2">
          <div className="absolute overflow-hidden md:top-40 md:left-80">
            <Avatar className="h-28 w-28 border-2 border-[color:var(--light-color)]">
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
            <CardHeader className="mt-10">
              <CardTitle className="grid">
                <span>Nilmoni Patra</span>
                <span className="text-sm">Professional Web Developer</span>
              </CardTitle>
              <CardDescription className="flex gap-1">
                <Image src={flag} alt="India" className="h-4 w-4" />
                <span className="text-xs font-semibold ">Kolkata, India</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button className="bg-blue-600 gap-1">
                <Check className="h-4 w-4" /> Following
              </Button>
              <Button variant="outline">
                <MessageSquareText className="h-4 w-4" />
              </Button>
              <Button variant="outline">
                <Ellipsis className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Tabs defaultValue="personal">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="skill">Skill</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
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
