import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto font-jost">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
