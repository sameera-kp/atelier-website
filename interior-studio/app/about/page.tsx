"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 md:px-12 py-16 max-w-6xl mx-auto">
      {/* Title Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-4">
          About The Studio
        </span>
        <h1 className="text-4xl md:text-7xl font-light tracking-tight leading-tight">
          WE BELIEVE IN SPACES THAT <br />
          <span className="italic font-serif text-neutral-400">INSPIRE</span> SILENCE & HARMONY.
        </h1>
      </motion.section>

      {/* Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative h-[50vh] md:h-[65vh] w-full mb-24 overflow-hidden rounded-sm bg-neutral-900"
      >
        <Image 
          src="/projects/villa.jpg"
          alt="Studio Philosophy Interior" 
          fill 
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Philosophy & Details */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
            Atelier Design is a contemporary interior studio focusing on minimal aesthetics, spatial functionality, and authentic material palettes.
          </p>
        </div>

        <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base">
          <p>
            Every structure we curate stems from a deep understanding of natural light, geometry, and texture. We strip away the unnecessary to reveal the essential elegance within every room.
          </p>
          <p>
            From high-end private residences to tailored commercial environments, our approach remains grounded in craftsmanship, precision, and modern living standards.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="border-t border-neutral-800 pt-16">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-12">
          Capabilities & Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-xs text-neutral-600 font-mono">01</span>
            <h3 className="text-lg font-medium text-white">Interior Architecture</h3>
            <p className="text-sm text-neutral-400 font-light">
              Comprehensive spatial planning, layout design, and structural interior modifications.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-neutral-600 font-mono">02</span>
            <h3 className="text-lg font-medium text-white">Custom Furniture</h3>
            <p className="text-sm text-neutral-400 font-light">
              Tailored furniture curation and bespoke wooden element design suited for the space.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-neutral-600 font-mono">03</span>
            <h3 className="text-lg font-medium text-white">Lighting & Styling</h3>
            <p className="text-sm text-neutral-400 font-light">
              Architectural lighting design and art curation to elevate ambient atmosphere.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}