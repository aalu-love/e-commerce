import { useContext, useState } from "react";
import logo from "../../../public/vite.svg";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();
  const [activeMenu, setMenu] = useState(
    location.pathname.split("/")[1] || "shop"
  );
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="shopper" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop {activeMenu === "shop" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men{activeMenu === "men" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/women">Women{activeMenu === "women" && <hr />}</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids{activeMenu === "kids" && <hr />}</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img className="logo" src={logo} alt="shopper" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
