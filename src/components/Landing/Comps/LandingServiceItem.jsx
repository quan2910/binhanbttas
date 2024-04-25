import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LandingServiceItem = ({
  containerClass,
  imgClass,
  textClass,
  title,
  des,
  img,
  href,
}) => {
  const { t } = useTranslation();

  return (
    <Link
      to={href}
      className={`flex xl:max-w-[700px] xl:gap-10 items-center gap-5 ${containerClass}`}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className={`p-2 rounded-full bg-line ${imgClass}`}
      >
        <img
          src={img}
          alt=""
          className="max-w-[100px] xl:max-w-[200px] rounded-full"
        />
      </motion.div>
      <div className={`flex gap-2 xl:gap-4 flex-col ${textClass}`}>
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="heading-6 xl:heading-4 xl:leading-9 text-secondary"
        >
          <strong>{t(`landing.service.${title}`)}</strong>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="big xl:heading-5 font-normal"
        >
          {t(`landing.service.${des}`)}
        </motion.p>
      </div>
    </Link>
  );
};

export default LandingServiceItem;
