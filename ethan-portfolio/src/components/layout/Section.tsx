type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export function Section({ id, children }: SectionProps) {
  return (
    <section
      {...(id ? { id } : {})}
      className="scroll-mt-nav snap-start snap-always px-page-x py-section-y"
    >
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}
