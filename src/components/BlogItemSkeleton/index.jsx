import React from "react";
import { Skeleton } from "../ui/skeleton";

const BlogItemSkeleton = () => {
  return (
    <div className="w-full flex gap-3 xl:gap-10 relative z-10 items-center py-8 xl:py-[60px] border-b border-line ">
      <Skeleton className="bg-line w-[100px] h-[100px] xl:min-w-[176px] xl:h-[176px]" />
      <Skeleton className="bg-line w-full h-[100px] xl:w-full xl:h-[176px]" />
    </div>
  );
};

export default BlogItemSkeleton;
