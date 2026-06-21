import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { TechStack } from "@/components/sections/tech-stack";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Achievements />
      <Process />
      <Contact />
    </>
  );
}
