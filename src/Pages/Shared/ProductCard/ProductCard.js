import React from "react";
import banner1 from "../../../assets/Banner/banner1.jpg";

const ProductCard = () => {
  return (
    <div>
      <div class="">
        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
          <div class="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${banner1})` }}></div>

          <div class="p-4">
            <p class="uppercase tracking-wide  text-lg font-bold text-gray-700 mb-2">Detached house</p>
            <p class=" text-gray-900 mb-2">
              <strong>Original Price:</strong> $750,000
            </p>
            <p class="text-lg font-semibold text-gray-900">Resell Price: $750,000</p>
            <p class="text-gray-700 mb-2">
              <strong>Location: </strong>Bangladesh
            </p>
            <p class="text-gray-700 mb-2">
              <strong>Condition: </strong>Bangladesh
            </p>
            <button className="btn btn-block btn-primary">Details</button>
          </div>
          {/* <div class="px-4 pt-2 pb-2 border-t border-gray-300 ">
            <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Seller</div>
            <div class="flex items-center pt-2">
              <div
                class="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                style={{ backgroundImage: `url(${banner1})` }}
              ></div>
              <div>
                <p class=" text-gray-900">
                  Name
                  <span className="badge badge-xs badge-primary h-5  w-5 p-0 rounded-full">
                    <img src="https://i.postimg.cc/mkVtQkwh/white-tick-removebg-preview.png" className="h-3" alt="" />
                  </span>
                </p>
                <p class="text-sm text-gray-700">Date</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;