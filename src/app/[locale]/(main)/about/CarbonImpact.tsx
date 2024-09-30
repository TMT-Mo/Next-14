import { LeafTitle } from '@/components/LeafTitle'
import { Row, Col } from 'antd'
import React from 'react'
import Image from 'next/image'
import CarbonImpactImg from './image/global-impact.png'
import CarbonContent from './image/carbon-content.png'
export const CarbonImpact = () => {
    return (
        <>
            <Row className='pb-[500px]'>
                <Col span={2}></Col>
                <Col span={20}>
                    <div >
                        <div className='flex w-full items-center gap-[104px] justify-center'>
                            <Image src={CarbonImpactImg} width={609.37} height={787.03} alt='' />
                            <div className='flex flex-col gap-8'>
                                <LeafTitle className='max-w-[600px]'>Exceptional Capabilities with Global Impact</LeafTitle>
                                <p className='max-w-[570px] text-[#868681] '>
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
            <div className='relative bg-[#EDEDED] h-[980px]'>
                <Image alt='' src={CarbonContent} className='-translate-y-80' />
            </div>
        </>
    )
}
