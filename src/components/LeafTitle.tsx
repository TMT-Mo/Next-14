import React from 'react'
import LeafIcon from '@/icons/Leaf.svg?icon'

interface Props {
    children?: React.ReactNode
}

export const LeafTitle = ({ children }: Props) => {
    return (
        <div className='flex flex-col gap-4'>
            <LeafIcon />
            <h1 className='font-bold text-5xl'>{children}</h1>
        </div>
    )
}
