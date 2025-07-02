"use client";
import Features from "@/components/sections/Features";
import Header from "@/components/shared/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import UseCases from "@/components/sections/UseCases";
import dynamic from "next/dynamic";

// Load the component with SSR disabled
const Floating = dynamic(() => import("@/components/ui/Floating"), {
  ssr: false,
});
import { useRef, useState, useEffect } from "react";
import AboutSection from "@/components/sections/About";
import Footer from "@/components/shared/Footer";
import CTA from "@/components/sections/CTA";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";

const UltraPremiumLanding = () => {
  const ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  if (windowWidth === 0) return null; // عدم العرض حتى نعرف عرض الشاشة

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <Floating ref={ref} />
      {/* Navigation */}
      <Header />
      {/* Hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Features section */}
      <section id="features">
        <Features />
      </section>

      {/* Stats section */}
      <section id="stats">
        <Stats />
      </section>

      {/* Use Cases section */}
      <section id="use-cases">
        <UseCases />
      </section>

      {/* About section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* FAQ section */}
      <section id="faq">
        <FAQ />
      </section>

      {/* CTA section */}
      <section id="cta">
        <CTA />
      </section>

      {/* Newsletter section */}
      <section id="newsletter">
        <Newsletter />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UltraPremiumLanding;
