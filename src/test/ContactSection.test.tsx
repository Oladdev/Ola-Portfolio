import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "./test-utils";
import { ContactSection } from "../components/sections/ContactSection";

describe("ContactSection Component", () => {
  const mockFormData = {
    from_name: "",
    from_email: "",
    message: "",
  };

  const mockHandlers = {
    handleFormChange: vi.fn(),
    handleFormSubmit: vi.fn(),
  };

  it("should render contact form", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={false}
        submitStatus={null}
        submitMessage=""
      />
    );

    expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Hi Ola...")).toBeInTheDocument();
  });

  it("should render social links", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={false}
        submitStatus={null}
        submitMessage=""
      />
    );

    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Twitter/i)).toBeInTheDocument();
  });

  it("should call handleFormChange on input change", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={false}
        submitStatus={null}
        submitMessage=""
      />
    );

    const nameInput = screen.getByPlaceholderText("Your Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    expect(mockHandlers.handleFormChange).toHaveBeenCalled();
  });

  it("should display success message when submitStatus is success", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={false}
        submitStatus="success"
        submitMessage="Message sent successfully!"
      />
    );

    expect(screen.getByText(/Message sent successfully!/i)).toBeInTheDocument();
  });

  it("should display error message when submitStatus is error", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={false}
        submitStatus="error"
        submitMessage="Failed to send message"
      />
    );

    expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument();
  });

  it("should disable form inputs when isSubmitting is true", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={true}
        submitStatus={null}
        submitMessage=""
      />
    );

    expect(screen.getByPlaceholderText("Your Name")).toBeDisabled();
    expect(screen.getByPlaceholderText("you@example.com")).toBeDisabled();
    expect(screen.getByPlaceholderText("Hi Ola...")).toBeDisabled();
  });

  it("should display loading state on submit button", () => {
    render(
      <ContactSection
        formData={mockFormData}
        handleFormChange={mockHandlers.handleFormChange}
        handleFormSubmit={mockHandlers.handleFormSubmit}
        isSubmitting={true}
        submitStatus={null}
        submitMessage=""
      />
    );

    expect(screen.getByText(/Sending.../i)).toBeInTheDocument();
  });
});
