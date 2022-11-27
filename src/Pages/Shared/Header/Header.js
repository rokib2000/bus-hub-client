import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        // localStorage.removeItem("travelerToken");
        toast.success("Logout Successfully!");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link to="" className="justify-between">
          Bus Category
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </Link>
        <ul className="p-2  bg-neutral text-neutral-content">
          <li>
            <Link to="">Category 1</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  return (
    <div className="bg-neutral">
      <div className="navbar container mx-auto  text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral text-neutral-content rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} className="h-10 md:h-16 lg:h-20 " alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <Link to="/dashboard" className="btn mr-4">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn btn-primary mr-4">
                Logout
              </button>
              <label htmlFor="dashboardDrawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary mr-4">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
