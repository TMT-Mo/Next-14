import { Input, InputProps } from 'antd'
import React from 'react'


const CustomInput = ({ className, ...props }: InputProps) => {
    return (
        <Input className={`rounded-none ${className}`} {...props}>
        </Input>
    )
}

export default CustomInput