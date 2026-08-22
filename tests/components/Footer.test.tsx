import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "@/components/layout/Footer";

describe("Footer Component", () => {
  it("renders the brand logo and WhatsApp chat button", () => {
    render(<Footer />);

    // Brand logo
    const logoImg = screen.getByAltText("ME TRIP HOLIDAYS Logo");
    expect(logoImg).toBeInTheDocument();

    // WhatsApp CTA button
    const whatsappLink = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(whatsappLink).toBeInTheDocument();
    expect(whatsappLink).toHaveAttribute("target", "_blank");
    expect(whatsappLink).toHaveAttribute("rel", "noopener noreferrer");

    const href = whatsappLink.getAttribute("href") || "";
    expect(href).toMatch(/^https:\/\/wa\.me\/917736322522\?text=/);
  });

  it("contains valid navigation links to all main sections", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /about us/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /college tours/i })).toHaveAttribute("href", "/#college-tours");
    expect(screen.getByRole("link", { name: /gallery/i })).toHaveAttribute("href", "/gallery");
    expect(screen.getByRole("link", { name: /contact us/i })).toHaveAttribute("href", "/contact");
  });
});
