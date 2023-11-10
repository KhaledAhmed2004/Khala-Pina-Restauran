import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/Home";
import AllFoodItems from "./../pages/AllFoodItems";
import Blog from "./../pages/Blog";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Food from "../pages/Food";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoodItems",
        element: (
          <PrivateRoutes>
            <AllFoodItems></AllFoodItems>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/food/:_id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/food/${params._id}`),
        element: <Food></Food>,
      },
    ],
  },
]);

export default Routes;
