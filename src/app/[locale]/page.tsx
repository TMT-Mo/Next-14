'use client'
import { useTranslations } from 'next-intl';
import { Link, LocaleAvailable } from '@/i18n/routing';
import BgImage from '@/assets/language_selection_bg.png'
import Image, { StaticImageData } from 'next/image';
import Logo from '@/assets/bcg_logo.png'
import ChineseFlag from '@/assets/chinese_flag.png'
import EnglishFlag from '@/assets/english_flag.png'
import VietnameseFlag from '@/assets/vietnamese_flag.png'
import CustomButton from '@/components/CustomButton';
import DoubleArrow from '@/icons/DoubleArrow.svg?icon'
import { urls } from '@/util/urls';
import { useLanguage } from '@/hooks/useLanguage';
interface IFlag {
    src: StaticImageData,
    alt: string,
    localeFlag: LocaleAvailable,
    translate: string
}

const flagList: IFlag[] = [
    {
        alt: 'chinese flag',
        localeFlag: 'zh',
        src: ChineseFlag,
        translate: 'chinese'
    },
    {
        alt: 'english flag',
        localeFlag: 'en',
        src: EnglishFlag,
        translate: 'english'
    },
    {
        alt: 'vietnamese flag',
        localeFlag: 'vi',
        src: VietnameseFlag,
        translate: 'vietnamese'
    },

]

export default function HomePage() {
    const t = useTranslations('LanguageSelection');
    const { onSelectLanguage, currentLocale } = useLanguage()

    return (
        <main>
            <section>
                <div className='relative w-screen h-screen'>
                    <Image alt='' src={BgImage} fill objectFit='cover' />
                    <div className='absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 left-1/2'>
                        <div className='flex flex-col w-[90vw] max-w-[452px] bg-white'>
                            <div className='relative  h-full bg-[#EDEDED]'>
                                <Image alt='logo' src={Logo} width={274.96} height={173.14} className='mx-auto py-9' />
                            </div>
                            <div className=' flex flex-col  justify-center items-center py-[53px] md:px-24 '>
                                <div className='flex flex-col gap-5'>

                                    {flagList.map(({ alt, localeFlag, src, translate }) =>

                                        <div className={`flex space-x-[38px] items-center px-4 py-5 cursor-pointer border border-white ${localeFlag == currentLocale ? '!border-[#636363] ' : ''}`}
                                            onClick={() => onSelectLanguage(localeFlag)}
                                            key={localeFlag}
                                        >
                                            <div className='relative'>
                                                <Image alt={alt} src={src} />
                                            </div>
                                            <span className='text-[15px] font-semibold uppercase w-[100px] whitespace-nowrap'>
                                                {t(`${translate}`)}
                                            </span>
                                        </div>
                                    )
                                    }
                                    <Link href={urls.home}>
                                        <CustomButton className='w-full flex justify-center'>
                                            <div className='flex gap-4 items-center '>
                                                <span className='font-medium text-[17px]'>{t('next')}</span>
                                                <DoubleArrow className='translate-y-0.5' />
                                            </div>
                                        </CustomButton>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
                {/* <img alt='' src='/public/images/language_selection_bg.png' className='w-screen h-screen' /> */}
            </section>
        </main>
    );
}