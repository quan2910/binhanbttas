import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { MessengerIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const Layout = () => {
  const [isScroll, setIsScroll] = useState(false);
  // const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop === 0) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true);
  //   } else if (scrolled <= 300) {
  //     setVisible(false);
  //   }
  // };
  // window.addEventListener("scroll", toggleVisible);
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className="relative">
      <Navbar isScroll={isScroll} />
      <div className="">
        <Outlet />
      </div>
      {/* {visible && (
        <Button
        variant="ghost"
        className="bottom-[5%] rounded-full px-3 h-10 z-10 bg-line hover:bg-text hover:text-white fixed right-[5%]"
        onClick={scrollToTop}
        >
          <ArrowRightIcon className="-rotate-90" />
        </Button> */}
      <Link
        asChild
        target="_blank"
        to="https://www.messenger.com/t/103250567926228/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0"
      >
        <Button
          variant="ghost"
          className="bottom-[5%] rounded-full px-3 min-h-[48px] z-10 hover:bg-primary hover:scale-110 transform transition duration-300 ease-in-out bg-primary fixed right-[5%]"
        >
          <MessengerIcon className="w-6 h-6 lg:w-8 lg:h-8 rounded-full" />
          <span className="block absolute top-0 left-0 bg-black/20 w-full h-full rounded-full animate-ping animate-infinite duration-2000 z-[-1]" />
          <span className="block absolute w-full h-full rounded-full animate-ping animate-infinite bg-black/20 duration-2000 animate-delay-500 z-[-1]" />
        </Button>
      </Link>
      {/* )} */}
      <Footer />
    </div>
  );
};

export default Layout;
