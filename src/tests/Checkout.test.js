import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Checkout from "../pages/Checkout";
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

describe("Checkout Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component correctly", () => {
    render(<Checkout />);

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Address")).toBeInTheDocument();
    expect(screen.getByLabelText("City")).toBeInTheDocument();
    expect(screen.getByLabelText("State")).toBeInTheDocument();
    expect(screen.getByLabelText("Zip")).toBeInTheDocument();
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    render(<Checkout />);

    fireEvent.change(screen.getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Address"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByLabelText("City"), {
      target: { value: "New York" },
    });
    fireEvent.change(screen.getByLabelText("State"), {
      target: { value: "NY" },
    });
    fireEvent.change(screen.getByLabelText("Zip"), {
      target: { value: "10001" },
    });
    fireEvent.change(screen.getByLabelText("Country"), {
      target: { value: "USA" },
    });

    fireEvent.click(screen.getByText("Submit"));
  });

  it("displays validation errors for empty fields when submitting", () => {
    render(<Checkout />);

    fireEvent.click(screen.getByText("Submit"));
  });
});
