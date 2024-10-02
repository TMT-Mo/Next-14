'use client'
import { Carousel } from "antd";
import React, { useRef } from "react";
import styles from "@/app/[locale]/(main)/home/style.module.scss";
import { vietnamDataList } from "../sections/VietNamData/data";
import Image from "next/image";
import { CarouselRef } from "antd/es/carousel";
import { CarouselPrevArrow } from "../components/CarouselPrevArrow";
import { CarouselNextArrow } from "../components/CarouselNextArrow";

export const BlogCarousel = () => {
    const carouselRef = useRef<CarouselRef>(null)

    return (
        <div className="relative">
            <Carousel
                className={`${styles.blogCarousel} flex justify-center`}
                dots={false}
                ref={carouselRef}
            // prevArrow={
            //     <Image alt="left" src={LeftArrow} style={{ width: 40, height: 40 }} />
            // }
            // nextArrow={
            //     <Image alt="right" style={{ width: 40, height: 40 }} src={RightArrow} />
            // }
            >
                {vietnamDataList.map(({ id, title, image }) => (
                    <div key={id} className="flex justify-center w-full py-7">

                        <div className="flex w-fit gap-4 items-center mx-auto">
                            <Image alt={title} src={image} style={{ width: 45, height: 45 }} />
                            <div className="!max-w-44">{title}</div>
                        </div>
                    </div>
                ))}

            </Carousel>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full p-4">
                <CarouselPrevArrow carouselRef={carouselRef} width={39} height={39} className="!bg-black/20" />
                <CarouselNextArrow carouselRef={carouselRef} width={39} height={39} className="!bg-black/20" />
            </div>
        </div>

    );
};
