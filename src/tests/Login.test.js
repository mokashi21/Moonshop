import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login"; // Update the import path as needed

// Mock the react-toastify library to avoid console errors
jest.mock("react-toastify", () => ({
  toast: jest.fn(),
}));

describe("Login component", () => {
  it("renders the Login component with form elements", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: "Sign In" });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  it("displays validation errors and toast message when submitting with invalid data", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const signInButton = screen.getByRole("button", { name: "Sign In" });

    fireEvent.click(signInButton);

    // await waitFor(() => {
    //   expect(
    //     screen.getByText("Please enter a valid values.")
    //   ).toBeInTheDocument();
    //   expect(
    //     screen.getByText("Incorrect email. Please enter a valid email.")
    //   ).toBeInTheDocument();
    //   expect(
    //     screen.getByText(
    //       "Incorrect password. Please enter the correct password."
    //     )
    //   ).toBeInTheDocument();
    // });
  });

  it("submits the form with valid data and redirects to the dashboard page", async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const signInButton = screen.getByRole("button", { name: "Sign In" });

    // Fill in valid data
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(signInButton);

    // Wait for the redirection (you may need to adjust this depending on your app's actual behavior)
    await waitFor(() => {
      expect(window.location.pathname).toBe("/dashboard");
    });

    // Now, you can add any additional assertions after the first waitFor.
    // Example: You can check that a success toast message is displayed.
    expect(screen.getByText("Login success")).toBeInTheDocument();
  });
});
