"use client";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import UseCases from "@/components/sections/UseCases";
import { useRef, useState, useEffect } from "react";
import AboutSection from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";
import Loading from "@/components/ui/Loading";
import Floating from "@/components/ui/Floating";


export default function LandingPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const updateWidth = () => setWindowWidth(window.innerWidth);

    // Set initial width
    updateWidth();

    // Handle resize events
    const handleResize = () => {
      updateWidth();
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Handle hash-based navigation
  useEffect(() => {
    if (isMounted && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    }
  }, [isMounted]);

  if (!isMounted || windowWidth === 0) return <Loading />;

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <Floating ref={ref} />

      {/* Navigation */}

      {/* Sections with scroll-margin for fixed header */}
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="features" className="scroll-mt-24">
        <Features />
      </section>

      <section id="stats" className="scroll-mt-24">
        <Stats />
      </section>

      <section id="use-cases" className="scroll-mt-24">
        <UseCases />
      </section>

      <section id="about" className="scroll-mt-24">
        <AboutSection />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>

      <section id="cta" className="scroll-mt-24">
        <CTA />
      </section>

      <section id="newsletter" className="scroll-mt-24">
        <Newsletter />
      </section>
    </div>
  );
}
