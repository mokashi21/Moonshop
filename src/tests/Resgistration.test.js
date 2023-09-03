import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Registration from "./Registration";
jest.mock("react-toastify", () => ({
  toast: jest.fn(),
}));

describe("Registration component", () => {
  it("renders the Registration component with form elements", () => {
    render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );

    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  //   it("displays validation errors when submitting the form with invalid data", async () => {
  //     render(
  //       <BrowserRouter>
  //         <Registration />
  //       </BrowserRouter>
  //     );

  //     const signUpButton = screen.getByRole("button", { name: "Sign Up" });

  //     fireEvent.click(signUpButton);

  //     await waitFor(() => {
  //       expect(screen.getByText("First name is required.")).toBeInTheDocument();
  //       expect(screen.getByText("Last name is required.")).toBeInTheDocument();
  //       expect(screen.getByText("Email is required.")).toBeInTheDocument();
  //       expect(screen.getByText("Password is required.")).toBeInTheDocument();
  //     });
  //   });

  it("submits the form with valid data and redirects to login page", async () => {
    render(
      <BrowserRouter>
        <Registration />
      </BrowserRouter>
    );

    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const signUpButton = screen.getByRole("button", { name: "Sign Up" });

    // Fill in valid data
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(signUpButton);

    // Wait for the redirect (you may need to adjust this depending on your app's actual behavior)
    await waitFor(() => {
      expect(window.location.pathname).toBe("/login");
    });
  });
});
