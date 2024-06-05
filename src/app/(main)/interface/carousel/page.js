"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import p1 from "../../../../assets/carousel/1.jpg";
import p2 from "../../../../assets/carousel/2.jpg";
import p3 from "../../../../assets/carousel/3.jpg";
import p4 from "../../../../assets/carousel/4.jpg";
import p5 from "../../../../assets/carousel/5.jpg";
import p6 from "../../../../assets/carousel/6.jpg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselPage() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const arrayI = [p1, p2, p3, p4, p5, p6];

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold md:text-2xl">Carousel</h1>
        <span className="opacity-55">npx shadcn-ui@latest add carousel</span>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center h-56">
        <Carousel className="w-full max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-blue-600">
                shadcn basic carousel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CarouselContent>
                {arrayI.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image src={item} alt="" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </CardContent>
          </Card>
        </Carousel>

        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-lg"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-blue-600">
                Use the orientation prop to set the orientation of the carousel.
              </CardTitle>
            </CardHeader>
            <CarouselContent className="-mt-1 h-[200px]">
              {arrayI.map((item, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Image src={item} alt="" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Card>
        </Carousel>

        <Carousel
          className="w-full max-w-lg"
          opts={{
            align: "start",
          }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-blue-600">
                To set the size of the items, you can use the basis utility
                class on the CarouselItem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CarouselContent>
                {arrayI.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <Image src={item} alt="" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </CardContent>
          </Card>
        </Carousel>

        <Carousel className="w-full max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-blue-600">
                To set the spacing between the items, we use a pl-[VALUE]
                utility on the CarouselItem and a negative -ml-[VALUE] on the
                CarouselContent.
              </CardTitle>
            </CardHeader>
            <CarouselContent className="-ml-1">
              {arrayI.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Image src={item} alt="" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Card>
        </Carousel>

        <Carousel setApi={setApi} className="w-full max-w-lg">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-blue-600">
                You can listen to events using the api instance from setApi.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CarouselContent>
                {arrayI.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image src={item} alt="" />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
              <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
              </div>
            </CardContent>
          </Card>
        </Carousel>

        <Carousel
          setApi={setApi}
          className="w-full max-w-lg"
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-sm text-blue-600">
                You can use the plugins prop to add plugins to the carousel.
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CarouselContent>
                {arrayI.map((item, index) => (
                  <CarouselItem key={index}>
                    <Image src={item} alt="" />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
              <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
              </div>
            </CardContent>
          </Card>
        </Carousel>
      </div>
    </>
  );
}
