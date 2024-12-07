import { CartItem } from "@/types/types";
import { atom } from "recoil";

export const cartItemsState = atom<CartItem[]>({
  key: "cartItemsState",
  default: [],
});
