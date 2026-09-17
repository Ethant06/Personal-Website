"use client";

import { useLayoutEffect, useRef, useState } from "react";

export type TimelineEntry = {
  id: string;
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  institution?: string;
};

type TimelineProps = {
  entries: readonly TimelineEntry[];
};

export function Timeline({ entries }: TimelineProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [visibleIds, setVisibleIds] = useState<Set<string>>(
    () => new Set(entries.map((entry) => entry.id)),
  );
  const itemRefs = useRef(new Map<string, HTMLLIElement>());

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    setShouldAnimate(true);
    setVisibleIds(new Set());

    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (!item.isIntersecting) {
            return;
          }

          const id = item.target.getAttribute("data-timeline-id");
          if (!id) {
            return;
          }

          setVisibleIds((current) => {
            const next = new Set(current);
            next.add(id);
            return next;
          });
          observer.unobserve(item.target);
        });
      },
      { threshold: 0.28, rootMargin: "0px 0px -12% 0px" },
    );

    itemRefs.current.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const progress =
    entries.length === 0
      ? 0
      : (shouldAnimate ? visibleIds.size : entries.length) / entries.length;

  return (
    <ol className="relative mt-12 md:mt-16">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[0.625rem] w-px bg-border md:left-[calc(14rem+2rem+0.625rem)]"
      />
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[0.625rem] w-px origin-top bg-accent/80 transition-transform duration-500 ease-out md:left-[calc(14rem+2rem+0.625rem)]"
        style={{ transform: `scaleY(${progress})` }}
      />

      {entries.map((entry) => {
        const isVisible = !shouldAnimate || visibleIds.has(entry.id);
        const dateRange = `${entry.startDate} — ${entry.endDate}`;

        return (
          <li
            key={entry.id}
            ref={(node) => {
              if (node) {
                itemRefs.current.set(entry.id, node);
              } else {
                itemRefs.current.delete(entry.id);
              }
            }}
            data-timeline-id={entry.id}
            className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-4 pb-12 last:pb-0 md:grid-cols-[14rem_1.25rem_minmax(0,1fr)] md:gap-x-8 md:pb-16"
          >
            <p className="hidden whitespace-nowrap pt-0.5 text-right text-sm text-muted md:block">
              {dateRange}
            </p>

            <div className="relative flex justify-center">
              <span
                className={`relative z-10 mt-1.5 size-2.5 rounded-full border transition-[background-color,border-color,transform] duration-300 ease-out ${
                  isVisible
                    ? "scale-100 border-accent bg-accent"
                    : "scale-90 border-border bg-background"
                }`}
              />
            </div>

            <div
              className={`min-w-0 transition-[opacity,transform] duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <p className="text-sm text-muted md:hidden">{dateRange}</p>
              <h3 className="mt-1 text-lg font-medium tracking-tight md:mt-0">
                {entry.role}
              </h3>
              <p className="mt-1 text-[0.95rem] text-foreground/90">
                {entry.organization}
                {entry.institution ? ` · ${entry.institution}` : null}
              </p>
              <p className="mt-1 text-sm">{entry.location}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
