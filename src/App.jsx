import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// --- DATA IMPORTS ---
import { NAV_LINKS } from "./data/navigation";
import { PROJECTS } from "./data/projects";
import { SKILLS } from "./data/skills";
import { LEADERSHIP } from "./data/leadership";
import { BLOG_POSTS } from "./data/blog";

// --- COMPONENT IMPORTS ---
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { LeadershipSection } from "./components/sections/LeadershipSection";
import { BlogSection } from "./components/sections/BlogSection";
import { ContactSection } from "./components/sections/ContactSection";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ from_name: "", from_email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "");
  }, []);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // Form Handlers
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setSubmitStatus("error");
      setSubmitMessage("Please fill in all fields.");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
      setSubmitStatus("error");
      setSubmitMessage("Please enter a valid email address.");
      setTimeout(() => setSubmitStatus(null), 5000);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: import.meta.env.VITE_CONTACT_EMAIL,
        }
      );

      setSubmitStatus("success");
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({ from_name: "", from_email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Email send failed:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        "Failed to send message. Please try again or email me directly at pwreshy@gmail.com"
      );
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-slate-950" : "bg-slate-50"}`}
    >
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Contact & Footer */}
      <ContactSection
        formData={formData}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        isSubmitting={isSubmitting}
        submitStatus={submitStatus}
        submitMessage={submitMessage}
      />
    </div>
  );
}
