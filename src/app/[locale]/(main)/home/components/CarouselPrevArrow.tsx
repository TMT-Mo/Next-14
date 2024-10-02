

import LeftArrow from '@/icons/left-arrow.svg?icon'
import { CarouselRef } from 'antd/es/carousel'
interface IProps {
    carouselRef: React.RefObject<CarouselRef>
    width?: number
    height?: number
    className?: string
}
export const CarouselPrevArrow = ({ carouselRef, width = 67, height = 67, className }: IProps) => {
    const onPrev = () => {
        carouselRef.current?.prev()
    }
    return <div className={`flex justify-center items-center rounded-full bg-black/45 border-white border ${className}`} onClick={onPrev} style={{ width, height }}>
        <LeftArrow />
    </div>
    // <Image alt='left-arrow' src={LeftArrow} onClick={onPrev} style={{
    //     width,
    //     height,
    //     cursor: 'pointer'
    // }} />
}