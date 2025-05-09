"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  index?: number;
}

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  demoLink,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index! * 0.2 + 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-primary-DEFAULT text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-DEFAULT mb-4 flex-grow">{description}</p>
        <div className="mb-4">
          <h3 className="text-primary-DEFAULT font-semibold mb-2">Technologies:</h3>
          <ul className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <li
                key={index}
                className="bg-primary-light/60 text-primary-DEFAULT px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={demoLink}
          target="_blank"
          className="mt-auto inline-block bg-primary-DEFAULT hover:bg-primary-dark text-white text-center py-2 px-4 rounded-lg transition duration-300"
        >
          View Demo
        </Link>
      </div>
    </motion.div>
  );
}
