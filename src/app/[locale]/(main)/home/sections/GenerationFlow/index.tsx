'use client'
import { LeafTitle } from '@/components/LeafTitle'
import React from 'react'
import GenerationFlowImg from '@/assets/generationFlow.png'
import GenerationFlowMobileImg from './images/generation_flow_mobile.png'
import Image from 'next/image'
import useDeviceDetection from '@/hooks/useDeviceDetection'

export const GenerationFlow = () => {
    const { isMobile } = useDeviceDetection()
    return (
        <div className='container mx-auto space-y-11 flex flex-col items-center lg:items-end '>
            <LeafTitle leafDirection='right' className='mr-0 lg:mr-10'>
                How to generate carbon credits
            </LeafTitle>
            <Image alt='generation flow' src={isMobile ? GenerationFlowMobileImg : GenerationFlowImg} />
        </div>
    )
}

