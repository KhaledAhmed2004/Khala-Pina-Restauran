import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto font-jost">
      <Navbar />
      <div className="mt-5">
        <div className="h-screen"></div>
        <div className="bg-lime-50 h-screen"></div>
        <div className="bg-[#DDDDDD] h-screen"></div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
