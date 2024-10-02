'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useRef } from 'react'
import FieldImage from '@/assets/fields.png'
import DotBackground from '@/assets/long_dot_line.png'
import DotBackgroundMobile from './images/Dot_bg_mobile.png'
import { LeafTitle } from '@/components/LeafTitle'
import { Carousel, Col, Row } from 'antd'
import ContributeImg from './images/contribute.png'
import EnvironmentImg from './images/environment.png'
import GreenImg from './images/green.png'
import RegulationImg from './images/regulation.png'
import TaxImg from './images/tax.png'
import styles from '../../style.module.scss'
import styled from 'styled-components'
import { CarouselRef } from 'antd/es/carousel'
import useDeviceDetection from '@/hooks/useDeviceDetection'
import { CarouselNextArrow } from './CarouselNextArrow'
import { CarouselPrevArrow } from './CarouselPrevArrow'
interface IProjects {
    image: StaticImageData,
    name: string
}

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

const projectList: IProjects[] = [
    {
        image: ContributeImg,
        name: 'Contribute back to localities'
    },
    {
        image: EnvironmentImg,
        name: 'Environment'
    },
    {
        image: TaxImg,
        name: 'Tax'
    },
    {
        image: RegulationImg,
        name: 'Regulation'
    },
    {
        image: GreenImg,
        name: 'Green Community Building'
    },
]

export const CarbonProject = () => {
    const carouselRef = useRef<CarouselRef>(null)
    const { isMobile } = useDeviceDetection()
    return (
        <div className='relative flex flex-col'>
            <Row className='pb-6 lg:pb-48'>
                <Col span={isMobile ? 0 : 4}></Col>
                <Col span={isMobile ? 24 : 16}>
                    <LeafTitle className='whitespace-nowrap'>Why develop carbon projects?</LeafTitle>
                </Col>
                <Col span={isMobile ? 0 : 4}></Col>
            </Row>
            <div className='relative flex flex-col'>

                <div className='h-[60px] bg-primary'></div>
                <Image src={FieldImage} alt='' style={{
                    height: isMobile ? 636 : '100%',
                    objectFit: 'cover'
                }} />
                <Image src={isMobile ? DotBackgroundMobile : DotBackground} alt='' className='absolute top-8 w-full' />
                {/* <Image src={DotBackground} alt='' className='absolute top-5' /> */}
                <div className='absolute  transform -translate-x-1/2  left-1/2 w-full top-36 md:-top-20'>
                    {!isMobile && <div className='flex gap-5 w-fit mx-auto'>
                        {projectList.map(({ image, name }) =>
                            <div key={name} className={`flex flex-col w-fit relative p-5 gap-7 text-center items-center mx-auto`}>
                                <div className={`${styles.projectBackground} w-full h-full z-10`}></div>
                                <div className='relative z-50'>
                                    <Image alt={name} src={image} style={{
                                        width: 175,
                                        height: 270
                                    }} />
                                </div>
                                <span className='text-white font-medium text-xl z-20 h-20 w-min'>{name}</span>
                                <div className='bg-white h-[2px] w-5 '></div>
                            </div>
                        )}
                    </div>}
                    {isMobile && <>
                        <StyledCarousel ref={carouselRef} infinite={true} dots={false} className='w-screen'>
                            {projectList.map(({ image, name }) =>
                                <div key={name}>
                                    <div className={`flex flex-col w-fit relative p-5 gap-7 text-center items-center mx-auto`}>
                                        <div className={`${styles.projectBackground} w-full h-full z-10`}></div>
                                        <div className='relative z-50'>
                                            <Image alt={name} src={image} style={{
                                                width: 175,
                                                height: 270
                                            }} />
                                        </div>
                                        <span className='text-white font-medium text-xl z-20 h-20'>{name}</span>
                                        <div className='bg-white h-[2px] w-5 '></div>
                                    </div>
                                </div>
                            )}

                        </StyledCarousel>
                        <div className='flex justify-around'>
                            <CarouselPrevArrow carouselRef={carouselRef} width={45} height={45} />
                            <CarouselNextArrow carouselRef={carouselRef} width={45} height={45} />
                        </div>
                    </>}
                </div>
            </div>
        </div>
    )
}
