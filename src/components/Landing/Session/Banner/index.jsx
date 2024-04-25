import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { BANNER } from "./data";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const { t } = useTranslation();

  return (
    <div className="w-full mt-[75px] xl:mt-0 xl:h-[810px] h-[540px] relative ">
      <div className="w-full h-full relative hidden lg:block">
        <iframe
          className="w-full xl:h-[810px] h-[540px] "
          src="https://www.youtube.com/embed/XMWxvKWst3o?si=-SqNnRZyZ1ko2WpH&amp;?&playlist=XMWxvKWst3o&loop=1&autoplay=1&mute=1&controls=0&rel=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <div className="absolute w-full h-full bg-transparent top-0 left-0 z-[1]" />
      </div>
      <div className="block lg:hidden">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="w-full">
            {BANNER.map((item) => (
              <CarouselItem key={item.id} className="w-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full xl:h-[900px] h-[500px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="absolute w-full flex flex-col gap-2 xl:gap-8 top-[40%] z-[2] justify-center items-center -translate-x-1/2 left-1/2 translate-2-1/2">
        <h2 className="block heading-5 font-bold xl:font-bold xl:heading-2 w-[308px] xl:w-full text-center font-roboto text-white">
          {t("landing.banner.title")}
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
          asChild
        >
          <Button
            asChild
            className="xl:px-[50px] xl:h-[65px] xl:mt-5 xl:py-7 xl:text-xl px-[20px] py-4 bg-primary hover:bg-primary"
          >
            <Link to="/contact">{t("landing.banner.contact")}</Link>
          </Button>
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
