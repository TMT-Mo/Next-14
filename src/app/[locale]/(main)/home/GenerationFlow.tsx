import { LeafTitle } from '@/components/LeafTitle'
import React from 'react'
import GenerationFlowImg from '@/assets/generationFlow.png'
import Image from 'next/image'
export const GenerationFlow = () => {
    return (
        <div className='container mx-auto space-y-11 flex flex-col items-end '>
            <LeafTitle leafDirection='right' className='mr-10'>
                How to generate carbon credits
            </LeafTitle>
            <Image alt='generation flow' src={GenerationFlowImg} />
        </div>
    )
}

