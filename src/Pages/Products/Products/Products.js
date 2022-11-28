import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../Shared/ProductCard/ProductCard";
import ProductsBanner from "../ProductsBanner/ProductsBanner";

const Products = () => {
  const products = useLoaderData();
  //   console.log(products);
  return (
    <>
      <ProductsBanner></ProductsBanner>
      <div className="container mx-auto my-24">
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
    </>
  );
};

export default Products;
