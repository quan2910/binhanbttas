import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Logo = ({ containerClass, textClass }) => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      <div className={`flex gap-1 items-center ${containerClass}`}>
        <img src={logo} alt="logo" width={50} height={50} className="" />
        <h2
          className={`heading-5 mt-1 text-black font-varela font-outline-black-2 font-semibold ${textClass}`}
        >
          {t("main.appName")}
        </h2>
      </div>
    </Link>
  );
};

export default Logo;
