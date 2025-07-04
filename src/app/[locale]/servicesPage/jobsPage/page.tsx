"use client";

import { useState, useRef } from "react";
import { useTranslations } from 'next-intl';

export default function CareersPage() {
    const t = useTranslations('CareersPage');

    const [formVisibleFor, setFormVisibleFor] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const jobs = [
        {
            title: t('jobs.softwareEngineer.title'),
            location: t('jobs.softwareEngineer.location'),
            description: t('jobs.softwareEngineer.description'),
        },
        {
            title: t('jobs.uxDesigner.title'),
            location: t('jobs.uxDesigner.location'),
            description: t('jobs.uxDesigner.description'),
        },
        {
            title: t('jobs.projectManager.title'),
            location: t('jobs.projectManager.location'),
            description: t('jobs.projectManager.description'),
        },
    ];

    const openForm = (jobTitle: string) => {
        setFormVisibleFor(jobTitle);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCvFile(null);
        setSubmitSuccess(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // In a real implementation, you would upload the file to your server here
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Reset form after 5 seconds
            setTimeout(() => {
                setFormVisibleFor(null);
                setFormData({ name: "", email: "", phone: "", message: "" });
                setCvFile(null);
                setSubmitSuccess(false);
            }, 5000);
        }, 2000);
    };

    return (
        <main className="min-h-screen px-6 py-20 max-w-7xl mx-auto" dir={t('dir')}>
            {/* Hero Section */}
            <section className="relative mb-16 rounded-lg overflow-hidden shadow-lg">
                <div className="mt-6 p-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{t('hero.title')}</h1>
                    <p className="max-w-xl text-lg sm:text-xl mx-auto">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">{t('whyWorkWithUs.title')}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
                    <li className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2 text-blue-700">{t('whyWorkWithUs.reasons.0.title')}</h3>
                        <p>{t('whyWorkWithUs.reasons.0.description')}</p>
                    </li>
                    <li className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2 text-green-700">{t('whyWorkWithUs.reasons.1.title')}</h3>
                        <p>{t('whyWorkWithUs.reasons.1.description')}</p>
                    </li>
                    <li className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2 text-purple-700">{t('whyWorkWithUs.reasons.2.title')}</h3>
                        <p>{t('whyWorkWithUs.reasons.2.description')}</p>
                    </li>
                </ul>
            </section>

            {/* Open Positions */}
            <section>
                <h2 className="text-3xl font-bold mb-8">{t('openPositions.title')}</h2>
                <div className="grid gap-10 max-w-4xl mx-auto">
                    {jobs.map(({ title, location, description }) => (
                        <article
                            key={title}
                            className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-1">{title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{location}</p>
                            <p className="mb-4">{description}</p>

                            {/* Application button */}
                            <button
                                className="mb-4 px-6 py-2 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white rounded-md hover:shadow-lg transition-all duration-300"
                                onClick={() => openForm(title)}
                            >
                                {t('applyButton', { jobTitle: title })}
                            </button>

                            {/* Application form */}
                            {formVisibleFor === title && (
                                <form
                                    className="space-y-4"
                                    onSubmit={handleSubmit}
                                    dir={t('dir')}
                                >
                                    {submitSuccess ? (
                                        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                                            {t('form.successMessage')}
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <label htmlFor="name" className="block font-medium mb-1">
                                                    {t('form.fullName')}
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE]"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block font-medium mb-1">
                                                    {t('form.email')}
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE]"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block font-medium mb-1">
                                                    {t('form.phone')}
                                                </label>
                                                <input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE]"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block font-medium mb-1">
                                                    {t('form.coverLetter')}
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={4}
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE]"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="cv" className="block font-medium mb-1">
                                                    {t('form.resume')}
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-300"
                                                    >
                                                        {t('form.chooseFile')}
                                                    </button>
                                                    <span className="text-sm text-gray-500">
                                                        {cvFile ? cvFile.name : t('form.noFileChosen')}
                                                    </span>
                                                    <input
                                                        id="cv"
                                                        name="cv"
                                                        type="file"
                                                        ref={fileInputRef}
                                                        onChange={handleFileChange}
                                                        accept=".pdf,.doc,.docx"
                                                        required
                                                        className="hidden"
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {t('form.fileRequirements')}
                                                </p>
                                            </div>

                                            <div className="flex justify-between items-center pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="px-6 py-2 bg-[#2EB6EE] text-white rounded-md hover:bg-[#27a5d8] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                                                >
                                                    {isSubmitting && (
                                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    )}
                                                    {isSubmitting ? t('form.submitting') : t('form.submit')}
                                                </button>
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 text-gray-500 hover:text-gray-700"
                                                    onClick={() => setFormVisibleFor(null)}
                                                    disabled={isSubmitting}
                                                >
                                                    {t('form.cancel')}
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </form>
                            )}
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}