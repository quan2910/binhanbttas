import React from "react";
import { Link } from "react-router-dom";
const MoreBlogItem = ({ id, image, title }) => {
  const bgImg = {
    backgroundImage: `url(${image})`,
  };
  return (
    <Link to={`/${id}`}>
      <div
        style={bgImg}
        className="bg-cover w-full max-h-full aspect-square flex items-end rounded-xl"
      >
        <div className="bg-black/50 rounded-b-xl w-full p-3">
          <h2 className="heading-6 line-clamp-3 text-ellipsis font-bold text-white">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default MoreBlogItem;
