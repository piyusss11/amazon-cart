import { Link } from "react-router";

const Header = () => {
  return (
    <nav className="flex md:text-xl  justify-between md:px-20 px-10 py-4 text-white bg-black ">
      <div className="flex md:gap-8 gap-4 justify-center items-center  ">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg> */}

        <Link to={"/"}>
          {" "}
          <h1>Amazon</h1>
        </Link>
      </div>
      <div className="flex md:gap-12 gap-4 justify-center items-center">
        <Link to={"/wishlist"}>
        <h1>Wishlist</h1>
        </Link>

       <Link to={"/cart"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
        </svg>
            </Link>
      </div>
    </nav>
  );
};

export default Header;
