import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Contact from "@/app/contact/page";

describe("Contact Page", () => {
  it("renders page heading, coordinates, and specialist direct lines", () => {
    render(<Contact />);

    expect(screen.getByText("Get in Touch With Us")).toBeInTheDocument();
    expect(screen.getByText("Phone Coordinates")).toBeInTheDocument();
    expect(screen.getByText("Office Headquarters")).toBeInTheDocument();
    expect(screen.getByText("Destination Specialist Direct Lines")).toBeInTheDocument();

    // Direct lines
    expect(screen.getAllByText(/\+91 8593 040 034/i)[0]).toBeInTheDocument(); // Manali
    expect(screen.getByText(/\+91 9207 322 522/i)).toBeInTheDocument(); // Goa
    expect(screen.getByText(/\+91 8089 950 532/i)).toBeInTheDocument(); // Kashmir
    expect(screen.getByText(/\+91 6238 922 522/i)).toBeInTheDocument(); // Hyderabad
    expect(screen.getByText("Visit Our Office Locations")).toBeInTheDocument();
    expect(screen.getByText("Calicut Office (Headquarters)")).toBeInTheDocument();
    expect(screen.getByText("Manali Branch Office")).toBeInTheDocument();
  });

  it("validates form requirements on empty submit", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const submitBtn = screen.getByRole("button", { name: /send booking enquiry/i });
    await user.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
      expect(screen.getByText(/please select an interest/i)).toBeInTheDocument();
      expect(screen.getByText(/message must be at least 5 characters/i)).toBeInTheDocument();
    });
  });

  it("renders tour category selector pills", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    const honeymoonPill = screen.getByRole("button", { name: /💍 honeymoon/i });
    expect(honeymoonPill).toBeInTheDocument();

    await user.click(honeymoonPill);
    expect(honeymoonPill).toHaveClass("bg-primary");
  });
});
