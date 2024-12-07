import { BrowserRouter, Route, Routes } from "react-router";
import { RecoilRoot } from "recoil";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
}

export default App;
