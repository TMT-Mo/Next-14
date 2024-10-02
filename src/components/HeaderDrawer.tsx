import { Divider, Drawer } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react'
import HamburgerIcon from "@/icons/hamburger.svg"
import CloseIcon from "@/icons/close.svg"
import { SelectLanguage } from './SelectLanguage';
import Link from 'next/link';
import { urls } from '@/util/urls';
import { useLanguage } from '@/hooks/useLanguage';
import { useTranslations } from 'next-intl';


export const HeaderDrawer = () => {
    const { currentLocale } = useLanguage()
    const t = useTranslations('Header')
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const { about, contact, home, resources, science } = urls

    const openDrawer = () => {
        setIsOpenDrawer(true);
    };
    const closeDrawer = () => {
        setIsOpenDrawer(false);
    };

    return (
        <div className='block lg:hidden'>
            <Image src={HamburgerIcon} alt='' className='!w-9 h-9' onClick={openDrawer} />
            <Drawer width={'90vw'} styles={{
                header: {
                    display: 'none'
                }
            }} className='!bg-primary' title="Basic Drawer" onClose={closeDrawer} open={isOpenDrawer}>
                <div className='container flex flex-col gap-10 '>
                    <div className='flex justify-end'>
                        <Image src={CloseIcon} alt='' className='!w-9 h-9' onClick={closeDrawer} />
                    </div>
                    <div className='flex flex-col gap-10 pl-10'>
                        <Link href={`/${currentLocale}${home}`} onClick={closeDrawer}><span className='text-[22px]'>{t('home')}</span></Link>
                        <Link href={`/${currentLocale}${science}`} onClick={closeDrawer}><span className='text-[22px]'>{t('science')}</span></Link>
                        <Link href={`/${currentLocale}${resources}`} onClick={closeDrawer}><span className='text-[22px]'>{t('resources')}</span></Link>
                        <Link href={`/${currentLocale}${about}`} onClick={closeDrawer}><span className='text-[22px]'>{t('about')}</span></Link>
                        <Link href={`/${currentLocale}${contact}`} onClick={closeDrawer}><span className='text-[22px]'>{t('contact')}</span></Link>
                    </div>

                </div>
                <Divider className='bg-white my-16' />
                <div className='flex justify-end'>
                    <SelectLanguage downArrowColor='black' />
                </div>
            </Drawer>
        </div>
    );
}
