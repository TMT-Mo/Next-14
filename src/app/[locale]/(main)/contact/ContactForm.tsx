"use client";
import React from "react";
import Logo from "@/assets/bcg_logo.png";
import Image from "next/image";
import { LeafTitle } from "@/components/LeafTitle";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import DoubleArrow from "@/icons/DoubleArrow.svg?icon";
import MailBox from "@/icons/email.svg?icon";
import PhoneIcon from "@/icons/phone_white.svg?icon";
import LocationMark from "@/icons/location_mark.svg?icon";
import useDeviceDetection from "@/hooks/useDeviceDetection";

export const ContactForm = () => {
  const { isDesktop } = useDeviceDetection();
  return (
    <div className="container mx-auto ">
      <LeafTitle className="text-4xl mb-12 mt-16 xl:hidden block">
        Contact Us
      </LeafTitle>
      <div className="relative w-full flex flex-col-reverse xl:drop-shadow-2xl xl:w-fit xl:flex-row xl:mx-auto">
        <div className="absolute w-full top-0 translate-y-96 left-0 flex justify-center xl:justify-between xl:top-1/2 xl:translate-y-0">
          <div className=" bg-secondary hidden xl:block w-20 h-20"></div>
          <div className=" relative bg-heavy-green top-0 -translate-y-80">
            <div className="bg-secondary w-5 h-5 absolute right-1/2 translate-x-1/2 -top-[13px] xl:-top-[26px] xl:-translate-x-6 xl:w-[53px] xl:h-[53px] xl:left-0"></div>

            <div className="flex flex-col  text-white text-center px-14 pt-8  gap-4 pb-8 xl:pb-64 xl:px-28 xl:pt-20 xl:gap-[50px] xl:text-start">
              <span className="text-2xl font-bold">Info</span>
              <div className="flex flex-col gap-10 xl:gap-16 ">
                <div className="flex flex-col items-center gap-4 xl:flex-row xl">
                  <MailBox />
                  <span>info@bcgeco.com</span>
                </div>
                <div className="flex flex-col items-center gap-4 xl:flex-row xl">
                  <PhoneIcon />
                  <span>(84-26) 3 852 815</span>
                </div>
                <div className="flex flex-col items-center gap-4 w-64 xl:flex-row xl">
                  <LocationMark />
                  <span>
                    56 Ha Huy Tap Street,Nam Dinh City, Nam Dinh, 754000 Vietnam
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute bg-secondary bottom-0 left-1/2 -translate-x-1/2 translate-y-3 h-6 w-60"></div>
          </div>
        </div>
        <div className="flex flex-col bg-white items-center pt-44 pb-8 px-4 xl:pl-28 xl:pr-64 xl:h-full xl:pt-16 ">
          <Image alt="logo" src={Logo} className="hidden xl:block" />
          <LeafTitle className="text-4xl mb-12 mt-16 hidden xl:block">
            Contact Us
          </LeafTitle>
          <Form
            layout="vertical"
            style={{ width: isDesktop ? 452 : "-webkit-fill-available" }}

            // className='w-screen '
          >
            <Form.Item
              label={<span className="text-[16px] text-black">Name</span>}
            >
              <CustomInput className="w-full h-14" />
            </Form.Item>
            <Form.Item
              label={<span className="text-[16px] text-black">Email</span>}
            >
              <CustomInput className="w-full h-14" />
            </Form.Item>
            <Form.Item
              label={<span className="text-[16px] text-black">Message</span>}
            >
              <TextArea className="w-full rounded-none " rows={7} />
            </Form.Item>
            <Form.Item>
              <CustomButton className="w-full">
                <div className="flex gap-4 items-center">
                  <span className="font-medium text-[17px]">Submit</span>
                  <DoubleArrow className="translate-y-0.5" />
                </div>
              </CustomButton>
            </Form.Item>
          </Form>
        </div>
        <div className="bg-[#CDCDCD] h-[72px] xl:w-[120px] xl:h-auto"></div>
        <div className="bg-primary h-[260px] xl:w-[214px] xl:h-auto"></div>
      </div>
    </div>
  );
};
