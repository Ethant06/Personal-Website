type SectionProps = {
  id?: string;
  children: React.ReactNode;
};

export function Section({ id, children }: SectionProps) {
  return (
    <section
      {...(id ? { id } : {})}
      className="flex min-h-[70vh] scroll-mt-24 flex-col justify-center px-6 py-24 sm:px-10 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
