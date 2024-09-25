import { useTranslations } from 'next-intl'
import React from 'react'
import { CustomCarousel } from './CustomCarousel'
import { CarbonCredit } from './CarbonCredit'
import GreenContainer from '@/assets/green_gradient_container.png'
import Image from 'next/image'
import { Col, Row } from 'antd'
import { CarbonProject } from './CarbonProject'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: string };
}) {
    const t = await getTranslations({ locale, namespace: "Metadata" });

    return {
        title: t("title"),
        description: t("description"),
    };
}

const HomePage = () => {
    const t = useTranslations("HomePage")
    return (
        <main>
            <section>
                <CustomCarousel />
                <div className='h-[13px] bg-secondary' ></div>
            </section>
            <section className='py-[120px]'>
                <CarbonCredit />
            </section>
            <section className='py-[120px]'>
                <CarbonProject />
            </section>
        </main>
    )
}

export default HomePage