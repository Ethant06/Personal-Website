import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Life } from "@/components/sections/Life";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main id="content" className="flex-1 bg-background">
      <Hero />
      <Experience />
      <Projects />
      <Life />
    </main>
  );
}
