import { useEffect, useState } from "react";

const useProductsData = (category) => {
  const [products, setProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://bus-hub-server.vercel.app/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.isProducts);
        setIsLoading(false);
      });
  }, [category]);
  return [products, isLoading];
};

export default useProductsData;
