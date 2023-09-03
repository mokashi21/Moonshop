import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import axios from "axios";

function Pay() {
  const [orderId, setOrderId] = useState(null);

  const { totalAmount } = useParams();
  const navigate = useNavigate();
  console.log("TotalAmount", totalAmount);
  console.log(totalAmount);
  useEffect(() => {
    async function generateOrder() {
      try {
        const response = await axios.post(
          "http://localhost:4000/create-order",
          {
            amount: Number(totalAmount * 100),
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

  const handleOrder = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Button
          variant="outlined"
          onClick={handleOrder}
          style={{
            marginBottom: "5em",
            marginRight: "50em",
          }}
        >
          Back{" "}
        </Button>
        <img
          src="https://img.freepik.com/free-vector/green-double-circle-check-mark_78370-1749.jpg?w=740&t=st=1693487192~exp=1693487792~hmac=d61f6df3e20212388d01244b916c74431ca1cc895c98818471f66c10434fc2e7"
          alt="Success"
          style={{ width: "200px", height: "200px" }}
        />
        <header style={{ textAlign: "center" }}>
          <h1>Payment Successfully</h1>
          {orderId && (
            <>
              <p>Generated Order ID: {orderId}</p>
            </>
          )}
        </header>
      </div>
    </>
  );
}

export default Pay;
