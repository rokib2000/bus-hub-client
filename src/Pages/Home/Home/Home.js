import React from "react";
import Banner from "../Banner/Banner";
import CategoryHome from "../CategoryHome/CategoryHome";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <CategoryHome />
      </div>
    </div>
  );
};

export default Home;
