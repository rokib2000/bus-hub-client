import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Advertised = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://bus-hub-server.vercel.app/products?advertise=advertised");
      const data = await res.json();
      return data;
    },
  });

  // console.log(products);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <>
      <div className="carousel w-full">
        {products.map((product) => (
          <div id={product._id} className="carousel-item w-full">
            <div className="hero bg-base-200 my-12">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={product.image} className=" rounded-lg shadow-2xl" alt="" />
                <div>
                  <h1 className="text-2xl font-semibold">sponsored</h1>
                  <h1 className="text-5xl uppercase font-bold">{product.title}</h1>
                  <p className="py-6">{product.description}</p>
                  <Link to={`/products/${product._id}`} className="btn  btn-primary">
                    View Bus Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {products.map((product) => (
          <a href={`#${product._id}`} className="btn btn-xs"></a>
        ))}
      </div>
    </>
  );
};

export default Advertised;
