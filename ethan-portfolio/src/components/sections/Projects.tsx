import { Section } from "@/components/layout/Section";
import { ProjectItem } from "@/components/ui/ProjectItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading>Projects</SectionHeading>
      <ul className="mt-12 flex flex-col gap-20 md:mt-16 md:gap-28">
        {portfolio.projects.map((project, index) => (
          <li key={project.id}>
            <ProjectItem project={project} reversed={index % 2 === 1} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
