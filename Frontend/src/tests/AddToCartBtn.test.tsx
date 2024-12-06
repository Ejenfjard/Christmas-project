import { render, screen, fireEvent } from "@testing-library/react";
import AddToCartBtn from "../components/UI/AddToCartBtn"; 
import { CartContext } from "../context/CartContext"; 
import { describe, vi, it, expect } from "vitest";
import { IProduct } from "../models/IProduct";


const mockAddItemToCart = vi.fn();


// Hjälpfunktion för rendering av AddToCartBtn
const renderAddToCartBtn = (productProps: IProduct, showText = false) => {
  return render(
    <CartContext.Provider value={{ products: [], itemCount: 0, addItemToCart: mockAddItemToCart }}>
      <AddToCartBtn product={productProps} $showText={showText} />
    </CartContext.Provider>
  );
};

describe("AddToCartBtn", () => {

  it("should render Add to Cart button", () => {
    renderAddToCartBtn(
      { id: 1, name: "Test Product", price: 100, description: "A great product", category: "Electronics"  } 
    );

    // Kolla om knappen finns i dokumentet
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call addItemToCart when clicked", () => {
    const product: IProduct = {
      id: 1,
      name: "Test Product",
      price: 100,
      description: "A great product for testing purposes",
      category: "Electronics",
    };
  
    renderAddToCartBtn(product);
  
    // Klicka på knappen
    fireEvent.click(screen.getByRole("button"));
  
    // Kontrollera om mockAddItemToCart blev anropad med rätt produkt
    expect(mockAddItemToCart).toHaveBeenCalledWith(product);
  });
  

  it("should display 'Add to Cart' text when $showText is true", () => {
    renderAddToCartBtn(
      {
          id: 1, name: "Test Product", price: 100,
          description: "",
          category: ""
      },
      true 
    );

    // Kolla om texten 'Add to Cart' finns
    expect(screen.getByText("Add to Cart")).toBeInTheDocument();
  });

  it("should not display 'Add to Cart' text when $showText is false", () => {
    renderAddToCartBtn(
      {
          id: 1, name: "Test Product", price: 100,
          description: "",
          category: ""
      },
      false 
    );

    // Kolla att texten 'Add to Cart' inte finns
    expect(screen.queryByText("Add to Cart")).not.toBeInTheDocument();
  });
});