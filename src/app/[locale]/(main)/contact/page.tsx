import { BannerPage } from '@/components/BannerPage'
import React from 'react'
import Banner from '@/assets/contact_carousel.png'
export default function ContactPage() {
  return (
    <main>
      <section>
        <BannerPage src={Banner}>
          <div className='flex flex-col items-center text-white text-center gap-10'>
            <span className='uppercase text-[21px]'>contact us</span>
            <h1 className='text-white text-[73px] font-bold text-center leading-[80px] whitespace-nowrap'>We Want To Hear From You</h1>
          </div>
        </BannerPage>

      </section>
    </main>
  )
}
