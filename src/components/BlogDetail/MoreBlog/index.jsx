"use client";

import React, { useEffect, useState } from "react";
import { handleGetBlogs } from "../../../services/blogs/blogs.service";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/carousel";
import MoreBlogItem from "../MoreBlogItem";
const MoreBlog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlog = async () => {
      const res = await handleGetBlogs();
      if (res) {
        setBlogs(res.data.list);
      }
    };
    getBlog();
  }, []);

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
          {blogs.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2 xl:basis-1/4">
              <MoreBlogItem
                image={item.image}
                id={item.id}
                title={item.title}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default MoreBlog;
