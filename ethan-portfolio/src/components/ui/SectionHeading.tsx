type SectionHeadingProps = {
  as?: "h1" | "h2";
  children: React.ReactNode;
};

export function SectionHeading({
  as: Tag = "h2",
  children,
}: SectionHeadingProps) {
  return <Tag>{children}</Tag>;
}
