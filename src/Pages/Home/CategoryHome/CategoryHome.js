import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";
import CategoryHomeCard from "./CategoryHomeCard";

const CategoryHome = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  console.log(categories);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-12">
      <div className="flex flex-col">
        <h2 className="mb-4 text-2xl font-bold">Categories</h2>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryHomeCard key={category._id} category={category}></CategoryHomeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
