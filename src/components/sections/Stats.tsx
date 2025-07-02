"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "المستخدمين النشطين", icon: "👥" },
  { number: "99.9%", label: "جاهزية النظام", icon: "⏱️" },
  { number: "4.9/5", label: "تقييم المستخدمين", icon: "⭐" },
  { number: "500+", label: "تكاملات متوفرة", icon: "🔌" },
];

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#2EB6EE] via-[#62d0c5] to-[#a6e8b0] text-white">
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
