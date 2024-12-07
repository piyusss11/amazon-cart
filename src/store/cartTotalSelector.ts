import { selector } from "recoil";
import { cartItemsState } from "./cartItemsState";

export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: ({ get }) => {
    const items = get(cartItemsState);
    let total = 0;
    items.map((item) =>
      item.quantity === 1
        ? (total = total + item.price)
        : (total = total + item.quantity * item.price)
    );
    return total;
  },
});
