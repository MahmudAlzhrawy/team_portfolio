"use client";

import ProjectCard from "@/components/ProjectCard";
import { Suspense } from "react";
import Loading from "../loading";
const projects = [
  {
    id: 1,
    image: "/images/projects/p1.jpg",
    title: "Command Project",
    description: "A platform to manage commands efficiently and with flexibility.",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    demoLink: "#",
  },
  {
    id: 2,
    image: "/images/projects/p2.jpg",
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills and projects.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoLink: "#",
  },
  {
    id: 3,
    image: "/images/projects/p3.jpg",
    title: "Shop App",
    description: "An e-commerce platform built with modern technologies.",
    technologies: ["React", "Redux", "Firebase"],
    demoLink: "#",
  },
];

export default function Projects() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gray-100 py-24"> {/* Changed bg-cream to bg-gray-100 for a lighter background */}
        <div className="container w-[90%] mx-auto text-center">
          <h1 className="text-primary-DEFAULT text-5xl md:text-6xl font-alexandria font-bold mb-6 animate-fadeInUp">
            Projects CodeVerse
          </h1>
          <p className="text-secondary-DEFAULT text-[#607D8B] max-w-2xl mx-auto mb-12 font-serif">
            Explore our innovative projects built with the latest technologies and modern frameworks.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
