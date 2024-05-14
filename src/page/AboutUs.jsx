import React from "react";
import bgBanner from "../images/bg-header.jpg";
// import SectionLayout from "../components/SectionLayout";
import PageBanner from "../components/PageBanner";
// import bg from "../images/contact/ngt.jpg";
// import { CircleIcon } from "../assets/icons";
// import img6 from "../images/about-us/bg(6).jpg";
// import img7 from "../images/about-us/bg(7).jpg";
// import img8 from "../images/about-us/bg(8).jpg";
// import img11 from "../images/about-us/bg(11).jpg";
// import { motion } from "framer-motion";
import i1 from "../images/about-us/1.jpg";
import i2 from "../images/about-us/2.jpg";
import i3 from "../images/about-us/3.jpg";
import i4 from "../images/about-us/4.jpg";
import i5 from "../images/about-us/5.jpg";
import i6 from "../images/about-us/6.jpg";
import i7 from "../images/about-us/7.jpg";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageBanner
        isShowLink={true}
        pageName={t("about.pageName")}
        bg={bgBanner}
        title={t("about.title")}
      />
      <div className="relative w-full xl:rounded-[80px] mt-[-75px]">
        <img
          src={i1}
          alt=""
          className="w-full object-cover xl:rounded-t-[80px]"
        />
        <img src={i2} alt="" className="w-full object-cover" />
        <img src={i3} alt="" className="w-full object-cover " />
        <img src={i4} alt="" className="w-full object-cover " />
        <img src={i5} alt="" className="w-full object-cover " />
        <img src={i6} alt="" className="w-full object-cover " />
        <img
          src={i7}
          alt=""
          className="w-full object-cover xl:rounded-b-[80px]"
        />

        {/* <SectionLayout className="mt-[-100px] xl:!px-[200px] 2xl:!px-[300px] md:px-20 !gap-0 2xl:!gap-0 justify-center items-center bg-white xl:rounded-[120px]">
          <div className="relative flex flex-col gap-[60px] xl:gap-20 w-full z-20">
            <div className="flex flex-col xl:flex-row xl:gap-[60px] items-center gap-7">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img6}
                alt=""
                className="xl:w-[420px] w-full h-full xl:h-[320px] object-contain rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big w-full xl:heading-6 text-secondary"
              >
                <span className="font-varela font-outline-yellow">
                  {t("main.appName")}
                </span>{" "}
                {t("about.des1")}
              </motion.p>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-20 items-center gap-10">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img7}
                alt=""
                className="xl:min-w-[420px] w-full h-full xl:h-[320px] object-cover rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big xl:heading-6 order-last xl:text-right xl:order-first text-secondary"
              >
                {t("about.des2")}
              </motion.p>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-20 items-center gap-10">
              <motion.img
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img8}
                alt=""
                className="xl:min-w-[420px] w-full h-full xl:h-[320px] object-cover rounded-2xl border border-dashed border-text p-1"
              />
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big xl:heading-6 text-secondary"
              >
                {t("about.des3")}
              </motion.p>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-20 items-center gap-10">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src={img11}
                alt=""
                className="xl:min-w-[420px] w-full h-full xl:h-[320px] object-cover rounded-2xl border border-dashed border-text p-1"
              />
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="big xl:heading-6 flex flex-col gap-1 order-last xl:text-right xl:order-first text-secondary"
              >
                <p>{t("about.des4")}</p>
                <p>{t("about.des5")}</p>
              </motion.div>
            </div>
          </div>
        </SectionLayout>
        <img
          src={bg}
          alt=""
          className="absolute xl:rounded-[120px] left-0 w-full max-h-[200px] top-[20%]"
        />
        <img
          src={bg}
          alt=""
          className="absolute xl:rounded-[120px] left-0 w-full max-h-[200px] top-[60%]"
        />
        <CircleIcon className="hidden xl:block absolute top-[5%] right-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[70%] left-[10%]" />
        <CircleIcon className="hidden xl:block absolute top-[90%] right-[10%]" /> */}
      </div>
    </>
  );
};

export default AboutUs;
