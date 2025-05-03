import React from "react";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream/70 pt-20 text-[#7B5E57] text-center md:text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            We Would love to hear from you. Fill out the form or reach out
            through the details below.
          </p>

          <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">
            <div className="flex flex-col items-center gap-1 md:flex-row md:items-center md:gap-3">
              <MdEmail className="text-[#EA4335] text-2xl" />
              <a href="mailto:example@email.com" className="hover:underline">
                example@email.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-1 md:flex-row md:items-center md:gap-3">
              <IoCall className="text-[#34A853] text-2xl" />
              <a href="tel:+1234567890" className="hover:underline">
                +1 234 567 890
              </a>
            </div>

            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl text-[#1877F2] hover:scale-110 transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="text-2xl text-[#0A66C2] hover:scale-110 transition" />
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
