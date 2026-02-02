import React from "react";
import SectionLayout from "../components/SectionLayout";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import bg from "../images/contact/ngt.jpg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { SOCIAL_MEDIA } from "../components/Footer/data";
import zl from "../images/footer-img/zalo.png";
import qrzl from "../images/footer-img/qrzalo.jpg";
import FormContact from "../components/Form/FormContact";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout className="mt-[100px] lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="flex flex-col relative p-10 gap-3 lg:gap-8 w-full lg:max-w-[500px]"
      >
        <h2 className="heading-5 lg:heading-2 font-roboto text-secondary lg:font-bold font-bold">
          {t("navbar.contact")}
        </h2>
        <div className="flex flex-col gap-1 lg:gap-5">
          <p className="big lg:heading-5">+84 988 395 111</p>
          <p className="big lg:heading-5">tmdvbinhanbt@gmail.com</p>
          <div className="flex gap-4">
            {SOCIAL_MEDIA.map((item) => (
              <Button
                asChild
                key={item.id}
                target="_blank"
                className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg"
              >
                <Link to={item.href}>
                  <img src={item.icon} alt="" width={30} height={30} />
                  {item.title}
                </Link>
              </Button>
            ))}
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg">
                  <img src={zl} alt="" width={30} height={30} />
                  Zalo
                </Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="end" className="w-fit p-2">
                <img src={qrzl} alt="" width={200} height={200} />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </motion.div>
      <FormContact />
      <img
        src={bg}
        alt=""
        className="absolute left-0 w-full max-h-[200px] z-[-1] top-1/2"
      />
    </SectionLayout>
  );
};

export default Contact;
