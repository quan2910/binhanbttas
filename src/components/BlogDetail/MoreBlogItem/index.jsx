import React from "react";

const MoreBlogItem = ({ img, title }) => {
  const bgImg = {
    backgroundImage: `url(${img})`,
  };
  return (
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
  );
};

export default MoreBlogItem;
