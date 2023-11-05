import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { BsCloudMoon } from "react-icons/bs";
import NavigationLinks from "./navComponents/NavigationLinks";
import logo from "../../assets/Restaurant.svg";
import NavbarBtn from "./navComponents/NavbarBtn";

// Navigation links for the menu
const Navbar = () => {
  // State for controlling the mobile menu icon
  const [menuIcon, setMenuIcon] = useState(false);
  const [modeIcon, setModeIcon] = useState(false);
  const [mode, setMode] = useState("light");

  const changeTheme = () => {
    const html = document.documentElement;
    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      setModeIcon(!modeIcon);
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      setModeIcon(!modeIcon);
    }
  };

  return (
    <header className="px-[0.375rem] xl:px-0 w-full duration-200 ease-in sticky top-2 left-0 right-0">
      <nav className="h-[4.3rem] flex justify-between items-center px-6 rounded-tl-[45px] rounded-bl-[25px] rounded-tr-[40px] rounded-br-[25px] border-[2px] border-[#dddddd] bg-white dark:bg-black text-[#2f2f2f]">
        <div className="lg:flex-1 h-full justify-center">
          <Link to="/">
            <img className="h-full" src={logo} alt="" />
          </Link>
        </div>

        {/* large screen navigation */}
        <ul className="hidden md:flex gap-4 font-semibold text-lg lg:flex-1 xl:justify-center">
          <NavigationLinks />
        </ul>

        <div className="hidden md:flex gap-6 items-center lg:flex-1 lg:justify-end">
          <button className="cursor-pointer text-xl" onClick={changeTheme}>
            {modeIcon ? <FiSun /> : <BsCloudMoon />}
          </button>
          <NavbarBtn />
        </div>
        {/* Mobile screen navigation icon toggle */}
        <div
          onClick={() => setMenuIcon(!menuIcon)}
          className="flex md:hidden text-2xl"
        >
          {menuIcon ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        {/* Mobile screen navbar */}
        <div
          style={{
            boxShadow: "-5px -5px 9px #ffffff73,5px 5px 7px #5e687949",
          }}
          className={
            menuIcon
              ? "md:hidden absolute top-[4.8rem] right-0 bottom-0 left-0 flex justify-center h-[80vh] bg-[#FFFFFF1A] text-white ease-in duration-300 text-center items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px] border-2 shadow-2xl backdrop-blur-3xl w-[95%] mx-auto"
              : "md:hidden absolute top-[4.3rem] right-0 left-[-105%] flex text-center justify-center w-full h-[80vh] bg-[#f2a64d] text-white ease-in duration-300 items-center rounded-tl-[50px] rounded-bl-[65px] rounded-tr-[65px] rounded-br-[50px]"
          }
        >
          {/* Mobile screen navigation links */}
          <ul className="flex flex-col gap-3 mt-2 font-semibold text-2xl text-black">
            <NavigationLinks />
            <NavbarBtn />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
