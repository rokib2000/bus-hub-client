import React, { useEffect, useState } from "react";
import BrandSection from "../../Shared/BrandSection/BrandSection";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Advertised from "../Advertised/Advertised";
import Banner from "../Banner/Banner";
import CategoryHome from "../CategoryHome/CategoryHome";
import ProductSectionHome from "../ProductSectionHome/ProductSectionHome";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetch(`https://bus-hub-server.vercel.app/products?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const productsData = data.slice(0, 8);
        setProducts(productsData);
      });
  }, [categoryName]);

  const handleCategoryData = (categoryName) => {
    setCategoryName(categoryName);
  };

  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <Advertised></Advertised>
        <CategoryHome handleCategoryData={handleCategoryData} />
        <ProductSectionHome products={products} categoryName={categoryName} />
        <BrandSection />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
