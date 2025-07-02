import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            جاهزون لدفع عملك نحو التميز{" "}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10">
            التحق بركب الشركات الرائدة التي طورت أساليب عملها بفضل منصتنا.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <motion.button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              تواصل معنا الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
