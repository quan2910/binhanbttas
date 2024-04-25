import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import News from "./news";
import Traffic from "./traffic";
import RealEstate from "./realEstate";
import { useTranslation } from "react-i18next";
const LandingNews = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout>
      <div className="flex flex-col gap-3 md:gap-5">
        <h2 className="heading-6 text-secondary md:heading-4 font-bold md:font-bold text-center">
          {t("landing.news.title")}
        </h2>
        <p className="text-text text-center pl-2 small md:big">
          {t("landing.news.des")}
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/traffic">{t("navbar.traffic")}</SectionHeader>{" "}
        <Traffic />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/real-estate">
          {t("navbar.realEstate")}
        </SectionHeader>
        <RealEstate />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/news">{t("landing.news.news")}</SectionHeader>{" "}
        <News />
      </div>
    </SectionLayout>
  );
};

export default LandingNews;
