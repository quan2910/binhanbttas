import React from "react";
import { useTranslation } from "react-i18next";
const EmptyData = () => {
  const { t } = useTranslation();

  return (
    <h2 className="big font-bold flex justify-center text-center">
      {t("main.empty")}
    </h2>
  );
};

export default EmptyData;
