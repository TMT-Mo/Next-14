import React from 'react'
import Image from 'next/image'
import logo from '@/assets/bcg_logo.png'
import Link from 'next/link'
import { getLocale } from 'next-intl/server'
import { LocaleAvailable } from '@/i18n/routing'
import { NavLink } from './NavLink'

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
        name: 'Home'
    },
    {
        url: '/science',
        name: 'Science'
    },
    {
        url: '/resources',
        name: 'Resources'
    },
    {
        url: '/about',
        name: 'About Us'
    },
    {
        url: '/contact',
        name: 'Contact Us'
    },
]

const Header = ({ locale }: IProps) => {
    // const locale = getLocale()
    return (
        <header className='sticky bg-black px-60 py-2 w-full'>
            <div className='flex w-full justify-between items-center'>
                <Image src={logo} alt='' width={138.46} height={87.19} />
                <div className='flex gap-14'>
                    {menuList.map(({ name, url }) =>
                        <NavLink href={`/${locale}${url}`} key={name} locale={locale}>
                            <span className='font-medium text-[17px] text-white'>
                                {name}
                            </span>
                        </NavLink>
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header