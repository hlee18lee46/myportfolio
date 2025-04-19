'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';


const allProjects = [
  {
    title: 'EmptyTheFridge',
    description: 'EmptyTheFridge gives an user interface to users to upload a photo of his/her fridge then it gives suggested potential recipes for dishes that users desire.',
    github: 'https://github.com/garrett-huggins/empty-the-fridge',
    youtube: 'https://youtu.be/Vhb7lYLsOw0',
    devpost: 'https://devpost.com/software/emptythefridge',
    tech: ['Python', 'FastAPI'],
    categories: [ 'Web'],
  },
  {
    title: 'Mailrush',
    description: 'Deliver the mails to the houses while battling through adversaries',
    youtube: 'https://youtu.be/6TjTUENaJvo',
    tech: ['C#', 'Unity'],
    categories: [ 'Game'],
  },
  {
    title: 'Reveal The Thief',
    description: 'An arduino hardware that uses photoresistor and open the camera to capture the face of the thief',
    github: 'https://github.com/hlee18lee46/robhack',
    youtube: 'https://www.youtube.com/watch?v=ju7bwRtXp-U',
    devpost: 'https://www.sprint.dev/projects/28eb2a2f-18e9-4fcb-a7f5-f15af700cb97',
    tech: ['Arduino', 'Python'],
    categories: ['Embedded'],
  },
  {
    title: 'Latinnect',
    description: 'Latinnect is a digital marketplace that connects Latine vendors with customers, allowing vendors to easily list and manage their products, and customers to browse, filter, and purchase goods.',
    github: 'https://github.com/hlee18lee46/shellhacks',
    devpost: 'https://devpost.com/software/latinconnect',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Swift', 'Supabase'],
    categories: ['Mobile'],
  },
  {
    title: 'Puppify',
    description: 'An iOS SwiftUI mobile app, Scan a puppy for their adult height weight and lifespan and more.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtu.be/BhUDBBtHvSo',
    devpost: 'https://devpost.com/software/puppify',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Swift', 'MongoDB'],
    categories: ['Mobile'],
  },
  {
    title: '1Finance.ai',
    description: 'OneStop Finance app for your literacy, your financial.',
    github: 'https://github.com/hlee18lee46/hacknc',
    youtube: 'https://youtu.be/QUoXfuycNIs',
    devpost: 'https://devpost.com/software/1finance-ai',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Swift', 'terraform', 'MongoDB'],
    categories: ['Mobile', 'Machine Learning'],
  },
  {
    title: 'CommunitySOS',
    description: 'CommunitySOS is an opt-in social action platform that empowers local communities to quickly mobilize volunteers during urgent situations that fall outside traditional emergency response. ',
    github: 'https://github.com/kynhix/HackPSU2024-Community-SOS',
    devpost: 'https://devpost.com/software/communitysos',
    tech: ['React', 'Tailwind', 'NextJS', 'Supabase'],
    categories: ['Web'],
  },
  {
    title: 'Puzzle Vault',
    description: 'Gamifying financial analysis for employees of a public-facing company.',
    github: 'https://github.com/hlee18lee46/ugabackend',
    youtube: 'https://youtu.be/slgCbs9MWLY',
    devpost: 'https://devpost.com/software/truist-cape',
    tech: ['React', 'Vite', 'Python', 'Flask', 'MongoDB'],
    categories: ['Web'],
  },
  {
    title: 'Quantumly-Safe',
    description: 'Quantumly Safe provides a security measure to their websites, built upon Quantum Random Forest models based on user activities',
    github: 'https://github.com/Ashan-264/Q-Safe',
    devpost: 'https://devpost.com/software/q-safe',
    tech: ['Python', 'Flask', 'Scikit-learn', 'streamlit'],
    categories: ['Web', 'Machine Learning'],
  },
  {
    title: 'DigitalMedics',
    description: 'DigitalMedics is a fall-detection, button-derived emergency alert system that alerts 911 authorities and personal contacts through SMS text messages.',
    github: 'https://github.com/hlee18lee46/georgehacks',
    youtube: 'https://youtu.be/aRwjC-qYDpQ',
    devpost: 'https://devpost.com/software/digitalmedics',
    tech: ['Python', 'Flask', 'Arduino'],
    categories: ['Embedded'],
  },
  {
    title: 'EcoHabit',
    description: 'EcoHabit is a Web Application where users can self-report their eco-habits and interact with conversational AI or view dashboard charts to gain insights.',
    github: 'https://github.com/nahom23ET/Eco-Habit',
    youtube: 'https://youtu.be/4vBtmpYSQmk',
    devpost: 'https://devpost.com/software/ecopulse-pu7lma',
    tech: ['React', 'Tailwind', 'NextJS', 'Python', 'FastAPI', 'MongoDB'],
    categories: ['Web'],
  },
  {
    title: 'Prof-AI-cademy',
    description: 'Web Application ',
    github: 'https://github.com/hlee18lee46/profaicademyfront',
    youtube: 'https://youtu.be/dwuCwktj1Z8',
    devpost: 'https://devpost.com/software/ecopulse-pu7lma',
    tech: ['React', 'Tailwind', 'NextJS', 'Python', 'FastAPI', 'MongoDB'],
    categories: ['Web'],
  },
  {
    title: 'Sync-a-Life',
    description: 'Web Application AI-powered productivity companion.',
    github: 'https://github.com/hlee18lee46/wildfront',
    youtube: 'https://www.youtube.com/watch?v=kpADTbpnCD0',
    devpost: 'https://devpost.com/software/ecopulse-pu7lma',
    tech: ['React', 'Tailwind', 'NextJS', 'Python', 'FastAPI', 'MongoDB'],
    categories: ['Web'],
  },
  {
    title: 'TravelJournal',
    description: 'Web Application where you can plan your trips with Gemini-powered plan generator.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtu.be/J9a7D-R_SDM',
    devpost: 'https://devpost.com/software/ecopulse-pu7lma',
    tech: ['React', 'Tailwind', 'NextJS', 'NodeJS', 'Python', 'FastAPI'],
    categories: ['Web'],
  },
  {
    title: 'MindFree.AI',
    description: 'Web Application for therapy, meditation, progress report with AI that interacts with the real-time emotion data, saved through blockchain.',
    github: 'https://github.com/yourname/mobile-portfolio',
    youtube: 'https://youtu.be/GaXNc6Ug1PI',
    devpost: 'https://devpost.com/software/ecopulse-pu7lma',
    tech: ['React', 'Tailwind', 'NextJS', 'NodeJS', 'Python', 'FastAPI'],
    categories: ['Web'],
  },
];
const techFilterGroups = {
    '🖥️ Front-end Stack': ['React', 'NextJS', 'Vite', 'Tailwind'],
    '🧠 Back-end Stack': ['Python', 'FastAPI', 'Flask', 'NodeJS'],
    '🗃️ Database': ['MongoDB', 'Supabase'],
  };
  
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
          <aside className="w-full md:w-1/5 space-y-6 pr-4">
  {/* Tech Filters by Group */}
  {Object.entries(techFilterGroups).map(([group, techs]) => (
    <div
      key={group}
      className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
    >
      <h2 className="font-semibold text-lg mb-4 text-center text-gray-800 dark:text-white">
        {group}
      </h2>
      <div className="space-y-2">
        {techs.map((tech) => (
          <label
            key={tech}
            className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition"
          >
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
  ))}

  {/* Category Filter */}
  <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
    <h2 className="font-semibold text-lg mb-4 text-center text-gray-800 dark:text-white">
      🎯 Category
    </h2>
    <div className="space-y-2">
      {categoryFilters.map((cat) => (
        <label
          key={cat}
          className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 px-2 py-1 rounded-md transition"
        >
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
