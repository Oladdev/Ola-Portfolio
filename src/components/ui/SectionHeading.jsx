export const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white">
      {children}
    </h2>
    {subtitle && <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>}
  </div>
);
