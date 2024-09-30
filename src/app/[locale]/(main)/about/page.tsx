import { BannerPage } from '@/components/BannerPage'
import React from 'react'
import Banner from '@/assets/about_carousel.png'
import { CarbonImpact } from './CarbonImpact'

export default function AboutPage() {
  return (
    <main>
      <section >
        <BannerPage src={Banner}>
          <div className='flex flex-col items-center text-white text-center gap-10'>
            <span className='uppercase text-[21px]'>about us</span>
            <h1 className='text-white text-[73px] font-bold text-center leading-[80px] whitespace-nowrap'>We’re On A Transformative Quest</h1>
            <span className=' text-[18px] max-w-[610px]'>Enhancing the quality of life for rural populations, empowering women, and combating climate change through sustainable, inclusive solutions.</span>
          </div>
        </BannerPage>

      </section>
      <section className='pt-[120px]'>
        <CarbonImpact />
      </section>
    </main>
  )
}
