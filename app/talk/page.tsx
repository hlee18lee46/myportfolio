'use client';

import Navbar from '../components/Navbar';
import { useState, useRef, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function TalkPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Placeholder - later connect to /api/chat
    const assistantResponse: Message = {
      role: 'assistant',
      content: `You said: "${input}". I’ll answer with project info soon!`,
    };
    setMessages((prev) => [...prev, assistantResponse]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
      <Navbar />

      {/* Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          id="tsparticles-talk"
          init={async (engine) => await loadSlim(engine)}
          options={{
            fullScreen: { enable: false },
            background: { color: 'transparent' },
            fpsLimit: 60,
            particles: {
              number: { value: 60 },
              color: { value: '#38bdf8' },
              links: {
                enable: true,
                distance: 120,
                color: '#38bdf8',
                opacity: 0.4,
              },
              move: { enable: true, speed: 1.2 },
              opacity: { value: 0.5 },
              size: { value: { min: 1, max: 3 } },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
          }}
        />
      </div>

      {/* Foreground Content */}
      <main className="relative z-10 pt-24 max-w-3xl mx-auto px-4 pb-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Chatbot Still Work in Progress
        </h1>

        <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg shadow-md h-[60vh] overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white ml-auto text-right'
                  : 'bg-gray-300 dark:bg-gray-700 text-black dark:text-white'
              }`}
            >
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something like: What did you build with FastAPI?"
            className="flex-1 px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-black text-gray-800 dark:text-white shadow-sm focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="px-5 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
