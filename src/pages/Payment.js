import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkout from "./Checkout";

function Payment() {
  const [orderId, setOrderId] = useState(null);
  const { totalAmount } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    async function generateOrder() {
      try {
        const response = await axios.post(
          "http://localhost:4000/create-order",
          {
            amount: Number(totalAmount) * 100,
          }
        );
        setOrderId(response.data.id);
        console.log(response);
      } catch (error) {
        console.error("Error generating order:", error);
      }
    }
    generateOrder();
  }, [totalAmount]);
  function generateRandomOrderId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000);
    return `order_${timestamp}_${randomNum}`;
  }

  const handlePayment = () => {
    const options = {
      key: "rzp_test_USpbx1ret88BDh",
      amount: totalAmount * 100,
      currency: "INR",
      name: "Vinod Mokashi",
      description: "Test Transaction",
      image:
        "https://images.unsplash.com/photo-1573335553610-a871dfd95bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VjY2Vzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      order_id: orderId, // Replace with the actual Order ID obtained from the server
      handler: function (response) {
        alert("Payment Successful");
        console.log(response);
        // Generate random order ID
        const newOrderId = generateRandomOrderId();
        navigation(`/pay/${newOrderId}`);
      },
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
    };

    const rzp1 = new window.Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  const handleBack = () => {
    navigation("/checkout");
  };

  return (
    <Container style={{ overflowY: "scroll", maxHeight: "120vh" }}>
      <Button
        variant="outlined"
        onClick={handleBack}
        style={{ marginTop: "1em" }}
      >
        Back
      </Button>
      <Checkout />

      <Typography
        variant="h6"
        style={{
          textAlign: "center",
          marginTop: "1em",
        }}
      >
        Total Amount: {totalAmount}
      </Typography>
      {orderId && (
        <Button
          variant="outlined"
          style={{
            display: "block",
            margin: "2em auto",
            color: "green",
          }}
          onClick={handlePayment}
        >
          Pay with Razorpay
        </Button>
      )}
    </Container>
  );
}

export default Payment;
