import { CartItem } from "@/types/types";
import { atom } from "recoil";

export const wishItemsState = atom<CartItem[]>({
  key: "wishItemsState",
  default: [],
});
