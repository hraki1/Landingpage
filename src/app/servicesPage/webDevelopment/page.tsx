"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMobileAlt, FaShieldAlt, FaTachometerAlt, FaCogs, FaChartLine, FaSearch } from "react-icons/fa";

export default function WebDevelopmentServicePage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        { icon: <FaMobileAlt className="text-3xl" />, title: "تصميم متجاوب", description: "مواقع تتكيف مع جميع أحجام الشاشات من الجوال إلى سطح المكتب" },
        { icon: <FaTachometerAlt className="text-3xl" />, title: "أداء عالي", description: "تحميل سريع باستخدام أحدث تقنيات تحسين الأداء" },
        { icon: <FaShieldAlt className="text-3xl" />, title: "حماية متقدمة", description: "حلول أمنية متكاملة لحماية بياناتك وموقعك" },
        { icon: <FaCogs className="text-3xl" />, title: "لوحة تحكم مخصصة", description: "إدارة محتوى سهلة ومصممة خصيصاً لاحتياجاتك" },
        { icon: <FaSearch className="text-3xl" />, title: "تحسين SEO", description: "تحسين كامل لمحركات البحث لزيادة الظهور والزيارات" },
        { icon: <FaChartLine className="text-3xl" />, title: "تحليلات متكاملة", description: "أنظمة تتبع وتحليل لقياس أداء موقعك" }
    ];



    return (
        <main className="bg-white text-gray-800 overflow-hidden">
            {/* Enhanced Hero Section */}
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
                            تطوير <span className="text-[#FFD700]">مواقع الويب</span> باحترافية
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            حلول رقمية مبتكرة مصممة خصيصاً لتحقيق أهداف عملك وتعزيز حضورك على الإنترنت
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                اطلب استشارة مجانية
                            </Link>
                            <Link
                                href="#features"
                                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                            >
                                اكتشف المزيد
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <Image
                    src="/services/web-dev-hero.jpg"
                    alt="تطوير المواقع"
                    fill
                    className="absolute inset-0 object-cover opacity-15"
                    priority
                />
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">حلول <span className="text-[#2EB6EE]">متكاملة</span> لنجاح <span className="text-[#8FBE53]">رقمي</span></h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نقدم مجموعة شاملة من الخدمات المصممة لتحويل رؤيتك إلى واقع رقمي متميز
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-[#2EB6EE]"
                            >
                                <div className="text-[#2EB6EE] mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Process Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={fadeIn}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">عملية <span className="text-[#2EB6EE]">التطوير</span> لدينا</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نتبع منهجية واضحة لضمان تحقيق أفضل النتائج لمشروعك
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8FBE53] to-[#2EB6EE]"></div>

                        <div className="space-y-12">
                            {[
                                { title: "التحليل والتخطيط", description: "فهم متطلباتك وأهدافك بدقة لوضع خطة عمل واضحة" },
                                { title: "التصميم UI/UX", description: "إنشاء واجهات مستخدم جذابة وسهلة الاستخدام" },
                                { title: "التطوير والبرمجة", description: "بناء الموقع باستخدام أكواد نظيفة وفعالة" },
                                { title: "الاختبار والتحسين", description: "فحص دقيق لضمان الجودة والأداء المثالي" },
                                { title: "الإطلاق والدعم", description: "نشر الموقع وتقديم الدعم الفني المستمر" }
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
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300`}>
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
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">جاهزون لبدء مشروعك الرقمي؟</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        تواصل معنا اليوم لتناقش متطلباتك وسنقدم لك الحل الأمثل لتحقيق أهدافك على الإنترنت.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            اطلب استشارة مجانية
                        </Link>
                        <Link
                            href="tel:+966123456789"
                            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                        >
                            اتصل بنا مباشرة
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}