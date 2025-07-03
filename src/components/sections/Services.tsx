"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaServer, FaChartLine, FaShieldAlt, FaMobileAlt, FaCloud, } from "react-icons/fa";

export default function Services() {

    const services = [
        {
            title: "تطوير المواقع",
            description: "تصميم وتطوير مواقع ويب متكاملة بتقنيات حديثة تلبي احتياجات عملك",
            icon: <FaCode className="h-8 w-8" />,
            color: "from-[#8FBE53] to-[#2EB6EE]",
            features: [
                "تصميم متجاوب لجميع الأجهزة",
                "تحسين محركات البحث (SEO)",
                "لوحة تحكم مخصصة",
                "أمان عالي وحماية من الاختراق",
                "تكامل مع أنظمة الدفع الإلكتروني"
            ],
            link: "/servicesPage/webDevelopment"
        },
        {
            title: "تطبيقات الجوال",
            description: "بناء تطبيقات جوال عالية الجودة لنظامي iOS و Android",
            icon: <FaMobileAlt className="h-8 w-8" />,
            color: "from-purple-500 to-indigo-600",
            features: [
                "تطبيقات أصلية وهجينة",
                "واجهة مستخدم مميزة",
                "تكامل مع الأنظمة الأخرى",
                "اختبارات ضمان الجودة",
                "نشر التطبيق في المتاجر"
            ],
            link: "/servicesPage/mobileDevelopment"
        },
        {
            title: "حلول الأعمال",
            description: "أنظمة إدارية متكاملة لتحسين عملياتك وزيادة إنتاجيتك",
            icon: <FaChartLine className="h-8 w-8" />,
            color: "from-amber-500 to-orange-600",
            features: [
                "أنظمة ERP مخصصة",
                "حلول إدارة الموارد البشرية",
                "أنظمة المحاسبة والمالية",
                "إدارة علاقات العملاء (CRM)",
                "تقارير وتحليلات الأعمال"
            ],
            link: "/servicesPage/systemsDevelopment"
        },
        {
            title: "الاستضافة والسحابة",
            description: "حلول استضافة آمنة وسحابية لضمان استمرارية عملك",
            icon: <FaCloud className="h-8 w-8" />,
            color: "from-blue-500 to-cyan-600",
            features: [
                "استضافة مشتركة وسحابية",
                "نسخ احتياطي تلقائي",
                "حماية من الهجمات",
                "حلول استضافة عالية الأداء",
                "دعم فني على مدار الساعة"
            ],
            link: "/servicesPage/hostingCloud"
        },
        {
            title: "الأمن السيبراني",
            description: "حماية بياناتك وأنظمتك من التهديدات الإلكترونية",
            icon: <FaShieldAlt className="h-8 w-8" />,
            color: "from-red-500 to-pink-600",
            features: [
                "فحص الثغرات الأمنية",
                "حماية من الفيروسات والاختراق",
                "تدريب موظفين على الأمن",
                "مراقبة مستمرة للشبكات",
                "حلول التشفير المتقدمة"
            ],
            link: "/servicesPage/cyberDevelopment"
        },
        {
            title: "إدارة البنية التحتية",
            description: "إدارة كاملة لبنيتك التحتية لتكنولوجيا المعلومات",
            icon: <FaServer className="h-8 w-8" />,
            color: "from-green-500 to-teal-600",
            features: [
                "مراقبة وصيانة الشبكات",
                "إدارة الخوادم والسيرفرات",
                "دعم فني متكامل",
                "حلول التخزين والنسخ الاحتياطي",
                "إدارة أنظمة التشغيل"
            ],
            link: "/servicesPage/infrastructureManagement"
        }
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
                    <div className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#2EB6EE]/10 text-[#2EB6EE] font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                        خدماتنا المتكاملة
                    </div>
                    <h2 className="text-3xl text-black sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        حلول تقنية <span className="text-[#2EB6EE]">شاملة</span> لجميع احتياجاتك
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        نقدم مجموعة واسعة من الخدمات التقنية المصممة خصيصاً لتحقيق أهداف عملك
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}

                            className={`bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-gray-200 relative overflow-hidden transition-all duration-300`}
                        >

                            <>
                                <motion.div

                                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} text-white`}
                                >
                                    {service.icon}
                                </motion.div>

                                <h3 className="text-xl text-black sm:text-2xl font-bold mb-2 sm:mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                                    {service.description}
                                </p>

                                <div className="border-t border-gray-100 pt-4 mb-4">
                                    <h4 className="font-medium text-sm text-gray-500 mb-3">
                                        أبرز المميزات:
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature, j) => (
                                            <li key={j} className="flex items-start">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color} mt-2 mr-2`}></div>
                                                <span className="text-sm sm:text-base text-gray-700">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link href={service.link}>
                                    <motion.button
                                        className={`w-full py-2 px-4 rounded-lg text-sm font-medium bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        عرض التفاصيل
                                    </motion.button>

                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${service.color} transition-all duration-300`}

                                        initial={{ width: '0%' }}
                                    />
                                </Link>

                            </>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}