import { motion } from "framer-motion";

export default function FAQ() {
  // FAQ items
  const faqs = [
    {
      question: "ما مدى أمان بياناتي؟",
      answer:
        "نستخدم تقنيات أمان على مستوى المؤسسات، بما في ذلك التشفير من الطرف إلى الطرف، والمراجعات الأمنية الدورية، والامتثال لمعايير عالمية مثل SOC 2 وGDPR. بياناتك في أمان دائم.",
    },
    {
      question: "هل يمكنني الإلغاء في أي وقت؟",
      answer:
        "نعم، يمكنك إلغاء اشتراكك في أي وقت دون أي رسوم خفية أو عقوبات. وسنساعدك أيضًا على تصدير بياناتك إذا لزم الأمر.",
    },
    {
      question: "كيف تعمل الفترة التجريبية المجانية؟",
      answer:
        "تمنحك الفترة التجريبية المجانية لمدة 14 يومًا وصولًا كاملًا إلى ميزات خطة المحترفين. لا حاجة لبطاقة ائتمان، ويمكنك الترقية في أي وقت أثناء الفترة.",
    },
    {
      question: "ما هي التكاملات المتوفرة؟",
      answer:
        "ندعم أكثر من 500 تكامل مع أدوات شهيرة مثل Salesforce وSlack وZoom وغيرها. كما يتيح لك API الخاص بنا تنفيذ تكاملات مخصصة مع أي نظام.",
    },
    {
      question: "هل تتوفر نسخة داخلية (On-premise)؟",
      answer:
        "نعم، نقدم حلولًا داخلية مخصصة للمؤسسات التي لديها متطلبات خاصة بالامتثال أو استضافة البيانات محليًا. تواصل مع فريق المبيعات لدينا لمعرفة المزيد.",
    },
  ];
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
            لديك استفسار؟
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-black">
            الأسئلة الشائعة عن{" "}
            <span className="bg-gradient-to-r from-[#2EB6EE] to-[#2EB6EE] bg-clip-text text-transparent">
              صرح النمو
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            كل ما تحتاج معرفته عن خدماتنا في تطوير البرمجيات.
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
          <p className="text-gray-600 mb-4">هل لديك المزيد من الأسئلة</p>
          <motion.a
            href="#"
            className="inline-flex gap-3 items-center text-[#2EB6EE] font-medium"
            whileHover={{ x: 5 }}
          >
            تواصل معنا
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
          </motion.a>
        </div>
      </div>
    </section>
  );
}
