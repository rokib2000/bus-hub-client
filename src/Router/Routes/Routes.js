import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Buyer from "../../Pages/Dashboard/Buyer/Buyer";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem";
import Seller from "../../Pages/Dashboard/Seller/Seller";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Products from "../../Pages/Products/Products/Products";
import ProductDetails from "../../Pages/Shared/ProductDetails/ProductDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`http://localhost:5000/products`),
      },
      // {
      //   path: "/products/:category",
      //   element: <Products></Products>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/products/${params.category}`),
      // },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/addProduct",
            element: <AddProduct></AddProduct>,
          },
          {
            path: "/dashboard/seller",
            element: <Seller></Seller>,
          },
          {
            path: "/dashboard/buyer",
            element: <Buyer></Buyer>,
          },
          {
            path: "/dashboard/reportedItem",
            element: <ReportedItem></ReportedItem>,
          },
          {
            path: "/dashboard/myOrder",
            element: <MyOrder></MyOrder>,
          },
          {
            path: "/dashboard/orders",
            element: <Orders></Orders>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default router;
