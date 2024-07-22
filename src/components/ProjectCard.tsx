// src/components/ProjectCard.tsx
import React from "react";
import { MdOpenInNew } from "react-icons/md";

interface ProjectCardProps {
  img: string;
  link: string;
  title: string;
  description: string;
  tech: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  link,
  title,
  description,
  tech,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex flex-row justify-center items-center"
          >
            {title}
            <MdOpenInNew />
          </a>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tech.map((technology, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
