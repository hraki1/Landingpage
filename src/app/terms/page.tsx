"use client";
import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <section className="py-16 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto text-gray-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mt-16"
            >
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent">
                    الشروط والأحكام
                </h1>

                <p className="mb-6 text-lg leading-relaxed">
                    يرجى قراءة الشروط والأحكام التالية بعناية قبل استخدام موقع صرح النمو. من خلال الوصول إلى هذا الموقع أو استخدامه، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                </p>

                <div className="space-y-6 text-right" dir="rtl">
                    <div>
                        <h2 className="font-semibold text-xl mb-2">1. قبول الشروط</h2>
                        <p>
                            باستخدامك لموقع صرح النمو، فإنك توافق على الالتزام بهذه الشروط
                            والأحكام، كما قد نقوم بتحديثها من وقت لآخر.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">2. حقوق الملكية الفكرية</h2>
                        <p>
                            جميع المحتويات المعروضة على هذا الموقع بما في ذلك النصوص، الصور،
                            الشعارات، البرمجيات، والتصميمات هي ملك لصالح صرح النمو ومحميّة
                            بموجب قوانين حقوق النشر والعلامات التجارية.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">3. استخدام الموقع</h2>
                        <p>
                            يُحظر استخدام هذا الموقع لأي غرض غير قانوني أو غير مصرح به. لا يجوز
                            لك محاولة اختراق الموقع أو تعطيله أو الوصول إلى بيانات غير مصرّح بها.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">4. حدود المسؤولية</h2>
                        <p>
                            نحن في صرح النمو لا نتحمل أي مسؤولية عن أي خسائر أو أضرار قد تنتج عن
                            استخدامك للموقع أو اعتمادك على أي من المعلومات الواردة فيه.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">5. التعديلات</h2>
                        <p>
                            نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت، وسيتم نشر النسخة
                            المحدثة على هذه الصفحة.
                        </p>
                    </div>

                    <div>
                        <h2 className="font-semibold text-xl mb-2">6. التواصل</h2>
                        <p>
                            إذا كانت لديك أي استفسارات حول هذه الشروط، يمكنك التواصل معنا عبر
                            البريد الإلكتروني:{" "}
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
