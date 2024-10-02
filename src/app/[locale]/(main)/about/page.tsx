import { BannerPage } from "@/components/BannerPage";
import React from "react";
import BannerDesktop from "./image/about_carousel.png"; // Desktop image
import BannerMobile from "./image/about_carousel_mobile.png"; // Mobile image
import { CarbonImpact } from "./CarbonImpact";

export default function AboutPage() {
  return (
    <main>
      {/* Banner Section */}
      <section>
        <BannerPage src={BannerDesktop} mobileSrc={BannerMobile}>
          <div className="text-white w-[360px] md:w-[1250px] flex flex-col items-center text-center md:min-h-0  gap-6 md:gap-10 md:p-0 md:items-center md:text-center pt-[400px]">
            {/* Mobile-specific centered content */}
            <span className="uppercase text-[16px] md:text-[21px]">
              about us
            </span>
            <h1 className="text-white text-[32px] md:text-[73px] font-bold leading-tight md:leading-[80px]">
              We’re On A Transformative Quest
            </h1>
            <span className="text-[16px] md:text-[18px]  md:max-w-[610px]">
              Enhancing the quality of life for rural populations, empowering
              women, and combating climate change through sustainable, inclusive
              solutions.
            </span>
          </div>
        </BannerPage>
      </section>

      {/* Carbon Impact Section */}
      <section className="pt-[80px] md:pt-[120px]">
        <CarbonImpact />
      </section>
    </main>
  );
}
