import React from "react";
import ContactForm from "@/components/ContactForm";
import Social from "@/components/social"; // ✅ استيراد كومبوننت السوشيال
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact bage",
};

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-secondary-light pt-20 px-4 text-gray-dark">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">
            Contact Us
          </h2>
          <p className="mb-8 text-lg text-gray-dark">
            We’d love to hear from you. Fill out the form or reach out through
            the details below.
          </p>

          <div className="space-y-6">
            <div className="mt-6 flex items-center justify-center md:justify-start">
              <Social /> {/* ✅ تم استدعاء الكومبوننت هنا */}
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contacts;
