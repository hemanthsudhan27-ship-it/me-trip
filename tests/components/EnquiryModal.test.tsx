import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import EnquiryModal from "@/components/ui/EnquiryModal";
import { UIModalProvider, useUIModals } from "@/providers/UIModalProvider";
import React, { useEffect } from "react";

// Helper component to trigger modal opening in tests
function TestEnquiryModalOpener({ destination }: { destination?: string }) {
  const { enquiry } = useUIModals();

  useEffect(() => {
    enquiry.open(destination || "Manali Adventure");
  }, [enquiry, destination]);

  return <EnquiryModal />;
}

describe("EnquiryModal Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.open = vi.fn();
  });

  it("renders modal with destination preselected", async () => {
    render(
      <UIModalProvider>
        <TestEnquiryModalOpener destination="Goa Beach Vacation" />
      </UIModalProvider>
    );

    expect(await screen.findByText("Plan Your Journey")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("John Doe")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("john@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("+91 77363 22522")).toBeInTheDocument();
  }, 10000);

  it("validates mandatory fields and blocks submission on invalid input", async () => {
    const user = userEvent.setup();

    render(
      <UIModalProvider>
        <TestEnquiryModalOpener />
      </UIModalProvider>
    );

    const submitBtn = await screen.findByRole("button", { name: /submit inquiry/i });
    await user.click(submitBtn);

    // Errors should appear for name, email, phone
    await waitFor(() => {
      expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter a valid phone number/i)).toBeInTheDocument();
    });

    expect(window.open).not.toHaveBeenCalled();
  }, 10000);

  it("submits valid form and triggers WhatsApp URL redirect to specialist", async () => {
    const user = userEvent.setup();

    render(
      <UIModalProvider>
        <TestEnquiryModalOpener destination="Goa Beach Vacation" />
      </UIModalProvider>
    );

    // Fill in valid details
    await user.type(screen.getByPlaceholderText("John Doe"), "Rahul Sharma");
    await user.type(screen.getByPlaceholderText("john@example.com"), "rahul@example.com");
    await user.type(screen.getByPlaceholderText("+91 77363 22522"), "9876543210");

    // Fill in required Adults, Children, Date
    const adultsTrigger = screen.getByLabelText(/adults/i);
    await user.click(adultsTrigger);
    await user.click(screen.getByRole("option", { name: "2 Adults" }));

    const childrenTrigger = screen.getByLabelText(/children/i);
    await user.click(childrenTrigger);
    await user.click(screen.getByRole("option", { name: "No Children" }));

    const dateInput = screen.getByLabelText(/preferred travel date/i);
    await user.type(dateInput, "2026-10-15");

    await user.type(
      screen.getByPlaceholderText("Any special requests, budget preferences, or custom itinerary details..."),
      "Looking for a 4-day Goa trip"
    );

    const submitBtn = screen.getByRole("button", { name: /submit inquiry via whatsapp/i });
    await user.click(submitBtn);

    await waitFor(
      () => {
        expect(window.open).toHaveBeenCalledTimes(1);
      },
      { timeout: 2500 }
    );

    const openedUrl = (window.open as unknown as ReturnType<typeof vi.fn>).mock.calls[0][0];
    // For Goa, the specialist rawPhone is 919207322522
    expect(openedUrl).toContain("https://wa.me/919207322522?text=");
    expect(openedUrl).toContain(encodeURIComponent("Rahul Sharma"));
    expect(openedUrl).toContain(encodeURIComponent("rahul@example.com"));
    expect(openedUrl).toContain(encodeURIComponent("Adults*: 2"));
    expect(openedUrl).toContain(encodeURIComponent("Children*: None"));
    expect(openedUrl).toContain(encodeURIComponent("Preferred Travel Date*: 2026-10-15"));
    expect(openedUrl).toContain(encodeURIComponent("Looking for a 4-day Goa trip"));
  });
});
