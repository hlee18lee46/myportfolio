

'use client';

import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Hero() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center px-4 overflow-hidden">
      {/* Particle Background */}
      <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: { color: 'transparent' },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: true, mode: 'push' },
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 2 },
      },
    },
    particles: {
      shape: {
        type: ['char', 'circle'], // 👈 Mix emoji and dots
        character: [
          { value: '🎮' }, { value: '📱' }, { value: '🌐' },
          { value: '🤖' }, { value: '🧠' }, { value: '🗄️' },
          { value: '⚡' }, { value: '🛠️' }, { value: '📚' },
        ],
      },
      color: {
        value: ['#38bdf8', '#38bdf8', '#ffffff'], // 🔵 for circles
      },
      size: {
        value: { min: 4, max: 6 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 10,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: { default: 'out' },
      },
      number: {
        value: 35,
      },
      opacity: {
        value: 0.85,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.3,
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 120,
        color: '#38bdf8',
        opacity: 0.3,
      },
    },
  }}
  className="absolute inset-0 z-[-1]"
/>


      {/* Hero Content */}
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Welcome! I'm <span className="text-blue-500">Han Lee</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300"
      >
        <Typewriter
          words={['FullStack Web Developer', 'iOS App Developer', 'Game Developer', 'Embedded Software Engineer', 'Machine Learning Engineer']}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8"
      >
        <a
          href="/projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}
