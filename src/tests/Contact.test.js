import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: jest.fn(),
  success: jest.fn(),
  error: jest.fn(),
}));

describe("Contact Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component correctly", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Number"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hello, this is a test message." },
    });

    fireEvent.click(screen.getByText("Submit"));

    expect(toast.success).toHaveBeenCalledWith("Form submitted successfully!");
  });

  it("displays validation errors for empty fields when submitting", () => {
    render(<Contact />);

    fireEvent.click(screen.getByText("Submit"));

    expect(toast.error).toHaveBeenCalledWith("Please enter all information.");
  });

  it("displays a validation error for the 'Number' field when it contains non-digits", () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Number"), {
      target: { value: "abc123" },
    });
    fireEvent.click(screen.getByText("Submit"));

    expect(toast.error).toHaveBeenCalledWith(
      "Number should contain only digits."
    );
  });
});
