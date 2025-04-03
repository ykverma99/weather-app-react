import { createContext, useState } from "react";

export const CartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cart, setcart] = useState(1);
  function add() {
    setcart(cart + 1);
  }
  function sub() {
    setcart((prev) => (prev == 1 ? 1 : prev - 1));
  }
  return (
    <CartContext.Provider value={{ cart, add, sub }}>
      {children}
    </CartContext.Provider>
  );
};
