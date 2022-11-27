import React from "react";
import ProductCard from "../../Shared/ProductCard/ProductCard";

const ProductSectionHome = () => {
  return (
    <div className="mt-12 mb-24">
      <div className="flex flex-col">
        <h2 className="mb-4 text-2xl font-bold">All</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionHome;
