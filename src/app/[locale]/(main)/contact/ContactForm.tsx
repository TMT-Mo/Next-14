'use client'
import React from 'react'
import Logo from '@/assets/bcg_logo.png'
import Image from 'next/image'
import { LeafTitle } from '@/components/LeafTitle'
import { Form, Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { Input } from 'postcss'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'
import DoubleArrow from '@/icons/DoubleArrow.svg?icon'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import MailBox from '@/icons/email.svg?icon'
import PhoneIcon from '@/icons/phone_white.svg?icon'
import LocationMark from '@/icons/location_mark.svg?icon'
export const ContactForm = () => {
    return (
        <div className='container mx-auto '>
            <div className='relative mx-auto flex drop-shadow-2xl w-fit'>
                <div className='absolute w-full top-1/2 left-0 flex justify-between'>

                    <div className=' bg-secondary h-20 w-20 '></div>
                    <div className=' relative bg-heavy-green -translate-y-80'>
                        <div className='bg-secondary w-[53px] h-[53px] absolute -top-[26px] -translate-x-6' ></div>

                        <div className='flex flex-col gap-[50px] text-white px-28 pt-20 pb-64'>
                            <span className='text-2xl font-bold'>Info</span>
                            <div className='flex flex-col gap-16 '>
                                <div className='flex gap-4'>
                                    <MailBox />
                                    <span>info@bcgeco.com</span>
                                </div>
                                <div className='flex gap-4'>
                                    <PhoneIcon />
                                    <span>(84-26) 3 852 815</span>
                                </div>
                                <div className='flex gap-4 w-64'>
                                    <LocationMark />
                                    <span>56 Ha Huy Tap Street,Nam Dinh City, Nam Dinh, 754000 Vietnam</span>
                                </div>
                            </div>
                        </div>

                        <div className='absolute bg-secondary bottom-0 left-1/2 -translate-x-1/2 translate-y-3 h-6 w-60' ></div>
                    </div>
                </div>
                <div className='flex flex-col bg-white pl-28 pr-64 pt-16 pb-8'>
                    <Image alt='logo' src={Logo} />
                    <LeafTitle className='text-4xl mb-12 mt-16'>Contact Us</LeafTitle>
                    <Form
                        layout="vertical"
                        style={{ maxWidth: 452, width: 452 }}

                    >
                        <Form.Item label={<span className='text-[16px] text-black'>Name</span>}>
                            <CustomInput className='w-full h-14' /></Form.Item>
                        <Form.Item label={<span className='text-[16px] text-black'>Email</span>}>
                            <CustomInput className='w-full h-14' /></Form.Item>
                        <Form.Item label={<span className='text-[16px] text-black'>Message</span>}>
                            <TextArea className='w-full rounded-none ' rows={7} />
                        </Form.Item>
                        <Form.Item >
                            <CustomButton className='w-full'>
                                <div className='flex gap-4 items-center'>
                                    <span className='font-medium text-[17px]'>Submit</span>
                                    <DoubleArrow className='translate-y-0.5' />
                                </div>
                            </CustomButton>
                        </Form.Item>
                    </Form>
                </div>
                <div className='bg-[#CDCDCD] w-[120px]'></div>
                <div className='bg-primary w-[214px]' ></div>
            </div>
        </div>
    )
}
