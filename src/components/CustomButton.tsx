import { Button } from 'antd'
import { BaseButtonProps } from 'antd/es/button/button'
import React from 'react'

interface Props extends BaseButtonProps {
    children?: React.ReactNode
}

const CustomButton = ({ children, className, ...props }: Props) => {
    return (
        <Button className={`!bg-primary !rounded-none !border-primary w-fit !py-6 !px-8 ${className}`} {...props}>
            {children}
        </Button>
    )
}

export default CustomButton