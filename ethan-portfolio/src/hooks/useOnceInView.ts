"use client";

import { useLayoutEffect, useRef, useState } from "react";

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useOnceInView<T extends HTMLElement>({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
}: InViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [visible, setVisible] = useState(true);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    setShouldAnimate(true);
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setVisible(true);
        observer.disconnect();
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return {
    ref,
    isVisible: !shouldAnimate || visible,
  };
}
