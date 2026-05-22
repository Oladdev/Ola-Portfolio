// Navigation types
export interface NavLink {
  name: string;
  href: string;
}

// Project types
export interface ProjectLink {
  demo: string;
  repo: string;
}

export interface Project {
  title: string;
  description: string;
  challenges: string;
  tags: string[];
  links: ProjectLink;
}

// Skills types
export interface SkillsCategory {
  frontend: string[];
  backend: string[];
  tools: string[];
}

// Leadership types
export interface LeadershipRole {
  role: string;
  org: string;
  period: string;
  desc: string;
}

// Blog types
export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}

// Form types
export interface FormData {
  from_name: string;
  from_email: string;
  message: string;
}

export interface EmailJSMessage extends FormData {
  to_email: string;
}

// Component props types
export interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export interface ContactSectionProps {
  formData: FormData;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  submitStatus: "success" | "error" | null;
  submitMessage: string;
}

// Submit status type
export type SubmitStatus = "success" | "error" | null;
