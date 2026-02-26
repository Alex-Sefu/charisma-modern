"use client";

import React, { useState, useRef, useEffect } from "react";
import { Accessibility, X } from "lucide-react";
import { useAccessibility } from "../contexts/AccessibilityContext";

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
 
  const {
    textSize,
    contrastMode,
    saturation,
    monochromeMode,
    highlightLinks,
    highlightTitles,
    readableFonts,
    largeCursor,
    stopAnimations,
    setTextSize,
    setContrastMode,
    setSaturation,
    setMonochromeMode,
    setHighlightLinks,
    setHighlightTitles,
    setReadableFonts,
    setLargeCursor,
    setStopAnimations,
    resetSettings,
  } = useAccessibility();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="fixed bottom-5 left-5 z-40">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Deschide meniu de accesibilitate"
        aria-expanded={isOpen}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FEFAE0] text-[#8FB373] shadow-lg transition-all duration-200 hover:bg-[#F5EBE0] active:scale-95"
        title="Meniu Accesibilitate"
      >
        <Accessibility size={24} />
      </button>

      {/* Menu Panel */}
      {isOpen && (
        <div className="absolute bottom-16 left-0 w-96 rounded-2xl border border-[#8FB373]/30 bg-[#FEFAE0] shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 max-h-[80vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between border-b border-[#E0D4C5] bg-[#FEFAE0] p-4">
            <h2 className="font-serif text-lg font-semibold text-[#3E2A20]">
              Meniu de accesibilitate
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-[#E8D5C4]"
              aria-label="Închide meniu"
            >
              <X size={20} className="text-[#3E2A20]" />
            </button>
          </div>

          {/* Language Option */}
          

          {/* Main Options */}
          <div className="border-b border-[#E0D4C5] px-4 py-4">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#7B6B5C]">
              Opțiuni principale
            </p>
            <div className="grid grid-cols-2 gap-3">
              {/* Cititor de text */}
              <button className="flex flex-col items-center gap-2 rounded-lg bg-[#F5EBE0] px-3 py-4 text-center transition-colors hover:bg-[#E8D5C4]">
                <span className="text-xl">📖</span>
                <span className="text-xs font-medium">Cititor de text</span>
              </button>

              {/* Contrast */}
              <button
                onClick={() => setContrastMode(contrastMode === "normal" ? "high" : "normal")}
                aria-pressed={contrastMode === "high"}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  contrastMode === "high"
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl">🌙</span>
                <span className="text-xs font-medium">Contrast</span>
                {contrastMode === "high" && <span className="text-xs text-[#8FB373]">●●</span>}
              </button>

              {/* Saturație */}
              <button
                onClick={() => setSaturation(saturation === "normal" ? "reduced" : "normal")}
                aria-pressed={saturation === "reduced"}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  saturation === "reduced"
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl">💧</span>
                <span className="text-xs font-medium">Saturație</span>
                {saturation === "reduced" && <span className="text-xs text-[#8FB373]">●●</span>}
              </button>

              {/* Monocrom */}
              <button
                onClick={() => setMonochromeMode(!monochromeMode)}
                aria-pressed={monochromeMode}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  monochromeMode
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl">⚫</span>
                <span className="text-xs font-medium">Monocrom</span>
                {monochromeMode && <span className="text-xs text-[#8FB373]">●●</span>}
              </button>

              {/* Poziția textului */}
              <button className="flex flex-col items-center gap-2 rounded-lg bg-[#F5EBE0] px-3 py-4 text-center transition-colors hover:bg-[#E8D5C4]">
                <span className="text-xl">☰</span>
                <span className="text-xs font-medium">Poziția textului</span>
              </button>

              {/* Evidențiază linkurile */}
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                aria-pressed={highlightLinks}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  highlightLinks
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl">🔗</span>
                <span className="text-xs font-medium">Evidențiază linkurile</span>
                {highlightLinks && <span className="text-xs text-[#8FB373]">●●●</span>}
              </button>

              {/* Evidențiază titlurile */}
              <button
                onClick={() => setHighlightTitles(!highlightTitles)}
                aria-pressed={highlightTitles}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  highlightTitles
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl font-bold">T</span>
                <span className="text-xs font-medium">Evidențiază titlurile</span>
                {highlightTitles && <span className="text-xs text-[#8FB373]">●●●</span>}
              </button>

              {/* Fonturi lizibile */}
              <button
                onClick={() => setReadableFonts(!readableFonts)}
                aria-pressed={readableFonts}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  readableFonts
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl font-bold">B</span>
                <span className="text-xs font-medium">Fonturi lizibile</span>
                {readableFonts && <span className="text-xs text-[#8FB373]">●●</span>}
              </button>

              {/* Cursor mare */}
              <button
                onClick={() => setLargeCursor(!largeCursor)}
                aria-pressed={largeCursor}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  largeCursor
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl">🖱️</span>
                <span className="text-xs font-medium">Cursor mare</span>
                {largeCursor && <span className="text-xs text-[#8FB373]">●●</span>}
              </button>

              {/* Oprește animația */}
              <button
                onClick={() => setStopAnimations(!stopAnimations)}
                aria-pressed={stopAnimations}
                className={`flex flex-col items-center gap-2 rounded-lg px-3 py-4 text-center transition-colors ${
                  stopAnimations
                    ? "bg-[#E8D5C4] text-[#3E2A20]"
                    : "bg-[#F5EBE0] text-[#3E2A20] hover:bg-[#E8D5C4]"
                }`}
              >
                <span className="text-xl">⏸</span>
                <span className="text-xs font-medium">Oprește animația</span>
                {stopAnimations && <span className="text-xs text-[#8FB373]">●●</span>}
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-3 border-t border-[#E0D4C5] bg-[#F5EBE0] px-4 py-4">
            <div className="flex items-center justify-center gap-2 text-xs text-[#7B6B5C]">
              <span className="text-lg">♿</span>
              <span className="font-medium">Accesibilitate</span>
            </div>
            <button
              onClick={() => {
                resetSettings();
                setIsOpen(false);
              }}
              className="w-full rounded-lg bg-[#9C6644] px-4 py-2 text-sm font-medium text-[#FEFAE0] transition-colors hover:bg-[#846644]"
            >
              ↻ Restabilire la valorile implicite
            </button>
          </div>
        </div>
      )}

      {/* Overlay hint when closed */}
      {!isOpen && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#3E2A20] px-3 py-1 text-xs text-[#FEFAE0] opacity-0 transition-opacity duration-200 pointer-events-none hover:opacity-100">
          Accesibilitate
        </div>
      )}
    </div>
  );
}
