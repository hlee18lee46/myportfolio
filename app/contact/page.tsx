'use client';

import Navbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa'; // as placeholder for Devpost
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
      <Navbar />

      <main className="pt-28 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">🤝 Let's Connect!</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300 text-lg">
          Feel free to reach out via any of the platforms below.
        </p>

        <div className="flex justify-center flex-wrap gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.https://www.linkedin.com/in/hanknowstech/"
            target="_blank"
            className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/hlee18lee46"
            target="_blank"
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          {/* Devpost */}
          <a
            href="https://devpost.com/hlee18lee46"
            target="_blank"
            className="flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            <Image src="/dev.jpg" alt="Devpost" width={20} height={20} />
            Devpost
          </a>

          {/* Email */}
          <a
            href="mailto:hlee3088@gatech.edu"
            className="flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-4 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            <FaEnvelope size={20} />
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
