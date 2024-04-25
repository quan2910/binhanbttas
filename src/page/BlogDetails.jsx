import SectionLayout from "../components/SectionLayout";
import React, { useEffect, useState } from "react";
import bg from "../images/contact/ngt.jpg";
// import ReactDOM from "react-dom/client";
import MoreBlog from "../components/BlogDetail/MoreBlog";
import { Button } from "../components/ui/button";
import { Link, Navigate } from "react-router-dom";
import { SOCIAL_MEDIA } from "../components/Footer/data";
import Marquee from "react-fast-marquee";
import pako from "pako";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import zl from "../images/footer-img/zalo.png";
import qrzl from "../images/footer-img/qrzalo.jpg";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { handleGetBlog } from "../services/blogs/blogs.service";
import { formatTime } from "../utils";

const BlogDetails = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const id = location.pathname.replace("/", "");

  useEffect(() => {
    const getBlog = async () => {
      const res = await handleGetBlog(id);
      if (res) {
        const decompressedData = JSON.parse(
          pako.inflate(JSON.parse(res.data.content), {
            to: "string",
          })
        );
        res.data.content = decompressedData;
        console.log(typeof res.data.content);
        console.log(1212, res.data.content.toString());
        setData(res.data);
      } else {
        <Navigate to="*" replace />;
      }
    };
    getBlog();
  }, [id]);

  console.log(data);

  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="xl:flex hidden flex-col p-3 bg-line rounded-full gap-3 fixed z-10 top-[35%] left-[10%]"
      >
        {SOCIAL_MEDIA.map((item) => (
          <Button
            asChild
            key={item.id}
            target="_blank"
            className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg"
          >
            <Link to={item.href}>
              <img src={item.icon} alt="" width={30} height={30} />
            </Link>
          </Button>
        ))}
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-transparent px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg">
              <img src={zl} alt="" width={30} height={30} />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end" className="w-fit p-2">
            <img src={qrzl} alt="" width={200} height={200} />
          </PopoverContent>
        </Popover>
      </motion.div>
      <SectionLayout className="relative mt-[100px] gap-0 2xl:gap-0 xl:mt-[120px] xl:px-[300px]">
        <div className="relative z-[1] flex flex-col gap-3 xl:gap-5 pb-3 xl:pb-8 border-b border-line">
          <h2 className="heading-6 md:heading-3 !font-bold xl:leading-[60px] text-secondary font-mont">
            {data.title}
          </h2>
          {/* <p>{formatTime(data.timeAt.toString())}</p> */}
          <img src={data.image} alt="" className="max-w-full" />
        </div>
        <div className="relative z-[1] pt-3 xl:pt-8 flex flex-col gap-3 xl:gap-8">
          <p className="big">{data.description}</p>
          <div
            id="content"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        <div className="mt-10 xl:mt-20 border-t border-text pt-10 xl:pt-20">
          <MoreBlog />
        </div>
        <img
          src={bg}
          alt=""
          className="absolute left-0 w-full max-h-[200px] top-[20%]"
        />
        <img
          src={bg}
          alt=""
          className="absolute left-0 w-full max-h-[200px] top-[60%]"
        />
      </SectionLayout>
      <div className="flex p-3 bg-bg xl:hidden">
        <Marquee>
          {SOCIAL_MEDIA.map((item) => (
            <Button
              asChild
              key={item.id}
              target="_blank"
              className="bg-transparent mx-[85px] px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg"
            >
              <Link to={item.href}>
                <img src={item.icon} alt="" width={30} height={30} />
                {item.title}
              </Link>
            </Button>
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent mx-[85px] px-0 gap-2 text-text justify-start hover:bg-transparent rounded-lg">
                <img src={zl} alt="" width={30} height={30} />
                Zalo
              </Button>
            </PopoverTrigger>
            <PopoverContent side="bottom" align="end" className="w-fit p-2">
              <img src={qrzl} alt="" width={200} height={200} />
            </PopoverContent>
          </Popover>
        </Marquee>
      </div>
    </>
  );
};

export default BlogDetails;
