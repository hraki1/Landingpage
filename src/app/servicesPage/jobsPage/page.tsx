"use client";

import { useState, useRef } from "react";

const jobs = [
    {
        title: "مهندس برمجيات",
        location: "عن بُعد",
        description:
            "العمل على تطوير وتحسين تطبيقاتنا باستخدام أحدث التقنيات. خبرة في React وNode.js ميزة.",
    },
    {
        title: "مصمم تجربة المستخدم (UX/UI)",
        location: "مكتبنا في عمان",
        description:
            "تصميم واجهات مستخدم مبتكرة وسهلة الاستخدام، والعمل مع فرق التطوير لضمان تجربة متكاملة.",
    },
    {
        title: "مدير مشاريع تقنية",
        location: "عن بُعد / عمان",
        description:
            "تنسيق وإدارة المشاريع التقنية وضمان تسليمها في الوقت المحدد وبالمواصفات المطلوبة.",
    },
];

// const HR_EMAIL = "hr@yourcompany.com"; // عدل هنا إلى بريد الـ HR الحقيقي

export default function CareersPage() {
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
        // For this example, we'll simulate a submission process
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
        <main className="min-h-screen px-6 py-20 max-w-7xl mx-auto text-right" dir="rtl">
            {/* Hero Section */}
            <section className="relative mb-16 rounded-lg overflow-hidden shadow-lg">
                <div className="mt-6 p-6 text-center">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">انضم إلى فريق صرح النمو</h1>
                    <p className="max-w-xl text-lg sm:text-xl">
                        نحن نبحث عن أفضل المواهب لتشكيل مستقبل التقنية معًا.
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">لماذا العمل معنا؟</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700">
                    <li className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2 text-blue-700">بيئة عمل ملهمة</h3>
                        <p>نوفر بيئة محفزة تسمح لك بالابتكار والتطور المهني.</p>
                    </li>
                    <li className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2 text-green-700">فرص النمو</h3>
                        <p>نؤمن بتطوير مهارات فريقنا عبر التدريب والدعم المستمر.</p>
                    </li>
                    <li className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2 text-purple-700">مشاريع متقدمة</h3>
                        <p>العمل على مشاريع تقنية حديثة تترك أثرًا حقيقيًا في السوق.</p>
                    </li>
                </ul>
            </section>

            {/* Open Positions */}
            <section>
                <h2 className="text-3xl font-bold mb-8">الوظائف الشاغرة</h2>
                <div className="grid gap-10 max-w-4xl mx-auto">
                    {jobs.map(({ title, location, description }) => (
                        <article
                            key={title}
                            className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-semibold mb-1">{title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{location}</p>
                            <p className="mb-4">{description}</p>

                            {/* زر إظهار نموذج التقديم */}
                            <button
                                className="mb-4 px-6 py-2 bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] text-white rounded-md hover:shadow-lg transition-all duration-300"
                                onClick={() => openForm(title)}
                            >
                                قدم لوظيفة {title}
                            </button>

                            {/* نموذج التقديم */}
                            {formVisibleFor === title && (
                                <form
                                    className="space-y-4 text-right"
                                    onSubmit={handleSubmit}
                                >
                                    {submitSuccess ? (
                                        <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-4">
                                            تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <label htmlFor="name" className="block font-medium mb-1">
                                                    الاسم الكامل
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
                                                    البريد الإلكتروني
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
                                                    رقم الهاتف
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
                                                    رسالة التقديم
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
                                                    السيرة الذاتية (PDF أو DOC)
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => fileInputRef.current?.click()}
                                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-300"
                                                    >
                                                        اختر ملف
                                                    </button>
                                                    <span className="text-sm text-gray-500">
                                                        {cvFile ? cvFile.name : "لم يتم اختيار ملف"}
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
                                                    يرجى تحميل ملف بصيغة PDF أو DOC (حجم أقصى 5MB)
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
                                                    {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                                                </button>
                                                <button
                                                    type="button"
                                                    className="px-4 py-2 text-gray-500 hover:text-gray-700"
                                                    onClick={() => setFormVisibleFor(null)}
                                                    disabled={isSubmitting}
                                                >
                                                    إلغاء
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