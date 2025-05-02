"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav h-16 bg-cream/70 shadow-md fixed top-0 left-0 right-0 z-50">
      <Link href="/" className="absolute top-0 left-0 w-full h-full">
        <div className="content px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="logo text-[#654321] text-2xl md:text-3xl font-alexandria">
            <span className="font-serif text-4xl text-[#7B5E57] inline-block animate-flipY">
              C
            </span>
            ode
            <span className="font-serif text-4xl text-[#7B5E57] inline-block animate-flipX">
              V
            </span>
            erse
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex linkes">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="/about"
                  className="text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contacts"
                  className="text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500"
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  href="/opinions"
                  className="text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500"
                >
                  Opinions
                </a>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#7B5E57] focus:outline-none"
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
      </Link>

      {isOpen && (
        <div className="md:hidden bg-cream/90 backdrop-blur-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <a
                href="/about"
                className="text-lg text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-lg text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-lg text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/opinions"
                className="text-xl text-[#7B5E57] hover:text-[#4E2C20] font-serif duration-500"
              >
                Opinions
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
