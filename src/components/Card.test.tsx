import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";
import { IProduct } from "../types/product";
import { CATEGORIES_BACKGROUND, CARD_IMG } from "../utils/constant";

// Mock product data
const mockProduct: IProduct = {
  id: 1,
  title: "Test Product",
  category: "Epic",
  price: 10.5,
  isFavorite: true,
  createdAt: 1600481938000,
  theme: "Light",
  tier: "Basic",
  imageId: 18,
  author: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "Male",
    avatar: "/path/to/avatar.jpg",
    onlineStatus: "active",
  },
};

describe("Card Component", () => {
  it("renders the product title, category, and price", () => {
    render(<Card product={mockProduct} />);

    // Check for title
    const titleElement = screen.getByText(/Test Product/i);
    expect(titleElement).toBeInTheDocument();

    // Check for category tag
    const categoryElement = screen.getByText(/Epic/i);
    expect(categoryElement).toBeInTheDocument();

    // Check for price
    const priceElement = screen.getByText(/10.5 ETH/i);
    expect(priceElement).toBeInTheDocument();
  });

  it("renders the author information", () => {
    render(<Card product={mockProduct} />);

    // Check for author name
    const authorName = screen.getByText(/John Doe/i);
    expect(authorName).toBeInTheDocument();
  });

  it("applies the correct category background", () => {
    render(<Card product={mockProduct} />);

    const imgContainer = screen.getByRole("test-bg");
    expect(imgContainer).toHaveStyle(
      `background: ${CATEGORIES_BACKGROUND.EPIC}`
    );
  });

  it("renders the correct favorite icon", () => {
    const { rerender } = render(<Card product={mockProduct} />);

    // Check for filled heart when isFavorite is true
    expect(screen.getByTitle("filled").parentElement).toHaveClass(
      "card__favorite"
    );

    // Check for outlined heart when isFavorite is false
    rerender(<Card product={{ ...mockProduct, isFavorite: false }} />);
    expect(screen.getByTitle("outlined").parentElement).toHaveClass(
      "card__favorite"
    );
  });

  it("renders the product image correctly", () => {
    render(<Card product={mockProduct} />);

    const productImage = screen.getByAltText("product-img");
    expect(productImage).toHaveAttribute("src", CARD_IMG[mockProduct.imageId]);
  });
});
