"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/lib/actions/contact';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const locale = useLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    {}
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      },
    },
  };



  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
      dir={dir}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto mt-16"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl"
            whileHover={{ scale: 1.02 }}
          >
            {t('title.part1')} <span className="text-[#2EB6EE]">{t('title.part2')}</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
            whileHover={{ y: -5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200 flex items-center gap-2">
              <FiSend className="text-[#2EB6EE]" />
              {t('formTitle')}
            </h2>



            {/* Error Message */}
            {state.message && !state.success && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 bg-red-100 text-red-700 rounded-lg ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
              >
                {t('errorMessage')}
              </motion.div>
            )}

            <form className="space-y-6" action={formAction}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium text-gray-700 mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {t('formFields.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    defaultValue={state.formData?.name || ''}
                    className={`block w-full border rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE] transition duration-200 text-black ${
                      state.errors?.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {state.errors?.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {t('validationErrors.name')}
                    </p>
                  )}
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-gray-700 mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                  >
                    {t('formFields.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    defaultValue={state.formData?.email || ''}
                    className={`block w-full border rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE] transition duration-200 text-black ${
                      state.errors?.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                  />
                  {state.errors?.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {t('validationErrors.email')}
                    </p>
                  )}
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium text-gray-700 mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {t('formFields.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  defaultValue={state.formData?.subject || ''}
                  className={`block w-full border rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE] transition duration-200 text-black ${
                    state.errors?.subject ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {state.errors?.subject && (
                  <p className="mt-1 text-sm text-red-600">
                    {t('validationErrors.subject')}
                  </p>
                )}
              </motion.div>

              <motion.div whileHover={{ scale: 1.01 }}>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium text-gray-700 mb-2 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                >
                  {t('formFields.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  defaultValue={state.formData?.message || ''}
                  className={`block w-full border rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE] transition duration-200 text-black ${
                    state.errors?.message ? 'border-red-300' : 'border-gray-300'
                  }`}
                />
                {state.errors?.message && (
                  <p className="mt-1 text-sm text-red-600">
                    {t('validationErrors.message')}
                  </p>
                )}
              </motion.div>

              <motion.div className="pt-2">
                <motion.button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-gradient-to-r from-[#2EB6EE] to-[#8FBE53] hover:from-[#2596c4] hover:to-[#7CAE4A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2EB6EE] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(46, 182, 238, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('submittingText')}
                    </>
                  ) : (
                    <>
                      <FiSend />
                      {t('submitButton')}
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Information Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200 flex items-center gap-2">
                <FiMapPin className="text-[#2EB6EE]" />
                {t('contactInfoTitle')}
              </h2>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition duration-200"
                  whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                >
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FiMail className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                    <h3 className="text-lg font-medium text-gray-900">{t('contactMethods.email')}</h3>
                    <a
                      href="mailto:info@sarh-alnomu.com"
                      className="text-gray-600 hover:text-[#2EB6EE] transition duration-200"
                    >
                      info@sarh-alnomu.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition duration-200"
                  whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                >
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FiPhone className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                    <h3 className="text-lg font-medium text-gray-900">{t('contactMethods.phone')}</h3>
                    <a
                      href="tel:+962791986721"
                      className="text-gray-600 hover:text-[#2EB6EE] transition duration-200"
                    >
                      +962 7 9198 6721
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition duration-200"
                  whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                >
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FaWhatsapp className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                    <h3 className="text-lg font-medium text-gray-900">{t('contactMethods.whatsapp')}</h3>
                    <a
                      href="https://wa.me/962791986721"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#2EB6EE] transition duration-200"
                    >
                      +962 7 9198 6721
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition duration-200"
                  whileHover={{ x: dir === 'rtl' ? -5 : 5 }}
                >
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FiMapPin className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
                    <h3 className="text-lg font-medium text-gray-900">{t('contactMethods.address')}</h3>
                    <p className="text-gray-600">{t('contactMethods.addressValue')}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Media Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
                {t('socialMediaTitle')}
              </h2>
              <div className="flex justify-center gap-6">
                {[
                  { icon: <FaFacebook className="h-7 w-7" />, color: "bg-blue-600", url: "#" },
                  { icon: <FaTwitter className="h-7 w-7" />, color: "bg-blue-400", url: "#" },
                  { icon: <FaLinkedin className="h-7 w-7" />, color: "bg-blue-700", url: "#" },
                  { icon: <FaInstagram className="h-7 w-7" />, color: "bg-pink-600", url: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-full hover:shadow-lg transition duration-300`}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-200">
                {t('mapTitle')}
              </h2>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d211.50073439967173!2d35.84878615628636!3d31.98769692763757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sjo!4v1751491658992!5m2!1sar!2sjo"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {state.success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
              dir={dir}
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6"
                >
                  <FiCheckCircle className="h-8 w-8 text-green-600" />
                </motion.div>
                
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  {t('successModal.title')}
                </motion.h3>
                
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 mb-6 leading-relaxed"
                >
                  {t('successModal.message')}
                </motion.p>
                
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => window.location.reload()}
                  className="w-full bg-gradient-to-r from-[#2EB6EE] to-[#8FBE53] text-white font-medium py-3 px-6 rounded-lg hover:from-[#2596c4] hover:to-[#7CAE4A] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2EB6EE]"
                >
                  {t('successModal.button')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}