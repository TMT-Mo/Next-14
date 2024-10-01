'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/bcg_logo.png'
import { LocaleAvailable } from '@/i18n/routing'
import { NavLink } from './NavLink'
import { SelectLanguage } from './SelectLanguage'
import { useTranslations } from 'next-intl'
import HamburgerIcon from "@/icons/hamburger.svg"
import useDeviceDetection from '@/hooks/useDeviceDetection'
interface IMenu {
    url: string,
    name: string
}

interface IProps {
    locale: LocaleAvailable
}

const menuList: IMenu[] = [
    {
        url: '/home',
        name: 'home'
    },
    {
        url: '/science',
        name: 'science'
    },
    {
        url: '/resources',
        name: 'resources'
    },
    {
        url: '/about',
        name: 'about'
    },
    {
        url: '/contact',
        name: 'contact'
    },
]

const Header = ({ locale }: IProps) => {
    const t = useTranslations("Header")
    const { isMobile } = useDeviceDetection()

    return (
        <header className='sticky bg-black py-2 w-full overflow-hidden'>
            <div className='flex w-screen justify-between items-center px-4 xl:px-56'>
                <Image src={logo} alt='' className='!w-28 h-16' />
                {isMobile && <Image src={HamburgerIcon} alt='' className='!w-9 h-9' />}
                {!isMobile && <div className='hidden gap-14 md:flex'>
                    {menuList.map(({ name, url }) =>
                        <NavLink href={`/${locale}${url}`} key={name} locale={locale}>
                            <span className='font-medium text-[17px] text-white'>
                                {t(`${name}`)}
                            </span>
                        </NavLink>
                    )}
                    <SelectLanguage />
                </div>}
            </div>
        </header>
    )
}

export default Header