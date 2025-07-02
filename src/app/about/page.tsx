"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaCode, FaChartLine } from "react-icons/fa";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Company Image with Animation */}
          <motion.div
            viewport={{ once: true }}
            variants={fadeIn}
            className="relative h-96 w-full rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/sareh-homepagearabic.jpg"
              alt="شركة صرح النمو"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Company Description */}
          <motion.div
          
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-8 text-right mt-10"
            dir="rtl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                صرح النمو
              </span>{" "}
              <br />
              حيث تتحول الأفكار إلى واقع رقمي
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold text-blue-600">صرح النمو</span> هي
              شركة رائدة في مجال التكنولوجيا والتحول الرقمي، نبتكر حلولاً برمجية
              متكاملة تلبي متطلبات العصر الرقمي وتساعد الشركات على النمو
              والتوسع.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                  <FaRocket className="text-lg" />
                </div>
                <p className="text-gray-700 flex-1">
                  نسرع نمو أعمالك من خلال حلول تقنية مبتكرة ومخصصة تلبي احتياجات
                  السوق المتغيرة.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-2 rounded-full text-green-600">
                  <FaLightbulb className="text-lg" />
                </div>
                <p className="text-gray-700 flex-1">
                  نترجم أفكارك إلى تطبيقات وبرامج ذكية باستخدام أحدث التقنيات
                  وأفضل الممارسات البرمجية.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                  <FaCode className="text-lg" />
                </div>
                <p className="text-gray-700 flex-1">
                  فريقنا من المطورين والخبراء يقدمون حلولاً برمجية عالية الجودة
                  مع ضمان الأداء والأمان.
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
                  <h3 className="font-bold text-blue-700">خبرة سريعة النمو</h3>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  شركة ناشئة تطمح للتميز في عالم البرمجة والتحول الرقمي
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
                  <h3 className="font-bold text-green-700">مشاريع ناجحة</h3>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  ننفذ مشاريع برمجية تلبي تطلعات عملائنا وتتجاوز توقعاتهم
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
