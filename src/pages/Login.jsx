import { Link } from "react-router-dom";
import img from "../assets/authImage.png";
import { PiHandWaving } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="md:h-[630px] my-5 md:my-0 flex justify-center items-center">
      <div className="bg-green-100 h-[500px] md:h-[600px] w-[80%] mx-auto flex rounded-3xl">
        <div className="flex-1 h-full p-5 md:p-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold flex gap-2 justify-center items-center">
            Welcome Back <PiHandWaving />
          </h2>
          <p className="font-light">
            Enter the information you entered while registering.
          </p>
          <form className="w-full">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-9 uppercase text-lg font-medium  flex justify-center mx-auto w-full"
              >
                Login
              </button>
            </div>
          </form>
          <button
            to="/registration"
            className="flex justify-center hover:scale-105 transition-all duration-200 ease-in mt-5 border-2 dark:text-white border-green-500 hover:border-green-800 rounded-full py-2 px-6 font-medium uppercase text-2xl w-full"
          >
            <FcGoogle />
          </button>
          <p className="flex justify-center gap-1">
            Don't have an Account?
            <Link to="/registration" className="font-medium text-blue-500">
              Sign-Up
            </Link>
          </p>
        </div>
        <div className="flex-1  justify-center items-center p-5 hidden md:flex">
          <img src={img} className="h-[90%] object-cover rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Login;
