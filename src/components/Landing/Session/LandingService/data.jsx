import img from "../../../../images/landing/bth.jpg";
import { v4 as uuidv4 } from "uuid";

export const LANDING_SERVICE_DATA = [
  {
    id: uuidv4(),
    title: "driver",
    des: "des1",
    img: img,
    containerClass: "",
    imgClass: "",
    textClass: "",
    href: "/drivers",
  },
  {
    id: uuidv4(),
    title: "tourGuide",
    des: "des2",
    img: img,
    containerClass: "",
    imgClass: "md:order-2",
    textClass: "md:order-1 items-end",
    href: "/tour-guide",
  },
  {
    id: uuidv4(),
    title: "career",
    des: "des3",
    img: img,
    containerClass: "",
    imgClass: "",
    textClass: "",
    href: "/career",
  },
];
