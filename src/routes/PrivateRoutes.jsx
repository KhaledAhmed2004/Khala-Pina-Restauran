import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
