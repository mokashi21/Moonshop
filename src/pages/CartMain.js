import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { remove } from "../components/Redux/CartSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

function CartMain() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigation = useNavigate();

  const handleCheckout = () => {
    navigation("/payment", { totalAmount: totalPrice.toFixed(2) });
  };
  const handleRemove = (productID) => {
    dispatch(remove(productID));
    toast.error("Item Removed", {
      position: "top-center",
    });
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h1>Your Cart</h1>
      {cart.map((item, index) => (
        <Card
          key={index}
          sx={{ display: "flex", marginBottom: "1rem", marginLeft: "2em" }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, objectFit: "cover", marginLeft: "20px" }}
            image={item.image}
            alt={item.title}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {item.price}
            </Typography>

            <Button
              onClick={() => handleRemove(item.id)}
              variant="contained"
              color="error"
              sx={{ width: "30%", marginTop: "2em" }}
            >
              Remove
            </Button>
            <ToastContainer />
          </CardContent>
        </Card>
      ))}
      <Typography variant="h6" sx={{ marginLeft: "40em", marginTop: "1em" }}>
        Total: {totalPrice.toFixed(2)}{" "}
      </Typography>
      <Button
        variant="contained"
        component={Link} // Use Link to navigate
        to={`/payment/${totalPrice.toFixed(2)}`}
        sx={{
          marginLeft: "40em",
          marginTop: "2em",
          marginBottom: "4em",
        }}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}

export default CartMain;
