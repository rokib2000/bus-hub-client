import React from "react";

const CategoryHomeCard = ({ category }) => {
  const { categoryName, icon } = category;
  return (
    <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full   bg-blue-50">
        <img src={icon} alt="" />
      </div>

      <div className="ml-4">
        <h2 className="font-semibold">{categoryName}</h2>
        <p className="mt-2 text-sm text-gray-500">99 bus available</p>
      </div>
    </div>
  );
};

export default CategoryHomeCard;
