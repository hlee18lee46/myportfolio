'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';


const allProjects = [
  {
    title: 'AI Chatbot',
    description: 'A GPT-powered assistant built with FastAPI and Next.js.',
    github: 'https://github.com/yourname/chatbot',
    youtube: 'https://youtube.com/demo',
    tech: ['Python', 'FastAPI', 'NextJS'],
    categories: ['Web', 'Machine Learning'],
  },
  {
    title: 'Smart Car',
    description: 'Embedded Arduino system with ML-based obstacle detection.',
    github: 'https://github.com/yourname/smartcar',
    youtube: 'https://youtube.com/demo',
    tech: ['Python', 'FastAPI', 'Embedded'],
    categories: ['Embedded', 'Machine Learning'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
  {
    title: 'Mobile Portfolio',
    description: 'An iOS SwiftUI mobile app showcasing my work.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtube.com/demo',
    tech: ['React', 'Tailwind'],
    categories: ['Mobile', 'Web'],
  },
];

const techFilters = ['Python', 'FastAPI', 'NextJS', 'React', 'MongoDB', 'Tailwind'];
const categoryFilters = ['Web', 'Mobile', 'Game', 'Machine Learning', 'Embedded'];

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggle = (item: string, list: string[], setList: (value: string[]) => void) => {
    setList(list.includes(item) ? list.filter((x) => x !== item) : [...list, item]);
  };

  const filteredProjects = allProjects.filter((p) => {
    const techMatch = selectedTech.every((tech) => p.tech.includes(tech));
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.some((cat) => p.categories.includes(cat));
    return techMatch && categoryMatch;
  });

  return (
    <div>
      <Navbar />
      <Particles
  id="tsparticles"
  init={async (engine) => await loadSlim(engine)}
  options={{
    background: { color: 'transparent' },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#38bdf8' },
      links: {
        enable: true,
        color: '#38bdf8',
        distance: 120,
        opacity: 0.4,
      },
      move: { enable: true, speed: 1.2 },
      number: { value: 45 },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 3 } },
    },
  }}
  className="absolute inset-0 z-[-1]"
/>

      <main className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters */}
          <aside className="w-full md:w-1/8 space-y-6 pr-4">
  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <h2 className="font-semibold text-lg mb-4 text-center text-gray-800 dark:text-white">
      🔧 Tech Stack
    </h2>
    <div className="space-y-2">
      {techFilters.map((tech) => (
        <label key={tech} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={selectedTech.includes(tech)}
            onChange={() => toggle(tech, selectedTech, setSelectedTech)}
          />
          <span>{tech}</span>
        </label>
      ))}
    </div>
  </div>

  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <h2 className="font-semibold text-lg mb-4 text-center text-gray-800 dark:text-white">
      🎯 Category
    </h2>
    <div className="space-y-2">
      {categoryFilters.map((cat) => (
        <label key={cat} className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition">
          <input
            type="checkbox"
            className="accent-blue-500"
            checked={selectedCategories.includes(cat)}
            onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
          />
          <span>{cat}</span>
        </label>
      ))}
    </div>
  </div>
</aside>

          {/* Project Grid */}
          <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}
