import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Social() {
  return (
    <div className="flex flex-wrap gap-2 mt-4 text-xl text-gray-400">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
        className="hover:text-[#1877F2] transition"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
        className="hover:text-[#E1306C] transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Twitter"
        className="hover:text-[#1DA1F2] transition"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
        className="hover:text-white transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
        className="hover:text-[#0A66C2] transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="tel:+201149564002"
        title="Call us"
        className="hover:text-[#34A853] transition"
      >
        <IoCall />
      </a>
      <a
        href="mailto:ceoscodeverse@gmail.com"
        title="Send us an email"
        className="hover:text-[#EA4335] transition"
      >
        <MdEmail />
      </a>
    </div>
  );
}

export default Social;
