import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultTheme = createTheme();

function Registration() {
  const navigation = useNavigate();

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [ename, setEName] = useState("");
  const [pname, setPName] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));

    // Update the corresponding state value
    switch (field) {
      case "firstName":
        setFName(value);
        break;
      case "lastName":
        setLName(value);
        break;
      case "email":
        setEName(value);
        break;
      case "password":
        setPName(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form data
    const validationErrors = {};
    if (!fname) validationErrors.firstName = "First name is required.";
    else if (!isValidFname(fname))
      validationErrors.fname = "Invalid First name.";

    if (!lname) validationErrors.lastName = "Last name is required.";
    else if (!isValidLname(lname))
      validationErrors.lname = "Invalid last name.";

    if (!ename) validationErrors.email = "Email is required.";
    else if (!isValidEmail(ename))
      validationErrors.email = "Invalid email address.";
    if (!pname) validationErrors.password = "Password is required.";
    else if (pname.length < 6)
      validationErrors.password = "Password must be at least 6 characters";
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = new FormData(event.currentTarget);
      const registrationData = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        email: data.get("email"),
        password: data.get("password"),
      };
      localStorage.setItem(
        "registrationData",
        JSON.stringify(registrationData)
      );
      navigation("/login");
      toast("Registration success", { type: "success" });
    } else {
      toast("Please correct the errors.", { type: "error" });
    }
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidFname = (fname) => {
    const nameRegex = /^[A-Za-z\s]*$/;
    return nameRegex.test(fname);
  };

  const isValidLname = (lname) => {
    const nameRegex = /^[A-Za-z\s]*$/;
    return nameRegex.test(lname);
  };

  const changeData = () => {
    return navigation("/login");
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  value={fname}
                  helperText={errors.firstName || " "}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (!newValue.match(/\d/)) {
                      handleChange("firstName", newValue);
                    }
                  }}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="text"
                  value={lname}
                  onChange={(e) => {
                    const newValue = e.target.value;
                    if (!newValue.match(/\d/)) {
                      handleChange("lastName", newValue);
                    }
                  }}
                  required
                  helperText={errors.lastName || " "}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  value={ename}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  helperText={errors.email || " "}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={pname}
                  onChange={(e) => handleChange("password", e.target.value)}
                  required
                  helperText={errors.password || " "}
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I Want to receive latest offers, Discounts"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>

            <ToastContainer />
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={changeData} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Registration;
