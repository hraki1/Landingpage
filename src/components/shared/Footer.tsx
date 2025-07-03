"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function Footer() {

  const pathname = usePathname();
  const router = useRouter();

  type socialLinksType = {
    name: string;
    href: string;
    icon: React.ElementType;
  };

  const socialLinks: socialLinksType[] = [
    {
      name: "Twitter",
      href: "https://twitter.com/yourprofile",
      icon: FaSquareXTwitter
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yourprofile",
      icon: FaFacebook
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      icon: IoLogoLinkedin
    },
    {
      name: "GitHub",
      href: "https://github.com/yourprofile",
      icon: IoLogoGithub
    },
  ];

  const footerColumns = [
    {
      title: "الخدمات",
      links: [
        { label: "تطوير المواقع", href: "/servicesPage/webDevelopment", type: "page" },
        { label: "تطبيقات الهاتف", href: "/servicesPage/mobileDevelopment", type: "page" },
        { label: "أنظمة الشركات", href: "/servicesPage/systemsDevelopment", type: "page" },
        { label: "الأمن السيبراني", href: "/servicesPage/cyberDevelopment", type: "page" },
        { label: "الاستضافة والسحابة", href: "/servicesPage/hostingCloud", type: "page" },
        { label: "حلول الأعمال", href: "/servicesPage/systemsDevelopment", type: "page" },
        { label: "إدارة البنية التحتية", href: "/servicesPage/infrastructureManagement", type: "page" },
        { label: "التحول الرقمي", href: "#use-cases", type: "hash" },
      ],
    },
    {
      title: "الشركة",
      links: [
        { label: "من نحن", href: "#about", type: "hash" },
        { label: "الوظائف", href: "/servicesPage/jobsPage", type: "page" },
        { label: "تواصل معنا", href: "/contact", type: "page" },
      ],
    },
    {
      title: "الدعم",
      links: [
        { label: "الأسئلة الشائعة", href: "#faq", type: "hash" },
        { label: "الدعم الفني", href: "/contact", type: "page" },
      ],
    },
  ];

  interface HashLinkHandler {
    (hash: string): void;
  }


  const handleHashLinkClick: HashLinkHandler = (hash: string): void => {
    if (pathname !== "/") {
      // If not on homepage, navigate to homepage with hash
      router.push(`/${hash}`);
      // Scroll after navigation completes
      setTimeout(() => {
        const element: Element | null = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll
      const element: Element | null = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className=" relative py-12 sm:py-16 px-4 sm:px-6 bg-gray-900 text-gray-400 text-center md:text-start">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#8FBE53] to-[#2EB6EE] bg-clip-text text-transparent mb-4 sm:mb-6 flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center w-10 md:w-14"
              >
                <Image
                  src="/logo.png"
                  alt="صرح النمو"
                  className="w-full h-auto"
                  width={50}
                  height={50}
                />
              </motion.div>
              صرح النمو
            </div>
            <p className="text-sm sm:text-base mb-4 sm:mb-6">
              منصة رقمية متكاملة لتطوير البرمجيات تساعدك على إدارة أعمالك،
              التوسع بسرعة، وتحقيق النجاح التقني.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.05 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm"
                  >
                    <social.icon size={16} />
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerColumns.map((column, i) => (
            <div key={i}>
              <h3 className="text-white font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                {column.title}
              </h3>
              <ul className="space-y-2 sm:space-y-3 ">
                {column.links.map((link, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.type === "hash" ? (
                      <button
                        onClick={() => {
                          handleHashLinkClick(link.href)
                        }}
                        className="text-xs sm:text-sm hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className=" text-xs sm:text-sm hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-center gap-4">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} صرح النمو. جميع الحقوق محفوظة.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              سياسة الخصوصية
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
