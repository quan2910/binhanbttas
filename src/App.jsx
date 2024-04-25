import "./index.css";
import Cookies from "js-cookie";
import { Route, Routes } from "react-router-dom";
import Landing from "./page/Landing";
import Layout from "./page/Layout";
import Tours from "./page/Tours/sealink";
import News from "./page/News/News";
import Traffic from "./page/News/Traffic";
import RealEstate from "./page/News/RealEstate";
import AdminLogin from "./page/Admin/AdminLogin";
import Contact from "./page/Contact";
import AboutUs from "./page/AboutUs";
import BlogDetails from "./page/BlogDetails";
import NotFound from "./page/NotFound";
import AdminLayout from "./page/Admin/AdminLayout";
import AdminHome from "./page/Admin/AdminHome";
import AdminCheckContact from "./page/Admin/AdminCheckContact";
import AdminListBlogs from "./page/Admin/AdminListBlogs";
import Search from "./page/Search";
import Career from "./page/Service/career";
import Drivers from "./page/Service/drivers";
import TourGuide from "./page/Service/tourGuide";
import Sealink from "./page/Tours/sealink";
import MuiNe from "./page/Tours/muiNe";
import BauTrang from "./page/Tours/bauTrang";
import HonCauIsland from "./page/Tours/honCauIsland";

function App() {
  const token = Cookies.get("token");
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<Landing />} />
        <Route path=":id" element={<BlogDetails />} />
        <Route path="career" element={<Career />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="tour-guide" element={<TourGuide />} />
        <Route path="sealink" element={<Sealink />} />
        <Route path="mui-ne" element={<MuiNe />} />
        <Route path="bau-trang" element={<BauTrang />} />
        <Route path="honcauisland" element={<HonCauIsland />} />
        <Route path="results" element={<Search />} />
        <Route path="news" element={<News />} />
        <Route path="traffic" element={<Traffic />} />
        <Route path="real-estate" element={<RealEstate />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="admin" element={<AdminLayout />}>
        <Route
          path=""
          element={token === undefined ? <AdminLogin /> : <AdminHome />}
        />
        <Route
          path="check-contact"
          element={<AdminCheckContact token={token} />}
        />
        <Route path="list-blog" element={<AdminListBlogs token={token} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
