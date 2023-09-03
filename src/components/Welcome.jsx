import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const changeData = () => {
    navigate("/registration");
  };

  return (
    <div style={styles.container}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          style={{
            marginBottom: "2em",
            color: "green",
          }}
        >
          Welcome to MoonShop !
        </Typography>
        <Typography variant="h5" paragraph align="center">
          We're excited to have you here. Explore our amazing content and
          features.
        </Typography>
        <div style={styles.buttonContainer}>
          <Button onClick={changeData} variant="contained" color="primary">
            Register
          </Button>
        </div>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "30px",
  },
};

export default Welcome;
