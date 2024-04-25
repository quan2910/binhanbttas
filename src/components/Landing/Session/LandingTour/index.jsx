import React from "react";
import SectionLayout from "../../../SectionLayout";
import SectionHeader from "../../../SectionHeader";
import BauTrangLanding from "./bautrang";
import HonCauIslandLanding from "./honcauIsland";
import MuiNeLanding from "./muine";
import SealinkLanding from "./sealink";
import { useTranslation } from "react-i18next";
const LandingTour = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout>
      <div className="flex flex-col gap-3 md:gap-5">
        <h2 className="heading-6 text-secondary md:heading-4 font-bold md:font-bold text-center">
          {t("landing.tour.title")}
        </h2>
        <p className="text-text text-center pl-2 small md:big">
          {t("landing.tour.des")}
        </p>
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/bau-trang">{t("navbar.bauTrang")}</SectionHeader>{" "}
        <BauTrangLanding />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/honcauisland">
          {t("navbar.honCauIsland")}
        </SectionHeader>
        <HonCauIslandLanding />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/mui-ne">{t("navbar.muiNe")}</SectionHeader>{" "}
        <MuiNeLanding />
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <SectionHeader href="/sealink">{t("navbar.sealink")}</SectionHeader>{" "}
        <SealinkLanding />
      </div>
    </SectionLayout>
  );
};

export default LandingTour;
