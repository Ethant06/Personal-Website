type SectionHeadingProps = {
  as?: "h1" | "h2";
  children: React.ReactNode;
};

export function SectionHeading({
  as: Tag = "h2",
  children,
}: SectionHeadingProps) {
  return (
    <Tag className="text-3xl font-semibold tracking-tight sm:text-4xl">
      {children}
    </Tag>
  );
}
