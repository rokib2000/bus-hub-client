import React from "react";

const Advertised = () => {
  return (
    <div className="hero  bg-base-200 my-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://placeimg.com/260/400/arch" className=" rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">rokib</p>
          <button className="btn btn-primary">View Bus Details</button>
        </div>
      </div>
    </div>
  );
};

export default Advertised;
