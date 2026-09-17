import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/ui/Timeline";
import { portfolio } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading>Work Experience</SectionHeading>
      <Timeline entries={portfolio.experience} />
    </Section>
  );
}
