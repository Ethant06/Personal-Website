import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";

type Project = (typeof portfolio.projects)[number];

type ProjectItemProps = {
  project: Project;
  reversed?: boolean;
};

export function ProjectItem({ project, reversed = false }: ProjectItemProps) {
  return (
    <article
      className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 lg:gap-16 ${
        reversed ? "md:[&>div:first-child]:order-2" : ""
      }`}
    >
      {project.image ? (
        <div className="rounded-lg shadow-photo md:col-span-7">
          <div className="group overflow-hidden rounded-lg border border-border">
            <Image
              src={project.image}
              alt={`${project.title} cover`}
              width={project.imageWidth}
              height={project.imageHeight}
              sizes="(min-width: 768px) 58vw, 100vw"
              className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </div>
        </div>
      ) : null}

      <div
        className={`min-w-0 ${project.image ? "md:col-span-5" : "md:col-span-8"}`}
      >
        <p className="text-sm tracking-[0.18em] text-muted">{project.year}</p>
        <h3 className="mt-3 text-2xl font-medium tracking-tight">
          {project.title}
        </h3>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm tracking-wide text-muted transition-colors duration-200 hover:border-accent/40 hover:text-foreground"
          >
            <GitHubIcon />
            Github
            <ExternalLink aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ) : null}
        <p className="mt-4 max-w-md text-pretty">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs tracking-wide text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5 fill-current"
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}
