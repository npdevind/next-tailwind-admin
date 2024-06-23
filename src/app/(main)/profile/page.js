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
import {
  BadgeCheck,
  Check,
  Ellipsis,
  MessageSquareText,
  Star,
} from "lucide-react";

import { FaFacebook, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

export default function profile() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 max-md:grid-cols-1">
        <div className="col-span-2 relative">
          <div className="absolute  md:top-20 md:left-10  max-md:top-20 max-md:left-28">
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
            <CardHeader className="mt-10 grid grid-cols-2 gap-4 ">
              <div className="max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:w-72">
                <CardTitle className="grid">
                  <span className="flex gap-1">
                    Nilmoni Patra
                    <BadgeCheck className="fill-blue-600 stroke-white-600 text-white" />
                  </span>
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

          <Card className="shadow-lg">
            <CardContent className="mt-4">
              <div className="flex flex-col">
                <div className="font-semibold">About Me</div>
                <div className="border-t-2 mb-2"></div>
                <div className="text-sm">
                  I am a passionate and skilled web developer with extensive
                  experience in creating dynamic and user-friendly websites and
                  web applications. Proficient in a variety of programming
                  languages including HTML, CSS, JavaScript, and backend
                  technologies such as Python, PHP, and Node.js, I excels at
                  both frontend and backend development. With a keen eye for
                  design and a deep understanding of user experience principles,
                  I collaborates effectively with designers and content creators
                  to bring visually appealing and highly functional digital
                  experiences to life. Committed to staying at the forefront of
                  technological advancements, I continuously hones his skills to
                  ensure that his projects are secure, scalable, and optimized
                  for performance. When not coding, I enjoys contributing to
                  open-source projects and participating in web development
                  communities, where he shares knowledge and learns from fellow
                  developers.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="gap-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">Social</CardTitle>
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
              <CardTitle className="text-lg">Reviews</CardTitle>
              <div className="border-t"></div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 grid-cols-1">
                <div className="flex items-center">
                  <Image
                    className="w-10 h-10 rounded-full mr-4"
                    src="https://avatar.iran.liara.run/public/7"
                    width="100"
                    height="100"
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="text-sm">
                    <p className="leading-none mb-1">Jonathan Reinink</p>
                    <div className="flex flex-row gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4  stroke-yellow-500" />
                    </div>
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
                    <p className="leading-none mb-1">Sonak Sunil</p>
                    <div className="flex flex-row gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                    </div>
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
                    <p className=" leading-none mb-1">Dr. PC Sean</p>
                    <div className="flex flex-row gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4  stroke-yellow-500" />
                      <Star className="h-4 w-4  stroke-yellow-500" />
                    </div>
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
                    <p className=" leading-none mb-1">Jonh June</p>
                    <div className="flex flex-row gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4  stroke-yellow-500" />
                    </div>
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
                    <p className=" leading-none mb-1">Kanbiro Jhon</p>
                    <div className="flex flex-row gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                    </div>
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
                    <p className=" leading-none mb-1">Gark Reinink</p>
                    <div className="flex flex-row gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                      <Star className="h-4 w-4  stroke-yellow-500" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
          <div className="flex gap-2">
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Social</CardTitle>
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
                  <CardTitle className="text-lg">Reviews</CardTitle>
                  <div className="border-t"></div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 grid-cols-1">
                    <div className="flex items-center">
                      <Image
                        className="w-10 h-10 rounded-full mr-4"
                        src="https://avatar.iran.liara.run/public/7"
                        width="100"
                        height="100"
                        alt="Avatar of Jonathan Reinink"
                      />
                      <div className="text-sm">
                        <p className="leading-none mb-1">Jonathan Reinink</p>
                        <div className="flex flex-row gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4  stroke-yellow-500" />
                        </div>
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
                        <p className="leading-none mb-1">Sonak Sunil</p>
                        <div className="flex flex-row gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                        </div>
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
                        <p className=" leading-none mb-1">Dr. PC Sean</p>
                        <div className="flex flex-row gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4  stroke-yellow-500" />
                          <Star className="h-4 w-4  stroke-yellow-500" />
                        </div>
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
                        <p className=" leading-none mb-1">Jonh June</p>
                        <div className="flex flex-row gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4  stroke-yellow-500" />
                        </div>
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
                        <p className=" leading-none mb-1">Kanbiro Jhon</p>
                        <div className="flex flex-row gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                        </div>
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
                        <p className=" leading-none mb-1">Gark Reinink</p>
                        <div className="flex flex-row gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-500" />
                          <Star className="h-4 w-4  stroke-yellow-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardContent></CardContent>
              </Card>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
