import { useContext } from "react";
import { CartContext } from "../context/CartContext";

console.log("CartContext:", CartContext);

export const useCart = () => {
  return useContext(CartContext);
};

