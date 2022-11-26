import React from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const CategoryHome = () => {
  return (
    <div className="m-4 md:flex my-12">
      <div className="grow">
        <h2 className="text-3xl font-bold mb-8">Buses Category</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
          {/* card start  */}
          <div className="card  bg-base-100 shadow-xl image-full">
            <figure className="w-full">
              <img src="https://placeimg.com/400/225/arch" alt="Bus" />
            </figure>
            <div className="card-body items-center text-center align-text-bottom">
              <h2 className="card-title">Category title</h2>
              <p>Total Buses: 54</p>
            </div>
          </div>
          {/* card end  */}
        </div>
      </div>
      <div className="flex-nano ml-4">
        <h2 className="text-3xl font-bold mb-8">Advertised</h2>
        {/* <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Product Name</h2>
            <p>
              <strong>Location:</strong>bd
            </p>
            <p>
              <strong>Orginal Price:</strong>bd
            </p>
            <p>
              <strong>Resell Price:</strong>bd
            </p>
            <p>
              <strong>Year of Use:</strong>bd
            </p>
            <p>
              <strong>Selar name:</strong>bd
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div> */}
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};

export default CategoryHome;
