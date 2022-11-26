import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../assets/Banner/banner1.jpg";
import banner2 from "../../../assets/Banner/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className=" container mx-auto ">
          <p className="text-3xl font-bold">THE EASIEST WAY TO </p>
          <p className="text-2xl mb-10 leading-none">BUY YOUR NEXT BUS</p>
          <Link to="" className="btn btn-primary">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
