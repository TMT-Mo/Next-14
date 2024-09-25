import Image from 'next/image'
import React from 'react'
import FieldImage from '@/assets/fields.png'
import DotBackground from '@/assets/long_dot_line.png'
import { LeafTitle } from '@/components/LeafTitle'
import { Col, Row } from 'antd'

export const CarbonProject = () => {
    return (
        <div className='relative flex flex-col'>
            <Row className='pb-20'>
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
        </div>
    )
}
