import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const PageBanner = ({ bg, title, isShowLink = false, pageName }) => {
  const { t } = useTranslation();
  const bgBanner = {
    backgroundImage: `url(${bg})`,
  };
  const characters = title.split("");
  return (
    <div
      style={bgBanner}
      className="w-full mt-[75px] flex items-center justify-center xl:mt-0 xl:h-[810px] bg-cover h-[540px] "
    >
      <div className="flex flex-col gap-2 xl:gap-8 justify-center items-center">
        {isShowLink && (
          <div className="flex gap-2 items-center justify-center">
            <p className="text-line cursor-pointer">
              <Link to="/">{t("navbar.home")}</Link>
            </p>
            <div className="w-1 h-1 bg-yellow rounded-full" />
            <p className="text-white">{pageName}</p>
          </div>
        )}
        <div className="flex">
          {characters.map((item, index) => (
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="hidden text-center xl:flex heading-2 w-full text-nowrap font-roboto text-white"
            >
              {item === " " ? "\u00A0" : item}
            </motion.h2>
          ))}
        </div>

        <h2 className="heading-5  block xl:hidden w-full text-center font-roboto text-white">
          <strong>{title}</strong>
        </h2>
      </div>
    </div>
  );
};

export default PageBanner;
