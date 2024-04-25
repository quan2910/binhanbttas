"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import MoreBlogItem from "../MoreBlogItem";
import { DATA } from "../MoreBlogItem/data";
const MoreBlog = () => {
  return (
    <div className="flex flex-col gap-3 xl:gap-5 relative z-[1]">
      <h2 className="big md:heading-5 !font-bold xl:leading-[60px] text-secondary font-mont">
        Có thể bạn sẽ thích
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent contentClass="pr-[25px]" className="gap-2">
          {DATA.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 xl:basis-1/4">
              <MoreBlogItem img={item.bg} title={item.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MoreBlog;
