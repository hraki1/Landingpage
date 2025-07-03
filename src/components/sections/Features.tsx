"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations('featuresSection');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: t('features.0.title'),
      description: t('features.0.description'),
      icon: (
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      color: "from-[#8FBE53] to-[#2EB6EE]",
      extendedDesc: t('features.0.extendedDesc'),
      stats: [
        { value: t('features.0.stats.0.value'), label: t('features.0.stats.0.label') },
        { value: t('features.0.stats.1.value'), label: t('features.0.stats.1.label') },
        { value: t('features.0.stats.2.value'), label: t('features.0.stats.2.label') },
      ],
    },
    {
      title: t('features.1.title'),
      description: t('features.1.description'),
      icon: (
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      color: "from-amber-500 to-red-600",
      extendedDesc: t('features.1.extendedDesc'),
      stats: [
        { value: t('features.1.stats.0.value'), label: t('features.1.stats.0.label') },
        { value: t('features.1.stats.1.value'), label: t('features.1.stats.1.label') },
        { value: t('features.1.stats.2.value'), label: t('features.1.stats.2.label') },
      ],
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
      icon: (
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600",
      extendedDesc: t('features.2.extendedDesc'),
      stats: [
        { value: t('features.2.stats.0.value'), label: t('features.2.stats.0.label') },
        { value: t('features.2.stats.1.value'), label: t('features.2.stats.1.label') },
        { value: t('features.2.stats.2.value'), label: t('features.2.stats.2.label') },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-purple-100 text-[#2EB6EE] font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            {t('subtitle')}
          </div>
          <h2 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t('title.part1')}{" "}
            <span className="bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] bg-clip-text text-transparent">
              {t('title.part2')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredFeature(i)}
              onHoverEnd={() => setHoveredFeature(null)}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md sm:shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] "></div>
              <motion.div
                animate={{
                  scale: hoveredFeature === i ? 1.1 : 1,
                  rotate: hoveredFeature === i ? 5 : 0,
                }}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} text-white`}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl text-black sm:text-2xl font-bold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}