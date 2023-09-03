import React from "react";
import { Container, Paper, Typography, Grid } from "@mui/material";
import Footer from "./Footer";

const AboutUsPage = () => {
  return (
    <>
      <div style={styles.container}>
        <Container>
          <Paper elevation={3} style={styles.contentContainer}>
            <Typography variant="h4" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to our online store!
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to provide high-quality products to our customers
              at affordable prices. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </Typography>
            <Typography variant="body1" paragraph>
              Meet our team of experts who work tirelessly to ensure your
              shopping experience is top-notch.
            </Typography>

            <Typography variant="h6" gutterBottom style={{ marginTop: "50px" }}>
              Our Team
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={2} style={{ padding: "20px" }}>
                  <img
                    src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Team Member"
                    style={{ maxWidth: "100%", marginBottom: "10px" }}
                  />
                  <Typography variant="subtitle1">Vinod </Typography>
                  <Typography variant="body2">React Js developer</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <br />
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
const styles = {
  container: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")', // Add your background image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "20px",
    borderRadius: "10px",
  },
};
