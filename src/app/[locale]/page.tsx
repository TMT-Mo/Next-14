'use client'
import { useTranslations } from 'next-intl';
import { Link, LocaleAvailable, usePathname, useRouter } from '@/i18n/routing';

export default function HomePage() {
    const t = useTranslations('HomePage');
    const pathname = usePathname();  // Gets current path
    const router = useRouter()
    // const locale = useLocale();
    const onChange = (lang: LocaleAvailable) => {
        console.log('pathname', pathname)
        console.log('lang', lang)
        // console.log('locale', locale)
        router.replace(pathname, { locale: lang })
        // routing.defaultLocale = lang
    }
    return (
        <div>
            <h1>{t('title')}</h1>
            <Link href="/about">{t('about')}</Link>
            <button onClick={() => onChange('en')}>English</button>
            <button onClick={() => onChange('vi')}>Vietnamese</button>
        </div>
    );
}