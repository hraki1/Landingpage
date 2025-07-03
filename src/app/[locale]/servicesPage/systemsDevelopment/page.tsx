"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaServer, FaCloud, FaShieldAlt, FaCogs, FaChartLine, FaNetworkWired, FaSync, FaUsersCog, FaRobot } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function SystemsDevelopmentPage() {
    const t = useTranslations('SystemsDevelopment');
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const solutions = [
        {
            title: t('solutions.enterprise.title'),
            icon: <FaUsersCog className="text-4xl" />,
            items: [
                t('solutions.enterprise.items.0'),
                t('solutions.enterprise.items.1'),
                t('solutions.enterprise.items.2'),
                t('solutions.enterprise.items.3')
            ]
        },
        {
            title: t('solutions.ai.title'),
            icon: <FaRobot className="text-4xl" />,
            items: [
                t('solutions.ai.items.0'),
                t('solutions.ai.items.1'),
                t('solutions.ai.items.2'),
                t('solutions.ai.items.3')
            ]
        },
        {
            title: t('solutions.infrastructure.title'),
            icon: <FaNetworkWired className="text-4xl" />,
            items: [
                t('solutions.infrastructure.items.0'),
                t('solutions.infrastructure.items.1'),
                t('solutions.infrastructure.items.2'),
                t('solutions.infrastructure.items.3')
            ]
        }
    ];

    const features = [
        {
            icon: <FaServer className="text-3xl" />,
            title: t('features.0.title'),
            description: t('features.0.description')
        },
        {
            icon: <FaSync className="text-3xl" />,
            title: t('features.1.title'),
            description: t('features.1.description')
        },
        {
            icon: <FaShieldAlt className="text-3xl" />,
            title: t('features.2.title'),
            description: t('features.2.description')
        },
        {
            icon: <FaCloud className="text-3xl" />,
            title: t('features.3.title'),
            description: t('features.3.description')
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: t('features.4.title'),
            description: t('features.4.description')
        },
        {
            icon: <FaCogs className="text-3xl" />,
            title: t('features.5.title'),
            description: t('features.5.description')
        }
    ];

    const processSteps = [
        { title: t('process.0.title'), description: t('process.0.description') },
        { title: t('process.1.title'), description: t('process.1.description') },
        { title: t('process.2.title'), description: t('process.2.description') },
        { title: t('process.3.title'), description: t('process.3.description') },
        { title: t('process.4.title'), description: t('process.4.description') },
        { title: t('process.5.title'), description: t('process.5.description') }
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
                                highlight: (chunks) => <span className="text-[#FFD700]">{chunks}</span>
                            })}
                        </h1>
                        <p className="text-xl sm:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                            >
                                {t('hero.cta1')}
                            </Link>
                            <Link
                                href="#solutions"
                                className="inline-block border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-[#2EB6EE] transition duration-300 transform hover:scale-105"
                            >
                                {t('hero.cta2')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <Image
                    src="/services/systems-dev-hero.jpg"
                    alt={t('hero.imageAlt')}
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t.rich('solutionsSection.title', {
                                blue: (chunks) => <span className="text-[#2EB6EE]">{chunks}</span>,
                                green: (chunks) => <span className="text-[#8FBE53]">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('solutionsSection.subtitle')}
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t.rich('featuresSection.title', {
                                blue: (chunks) => <span className="text-[#2EB6EE]">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('featuresSection.subtitle')}
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            {t.rich('processSection.title', {
                                green: (chunks) => <span className="text-[#8FBE53]">{chunks}</span>
                            })}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('processSection.subtitle')}
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
                                    <div className={`hidden md:flex absolute ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} transform -translate-y-12 ${index % 2 === 0 ? '-translate-x-8' : 'translate-x-8'} w-16 h-16 rounded-full bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white items-center justify-center text-xl font-bold z-10 shadow-lg`}>
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
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">{t('cta.title')}</h3>
                    <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-block bg-white text-[#2EB6EE] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 shadow-lg"
                        >
                            {t('cta.button')}
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}