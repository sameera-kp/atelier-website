"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // ഉദാഹരണത്തിന് സെർച്ച് ചെയ്യാവുന്ന കുറച്ച് പേജുകളും പ്രോജക്റ്റുകളും
  const searchItems = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio / Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Free Consultation", href: "/contact" },
  ];

  // യൂസർ ടൈപ്പ് ചെയ്യുന്നത് വെച്ച് ഫിൽട്ടർ ചെയ്യുക
  const filteredItems = searchItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header className="w-full bg-[#f5f2eb] border-b border-stone-200 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
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
          <div className="hidden md:flex items-center space-x-10 text-xs font-medium tracking-widest uppercase text-stone-700">
            <Link href="/about" className="hover:text-stone-950 transition-colors">About Us</Link>
            <Link href="/projects" className="hover:text-stone-950 transition-colors">Portfolio</Link>
            <Link href="/contact" className="hover:text-stone-950 transition-colors">Contact Us</Link>
            <Link href="/login" className="hover:text-stone-950 transition-colors">Login</Link>
            <Link href="/register" className="hover:text-stone-950 transition-colors">Register</Link>
          </div>

          {/* Action Buttons & Search */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="text-stone-800 hover:text-stone-950 transition-colors cursor-pointer p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <Link 
              href="/contact" 
              className="border border-stone-900 text-stone-900 bg-transparent hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 font-medium"
            >
              Free Consultation
            </Link>
          </div>
        </nav>
      </header>

      {/* Functional Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-32 px-4">
          <div className="bg-[#f5f2eb] w-full max-w-2xl p-6 border border-stone-300 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-stone-600 font-medium">Search Atelier</span>
              <button 
                onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                className="text-stone-900 hover:text-red-600 text-sm uppercase tracking-wider cursor-pointer"
              >
                [ Close ]
              </button>
            </div>
            
            <div className="flex items-center border-b border-stone-900 pb-2 mb-4">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search pages, sections..." 
                className="w-full bg-transparent text-stone-950 placeholder-stone-400 text-lg focus:outline-none font-serif"
                autoFocus
              />
            </div>

            {/* Search Results Display */}
            {searchQuery && (
              <div className="max-h-48 overflow-y-auto space-y-2">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                      className="block p-2 text-stone-800 hover:bg-stone-200 text-sm tracking-wide transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <p className="text-stone-500 text-xs tracking-wider py-2">No results found for &quot;{searchQuery}&quot;</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}