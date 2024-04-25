import React from "react";
import Cookies from "js-cookie";
import Logo from "../../Logo";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const token = Cookies.get("token");
  const handleRemoveToken = () => {
    Cookies.remove("token");
    window.location.reload();
  };
  return (
    <div className="flex border-b z-10 shadow-xl fixed w-full items-center justify-between bg-bg px-4 xl:px-[200px] py-3">
      <Logo />
      {token === undefined ? (
        ""
      ) : (
        <div className="flex gap-3 items-center">
          <Button asChild variant="ghost" className="">
            <Link to="/admin">Viết Blog</Link>
          </Button>
          <Button asChild variant="ghost" className="">
            <Link to="/admin/list-blog">Danh sách Blogs</Link>
          </Button>
          <Button asChild variant="ghost" className="">
            <Link to="/admin/check-contact">Check Phản hồi</Link>
          </Button>
          <Button onClick={handleRemoveToken} variant="ghost" className="">
            Đăng xuất
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
