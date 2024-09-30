import Image, { StaticImageData } from 'next/image'
import React from 'react'
import FieldImage from '@/assets/fields.png'
import DotBackground from '@/assets/long_dot_line.png'
import { LeafTitle } from '@/components/LeafTitle'
import { Col, Row } from 'antd'
import ContributeImg from './images/contribute.png'
import EnvironmentImg from './images/environment.png'
import GreenImg from './images/green.png'
import RegulationImg from './images/regulation.png'
import TaxImg from './images/tax.png'
import styles from './style.module.scss'
interface IProjects {
    image: StaticImageData,
    name: string
}

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
    return (
        <div className='relative flex flex-col'>
            <Row className='pb-48'>
                <Col span={4}></Col>
                <Col span={16}>
                    <LeafTitle>Why develop carbon projects?</LeafTitle>
                </Col>
                <Col span={4}></Col>
            </Row>
            <div className='relative flex flex-col'>

                <div className='h-[60px] bg-primary'></div>
                <Image src={FieldImage} alt='' />
                <Image src={DotBackground} alt='' className='absolute top-5' />
            </div>
            <div className='absolute top-48 transform -translate-x-1/2  left-1/2'>
                <div className='flex gap-5'>
                    {projectList.map(({ image, name }) =>
                        <div className='flex flex-col relative p-5 gap-7 text-center items-center'>
                            <div className={`${styles.projectBackground} `}>
                            </div>
                            <div className='relative w-[175px] h-[270px] z-20'>
                                <Image alt={name} src={image} className='z-20' fill objectFit='container' />
                            </div>
                            <span className='text-white font-medium text-xl z-20 h-20'>{name}</span>
                            <div className='bg-white h-[2px] w-5 '></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
