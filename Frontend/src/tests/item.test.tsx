import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; 
import Item from "../components/Item"; 
import { IProduct } from "../models/IProduct"; 
import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom';

const product: IProduct = {
  id: 1,
  name: "Santa clothing for Dogs",
  price: 199,
  category: "clothing",
  description: ""
};

const renderItem = () =>
  render(
    <Router>
      <Item product={product} />
    </Router>
  );

describe("Item component", () => {
  it("should render the product name and price correctly", () => {
    renderItem();
    
    // Kontrollera om produktens namn renderas korrekt
    expect(screen.getByText("Santa clothing for Dogs")).toBeInTheDocument();

    // Kontrollera om produktens pris renderas korrekt
    expect(screen.getByText("$199")).toBeInTheDocument();
  });

  it("should render a link to the correct product details page", () => {
    renderItem();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/products/1");
  });

  it("should render the add to cart button", () => {
    renderItem();

    const buttonElement = screen.getByRole("button"); // Kontrollera om knappen för att lägga till i varukorgen finns
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render the product image", () => {
    renderItem();

    const imageElement = screen.getByAltText("clothing"); // Image-komponenten använder alt-texten för att beskriva bilden, vilet är category. 
    expect(imageElement).toBeInTheDocument();
  });
});
