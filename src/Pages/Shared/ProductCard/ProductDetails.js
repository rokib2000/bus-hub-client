import React from "react";
import { useLoaderData } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    OriginalPrice,
    category,
    condition,
    date,
    description,
    image,
    location,
    mobile,
    resellPrice,
    sellerEmail,
    sellerImage,
    sellerName,
    title,
    useYear,
  } = product;

  const postDate = dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");

  return (
    <div className="container mx-auto my-14">
      <div className="w-[90%] md:w-2/3 lg:w-1/2 mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-cover bg-center h-96 p-4" style={{ backgroundImage: `url(${image})` }}></div>

          <div className="p-4">
            {/* list start  */}

            <div class=" flex items-center justify-center ">
              <div class="max-w-4xl   w-full  ">
                <div class="p-4 border-b">
                  <h2 class="text-2xl ">{title}</h2>
                  <p class="text-sm text-gray-600">Category: {category}</p>
                  <p class="text-sm text-gray-600">Location: {location}</p>
                </div>
                <div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Original Price</p>
                    <p>${OriginalPrice}</p>
                  </div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Resell Price</p>
                    <p>${resellPrice}</p>
                  </div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Condition</p>
                    <p>{condition}</p>
                  </div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Use</p>
                    <p>{useYear} Years</p>
                  </div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Description</p>
                    <p>{description}</p>
                  </div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Seller Phone</p>
                    <p>{mobile}</p>
                  </div>
                  <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
                    <p class="text-gray-600">Seller Email</p>
                    <p>{sellerEmail}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* list end  */}
          </div>
          <div className="px-4 pt-2 pb-2  border-gray-300 ">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Seller</div>
                <div className="flex items-center pt-2">
                  <div
                    className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                    style={{ backgroundImage: `url(${sellerImage})` }}
                  ></div>
                  <div>
                    <p className=" text-gray-900 text-lg font-semibold">
                      {sellerName}
                      <span className="badge badge-xs badge-primary h-5  w-5 p-0 rounded-full absolute -mt-2 ">
                        <img
                          src="https://i.postimg.cc/mkVtQkwh/white-tick-removebg-preview.png"
                          className="h-3"
                          alt=""
                        />
                      </span>
                    </p>
                    <p className="text-sm text-gray-700">{postDate}</p>
                  </div>
                </div>
              </div>
              <div>
                <button className="btn  btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
