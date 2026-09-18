"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "#me", label: "Hello" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#life", label: "Outside of School" },
] as const;

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

function navLinkClassName(isActive: boolean, compact = false) {
  const base = compact
    ? "block py-3 text-base transition-[color,text-decoration-color] duration-200"
    : "pointer-events-auto text-sm tracking-wide transition-[color,text-decoration-color] duration-200";

  if (isActive) {
    return `${base} text-foreground underline decoration-accent decoration-1 underline-offset-[0.65rem]`;
  }

  return `${base} text-muted hover:text-foreground`;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<(typeof SECTION_IDS)[number]>("me");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const isSolid = scrolled || menuOpen;

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 16);

      const marker = Math.min(window.innerHeight * 0.3, 160);
      let current: (typeof SECTION_IDS)[number] = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }

      setActiveId(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (media.matches) {
        setMenuOpen(false);
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        isSolid
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-page-x focus:top-3 focus:z-[60] focus:bg-elevated focus:px-3 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="relative flex h-nav w-full items-center justify-between px-page-x"
      >
        <a
          href="#me"
          className="relative z-10 text-sm font-medium tracking-[0.16em] text-foreground"
          onClick={() => setMenuOpen(false)}
        >
          Ethan Tandio
        </a>
        <ul className="pointer-events-none absolute inset-0 hidden items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={navLinkClassName(isActive)}
                  aria-current={isActive ? "location" : undefined}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          ref={menuButtonRef}
          type="button"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>
      </nav>
      {menuOpen ? (
        <div id={menuId} className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-content flex-col gap-1 px-page-x py-4">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.href.slice(1);

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={navLinkClassName(isActive, true)}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
