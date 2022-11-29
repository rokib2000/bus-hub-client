import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import Buyer from "../../Pages/Dashboard/Buyer/Buyer";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Orders from "../../Pages/Dashboard/Orders/Orders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedItem from "../../Pages/Dashboard/ReportedItem/ReportedItem";
import Seller from "../../Pages/Dashboard/Seller/Seller";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Page404 from "../../Pages/Page404/Page404";
import Products from "../../Pages/Products/Products/Products";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        errorElement: <ErrorPage></ErrorPage>,
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
          {
            path: "/dashboard/myProducts",
            element: (
              <SellerRoute>
                <MyProducts></MyProducts>
              </SellerRoute>
            ),
          },
          {
            path: "/dashboard/payment/:id",
            element: (
              <BuyerRoute>
                <Payment></Payment>
              </BuyerRoute>
            ),
            loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`),
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
