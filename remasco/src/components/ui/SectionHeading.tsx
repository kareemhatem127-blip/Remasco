interface SectionHeadingProps {
  children: string;
  subtitle?: string;
}

export const SectionHeading = ({ children, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-16 relative">
      {subtitle && (
        <p className="text-secondary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 flex items-center gap-4">
          <span className="h-[1px] w-8 bg-secondary/30"></span>
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-6xl font-bold text-primary tracking-tight leading-none mb-6">
        {children}
      </h2>
      <div className="flex items-center gap-2">
        <div className="w-12 h-1.5 bg-secondary shadow-sm"></div>
        <div className="w-3 h-1.5 bg-primary/20"></div>
      </div>
    </div>
  );
};
