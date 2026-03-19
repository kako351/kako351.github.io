interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
    </div>
  );
}
