import { LeafTitle } from "@/components/LeafTitle";
import { Row, Col } from "antd";
import React from "react";
import Image from "next/image";
import CarbonImpactImg from "./image/global-impact.png";
import CarbonContent from "./image/carbon-content.png";

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
      <div className="relative bg-[#EDEDED] h-[980px]">
        <Image alt="" src={CarbonContent} className="-translate-y-80" />
      </div>
    </>
  );
};
