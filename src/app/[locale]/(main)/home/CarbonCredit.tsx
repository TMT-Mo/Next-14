'use client'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import CO2 from '@/assets/tree_co2.png'
import { LeafTitle } from '@/components/LeafTitle'
import { Row, Col } from 'antd'
import TreeIcon from '@/assets/tree.png'
import CO2Icon from '@/assets/co2.png'
import LeafTree from '@/assets/leaf_tree.png'
import EnergyIcon from '@/assets/energy.png'
import CookStoveIcon from '@/assets/cookstove.png'
import useDeviceDetection from '@/hooks/useDeviceDetection'
import styled from 'styled-components'

interface IProject {
    name: string,
    image: StaticImageData
}

const projectList: IProject[] = [
    {
        image: TreeIcon,
        name: 'Forestry',

    },
    {
        image: CO2Icon,
        name: 'Blue Carbon',

    },
    {
        image: LeafTree,
        name: 'Agriculture',

    },
    {
        image: EnergyIcon,
        name: 'Waste to Energy',

    },
    {
        image: CookStoveIcon,
        name: 'Cookstove',

    },
]

const GreenDivMobile = styled.div`
    background: rgb(109,187,74);
    background: linear-gradient(0deg, rgba(109,187,74,1) 0%, rgba(34,68,21,1) 52%);
`
const GreenDivDesktop = styled.div`
    background: rgb(109,187,74);
background: linear-gradient(90deg, rgba(109,187,74,1) 0%, rgba(34,68,21,1) 70%);
`

export const CarbonCredit = () => {
    const { isMobile } = useDeviceDetection()
    return (
        <>
            <Row className='pb-20'>
                <Col span={2}></Col>
                <Col span={20}>
                    <div >
                        <div className='flex flex-col w-full items-center gap-[104px] justify-center lg:flex-row'>
                            <Image src={CO2} width={609.37} height={787.03} alt='' />
                            <div className='flex flex-col gap-8'>
                                <LeafTitle>What are Carbon Credits?</LeafTitle>
                                <p className='max-w-[550px] text-[#868681] text-[15px] lg:text-base'>
                                    Carbon credits represent measurable, verifiable reductions in emissions achieved through certified climate action projects. <br /> <br />

                                    These initiatives not only cut, avoid, or capture greenhouse gas (GHG) emissions but also deliver a range of additional benefits, such as empowering communities, preserving ecosystems, restoring forests, and reducing fossil fuel dependence. <br /><br />

                                    To be certified, projects must meet stringent criteria set by third-party agencies and undergo expert review by leading carbon certification standards, such as Verra&apos;s Verified Carbon Standard or the Gold Standard.<br /><br />

                                    Once purchased, carbon credits are permanently retired, ensuring they cannot be reused.
                                </p>
                            </div>
                        </div>
                        {/* <Image alt='' src={GreenContainer} className='ml-32 absolute' /> */}
                    </div></Col>
                <Col span={2}></Col>
            </Row>
            <Row className='hidden xl:flex'>
                <Col span={4}></Col>
                <Col span={20}>
                    <GreenDivDesktop className='py-12 pl-28'>
                        <div className='flex gap-10'>
                            <span className='text-white font-semibold text-2xl  xl:max-w-52'>Types of projects that generate carbon credits</span>
                            <div className='flex gap-10 2xl:gap-32'>
                                {projectList.map(({ image, name }) =>
                                    <div key={name} className='flex flex-col items-center mt-6 gap-2 text-center text-white'>
                                        <Image alt='' src={image} />
                                        <span className='w-[80px]'>{name}</span>
                                    </div>)}
                            </div>
                        </div>
                    </GreenDivDesktop>
                </Col>
            </Row>
            <GreenDivMobile className='block xl:hidden'>
                <div className='flex flex-col px-[78px] py-[50px]'>
                    <span className='text-white font-semibold text-xl'>Types of projects that generate carbon credits</span>
                    <div className='flex  flex-col gap-11 font-semibold text-[18px] pt-8 max-w-[234px]'>
                        {projectList.map(({ image, name }) => <div key={name} className='flex w-full justify-between items-center gap-10 text-center text-white'>
                            <Image alt='' src={image} style={{ width: isMobile ? 30 : '100%', height: 'auto' }} />
                            <span className='w-[171px] text-start'>{name}</span>
                        </div>)}
                    </div>
                </div>
            </GreenDivMobile>
        </>

    )
}
