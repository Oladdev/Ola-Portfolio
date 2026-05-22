import "@testing-library/jest-dom";
import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

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

// Mock import.meta.env
Object.defineProperty(import.meta, "env", {
  value: {
    VITE_EMAILJS_PUBLIC_KEY: "test-key",
    VITE_EMAILJS_SERVICE_ID: "test-service",
    VITE_EMAILJS_TEMPLATE_ID: "test-template",
    VITE_CONTACT_EMAIL: "test@example.com",
  },
});
