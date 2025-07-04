"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMobileAlt, FaServer, FaReact, FaApple, FaAndroid } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiSwift } from "react-icons/si";
import { useLocale, useTranslations } from 'next-intl';

export default function MobileDevelopmentServicePage() {
    const t = useTranslations('MobileDevelopment');
    const locale = useLocale();

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    // Reusable highlight component
    const Highlight = ({ children }: { children: React.ReactNode }) => (
        <span className="text-[#FFD700]">{children}</span>
    );

    const BlueHighlight = ({ children }: { children: React.ReactNode }) => (
        <span className="text-[#2EB6EE]">{children}</span>
    );

    const GreenHighlight = ({ children }: { children: React.ReactNode }) => (
        <span className="text-[#8FBE53]">{children}</span>
    );

    const technologies = [
        { name: t('technologies.reactNative'), icon: <FaReact /> },
        { name: t('technologies.flutter'), icon: <SiFlutter /> },
        { name: t('technologies.swift'), icon: <SiSwift /> },
        { name: t('technologies.kotlin'), icon: <SiKotlin /> },
        { name: t('technologies.firebase'), icon: <FaServer /> },
        { name: t('technologies.appStore'), icon: <FaApple /> },
        { name: t('technologies.playStore'), icon: <FaAndroid /> }
    ];

    const platforms = [
        {
            name: t('platforms.ios.title'),
            icon: <FaApple className="text-4xl" />,
            description: t('platforms.ios.description')
        },
        {
            name: t('platforms.android.title'),
            icon: <FaAndroid className="text-4xl" />,
            description: t('platforms.android.description')
        },
        {
            name: t('platforms.hybrid.title'),
            icon: <FaMobileAlt className="text-4xl" />,
            description: t('platforms.hybrid.description')
        }
    ];

    const processSteps = [
        { title: t('process.analysis.title'), description: t('process.analysis.description') },
        { title: t('process.design.title'), description: t('process.design.description') },
        { title: t('process.development.title'), description: t('process.development.description') },
        { title: t('process.testing.title'), description: t('process.testing.description') },
        { title: t('process.deployment.title'), description: t('process.deployment.description') }
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
                            {t.rich('hero.title', {
                                highlight: (chunks) => <Highlight>{chunks}</Highlight>
                            })}
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href={`/${locale}/contact`}
                                className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {t('hero.ctaPrimary')}
                            </Link>
                            <Link
                                href="#platforms"
                                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                            >
                                {t('hero.ctaSecondary')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <Image
                    src="/servicesImages/mobile-hero.jpg"
                    alt={'mobile'}
                    fill
                    className="absolute inset-0 object-cover opacity-15"
                    priority
                />
            </section>

            {/* Platforms Section */}
            <section id="platforms" className="py-20 px-6 bg-gray-50">
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
                            {t.rich('platformsSection.title', {
                                highlight: (chunks) => <BlueHighlight>{chunks}</BlueHighlight>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('platformsSection.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {platforms.map((platform, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#8FBE53] text-center"
                            >
                                <div className="text-[#2EB6EE] mb-4 flex justify-center">{platform.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{platform.name}</h3>
                                <p className="text-gray-600">{platform.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technology Stack */}
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
                            {t.rich('technologiesSection.title', {
                                highlight: (chunks) => <BlueHighlight>{chunks}</BlueHighlight>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('technologiesSection.subtitle')}
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
                                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 min-w-[180px]"
                            >
                                <span className="text-[#2EB6EE] text-xl">{tech.icon}</span>
                                <span className="font-medium">{tech.name}</span>
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t.rich('processSection.title', {
                                highlight: (chunks) => <GreenHighlight>{chunks}</GreenHighlight>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('processSection.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeIn}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gray-50 p-6 rounded-xl text-center border-b-4 border-[#2EB6EE]"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white flex items-center justify-center text-xl font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-[#2EB6EE]">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                            </motion.div>
                        ))}
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
                            href={`/${locale}/contact`}
                            className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {t('cta.primary')}
                        </Link>
                        {/* <Link
                            href="/portfolio"
                            className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                        >
                            {t('cta.secondary')}
                        </Link> */}
                    </div>
                </motion.div>
            </section>
        </main>
    );
}