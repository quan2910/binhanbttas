import React from "react";
import Logo from "../Logo";
import logo from "../../images/logo.png";
import SearchInput from "../SearchInput";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { ArrowRightIcon } from "../../assets/icons";
import { SheetClose } from "../ui/sheet";
import {
  LIST_NEWS_MENU,
  LIST_SERVICE_MENU,
  LIST_TOUR_MENU,
} from "../Navbar/data";
import { useTranslation } from "react-i18next";
import TransLanguage from "../TransLanguage";

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-line flex flex-col gap-5 pb-3">
        <Link to="/">
          <SheetClose>
            <div className={`flex gap-1 items-center`}>
              <img src={logo} alt="logo" width={50} height={50} className="" />
              <h2
                className={`heading-5 mt-1 text-black font-varela font-outline-black-2 font-semibold `}
              >
                {t("main.appName")}
              </h2>
            </div>
          </SheetClose>
        </Link>
        <SearchInput />
        <div>
          <TransLanguage />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <SheetClose asChild>
          <Button
            asChild
            variant="ghost"
            className="text-lg text-black justify-between border-b border-line"
          >
            <Link to="/">
              {t("navbar.home")}
              <ArrowRightIcon className="max-w-[14px] max-h-[14px]" />
            </Link>
          </Button>
        </SheetClose>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-black">
              {t("navbar.tour")}
            </AccordionTrigger>
            {LIST_TOUR_MENU.map((item) => (
              <AccordionContent>
                <SheetClose asChild>
                  <Link to={item.href}>{t(`navbar.${item.title}`)}</Link>
                </SheetClose>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-black">
              {t("navbar.service")}
            </AccordionTrigger>
            {LIST_SERVICE_MENU.map((item) => (
              <AccordionContent>
                <SheetClose asChild>
                  <Link to={item.href}>{t(`navbar.${item.title}`)}</Link>
                </SheetClose>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-black">
              {t("navbar.news")}
            </AccordionTrigger>
            {LIST_NEWS_MENU.map((item) => (
              <AccordionContent>
                <SheetClose asChild>
                  <Link to={item.href}>{t(`navbar.${item.title}`)}</Link>
                </SheetClose>
              </AccordionContent>
            ))}
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-black">
              {t("navbar.aboutUs")}
            </AccordionTrigger>
            <AccordionContent>
              <SheetClose asChild>
                <Link to="/about-us">{t("navbar.info")}</Link>
              </SheetClose>
            </AccordionContent>
            <AccordionContent>
              <SheetClose asChild>
                <Link to="/contact">{t("navbar.contact")}</Link>
              </SheetClose>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
