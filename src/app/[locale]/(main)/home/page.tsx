import React from 'react'
import { Banner } from './sections/Banner/index'
import { CarbonCredit } from './sections/CarbonCredit/index'
import { CarbonProject } from './sections/CarbonProject/index'
import { getTranslations } from 'next-intl/server'
import { GenerationFlow } from './sections/GenerationFlow/index'
import { VietNamData } from './sections/VietNamData/index'


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