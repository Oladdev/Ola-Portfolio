import { describe, it, expect, vi } from "vitest";

/**
 * Email validation regex pattern
 * Matches: name@domain.ext format
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

/**
 * Validates form data before submission
 */
export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const validateFormData = (
  name: string,
  email: string,
  message: string
): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!name.trim()) {
    errors.name = "Name is required";
  }

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!message.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};

describe("Form Validation Utils", () => {
  describe("validateEmail", () => {
    it("should validate correct email format", () => {
      expect(validateEmail("user@example.com")).toBe(true);
      expect(validateEmail("test@domain.co.uk")).toBe(true);
    });

    it("should reject invalid email formats", () => {
      expect(validateEmail("invalid")).toBe(false);
      expect(validateEmail("user@")).toBe(false);
      expect(validateEmail("@example.com")).toBe(false);
    });
  });

  describe("validateFormData", () => {
    it("should have no errors for valid data", () => {
      const result = validateFormData("John", "john@example.com", "Hello");
      expect(Object.keys(result).length).toBe(0);
    });

    it("should have errors for empty fields", () => {
      const result = validateFormData("", "", "");
      expect(result.name).toBeDefined();
      expect(result.email).toBeDefined();
      expect(result.message).toBeDefined();
    });

    it("should validate email field specifically", () => {
      const result = validateFormData("John", "invalid", "Hello");
      expect(result.email).toBe("Please enter a valid email address");
    });
  });
});
