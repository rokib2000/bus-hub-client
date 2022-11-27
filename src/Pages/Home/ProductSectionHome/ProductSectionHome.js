import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ProductSectionHome = ({ products, categoryName }) => {
  return (
    <div className="mt-12 mb-24">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="mb-4 text-2xl font-bold">{categoryName ? categoryName : "All"}</h2>
          {/* <Link className="mb-4 text-xl font-semibold link link-primary">See All</Link> */}
        </div>
        {products.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => {
              return <ProductCard key={product._id} product={product}></ProductCard>;
            })}
          </div>
        ) : (
          <h5 className="text-2xl text-center my-12 font-semibold">No data found</h5>
        )}
      </div>
    </div>
  );
};

export default ProductSectionHome;
