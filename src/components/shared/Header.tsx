"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const navLinks = [
  {
    label: "الرئيسية",
    href: "/",
    ariaLabel: "الانتقال إلى الصفحة الرئيسية",
    icon: "🏠",
    type: "page",
  },
  {
    label: "الميزات",
    href: "#features",
    ariaLabel: "عرض ميزات المنتج",
    icon: "✨",
    badge: "جديد",
    type: "hash",
  },
  {
    label: "الإحصائيات",
    href: "#stats",
    ariaLabel: "عرض إحصائيات الأداء",
    icon: "📊",
    type: "hash",
  },
  {
    label: "الحلول",
    href: "#use-cases",
    ariaLabel: "اكتشاف حالات الاستخدام",
    icon: "🛠️",
    type: "hash",
    subItems: [
      { label: "للشركات", href: "/solutions/business" },
      { label: "للأفراد", href: "/solutions/individuals" },
    ],
  },
  {
    label: "من نحن",
    href: "/about",
    ariaLabel: "معلومات عن الشركة",
    icon: "👥",
    type: "page",
  },
  {
    label: "الأسئلة الشائعة",
    href: "#faq",
    ariaLabel: "الأسئلة المتكررة",
    icon: "❓",
    type: "hash",
  },
  {
    label: "اتصل بنا",
    href: "/contact",
    ariaLabel: "صفحة التواصل",
    icon: "📞",
    cta: true,
    type: "page",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  interface HashLinkHandler {
    (hash: string): void;
  }

  const handleHashLinkClick: HashLinkHandler = (hash: string): void => {
    if (pathname !== "/") {
      // If not on homepage, navigate to homepage with hash
      router.push(`/${hash}`);
      // Scroll after navigation completes
      setTimeout(() => {
        const element: Element | null = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll
      const element: Element | null = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        transition={{ duration: 0.8 }}
        className="fixed w-full z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-white/80 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo + Links */}
          <div className="flex items-center gap-6">
            {/* Logo */}
            <Link href={'/'}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <Image
                  src="/logo.png"
                  alt="صرح النمو"
                  className="w-10 md:w-14 h-auto"
                  width={56}
                  height={56}
                />
                <span className=" lg:hidden text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent">
                  صرح النمو
                </span>
              </motion.div>
            </Link>
            {/* Navigation Links */}
            <div className="hidden lg:flex ml-6 gap-4">
              {navLinks.map(({ label, href, type }) =>
                type === "hash" ? (
                  <button
                    key={href}
                    onClick={() => handleHashLinkClick(href)}
                    className="text-gray-700 hover:text-[#2EB6EE] font-medium transition-colors duration-300 text-sm xl:text-base relative group"
                  >
                    <motion.span whileHover={{ scale: 1.05 }} className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2EB6EE] transition-all duration-300 group-hover:w-full" />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-700 hover:text-[#2EB6EE] font-medium transition-colors duration-300 text-sm xl:text-base relative group"
                  >
                    <motion.span whileHover={{ scale: 1.05 }} className="relative">
                      {label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2EB6EE] transition-all duration-300 group-hover:w-full" />
                    </motion.span>
                  </Link>
                )
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <motion.button
              className="px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm xl:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(46, 182, 238, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              طلب عرض توضيحي
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg overflow-hidden lg:hidden"
          >
            <div className="px-4 py-4 space-y-3 text-center">
              {navLinks.map(({ label, href, type }, i) => (
                <motion.div
                  key={href}
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  {type === "hash" ? (
                    <button
                      onClick={() => handleHashLinkClick(href)}
                      className="w-full  py-2 px-3 text-gray-700 hover:text-[#2EB6EE] font-medium rounded-lg hover:bg-[#2eb6ee1a] transition-colors"
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block  py-2 px-3 text-gray-700 hover:text-[#2EB6EE] font-medium rounded-lg hover:bg-[#2eb6ee1a] transition-colors"
                    >
                      {label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link href="/contact">
                  <motion.button
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-base"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    ابدأ الآن
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
