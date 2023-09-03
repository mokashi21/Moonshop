import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Payment from "./Payment";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
  useParams: jest.fn(),
}));

jest.mock("axios");

describe("Payment Component", () => {
  const mockOrderId = "123456";
  const mockTotalAmount = "100";
  axios.post.mockResolvedValue({
    data: { id: mockOrderId },
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component and handles payment successfully", async () => {
    useParams.mockReturnValue({ totalAmount: mockTotalAmount });
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const originalRazorpay = window.Razorpay;
    const mockRazorpayInstance = {
      open: jest.fn(),
      on: jest.fn(),
    };

    window.Razorpay = jest.fn(() => mockRazorpayInstance);

    render(<Payment />);

    expect(screen.getByText("Total Amount: 100")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Pay with Razorpay")).toBeInTheDocument();
    });

    const payButton = screen.getByText("Pay with Razorpay");
    expect(payButton).toBeInTheDocument();

    userEvent.click(payButton);

    expect(window.Razorpay).toHaveBeenCalledWith({
      key: "rzp_test_USpbx1ret88BDh",
      amount: 10000,
      currency: "INR",
      name: "Vinod Mokashi",
      description: "Test Transaction",
      image:
        "https://images.unsplash.com/photo-1573335553610-a871dfd95bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      order_id: mockOrderId,
      handler: expect.any(Function),
      prefill: {
        name: "Vinod Mokashi",
        email: "vinodmokashi2121.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    });

    const paymentSuccessHandler = window.Razorpay.mock.calls[0][0].handler;
    const mockPaymentResponse = {
      razorpay_payment_id: "payment123",
    };
    paymentSuccessHandler(mockPaymentResponse);

    expect(window.alert).toHaveBeenCalledWith("Payment Successful");

    expect(navigateMock).toHaveBeenCalledWith("/pay/");

    window.Razorpay = originalRazorpay;
  });

  it("handles order generation failure", async () => {
    useParams.mockReturnValue({ totalAmount: mockTotalAmount });

    axios.post.mockRejectedValue(new Error("Order generation failed"));

    render(<Payment />);

    expect(screen.getByText("Total Amount: 100")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Payment Successfully")).toBeInTheDocument();
    });

    expect(screen.getByText("Payment Successfully")).toBeInTheDocument();

    expect(screen.getByText("Back")).toBeInTheDocument();
  });
});
