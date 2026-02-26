"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AccessibilityContextType {
  textSize: "normal" | "large" | "extra-large";
  contrastMode: "normal" | "high";
  saturation: "normal" | "reduced";
  monochromeMode: boolean;
  highlightLinks: boolean;
  highlightTitles: boolean;
  readableFonts: boolean;
  largeCursor: boolean;
  stopAnimations: boolean;
  setTextSize: (size: "normal" | "large" | "extra-large") => void;
  setContrastMode: (mode: "normal" | "high") => void;
  setSaturation: (sat: "normal" | "reduced") => void;
  setMonochromeMode: (mode: boolean) => void;
  setHighlightLinks: (highlight: boolean) => void;
  setHighlightTitles: (highlight: boolean) => void;
  setReadableFonts: (readable: boolean) => void;
  setLargeCursor: (large: boolean) => void;
  setStopAnimations: (stop: boolean) => void;
  resetSettings: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSize] = useState<"normal" | "large" | "extra-large">("normal");
  const [contrastMode, setContrastMode] = useState<"normal" | "high">("normal");
  const [saturation, setSaturation] = useState<"normal" | "reduced">("normal");
  const [monochromeMode, setMonochromeMode] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightTitles, setHighlightTitles] = useState(false);
  const [readableFonts, setReadableFonts] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);
  const [stopAnimations, setStopAnimations] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("accessibilitySettings");
    if (savedSettings) {
      try {
        const { textSize: savedTextSize, contrastMode: savedContrast, saturation: savedSat, monochromeMode: savedMono, highlightLinks: savedHighlight, highlightTitles: savedTitles, readableFonts: savedFonts, largeCursor: savedCursor, stopAnimations: savedStop } = JSON.parse(savedSettings);
        setTextSize(savedTextSize || "normal");
        setContrastMode(savedContrast || "normal");
        setSaturation(savedSat || "normal");
        setMonochromeMode(savedMono || false);
        setHighlightLinks(savedHighlight || false);
        setHighlightTitles(savedTitles || false);
        setReadableFonts(savedFonts || false);
        setLargeCursor(savedCursor || false);
        setStopAnimations(savedStop || false);
      } catch (e) {
        console.error("Failed to load accessibility settings", e);
      }
    }
    setMounted(true);
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (mounted) {
      localStorage.setItem(
        "accessibilitySettings",
        JSON.stringify({ textSize, contrastMode, saturation, monochromeMode, highlightLinks, highlightTitles, readableFonts, largeCursor, stopAnimations })
      );
    }
  }, [textSize, contrastMode, saturation, monochromeMode, highlightLinks, highlightTitles, readableFonts, largeCursor, stopAnimations, mounted]);

  // Apply text size to document
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    switch (textSize) {
      case "large":
        root.style.fontSize = "18px";
        break;
      case "extra-large":
        root.style.fontSize = "20px";
        break;
      default:
        root.style.fontSize = "16px";
    }
  }, [textSize, mounted]);

  // Apply contrast mode to document
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (contrastMode === "high") {
      root.classList.add("high-contrast-mode");
    } else {
      root.classList.remove("high-contrast-mode");
    }
  }, [contrastMode, mounted]);

  // Apply contrast mode to document
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (contrastMode === "high") {
      root.classList.add("high-contrast-mode");
    } else {
      root.classList.remove("high-contrast-mode");
    }
  }, [contrastMode, mounted]);

  // Apply saturation mode
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (saturation === "reduced") {
      root.classList.add("reduced-saturation-mode");
    } else {
      root.classList.remove("reduced-saturation-mode");
    }
  }, [saturation, mounted]);

  // Apply monochrome mode
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (monochromeMode) {
      root.classList.add("monochrome-mode");
    } else {
      root.classList.remove("monochrome-mode");
    }
  }, [monochromeMode, mounted]);

  // Apply link highlighting
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (highlightLinks) {
      root.classList.add("highlight-links-mode");
    } else {
      root.classList.remove("highlight-links-mode");
    }
  }, [highlightLinks, mounted]);

  // Apply title highlighting
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (highlightTitles) {
      root.classList.add("highlight-titles-mode");
    } else {
      root.classList.remove("highlight-titles-mode");
    }
  }, [highlightTitles, mounted]);

  // Apply readable fonts
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (readableFonts) {
      root.classList.add("readable-fonts-mode");
    } else {
      root.classList.remove("readable-fonts-mode");
    }
  }, [readableFonts, mounted]);

  // Apply large cursor
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (largeCursor) {
      root.classList.add("large-cursor-mode");
    } else {
      root.classList.remove("large-cursor-mode");
    }
  }, [largeCursor, mounted]);

  // Apply stop animations
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (stopAnimations) {
      root.classList.add("stop-animations-mode");
    } else {
      root.classList.remove("stop-animations-mode");
    }
  }, [stopAnimations, mounted]);

  const resetSettings = () => {
    setTextSize("normal");
    setContrastMode("normal");
    setSaturation("normal");
    setMonochromeMode(false);
    setHighlightLinks(false);
    setHighlightTitles(false);
    setReadableFonts(false);
    setLargeCursor(false);
    setStopAnimations(false);
    localStorage.removeItem("accessibilitySettings");
  };

  return (
    <AccessibilityContext.Provider
      value={{
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
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider");
  }
  return context;
}
