import AdminNavbar from "../../components/Admin/AdminNavbar";
import React from "react";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div className="w-full h-screen">
      <AdminNavbar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
