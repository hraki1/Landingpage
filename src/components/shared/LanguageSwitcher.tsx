'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const currentLocale = useLocale();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Remove current locale from pathname

    const locales = [
        { code: 'en', name: 'English' },
        { code: 'ar', name: 'العربية' },
    ];

    if (!isClient) {
        return (
            <div className="flex gap-3">
                {locales.map((locale) => (
                    <span
                        key={locale.code}
                        className="px-2 py-1 text-sm text-gray-400"
                    >
                        {locale.name}
                    </span>
                ))}
            </div>
        );
    }

    const handleSelectLanguage = (langCode: string) => {

        // Replace locale segment with new langCode
        const segments = pathname?.split("/") || [];
        if (segments.length > 1) {
            segments[1] = langCode; // replace locale segment
        } else {
            segments.push(langCode); // fallback
        }
        const newPathname = segments.join("/") || `/${langCode}`;
        localStorage.setItem("lang", langCode);
        // Navigate to new locale path
        router.push(newPathname);
    };

    return (
        <div className="flex items-center gap-2 text-sm">
            {locales.map((locale) => (
                <div key={locale.code} className="flex items-center">
                    {locale.code !== 'en' && <span className="text-gray-300 mx-2">|</span>}
                    <button
                        onClick={() => handleSelectLanguage(locale.code)}
                        className={`px-2 py-1 rounded transition-colors ${currentLocale === locale.code
                            ? 'bg-blue-100 text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                    >
                        {locale.name}
                    </button>
                </div>
            ))}
        </div>
    );
}