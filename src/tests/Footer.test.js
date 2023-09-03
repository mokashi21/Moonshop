import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../pages/Footer";

describe("Footer Component", () => {
  it("renders the component correctly", () => {
    render(<Footer />);

    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Follow Us")).toBeInTheDocument();
    expect(screen.getByText("Copyright ©")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Facebook/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Instagram/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Twitter/i })).toBeInTheDocument();
  });
});
