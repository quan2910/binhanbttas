import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import Logo from "../Logo";
import { HamburgerIcon } from "../../assets/icons";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import Sidebar from "../Sidebar";
import SearchInput from "../SearchInput";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";
import { LIST_TOUR_MENU, LIST_SERVICE_MENU, LIST_NEWS_MENU } from "./data";
import { useTranslation } from "react-i18next";
import TransLanguage from "../TransLanguage";

const Navbar = ({ isScroll }) => {
  let location = useLocation();
  const { t } = useTranslation();

  return (
    <header
      className={`fixed top-0 z-50 w-full shadow-2xl ${
        isScroll ? "bg-white " : "bg-white/30 backdrop-blur-[25px]"
      }`}
    >
      <div className="xl:flex items-center  justify-between hidden px-[100px] 2xl:px-[200px] py-4 ">
        <Logo />
        <div className="flex">
          <Button
            asChild
            className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
              location.pathname === "/"
                ? `text-white ${isScroll ? "text-primary" : ""}`
                : ""
            } ${isScroll ? "hover:text-primary" : ""}`}
          >
            <Link to="/">{t("navbar.home")}</Link>
          </Button>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
                  location.pathname === "/sealink" ||
                  location.pathname === "/mui-ne" ||
                  location.pathname === "/bau-trang" ||
                  location.pathname === "/honcauisland"
                    ? `text-white ${isScroll ? "text-primary" : ""}`
                    : ""
                } ${isScroll ? "hover:text-primary" : ""}`}
              >
                {t("navbar.tour")}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="px-0">
              <div className="flex flex-col gap-2">
                {LIST_TOUR_MENU.map((item) => (
                  <Link
                    to={item.href}
                    className={`hover:bg-primary/60 hover:text-white h-10 flex items-center justify-center ${
                      location.pathname === item.href
                        ? "bg-primary/60 text-white"
                        : ""
                    }`}
                  >
                    {t(`navbar.${item.title}`)}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
                  location.pathname === "/tour-guide" ||
                  location.pathname === "/drivers" ||
                  location.pathname === "/career"
                    ? `text-white ${isScroll ? "text-primary" : ""}`
                    : ""
                } ${isScroll ? "hover:text-primary" : ""}`}
              >
                {t("navbar.service")}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="px-0">
              <div className="flex flex-col gap-2">
                {LIST_SERVICE_MENU.map((item) => (
                  <Link
                    to={item.href}
                    className={`hover:bg-primary/60 hover:text-white h-10 flex items-center justify-center ${
                      location.pathname === item.href
                        ? "bg-primary/60 text-white"
                        : ""
                    }`}
                  >
                    {t(`navbar.${item.title}`)}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
                  location.pathname === "/news" ||
                  location.pathname === "/real-estate" ||
                  location.pathname === "/traffic"
                    ? `text-white ${isScroll ? "text-primary" : ""}`
                    : ""
                } ${isScroll ? "hover:text-primary" : ""}`}
              >
                {t("navbar.news")}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="px-0">
              <div className="flex flex-col gap-2">
                {LIST_NEWS_MENU.map((item) => (
                  <Link
                    to={item.href}
                    className={`hover:bg-primary/60 hover:text-white h-10 flex items-center justify-center ${
                      location.pathname === item.href
                        ? "bg-primary/60 text-white"
                        : ""
                    }`}
                  >
                    {t(`navbar.${item.title}`)}
                  </Link>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
          <Button
            asChild
            className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
              location.pathname === "/about-us"
                ? `text-white ${isScroll ? "text-primary" : ""}`
                : ""
            } ${isScroll ? "hover:text-primary" : ""}`}
          >
            <Link to="/about-us">{t("navbar.aboutUs")}</Link>
          </Button>
          <Button
            asChild
            className={`rounded-lg bg-transparent hover:bg-transparent text-black hover:text-white ${
              location.pathname === "/contact" ? `text-primary` : ""
            } ${isScroll ? "hover:text-primary" : ""}`}
          >
            <Link to="/contact">{t("navbar.contact")}</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <SearchInput />
          <TransLanguage />
        </div>
      </div>
      <div className="flex xl:hidden border-b border-line items-center justify-between px-4 py-3">
        <Logo />
        <Sheet>
          <SheetTrigger>
            <HamburgerIcon />
          </SheetTrigger>
          <SheetContent side="left" className="bg-bg">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
