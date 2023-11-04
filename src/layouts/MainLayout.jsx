import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-36">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
