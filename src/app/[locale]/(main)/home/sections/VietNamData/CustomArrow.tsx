import Image from "next/image";
import { ArrowProps } from "react-multi-carousel";
import LeftArrow from "./images/left_arrow_circle.png";
import RightArrow from "./images/right_arrow_circle.png";

interface ICustomArrow extends ArrowProps {
    direction: "left" | "right";
    width: number;
    height: number;
}

export const CustomArrow: React.FC<ICustomArrow> = ({
    onClick,
    direction,
    height,
    width,
}) => {
    return (
        <Image
            alt="left-arrow"
            src={direction == "right" ? RightArrow : LeftArrow}
            onClick={onClick}
            style={{
                width,
                height,
                cursor: "pointer",
            }}
        />
    );
};