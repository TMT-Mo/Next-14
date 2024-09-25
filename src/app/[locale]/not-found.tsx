'use client';

import { useTranslations } from 'next-intl';
import Error from 'next/error';

export default function NotFound() {
    const t = useTranslations("NotFound")
    return (
        <h1>{t("content")}</h1>
    );
}