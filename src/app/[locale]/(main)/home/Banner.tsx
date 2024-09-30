'use client'
import { Carousel } from 'antd'
import React from 'react'
import styled from 'styled-components';
import homeBanner from '@/assets/carousel_home.jpg'
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import DoubleArrow from '@/icons/DoubleArrow.svg?icon'
import useDeviceDetection from '@/hooks/useDeviceDetection';

export const Banner = () => {
  const { isMobile } = useDeviceDetection()

  const StyledCarousel = styled(Carousel)`
    .slick-dots {
      width: ${isMobile ? 'fit-content' : '16px'} !important;
      height: 11px;
      margin: auto;
      margin-bottom: 27px;
    }
    .slick-dots li {
      width: 11px !important;
      height: 11px;
    }
    .slick-dots li button {
      width: 100% !important;
      border-radius: 0px;
      background: #9DD05C !important;
      opacity: 1 !important;
      height: 11px;
    }

    .slick-dots .slick-active button{
      background: transparent !important;
      border: #9DD05C 2px solid;
      height: 11px !important;
    }

    .slick-dots{
      gap: 20px !important;
    }
`
  // console.log('isMobile', isMobile)
  // console.log('isDesktop', isDesktop)
  // if (typeof window == "undefined") {
  //   console.log("Application is on server side");
  // } else {
  //   alert("Application is on client side");
  // }
  return (
    <StyledCarousel dotPosition={isMobile ? 'bottom' : 'right'} infinite={false}>
      <div className='relative !flex justify-center items-center '>
        <div className='absolute m-auto flex flex-col gap-20 justify-center items-center'>
          <h1 className='text-white text-4xl font-bold text-center lg:leading-[80px] lg:text-6xl'>Comprehensive Transparency <br /> in Carbon Initiatives</h1>
          <CustomButton><div className='flex gap-4 items-center'>
            <span className='font-medium text-[17px]'>Learn more</span>
            <DoubleArrow className='translate-y-0.5' />
          </div></CustomButton>
        </div>

        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: '85h',
            minHeight: '485px'
          }}
        />
      </div>
      <div className='relative'>
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: isMobile ? '485px' : '85h',
          }}
        />
      </div>
      <div className='relative'>
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: isMobile ? '485px' : '85h',
          }}
        />
      </div>
      <div className='relative'>
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: isMobile ? '485px' : '85h',
          }}
        />
      </div>
    </StyledCarousel>
  )
}
