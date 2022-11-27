import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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
            <li>
              <Link>Add a post</Link>
            </li>
            <li>
              <Link>Seller</Link>
            </li>
            <li>
              <Link>Buyer</Link>
            </li>
            <li>
              <Link>My Order</Link>
            </li>
            <li>
              <Link>Reported Item</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
