import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock Next.js navigation hooks
vi.mock("next/navigation", () => {
  return {
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
    }),
    useParams: () => ({ slug: "maldives-paradise" }),
    usePathname: () => "/",
    useSearchParams: () => new URLSearchParams(),
  };
});

// Mock GSAP & ScrollTrigger for node/jsdom environment
vi.mock("gsap", () => {
  const gsapMock: Record<string, unknown> = {
    to: vi.fn().mockReturnValue({ kill: vi.fn() }),
    fromTo: vi.fn().mockReturnValue({ kill: vi.fn() }),
    set: vi.fn(),
    quickTo: vi.fn(() => vi.fn()),
    timeline: vi.fn(() => ({
      to: vi.fn().mockReturnThis(),
      fromTo: vi.fn().mockReturnThis(),
      set: vi.fn().mockReturnThis(),
      kill: vi.fn(),
      scrollTrigger: vi.fn(),
    })),
    context: vi.fn((fn: () => void) => {
      fn();
      return { revert: vi.fn() };
    }),
    registerPlugin: vi.fn(),
  };
  return {
    default: gsapMock,
    gsap: gsapMock,
  };
});

vi.mock("gsap/ScrollTrigger", () => {
  const ScrollTriggerMock = {
    create: vi.fn(() => ({ kill: vi.fn() })),
    register: vi.fn(),
    getAll: vi.fn(() => []),
    killAll: vi.fn(),
  };
  return {
    default: ScrollTriggerMock,
    ScrollTrigger: ScrollTriggerMock,
  };
});

// Mock Lenis smooth scrolling
vi.mock("lenis", () => {
  return {
    default: class MockLenis {
      on = vi.fn();
      destroy = vi.fn();
      raf = vi.fn();
    },
  };
});

// Mock IntersectionObserver for animations / scroll reveals
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
});

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  configurable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo
window.scrollTo = vi.fn();
