"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from 'next-intl';

export default function TermsPage() {
    const t = useTranslations('TermsPage');
    const locale = useLocale();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <section
            className="py-16 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-gray-800"
            dir={dir}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16"
            >
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent">
                    {t('title')}
                </h1>

                <p className="mb-6 text-lg leading-relaxed">
                    {t('intro')}
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.acceptance.title')}</h2>
                        <p>{t('sections.acceptance.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.intellectualProperty.title')}</h2>
                        <p>{t('sections.intellectualProperty.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.usage.title')}</h2>
                        <p>{t('sections.usage.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.liability.title')}</h2>
                        <p>{t('sections.liability.content')}</p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">{t('sections.modifications.title')}</h2>
                        <p>{t('sections.modifications.content')}</p>
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