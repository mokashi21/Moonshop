import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartMain from "../pages/CartMain";
import { remove } from "../components/Redux/CartSlice";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

const mockDispatch = jest.fn();
useDispatch.mockReturnValue(mockDispatch);

const mockCartItems = [
  { id: 1, title: "Product 1", price: 10, image: "product1.jpg" },
  { id: 2, title: "Product 2", price: 20, image: "product2.jpg" },
];
useSelector.mockReturnValue(mockCartItems);

const mockNavigate = jest.fn();
useNavigate.mockReturnValue(mockNavigate);

describe("CartMain component", () => {
  test("renders CartMain component with cart items", () => {
    render(<CartMain />);

    const cartElement = screen.getByText("Your Cart");
    expect(cartElement).toBeInTheDocument();

    for (const item of mockCartItems) {
      const itemTitle = screen.getByText(item.title);
      const itemPrice = screen.getByText(`Price: ${item.price}`);
      expect(itemTitle).toBeInTheDocument();
      expect(itemPrice).toBeInTheDocument();
    }

    const removeButtons = screen.getAllByText("Remove");
    expect(removeButtons).toHaveLength(mockCartItems.length);
  });

  test("handles remove item click", () => {
    render(<CartMain />);

    const removeButton = screen.getAllByText("Remove")[0];
    fireEvent.click(removeButton);

    expect(mockDispatch).toHaveBeenCalledWith(remove(mockCartItems[0].id));

    const toastMessage = screen.getByText("Item Removed");
    expect(toastMessage).toBeInTheDocument();
  });

  test("handles checkout button click", () => {
    render(<CartMain />);

    const checkoutButton = screen.getByText("Checkout");
    fireEvent.click(checkoutButton);

    expect(mockNavigate).toHaveBeenCalledWith("/payment/30.00", {
      totalAmount: "30.00",
    });
  });
});
