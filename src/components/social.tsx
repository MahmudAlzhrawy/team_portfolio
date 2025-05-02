import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

function Social() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center mb-8">
      <a
        href="mailto:example@email.com"
        title="Send us an email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="text-3xl text-[#EA4335]" />
      </a>
      <a
        href="https://facebook.com"
        title="Visit our Facebook page"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="text-3xl text-[#1877F2]" />
      </a>
      <a
        href="https://linkedin.com"
        title="Visit our LinkedIn profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-3xl text-[#0A66C2]" />
      </a>
      <a
        href="tel:+1234567890"
        title="Call us"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoCall className="text-3xl text-[#34A853]" />
      </a>
    </div>
  );
}

export default Social;
