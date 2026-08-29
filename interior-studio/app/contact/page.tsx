"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://sameeranaf.pythonanywhere.com/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); 
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-4">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-7xl font-light tracking-tight">
          LET’S START A <br />
          <span className="italic font-serif text-neutral-400">
            PROJECT
          </span>{" "}
          TOGETHER.
        </h1>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8 border-t border-neutral-800">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Inquiries
            </h3>
            <p className="text-xl font-light text-neutral-200">
              hello@atelierdesign.com
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Phone
            </h3>
            <p className="text-xl font-light text-neutral-200">
              +91 98765 43210
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Studio Location
            </h3>
            <p className="text-base font-light text-neutral-300 leading-relaxed">
              Atelier Design Studio,
              <br />
              Cyberpark Road, Calicut,
              <br />
              Kerala, India - 673016
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full bg-transparent border-b border-neutral-400 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
              className="w-full bg-transparent border-b border-neutral-800 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Tell us about your space and timelines..."
              className="w-full bg-transparent border-b border-neutral-400 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors text-sm resize-none"
            />
          </div>

          <div className="flex flex-col space-y-3">
            <button
              type="submit"
              className="px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-xs uppercase tracking-widest text-white transition-colors rounded-sm"
            >
              Send Message
            </button>
            {status && (
              <p className="text-xs font-mono text-neutral-400">{status}</p>
            )}
          </div>
        </motion.form>
      </div>
    </main>
  );
}
