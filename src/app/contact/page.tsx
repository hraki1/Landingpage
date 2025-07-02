"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto mt-16"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            تواصل معنا
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            نحن هنا للإجابة على جميع استفساراتك
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white p-6 sm:p-8 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              أرسل لنا رسالة
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 text-right"
                  >
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 text-right"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  الموضوع
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 text-right"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#2EB6EE] focus:border-[#2EB6EE]"
                ></textarea>
              </div>
              <div>
                <motion.button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2EB6EE] hover:bg-[#2596c4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2EB6EE]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  إرسال الرسالة
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                معلومات التواصل
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FiMail className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-medium text-gray-900">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@sarh-alnomu.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FiPhone className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-medium text-gray-900">الهاتف</h3>
                    <p className="text-gray-600">+966 12 345 6789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#2EB6EE]/10 p-3 rounded-full">
                    <FiMapPin className="h-6 w-6 text-[#2EB6EE]" />
                  </div>
                  <div className="mr-4">
                    <h3 className="text-lg font-medium text-gray-900">العنوان</h3>
                    <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                وسائل التواصل الاجتماعي
              </h2>
              <div className="flex justify-center space-x-6">
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-[#2EB6EE]"
                  whileHover={{ y: -3 }}
                >
                  <FaFacebook className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-[#2EB6EE]"
                  whileHover={{ y: -3 }}
                >
                  <FaTwitter className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-[#2EB6EE]"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-500 hover:text-[#2EB6EE]"
                  whileHover={{ y: -3 }}
                >
                  <FaInstagram className="h-6 w-6" />
                </motion.a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">موقعنا</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d211.50073439967173!2d35.84878615628636!3d31.98769692763757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sjo!4v1751491658992!5m2!1sar!2sjo"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}