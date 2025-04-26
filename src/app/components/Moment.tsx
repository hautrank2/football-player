import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import { MOMENT_DATA } from "~/data/moments";

function Moment({}) {
  const data = MOMENT_DATA;
  return (
    <Carousel className="mx-auto max-w-sm md:max-w-xl lg:max-w-4xl">
      <CarouselContent>
        {data.map((item) => (
          <CarouselItem key={item.id}>
            <div className="p-1">
              <p className="text-3xl font-normal mb-2">{item.title}</p>
              <p className="text-xl font-light mb-4">{item.date}</p>
              <p className="text-lg font-extralight tracking-wide leading-6 ps-4 ms-4 border-s border-foreground/70 text-foreground/70">
                {item.description}
              </p>
              <div className="relative img-wrapper max-h-[400px] w-full h-[400px] mx-auto mt-4">
                <Image
                  src={item.image}
                  alt="img-c1"
                  fill
                  className="rounded object-contain"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

export default Moment;
