import { createContext, useState, ReactNode } from "react";
import { IProduct } from "../models/IProduct"; // Importera IProduct

export const CartContext = createContext<{
  products: IProduct[];
  itemCount: number;
  addItemToCart: (product: IProduct) => void;
}>({
  products: [],
  itemCount: 0,
  addItemToCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]); // Använd IProduct
  const [itemCount, setItemCount] = useState<number>(0);

  const addItemToCart = (product: IProduct) => {
    setProducts((prevProducts) => {
      const productIndex = prevProducts.findIndex(p => p.id === product.id);
      if (productIndex !== -1) {
        // Om produkten finns, uppdatera mängden
        const updatedProducts = [...prevProducts];
        const existingProduct = updatedProducts[productIndex];
        existingProduct.quantity = (existingProduct.quantity ?? 0) + 1; // Säkerställ att quantity inte är undefined
        return updatedProducts;
      } else {
        // Om produkten inte finns, lägg till den med quantity 1
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  
    setItemCount((prevCount) => prevCount + 1);
  };
  

  return (
    <CartContext.Provider value={{ products, itemCount, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
