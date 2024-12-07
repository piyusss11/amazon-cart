import React from "react";
import Header from "../components/Header";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="md:px-20 px-10 pt-4 md:pt-10">
        <h1 className="md:text-3xl text-2xl mb-4 px-14">Products</h1>
        <Products />
      </div>
    </div>
  );
};

export default Home;
