
import RightArrow from '@/icons/right-arrow.svg?icon'
import { CarouselRef } from 'antd/es/carousel'
interface IProps {
    carouselRef: React.RefObject<CarouselRef>
    width?: number
    height?: number
    className?: string
}
export const CarouselNextArrow = ({ carouselRef, width = 45, height = 45, className }: IProps) => {
    const onNext = () => {
        carouselRef.current?.next()
    }
    return <div className={`flex justify-center items-center rounded-full bg-black/45 border-white border ${className}`} onClick={onNext} style={{ width, height }}>
        <RightArrow />
    </div>
}