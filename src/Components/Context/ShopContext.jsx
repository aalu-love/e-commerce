import { createContext, useState } from "react";
import { defaultValueProducts } from "../../defaultValue";

export const ShopContext = createContext(null);
const data = defaultValueProducts();

export const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCart] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        total += itemInfo.new_price * cartItems[item];
      }
    }
    return total;
  };
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const contextValue = {
    all_product: data,
    cart: cartItems,
    removeFromCart,
    addToCart,
    getTotalAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
