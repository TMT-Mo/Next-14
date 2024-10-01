import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface IProps {
  children?: React.ReactNode;
  src: StaticImageData;
  mobileSrc?: StaticImageData; // Optional prop for mobile image
}

export const BannerPage = ({ src, mobileSrc, children }: IProps) => {
  return (
    <div className="relative">
      <picture>
        {mobileSrc && (
          <source media="(max-width: 767px)" srcSet={mobileSrc.src} />
        )}
        <Image alt="" src={src} layout="responsive" />
      </picture>
      <div className="absolute top-1/2  transform -translate-x-1/2 -translate-y-2/3 left-1/2">
        {children}
      </div>
      <div className="h-[13px] bg-secondary"></div>
    </div>
  );
};
