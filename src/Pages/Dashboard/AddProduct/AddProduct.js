import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const imageHostKey = process.env.REACT_APP_IMAGEBB_KEY;

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  //   console.log(categories);

  const handleProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const location = form.location.value;
    const useYear = form.useYear.value;
    const OriginalPrice = form.OriginalPrice.value;
    const resellPrice = form.resellPrice.value;
    const condition = form.condition.value;
    const mobile = form.mobile.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.files[0];

    // seller info
    const sellerName = user?.displayName;
    const sellerImage = user?.photoURL;
    const sellerEmail = user?.email;

    const date = new Date();

    // image upload
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          // console.log(imageData.data.url);
          const image = imageData.data.url;

          const product = {
            title,
            location,
            useYear,
            OriginalPrice,
            resellPrice,
            condition,
            mobile,
            category,
            description,
            image,
            sellerName,
            sellerEmail,
            sellerImage,
            date,
          };

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                toast.success("Post Added Successfully");
                form.reset();
              }
            });
        }
      });

    console.log(title, location, useYear, OriginalPrice, resellPrice, condition, mobile, category, description, image);
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <h2 className="text-3xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleProduct}>
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Product Title"
              required
            />
          </div>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 ">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Location"
                required
              />
            </div>
            <div>
              <label htmlFor="use" className="block mb-2 text-sm font-medium text-gray-900 ">
                Use of year
              </label>
              <input
                type="number"
                id="use"
                name="useYear"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="07"
                required
              />
            </div>
            <div>
              <label htmlFor="OriginalPrice" className="block mb-2 text-sm font-medium text-gray-900 ">
                Original Price
              </label>
              <input
                type="number"
                id="OriginalPrice"
                name="OriginalPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="999"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 ">
                Resell Price
              </label>
              <input
                type="number"
                id="price"
                name="resellPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="888"
                required
              />
            </div>
            <div>
              <label htmlFor="Condition" className="block mb-2 text-sm font-medium text-gray-900 ">
                Condition
              </label>
              <input
                type="text"
                id="Condition"
                name="condition"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Good"
                required
              />
            </div>
            <div>
              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium text-gray-900 ">
                mobile Number
              </label>
              <input
                type="number"
                id="mobileNumber"
                name="mobile"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="01788991122"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            >
              {categories.map((category) => (
                <option key={category._id} value={category?.categoryName}>
                  {category?.categoryName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 ">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="Description" className="block mb-2 text-sm font-medium text-gray-900 ">
              Description
            </label>
            <textarea
              type="text"
              id="Description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Description"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
