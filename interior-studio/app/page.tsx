"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectShowcase from "@/components/ProjectShowcase";

const sampleImages = [
  "/projects/Living-Room-Dining-Room-1.webp",
  "/projects/Living-Room-Dining-Room-2.webp",
  "/projects/Living-Room-Dining-Room-3.webp",
  "/projects/Living-Room-Dining-Room-4.webp",
  "/projects/Living-Room-Dining-Room-5.webp",
];

const heroSlides = [
  {
    type: "video",
    media: "/projects/banner vedio.mp4",
    title: "OUR REAL INTERIOR",
    subtitle: "DESIGN MAKEOVERS",
    desc: "We design minimal, luxury residential and commercial spaces that harmonize functionality with modern aesthetic values.",
  },
  {
    type: "image",
    media: "/projects/cozy bedroom.jpg",
    title: "MODERN ARCHITECTURAL",
    subtitle: "LIVING SPACES",
    desc: "Crafting bespoke interiors with exquisite detailing, premium materials, and timeless elegance.",
  },
  {
    type: "image",
    media: "/projects/banner1.jpg",
    title: "LUXURY FIT-OUTS &",
    subtitle: "BESPOKE INTERIORS",
    desc: "Transforming ordinary rooms into extraordinary lifestyle statements tailored to your vision.",
  },
];

function MakeoverCard({ item }: { item: any }) {
  const [activeTab, setActiveTab] = useState("after");

  return (
    <section className="my-20">
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-900 mb-3">
          {item.title}
        </h3>
        <p className="text-stone-500 text-xs font-mono uppercase tracking-widest mb-6">
          Before & After Renovation View
        </p>
        
        {/* Before / After Buttons */}
        <div className="inline-flex bg-stone-200 p-1 rounded-full shadow-inner">
          <button 
            onClick={() => setActiveTab("before")}
            className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${activeTab === "before" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"}`}
          >
            Before
          </button>
          <button 
            onClick={() => setActiveTab("after")}
            className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-all ${activeTab === "after" ? "bg-stone-900 text-white shadow-sm" : "text-stone-600 hover:text-stone-900"}`}
          >
            After
          </button>
        </div>
      </div>

      {/* Display Image based on active tab */}
      <div className="relative h-[450px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
        <Image
          src={activeTab === "before" ? item.before_image : item.after_image}
          alt={item.title || "Makeover view"}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover transition-all duration-500"
        />
      </div>
    </section>
  );
}

export default function Home() {
  const [activeImage, setActiveImage] = useState("/projects/room renovation.webp");
  const [makeoverData, setMakeoverData] = useState<any[]>([]);
  
  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch("https://sameeranaf.pythonanywhere.com/api/interior-makeover/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setMakeoverData(data); 
        }
      })
      .catch((err) => console.error("Error fetching makeover:", err));
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f2eb] text-stone-900">
      {/* Hero Section with Video/Image Slider & Stats Cards */}
      <section className="relative w-full h-[90vh] min-h-[700px] flex flex-col justify-between text-center overflow-hidden bg-stone-950">
        {/* Background Slider (Video or Image) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full"
          >
            {heroSlides[currentSlide].type === "video" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover brightness-[0.55]"
              >
                <source src={heroSlides[currentSlide].media} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={heroSlides[currentSlide].media} 
                alt="Interior Design Makeovers"
                fill
                priority
                className="object-cover brightness-[0.55]"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 flex flex-col items-center space-y-6 text-white flex-grow justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center space-y-6"
            >
              <h1 className="text-4xl md:text-7xl font-serif-heading font-light tracking-tight leading-tight drop-shadow-md">
                {heroSlides[currentSlide].title} <br />
                <span className="italic font-normal">{heroSlides[currentSlide].subtitle}</span>
              </h1>

              <p className="text-lg md:text-xl font-light tracking-wide text-neutral-200 max-w-2xl drop-shadow">
                {heroSlides[currentSlide].desc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/projects"
                  className="px-8 py-3.5 bg-white text-stone-900 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-all shadow-lg font-medium"
                >
                  Explore Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border border-white text-white text-xs font-mono uppercase tracking-widest hover:bg-white/10 transition-all backdrop-blur-sm font-medium"
                >
                  Book Consult
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Stats Grid (Fully Visible & Styled with Golden Tone) */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 hidden md:grid grid-cols-4 gap-4 border-t border-[#d2c199]/40 pt-6">
          <div className="text-center border-r border-[#d2c199]/30 last:border-none">
            <h4 className="text-2xl md:text-3xl font-serif font-light text-[#d2c199] drop-shadow-md">6</h4>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#d2c199] mt-1 drop-shadow font-medium">Countries Operating</p>
          </div>
          <div className="text-center border-r border-[#d2c199]/30 last:border-none">
            <h4 className="text-2xl md:text-3xl font-serif font-light text-[#d2c199] drop-shadow-md">500+</h4>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#d2c199] mt-1 drop-shadow font-medium">Projects Done</p>
          </div>
          <div className="text-center border-r border-[#d2c199]/30 last:border-none">
            <h4 className="text-2xl md:text-3xl font-serif font-light text-[#d2c199] drop-shadow-md">17+</h4>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#d2c199] mt-1 drop-shadow font-medium">Years Since 2008</p>
          </div>
          <div className="text-center">
            <h4 className="text-2xl md:text-3xl font-serif font-light text-[#d2c199] drop-shadow-md">100%</h4>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#d2c199] mt-1 drop-shadow font-medium">Full Turnkey</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fcfbf9] to-transparent pointer-events-none" />
      </section>

      {/* Main Container Content */}
      <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">
        <ProjectShowcase
          title="Luxury Living Room & Dining Room Combined"
          images={sampleImages}
        />

        {/* Classy Black & White Bedroom Design */}
        <section className="my-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-900 mb-3">
              Classy Black & White Bedroom Design
            </h2>
            <p className="text-stone-500 text-xs font-mono uppercase tracking-widest">
              Featured Bedroom Concept
            </p>
          </div>

          <div className="relative w-full h-[450px] md:h-[650px] rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
            <Image
              src="/projects/black&white bedroom.jpg" 
              alt="Classy Black & White Bedroom Design"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="mt-16">
          <div className="flex justify-between items-end mb-12 border-b border-stone-300 pb-4">
            <h2 className="text-2xl font-serif-heading font-normal tracking-wider uppercase text-stone-900">
              Featured Works
            </h2>
            <span className="text-sm font-mono text-stone-500">
              (0{projects.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <Link href={`/projects/${item.slug}`}>
                  <div className="relative h-[450px] overflow-hidden rounded-sm bg-stone-200 border border-stone-200">
                    <Image
                      src={item.heroImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start mt-4">
                    <div>
                      <h3 className="text-xl font-serif-heading font-normal text-stone-900 group-hover:text-stone-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-stone-500 mt-1 font-light">
                        {item.category} — {item.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono px-2 py-1 border border-stone-200 rounded-sm text-stone-600 bg-stone-100">
                      {item.year}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Dynamic Makeover Sections (Stacked Vertically) */}
        {makeoverData.map((item, index) => (
          <MakeoverCard key={index} item={item} />
        ))}

        {/* --- Modern Coastal Bedroom Renovation Interactive Gallery Section --- */}
        <section className="my-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-stone-900 mb-3">
              Modern Coastal Bedroom Renovation
            </h2>
            <p className="text-stone-500 text-xs font-mono uppercase tracking-widest">
              Featured Interior Renovation
            </p>
          </div>

          <div className="relative w-full h-[450px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 mb-6 transition-all duration-300">
            <Image
              src={activeImage} 
              alt="Modern Coastal Bedroom Renovation"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div 
              onClick={() => setActiveImage("/projects/room renovation1.webp")}
              className={`relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-md border-2 cursor-pointer transition-all duration-300 ${
                activeImage === "/projects/room renovation1.webp" ? "border-stone-900 scale-[1.02]" : "border-stone-200 opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src="/projects/room renovation1.webp"
                alt="Bedroom angle 1"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div 
              onClick={() => setActiveImage("/projects/room renovation2.jpg")}
              className={`relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-md border-2 cursor-pointer transition-all duration-300 ${
                activeImage === "/projects/room renovation2.jpg" ? "border-stone-900 scale-[1.02]" : "border-stone-200 opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src="/projects/room renovation2.jpg"
                alt="Bedroom angle 2"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>

            <div 
              onClick={() => setActiveImage("/projects/room renovation.webp")}
              className={`relative h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-md border-2 cursor-pointer transition-all duration-300 ${
                activeImage === "/projects/room renovation.webp" ? "border-stone-900 scale-[1.02]" : "border-stone-200 opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src="/projects/room renovation.webp"
                alt="Bedroom angle 3"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}