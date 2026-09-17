import Image from "next/image";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_-8%,rgb(38_68_102/0.28),transparent_56%)]"
      />

      <div className="relative mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-page-x pt-nav md:grid md:grid-cols-12 md:items-center md:gap-12 lg:gap-20">
        <div className="py-8 md:col-span-7 md:py-0">
          <h1 className="uppercase tracking-[0.04em]">
            <span className="block">Ethan</span>
            <span className="block">Tandio</span>
          </h1>

          <ul className="mt-8 space-y-2.5 border-l border-accent/35 pl-5 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-muted sm:mt-10">
            <li>Student</li>
            <li>Builder</li>
            <li>Researcher</li>
          </ul>

          <p className="mt-10 max-w-sm text-pretty sm:mt-12">
            I study computer science at the University of Washington.
            <br />
            I build software and machine learning that solves real-world
            problems.
          </p>
        </div>

        <div className="relative mx-auto mb-20 aspect-[3/4] w-full max-w-[16.5rem] md:col-span-5 md:mb-0 md:aspect-auto md:h-[min(74vh,38rem)] md:max-w-none">
          <Image
            src="/portrait.jpg"
            alt="Portrait of Ethan Tandio standing by the water at night"
            fill
            priority
            sizes="(min-width: 768px) 38vw, 264px"
            className="object-cover object-[center_18%]"
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
      </div>

      <a
        href="#education"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-muted transition-colors duration-200 hover:text-foreground"
        aria-label="Scroll to education"
      >
        <span className="text-[0.62rem] uppercase tracking-[0.32em]">
          Scroll
        </span>
        <span
          aria-hidden="true"
          className="relative block h-11 w-px bg-border"
        >
          <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-accent animate-scroll-hint" />
        </span>
      </a>
    </section>
  );
}
