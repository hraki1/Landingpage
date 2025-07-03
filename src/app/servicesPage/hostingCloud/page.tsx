"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaServer, FaDatabase, FaCloud, FaShieldAlt, FaTachometerAlt, FaSyncAlt, FaGlobe, FaHdd, } from "react-icons/fa";
import { SiGooglecloud, SiDigitalocean, SiCpanel, SiDocker, SiKubernetes, SiLinux, SiMongodb, SiMysql } from "react-icons/si";
import { DiAws } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { WiDaySnow } from "react-icons/wi";

export default function HostingCloudServicePage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        { icon: <FaServer className="text-3xl" />, title: "استضافة مشتركة", description: "حلول استضافة اقتصادية مع أداء موثوق لمواقع الويب الصغيرة والمتوسطة" },
        { icon: <FaCloud className="text-3xl" />, title: "استضافة سحابية", description: "بنية تحتية سحابية قابلة للتوسع حسب احتياجاتك" },
        { icon: <FaShieldAlt className="text-3xl" />, title: "استضافة آمنة", description: "حلول استضافة مع حماية متقدمة من الاختراقات والهجمات" },
        { icon: <FaDatabase className="text-3xl" />, title: "قواعد بيانات مخصصة", description: "خوادم قواعد بيانات عالية الأداء لإدارة بياناتك بكفاءة" },
        { icon: <FaSyncAlt className="text-3xl" />, title: "نسخ احتياطي تلقائي", description: "أنظمة نسخ احتياطي يومية لحماية بياناتك من الفقدان" },
        { icon: <FaTachometerAlt className="text-3xl" />, title: "أداء فائق", description: "خوادم عالية السرعة مع SSD وذاكرة عشوائية كبيرة" }
    ];

    const technologies = [
        { name: "AWS", icon: <DiAws /> },
        { name: "Azure", icon: <VscAzure /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "DigitalOcean", icon: <SiDigitalocean /> },
        { name: "cPanel", icon: <SiCpanel /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Windows Server", icon: <WiDaySnow /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "CDN", icon: <FaGlobe /> },
        { name: "VPS", icon: <FaHdd /> }
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
                            حلول <span className="text-[#FFD700]">الاستضافة والسحابة</span> المتكاملة
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            بنية تحتية قوية وموثوقة لضمان أقصى أداء وتوفر لمواقعك وتطبيقاتك
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
                    src="/services/hosting-hero.jpg"
                    alt="الاستضافة والسحابة"
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">حلول <span className="text-[#2EB6EE]">استضافة</span> متنوعة <span className="text-[#8FBE53]">لجميع</span> احتياجاتك</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نقدم مجموعة شاملة من خدمات الاستضافة والسحابة لتلبية متطلبات مشاريعك بكل أحجامها
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

            {/* tech  section*/}
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            منصات <span className="text-[#2EB6EE]">وتقنيات</span> الاستضافة
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نعمل مع أفضل منصات الاستضافة والتقنيات السحابية لتقديم حلول موثوقة
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 min-w-[180px] group"
                                whileHover={{ y: -5 }}
                            >
                                <span className="text-[#2EB6EE] text-2xl group-hover:scale-110 transition-transform">
                                    {tech.icon}
                                </span>
                                <span className="font-medium text-gray-800">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Tech Categories */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4 text-[#2EB6EE]">المنصات السحابية</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.slice(0, 4).map((tech, i) => (
                                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4 text-[#8FBE53]">أنظمة التشغيل</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.slice(4, 8).map((tech, i) => (
                                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">قواعد البيانات</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.slice(8).map((tech, i) => (
                                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">عملية <span className="text-[#2EB6EE]">النشر</span> لدينا</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نضمن لك عملية نشر سلسة وآمنة لمواقعك وتطبيقاتك على خوادمنا
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8FBE53] to-[#2EB6EE]"></div>

                        <div className="space-y-12">
                            {[
                                { title: "تحليل الاحتياجات", description: "تقييم متطلبات مشروعك لاختيار أفضل حل استضافة" },
                                { title: "تخصيص البيئة", description: "إعداد وتكوين خادم مخصص أو سحابة حسب احتياجاتك" },
                                { title: "نشر التطبيق", description: "رفع ملفات موقعك أو تطبيقك على الخادم" },
                                { title: "الاختبار والتحسين", description: "فحص الأداء وإجراء التحسينات اللازمة" },
                                { title: "التشغيل والمراقبة", description: "تشغيل الخدمة مع مراقبة مستمرة للأداء" }
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
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">هل تبحث عن حل استضافة موثوق؟</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        تواصل معنا اليوم لاختيار أفضل حل استضافة أو سحابة يناسب احتياجات مشروعك.
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