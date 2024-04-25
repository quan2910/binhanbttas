import React from "react";
import { formatTime } from "../../utils";
import { Link } from "react-router-dom";

const BlogItem = ({ img, title, des, createAt, href }) => {
  return (
    <Link
      to={`/${href}`}
      className="w-full rounded-lg flex gap-3 group xl:gap-10 relative z-10 items-center py-8 xl:py-[60px] border-b border-line"
    >
      <div className="overflow-hidden rounded-lg min-w-[100px] xl:min-w-[250px]">
        <img
          src={img}
          alt=""
          className="max-w-[100px] h-[100px] xl:min-w-[250px] xl:h-[250px] object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className=" flex flex-col xl:w-full text-ellipsis w-full h-full gap-1 xl:gap-3">
        <h2 className="xl:heading-4 font-mont heading-6 leading-6 xl:font-bold line-clamp-2 group-hover:text-primary text-secondary font-bold">
          {title}
        </h2>
        <p className="line-clamp-3 font-semibold caption-1 xl:heading-6 group-hover:text-primary heading-6">
          {des}
        </p>
        <p className="w-full caption-2 font-normal">
          Tạo ngày: {formatTime(createAt)}
        </p>
      </div>
    </Link>
  );
};

export default BlogItem;
