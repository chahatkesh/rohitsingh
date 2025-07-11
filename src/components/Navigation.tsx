'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { HiMenu, HiX, HiMail, HiPhone } from 'react-icons/hi';

const navigationItems = [
  {
    label: "Home",
    path: "/"
  },
  {
    label: "About",
    path: "/about"
  },
  {
    label: "Research",
    path: "/research",
  },
  {
    label: "Publications",
    path: "/publications",
  },
  {
    label: "Courses",
    path: "/courses"
  },
  {
    label: "Students",
    path: "/students",
  },
  {
    label: "Contact",
    path: "/contact"
  }
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900">Dr. Rohit Singh</h1>
              <p className="text-sm text-slate-600">Assistant Professor</p>
            </div>
          </Link>

          {/* Contact Info - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <HiMail className="w-4 h-4" />
              <span>rohits@nitj.ac.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <HiPhone className="w-4 h-4" />
              <span>+91-7087513174</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-50"
          >
            {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 pb-4">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === item.path
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile contact info */}
              <div className="pt-4 mt-4 border-t border-slate-200 space-y-2">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600">
                  <HiMail className="w-4 h-4" />
                  <span>rohits@nitj.ac.in</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-slate-600">
                  <HiPhone className="w-4 h-4" />
                  <span>+91-7087513174</span>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
