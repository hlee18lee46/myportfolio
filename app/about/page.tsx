'use client';

import Navbar from '../components/Navbar';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Typewriter } from 'react-simple-typewriter';

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
      <Navbar />

      {/* Background Particles */}
      <Particles
  id="tsparticles"
  init={async (engine) => await loadSlim(engine)}
  options={{
    background: { color: 'transparent' },
    fullScreen: { enable: false },
    fpsLimit: 60,
    particles: {
      number: { value: 60 },
      color: { value: ['#a78bfa', '#38bdf8', '#f472b6'] }, // pastel purple, blue, pink
      shape: { type: 'circle' },
      size: {
        value: { min: 4, max: 8 },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 2,
        },
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'top',
        outModes: { default: 'out' },
      },
      opacity: {
        value: 0.4,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
        },
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'bubble' },
      },
      modes: {
        bubble: {
          distance: 100,
          size: 10,
          duration: 2,
          opacity: 0.5,
        },
      },
    },
  }}
  className="absolute inset-0 z-[-1]"
/>

      <main className="pt-28 px-6 max-w-4xl mx-auto space-y-12">
        {/* Profile + Typewriter */}
        
        <section className="flex flex-col items-center text-center">
          <img
            src="/your-photo.jpg" // Replace with actual path
            alt="Han's Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-2 border-blue-400"
          />
          <h1 className="text-3xl md:text-4xl font-bold">
            <Typewriter
              words={['My name is Han.', 'Want to hear my stories?', 'I go to hackathons to build stuff.', 'Also looking for professional opportunity!']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">🎓 Education</h2>
          <div className="space-y-4">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">University of Florida</h3>
              <p>Bachelor of Science in Computer Science</p>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">Georgia Institute of Technology</h3>
              <p>Master of Science in Computer Science<br />
              <span className="text-sm text-gray-600 dark:text-gray-300">(Machine Learning Specialization)</span></p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">💼 Experience</h2>
          <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Boeing Intelligence & Analytics</h3>
            <p>Software Engineer Intern<br />
            <span className="text-sm text-gray-600 dark:text-gray-300">May – June 2024</span></p>
          </div>
        </section>
      </main>
    </div>
  );
}
