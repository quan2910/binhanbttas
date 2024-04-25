import React, { useState } from "react";
import PaginationComps from "../components/PaginationComps";
import { useQuery } from "@tanstack/react-query";
import { handleGetBlogs } from "../services/blogs/blogs.service";
import { useSearchParams } from "react-router-dom";
import { Skeleton } from "../components/ui/skeleton";
import BlogItem from "../components/BlogItem";
import { useTranslation } from "react-i18next";
const Search = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, _] = useSearchParams();
  const searchValue = searchParams.get("search");

  const { data, isLoading } = useQuery({
    queryKey: ["search", page, searchValue],
    queryFn: async () => {
      const res = await handleGetBlogs({
        params: {
          title: searchValue,
          page: page,
        },
      });
      setTotalPages(res.data.totalPages);
      return res.data.list;
    },
  });

  console.log(data);

  let content;

  if (isLoading) {
    content = (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 8 }).map(() => (
          <div className="w-full bg-bg p-2 gap-2 flex flex-col rounded-xl">
            <Skeleton className="w-full h-[230px] bg-line " />
            <Skeleton className="w-full h-[52px] bg-line" />
          </div>
        ))}
      </div>
    );
  }

  if (data) {
    if (data.length > 0) {
      content = (
        <div className="flex flex-col gap-8">
          <div className="w-full flex flex-col gap-5">
            {data.map((item) => (
              <BlogItem
                img={item.image}
                title={item.title}
                des={item.description}
                createAt={item.timeAt}
                href={item.id}
              />
            ))}
          </div>
          <PaginationComps setPage={setPage} totalPages={totalPages} />
        </div>
      );
    } else {
      content = (
        <h2 className="heading-5 font-bold text-center">{t("main.empty")}</h2>
      );
    }
  }

  return (
    <div className="pt-[150px] w-full px-4 mx-auto xl:max-w-[1410px]">
      <h2 className=" mb-10 font-bold md:font-bold small md:big">
        {t("search")} {searchValue}
      </h2>
      <div className="flex flex-col gap-3 mb-10">{content}</div>
    </div>
  );
};

export default Search;
