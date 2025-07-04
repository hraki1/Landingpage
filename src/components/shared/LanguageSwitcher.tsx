'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

const languages = [
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' },
];

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectLanguage = (langCode: string) => {
        setIsOpen(false);
        localStorage.setItem('preferredLang', langCode);
        router.push(`/${langCode}${pathWithoutLocale}`);
    };

    if (!isClient) {
        return (
            <div className="flex items-center gap-3 text-sm">
                {languages.map((lang) => (
                    <span
                        key={lang.code}
                        className="px-2 py-1 text-gray-400"
                    >
                        {lang.name}
                    </span>
                ))}
            </div>
        );
    }

    const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${isOpen ? 'bg-blue-50' : 'hover:bg-blue-50'
                    }`}
                aria-label="Select language"
            >
                <span className={`${currentLocale === 'ar' ? 'font-medium text-blue-600' : 'text-gray-600'}`}>
                    {currentLanguage.name}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <FiChevronDown size={16} className="text-gray-500" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                        className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden z-50"
                    >
                        {languages.map((lang) => (
                            <motion.button
                                key={lang.code}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelectLanguage(lang.code)}
                                className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors ${currentLocale === lang.code ? 'bg-blue-50 font-medium text-blue-600' : 'text-gray-600'
                                    }`}
                            >
                                {lang.name}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}