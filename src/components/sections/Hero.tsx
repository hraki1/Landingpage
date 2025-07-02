"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 md:pt-32 pb-16 md:pb-20 text-white"
      style={{
        backgroundImage: "url('/dashboard-screenshot.jpeg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Ultra Overlay with Gradient */}
      <div className="absolute w-full h-[calc(100vh-72.8px)] bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* ✅ Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                onClick={() => setVideoModalOpen(false)}
              >
                ✕
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Product Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-center lg:text-right">
        <div className="space-y-6">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent block">
              صرح النمو
            </span>
            <span className="block mt-2 text-white">
              حلول مترابطة لنمو أعمالك!
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-200 font-medium max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            بساطة. أتمتة. تفوّق. نحن نبني الأنظمة التي تدفع أعمالك للأمام.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-end gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="px-6 py-3 bg-[#2EB6EE] text-white rounded-xl text-sm sm:text-base font-semibold hover:shadow-xl transition-all duration-300">
              إبدأ الآن
            </button>
          </motion.div>
        </div>       
      </div>
    </section>
  );
}
