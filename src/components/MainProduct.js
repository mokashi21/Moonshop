import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "./Redux/CartSlice";
import { CardActionArea, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useSelector } from "react-redux";
import {
  AppBar,
  Toolbar,
  Button,
  // Container,
  // TextField,
  //InputAdornment,
} from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import Footer from "../pages/Footer";

function MainProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, []);
  const navigation = useNavigate();
  const handleLogout = () => {
    navigation("/");
  };
  const handleNavigation = (route) => {
    navigation(route);
  };
  const appBarStyle = {
    position: "static",

    background: "rgba(0, 0, 0, 0)", // Transparent black background
    boxShadow: "none", // Remove box shadow
  };
  const buttonStyle = {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
  };
  const logoutData = {
    color: "red",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: "57em",
    border: 1,
    borderColor: "error.main",
  };

  const flexContainerStyle = {
    display: "flex",

    alignItems: "center",
  };
  const cartData = () => {
    return navigation("/checkout");
  };

  const iconMarginStyle = {
    marginLeft: "2em",
    display: "flex",
    justifyContent: "space-between",
    gap: "15px",
  };

  const parentContainerStyle = {
    objectfit: "cover",
    backgroundRepeat: "no-repeat",

    //     backgroundPosition: "center",
    width: "20%",
    backgroundPosition: "center",
    minHeight: "auto",
    boxShadow: 3,
  };
  const handleAdd = (prod) => {
    dispatch(add(prod));
    toast.success("Item added to Cart", {
      position: "top-center",
    });
  };

  const handleHome = () => {
    return navigation("/dashboard");
  };

  const items = useSelector((state) => state.cart);
  return (
    <>
      <div style={parentContainerStyle}>
        <AppBar style={appBarStyle}>
          <Toolbar>
            <div style={flexContainerStyle}>
              <Button
                color="inherit"
                onClick={() => handleNavigation("/")}
                style={buttonStyle}
              >
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigation("/about")}
                style={buttonStyle}
              >
                About
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigation("/contact")}
                style={buttonStyle}
              >
                Contact
              </Button>
              <Button
                color="inherit"
                onClick={() => handleNavigation("/product-list")}
                style={buttonStyle}
              >
                Products
              </Button>
            </div>
            {/* <Container maxWidth="md" sx={{ mt: 2, mb: 5 }}>
              <TextField
                id="search"
                type="search"
                label="Search"
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: "60%", marginTop: "1em" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Container> */}

            <Button color="inherit" style={logoutData} onClick={handleLogout}>
              Logout
            </Button>
            <div style={iconMarginStyle}>
              <TextField
                style={{
                  width: "40px",
                  height: "20px",
                }}
                value={items.length}
                InputProps={{
                  readOnly: true,
                }}
              />
              <IconContext.Provider value={{ size: "3.5em", color: "black" }}>
                <AiOutlineShoppingCart onClick={cartData} />
              </IconContext.Provider>
            </div>
          </Toolbar>
        </AppBar>
        <Button
          style={{
            marginLeft: "20px",
          }}
          onClick={handleHome}
          variant="outlined"
        >
          Back
        </Button>
      </div>
      <br />
      <div
        style={{
          display: "flex",
          background: "#ADD8E6",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {product.map((prod) => (
          <Card
            key={prod.id}
            sx={{
              maxWidth: 345,
              marginBottom: "1rem",
              marginTop: "2em",
              borderRadius: "10px",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="300px"
                image={prod.image}
                alt={prod.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {prod.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {prod.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  ₹{prod.price}
                </Typography>
                <br />
                <button
                  style={{
                    width: "90px",
                    height: "40px",
                    color: "blueviolet",
                  }}
                  onClick={() => handleAdd(prod)}
                >
                  Add to cart
                </button>
                <ToastContainer />
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MainProduct;
// const styles = {
//   container: {
//     backgroundImage:
//       'url("https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")', // Add your background image URL
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },

// }
