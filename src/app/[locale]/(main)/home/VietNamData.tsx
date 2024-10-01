'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import VietNamDataBg from './images/dataBg.png'
import DataDotBg from './images/DataDotBg.png'
import { Flex } from 'antd'
// import styled from 'styled-components'
import Data1 from './images/data1.png'
import { IVietNamData } from './types'
import Logo from '@/assets/bcg_logo.png'
import { GoArrowRight } from 'react-icons/go'
import { LeafTitle } from '@/components/LeafTitle'
import PlanVivoBrand from './images/plan-vivo.png'
import NfsBrand from './images/nfs.png'
import RiverseBrand from './images/riverse.png'
import SocialCarbonBrand from './images/social-carbon.png'
import GoldStandardBrand from './images/gold-standard.png'
import LabelBasBrand from './images/label-bas.png'
import AmericanBrand from './images/amerian-carbon.png'
import CBrand from './images/c-brand.png'
import ClimateBrand from './images/climate.png'
import VerifiedCarbonBrand from './images/verified-carbon.png'
import Carousel, { ArrowProps } from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import LeftArrow from './images/left_arrow_circle.png'
import RightArrow from './images/right_arrow_circle.png'
import useDeviceDetection from '@/hooks/useDeviceDetection'
import DotBgMobile from './images/Dot_bg_mobile.png'
// const StyledCarousel = styled(Carousel)`
//     .slick-prev{
//         left: 78%;
//         width: 67px;
//         height: auto;
//         opacity: 100%;
//         top: -15%;
//     }

//     .slick-next{
//         right: 13%;
//         width: 67px;
//         height: auto;
//         opacity: 100%;
//         top: -15%;
//     }   
// `

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


interface ICustomArrow extends ArrowProps {
    direction: 'left' | 'right',
    width: number,
    height: number
}


const CustomArrow: React.FC<ICustomArrow> = ({ onClick, direction, height, width }) => {
    return (
        <Image alt='left-arrow' src={direction == 'right' ? RightArrow : LeftArrow} onClick={onClick} style={{
            width,
            height,
            cursor: 'pointer'
        }} />
    );
};

export const VietNamData = () => {
    const carouselRef = useRef<Carousel>(null)
    const { isMobile } = useDeviceDetection()
    return (
        <div className='relative'>
            <Image alt='vietnam data' src={VietNamDataBg} className='h-[880px] object-cover' />

            <div className='relative bg-primary h-14  w-full lg:h-[320px]'>
                {isMobile && <Image alt='dot' src={DotBgMobile} fill />}
            </div>
            <div className='bg-secondary h-full  w-full lg:h-[480px]'>
                <div className='h-full flex flex-col items-center justify-center gap-28 p-4'>
                    <Flex vertical={isMobile ? false : true} className='gap-4'>
                        <Flex gap={70} wrap>
                            <Image alt='plan' src={PlanVivoBrand} style={{ height: 50, width: 'auto' }} />
                            <Image alt='plan' src={RiverseBrand} style={{ height: 20, width: 'auto' }} />
                            <Image alt='plan' src={NfsBrand} style={{ height: 40, width: 'auto' }} />
                            <Image alt='plan' src={SocialCarbonBrand} style={{ height: 30, width: 'auto' }} />
                            <Image alt='plan' src={GoldStandardBrand} style={{ height: 40, width: 'auto' }} />
                        </Flex>
                        <Flex gap={70} wrap>
                            <Image alt='plan' src={PlanVivoBrand} style={{ height: 50, width: 'auto' }} />
                            <Image alt='plan' src={RiverseBrand} style={{ height: 20, width: 'auto' }} />
                            <Image alt='plan' src={NfsBrand} style={{ height: 40, width: 'auto' }} />
                            <Image alt='plan' src={SocialCarbonBrand} style={{ height: 30, width: 'auto' }} />
                            <Image alt='plan' src={GoldStandardBrand} style={{ height: 40, width: 'auto' }} />
                        </Flex>
                        {/* <Flex gap={70} wrap>
                            <Image alt='plan' src={LabelBasBrand} style={{ height: 50 }} objectFit='contain' />
                            <Image alt='plan' src={CBrand} style={{ height: 50, width: '100%' }} />
                            <Image alt='plan' src={VerifiedCarbonBrand} style={{ height: 50, width: '100%' }} />
                            <Image alt='plan' src={AmericanBrand} style={{ height: 50, width: '100%' }} />
                            <Image alt='plan' src={ClimateBrand} style={{ height: 50, width: '100%' }} />
                        </Flex> */}
                    </Flex>
                </div>
            </div>
            <div className='absolute top-0  transform translate-y-[55px] w-full lg:translate-y-[210px]'>
                <div className='relative'>
                    <Image alt='data dot bg' src={DataDotBg} className='absolute top-[380px] ' />
                    <div className='mx-auto container px-16 '>
                        <div className='flex justify-between items-center mb-8 lg:mb-20'>
                            <LeafTitle className='text-white '>Vietnam Data</LeafTitle>
                            {!isMobile &&
                                <div className='flex gap-3'>

                                    <CustomArrow onClick={() => carouselRef.current?.previous(1)} direction='left' width={67} height={67} />
                                    <CustomArrow onClick={() => carouselRef.current?.next(1)} direction='right' width={67} height={67} />
                                </div>}
                            {/* <div className='flex gap-3'>
                                <CarouselPrevArrow carouselRef={carouselRef} />
                                <CarouselNextArrow carouselRef={carouselRef} />
                            </div> */}
                        </div>
                        <Carousel
                            ref={carouselRef}
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container-with-dots"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            // customLeftArrow={<CustomArrow direction='left' />}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 3,
                                    partialVisibilityGutter: 40
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1,
                                    partialVisibilityGutter: 30
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 30
                                }
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            {vietnamDataList.map(({ brief, image, title }, index) =>
                                <div className='flex flex-col gap-7 bg-white w-fit' key={index}>
                                    <Image alt='data' src={image} style={{
                                        width: '100%',
                                        height: 'auto'
                                    }} />
                                    <div className='flex flex-col gap-4 px-8'>
                                        <span className='w-full font-semibold text-[17px]  leading-snug lg:text-[24px] lg:w-96'>{title}</span>
                                        <span className='w-full text-[#868681] text-[14px] lg:text-[16px] lg:w-96'>{brief}</span>
                                    </div>
                                    <div className='flex justify-between px-10 border-t-[1px] border-t-[#DDDDDD] py-3'>
                                        <Image alt='logo' src={Logo} style={{ width: isMobile ? 50 : 80, height: isMobile ? 30 : 50 }} />
                                        <div className='flex gap-3 items-center'>
                                            <span className='text-secondary font-semibold text-[14px] lg:text-base'>Read More</span>
                                            <GoArrowRight color='6DBB4A' />

                                        </div>
                                    </div>
                                </div>)}
                            {/* <div>Item 1</div>
                            <div>Item 2</div>
                            <div>Item 3</div>
                            <div>Item 4</div> */}
                        </Carousel>
                        {isMobile && <div className='flex  mt-[68px] w-full justify-between'>
                            <CustomArrow onClick={() => carouselRef.current?.previous(1)} direction='left' width={45} height={45} />
                            <CustomArrow onClick={() => carouselRef.current?.next(1)} direction='right' width={45} height={45} />
                        </div>}
                        {/* <StyledCarousel ref={carouselRef} infinite={true} dots={false}>
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
                        </StyledCarousel> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
