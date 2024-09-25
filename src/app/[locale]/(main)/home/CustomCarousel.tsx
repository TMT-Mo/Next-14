'use client'
import { Carousel } from 'antd'
import React from 'react'
import styled from 'styled-components';
import homeBanner from '@/assets/carousel_home.jpg'
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import DoubleArrow from '@/icons/DoubleArrow.svg?icon'

const StyledCarousel = styled(Carousel)`
    .slick-dots, .slick-dots li {
      width: 16px !important;
    }
    .slick-dots li button {
      width: 100% !important;
      border-radius: 0px;
      background: #9DD05C !important;
      opacity: 1 !important
    }

    .slick-dots .slick-active button{
      background: transparent !important;
      border: #9DD05C 2px solid;
    }

    .slick-dots{
      gap: 20px !important;
    }
`
export const CustomCarousel = () => {
  return (
    <StyledCarousel dotPosition="right" infinite={false}>
      <div className='relative !flex justify-center items-center '>
        <div className='absolute m-auto flex flex-col gap-20 justify-center items-center'>
          <h1 className='text-white text-6xl font-bold text-center leading-[80px]'>Comprehensive Transparency <br /> in Carbon Initiatives</h1>
          <CustomButton><div className='flex gap-4 items-center'>
            <span className='font-medium text-[17px]'>Learn more</span>
            <DoubleArrow className='translate-y-0.5' />
          </div></CustomButton>
        </div>
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: '85vh',
          }}
        />
      </div>
      <div className='relative'>
        {/* <Image alt='' src={aboutBanner} quality={100} style={{
          width: ' 100%',
          height: 600,
        }} /> */}
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: '85vh',
          }}
        />
      </div>
      <div className='relative'>
        {/* <Image alt='' src={contactBanner} quality={100} style={{
          width: ' 100%',
          height: 600,
        }} /> */}
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: '85vh',
          }}
        />
      </div>
      <div className='relative'>
        {/* <Image alt='' src={contactBanner} quality={100} style={{
          width: ' 100%',
          height: 600,
        }} /> */}
        <Image alt='' src={homeBanner} quality={100}
          style={{
            width: ' 100%',
            height: '85vh',
          }}
        />
      </div>
    </StyledCarousel>
  )
}
