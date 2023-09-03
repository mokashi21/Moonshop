import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainProduct from "../components/MainProduct";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

test("renders MainProduct component", () => {
  useSelector.mockReturnValue([]);

  render(<MainProduct />);
  const mainProductElement = screen.getByTestId("main-product");
  expect(mainProductElement).toBeInTheDocument();
});

test('adds item to cart when "Add to cart" button is clicked', () => {
  const mockDispatch = jest.fn();
  useDispatch.mockReturnValue(mockDispatch);

  useSelector.mockReturnValue([]);

  render(<MainProduct />);
  const addToCartButton = screen.getByText("Add to cart");
  fireEvent.click(addToCartButton);

  expect(mockDispatch).toHaveBeenCalledWith();

  expect(toast.success).toHaveBeenCalledWith("Item added to Cart", {
    position: "top-center",
  });
});
