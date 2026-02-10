"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-50/90 dark:bg-black/90 backdrop-blur-sm border-b border-orange-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <span className="text-xl font-bold text-gray-900 dark:text-white">PocketIO</span>
          </Link>

          {/* Right side icons */}
          <div className="relative flex items-center space-x-4">
            {/* Theme toggle icon */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>

            {/* Menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 rounded-lg hover:bg-orange-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6 text-gray-700 dark:text-gray-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Dropdown Menu - FIXED POSITION WITH OPACITY */}
            {isOpen && (
              <div className="absolute right-2 top-full mt-2 bg-white/20 dark:bg-[#0a0a0a]/30 backdrop-blur-2xl rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 py-2 px-2 min-w-[200px] z-50">
                <div className="flex flex-col space-y-0.5">
                  <a
                    href="#home"
                    className="flex items-center space-x-3 text-black dark:text-gray-300 hover:text-orange-600 dark:hover:text-white font-normal transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span className="text-sm">Home</span>
                  </a>
                  

                  
                  <a
                    href="#solutions"
                    className="flex items-center space-x-3 text-black dark:text-gray-300 hover:text-orange-600 dark:hover:text-white font-normal transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <span className="text-sm">Solutions</span>
                  </a>
                  <a
                    href="#about"
                    className="flex items-center space-x-3 text-black dark:text-gray-300 hover:text-orange-600 dark:hover:text-white font-normal transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">About</span>
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center space-x-3 text-black dark:text-gray-300 hover:text-orange-600 dark:hover:text-white font-normal transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm">Contact</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}