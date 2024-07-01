import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CircleChevronRight, Star } from "lucide-react";
import Image from "next/image";
import cardTop from "../../../../assets/card-top.jpg";
import PageTitle from "@/components/pageTitle";

export default function interfaceCard() {
  return (
    <>
      <PageTitle title="Cards" description="npx shadcn-ui@latest add card" />

      <p className="col-start-1 col-span-4 text-lg flex gap-1 font-semibold mb-4">
        <CircleChevronRight className="h-7 w-5" /> Basic card with basic color
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-blue-600">
                  shadcn basic card
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-blue-600">
                  shadcn basic card with shadow
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg bg-[color:var(--primary-color)] text-white">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-white">
                  shadcn basic card with primary color
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg bg-[color:var(--success-color)] text-white">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-white">
                  shadcn basic card with success color
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg bg-[color:var(--danger-color)] text-white">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-white">
                  shadcn basic card with danger color
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg bg-[color:var(--warning-color)] text-dark">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-dark">
                  shadcn basic card with warning color
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg bg-[color:var(--dark-color)] text-white">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-white">
                  shadcn basic card with dark color
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="shadow-lg bg-[color:var(--light-color)] text-black">
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

      <p className="col-start-1 col-span-4 text-lg flex gap-1 font-semibold mb-4">
        <CircleChevronRight className="h-7 w-5" /> Custom Cards
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <Card className="bg-[url('../assets/card_bg_one.svg')] bg-no-repeat bg-[length:75px_100px] bg-right-bottom">
            <CardHeader>
              <CardTitle>Card with icon bg</CardTitle>
              <CardDescription>
                <span className="text-xs font-semibold text-blue-600">
                  shadcn basic card
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent>This is card content</CardContent>
            <CardFooter>This is card footer</CardFooter>
          </Card>
        </div>

        <div>
          <Card className="bg-[url('../assets/card_bg_one.svg')] bg-no-repeat bg-[length:200px_190px] bg-right-bottom">
            <div className="backdrop-filter backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Card with image bg</CardTitle>
                <CardDescription>
                  <span className="text-xs font-semibold text-blue-600">
                    shadcn basic card
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>This is card content</CardContent>
              <CardFooter>This is card footer</CardFooter>
            </div>
          </Card>
        </div>
      </div>

      <p className="col-start-1 col-span-4 text-lg flex gap-1 font-semibold mb-4">
        <CircleChevronRight className="h-7 w-5" /> Custom Cards With Image
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-4">
        <Card className="flex max-w-full w-full lg:max-w-full lg:flex md:max-w-full md:flex shadows-lg">
          <Image
            className="h-auto w-48 lg:h-auto lg:w-48 md:h-auto md:w-48 flex-none bg-cover rounded-l-lg text-center overflow-hidden"
            src={cardTop}
            alt=""
          />
          <div className="flex flex-col justify-between leading-normal">
            <CardHeader>
              <CardTitle>Card with left side image</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  src={cardTop}
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </CardFooter>
          </div>
        </Card>

        <Card className="flex max-w-full lg:max-w-full lg:flex md:max-w-full md:flex shadows-lg">
          <div className="flex flex-col justify-between leading-normal">
            <CardHeader>
              <CardTitle>Card with right side image</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </CardContent>
            <CardFooter>
              <div className="flex items-center">
                <Image
                  className="w-10 h-10 rounded-full mr-4"
                  src={cardTop}
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </CardFooter>
          </div>
          <Image
            className="h-auto w-48 lg:h-auto lg:w-48 md:h-auto md:w-48 flex-none bg-cover rounded-r-lg   text-center overflow-hidden"
            src={cardTop}
            alt=""
          />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <Card className="rounded-b-lg">
          <Image
            className="w-full rounded-t-lg"
            src={cardTop}
            alt="Sunset in the mountains"
          />
          <CardHeader>
            <CardTitle>Card with top image</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </CardContent>
          <CardFooter>
            <div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2  mb-2">
                #winter
              </span>
            </div>
          </CardFooter>
        </Card>

        <Card className="rounded-b-lg">
          <CardHeader>
            <CardTitle>Card with bottom image</CardTitle>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </CardContent>
          <CardFooter>
            <div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2  mb-2">
                #winter
              </span>
            </div>
          </CardFooter>
          <Image
            className="w-full rounded-b-lg"
            src={cardTop}
            alt="Sunset in the mountains"
          />
        </Card>
      </div>

      <p className="col-start-1 col-span-4 text-lg flex gap-1 font-semibold mb-4">
        <CircleChevronRight className="h-7 w-5" /> Custom Cards With ribbon
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="relative overflow-hidden">
          <Card className="shadow-lg">
            <div className="absolute transform origin-center rotate-45 bg-green-600 text-center text-xs font-semibold p-1 text-white right-[-60px] top-[12px]  w-[170px]">
              20% off
            </div>
            <CardHeader>
              <CardTitle>Card with top right ribbon</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </CardContent>
          </Card>
        </div>

        <div className="relative overflow-hidden">
          <Card className="shadow-xl">
            <div className="absolute left-0 top-0 h-16 w-16">
              <div className="absolute transform  -rotate-45 bg-green-600 text-center text-xs font-semibold p-1 text-white right-[-46px] top-[12px]  w-[170px]">
                20% off
              </div>
            </div>
            <CardHeader>
              <CardTitle>Card with top left ribbon</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <Card className="shadow-xl">
            <div className="absolute top-0 right-0 p-2 bg-yellow-500  transform -translate-y-2 rounded-tr-lg  shadow-[0_-4px_10px_rgba(0,0,0,0.3)]">
              <Star className="h-4 w-4 fill-red-500 text-red-600" />
            </div>
            <CardHeader>
              <CardTitle>Card with top left ribbon</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
