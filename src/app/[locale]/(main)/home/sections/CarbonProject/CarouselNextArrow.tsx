
import Image from 'next/image'
import RightArrow from './images/right_arrow_circle.png'
import { CarouselRef } from 'antd/es/carousel'
interface IProps {
    carouselRef: React.RefObject<CarouselRef>
    width?: number
    height?: number
}
export const CarouselNextArrow = ({ carouselRef, width = 45, height = 45 }: IProps) => {
    const onNext = () => {
        carouselRef.current?.next()
    }
    return <Image alt='left-arrow' src={RightArrow} onClick={onNext} style={{
        width,
        height,
        cursor: 'pointer'
    }} />
}