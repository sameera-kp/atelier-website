"use client";

import { use, useState, useEffect } from "react";
import { projects as staticProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundStatic = staticProjects.find((p) => p.slug === slug);
    if (foundStatic) {
      setProject(foundStatic);
      setLoading(false);
    } else {
      fetch(`http://127.0.0.1:8000/api/projects/`)
        .then((res) => res.json())
        .then((data) => {
          const foundBackend = data.find((p) => p.slug === slug);
          setProject(foundBackend || null);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching project:", err);
          setLoading(false);
        });
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fcfbf9]">
        <p className="text-stone-500 font-mono">Loading...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-[#fcfbf9] text-stone-900 px-6">
        <h1 className="text-4xl font-serif mb-4">404</h1>
        <p className="text-stone-600 mb-6">Project not found.</p>
        <Link href="/projects" className="px-6 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest">
          Back to Portfolio
        </Link>
      </main>
    );
  }

  const galleryImages = project.gallery || project.images || [];

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900 px-6 md:px-12 py-16 max-w-5xl mx-auto">
      <Link href="/projects" className="text-xs uppercase font-mono text-stone-500 hover:text-stone-900 mb-8 inline-block">
        ← Back to Portfolio
      </Link>

      <span className="text-xs uppercase tracking-widest text-stone-500 block mb-2 font-medium">
        {project.category} — {project.location} ({project.year})
      </span>
      
      <h1 className="text-4xl md:text-6xl font-serif-heading font-light tracking-tight text-stone-900 mb-8">
        {project.title}
      </h1>

      {/* Main Hero Image */}
      <div className="relative h-[450px] md:h-[600px] w-full mb-8 rounded-sm overflow-hidden bg-stone-200">
        <Image
          src={project.heroImage || project.hero_image}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gallery Images Grid*/}
      {galleryImages.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {galleryImages.map((img, index) => {
            const imgSrc = typeof img === "object" ? img.image : img;
            return (
              <div key={index} className="relative h-[350px] rounded-sm overflow-hidden bg-stone-200">
                <Image
                  src={imgSrc}
                  alt={`${project.title} gallery ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      )}

      <div className="max-w-3xl">
        <h3 className="text-xl font-serif mb-4">About the Project</h3>
        <p className="text-stone-600 text-lg leading-relaxed font-light">
          {project.description}
        </p>
      </div>
    </main>
  );
}