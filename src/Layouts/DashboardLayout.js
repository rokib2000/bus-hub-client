import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";
import Loading from "../Pages/Shared/Loading/Loading";

const DashboardLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);

  if (loading || isAdminLoading || isSellerLoading || isBuyerLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="dashboardDrawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboardDrawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/seller">Seller</Link>
                </li>
                <li>
                  <Link to="/dashboard/buyer">Buyer</Link>
                </li>
                <li>
                  <Link to="/dashboard/reportedItem">Reported Item</Link>
                </li>
              </>
            )}

            {isBuyer && (
              <>
                <li>
                  <Link to="/dashboard/myOrder">My Order</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/addProduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>

                <li>
                  <Link to="/dashboard/orders">Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
