"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMobileAlt, FaShieldAlt, FaTachometerAlt, FaCogs, FaChartLine, FaSearch, FaReact, FaAngular, FaVuejs, FaSass, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiGraphql, SiJest, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { useLocale, useTranslations } from 'next-intl';

export default function WebDevelopmentServicePage() {
    const t = useTranslations('WebDevelopment');
    const locale = useLocale();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        { icon: <FaMobileAlt className="text-3xl" />, title: t('features.responsive.title'), description: t('features.responsive.description') },
        { icon: <FaTachometerAlt className="text-3xl" />, title: t('features.performance.title'), description: t('features.performance.description') },
        { icon: <FaShieldAlt className="text-3xl" />, title: t('features.security.title'), description: t('features.security.description') },
        { icon: <FaCogs className="text-3xl" />, title: t('features.dashboard.title'), description: t('features.dashboard.description') },
        { icon: <FaSearch className="text-3xl" />, title: t('features.seo.title'), description: t('features.seo.description') },
        { icon: <FaChartLine className="text-3xl" />, title: t('features.analytics.title'), description: t('features.analytics.description') }
    ];

    const technologies = [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "Angular", icon: <FaAngular /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Sass/SCSS", icon: <FaSass /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Jest", icon: <SiJest /> },
        { name: "Git", icon: <FaGitAlt /> }
    ];

    const processSteps = [
        { title: t('process.planning.title'), description: t('process.planning.description') },
        { title: t('process.design.title'), description: t('process.design.description') },
        { title: t('process.development.title'), description: t('process.development.description') },
        { title: t('process.testing.title'), description: t('process.testing.description') },
        { title: t('process.launch.title'), description: t('process.launch.description') }
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
                            {t.rich('hero.title', {
                                highlight: (chunks) => <span className="text-[#FFD700]">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href={`${locale}/contact`}
                                className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {t('hero.ctaPrimary')}
                            </Link>
                            <Link
                                href="#features"
                                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                            >
                                {t('hero.ctaSecondary')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <Image
                    src="/servicesImages/web-hero.jpg"
                    alt={'web'}
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t.rich('features.title', {
                                blue: (chunks) => <span className="text-[#2EB6EE]">{chunks}</span>,
                                green: (chunks) => <span className="text-[#8FBE53]">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('features.subtitle')}
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

            {/* tech section*/}
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
                            {t.rich('technologies.title', {
                                highlight: (chunks) => <span className="text-[#2EB6EE]">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('technologies.subtitle')}
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
                            <h3 className="text-xl font-bold mb-4 text-[#2EB6EE]">{t('technologies.frontend')}</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.slice(0, 6).map((tech, i) => (
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
                            <h3 className="text-xl font-bold mb-4 text-[#8FBE53]">{t('technologies.backend')}</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.slice(6, 10).map((tech, i) => (
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
                            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">{t('technologies.other')}</h3>
                            <div className="flex flex-wrap gap-3">
                                {technologies.slice(10).map((tech, i) => (
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t.rich('process.title', {
                                highlight: (chunks) => <span className="text-[#2EB6EE]">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('process.subtitle')}
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#8FBE53] to-[#2EB6EE]"></div>

                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    variants={fadeIn}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                                >
                                    <div className={`hidden md:flex absolute ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} -translate-y-16 transform ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'} w-16 h-16 rounded-full bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white items-center justify-center text-xl font-bold z-10 shadow-lg`}>
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
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">{t('cta.title')}</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href={`${locale}/contact`}
                            className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {t('cta.primary')}
                        </Link>
                        <Link
                            href="tel:+966123456789"
                            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                        >
                            {t('cta.secondary')}
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}