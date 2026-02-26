"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Array complet de imagini - editeaza cu numele reale ale fisierelor
  const allImages = [
    "pensiune.jpg",
    "casuta1.jpg",
    "casuta2.jpg",
    "charisma.jpg",
    "curte1.jpg",
    "curte2.jpg",
    "parc4.jpg",
    "fantana1.jpg",
    "fantana2.jpg",
    "flori.jpg",
    "foisor1.jpg",
    "foisor2.jpg",
    "leagan1.jpg",
    "parc1.jpg",
    "parc3.jpg",
    "statuie1.jpg",
    "tobogan1.jpg",
    "tufe1.jpg",
    "tufe2.jpg",
    "piscina1.jpg",
    "piscina2.jpg",
    "piscina3.jpg",
    "piscina4.jpg",
    "piscina5.jpg",
    "piscina6.jpg",
    "piscina7.jpg",
    "camera1.jpg",
    "camera2.jpg",
    "camera3.jpg",
    "camera4.jpg",
    "camera5.jpg",
    "camera6.jpg",
    "camera7.jpg",
    "camera8.jpg",
  ];

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#87A96B] text-[#3E2A20] font-sans antialiased">
        <header className="sticky top-0 z-30 border-b border-[#8FB373]/40 bg-[#FEFAE0]/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-75"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C6644] font-serif text-xl tracking-[0.2em] text-[#FEFAE0]">
                C
              </div>
              <div className="leading-tight">
                <div className="font-serif text-lg tracking-wide text-[#3E2A20] md:text-xl">
                  Pensiunea Charisma
                </div>
                <div className="text-xs text-[#5A4638] md:text-sm">
                  Eleganță rustică în Băile Herculane
                </div>
              </div>
            </Link>

            {/* Buton Înapoi */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold tracking-wide text-[#FEFAE0] bg-[#9C6644] hover:bg-[#846644] hover:shadow-lg shadow-md transition-all"
              >
                ← Înapoi
              </Link>
            </div>
          </div>
        </header>

      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#FEFAE0] mb-4">
            Galeria Completă
          </h1>
          <p className="text-lg text-[#FEFAE0]/90 max-w-2xl mx-auto">
            Explorează galeria fotografica completă a Pensiunii Charisma. Fiecare imagine iti va oferi o privire asupra frumuseții și confortului pensiunii noastre.
          </p>
        </div>

        {/* Grid Galerie Completa */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
          {allImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={`/images/poze/${img}`}
                alt={`Galerie imagine ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mb-8">
          <Link
            href="/#galerie"
            className="inline-flex items-center gap-2 rounded-xl px-8 py-3 font-medium tracking-wide text-[#FEFAE0] bg-[#9C6644] hover:bg-[#846644] shadow-md hover:shadow-lg transition-all"
          >
            ← Înapoi
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative w-full max-w-5xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-auto">
              <Image
                src={`/images/poze/${selectedImage}`}
                alt="Lightbox image"
                width={1600}
                height={1200}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>

            {/* Navigation Info */}
            <div className="mt-4 text-center text-white text-sm">
              <p className="opacity-75">Apasă oriunde pe ecran pentru a inchide</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
