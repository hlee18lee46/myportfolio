'use client';

import React from 'react';
import Image from 'next/image';

import { FaGithub, FaYoutube } from 'react-icons/fa';
import {
    SiPython,
    SiFastapi,
    SiNextdotjs,
    SiReact,
    SiMongodb,
    SiTailwindcss,
    SiFlask,
    SiArduino,
    SiUnity,
    SiSwift,
    SiScikitlearn,
    SiStreamlit,
    SiSupabase,
    SiTerraform,
    SiNodedotjs,
    SiVite,
  } from 'react-icons/si';

type ProjectCardProps = {
  title: string;
  description: string;
  github?: string;
  youtube?: string;
  devpost?: string; // ✅ optional
  tech: string[];
};


const techIcons: Record<string, React.ReactNode> = {
    python: <SiPython />,
    fastapi: <SiFastapi />,
    nextjs: <SiNextdotjs />,
    react: <SiReact />,
    mongodb: <SiMongodb />,
    tailwind: <SiTailwindcss />,
    flask: <SiFlask />,
    arduino: <SiArduino />,
    unity: <SiUnity />,
    swift: <SiSwift />,
    scikitlearn: <SiScikitlearn />,
    streamlit: <SiStreamlit />,
    supabase: <SiSupabase />,
    terraform: <SiTerraform />,
    nodejs: <SiNodedotjs />,
    vite: <SiVite />,
  };

export default function ProjectCard({
  title,
  description,
  github,
  youtube,
  devpost,
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

        <a
            href={devpost}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-300 text-sm flex items-center gap-1"
          >
            <Image
              src="/dev.jpg"
              alt="Devpost"
              width={16}
              height={16}
              className="rounded-sm"
            />
            Devpost
          </a>

      </div>

      <div className="flex flex-wrap justify-end gap-2 mt-auto">
        {tech.map((item) => {
            const key = item.toLowerCase().replace('.', '').replace('-', '');
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
