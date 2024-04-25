import React from "react";
import LandingNewsItem from "../../Comps/LandingNewsItem";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../../../../services/blogs/blogs.service";
import LandingLoading from "../../Comps/LandingLoading";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import EmptyData from "../../../EmptyData";

const News = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          typeId: "963080764586000385",
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
          <div className="hidden lg:grid grid-cols-4 gap-[15px]">
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

export default News;
