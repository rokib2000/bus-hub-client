import { useEffect, useState } from "react";

const useProductsData = (category) => {
  const [products, setProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.isProducts);
        setIsLoading(false);
      });
  }, [category]);
  return [products, isLoading];
};

export default useProductsData;
