"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#f5f2eb] border-b border-stone-200 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      {/* Main Nav */}
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-stone-900 bg-stone-900 text-white flex items-center justify-center font-serif text-base font-bold transition-colors group-hover:bg-transparent group-hover:text-stone-900">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-normal tracking-[0.2em] uppercase font-serif-heading text-stone-900 leading-none">
              Atelier
            </span>
            <span className="text-[9px] font-mono tracking-[0.35em] text-stone-500 uppercase mt-1">
              Design
            </span>
          </div>
        </Link>

        {/* Links (Centered/Spaced for luxury look) */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-widest uppercase text-stone-700">
          <Link href="/about" className="hover:text-stone-950 transition-colors">About Us</Link>
          <Link href="/projects" className="hover:text-stone-950 transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-stone-950 transition-colors">Contact Us</Link>
          <Link href="/login" className="hover:text-stone-950 transition-colors">Login</Link>
          <Link href="/register" className="hover:text-stone-950 transition-colors">Register</Link>
        </div>

        {/* Action Button matching the inspiration layout */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/contact" 
            className="border border-stone-900 text-stone-900 bg-transparent hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 font-medium"
          >
            Free Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}