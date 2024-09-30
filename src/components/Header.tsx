import React from 'react'
import Image from 'next/image'
import logo from '@/assets/bcg_logo.png'
import { LocaleAvailable } from '@/i18n/routing'
import { NavLink } from './NavLink'
import { SelectLanguage } from './SelectLanguage'
import { useTranslations } from 'next-intl'
import HamburgerIcon from "@/icons/hamburger.svg"
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

    return (
        <header className='sticky bg-black  py-2 w-full px-0 lg:px-60'>
            <div className='flex w-screen justify-between items-center px-4'>
                <Image src={logo} alt='' className='!w-28 h-16' />
                <Image src={HamburgerIcon} alt='' className='!w-9 h-9' />
                {/* <div className='hidden gap-14 md:flex'>
                    {menuList.map(({ name, url }) =>
                        <NavLink href={`/${locale}${url}`} key={name} locale={locale}>
                            <span className='font-medium text-[17px] text-white'>
                                {t(`${name}`)}
                            </span>
                        </NavLink>
                    )}
                    <SelectLanguage />
                </div> */}
            </div>
        </header>
    )
}

export default Header