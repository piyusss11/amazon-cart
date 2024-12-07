import ShoppingCart from "../components/ShoppingCart";
import Header from "../components/Header";
import React from "react";
import OrderSummary from "../components/OrderSummary";

const CartPage = () => {
  return (
    <>
      <Header />
      <div className="h-full w-full bg-gray-300">
        <main className="container mx-auto py-8 px-4 flex-grow">
          <div className="flex flex-col lg:flex-row gap-8">
            <ShoppingCart />
            <OrderSummary />
          </div>
        </main>
      </div>
    </>
  );
};

export default CartPage;
