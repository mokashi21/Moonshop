import React from "react";
import { render, screen } from "@testing-library/react";
import AboutUsPage from "../pages/About";
test("renders AboutUsPage component", () => {
  render(<AboutUsPage />);
  const aboutUsElement = screen.getByText("About Us");
  expect(aboutUsElement).toBeInTheDocument();
});

test("displays team member information", () => {
  render(<AboutUsPage />);
  const teamMemberName = screen.getByText("Vinod");
  const teamMemberRole = screen.getByText("React Js developer");
  expect(teamMemberName).toBeInTheDocument();
  expect(teamMemberRole).toBeInTheDocument();
});
