import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Pay from "./Pay";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("axios");

describe("Pay Component", () => {
  const mockOrderId = "123456";
  const mockTotalAmount = "100";
  axios.post.mockResolvedValue({
    data: { id: mockOrderId },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component and displays the success message", async () => {
    useParams.mockReturnValue({ totalAmount: mockTotalAmount });
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    render(<Pay />);

    expect(screen.getByText("Payment Successfully")).toBeInTheDocument();
    expect(screen.getByText("Generating Order...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Generated Order ID:")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText(`Generated Order ID: ${mockOrderId}`)
      ).toBeInTheDocument();
    });

    expect(screen.getByText("Payment Successfully")).toBeInTheDocument();

    expect(screen.getByText("Back")).toBeInTheDocument();

    userEvent.click(screen.getByText("Back"));

    expect(navigateMock).toHaveBeenCalledWith("/dashboard");
  });

  it("handles order generation failure", async () => {
    useParams.mockReturnValue({ totalAmount: mockTotalAmount });

    axios.post.mockRejectedValue(new Error("Order generation failed"));

    render(<Pay />);

    expect(screen.getByText("Payment Successfully")).toBeInTheDocument();
    expect(screen.getByText("Generating Order...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Order generation failed")).toBeInTheDocument();
    });

    expect(screen.getByText("Payment Successfully")).toBeInTheDocument();

    expect(screen.getByText("Back")).toBeInTheDocument();
  });
});
