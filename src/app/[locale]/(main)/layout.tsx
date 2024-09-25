import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { LocaleAvailable } from '@/i18n/routing';
import React from 'react'

const MainLayout = ({
    children, // will be a page or nested layout
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: LocaleAvailable };
}) => {
    return (
        <main>
            <Header locale={locale} />
            {children}
            <Footer />
        </main>
    )
}

export default MainLayout