"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations('FAQ');

  const faqs = [
    {
      question: t('questions.0.question'),
      answer: t('questions.0.answer'),
    },
    {
      question: t('questions.1.question'),
      answer: t('questions.1.answer'),
    },
    {
      question: t('questions.2.question'),
      answer: t('questions.2.answer'),
    },
    {
      question: t('questions.3.question'),
      answer: t('questions.3.answer'),
    },
    {
      question: t('questions.4.question'),
      answer: t('questions.4.answer'),
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            {t('subtitle')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
            {t('title')}{" "}
            <span className="bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] bg-clip-text text-transparent">
              {t('companyName')}
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-200"
            >
              <h3 className="text-lg font-bold mb-2 text-black">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">{t('moreQuestions')}</p>
          <Link href="/contact" passHref>
            <motion.p
              className="inline-flex gap-3 items-center text-[#2EB6EE] font-medium"
              whileHover={{ x: 5 }}
            >
              {t('contactUs')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.p>
          </Link>
        </div>
      </div>
    </section>
  );
}