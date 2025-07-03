"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaServer, FaCloud, FaShieldAlt, FaCogs, FaChartLine, FaNetworkWired, FaSync, FaUsersCog, FaRobot } from "react-icons/fa";

export default function SystemsDevelopmentPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const solutions = [
        {
            title: "أنظمة إدارة المؤسسات",
            icon: <FaUsersCog className="text-4xl" />,
            items: [
                "أنظمة ERP متكاملة",
                "أنظمة إدارة الموارد البشرية",
                "أنظمة المحاسبة والمالية",
                "أنظمة إدارة سلسلة التوريد"
            ]
        },
        {
            title: "أنظمة الذكاء الاصطناعي",
            icon: <FaRobot className="text-4xl" />,
            items: [
                "تحليل البيانات التنبؤية",
                "أنظمة التوصيل الذكية",
                "معالجة اللغة الطبيعية",
                "أنظمة الرؤية الحاسوبية"
            ]
        },
        {
            title: "أنظمة البنية التحتية",
            icon: <FaNetworkWired className="text-4xl" />,
            items: [
                "أنظمة إدارة الشبكات",
                "حلول الأتمتة والتحكم",
                "أنظمة إدارة قواعد البيانات",
                "حلول التخزين السحابي"
            ]
        }
    ];


    const features = [
        { icon: <FaServer className="text-3xl" />, title: "بنية تحتية قوية", description: "تصميم أنظمة قابلة للتطوير وفق أفضل الممارسات" },
        { icon: <FaSync className="text-3xl" />, title: "تكامل الأنظمة", description: "ربط أنظمتك الحالية مع الحلول الجديدة بسلاسة" },
        { icon: <FaShieldAlt className="text-3xl" />, title: "أمان متقدم", description: "طبقات حماية متعددة وفق معايير الأمان العالمية" },
        { icon: <FaCloud className="text-3xl" />, title: "حلول سحابية", description: "نظم سحابية هجينة أو كاملة حسب احتياجاتك" },
        { icon: <FaChartLine className="text-3xl" />, title: "تحليلات الأعمال", description: "لوحات تحكم وذكاء أعمال لاتخاذ القرارات" },
        { icon: <FaCogs className="text-3xl" />, title: "صيانة مستمرة", description: "دعم فني وتحديثات دورية لضمان الاستقرار" }
    ];

    return (
        <main className="bg-white text-gray-800 overflow-hidden">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white py-32 px-6 text-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="mt-24 max-w-5xl mx-auto z-10 relative">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
                            حلول <span className="text-[#FFD700]">أنظمة الشركات</span> المتكاملة
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            نطور أنظمة مخصصة لتحويل عملياتك التجارية وتعزيز كفاءة مؤسستك باستخدام أحدث التقنيات
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                اطلب استشارة متخصصة
                            </Link>
                            <Link
                                href="#solutions"
                                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                            >
                                اكتشف حلولنا
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <Image
                    src="/services/systems-dev-hero.jpg"
                    alt="أنظمة الشركات"
                    fill
                    className="absolute inset-0 object-cover opacity-15"
                    priority
                />
            </section>

            {/* Solutions Section */}
            <section id="solutions" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">حلول <span className="text-[#2EB6EE]">متكاملة</span> لجميع <span className="text-[#8FBE53]">احتياجاتك</span></h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نقدم مجموعة شاملة من حلول الأنظمة المصممة خصيصاً لمتطلبات عملك
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-[#8FBE53]"
                            >
                                <div className="text-[#2EB6EE] mb-4">{solution.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                                <ul className="space-y-2">
                                    {solution.items.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-[#8FBE53] mr-2">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">ميزات <span className="text-[#2EB6EE]">أنظمتنا</span> المطورة</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نضمن لك أنظمة عالية الجودة مصممة لتحقيق أقصى استفادة لمؤسستك
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition duration-300"
                            >
                                <div className="text-[#2EB6EE] mb-3">{feature.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
      
            {/* Process Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">منهجية <span className="text-[#8FBE53]">تطوير</span> الأنظمة</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نتبع عملية منهجية واضحة لضمان نجاح مشروع نظامك
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8FBE53] to-[#2EB6EE]"></div>

                        <div className="space-y-12">
                            {[
                                { title: "تحليل الاحتياجات", description: "فهم متطلبات العمل وتحليل العمليات الحالية" },
                                { title: "التصميم المعماري", description: "وضع الهيكل التقني وتصميم قواعد البيانات" },
                                { title: "التطوير والتكامل", description: "برمجة النظام وربطه مع الأنظمة الموجودة" },
                                { title: "اختبار الجودة", description: "فحص شامل لجميع الوظائف واختبارات الأداء" },
                                { title: "النشر والتدريب", description: "تنفيذ النظام وتدريب المستخدمين" },
                                { title: "الدعم والصيانة", description: "توفير الدعم الفني والتحديثات الدورية" }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeIn}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                                >
                                    <div className={`hidden md:flex absolute ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'} w-16 h-16 rounded-full bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white items-center justify-center text-xl font-bold z-10 shadow-lg`}>
                                        {index + 1}
                                    </div>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300`}>
                                        <h3 className="text-2xl font-bold mb-4 text-[#2EB6EE]">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Call To Action */}
            <section className="relative bg-gradient-to-r from-[#2EB6EE] to-[#8FBE53] text-white py-20 text-center overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">مستعدون لتحويل نظام عملك؟</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        تواصل مع خبرائنا اليوم لتحصل على الحل الأمثل الذي يلبي احتياجات مؤسستك ويدعم نموها.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            تواصل الأن
                        </Link>
                       
                    </div>
                </motion.div>
            </section>
        </main>
    );
}