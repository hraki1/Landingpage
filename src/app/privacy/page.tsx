"use client";
import { motion } from "framer-motion";

export default function PrivacyPage() {
    return (
        <section className="py-16 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16"
            >
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent">
                    سياسة الخصوصية
                </h1>

                <p className="mb-6 text-lg leading-relaxed text-right" dir="rtl">
                    في صرح النمو، نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. تهدف هذه السياسة إلى توضيح كيفية جمعنا واستخدامنا وحمايتنا للبيانات الخاصة بك عند استخدامك لموقعنا أو خدماتنا.
                </p>

                <div className="space-y-6 text-right" dir="rtl">
                    <div>
                        <h2 className="font-semibold text-xl mb-2">1. المعلومات التي نقوم بجمعها</h2>
                        <p>
                            قد نقوم بجمع معلومات شخصية مثل الاسم، البريد الإلكتروني، رقم الهاتف، وغيرها من البيانات التي تقدمها طوعاً عند التسجيل أو التواصل معنا.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">2. استخدام المعلومات</h2>
                        <p>
                            نستخدم المعلومات لتحسين خدماتنا، التواصل معك، إرسال تحديثات أو عروض، وتحليل استخدام الموقع من أجل تحسين الأداء وتجربة المستخدم.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">3. حماية البيانات</h2>
                        <p>
                            نحن نستخدم إجراءات أمان قوية لحماية بياناتك من الوصول غير المصرح به أو التعديل أو الكشف أو الإتلاف.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">4. ملفات تعريف الارتباط (Cookies)</h2>
                        <p>
                            قد نستخدم ملفات الكوكيز لتحسين تجربة المستخدم وتحليل سلوك التصفح. يمكنك تعطيل الكوكيز من إعدادات المتصفح الخاص بك.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">5. مشاركة المعلومات</h2>
                        <p>
                            لا نقوم ببيع أو تأجير معلوماتك الشخصية لأي طرف ثالث. قد نشارك البيانات مع مزودي الخدمات الذين يساعدوننا في تقديم خدماتنا، ولكن فقط وفق سياسات حماية البيانات.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">6. حقوقك</h2>
                        <p>
                            لك الحق في الوصول إلى بياناتك الشخصية، تحديثها، أو طلب حذفها. يمكنك التواصل معنا لممارسة هذه الحقوق.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">7. التعديلات على سياسة الخصوصية</h2>
                        <p>
                            نحتفظ بالحق في تعديل هذه السياسة في أي وقت. سيتم نشر التعديلات على هذه الصفحة مع تاريخ آخر تحديث.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">8. التواصل معنا</h2>
                        <p>
                            لأي استفسارات تتعلق بسياسة الخصوصية، يرجى التواصل معنا عبر البريد الإلكتروني:{" "}
                            <a
                                href="mailto:support@sarh.tech"
                                className="text-blue-600 underline"
                            >
                                support@sarh.tech
                            </a>
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
