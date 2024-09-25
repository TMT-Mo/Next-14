import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { albertSans, notoSans } from '../fonts';
import { LocaleAvailable } from '@/i18n/routing';
import '@/app/globals.css'
import StyledComponentsRegistry from '@/lib/registry';
import NextTopLoader from 'nextjs-toploader';
export const metadata: Metadata = {
    title: 'BCG',
    description: 'BCG Environment',
}

export default async function LocaleLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: LocaleAvailable };
}) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${locale == 'zh' ? notoSans.className : albertSans.className}`}>
            <body>
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <NextTopLoader color='#9DD05C' />
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}