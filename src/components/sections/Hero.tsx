"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BiCheck } from "react-icons/bi";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";



export default function Hero() {
  const t = useTranslations('Hero');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  // You can get the locale from useTranslations or from next-intl's useLocale
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';


  const backgroundImage =
    dir === 'rtl'
      ? "url('/sarh-hero1.jpeg')"
      : "url('/sarh-hero2.jpg')";
  return (
    <section
      dir={dir}
      className={`relative min-h-screen pt-24 md:pt-32 pb-16 md:pb-20 px-4 sm:px-6 flex items-center  ${dir === "rtl" ? " bg-left" : " bg-right"}`}
      style={{
        backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={() => setVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                onClick={() => setVideoModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title={t('videoTitle')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="md:hidden absolute w-full h-[calc(100vh-72.8px)] right-0 bottom-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

        <div className="relative z-10 flex flex-col justify-center items-center md:block">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold leading-tight mb-4 md:mb-6 flex flex-col items-center md:block"
          >
            <span className="font-bold bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent">
              {t('companyName')}
            </span>{" "}
            <p className="text-[#fff] md:text-black text-center md:text-start mt-2">
              {t('tagline')}
            </p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white md:text-black mb-8 md:mb-10 max-w-2xl font-bold"
          >
            {t('subtitle')}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <Link href="/contact" locale={locale}>
              <motion.div
                className="inline-flex items-center px-4 sm:px-5 py-3 sm:py-3 bg-[#2EB6EE] text-white font-medium rounded-xl hover:bg-[#2596c4] transition-all duration-300 text-base sm:text-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(46, 182, 238, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t('ctaButton')}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </Link>
          </motion.button>
          <ul className="mt-4 space-y-3 text-white md:text-black text-base sm:text-lg font-medium">
            {(t.raw('features') as string[]).map((item: string, index: number) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-[#8FBE53] text-xl">
                  <BiCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}