import Image, { StaticImageData } from 'next/image'
import React from 'react'
import CO2 from '@/assets/tree_co2.png'
import { LeafTitle } from '@/components/LeafTitle'
import GreenContainer from '@/assets/green_gradient_container.png'
import { Row, Col } from 'antd'
import TreeIcon from '@/assets/tree.png'
import CO2Icon from '@/assets/co2.png'
import LeafTree from '@/assets/leaf_tree.png'
import EnergyIcon from '@/assets/energy.png'
import CookStoveIcon from '@/assets/cookstove.png'

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

export const CarbonCredit = () => {
    return (
        <>
            <Row className='pb-20'>
                <Col span={4}></Col>
                <Col span={16}>
                    <div >
                        <div className='flex w-full items-center gap-[104px] justify-center'>
                            <Image src={CO2} width={609.37} height={787.03} alt='' />
                            <div className='flex flex-col gap-8'>
                                <LeafTitle>What are Carbon Credits?</LeafTitle>
                                <p className='max-w-[550px] text-[#868681] '>
                                    Carbon credits represent measurable, verifiable reductions in emissions achieved through certified climate action projects. <br /> <br />

                                    These initiatives not only cut, avoid, or capture greenhouse gas (GHG) emissions but also deliver a range of additional benefits, such as empowering communities, preserving ecosystems, restoring forests, and reducing fossil fuel dependence. <br /><br />

                                    To be certified, projects must meet stringent criteria set by third-party agencies and undergo expert review by leading carbon certification standards, such as Verra's Verified Carbon Standard or the Gold Standard.<br /><br />

                                    Once purchased, carbon credits are permanently retired, ensuring they cannot be reused.
                                </p>
                            </div>
                        </div>
                        {/* <Image alt='' src={GreenContainer} className='ml-32 absolute' /> */}
                    </div></Col>
                <Col span={4}></Col>
            </Row>
            <Row >
                <Col span={4}></Col>
                <Col span={20}>
                    <div className='relative'>
                        <Image alt='' src={GreenContainer} />
                        <div className='absolute flex gap-10 items-center top-1/2  transform  -translate-y-1/2 left-[118px]'>
                            <span className='text-white font-semibold text-[25px]'>Types of projects <br />that generate <br /> carbon credits</span>
                            <div className='flex gap-[135px] font-semibold text-[18px] pt-8'>
                                {projectList.map(({ image, name }) => <div className='flex flex-col items-center gap-2 text-center text-white'>
                                    <Image alt='' src={image} />
                                    <span className='w-[80px]'>{name}</span>
                                </div>)}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>

    )
}
