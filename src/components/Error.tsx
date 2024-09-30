'use client';
import BgImage from '@/assets/language_selection_bg.png'
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Error(props: {
    error: Error;
    reset: () => void;
}) {
    const t = useTranslations('Error');
    console.log('error', props)
    return (
        <main>
            <section>
                <div className='relative w-screen h-screen '>
                    <Image alt='bg-image' src={BgImage} fill objectFit='cover' />
                    <div className='absolute mx-auto top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                        <h1 className='text-white text-[73px] font-bold text-center leading-[80px] w-[80vw]'>{t('content')}</h1>
                    </div>

                </div>
                {/* <img alt='' src='/public/images/language_selection_bg.png' className='w-screen h-screen' /> */}
            </section>
        </main>
    );
}