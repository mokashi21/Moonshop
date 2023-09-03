import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

test("renders Welcome component with expected text", () => {
  render(<Welcome />);
  const welcomeText = screen.getByText("Welcome to MoonShop !");
  const exploreText = screen.getByText(
    "We're excited to have you here. Explore our amazing content and features."
  );
  const registerButton = screen.getByText("Register");

  expect(welcomeText).toBeInTheDocument();
  expect(exploreText).toBeInTheDocument();
  expect(registerButton).toBeInTheDocument();
});

// Add more test cases as needed
