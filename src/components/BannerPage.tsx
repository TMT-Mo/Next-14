import React from 'react'
import Image, { StaticImageData } from 'next/image'
interface IProps {
    children?: React.ReactNode
    src: StaticImageData
}

export const BannerPage = ({ src, children }: IProps) => {
    return (
        <div className='relative'>
            <Image alt='' src={src}
            />
            <div className='absolute top-1/2  transform -translate-x-1/2 -translate-y-2/3 left-1/2'>
                {children}
            </div>
            <div className='h-[13px] bg-secondary' ></div>
        </div>
    )
}
