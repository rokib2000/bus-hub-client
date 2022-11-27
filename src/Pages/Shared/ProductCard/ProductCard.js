import React from "react";
import banner1 from "../../../assets/Banner/banner1.jpg";

const ProductCard = (props) => {
  const product = props.product;
  console.log(product);
  const { OriginalPrice, category, condition, image, location, resellPrice, title } = product;
  return (
    <div>
      <div className="">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${image})` }}></div>

          <div className="p-4">
            <p className="uppercase tracking-wide  text-lg font-bold text-gray-700 mb-2">{title}</p>
            <p className=" text-gray-900 mb-2">
              <strong>Original Price:</strong> ${OriginalPrice}
            </p>
            <p className="text-lg font-semibold text-gray-900">Resell Price: ${resellPrice}</p>
            <p className="text-gray-700 mb-2">
              <strong>Location: </strong>
              {location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Condition: </strong>
              {condition}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Category: </strong>
              {category}
            </p>
            <button className="btn btn-block btn-primary">Details</button>
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
