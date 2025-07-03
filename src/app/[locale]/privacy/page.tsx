"use client";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
    const t = useTranslations('PrivacyPage');

    return (
        <section className="py-16 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16"
            >
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent">
                    {t('title')}
                </h1>

                <p className="mb-6 text-lg leading-relaxed text-right" dir="rtl">
                    {t('intro')}
                </p>

                <div className="space-y-6 text-right" dir="rtl">
                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.collection.title')}</h2>
                        <p>{t('sections.collection.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.usage.title')}</h2>
                        <p>{t('sections.usage.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.protection.title')}</h2>
                        <p>{t('sections.protection.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.cookies.title')}</h2>
                        <p>{t('sections.cookies.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.sharing.title')}</h2>
                        <p>{t('sections.sharing.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.rights.title')}</h2>
                        <p>{t('sections.rights.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.changes.title')}</h2>
                        <p>{t('sections.changes.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.contact.title')}</h2>
                        <p>
                            {t('sections.contact.content')}{" "}
                            <a
                                href={`mailto:${t('sections.contact.email')}`}
                                className="text-blue-600 underline"
                            >
                                {t('sections.contact.email')}
                            </a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}