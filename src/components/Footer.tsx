"use client"
import { useEffect } from "react";
import Social from "./social";

function Footer() {
  useEffect(() => {
    const text = "CodeVerse";
    const tex = document.getElementById("cov");
    let i = 0;

    const interval = setInterval(() => {
      if (tex && i <= text.length) {
        tex.innerHTML = text.slice(0, i)+" |";
        i++;
      } else {
        i=0;
      }
    }, 300); // سرعة الكتابة (ms)

    return () => clearInterval(interval); // تنظيف التايمر عند الخروج
  },[]);
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contacts", label: "Contact" },
    { href: "/opinions", label: "Opinions" },
  ];
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo and description */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div id="cov" className="text-indigo-400 text-3xl font-bold"></div>
          <p className="text-sm text-gray-400">
          At Codeverse, we excel in designing and developing websites and mobile applications with high quality and unique user experiences.
        
          </p>
          <div className="flex gap-4 mt-4 text-xl text-gray-400">
            <Social/>
          </div>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-white font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Automation</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Submit ticket</li>
            <li>Documentation</li>
            <li>Guides</li>
          </ul>
        </div>

        {/* Company */}
        <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Terms of service</li>
            <li>Privacy policy</li>
            <li>License</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CodeVerse, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
