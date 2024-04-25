import PaginationComps from "../../components/PaginationComps";
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  handleGetBlogs,
  handleRemoveBlogs,
} from "../../services/blogs/blogs.service";
import { Button } from "../../components/ui/button";
import { formatTime } from "../../utils";
import EmptyData from "../../components/EmptyData";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../../components/ui/dialog";
import EditBlog from "../../components/Form/EditBlog";

const AdminListBlogs = ({ token }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  useEffect(() => {
    const getBlog = async () => {
      const res = await handleGetBlogs({ params: { page: page } });
      if (res) {
        setTotalPage(res.data.totalPage);
        setBlogs(res.data.list);
      }
    };
    getBlog();
  }, [page]);

  if (token === undefined) {
    return <Navigate to="/admin" replace />;
  }

  const handleRemoveBlog = async (id) => {
    const res = await handleRemoveBlogs(id);
    if (res) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };
  return (
    <div className="pt-[150px] w-full px-4 mx-auto xl:max-w-[1410px]">
      <h2 className="text-center mb-10 font-bold md:font-bold text-[#ffb3c6] heading-5 md:heading-4">
        Danh sách blogs
      </h2>
      {blogs.length > 0 ? (
        <>
          <div className="flex flex-col gap-3 mb-10">
            {blogs.map((item) => (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center w-full bg-[#ffb3c6]/20 px-4 py-3 rounded-2xl">
                <div className="flex gap-5 xl:gap-10 w-full items-center ">
                  <img
                    src={item.image}
                    alt=""
                    className="max-w-[100px] max-h-[100px] sm:max-w-[278px] sm:max-h-[182px] object-contain rounded-lg"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-0 sm:gap-2">
                      <p className="big xl:font-bold xl:heading-5">
                        {item.title}
                      </p>
                      <p className="small font-normal">
                        Loại bài viết: {item.type.name}
                      </p>
                      <p className="small xl:big">{item.description}</p>
                      <p className="small font-normal">
                        Ngày tạo: {formatTime(item.timeAt)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="bg-primary/70 hover:bg-primary sm:h-10 h-8"
                  >
                    <Link to={`/${item.id}`} className="w-full">
                      Xem chi tiết
                    </Link>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-primary/70 hover:bg-primary sm:h-10 h-8">
                        Sửa
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="">
                      <EditBlog id={item.id} />
                    </DialogContent>
                  </Dialog>
                  <Button
                    className="bg-red/70 hover:bg-red sm:h-10 h-8"
                    onClick={() => handleRemoveBlog(item.id)}
                  >
                    Xoá
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <PaginationComps setPage={setPage} totalPages={totalPages} />
        </>
      ) : (
        <EmptyData />
      )}
    </div>
  );
};

export default AdminListBlogs;
