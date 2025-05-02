import React from "react";
import { FaHeart } from "react-icons/fa6";
import Social from "./social";

function Footer() {
  return (
    <footer className="bg-cream/90 shadow-md py-[3rem] text-xl text-[#7B5E57] flex flex-col items-center justify-center text-center">
      <div>
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mt-2 max-w-sm mx-auto mb-6">
          Don’t hesitate to contact us to transform your creative ideas into
          real projects.
        </p>
        <Social />
        <span className="text-md mt-2 flex items-center justify-center gap-1 mb-6">
          Made with
          <FaHeart className="text-red-600 text-2xl" />
          by CodeVerse Community
        </span>
        <p className="text-sm mt-1 opacity-70">
          © {new Date().getFullYear()} Codeverse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
