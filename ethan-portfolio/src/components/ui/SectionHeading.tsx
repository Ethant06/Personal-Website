import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  as?: "h1" | "h2";
  children: React.ReactNode;
};

export function SectionHeading({
  as: Tag = "h2",
  children,
}: SectionHeadingProps) {
  return (
    <Reveal>
      <Tag>{children}</Tag>
    </Reveal>
  );
}
