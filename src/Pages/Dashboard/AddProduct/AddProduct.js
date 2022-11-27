import React from "react";

const AddProduct = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white p-16">
        <form>
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
                name="use"
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
