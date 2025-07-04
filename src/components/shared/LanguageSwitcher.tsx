'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [currentLang, setCurrentLang] = useState('en');

    const restOfPath = pathname.split('/').slice(2).join('/') || '';

    useEffect(() => {
        // Get language from localStorage if available
        const savedLang = localStorage.getItem('lang');
        const pathLang = pathname.split('/')[1];

        if (savedLang && ['en', 'ar'].includes(savedLang) && pathLang !== savedLang) {
            router.push(`/${savedLang}/${restOfPath}`);
        }

        if (['en', 'ar'].includes(pathLang)) {
            setCurrentLang(pathLang);
            localStorage.setItem('lang', pathLang);
        }
    }, [pathname, router, restOfPath]);

    const handleLanguageChange = (lang: string) => {
        localStorage.setItem('lang', lang);
        setCurrentLang(lang);
    };

    return (
        <div className="flex items-center gap-3 text-sm">
            <Link
                href={`/en/${restOfPath}`}
                onClick={() => handleLanguageChange('en')}
                className={`px-2 py-1 rounded transition-colors ${currentLang === 'en' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
                English
            </Link>
            <span className="text-gray-300">|</span>
            <Link
                href={`/ar/${restOfPath}`}
                onClick={() => handleLanguageChange('ar')}
                className={`px-2 py-1 rounded transition-colors ${currentLang === 'ar' ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
                العربية
            </Link>
        </div>
    );
}