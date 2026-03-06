"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import DaisyIcon from "./DaisyIcon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleMouseLeave = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#8FB373]/40 bg-[#FEFAE0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
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
        </div>

        <nav className="hidden flex-1 justify-center md:flex" ref={containerRef as any} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
          <ul className="flex items-center gap-8 text-sm uppercase tracking-[0.2em] text-[#5A4638]">
            <li>
              <a href="#cazare" className="transition-colors hover:text-[#3E2A20]">Cazare</a>
            </li>
            <li>
              <a href="#facilitati" className="transition-colors hover:text-[#3E2A20]">Facilități</a>
            </li>
            <li>
              <a href="#galerie" className="transition-colors hover:text-[#3E2A20]">Galerie</a>
            </li>
            <li className="relative">
              <button
                aria-expanded={open}
                onMouseEnter={handleMouseEnter}
                onClick={() => setOpen((s) => !s)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setOpen((s) => !s);
                }}
                className="flex items-center gap-2 transition-colors hover:text-[#3E2A20]"
              >
                AGREMENT <span className="text-xs">▼</span>
              </button>

              <div
                className={
                  "absolute left-0 top-full -mt-1 w-56 rounded-2xl bg-[#F5EBE0] text-[#3E2A20] border border-[#E0D4C5] shadow-lg py-3 px-1 transform-origin-top transition-all duration-200 z-50 " +
                  (open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none")
                }
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link href="/agrement/oras" className="block px-4 py-3 text-sm rounded-lg hover:bg-[#E8D5C4] transition-colors">Ce este de văzut în oraș și împrejurimi</Link>
                <Link href="/agrement/trasee" className="block px-4 py-3 text-sm rounded-lg hover:bg-[#E8D5C4] transition-colors">Trasee turistice</Link>
              </div>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-[#3E2A20]">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/rezervare"
            className="inline-flex items-center gap-2 rounded-full bg-[#9C6644] px-5 py-2 text-sm font-medium tracking-wide text-[#FEFAE0] shadow-sm transition-colors hover:bg-[#846644]"
          >
            Rezervă acum <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
  <Link href="/rezervare" className="inline-flex items-center gap-2 rounded-full bg-[#9C6644] px-4 py-2 text-xs font-medium tracking-wide text-[#FEFAE0] shadow-sm transition-colors hover:bg-[#846644]">
    Rezervă
  </Link>
  
  <div className="relative" ref={containerRef}>
    <button
      aria-expanded={open}
      onClick={() => setOpen((s) => !s)}
      className="list-none cursor-pointer rounded-full bg-white/10 px-3 py-2"
    >
      <span className="sr-only">Open menu</span>
      <svg className="h-5 w-5 text-[#3E2A20]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    {/* MENIUL MOBIL */}
    <div className={"absolute right-0 mt-2 w-64 rounded-2xl bg-[#F5EBE0] text-[#3E2A20] border border-[#E0D4C5] shadow-2xl py-2 z-[100] " + (open ? "block" : "hidden")}>
      {/* Folosim <a> pentru scroll pe aceeasi pagina si setOpen(false) ca sa se inchida meniul */}
      <a href="#cazare" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#E8D5C4] rounded-lg transition-colors m-1">Cazare</a>
      <a href="#facilitati" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#E8D5C4] rounded-lg transition-colors m-1">Facilități</a>
      <a href="#galerie" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#E8D5C4] rounded-lg transition-colors m-1">Galerie</a>
      
      <div className="border-t border-[#E0D4C5] my-2" />
      
      {/* Folosim <Link> pentru pagini diferite */}
      <Link href="/agrement/oras" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#E8D5C4] rounded-lg transition-colors m-1">Ce este de văzut</Link> 
      <Link href="/agrement/trasee" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#E8D5C4] rounded-lg transition-colors m-1">Trasee turistice</Link>
      
      <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-[#E8D5C4] rounded-lg transition-colors m-1">Contact</a>
    </div>
  </div>
</div>
      </div>
    </header>
  );
}
