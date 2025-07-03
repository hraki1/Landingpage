"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              >
                {t('buttonText')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}