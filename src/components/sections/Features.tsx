"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Features() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "حلول برمجية",
      description:
        "برامـــج وحلـــول جاهـــزة ومصممـــة خصيصـــاً لتلبية احتياجات العملاءs",
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
      extendedDesc:
        "Our AI analyzes your data in real-time, providing actionable insights and predictive analytics to help you stay ahead of the competition. Machine learning models adapt to your specific business needs.",
      stats: [
        { value: "95%", label: "Accuracy" },
        { value: "24/7", label: "Monitoring" },
        { value: "10x", label: "Faster insights" },
      ],
    },
    {
      title: "حلول تكنولوجيا المعلومات",
      description:
        "مصـمـــــمــــة لـــمــسـاعــــدة الشركات على إدارة البنية الـــتــحــتـيــــــــــة التكنولوجيـــة والــعــمــلـيـــــات والأنظمـــة بشكل فعال",
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
      extendedDesc:
        "End-to-end encryption with zero-knowledge architecture. SOC 2 Type II, ISO 27001, and GDPR compliant. Regular security audits and penetration testing ensure your data is always protected.",
      stats: [
        { value: "256-bit", label: "Encryption" },
        { value: "99.99%", label: "Uptime" },
        { value: "0", label: "Breaches" },
      ],
    },
    {
      title: "خدمات الأعمال",
      description:
        "مصـمـــــمــــة لـــمــسـاعــــدة الشركات على إدارة البنية الـــتــحــتـيــــــــــة التكنولوجيـــة والــعــمــلـيـــــات والأنظمـــة بشكل فعال",
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
      extendedDesc:
        "Native integrations with all major platforms plus a powerful API for custom connections. Pre-built connectors for Salesforce, Slack, Zoom, and hundreds more with no coding required.",
      stats: [
        { value: "500+", label: "Integrations" },
        { value: "5-min", label: "Setup" },
        { value: "24/7", label: "Support" },
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
            ميزات قوية{" "}
          </div>
          <h2 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            كل ما تحتاجه لتحقيق{" "}
            <span className="bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] bg-clip-text text-transparent">
              النجاح
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            منصتنا تزخر بأدوات مبتكرة تساعد عملك في التفوق على المنافسين.
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

              {/* <div className="mb-4 sm:mb-6">
                <h4 className="font-medium text-sm text-gray-500 mb-2">
                  Key benefits:
                </h4>
                <ul className="space-y-2">
                  {feature.stats.map((stat, j) => (
                    <li key={j} className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
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
                      <span className="text-sm sm:text-base">
                        <span className="font-bold">{stat.value}</span>{" "}
                        {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* <motion.a
                href="#"
                className="text-purple-600 font-medium flex items-center gap-1 sm:gap-2 text-sm sm:text-base group"
                whileHover={{ x: 5 }}
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.a> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
