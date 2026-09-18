"use client";

import { useOnceInView } from "@/hooks/useOnceInView";

const VARIANT_CLASS = {
  copy: {
    duration: "duration-500",
    hidden: "translate-y-3 opacity-0",
    visible: "translate-y-0 opacity-100",
  },
  image: {
    duration: "duration-[550ms]",
    hidden: "translate-y-4 scale-[0.98] opacity-0",
    visible: "translate-y-0 scale-100 opacity-100",
  },
} as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof VARIANT_CLASS;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "copy",
}: RevealProps) {
  const { ref, isVisible } = useOnceInView<HTMLDivElement>();
  const motion = VARIANT_CLASS[variant];

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none ${motion.duration} ${
        isVisible ? motion.visible : motion.hidden
      } ${className}`}
      style={{ transitionDelay: isVisible && delay ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
