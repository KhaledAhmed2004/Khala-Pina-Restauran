import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "./../pages/Home";
import AllFoodItems from "./../pages/AllFoodItems";
import Blog from "./../pages/Blog";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Food from "../pages/Food";
import Ordering from "../pages/Ordering";
import AddItem from "../pages/AddItem";
import MyAddedItems from "../pages/MyAddedItems";
import Update from "../pages/Update";
import Error from "../pages/Error";
import MyOrder from "../pages/MyOrder";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/myAddedItems/${params.id}`),
      },
      {
        path: "/addItem",
        element: <AddItem></AddItem>,
      },
      {
        path: "/myAddedItems",
        element: <MyAddedItems></MyAddedItems>,
      },
      {
        path: "/myOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/order/:_id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/order/${params._id}`),
        element: (
          <PrivateRoutes>
            <Ordering></Ordering>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
