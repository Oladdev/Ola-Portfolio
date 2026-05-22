import { describe, it, expect } from "vitest";
import { render, screen } from "./test-utils";
import { HeroSection } from "../components/sections/HeroSection";

describe("HeroSection Component", () => {
  it("should render without crashing", () => {
    render(<HeroSection />);
    expect(screen.getByText(/I'm Ola/i)).toBeInTheDocument();
  });

  it("should display main heading", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("I build real solutions");
  });

  it("should have correct CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /View My Work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Contact Me/i })).toBeInTheDocument();
  });

  it("should have correct button hrefs", () => {
    render(<HeroSection />);
    const viewWorkBtn = screen.getByRole("link", { name: /View My Work/i });
    const contactBtn = screen.getByRole("link", { name: /Contact Me/i });

    expect(viewWorkBtn).toHaveAttribute("href", "#projects");
    expect(contactBtn).toHaveAttribute("href", "#contact");
  });

  it("should display student status badge", () => {
    render(<HeroSection />);
    expect(screen.getByText(/SOFTWARE ENGINEERING STUDENT/i)).toBeInTheDocument();
  });

  it("should display descriptive text", () => {
    render(<HeroSection />);
    expect(screen.getByText(/Second-year undergraduate/i)).toBeInTheDocument();
  });
});
