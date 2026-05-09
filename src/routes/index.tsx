import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kai Hoang — Software Engineer & Designer" },
      {
        name: "description",
        content:
          "Portfolio of Kai Hoang — software engineer crafting performant, accessible web experiences at the intersection of design and engineering.",
      },
      { property: "og:title", content: "Kai Hoang — Software Engineer & Designer" },
      {
        property: "og:description",
        content:
          "Selected projects, skills, and experience by Kai Hoang.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
