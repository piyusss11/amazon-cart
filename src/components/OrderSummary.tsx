import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useRecoilValue } from "recoil";
import { cartItemsState } from "@/store/cartItemsState";
import { cartTotalSelector } from "@/store/cartTotalSelector";

const OrderSummary = () => {
  const items = useRecoilValue(cartItemsState);
  const totalPrice = useRecoilValue(cartTotalSelector);

  return (
    <div className="lg:w-1/4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Items ({items.length}):</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold">
              <span>Order Total:</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>
          <button className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black py-3 rounded-lg font-medium">
            <AfterBuyDialog total={totalPrice} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AfterBuyDialog = ({ total }) => {
  return (
    <Dialog>
      <DialogTrigger>Proceed to Buy</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto">Purchase Succesful</DialogTitle>
          <DialogDescription className="text-center">
            Thank you for your purchase! Your order has been succesfully
            processed
            <h1>Your total purschase if of ₹ {total}</h1>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OrderSummary;
