
import Header from "../components/Header";

import WishlistProducts from "../components/WishlistProducts";

const Wishlist = () => {
  return (
    <>
      <Header />
      <div className="md:px-20 px-10 pt-4 md:pt-10">
        <h1 className="md:text-3xl text-2xl mb-4 px-14">Your Wishlist</h1>
        <WishlistProducts />
      </div>
    </>
  );
};

export default Wishlist;
