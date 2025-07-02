import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#2EB6EE] to-[#a6e8b0] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { number: "10K+", label: "Active users", icon: "👥" },
            { number: "99.9%", label: "Uptime", icon: "⏱️" },
            { number: "4.9/5", label: "Rating", icon: "⭐" },
            { number: "500+", label: "Integrations", icon: "🔌" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 flex items-center justify-center">
                <span className="mr-2">{stat.icon}</span>
                {stat.number}
              </div>
              <div className="text-sm sm:text-base md:text-lg opacity-90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
