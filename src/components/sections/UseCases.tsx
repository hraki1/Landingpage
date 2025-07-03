"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function UseCases() {
  const t = useTranslations('UseCases');

  const useCases = [
    {
      title: t('cases.0.title'),
      description: t('cases.0.description'),
      icon: "🚀",
      features: t.raw('cases.0.features'),
    },
    {
      title: t('cases.1.title'),
      description: t('cases.1.description'),
      icon: "🏢",
      features: t.raw('cases.1.features'),
    },
    {
      title: t('cases.2.title'),
      description: t('cases.2.description'),
      icon: "🎓",
      features: t.raw('cases.2.features'),
    },
    {
      title: t('cases.3.title'),
      description: t('cases.3.description'),
      icon: "🛒",
      features: t.raw('cases.3.features'),
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md sm:shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature: string, j: number) => (
                  <li key={j} className="flex items-center text-black">
                    <svg
                      className="w-4 h-4 mr-2 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}