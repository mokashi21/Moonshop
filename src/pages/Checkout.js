import React, { useState, useEffect } from "react";
import { Container, TextField, Typography, Grid, Button } from "@mui/material";

function Checkout() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [cName, setcName] = useState("");
  const [error, setError] = useState({});
  useEffect(() => {
    const savedInputs = JSON.parse(localStorage.getItem("checkoutInputs"));
    if (savedInputs) {
      setFname(savedInputs.fName || "");
      setLname(savedInputs.lName || "");
      setAddress(savedInputs.address || "");
      setCity(savedInputs.city || "");
      setStates(savedInputs.states || "");
      setZipCode(savedInputs.zipCode || "");
      setcName(savedInputs.cName || "");
    }
  }, []);
  useEffect(() => {
    // Save user inputs to local storage whenever they change
    const inputsToSave = {
      fName,
      lName,
      address,
      city,
      states,
      zipCode,
      cName,
    };
    localStorage.setItem("checkoutInputs", JSON.stringify(inputsToSave));
  }, [fName, lName, address, city, states, zipCode, cName]);

  useEffect(() => {
    // Clear saved inputs from local storage when the component unmounts
    return () => {
      localStorage.removeItem("checkoutInputs");
    };
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data
    const validationErrors = {};

    if (!fName) validationErrors.fName = "First name is required.";
    if (!lName) validationErrors.lName = "Last name is required.";
    if (!address) validationErrors.address = "Address is required.";
    if (!city) validationErrors.city = "City is required.";
    if (!states) validationErrors.states = "State is required.";
    if (!zipCode) validationErrors.zipCode = "Zip is required.";
    if (!cName) validationErrors.cName = "Country is required.";

    // ... Other validation checks ...

    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Process form data or navigate to the next step
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "40%",
    backgroundColor: "#f5f5f5", // Gray background color
    borderRadius: "10px", // Rounded corners
  };

  const formStyle = {
    width: "50%",
    maxWidth: "500px",
    padding: "16px",
    boxSizing: "border-box",
    border: "1px solid #ccc",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: "2em",
  };

  const textFieldStyle = {
    marginBottom: "16px",
    letterSpacing: "20px",
  };
  const clearError = (field) => {
    setError((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      <form style={{ ...formStyle, width: "100%" }} onSubmit={handleSubmit}>
        <Grid
          container
          style={{
            marginTop: "2em",
            marginLeft: "5em",
          }}
        >
          <Grid>
            <TextField
              item
              xs={6}
              style={textFieldStyle}
              value={fName}
              onChange={(e) => {
                setFname(e.target.value);
                clearError("fName");
              }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              error={Boolean(error.fName)}
              helperText={error.fName}
            />
          </Grid>
          <Grid>
            <TextField
              style={textFieldStyle}
              value={lName}
              onChange={(e) => {
                setLname(e.target.value);
                clearError("lName");
              }}
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              error={Boolean(error.lName)}
              helperText={error.lName}
            />
          </Grid>
          <Grid>
            <TextField
              style={textFieldStyle}
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
                clearError("address");
              }}
              id="outlined-basic"
              label="Address"
              variant="outlined"
              error={Boolean(error.address)}
              helperText={error.address}
            />
          </Grid>
          <Grid>
            <TextField
              style={textFieldStyle}
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                clearError("city");
              }}
              id="outlined-basic"
              label="City"
              variant="outlined"
              error={Boolean(error.city)}
              helperText={error.city}
            />
          </Grid>
          <Grid>
            <TextField
              style={textFieldStyle}
              valu={states}
              onChange={(e) => {
                setStates(e.target.value);
                clearError("states");
              }}
              id="outlined-basic"
              label="State"
              variant="outlined"
              error={Boolean(error.states)}
              helperText={error.states}
            />
          </Grid>
          <Grid>
            <TextField
              style={textFieldStyle}
              value={zipCode}
              onChange={(e) => {
                setZipCode(e.target.value);
                clearError("zipCode");
              }}
              id="outlined-basic"
              label="Zip"
              variant="outlined"
              error={Boolean(error.zipCode)}
              helperText={error.zipCode}
            />
          </Grid>
          <TextField
            style={textFieldStyle}
            value={cName}
            onChange={(e) => {
              setcName(e.target.value);
              clearError("cName");
            }}
            id="outlined-basic"
            label="Country"
            variant="outlined"
            error={Boolean(error.cName)}
            helperText={error.cName}
          />
          <Grid
            style={{
              marginTop: "6em",
              marginLeft: "35%",
            }}
          >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Checkout;
