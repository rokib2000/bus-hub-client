import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product = props.product;
  console.log(product);
  const { OriginalPrice, category, condition, image, location, resellPrice, title, useYear, _id } = product;
  return (
    <div>
      <div className="">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${image})` }}></div>

          <div className="p-4">
            {/* list start  */}

            <div className=" flex items-center justify-center ">
              <div className="max-w-4xl   w-full  ">
                <div className="p-4 border-b">
                  <h2 className="text-xl ">{title}</h2>
                  <p className="text-sm text-gray-600">Category: {category}</p>
                  <p className="text-sm text-gray-600">Location: {location}</p>
                </div>
                <div>
                  <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2">
                    <p className="text-gray-600">Original Price</p>
                    <p>${OriginalPrice}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2">
                    <p className="text-gray-600">Resell Price</p>
                    <p>${resellPrice}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2">
                    <p className="text-gray-600">Condition</p>
                    <p>{condition}</p>
                  </div>
                  <div className="md:grid md:grid-cols-2  md:space-y-0 space-y-1 p-2">
                    <p className="text-gray-600">Use</p>
                    <p>{useYear} Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* list end  */}

            <Link to={`/products/${_id}`} className="btn btn-block btn-primary">
              Details
            </Link>
          </div>
          {/* <div className="px-4 pt-2 pb-2 border-t border-gray-300 ">
            <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Seller</div>
            <div className="flex items-center pt-2">
              <div
                className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                style={{ backgroundImage: `url(${banner1})` }}
              ></div>
              <div>
                <p className=" text-gray-900">
                  Name
                  <span className="badge badge-xs badge-primary h-5  w-5 p-0 rounded-full">
                    <img src="https://i.postimg.cc/mkVtQkwh/white-tick-removebg-preview.png" className="h-3" alt="" />
                  </span>
                </p>
                <p className="text-sm text-gray-700">Date</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
