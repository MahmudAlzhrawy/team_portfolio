"use client";

import ProjectCard from "@/components/ProjectCard";
import { Suspense } from "react";
import Loading from "../loading";
const projects = [
  {
    id: 1,
    image: "/images/projects/p1.png",
    title: "Command Project",
    description: "A comprehensive platform designed to manage and track user commands efficiently with full flexibility. It provides administrators with tools to monitor, edit, and optimize command operations in real-time, ensuring smoother workflows and better control over complex systems.",
    technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
    demoLink: "https://mahmoudaliaboelhassan.github.io/Leon-template/",
  },
  {
    id: 5,
    image: "/images/projects/p5.png",
    title: "Restaurant Platform",
    description: "An intuitive restaurant management system built to handle online reservations, manage menus, and track orders seamlessly. It offers customers a smooth ordering experience while giving restaurant managers powerful analytics and management features for daily operations.",
    technologies: ["React", "Redux", "Tailwind CSS", "MongoDB"],
    demoLink: "https://mz-restorant.vercel.app/",
  },
  {
    id: 6,
    image: "/images/projects/p6.png",
    title: "Musaed Chat bot",
    description: "A smart chatbot application aimed at improving customer support experiences. It automates responses to frequent queries, assists users in navigating services, and is designed with flexibility to integrate across different platforms for scalable communication solutions.",
    technologies: ["React", "Javascript", "Tailwind CSS", "MongoDB"],
    demoLink: "https://musaed-chatbot.netlify.app/",
  },
  {
    id: 3,
    image: "/images/projects/p3.png",
    title: "Movie App",
    description: "An engaging movie discovery platform that allows users to search for their favorite films, explore trending movies, and access detailed information such as ratings, reviews, and trailers. Built with a responsive design to deliver a perfect experience on all devices.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    demoLink: "https://mahmoudaliaboelhassan.github.io/webMaster-phase-one-task-three/",
  },
  {
    id: 4,
    image: "/images/projects/p4.png",
    title: "Posts CRUD",
    description: "A fully functional CRUD (Create, Read, Update, Delete) application tailored for managing blog posts. It supports authentication, secure editing, and real-time updates, providing users with a smooth and organized content management experience.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    demoLink: "https://posts-crud-fullstack.vercel.app/",
  },
  {
    id: 2,
    image: "/images/projects/p2.png",
    title: "Blog CRUD",
    description: "A minimalistic yet powerful blog management application that enables users to easily create new articles, update existing ones, and manage blog content with a simple and clean user interface. Optimized for performance and scalability.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    demoLink: "https://blog-dashboard-web.vercel.app/",
  },
  {
    id: 7,
    image: "/images/projects/p7.png",
    title: "MarktJoy",
    description: "An extensive e-commerce platform offering a wide range of products for users to browse, search, and purchase. Designed with a user-first approach, it ensures a fast, secure, and seamless shopping experience enhanced by integrated payment gateways and user accounts.",
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS", "MongoDB"],
    demoLink: "https://ecommerce-frontend-livid-seven.vercel.app/",
  },
  {
    id: 8,
    image: "/images/projects/p8.png",
    title: "Mail Landing Page",
    description: "A sleek and professional landing page built for an email marketing platform. It showcases features, pricing plans, and user testimonials with a responsive and modern design to drive user engagement and improve conversion rates.",
    technologies: ["React", "Redux", "MongoDB"],
    demoLink: "https://mahmudalzhrawy.github.io/Mail/",
  },
];


export default function Projects() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gray-100 py-24"> {/* Changed bg-cream to bg-gray-100 for a lighter background */}
        <div className="container w-[90%] mx-auto text-center">
            <h1 className="text-primary-dark text-5xl md:text-6xl font-alexandria font-bold mb-6 animate-fadeInUp">
            Projects CodeVerse
          </h1>
            <p className="text-gray-dark text-lg md:text-xl max-w-3xl mx-auto leading-8 animate-fadeInUp delay-200 mb-8">
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
