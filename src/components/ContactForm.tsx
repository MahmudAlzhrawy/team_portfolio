"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const sendEmail = (formValues: {
    name: string;
    message: string;
    email: string;
  }) => {
    const templateParams = {
      email: formValues.email,
      message: formValues.message,
      name: formValues.name,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID || ""
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        toast.success("Email Sent successfully", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        Swal.fire({
          title: "Error sending message",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      resetForm();
      sendEmail(values);
    },
  });

  return (
    <div className="w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-xl mx-auto space-y-6 p-4 sm:p-6 rounded-md"
      >
        {/* Name Field */}
        <div className="w-full">
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-[#7B5E57] placeholder-[#7B5E57]"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="w-full">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-[#7B5E57] placeholder-[#7B5E57]"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        {/* Message Field */}
        <div className="w-full">
          <label htmlFor="message" className="block mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-transparent text-[#7B5E57] placeholder-[#7B5E57]"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.message}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#0A66C2] text-white py-3 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
