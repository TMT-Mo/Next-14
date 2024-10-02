import { LeafTitle } from "@/components/LeafTitle";
import { Row, Col } from "antd";
import React from "react";
import Image from "next/image";
import CarbonImpactImg from "./image/global-impact.png";
import CarbonContent from "./image/carbon-content.png";
import MobileBackground from "./image/about-mobile-bg.png";

export const CarbonImpact = () => {
  return (
    <>
      <Row className="pb-[100px] md:pb-[500px]">
        <Col xs={1} sm={2} md={2} lg={2}></Col>
        <Col xs={22} sm={20} md={20} lg={20}>
          <div>
            <div className="flex flex-col md:flex-row w-full gap-[20px] md:gap-[104px] justify-center">
              <Image
                src={CarbonImpactImg}
                width={300}
                height={387.03}
                className="w-full md:w-[609.37px] h-auto"
                alt="Carbon Impact"
              />
              <div className="md:max-w-[550px] flex flex-col items-center gap-8 mt-0 md:mt-6">
                <LeafTitle className=" md:max-w-[600px] w-[360px]  text-center md:text-center">
                  Exceptional Capabilities with Global Impact
                </LeafTitle>
                <p className="md:max-w-[550px] text-[#868681] text-justify md:text-justify ">
                  Carbon credits represent measurable, verifiable reductions in
                  emissions achieved through certified climate action projects.{" "}
                  <br /> <br />
                  These initiatives not only cut, avoid, or capture greenhouse
                  gas (GHG) emissions but also deliver a range of additional
                  benefits, such as empowering communities, preserving
                  ecosystems, restoring forests, and reducing fossil fuel
                  dependence. <br />
                  <br />
                  To be certified, projects must meet stringent criteria set by
                  third-party agencies and undergo expert review by leading
                  carbon certification standards, such as Verra&apos;s Verified
                  Carbon Standard or the Gold Standard.
                  <br />
                  <br />
                  Once purchased, carbon credits are permanently retired,
                  ensuring they cannot be reused.
                </p>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={1} sm={2} md={2} lg={2}></Col>
      </Row>

      {/* New Layout for Mobile */}
      <div className="relative bg-[#EDEDED] md:hidden pb-20">
        {/* Hidden on desktop */}
        {/* Image in the background */}
        <div className="absolute inset-0 z-0 top-[-20px]">
          <Image src={MobileBackground} alt="Background Image" />
        </div>

        {/* Green rectangle on top */}
        <div className="absolute top-[-50px] left-0 right-0 z-20 mx-auto w-[200px] h-[70px] bg-[#5BA43B]"></div>

        <div className="relative z-10 ">
          {/* White background above the green section */}
          <div className="bg-white h-[20px] mx-[25px] "></div>

          {/* Green section */}
          <div className="bg-[#6DBB4A] text-white text-center font-bold py-4 px-6 mx-[25px]">
            <p>
              We are a globally recognized carbon project developer dedicated to
              improving the lives of vulnerable communities worldwide.
            </p>
          </div>

          {/* White section */}
          <div className="bg-white text-black text-center py-4 px-6 h-auto mx-[25px]">
            <p className="pt-[50px] pb-5">
              Since 2008, we've been scaling carbon reduction and clean energy
              initiatives, producing high-quality carbon credits with meaningful
              benefits for the world's poorest populations.
            </p>
            <p className="py-5">
              Our focus is on driving a sustained transition to climate
              resilience, particularly for those whose health and livelihoods
              are most threatened by climate change. Through carbon finance, we
              aim to enable a long-term shift toward sustainable solutions.
            </p>
            <p className="pt-5 pb-[100px]">
              Our projects are designed to create lasting change for the planet,
              its people, and their prosperity by transforming lives, behaviors,
              and technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative bg-[#EDEDED] h-[980px] hidden md:block">
        {" "}
        {/* Hidden on mobile */}
        <Image alt="" src={CarbonContent} className="-translate-y-80" />
      </div>
    </>
  );
};
