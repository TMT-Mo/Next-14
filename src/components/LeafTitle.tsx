import React from 'react'
import LeafIcon from '@/icons/Leaf.svg?icon'

interface Props {
    children?: React.ReactNode
    leafDirection?: 'left' | 'right'
    className?: string
}

export const LeafTitle = ({ children, leafDirection, className }: Props) => {
    return (
        <div className={`flex flex-col gap-4 text-center w-full lg:w-fit lg:text-start ${className}`}>
            <LeafIcon className={`self-center ${leafDirection == 'right' ? 'lg:self-end' : 'lg:self-start'}`} />
            <h1 className='font-bold text-[22px] lg:text-5xl'>{children}</h1>
        </div>
    )
}
