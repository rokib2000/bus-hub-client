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
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
            element: (
              <SellerRoute>
                <AddProduct></AddProduct>
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/seller",
            element: (
              <AdminRoute>
                <Seller></Seller>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/buyer",
            element: (
              <AdminRoute>
                <Buyer></Buyer>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/reportedItem",
            element: (
              <AdminRoute>
                <ReportedItem></ReportedItem>
              </AdminRoute>
            ),
          },
          {
            path: "/dashboard/myOrder",
            element: (
              <BuyerRoute>
                <MyOrder></MyOrder>
              </BuyerRoute>
            ),
          },
          {
            path: "/dashboard/orders",
            element: (
              <SellerRoute>
                <Orders></Orders>
              </SellerRoute>
            ),
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
