import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "../components/Dashboard";
test("renders Dashboard component", () => {
  render(<Dashboard />);
  const dashboardElement = screen.getByTestId("dashboard");
  expect(dashboardElement).toBeInTheDocument();
});

test("navigates to home page when Home button is clicked", () => {
  render(<Dashboard />);
  const homeButton = screen.getByText("Home");
  fireEvent.click(homeButton);
});
