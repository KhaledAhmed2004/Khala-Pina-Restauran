import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../assets/authImage.png";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import useAxios from "../hooks/useAxios";

const Registration = () => {
  const axios = useAxios();
  const location = useLocation();
  const navigate = useNavigate();
  const { createUser, loginWithGoogle } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.error("Google login error:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const toastId = toast.loading("Registration in progress");

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", { id: toastId });
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter", {
        id: toastId,
      });
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter", {
        id: toastId,
      });
    } else if (!/\d/.test(password)) {
      toast.error("Password must contain at least one digit", { id: toastId });
    } else if (!/[\W_]/.test(password)) {
      toast.error("Password must contain at least one special character", {
        id: toastId,
      });
    } else {
      try {
        const result = await createUser(email, password);
        await updateProfile(result.user, {
          displayName: name,
          photoURL: url,
        });
        axios.post("/userInformation", { name, url, password, email });
        toast.success("Registration Successful", { id: toastId });
        navigate(location?.state ? location?.state : "/");
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error(`Registration failed: ${error.code}`, { id: toastId });
      }
    }
  };

  return (
    <div className="md:h-[720px] my-5 md:my-0 flex justify-center items-center">
      <div className="bg-green-100 h-[650px] md:h-[690px]  w-[80%] mx-auto flex rounded-3xl">
        <div className="flex-1 h-full p-5 md:p-10 space-y-4">
          <h2 className="text-4xl md:text-5xl font-semibold">Registration</h2>
          <p className="font-light">
            Enter your information for registering on our site.
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                id="name"
                onBlur={(e) => setName(e.target.value)}
                placeholder="Username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                id="email"
                onBlur={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                onBlur={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="url" className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                id="url"
                onBlur={(e) => setUrl(e.target.value)}
                placeholder="URL"
                className="input input-bordered"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-500 dark:bg-[#ff7a00] transition-all duration-150 ease-in hover:scale-105 dark:hover:bg-[#ea9839] text-white hover:bg-green-600 rounded-full py-2 px-9 uppercase text-lg font-medium  flex justify-center mx-auto w-full"
              >
                Register
              </button>
            </div>
          </form>
          <button
            onClick={handleLogin}
            className="flex justify-center hover:scale-105 transition-all duration-200 ease-in mt-5 border-2 dark:text-white border-green-500 hover:border-green-800 rounded-full py-2 px-6 font-medium uppercase text-2xl w-full"
          >
            <FcGoogle />
          </button>
          <p className="flex justify-center gap-1">
            Already have an Account?
            <Link to="/login" className="font-medium text-blue-500">
              Login
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

export default Registration;
