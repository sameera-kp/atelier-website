"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects as staticProjects } from "@/data/projects"; 

export default function ProjectsPage() {
  const [backendProjects, setBackendProjects] = useState([]);

  useEffect(() => {
    fetch("https://sameeranaf.pythonanywhere.com/api/projects/")
      .then((res) => res.json())
      .then((data) => {
        setBackendProjects(data);
      })
      .catch((err) => {
        console.error("Error fetching backend projects:", err);
      });
  }, []);

  const allProjects = [...staticProjects, ...backendProjects];

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900 px-6 md:px-12 py-16 max-w-7xl mx-auto">
      {/* Title Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="text-xs uppercase tracking-widest text-stone-500 block mb-4 font-medium">
          Portfolio
        </span>
        <h1 className="text-4xl md:text-7xl font-serif-heading font-light tracking-tight text-stone-900 leading-tight">
          ALL ARCHITECTURAL & <br />
          <span className="italic font-normal text-stone-600">
            INTERIOR
          </span>{" "}
          WORKS.
        </h1>
      </motion.section>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {allProjects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.15 }}
            whileHover={{ y: -6 }}
            className="group cursor-pointer"
          >
            <Link href={`/projects/${item.slug}`}>
              <div className="relative h-[480px] overflow-hidden rounded-sm bg-stone-200 border border-stone-200">
                <Image
                  src={item.hero_image || item.heroImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-start mt-5">
                <div>
                  <h3 className="text-2xl font-serif-heading font-normal text-stone-900 group-hover:text-stone-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-1 font-light">
                    {item.category} — {item.location}
                  </p>
                </div>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2 py-1 border border-stone-200 rounded-sm">
                  {item.year}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
