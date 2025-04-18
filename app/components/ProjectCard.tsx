'use client';

import { FaGithub, FaYoutube } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFastapi,
  SiPython,
  SiReact,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';

type ProjectCardProps = {
  title: string;
  description: string;
  github: string;
  youtube: string;
  tech: string[];
};

const techIcons: Record<string, JSX.Element> = {
  python: <SiPython />,
  fastapi: <SiFastapi />,
  nextjs: <SiNextdotjs />,
  react: <SiReact />,
  mongodb: <SiMongodb />,
  tailwind: <SiTailwindcss />,
};

export default function ProjectCard({
  title,
  description,
  github,
  youtube,
  tech = [],
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{description}</p>
      </div>

      <div className="flex space-x-4 mb-3">
        <a href={youtube} target="_blank" className="text-red-500 flex items-center gap-1 text-sm">
          <FaYoutube /> Demo
        </a>
        <a href={github} target="_blank" className="text-gray-700 dark:text-gray-300 flex items-center gap-1 text-sm">
          <FaGithub /> GitHub
        </a>
      </div>

      <div className="flex flex-wrap justify-end gap-2 mt-auto">
        {tech.map((item) => {
          const key = item.toLowerCase().replace('.', '');
          return (
            <span
              key={item}
              className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full flex items-center gap-1"
            >
              {techIcons[key] ?? null}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
