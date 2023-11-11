import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";

const NavbarBtn = () => {
  const { user, logout } = useAuth();
  // console.log(user);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <>
      {/* <Link
            to="/login"
            className="bg-[#f2a64d] text-white	 hover:bg-green-600 rounded-full py-2 px-8 uppercase font-semibold"
          >
            Login
          </Link> */}
      {user?.email ? (
        <>
          <div
            onClick={() => {
              setShowProfile(!showProfile);
            }}
            className="dropdown dropdown-end"
          >
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://i.ibb.co/vcQZhpc/1921098.png"
                  }
                />
              </div>
            </label>
            {showProfile && (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box space-y-2"
              >
                <li>
                  <Link to="/addItem">Add item</Link>
                </li>
                <li>
                  <Link to="/myAddedItems">My Added items</Link>
                </li>
                <li>
                  <Link to="/myOrder">My ordered</Link>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="bg-green-500 text-white	 hover:bg-green-600 rounded-full py-2 px-8 uppercase font-semibold flex justify-center"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
          {/* <button
            onClick={logout}
            className="bg-green-500 text-white	 hover:bg-green-600 rounded-full py-2 px-8 uppercase font-semibold"
          >
            Logout
          </button> */}
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-6 uppercase text-lg font-medium"
          >
            Login
          </Link>
          <Link
            to="/registration"
            className="border-2 dark:text-white border-green-500 hover:border-green-800 rounded-full py-2 px-6 font-medium uppercase text-lg hover:scale-105 transition-all duration-200 ease-in"
          >
            sign Up
          </Link>
        </>
      )}
    </>
  );
};

export default NavbarBtn;
