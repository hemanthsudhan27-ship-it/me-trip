import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import DestinationsPage from "@/app/destinations/page";
import GalleryPage from "@/app/gallery/page";
import PackageDetailPage from "@/app/packages/[slug]/page";
import { UIModalProvider } from "@/providers/UIModalProvider";

describe("Pages Smoke Tests (Render Without Crash)", () => {
  it("renders Home Page without crashing", () => {
    render(
      <UIModalProvider>
        <HomePage />
      </UIModalProvider>
    );
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders About Page without crashing", () => {
    render(
      <UIModalProvider>
        <AboutPage />
      </UIModalProvider>
    );
    expect(screen.getByText(/About ME TRIP HOLIDAYS/i)).toBeInTheDocument();
  });

  it("renders Destinations Page without crashing", () => {
    render(
      <UIModalProvider>
        <DestinationsPage />
      </UIModalProvider>
    );
    expect(screen.getByText(/Explore Destinations/i)).toBeInTheDocument();
  });

  it("renders Gallery Page without crashing", () => {
    render(
      <UIModalProvider>
        <GalleryPage />
      </UIModalProvider>
    );
    expect(screen.getByText(/Our Travel Gallery/i)).toBeInTheDocument();
  });

  it("renders Package Detail [slug] Page without crashing", async () => {
    render(
      <UIModalProvider>
        <PackageDetailPage />
      </UIModalProvider>
    );
    expect(await screen.findByText(/Book \/ Enquire Now/i)).toBeInTheDocument();
  });
});
