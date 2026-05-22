import { describe, it, expect } from "vitest";
import { render, screen } from "./test-utils";
import { Navbar } from "../components/layout/Navbar";
import { vi } from "vitest";

describe("Navbar Component", () => {
  const mockProps = {
    darkMode: true,
    toggleTheme: vi.fn(),
    mobileMenuOpen: false,
    setMobileMenuOpen: vi.fn(),
  };

  it("should render navbar with branding", () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByText("&lt;Ola /&gt;")).toBeInTheDocument();
  });

  it("should render navigation links", () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Skills/i })).toBeInTheDocument();
  });

  it("should have correct link hrefs", () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute(
      "href",
      "#about"
    );
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  it("should render theme toggle button", () => {
    render(<Navbar {...mockProps} />);
    const themeButtons = screen.getAllByLabelText(/Toggle theme/i);
    expect(themeButtons.length).toBeGreaterThan(0);
  });

  it("should call toggleTheme when theme button is clicked", () => {
    render(<Navbar {...mockProps} />);
    const themeButton = screen.getAllByLabelText(/Toggle theme/i)[0];
    themeButton.click();
    expect(mockProps.toggleTheme).toHaveBeenCalled();
  });

  it("should render mobile menu button", () => {
    render(<Navbar {...mockProps} />);
    expect(screen.getByLabelText(/Toggle mobile menu/i)).toBeInTheDocument();
  });
});
