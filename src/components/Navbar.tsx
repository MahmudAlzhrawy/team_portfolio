"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contacts", label: "Contact" },
    { href: "/opinions", label: "Opinions" },
  ];

  return (
    <div className="nav h-16 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="content px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center gap-2">
          <div className="img h-10 w-10 rounded-full overflow-hidden">
            <img
              src="/images/Logo.jpg"
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <Link
            href="/"
            className="logo text-[#1976D2] text-2xl md:text-3xl font-alexandria flex items-center"
          >
            <span className="font-serif text-4xl text-[#0D47A1] inline-block animate-flipY">
              C
            </span>
            ode
            <span className="font-serif text-4xl text-[#0D47A1] inline-block animate-flipX">
              V
            </span>
            erse
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex linkes">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-xl text-[#1976D2] hover:text-[#0D47A1] font-serif duration-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1976D2] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white backdrop-blur-md shadow-sm">
          <ul className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-lg text-[#1976D2] hover:text-[#0D47A1] font-serif duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
