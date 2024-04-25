import React, { useState } from "react";

import { HeartIcon, WhiteHeartIcon } from "../../assets/icons";

const HeartIconComponent = ({ className, containerClass }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleMouseEnter = () => {
    if (!isClicked) {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isClicked) {
      setIsHovered(false);
    }
  };
  return (
    <div
      className={`flex min-h-7 min-w-7 items-center justify-center rounded-full ${
        isHovered ? "bg-red" : "bg-white"
      } ${containerClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {isHovered || isClicked ? (
        <WhiteHeartIcon className={className} />
      ) : (
        <HeartIcon className={className} />
      )}
    </div>
  );
};

export default HeartIconComponent;
