import React from "react";
import Banner from "../components/Landing/Session/Banner";
import LandingTour from "../components/Landing/Session/LandingTour";
import LandingService from "../components/Landing/Session/LandingService";
import LandingNews from "../components/Landing/Session/LandingNews";

const Landing = () => {
  return (
    <>
      <Banner />
      <LandingTour />
      <LandingService />
      <LandingNews />
    </>
  );
};

export default Landing;
