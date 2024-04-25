import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
const LandingNewsItem = ({ href, image, title }) => {
  return (
    <Link asChild className="w-full" to={href}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 1.5 }}
        className="w-full shadow-lg group hover:shadow-xl min-h-[326px] bg-bg rounded-xl h-fit flex flex-col gap-3"
      >
        <div className="overflow-hidden rounded-xl">
          <img
            src={image}
            alt=""
            className="rounded-xl group-hover:scale-110 transition-transform duration-300 object-cover h-[230px] w-full "
          />
        </div>

        <div className="flex flex-col pb-4 gap-3 px-4">
          <div>
            <h2 className="big text-secondary font-bold md:heading-6 md:font-bold text-ellipsis text-wrap line-clamp-2">
              {title}
            </h2>
          </div>
          {/* <div className="w-full flex items-center justify-center">
            <Button
              asChild
              variant="link"
              size="mini"
              className="hover:bg-line/70 w-fit !no-underline"
            ></Button>
          </div> */}
        </div>
      </motion.div>
    </Link>
  );
};

export default LandingNewsItem;
