'use client'
import { LocaleAvailable } from '@/i18n/routing'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface IProps {
    children?: React.ReactNode
    href: string
    locale: LocaleAvailable
}

export const NavLink = ({ href, children, locale }: IProps) => {
    const pathName = usePathname()
    return (
        <Link locale={locale} href={href} className={`${pathName == href ? 'border-b-2 border-white' : ''}`}>{children}</Link>
    )
}
