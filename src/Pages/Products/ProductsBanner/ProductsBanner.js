import React from "react";
import banner5 from "../../../assets/Banner/banner5.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
        style={{ backgroundImage: `url(${banner5})` }}
      >
        <div className=" container mx-auto text-center">
          <p className="text-3xl font-bold">All Buses</p>
          <p className="text-2xl mb-10 leading-none">BUY YOUR NEXT BUS</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
