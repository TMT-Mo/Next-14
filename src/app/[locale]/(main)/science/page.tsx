import { useTranslations } from 'next-intl'
import React from 'react'

export default function SciencePage() {
    const t = useTranslations("HomePage")
    return (
        <div>{t("about")}</div>
    )
}
