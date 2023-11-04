import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { BsCloudMoon } from "react-icons/bs";
import NavigationLinks from "./navComponents/NavigationLinks";

// Navigation links for the menu
const Navbar = () => {
  // State for controlling the mobile menu icon
  const [menuIcon, setMenuIcon] = useState(false);
  const [darkMod, setDarkMod] = useState(false);
  return (
    <header className="max-w-7xl mx-auto bg-gray-300 text-black w-full duration-200 ease-in fixed top-0 left-0 right-0 z-10">
      <nav className="h-[4.3rem] flex justify-between items-center p-3">
        <div className="lg:flex-1">
          <Link to="/">
            <span className="font-bold text-2xl md:text-xl lg:text-2xl uppercase">
              Navbar
            </span>
          </Link>
        </div>

        {/* large screen navigation */}
        <ul className="hidden md:flex gap-4 font-semibold text-lg lg:flex-1 lg:justify-center">
          <NavigationLinks />
        </ul>
        {/* <ul className="hidden md:flex gap-4 font-semibold text-lg ">
          {navigationLinks.map((link, index) => (
            <li className="hover:text-green-500" key={index}>
              <NavLink to={link.to}>{link.label}</NavLink>
            </li>
          ))}
        </ul> */}

        <div className="hidden md:flex gap-8 items-center lg:flex-1 lg:justify-end">
          <span
            className="cursor-pointer text-xl"
            onClick={() => setDarkMod(!darkMod)}
          >
            {darkMod ? <FiSun /> : <BsCloudMoon />}
          </span>
          <Link
            to="/login"
            className="bg-yellow-300 hover:bg-yellow-400 rounded-full py-2 px-8 uppercase font-semibold"
          >
            Login
          </Link>
          <Link
            to="/registration"
            className="border-2 border-yellow-300 hover:border-yellow-800 rounded-full py-2 px-8 font-semibold uppercase"
          >
            sign Up
          </Link>
        </div>
        {/* Mobile screen navigation icon toggle */}
        <div onClick={() => setMenuIcon(!menuIcon)} className="flex md:hidden">
          {menuIcon ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        {/* Mobile screen navbar */}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[4.3rem] right-0 bottom-0 left-0 flex justify-center w-full h-screen bg-slate-500 text-white ease-in duration-300 text-center items-center"
              : "md:hidden absolute top-[4.3rem] right-0 left-[-100%] flex text-center justify-center w-full h-screen bg-slate-500 text-white ease-in duration-300 items-center"
          }
        >
          {/* Mobile screen navigation links */}
          <ul className="flex flex-col gap-3 mt-2 font-semibold text-lg ">
            <NavigationLinks />
            <Link
              to="/login"
              className="bg-yellow-300 hover:bg-yellow-400 rounded-full py-2 px-8 uppercase font-semibold"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="border-2 border-yellow-300 hover:border-yellow-800 rounded-full py-2 px-8 font-semibold uppercase"
            >
              sign Up
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
