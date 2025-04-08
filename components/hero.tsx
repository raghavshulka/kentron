"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { color, motion } from "framer-motion";
import { NavBar } from "@/components/navbar";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import banner from "@/public/banner.png"
import { FaBalanceScale } from "react-icons/fa";
export const Hero = () => {


 function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mt-0">
      <ContainerScroll

      >
        <Image
          src={banner}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full "
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}


  const openFormInNewTab = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScJoTxA6TIeY1JwGhb8xwZJQxAAeM_bEsHQfF66l1_Wgcn0Pg/viewform",
      "_blank"
    );
  };

  const learnMore = () => {
    window.open("/learn-more", "_self");
  };

  return (
    <>
      {/* <GridLineHorizontal /> */}
      <video
        className="absolute w-full h-screen object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 80%, transparent 100%)",
        }}
      />
      {/* <GridLineVertical className="absolute h-full blur-[1px] right-[12px] md:right-[41px] opacity-70 md:opacity-80" />
      <GridLineVertical className="absolute h-full blur-[1px] left-[12px] md:left-[41px] opacity-70 md:opacity-80" /> */}
      <div className="flex flex-col items-center justify-center mt-[80px] relative ">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className=" text-[34px] w-[415px] h-[147px] md:text-[56px] font-semibold leading-snug text-center text-white relative  z-10"
        >
          <Balancer className="font-sf-pro ">
            Lightning-Fast AI-Driven <br /> eDiscovery & <br /> Compliance
          </Balancer>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="text-center w-[279px] h-[56px] text-white text-[20px] md:text-[18px] leading-[28px] mt-4 font-normal relative z-10 "
        >
          <Balancer>
            Reduce legal & compliance risk 
            by proactive monitoring.
          </Balancer>
        </motion.p>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center mt-[8px] relative z-10"
        >
          <Button
            onClick={openFormInNewTab}
            className="w-[202px] h-[40px] mb-4 text-white bg-black rounded-md flex items-center justify-center"
          >
            <p className="font-sf-pro text-[14px] leading-5 font-medium">
              Get Early Access
            </p>
            <HiArrowRight className="ml-3 h-5 w-5 text-white" />
          </Button>
          
          <Button
            onClick={learnMore}
            className="w-[164px] h-[40px] text-[#18181B] bg-white rounded-md flex items-center justify-center"
          >
            <p className=" text-[14px] leading-5 font-medium">
              Learn More
            </p>
            <HiArrowRight className="ml-3 h-5 w-5 text-[#18181B]" />
          </Button>

          <HeroScrollDemo />

           <div className="p-8">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Partners</h2>
          <div className="space-y-4 max-w-xl mx-auto">
            {[
              "Law Firm A",
              "Law Firm B",
              "Law Firm C",
              "Law Firm D"
            ].map((firm, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-100/80 rounded-full py-3 px-6 hover:bg-gray-200/80 transition-colors"
              >
                <FaBalanceScale className="w-5 h-5" />
            
                <span className="font-medium">{firm}</span>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
    </>
  );
};
