import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const CONTACTS = [
  {
    href: "https://www.linkedin.com/in/et06/",
    label: "LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
  {
    href: "https://github.com/Ethant06",
    label: "GitHub",
    icon: GitHubIcon,
    external: true,
  },
] as const;

export function Hero() {
  return (
    <section
      id="me"
      aria-label="Introduction"
      className="relative flex min-h-svh snap-start snap-always flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_-8%,rgb(38_68_102/0.28),transparent_56%)]"
      />

      <div className="relative mx-auto flex w-full max-w-content flex-1 -translate-y-8 flex-col justify-center px-page-x pt-nav md:-translate-y-12 md:grid md:grid-cols-12 md:items-center md:gap-10 lg:gap-14">
        <Reveal className="py-4 md:col-span-6 md:py-0">
          <h1 className="flex w-fit flex-col gap-2 text-left text-[clamp(3.5rem,11vw,7rem)] uppercase leading-none tracking-[0.08em] sm:gap-3">
            <span className="block">Ethan</span>
            <span className="block">Tandio</span>
          </h1>

          <div className="mt-8 border-l border-accent/35 pl-5 sm:mt-10">
            <p className="max-w-sm text-muted">
              <span className="block text-foreground">
                Computer Science @ University of Washington Seattle
              </span>
              <span className="mt-2 block text-sm tracking-wide">
                Applied Mathematics minor
              </span>
              <span className="mt-2 block text-sm tracking-wide">
                Data Science minor
              </span>
            </p>

            <ul className="mt-8 flex items-center gap-5 sm:mt-10">
              {CONTACTS.map(({ href, label, icon: Icon, external }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex text-muted transition-colors duration-200 hover:text-foreground"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal
          variant="image"
          delay={100}
          className="relative mx-auto mb-20 aspect-[3/4] w-full max-w-[14rem] shadow-photo md:col-span-6 md:mb-0 md:ml-8 md:aspect-auto md:h-[min(56vh,28rem)] md:w-full md:max-w-[22rem] md:justify-self-start lg:ml-12"
        >
          <div className="group absolute inset-0 overflow-hidden">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Ethan Tandio standing by the water at night"
              fill
              priority
              sizes="(min-width: 768px) 280px, 180px"
              className="object-cover object-[center_62%] transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent md:hidden"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 hidden bg-gradient-to-l from-transparent via-background/10 to-background md:block"
            />
          </div>
        </Reveal>
      </div>

      <a
        href="#experience"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors duration-200 hover:text-foreground"
        aria-label="Scroll to experience"
      >
        <ChevronDown
          aria-hidden="true"
          className="size-8 animate-scroll-hint"
          strokeWidth={1.5}
        />
      </a>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-current"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43A2.06 2.06 0 1 1 5.34 3.3a2.06 2.06 0 0 1 0 4.13M7.12 20.45H3.56V9h3.56zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-6 fill-current"
    >
      <path d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 12 .3" />
    </svg>
  );
}
