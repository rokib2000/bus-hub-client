import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const ReportedItem = () => {
  const { user, loading } = useContext(AuthContext);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://bus-hub-server.vercel.app/products/reported?status=reported&email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("busHubToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  // console.log(products);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure? you want to delete");
    if (proceed) {
      fetch(`https://bus-hub-server.vercel.app/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Product delete successfully");
            refetch();
          }
        });
    }
  };

  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-[90%] mx-auto my-12">
      <h1 className="text-4xl font-semibold my-6">Reported Item</h1>

      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Photo
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Product Name
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Category
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Location
            </th>
            <th className="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr className="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <div className="avatar">
                  <div className="w-16 rounded-lg">
                    <img src={product.image} alt="" />
                  </div>
                </div>
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Product Name
                </span>
                {product.title}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Category
                </span>
                {product.category}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Location
                </span>
                {product.location}
              </td>
              <td className="w-full lg:w-auto p-3 text-gray-800 text-center border border-b  block lg:table-cell relative lg:static">
                <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                  Actions
                </span>
                <button
                  onClick={() => handleDelete(product._id)}
                  className="text-blue-400 hover:text-blue-600 underline pl-6"
                >
                  Remove Product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportedItem;
