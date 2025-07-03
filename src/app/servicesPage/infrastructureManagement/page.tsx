"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaServer, FaNetworkWired, FaShieldAlt, FaCogs, FaSyncAlt, FaCloud, FaDesktop } from "react-icons/fa";
import {  SiGooglecloud, SiKubernetes, SiDocker, SiTerraform, SiAnsible, SiPrometheus, SiGrafana, SiLinux, SiCisco } from "react-icons/si";
import { DiAws } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { WiDaySnow } from "react-icons/wi";

export default function InfrastructureManagementPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        { icon: <FaNetworkWired className="text-3xl" />, title: "إدارة الشبكات", description: "تصميم وتنفيذ وإدارة البنية التحتية للشبكات باحترافية" },
        { icon: <FaServer className="text-3xl" />, title: "إدارة الخوادم", description: "تركيب وصيانة ومراقبة خوادمك المحلية أو السحابية" },
        { icon: <FaCloud className="text-3xl" />, title: "إدارة السحابة", description: "حلول متكاملة لإدارة البنية التحتية السحابية الهجينة" },
        { icon: <FaShieldAlt className="text-3xl" />, title: "أمان البنية التحتية", description: "حماية شاملة لبنيتك التحتية من التهديدات الأمنية" },
        { icon: <FaSyncAlt className="text-3xl" />, title: "المراقبة والتحليل", description: "أنظمة مراقبة مستمرة لأداء البنية التحتية" },
        { icon: <FaCogs className="text-3xl" />, title: "الأتمتة والتكامل", description: "أتمتة عمليات التشغيل والصيانة للبنية التحتية" }
    ];

    const technologies = [
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Terraform", icon: <SiTerraform /> },
        { name: "Ansible", icon: <SiAnsible /> },
        { name: "Prometheus", icon: <SiPrometheus /> },
        { name: "Grafana", icon: <SiGrafana /> },
        { name: "AWS", icon: <DiAws /> },
        { name: "Azure", icon: <VscAzure /> },
        { name: "Google Cloud", icon: <SiGooglecloud /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Windows Server", icon: <WiDaySnow /> },
        { name: "Cisco", icon: <SiCisco /> },
        { name: "Virtualization", icon: <FaDesktop /> }
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
                            حلول <span className="text-[#FFD700]">إدارة البنية التحتية</span> المتكاملة
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            إدارة احترافية لبنيتك التحتية التقنية لضمان أقصى أداء واستقرار وأمان
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
                    src="/services/infrastructure-hero.jpg"
                    alt="إدارة البنية التحتية"
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">حلول <span className="text-[#2EB6EE]">إدارية</span> شاملة <span className="text-[#8FBE53]">للبنية</span> التحتية</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نقدم مجموعة متكاملة من الخدمات لإدارة وتشغيل بنيتك التحتية التقنية بكفاءة عالية
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

            {/* Technologies Section */}
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
                            تقنيات <span className="text-[#2EB6EE]">وأدوات</span> نستخدمها
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            نعتمد على أحدث التقنيات والأدوات لإدارة البنية التحتية باحترافية
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

                    {/* Tech Categories */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeIn}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
                        >
                            <h3 className="text-xl font-bold mb-4 text-[#2EB6EE]">أدوات الأتمتة</h3>
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
                            <h3 className="text-xl font-bold mb-4 text-[#8FBE53]">المراقبة والتحليل</h3>
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
                            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">البنية التحتية</h3>
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">عملية <span className="text-[#2EB6EE]">الإدارة</span> لدينا</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            منهجية واضحة لإدارة بنيتك التحتية بكفاءة وأمان
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8FBE53] to-[#2EB6EE]"></div>

                        <div className="space-y-12">
                            {[
                                { title: "التقييم والتحليل", description: "دراسة البنية التحتية الحالية وتحديد الاحتياجات" },
                                { title: "التصميم والتخطيط", description: "وضع خطة إدارية متكاملة للبنية التحتية" },
                                { title: "التنفيذ والتكامل", description: "تنفيذ الحلول وتكاملها مع الأنظمة الحالية" },
                                { title: "المراقبة والصيانة", description: "مراقبة مستمرة وأداء الصيانة الدورية" },
                                { title: "التطوير المستمر", description: "تحسين وتطوير البنية التحتية باستمرار" }
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

            {/* Call To Action */}
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
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">هل تحتاج إلى إدارة احترافية لبنيتك التحتية؟</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        تواصل مع خبرائنا اليوم لتحصل على حلول إدارة بنية تحتية موثوقة وفعالة.
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