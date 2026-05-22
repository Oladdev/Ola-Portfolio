import type { FC } from "react";

/**
 * Skip Link - Allows keyboard users to jump directly to main content
 * WCAG 2.1 Level A - Allow bypass of repetitive content
 */
export const SkipLink: FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only absolute top-0 left-0 z-50 px-4 py-2 bg-indigo-600 text-white font-bold rounded-b-lg"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};
