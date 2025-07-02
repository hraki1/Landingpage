import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    {
      title: "الشركات الناشئة",
      description:
        "نساعد الشركات الناشئة على تحويل أفكارهم إلى منتجات رقمية متكاملة بسرعة وكفاءة.",
      icon: "🚀",
      features: [
        "تطوير MVP",
        "تصميم واجهات المستخدم",
        "تكامل مع الخدمات السحابية",
        "نشر سريع للمنتج",
      ],
    },
    {
      title: "الشركات الكبيرة والمؤسسات",
      description:
        "نقدّم حلول برمجية مخصصة لرقمنة العمليات وتحسين الكفاءة التشغيلية.",
      icon: "🏢",
      features: [
        "أنظمة ERP وCRM",
        "التكامل مع الأنظمة الحالية",
        "أتمتة العمليات",
        "تحليل البيانات",
      ],
    },
    {
      title: "القطاع التعليمي",
      description:
        "منصات تعليمية متكاملة لإدارة المحتوى والتفاعل مع الطلاب بسهولة.",
      icon: "🎓",
      features: [
        "أنظمة إدارة تعلم (LMS)",
        "بوابات تعليم إلكتروني",
        "تقييمات واختبارات ذكية",
        "تحليلات أداء الطلاب",
      ],
    },
    {
      title: "المتاجر الإلكترونية",
      description:
        "نطوّر متاجر إلكترونية احترافية لعرض وبيع المنتجات بأفضل تجربة مستخدم.",
      icon: "🛒",
      features: [
        "تصميم وتطوير متجر إلكتروني",
        "ربط بوابات الدفع",
        "إدارة المنتجات والمخزون",
        "تحسين تجربة الشراء",
      ],
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
            مصممة خصيصًا{" "}
            <span className="bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] bg-clip-text text-transparent">
              لاحتياجات عملك
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            تخدم صرح النمو الكثير من القطاعات
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
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 ">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, j) => (
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
