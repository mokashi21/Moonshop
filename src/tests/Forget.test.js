import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Forget from "../components/Forget";
test("renders Forget component", () => {
  const { getByText, getByLabelText } = render(<Forget />);

  // Check if the component renders properly
  const titleElement = getByText("Forgot Password");
  const emailInputElement = getByLabelText("Email Address");
  const submitButton = getByText("Send Reset Link");

  expect(titleElement).toBeInTheDocument();
  expect(emailInputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("form submission with empty email", () => {
  const { getByText, getByLabelText } = render(<Forget />);
  const submitButton = getByText("Send Reset Link");

  // Trigger form submission with an empty email
  fireEvent.click(submitButton);

  // Expect an error message to appear
  const errorMessage = getByText("Please enter your email.");
  expect(errorMessage).toBeInTheDocument();
});

test("form submission with invalid email", () => {
  const { getByText, getByLabelText } = render(<Forget />);
  const emailInputElement = getByLabelText("Email Address");
  const submitButton = getByText("Send Reset Link");

  // Enter an invalid email
  fireEvent.change(emailInputElement, { target: { value: "invalid-email" } });
  fireEvent.click(submitButton);

  // Expect an error message to appear
  const errorMessage = getByText("Please enter a valid email.");
  expect(errorMessage).toBeInTheDocument();
});
