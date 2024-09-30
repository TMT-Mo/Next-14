import React from 'react'
import LeafIcon from '@/icons/Leaf.svg?icon'

interface Props {
    children?: React.ReactNode
    leafDirection?: 'left' | 'right'
    className?: string
}

export const LeafTitle = ({ children, leafDirection, className }: Props) => {
    return (
        <div className={`flex flex-col gap-4 w-fit ${className}`}>
            <LeafIcon className={`${leafDirection == 'right' ? 'self-end' : 'self-start'}`} />
            <h1 className='font-bold text-5xl'>{children}</h1>
        </div>
    )
}
