import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";

const NavbarBtn = () => {
  return (
    <>
      {/* <Link
            to="/login"
            className="bg-[#f2a64d] text-white	 hover:bg-green-600 rounded-full py-2 px-8 uppercase font-semibold"
          >
            Login
          </Link> */}
      <Link
        to="/login"
        className="bg-green-500 text-white	 hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
      >
        Login
      </Link>

      <Link
        to="/registration"
        className="border-2 border-green-500 hover:border-green-800 rounded-full py-2 px-6 font-medium uppercase text-lg"
      >
        sign Up
      </Link>
    </>
  );
};

export default NavbarBtn;
