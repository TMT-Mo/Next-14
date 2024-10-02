import { BannerPage } from "@/components/BannerPage";
import React from "react";
import BannerDesktop from "./image/contact_carousel.png"; // Desktop image
import BannerMobile from "./image/contact_carousel_mobile.png";
import { ContactForm } from "./ContactForm";
export default function ContactPage() {
  return (
    <main>
      <section>
        <BannerPage src={BannerDesktop} mobileSrc={BannerMobile}>
          <div className="text-white w-[320px] md:w-[1250px] flex flex-col items-center text-center md:min-h-0  gap-6 md:gap-10 md:p-0 md:items-center md:text-center">
            <span className="uppercase text-[16px] md:text-[21px]">
              contact us
            </span>
            <h1 className="text-white max-width text-[32px] md:text-[73px] font-bold leading-tight md:leading-[80px]p">
              We Want To Hear From You
            </h1>
          </div>
        </BannerPage>
      </section>
      <section className="pb-[30px]">
        <ContactForm />
      </section>
    </main>
  );
}
