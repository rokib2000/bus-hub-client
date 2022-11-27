import React from "react";
import BrandSection from "../../Shared/BrandSection/BrandSection";
import ContactUs from "../../Shared/ContactUs/ContactUs";
import Loading from "../../Shared/Loading/Loading";
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
        <BrandSection />
        <ContactUs />
      </div>
    </div>
  );
};

export default Home;
