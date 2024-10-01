import React from 'react'
import bcgLogo from '@/assets/bcg_logo.png'
import Image from 'next/image'
import PhoneIcon from '@/icons/phone.svg?icon'
import MailIcon from '@/icons/mail.svg?icon'
import { BsArrowRight } from 'react-icons/bs'
import CustomButton from './CustomButton'
import CustomInput from './CustomInput'

const Footer = () => {
    return (
        <footer className='bg-[#224415] relative'>
            <div className=' container mx-auto py-28 px-24'>
                <div className='flex flex-col gap-14 w-full xl:flex-row xl:justify-between xl:gap-0'>
                    <div className='flex flex-col gap-12 lg:gap-[143px] lg:flex-row '>

                        <div className='flex flex-col gap-[32px] text-white'>
                            <Image alt='' src={bcgLogo} width={193.7} height={121.97} quality={100} />
                            <span className='max-w-[332.38px]'>Proactively restore timely alignments
                                after client environmentals</span>
                            <div className='flex flex-col gap-6'>
                                <div className='flex gap-3 items-center'>
                                    <div className='w-[22px] bg-primary h-0.5'></div>
                                    <span className='font-medium'>Contact</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <PhoneIcon />
                                    <span className='font-medium'>+123 (4567) 890</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <MailIcon />
                                    <span className='font-medium'>example@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[30px] text-white pt-[30px]'>
                            <span className='text-2xl font-medium'>Quick links</span>
                            <div className='flex flex-col gap-[13px] '>

                                <div className='flex gap-2 items-center'>
                                    <BsArrowRight />
                                    <span className=''>Home</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <BsArrowRight />
                                    <span className=''>Science</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <BsArrowRight />
                                    <span className=''>Resources</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <BsArrowRight />
                                    <span className=''>About Us</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <BsArrowRight />
                                    <span className=''>Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-fit flex flex-col gap-[30px] pt-[30px]'>
                        <span className='text-2xl font-medium text-white'>Stay Connected</span>
                        <CustomInput className='w-full border-white px-8 py-5 bg-transparent text-white !border-[rgba(255,255,255,0.2)]  placeholder:text-white focus:bg-transparent focus:border-white hover:bg-transparent lg:w-[451.5px]' placeholder='Enter Your E-Mail...' />
                        <CustomButton className='uppercase w-full font-semibold text-[16px]'>Subscribe</CustomButton>
                    </div>
                </div>
            </div>
            <span className='absolute w-full text-[12px] text-white bottom-3 text-center lg:text-base'>
                © Copyright 2024 BCG Eco. All rights reserved by <span className='!text-primary'>BCG Eco</span>
            </span>
        </footer>
    )
}

export default Footer