import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Components/Pages/Shop";
import ShopCategory from "./Components/Pages/ShopCategory";
import Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSignUp from "./Components/Pages/LoginSignUp";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const banner =
    "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
