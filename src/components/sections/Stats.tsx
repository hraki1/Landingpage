"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations('Stats');

  const stats = [
    { number: t('stats.0.number'), label: t('stats.0.label'), icon: "⚡" },
    { number: t('stats.1.number'), label: t('stats.1.label'), icon: "🔧" },
    { number: t('stats.2.number'), label: t('stats.2.label'), icon: "⏱️" },
    { number: t('stats.3.number'), label: t('stats.3.label'), icon: "🎯" },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-br from-[#2EB6EE] via-[#62d0c5] to-[#a6e8b0] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-4xl font-extrabold mb-2 flex justify-center items-center gap-2">
                <span>{stat.icon}</span>
                <span>{stat.number}</span>
              </div>
              <p className="text-base sm:text-lg text-white/90 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}