import "@testing-library/jest-dom";
import { expect, afterEach, vi, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";

// Setup environment variables before tests
beforeAll(() => {
  process.env.VITE_EMAILJS_PUBLIC_KEY = "test-key";
  process.env.VITE_EMAILJS_SERVICE_ID = "test-service";
  process.env.VITE_EMAILJS_TEMPLATE_ID = "test-template";
  process.env.VITE_CONTACT_EMAIL = "test@example.com";
});

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
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
