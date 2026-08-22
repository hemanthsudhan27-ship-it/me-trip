import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

describe("WhatsAppButton Floating Action Widget", () => {
  it("renders the floating WhatsApp link with correct attributes", () => {
    render(<WhatsAppButton />);

    const link = screen.getByTitle("Chat on WhatsApp");
    expect(link).toBeInTheDocument();

    // Verify target and rel for secure opening in new tab
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");

    // Verify href format
    const href = link.getAttribute("href") || "";
    expect(href).toMatch(/^https:\/\/wa\.me\/917736322522\?text=/);
    expect(href).toContain(encodeURIComponent("Hello Me Trip Holidays, I would like to enquire about holiday packages."));
  });

  it("contains an accessible tooltip and title", () => {
    render(<WhatsAppButton />);

    expect(screen.getByTitle("Chat on WhatsApp")).toBeInTheDocument();
    expect(screen.getByText("Chat with Us")).toBeInTheDocument();
  });
});
