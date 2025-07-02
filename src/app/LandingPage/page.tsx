"use client";
import Features from "@/components/sections/Features";
import Header from "@/components/shared/Header";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import UseCases from "@/components/sections/UseCases";
import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import AboutSection from "@/components/sections/About";
import Footer from "@/components/shared/Footer";
import CTA from "@/components/sections/CTA";
import Newsletter from "@/components/sections/Newsletter";
import FAQ from "@/components/sections/FAQ";
import { usePathname, useSearchParams } from "next/navigation";

// Lazy load components with SSR disabled
const Floating = dynamic(() => import("@/components/ui/Floating"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0" />,
});

const UltraPremiumLanding = () => {
  const ref = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Handle hash navigation on component mount
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 300);
      }
    };

    // Handle initial hash navigation
    handleHashNavigation();

    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Handle route changes for hash navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <Floating ref={ref} />

      {/* Navigation */}
      <Header />

      {/* Hero section */}
      <section id="hero" className="scroll-mt-20">
        <Hero />
      </section>

      {/* Features section */}
      <section id="features" className="scroll-mt-20">
        <Features />
      </section>

      {/* Stats section */}
      <section id="stats" className="scroll-mt-20">
        <Stats />
      </section>

      {/* Use Cases section */}
      <section id="use-cases" className="scroll-mt-20">
        <UseCases />
      </section>

      {/* About section */}
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>

      {/* FAQ section */}
      <section id="faq" className="scroll-mt-20">
        <FAQ />
      </section>

      {/* CTA section */}
      <section id="cta" className="scroll-mt-20">
        <CTA />
      </section>

      {/* Newsletter section */}
      <section id="newsletter" className="scroll-mt-20">
        <Newsletter />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UltraPremiumLanding;
