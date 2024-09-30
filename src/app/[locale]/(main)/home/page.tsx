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
            {/* <section className='py-[120px]'>
                <CarbonCredit />
            </section>
            <section className='py-[120px]'>
                <CarbonProject />
            </section>
            <section className='py-[120px]'>
                <GenerationFlow />
            </section>
            <section className='pt-[120px]'>
                <VietNamData />
            </section> */}
        </main>
    )
}

export default HomePage