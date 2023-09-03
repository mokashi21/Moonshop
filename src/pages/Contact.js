import React, { useState } from "react";
import {
  CardContent,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  Box,
  Container,
  Paper,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.number ||
      !formData.email ||
      !formData.message
    ) {
      toast.error("Please enter all information.");
      return;
    }

    if (!/^[0-9]+$/.test(formData.number)) {
      toast.error("Number should contain only digits.");
      return;
    }

    toast.success("Form submitted successfully!");
    // Reset the form after submission
    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Container>
        <Box sx={styles.heroContainer}>
          <Paper elevation={3} sx={styles.photoSection}>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              style={styles.photoImage}
            />
            <div style={styles.photoOverlay}>
              <h1
                style={{
                  marginTop: "8em",
                }}
              >
                <span
                  style={{
                    color: "yellow",
                    fontSize: "bold",
                  }}
                >
                  "Get in Touch with Us
                </span>{" "}
                – We're here to assist and answer any questions you may have."
              </h1>
              <p
                style={{
                  marginTop: "10rem",
                  marginLeft: "3em",
                  fontSize: "5em",
                }}
              >
                Your Feedback Matters
              </p>
            </div>
          </Paper>
        </Box>
      </Container>
      <Typography gutterBottom variant="h3" align="center" marginTop="2rem">
        Contact Us
      </Typography>
      <Card
        style={{
          border: "1px red",
          width: "50%",
          margin: "0 auto",
          marginTop: "3rem",
          height: "150%", // Increased height
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Name"
                  placeholder="Enter Your Name"
                  type="text"
                  variant="outlined"
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Number"
                  placeholder="Enter Your Number"
                  type="text"
                  variant="outlined"
                  fullWidth
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Email"
                  placeholder="Enter Your Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Enter Your Message"
                  type="text"
                  variant="outlined"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid
                xs={12}
                item
                style={{
                  marginLeft: "18em",
                  marginTop: "3em",
                }}
              >
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <br />
      <br />
      <br />
      <br />

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Contact;
const styles = {
  heroContainer: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0px -16px",
    placeContent: "normal center",
    placeItems: "center normal",
  },

  photoOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "139%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    zIndex: 1, // Place the overlay above the image
    padding: "20px",
  },
};
