import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forget = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (loggedInEmail) {
      setEmail(loggedInEmail);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if email is empty
    if (email.trim() === "") {
      toast.error("Please enter your email.", {
        position: "top-right",
      });
      return "Please enter email";
    }

    const storedData = JSON.parse(localStorage.getItem("registrationData"));

    if (email === storedData.email) {
      toast.success("Password reset link sent successfully!", {
        position: "top-right",
      });
      navigation("/login");
    } else {
      toast.error("Invalid email. Please enter a registered email.", {
        position: "top-right",
      });
      setEmail("");
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom marginTop="20">
        Forgot Password
      </Typography>
      <Typography variant="body1" paragraph>
        Enter your email address below to receive a password reset link.
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Send Reset Link
        </Button>
      </form>
      <ToastContainer position="top-right" autoClose={5000} />
    </Container>
  );
};

export default Forget;
