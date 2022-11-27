import React, { useEffect, useState } from "react";
import BrandSection from "../../Shared/BrandSection/BrandSection";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import CategoryHome from "../CategoryHome/CategoryHome";
import ProductSectionHome from "../ProductSectionHome/ProductSectionHome";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/products?category=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data);
      });
  }, [categoryName]);

  const handleCategoryData = (categoryName) => {
    setCategoryName(categoryName);
    // fetch(`http://localhost:5000/products?category=${categoryName}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setProducts(data);
    //   });
  };

  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <CategoryHome handleCategoryData={handleCategoryData} />
        <ProductSectionHome products={products} categoryName={categoryName} />
        <BrandSection />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
