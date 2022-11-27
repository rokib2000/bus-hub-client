import React from "react";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import CategoryHome from "../CategoryHome/CategoryHome";
import ProductSectionHome from "../ProductSectionHome/ProductSectionHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <CategoryHome />
        <ProductSectionHome />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
