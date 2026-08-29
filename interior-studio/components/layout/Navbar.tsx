"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-[#fcfbf9] border-b border-stone-200">
      {/* Promo Bar */}
      <div className="bg-[#d2c199] text-stone-900 text-center text-xs py-2 font-medium uppercase tracking-wider">
        Save 20% On New Interior Projects — <span className="underline cursor-pointer font-bold">Book Consult</span>
      </div>

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

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-widest uppercase text-stone-700">
          <Link href="/projects" className="hover:text-stone-950 transition-colors">Portfolio</Link>
          <Link href="/about" className="hover:text-stone-950 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-stone-950 transition-colors">Contact</Link>
          <Link href="/login" className="hover:text-stone-950 transition-colors">Login</Link>
        </div>

        {/* Action Button */}
        <div className="flex items-center space-x-4">
          <Link href="/register" className="hidden sm:inline-block text-xs uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors">
            Register
          </Link>
          <Link href="/contact" className="bg-stone-900 text-stone-100 text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm hover:bg-stone-800 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}