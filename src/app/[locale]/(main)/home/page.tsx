import React from 'react'
import { Banner } from './Banner'
import { CarbonCredit } from './CarbonCredit'
import { CarbonProject } from './CarbonProject'
import { getTranslations } from 'next-intl/server'
import { GenerationFlow } from './GenerationFlow'
import { VietNamData } from './VietNamData'

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
    return (
        <main>
            <section>
                <Banner />
                <div className='h-[13px] bg-secondary' ></div>
            </section>
            <section className='py-8 lg:py-32'>
                <CarbonCredit />
            </section>
            <section className='py-8 lg:py-32'>
                <CarbonProject />
            </section>
            <section className='py-8 lg:py-32'>
                <GenerationFlow />
            </section>
            <section className='pt-8 lg:pt-32'>
                <VietNamData />
            </section>

        </main>
    )
}

export default HomePage