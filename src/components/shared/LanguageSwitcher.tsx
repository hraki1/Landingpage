'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const restOfPath = pathname.split('/').slice(2).join('/') || '';


    return (
        <div className="flex gap-4 text-sm text-black">
            <Link href={`/en/${restOfPath}`}>English</Link>
            <span>|</span>
            <Link href={`/ar/${restOfPath}`}>العربية</Link>
        </div>
    );
}
