"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DaisyIcon from "./DaisyIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Închide meniul la click în exterior
  useEffect(() => {
    function onDocumentClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (e.target instanceof Node && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onKey);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Logica pentru Laptop (Hover)
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <header className="sticky top-0 z-[100] border-b border-[#8FB373]/40 bg-[#FEFAE0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C6644] font-serif text-xl tracking-[0.2em] text-[#FEFAE0]">C</div>
          <div className="leading-tight">
            <div className="flex items-center gap-1 font-serif text-lg tracking-wide text-[#3E2A20] md:text-xl">
              Pensiunea Charisma
              <div className="flex gap-0.5">
                <DaisyIcon className="h-5 w-5 md:h-6 md:w-6" />
                <DaisyIcon className="h-5 w-5 md:h-6 md:w-6" />
                <DaisyIcon className="h-5 w-5 md:h-6 md:w-6" />
              </div>
            </div>
            <div className="text-xs text-[#5A4638] md:text-sm">Eleganță rustică în Băile Herculane</div>
          </div>
        </Link>

        {/* NAVIGARE LAPTOP (Desktop) */}
        <nav className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#5A4638]">
            <li><a href="/#cazare" className="transition-colors hover:text-[#3E2A20]">Cazare</a></li>
            <li><a href="/#facilitati" className="transition-colors hover:text-[#3E2A20]">Facilități</a></li>
            <li><a href="/#galerie" className="transition-colors hover:text-[#3E2A20]">Galerie</a></li>
            
            {/* DROP DOWN AGREMENT LAPTOP */}
            <li 
              className="relative" 
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-2 transition-colors hover:text-[#3E2A20]">
                AGREMENT <span className="text-xs">▼</span>
              </button>

              <div
                className={
                  "absolute left-0 top-full pt-2 w-64 transition-all duration-200 z-[110] " +
                  (open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2")
                }
              >
                <div className="rounded-2xl bg-[#F5EBE0] border border-[#E0D4C5] shadow-xl py-2 overflow-hidden">
                  <Link href="/agrement/oras" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm hover:bg-[#E8D5C4] transition-colors text-[#3E2A20]">
                    Ce este de văzut în oraș
                  </Link>
                  <Link href="/agrement/trasee" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm hover:bg-[#E8D5C4] transition-colors text-[#3E2A20]">
                    Trasee turistice
                  </Link>
                </div>
              </div>
            </li>
            
            <li><a href="/#contact" className="transition-colors hover:text-[#3E2A20]">Contact</a></li>
          </ul>
        </nav>

        {/* BUTON REZERVARE (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/rezervare"
            className="inline-flex items-center gap-2 rounded-full bg-[#9C6644] px-5 py-2 text-sm font-medium tracking-wide text-[#FEFAE0] shadow-sm transition-transform hover:scale-105"
          >
            Rezervă acum <span>→</span>
          </Link>
        </div>

        {/* MENIU MOBIL */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/rezervare" className="rounded-full bg-[#9C6644] px-4 py-2 text-xs font-bold text-[#FEFAE0]">
            Rezervă
          </Link>
          
          <div className="relative" ref={containerRef as any}>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full bg-black/5 p-2 text-[#3E2A20]"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>

            {/* DROPDOWN MOBIL */}
            {open && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-[#F5EBE0] border border-[#E0D4C5] shadow-2xl py-3 z-[110] animate-in fade-in zoom-in duration-200">
                <a href="/#cazare" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-[#3E2A20] hover:bg-[#E8D5C4]">Cazare</a>
                <a href="/#facilitati" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-[#3E2A20] hover:bg-[#E8D5C4]">Facilități</a>
                <a href="/#galerie" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-[#3E2A20] hover:bg-[#E8D5C4]">Galerie</a>
                <div className="my-2 border-t border-[#E0D4C5]" />
                <Link href="/agrement/oras" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-[#3E2A20] hover:bg-[#E8D5C4]">Ce este de văzut</Link>
                <Link href="/agrement/trasee" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-[#3E2A20] hover:bg-[#E8D5C4]">Trasee turistice</Link>
                <div className="my-2 border-t border-[#E0D4C5]" />
                <a href="/#contact" onClick={() => setOpen(false)} className="block px-5 py-3 text-sm font-medium text-[#3E2A20] hover:bg-[#E8D5C4]">Contact</a>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
