import React from "react";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
const LandingTourItem = ({ image, title, description, href, price }) => {
  return (
    <Link className="w-full" asChild to={href}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ translateY: -8 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="min-w-full min-h-[346px] ease-in-out hover:shadow-lg gap-2 p-2 bg-bg rounded-xl flex flex-col"
      >
        <img
          src={image}
          alt=""
          className="rounded-xl w-full object-cover h-[230px]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="heading-6 font-bold text-secondary truncate text-ellipsis text-nowrap">
            {title}
          </h2>
          <p className="big text-green line-clamp-3 text-wrap truncate ">
            {price || 0} VND
          </p>
          <p className="big font-normal text-text line-clamp-2 text-ellipsis text-wrap truncate ">
            {description}
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            asChild
            variant="link"
            size="mini"
            className="hover:bg-line/70 w-fit !no-underline"
          ></Button>
        </div>
      </motion.div>
    </Link>
  );
};

export default LandingTourItem;
