'use client'
import { Dropdown, MenuProps, Space } from 'antd';
import React from 'react'
import ChineseFlag from '@/assets/chinese_flag.png'
import EnglishFlag from '@/assets/english_flag.png'
import VietnameseFlag from '@/assets/vietnamese_flag.png'
import { LocaleAvailable } from '@/i18n/routing';
import Image from 'next/image'
import { useLanguage } from '@/hooks/useLanguage';
import { TiArrowSortedDown } from 'react-icons/ti';

interface IFlag {
    locale: LocaleAvailable,
    flag: React.ReactNode
}

interface IProps {
    downArrowColor?: string
}

const flag: IFlag[] = [
    {
        flag: <Image alt='vi image' src={VietnameseFlag} style={{ width: 47, height: 24 }} />,
        locale: 'vi'
    },
    {
        flag: <Image alt='en image' src={EnglishFlag} style={{ width: 47, height: 24 }} />,
        locale: 'en'
    },
    {
        flag: <Image alt='zh image' src={ChineseFlag} style={{ width: 47, height: 24 }} />,
        locale: 'zh'
    },
]




export const SelectLanguage = ({ downArrowColor = 'white' }: IProps) => {
    const { onSelectLanguage, currentLocale } = useLanguage()


    const handleMenuClick: MenuProps['onClick'] = (e) => {
        // message.info('Click on menu item.');
        onSelectLanguage(e.key as LocaleAvailable)
    };
    const items: MenuProps['items'] = [
        {
            label: <Image alt='vi image' width={47} height={24} src={VietnameseFlag} />,
            key: 'vi',
        },
        {
            label: <Image alt='zh image' width={47} height={24} src={ChineseFlag} />,
            key: 'zh',
        },
        {
            label: <Image alt='en image' width={47} height={24} src={EnglishFlag} />,
            key: 'en',
        },
    ];
    const menuProps = {
        items: items.filter(item => item?.key != currentLocale),
        onClick: handleMenuClick,
    };
    return (
        <>
            <Dropdown menu={menuProps} trigger={['click']} arrow>
                <Space className='cursor-pointer'>
                    {flag.find(item => item.locale == currentLocale)?.flag}
                    <TiArrowSortedDown color={downArrowColor} />
                </Space>
            </Dropdown>
        </>
    )
}
