
import Image from 'next/image'
import LeftArrow from '../images/left_arrow_circle.png'
import { CarouselRef } from 'antd/es/carousel'
interface IProps {
    carouselRef: React.RefObject<CarouselRef>
    width?: number
    height?: number
}
export const CarouselPrevArrow = ({ carouselRef, width = 67, height = 67 }: IProps) => {
    const onPrev = () => {
        carouselRef.current?.prev()
    }
    return <Image alt='left-arrow' src={LeftArrow} onClick={onPrev} style={{
        width,
        height,
        cursor: 'pointer'
    }} />
}