'use client';

import { useTranslations } from 'next-intl';

export default function NotFound() {
    const t = useTranslations("NotFound")
    return (
        <h1>{t("content")}</h1>
    );
}