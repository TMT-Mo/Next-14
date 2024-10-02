import { useTranslations } from 'next-intl'
import React from 'react'

export default function ResourcesPage() {
    const t = useTranslations("HomePage")
    return (
        <div className='!h-screen'>{t("about")}</div>
    )
}
