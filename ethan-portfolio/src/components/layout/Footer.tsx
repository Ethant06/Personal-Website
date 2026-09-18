import { Reveal } from "@/components/ui/Reveal";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/et06/",
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Ethant06",
    label: "GitHub",
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background px-page-x pb-16 pt-20 md:pb-24 md:pt-28">
      <Reveal className="mx-auto flex w-full max-w-content flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">© 2026 Ethan Tandio</p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <li>
            <a
              href="mailto:ethantandio156@gmail.com"
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              ethantandio156@gmail.com
            </a>
          </li>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </footer>
  );
}
