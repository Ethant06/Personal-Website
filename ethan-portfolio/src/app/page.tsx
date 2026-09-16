import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Life } from "@/components/sections/Life";
import { Projects } from "@/components/sections/Projects";
import { Research } from "@/components/sections/Research";

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Experience />
      <Research />
      <Projects />
      <Life />
      <Contact />
    </main>
  );
}
