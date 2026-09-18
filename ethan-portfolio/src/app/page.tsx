import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Life } from "@/components/sections/Life";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main id="content">
      <Hero />
      <Experience />
      <Projects />
      <Life />
    </main>
  );
}
