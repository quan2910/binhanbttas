import React from "react";
import LandingNewsItem from "../../Comps/LandingNewsItem";
import { useQuery } from "@tanstack/react-query";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import { handleGetBlogs } from "../../../../services/blogs/blogs.service";
import LandingLoading from "../../Comps/LandingLoading";
import EmptyData from "../../../EmptyData";
const Traffic = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["traffic"],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          typeId: "963080869572542465",
        },
      });
      if (res) {
        return res.data.list;
      }
    },
  });

  const newData = data?.slice(0, 4);

  let content;

  if (isLoading) {
    content = <LandingLoading />;
  }

  if (data) {
    if (data.length > 0) {
      content = (
        <>
          <div className="hidden lg:flex justify-between">
            {newData.map((item) => (
              <LandingNewsItem
                key={item.id}
                href={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
          <div className="lg:hidden">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="pr-3 gap-3 mr-2 sm:mr-3 md:mr-5">
                {newData.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <LandingNewsItem
                      key={item.id}
                      href={item.id}
                      image={item.image}
                      title={item.title}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </>
      );
    } else {
      content = <EmptyData />;
    }
  }
  return <>{content}</>;
};

export default Traffic;
