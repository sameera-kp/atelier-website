"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Logging in...");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access);
        setStatus("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        setStatus("Invalid username or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong.");
    }
  };

  return (
    <main className="min-h-screen px-6 md:px-12 py-16 max-w-xl mx-auto flex flex-col justify-center">
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-4">
          Client Portal
        </span>
        <h1 className="text-4xl font-light tracking-tight">
          WELCOME <span className="italic font-serif text-neutral-400">BACK</span>
        </h1>
      </motion.section>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 border border-neutral-200 rounded-sm shadow-sm"
      >
        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
            Username
          </label>
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="johndoe"
            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors text-sm"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
            Password
          </label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="••••••••"
            className="w-full bg-transparent border-b border-neutral-300 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors text-sm"
          />
        </div>

        <div className="pt-4 flex flex-col space-y-4">
          <button 
            type="submit"
            className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-xs uppercase tracking-widest text-white transition-colors rounded-sm text-center"
          >
            Login
          </button>
          
          {status && <p className="text-xs font-mono text-center text-neutral-600">{status}</p>}

          <p className="text-xs text-center text-neutral-500 pt-2">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-neutral-900 underline underline-offset-4">
              Register here
            </Link>
          </p>
        </div>
      </motion.form>
    </main>
  );
}