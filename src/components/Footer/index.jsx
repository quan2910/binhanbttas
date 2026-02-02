import { Bg, CrownIcon } from "../../assets/icons";
import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { SOCIAL_MEDIA } from "./data";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import zl from "../../images/footer-img/zalo.png";
import qrzl from "../../images/footer-img/qrzalo.jpg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-10 relative bottom-0">
      <Bg className="w-full h-10 hidden md:block" />
      <footer className="w-full bg-background pt-[100px] pb-[50px] xl:px-[100px] 2xl:px-[200px] flex flex-col">
        <div className="pb-10 border-b gap-10 xl:gap-0 border-line flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col px-10 gap-4 xl:border-r border-line w-full xl:max-w-[400px]">
            <Logo textClass="text-text !heading-3" containerClass="h-[100px]" />
            <p className="text-sm font-medium text-text leading-6">
              {t("footer.des")}
            </p>
          </div>
          <div className="flex gap-10 flex-col xl:flex-row">
            <div className="flex gap-10">
              <div className="flex flex-col gap-5 pl-7">
                <div className="w-[150px]">
                  <h2 className="big text-text text-center">
                    {t("footer.media")}
                  </h2>
                </div>
                <div className="flex flex-col">
                  {SOCIAL_MEDIA.map((item) => (
                    <Button
                      asChild
                      key={item.id}
                      target="_blank"
                      className="bg-transparent gap-2 text-text justify-start hover:bg-transparent rounded-lg"
                    >
                      <Link to={item.href}>
                        <img src={item.icon} alt="" width={30} height={30} />
                        {item.title}
                      </Link>
                    </Button>
                  ))}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        target="_blank"
                        className="bg-transparent gap-2 text-text justify-start hover:bg-transparent rounded-lg"
                      >
                        <img src={zl} alt="" width={30} height={30} />
                        Zalo
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      side="top"
                      align="end"
                      className="w-fit p-2"
                    >
                      <img src={qrzl} alt="" width={200} height={200} />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
            <div className="flex gap-10 justify-around">
              <div className="flex flex-col gap-5">
                <div className="w-[150px]">
                  <h2 className="big text-text text-center">
                    {t("navbar.info")}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <Button
                    asChild
                    className="bg-transparent text-text hover:bg-transparent rounded-lg"
                  >
                    <Link to="/about-us">{t("navbar.aboutUs")}</Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-transparent text-text hover:bg-transparent rounded-lg"
                  >
                    <Link to="/contact">{t("navbar.contact")}</Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-[150px]">
                  <h2 className="big text-text text-center">
                    {t("footer.feedback")}
                  </h2>
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-medium text-text py-2 text-center">
                    +84 988 395 111
                  </p>
                  <p className="text-sm font-medium text-text py-2 text-center">
                    tmdvbinhanbt@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-text flex justify-center gap-2 xl:justify-end caption-3 pt-10">
          <CrownIcon />
          ©2024BinhAnBT. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
