import { useTranslations } from 'next-intl'
import React from 'react'

export default function ResourcesPage() {
    const t = useTranslations("HomePage")
    return (
        <div>{t("about")}</div>
    )
}
