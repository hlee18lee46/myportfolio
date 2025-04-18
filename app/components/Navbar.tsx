'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-black/50 backdrop-blur-md px-8 py-3 rounded-full shadow-lg border border-gray-300 dark:border-gray-700">
        <ul className="flex justify-center items-center space-x-6 font-medium text-gray-800 dark:text-gray-100 text-sm md:text-base">
          <li>
            <a href="/" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="/talk" className="hover:text-blue-500 transition">
              Talk
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
