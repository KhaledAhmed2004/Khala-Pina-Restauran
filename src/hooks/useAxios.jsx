import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  // baseURL: "http://localhost:5000/api/v1",
  // baseURL: "https://b8-a11-server-side-inky.vercel.app",
  baseURL: "https://b8-a11-server-side-inky.vercel.app/api/v1",
  // baseURL:
  //   "https://b8-a11-server-side-jwoxu9vvj-khaled-ahmed-s-projects.vercel.app",

  withCredentials: true,
});

const useAxios = () => {
  const { logout } = useAuth();
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        logout();
      }
      console.log("form axios: ", error);
    }
  );
  return instance;
};

export default useAxios;
