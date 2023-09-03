import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
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
import "./App.css";
import Cards from "./Cards";
import Footer from "../pages/Footer";
function Dashboard() {
  const navigation = useNavigate();

  const handleLogout = () => {
    navigation("/");
  };
  const handleHome = () => {
    return navigation("/dashboard");
  };

  const handleNavigation = (route) => {
    navigation(route);
  };

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

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
    marginLeft: "64em",
    border: 1,
    borderColor: "error.main",
  };

  const flexContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const iconMarginStyle = {
    marginLeft: "2em",
  };

  const parentContainerStyle = {
    objectfit: "cover",
    backgroundRepeat: "no-repeat",
    width: "80%",
    backgroundPosition: "center",
    minHeight: "auto",

    boxShadow: 3,
  };

  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 2500, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1,
  //   },
  // };
  const cartData = () => {
    return navigation("/checkout");
  };
  const carouselData = {
    width: "100%",
    height: "600px",
  };

  return (
    <>
      <div style={parentContainerStyle}>
        <AppBar style={appBarStyle}>
          <Toolbar>
            <div style={flexContainerStyle}>
              <Button
                color="inherit"
                onClick={() => handleHome("/dashboard")}
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
              {/* <Button
                color="inherit"
                onClick={() => handleNavigation("/ordered-products")}
                style={buttonStyle}
              >
                Orders
              </Button> */}
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
              <IconContext.Provider value={{ size: "2.5em", color: "black" }}>
                <AiOutlineShoppingCart onClick={cartData} />
              </IconContext.Provider>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <br />
      <br />
      <div>
        <Carousel
          responsive={responsive}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvbXB1dGVyfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Carousel Item 1"
              style={{
                ...carouselData,
                objectFit: "cover",
                marginLeft: "28em",
                width: "auto",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Carousel Item 2"
              style={{
                ...carouselData,
                objectFit: "cover",
                marginLeft: "28em",
                width: "auto",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlY3Ryb25pY3MlMjBzdG9yZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              alt="Carousel Item 3"
              style={{
                ...carouselData,
                objectFit: "cover",
                marginLeft: "28em",
                width: "auto",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </div>
        </Carousel>
      </div>
      <Cards />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default Dashboard;
const responsive = {
  desktop: {
    breakpoint: { max: 2500, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
