import { cartItemsState } from "@/store/cartItemsState";
import { wishItemsState } from "@/store/wishItemsState";
import { CartItem } from "@/types/types";
import { useRecoilValue, useSetRecoilState } from "recoil";

const WishlistProducts = () => {
  const mywishlistItems = useRecoilValue<CartItem[]>(wishItemsState);
  const setCartItems = useSetRecoilState(cartItemsState);
  const addToCart = (product: CartItem) => {
    setCartItems((prev) => [...prev, product]);
  };
  return (
    <div className="flex gap-4 flex-wrap justify-center items-center">
      {mywishlistItems.map((item) => (
        <div
          key={item.id}
          className="w-[300px] rounded p-4 border-[1px] border-gray-400"
        >
          <img
            className="object-cover rounded h-[177px]"
            src={item.image}
            width={260}
            height={240}
            alt="img of the product"
          />
          <h1 className="font-semibold tracking-tighter h-12 overflow-hidden my-2">
            {item.name}
          </h1>
          <div className="flex items-center gap-2 my-2">
            <h1>₹{item.price}</h1>{" "}
            {item.inStock ? (
              <p className="text-green-600">In stock</p>
            ) : (
              <p className="text-red-600">Out of stock</p>
            )}
          </div>
          <div className="flex gap-2 ">
            <button
              disabled={!item.inStock}
              onClick={() => addToCart(item)}
              className="bg-green-300 rounded w-1/2 py-2"
            >
              Cart +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishlistProducts;
