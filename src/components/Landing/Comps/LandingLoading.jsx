import React from "react";
import { Skeleton } from "../../../components/ui/skeleton";

const LandingLoading = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-4 gap-[15px] w-full">
      {Array.from({ length: 4 }).map(() => (
        <div className="w-full bg-bg p-2 gap-2 flex flex-col rounded-xl">
          <Skeleton className="w-full h-[230px] bg-line " />
          <Skeleton className="w-full h-[52px] bg-line" />
        </div>
      ))}
    </div>
  );
};

export default LandingLoading;
