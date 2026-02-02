import SectionLayout from "../../../SectionLayout";
import { Bg, BgBottom } from "../../../../assets/icons";
import React from "react";
import LandingServiceItem from "../../Comps/LandingServiceItem";
import { LANDING_SERVICE_DATA } from "./data";
import { useTranslation } from "react-i18next";
const LandingService = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-10">
      <Bg className="w-full h-10 hidden md:block" />
      <SectionLayout className="bg-background md:pb-[100px]">
        <div className="flex flex-col gap-3 md:gap-5">
          <h2 className="heading-6 text-secondary md:heading-4 font-bold md:font-bold text-center">
            {t("landing.service.title")}
          </h2>
        </div>
        <div className="relative flex items-center md:justify-center">
          {/* <div className="left-2/25 w-[2px] relative left-1/10 -translate-x-1/10 h-[450px] xl:h-[810px] bg-line" /> */}
          <div className="flex flex-col w-full justify-center items-start md:items-center gap-[55px] md:gap-20">
            {LANDING_SERVICE_DATA.map((item) => (
              <LandingServiceItem
                key={item.id}
                containerClass={item.containerClass}
                imgClass={item.imgClass}
                textClass={item.textClass}
                title={item.title}
                des={item.des}
                img={item.img}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </SectionLayout>
      <BgBottom className="w-full hidden md:block h-10 mt-[-40px]" />
    </div>
  );
};

export default LandingService;
