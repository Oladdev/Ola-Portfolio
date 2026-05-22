import { describe, it, expect } from "vitest";

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

// Tests
describe("Form Validation", () => {
  describe("validateEmail", () => {
    it("should return true for valid emails", () => {
      expect(validateEmail("user@example.com")).toBe(true);
      expect(validateEmail("test.user@domain.co.uk")).toBe(true);
      expect(validateEmail("a@b.c")).toBe(true);
    });

    it("should return false for invalid emails", () => {
      expect(validateEmail("invalid")).toBe(false);
      expect(validateEmail("user@")).toBe(false);
      expect(validateEmail("@example.com")).toBe(false);
      expect(validateEmail("user @example.com")).toBe(false);
      expect(validateEmail("user@example")).toBe(false);
    });
  });

  describe("validateFormData", () => {
    it("should return empty errors for valid data", () => {
      const errors = validateFormData(
        "John Doe",
        "john@example.com",
        "Hello world"
      );
      expect(Object.keys(errors)).toHaveLength(0);
    });

    it("should return error for empty name", () => {
      const errors = validateFormData("", "john@example.com", "message");
      expect(errors.name).toBeDefined();
    });

    it("should return error for empty email", () => {
      const errors = validateFormData("John", "", "message");
      expect(errors.email).toBeDefined();
    });

    it("should return error for invalid email", () => {
      const errors = validateFormData("John", "invalid-email", "message");
      expect(errors.email).toBe("Please enter a valid email address");
    });

    it("should return error for empty message", () => {
      const errors = validateFormData("John", "john@example.com", "");
      expect(errors.message).toBeDefined();
    });

    it("should return multiple errors for invalid data", () => {
      const errors = validateFormData("", "", "");
      expect(Object.keys(errors).length).toBeGreaterThan(1);
    });
  });
});
