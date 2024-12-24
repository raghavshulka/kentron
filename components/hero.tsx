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

const videoLink =
  "https://s3-figma-videos-production-sig.figma.com/video/1449418450884842075/TEAM/47ac/b598/-57dc-43e8-ae9a-7494a29787fa?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emiYTkBw1DZSG2156664tWh9SqWB3LHUwWjYn~v4hb9pdFRQk5kCrEJsnDoIkBDMPPAB~thucIctxU~AKj2mSj5BUz0ta8EdoQCVMNg0yDvb5Kdr0FzoHXxTIvnWC6r5mvVjLgTFoKD1~5eU4xygE0On1J1ie85fmAJq7PtnUxAQCffltm6SroyJ2AeSLMX1OlkpafDvMTF-y~yh-9v9kDkPgHIeOY~t6zldAOZLpaFapYPfmJgWFNWQPEgaVtAT-XgFdxZvAymKsZfKSk3PNTTT~aJd9n97~m-M~FPztxW863p6GD9NkWkMQyQHLeFBT5DyHI35843xjWixr1tZnQ__";

export const Hero = () => {
  const openFormInNewTab = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScJoTxA6TIeY1JwGhb8xwZJQxAAeM_bEsHQfF66l1_Wgcn0Pg/viewform",
      "_blank"
    );
  };

  return (
    <>
      <GridLineHorizontal />
      <video
        className="absolute w-full h-screen object-cover"
        src={videoLink}
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
      <GridLineVertical
        className="absolute h-full blur-[1px] right-[12px] md:right-[41px]"
      />
      <GridLineVertical
        className="absolute h-full blur-[1px] left-[12px] md:left-[41px]"
      />
      <div className="flex flex-col min-h-screen pt-20 md:pt-[120px] relative overflow-hidden px-4 md:px-0">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          className="text-[44px] mt-[100px] font-bold leading-[52.51px] max-w-6xl text-center md:text-left md:mx-[20px] lg:mx-[80px] md:text-[72px] md:leading-[85px] relative z-10"
        >
          <Balancer className="font-sf-pro text-white tracking-[0.02em]">
            Lighting fast AI-driven eDiscovery & Compliance
          </Balancer>
        </motion.h1>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          className="font-sf-pro text-white text-center text-[18px] leading-[21px] mt-6 font-medium md:text-left md:text-[32px] md:leading-[38px] tracking-[0.02em] md:mx-8 lg:mx-[80px]"
        >
          <Balancer>
            Reduce legal & compliance risk by proactive monitoring
          </Balancer>
        </motion.p>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center md:justify-start mt-6 relative z-10 md:ml-8 lg:ml-[80px]"
        >
          <Button
            onClick={openFormInNewTab}
            className="w-[194px] h-[44px] text-white md:w-[238px] md:h-[56px] md:mt-[40px] bg-black rounded-sm flex items-center justify-center"
          >
            <p className="font-sf-pro text-[16px] md:text-[20px]">
              Get Early Access
            </p>
            <HiArrowRight className="ml-3 stroke-[1px] h-6 w-6 md:h-[24px] md:w-[24px] text-white transition-transform duration-200" />
          </Button>
        </motion.div>
        <div className="  border mx-[16px] md:mx-[40px]  md:rounded-[20px] mt-[86px] md:mt-[163px] border-l-[4px] border-r-[4px] md:border-l-[8px] md:border-r-[8px] md:border-t-[8px] border-t-[4px] border-[#25437333] bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[6px]  relative">
        <div className="absolute inset-x-0 bottom-0 h-[100px] md:h-[200px] md:w-full  w-[350px]  bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none"></div>
          <div className="bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px] overflow-hidden ">

            <Image
              src="/dashboard-screen.png"
              alt="header"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </>
  );
};
