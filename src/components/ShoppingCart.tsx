import { useRecoilState } from "recoil";
import { Minus, Plus } from "lucide-react";
import { cartItemsState } from "@/store/cartItemsState";
import { CartItem } from "@/types/types";

const ShoppingCart = () => {
  const [myCartItems, setMyCartItems] =
    useRecoilState<CartItem[]>(cartItemsState);
  const handleOnPlus = (product: CartItem) => {
    setMyCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleOnMinus = (product: CartItem) => {
    setMyCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const handleDelete = (product: CartItem) => {
    setMyCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };
  return (
    <div className="flex-grow lg:w-3/4">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <div className="space-y-6">
          {myCartItems.map((item) => (
            <div key={item?.id} className="flex gap-4 pb-6 border-b">
              <img
                src={item?.image}
                alt={item?.name}
                width={120}
                height={120}
                className="object-cover rounded"
              />
              <div className="flex-grow space-y-2">
                <h2 className="text-lg font-medium">{item?.name}</h2>
                {item?.inStock ? (
                  <p className="text-green-600">In stock</p>
                ) : (
                  <p className="text-red-600">Out of stock</p>
                )}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOnMinus(item)}
                    className="p-1 rounded border hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center">{item?.quantity}</span>
                  <button
                    onClick={() => handleOnPlus(item)}
                    className="p-1 rounded border hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(item)}
                    className="text-blue-600 hover:text-blue-800 hover:underline ml-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-medium">
                  ₹{item?.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
