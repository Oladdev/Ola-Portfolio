import { Github, Linkedin, Mail, Twitter, Instagram, Ghost, Loader, CheckCircle, AlertCircle } from "lucide-react";

export function ContactSection({
  formData,
  handleFormChange,
  handleFormSubmit,
  isSubmitting,
  submitStatus,
  submitMessage,
}) {
  return (
    <footer
      id="contact"
      className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Let's Build Something.
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
          Whether it's a student project collaboration or a freelance gig, I'm
          always open to discussing new ideas.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          <a
            href="https://github.com/Oladdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/atolagbe-precious-79a429263"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/oladdev"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="Twitter / X"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/pwreshy.08?igsh=MWd5OWxzb2JieHRxZw=="
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.snapchat.com/add/i_amolaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-yellow-500 dark:hover:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="Snapchat"
          >
            <Ghost size={24} />
          </a>
          <a
            href="mailto:pwreshy@gmail.com"
            className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <form
          className="max-w-md mx-auto space-y-4 mb-20 text-left"
          onSubmit={handleFormSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-shadow"
              placeholder="Your Name"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-shadow"
              placeholder="you@example.com"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleFormChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white transition-shadow"
              placeholder="Hi Ola..."
              disabled={isSubmitting}
            ></textarea>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                submitStatus === "success"
                  ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-200"
                  : "bg-red-50 dark:bg-red-950 text-red-700 dark:text-red-200"
              }`}
            >
              {submitStatus === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span className="text-sm">{submitMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <div className="text-sm text-slate-500 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800 pt-8">
          <p>
            &copy; 2026 Atolagbe Precious Olawole. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
