"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaCode, FaChartLine } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations('aboutSection');
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="py-6 md:py-8 bg-gradient-to-b from-gray-50 to-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/sareh-homepagearabic.jpg"
              alt={t('companyName')}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8 text-right mt-10"
            dir="rtl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                {t('companyName')}
              </span>{" "}
              <br />
              {t('tagline')}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              {t('description')}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaRocket className="text-lg" />
                </div>
                <p className="text-gray-700 flex-1">
                  {t('features.0')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <FaLightbulb className="text-lg" />
                </div>
                <p className="text-gray-700 flex-1">
                  {t('features.1')}
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <FaCode className="text-lg" />
                </div>
                <p className="text-gray-700 flex-1">
                  {t('features.2')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <FaChartLine />
                  </div>
                  <h3 className="font-bold text-blue-700">{t('stats.0.title')}</h3>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  {t('stats.0.description')}
                </p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg text-green-600">
                    <FaRocket />
                  </div>
                  <h3 className="font-bold text-green-700">{t('stats.1.title')}</h3>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  {t('stats.1.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}