import { Input, InputProps } from 'antd'
import React from 'react'

interface Props extends InputProps {
}

const CustomInput = ({ className, ...props }: Props) => {
    return (
        <Input className={`rounded-none ${className}`} {...props}>
        </Input>
    )
}

export default CustomInput