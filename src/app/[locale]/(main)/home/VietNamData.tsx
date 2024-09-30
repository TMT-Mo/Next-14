'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import VietNamDataBg from './images/dataBg.png'
import DataDotBg from './images/DataDotBg.png'
import { Carousel, Flex } from 'antd'
import styled from 'styled-components'
import RightArrow from './images/right_arrow_circle.png'
import LeftArrow from './images/left_arrow_circle.png'
import Data1 from './images/data1.png'
import { IVietNamData } from './types'
import Logo from '@/assets/bcg_logo.png'
import { GoArrowRight } from 'react-icons/go'
import { LeafTitle } from '@/components/LeafTitle'
import { CarouselRef } from 'antd/es/carousel'
import PlanVivo from './images/plan-vivo.png'

const StyledCarousel = styled(Carousel)`
    .slick-prev{
        left: 78%;
        width: 67px;
        height: auto;
        opacity: 100%;
        top: -15%;
    }

    .slick-next{
        right: 13%;
        width: 67px;
        height: auto;
        opacity: 100%;
        top: -15%;
    }   
`

const vietnamDataList: IVietNamData[] = [
    {
        image: Data1,
        title: 'Carbon credit exchange a strategic factor for Vietnams economic development',
        brief: 'Vu Trung Kien, director of the Centre for Climate Change Response Support, speaks to Nhan Dan (People) newspaper about...'
    },
    {
        image: Data1,
        title: 'Carbon credit exchange a strategic factor for Vietnams economic development',
        brief: 'Vu Trung Kien, director of the Centre for Climate Change Response Support, speaks to Nhan Dan (People) newspaper about...'
    },
    {
        image: Data1,
        title: 'Carbon credit exchange a strategic factor for Vietnams economic development',
        brief: 'Vu Trung Kien, director of the Centre for Climate Change Response Support, speaks to Nhan Dan (People) newspaper about...'
    },
]



export const VietNamData = () => {
    const carouselRef = useRef<CarouselRef>(null)

    const PrevArrow = () => {
        const onPrev = () => {
            carouselRef.current?.prev()
        }
        return <Image alt='left-arrow' src={LeftArrow} onClick={onPrev} style={{
            width: 67,
            height: 67,
            cursor: 'pointer'
        }} />
    }
    const NextArrow = () => {
        const onNext = () => {
            carouselRef.current?.next()
        }
        return <Image alt='right-arrow' src={RightArrow} onClick={onNext} style={{
            width: 67,
            height: 67,
            cursor: 'pointer'
        }} />
    }
    return (
        <div className='relative'>
            <Image alt='vietnam data' src={VietNamDataBg} />

            <div className='bg-primary h-[320px] w-full '></div>
            <div className='bg-secondary h-[480px] w-full '>
                <div className='h-full flex flex-col items-center justify-center gap-28'>
                    <Flex gap={70}>
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                    </Flex>
                    <Flex gap={70}>
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                        <Image alt='plan' src={PlanVivo} />
                    </Flex>
                </div>
            </div>
            <div className='absolute top-0  transform  translate-y-[210px] w-full'>
                <div className='relative'>
                    <Image alt='data dot bg' src={DataDotBg} className='absolute top-[380px]' />
                    <div className='mx-auto container px-16 '>
                        <div className='flex justify-between items-center mb-20'>
                            <LeafTitle className='text-white '>Vietnam Data</LeafTitle>
                            <div className='flex gap-3'>
                                <PrevArrow />
                                <NextArrow />
                            </div>
                        </div>
                        <StyledCarousel ref={carouselRef} infinite={true} dots={false}>
                            <div>
                                <div className='flex gap-6 justify-center'>
                                    {vietnamDataList.map(({ brief, image, title }, index) =>
                                        <div className='flex flex-col gap-7 bg-white w-fit' key={index}>
                                            <Image alt='data' src={image} />
                                            <div className='flex flex-col gap-4 px-8'>
                                                <span className='font-semibold text-[24px] w-96 leading-snug'>{title}</span>
                                                <span className='text-[#868681] w-96 text-[16px]'>{brief}</span>
                                            </div>
                                            <div className='flex justify-between px-10 border-t-[1px] border-t-[#DDDDDD] py-3'>
                                                <Image alt='logo' src={Logo} style={{ width: 80, height: 50 }} />
                                                <div className='flex gap-3 items-center'>
                                                    <span className='text-secondary font-semibold'>Read More</span>
                                                    <GoArrowRight color='6DBB4A' />

                                                </div>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-6 justify-center'>
                                    {vietnamDataList.map(({ brief, image, title }, index) =>
                                        <div className='flex flex-col gap-7 bg-white w-fit' key={index}>
                                            <Image alt='data' src={image} />
                                            <div className='flex flex-col gap-4 px-8'>
                                                <span className='font-semibold text-[24px] w-96 leading-snug'>{title}</span>
                                                <span className='text-[#868681] w-96 text-[16px]'>{brief}</span>
                                            </div>
                                            <div className='flex justify-between px-10 border-t-[1px] border-t-[#DDDDDD] py-3'>
                                                <Image alt='logo' src={Logo} style={{ width: 80, height: 50 }} />
                                                <div className='flex gap-3 items-center'>
                                                    <span className='text-secondary font-semibold'>Read More</span>
                                                    <GoArrowRight color='6DBB4A' />

                                                </div>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                            <div>
                                <div className='flex gap-6 justify-center'>
                                    {vietnamDataList.map(({ brief, image, title }, index) =>
                                        <div className='flex flex-col gap-7 bg-white w-fit' key={index}>
                                            <Image alt='data' src={image} />
                                            <div className='flex flex-col gap-4 px-8'>
                                                <span className='font-semibold text-[24px] w-96 leading-snug'>{title}</span>
                                                <span className='text-[#868681] w-96 text-[16px]'>{brief}</span>
                                            </div>
                                            <div className='flex justify-between px-10 border-t-[1px] border-t-[#DDDDDD] py-3'>
                                                <Image alt='logo' src={Logo} style={{ width: 80, height: 50 }} />
                                                <div className='flex gap-3 items-center'>
                                                    <span className='text-secondary font-semibold'>Read More</span>
                                                    <GoArrowRight color='6DBB4A' />

                                                </div>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                        </StyledCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}
