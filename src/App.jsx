import Navbar from "./components/pages/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/pages/Shop";
import Shopcategory from "./components/pages/Shopcategory";
import Product from "./components/pages/Product";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import men_banner from "./Assets/banner_mens.png";
import women_banner from "./Assets/banner_women.png";
import kid_banner from "./Assets/banner_kids.png";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<Shopcategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<Shopcategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kid_banner} category="kid" />}
          />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
