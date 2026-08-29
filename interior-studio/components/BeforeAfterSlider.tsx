"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title = "Transformation Highlight",
}: BeforeAfterProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <section className="my-24 max-w-5xl mx-auto px-4 text-center">
      {/* Title */}
      <h3 className="text-2xl font-serif-heading font-normal uppercase tracking-wider text-stone-900 mb-6">
        {title}
      </h3>

      {/* Toggle Buttons */}
      <div className="inline-flex p-1 bg-stone-200 rounded-full mb-8 border border-stone-300">
        <button
          onClick={() => setActiveTab("before")}
          className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
            activeTab === "before"
              ? "bg-[#b8a379] text-white shadow-md"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setActiveTab("after")}
          className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
            activeTab === "after"
              ? "bg-[#b8a379] text-white shadow-md"
              : "text-stone-600 hover:text-stone-900"
          }`}
        >
          After
        </button>
      </div>

      {/* Image Preview Box */}
      <div className="relative w-full h-[350px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl border border-stone-200">
        <Image
          src={activeTab === "before" ? beforeImage : afterImage}
          alt={activeTab === "before" ? "Before Makeover" : "After Makeover"}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          priority
        />
        
        {/* Status Tag */}
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-mono uppercase tracking-widest">
          {activeTab} View
        </span>
      </div>
    </section>
  );
}