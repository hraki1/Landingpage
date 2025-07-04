'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';

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

    return (
        <div className="flex items-center gap-2 text-sm">
            {locales.map((locale) => (
                <div key={locale.code} className="flex items-center">
                    {locale.code !== 'en' && <span className="text-gray-300 mx-2">|</span>}
                    <Link
                        href={`/${locale.code}${pathWithoutLocale}`}
                        className={`px-2 py-1 rounded transition-colors ${currentLocale === locale.code
                            ? 'bg-blue-100 text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                            }`}
                        prefetch={false}
                    >
                        {locale.name}
                    </Link>
                </div>
            ))}
        </div>
    );
}