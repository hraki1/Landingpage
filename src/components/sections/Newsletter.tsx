"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Newsletter() {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const controls = useAnimation();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 0.4 },
      });
    }
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#e0f0d6] via-[#fdf5f8] to-[#e0f4f8] rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-base sm:text-lg mb-8 max-w-xl mx-auto"
          >
            {t('description')}
          </motion.p>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg font-medium"
            >
              {t('successMessage')}
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="relative z-10 flex flex-col sm:flex-row gap-4 text-black max-w-md mx-auto"
            >
              <input
                dir="ltr"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-transparent shadow-sm transition"
                required
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={controls}
              >
                {t('subscribeButton')}
              </motion.button>
            </form>
          )}

          <p className="text-xs text-gray-500 mt-6">
            {t('privacyNote')}
          </p>
        </div>
      </div>
    </section>
  );
}