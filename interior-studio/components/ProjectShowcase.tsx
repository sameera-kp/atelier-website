"use client";

import { useState } from "react";
import Image from "next/image";

interface ShowcaseProps {
  title: string;
  images: string[];
}

export default function ProjectShowcase({ title, images }: ShowcaseProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className="my-20 max-w-6xl mx-auto px-6">
      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-serif-heading text-center font-light tracking-wide text-stone-900 mb-8">
        {title}
      </h2>

      {/* Main Large Image Display */}
      <div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-stone-200 mb-4 bg-stone-100">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-cover transition-all duration-500 ease-in-out"
          priority
        />
      </div>

      {/* Bottom Thumbnail Grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`relative h-20 md:h-28 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === img
                ? "border-stone-900 scale-95 opacity-100 shadow-md"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${title} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}