"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <>
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-white/80 border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-7">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center w-10 md:w-14"
            >
              <Image
                src={"/logo.png"}
                alt="Company Logo"
                className="w-full h-auto"
                width={50}
                height={50}
              />
            </motion.div>
            <div className="hidden lg:flex ml-8 xl:ml-16 space-x-6 xl:space-x-8">
              {["Product", "Solutions", "Resources", "Pricing", "Company"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium relative group text-sm xl:text-base"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                )
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <motion.button
              className="px-4 xl:px-5 py-2 xl:py-2.5 bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 text-sm xl:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              طلب عرض توضيحي
            </motion.button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-lg overflow-hidden lg:hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {["Product", "Solutions", "Resources", "Pricing", "Company"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block py-2 px-3 text-gray-700 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
                    initial={{ x: -20 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <motion.a
                  href="#"
                  className="block py-2 px-3 text-gray-700 hover:text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors"
                  initial={{ x: -20 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Sign in
                </motion.a>
                <motion.button
                  className="w-full py-2.5 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white font-medium rounded-lg"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Get started
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
