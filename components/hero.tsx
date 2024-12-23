"use client";

import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { Badge } from "./badge";
import { motion } from "framer-motion";
import { NavBar } from "@/components/navbar";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Link } from "next-view-transitions";

const videoLink =
  "https://s3-figma-videos-production-sig.figma.com/video/1449418450884842075/TEAM/47ac/b598/-57dc-43e8-ae9a-7494a29787fa?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emiYTkBw1DZSG2156664tWh9SqWB3LHUwWjYn~v4hb9pdFRQk5kCrEJsnDoIkBDMPPAB~thucIctxU~AKj2mSj5BUz0ta8EdoQCVMNg0yDvb5Kdr0FzoHXxTIvnWC6r5mvVjLgTFoKD1~5eU4xygE0On1J1ie85fmAJq7PtnUxAQCffltm6SroyJ2AeSLMX1OlkpafDvMTF-y~yh-9v9kDkPgHIeOY~t6zldAOZLpaFapYPfmJgWFNWQPEgaVtAT-XgFdxZvAymKsZfKSk3PNTTT~aJd9n97~m-M~FPztxW863p6GD9NkWkMQyQHLeFBT5DyHI35843xjWixr1tZnQ__";
export const Hero = () => {
  const router = useRouter();
  const openFormInNewTab = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScJoTxA6TIeY1JwGhb8xwZJQxAAeM_bEsHQfF66l1_Wgcn0Pg/viewform?usp=pp_url",
      "_blank"
    );
  };
  return (
    <>
   <video
  className="absolute w-full h-screen object-cover"
  src={videoLink}
  autoPlay
  loop
  muted
  playsInline
  style={{
    maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }}
/>

      <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
        {/* Video Background */}
        <motion.div
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          className="flex justify-center md:justify-start md:ml-8 lg:ml-16"
        >
          {/* <Badge onClick={() => router.push("/blog/top-5-llm-of-all-time")}>
          We&apos;ve raised $69M seed funding
        </Badge> */}
        </motion.div>
        <motion.h1
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
          }}
          className="text-2xl mt-[100px] md:text-4xl lg:text-6xl font-semibold max-w-6xl mx-auto text-center md:text-left md:mx-8 lg:mx-16 relative z-10"
        >
          <Balancer className="font-sf-pro text-white text-[44px] font-bold leading-[52.51px] tracking-[0.02em] text-center md:text-left md:text-[72px] md:leading-[85px]">
            Lighting fast AI-driven eDiscovery & Compliance
          </Balancer>
        </motion.h1>
        <motion.p
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.2,
          }}
          className="font-sf-pro text-white text-center text-[18px] leading-[21px] mt-6 font-medium md:text-[32px] md:text-left md:leading-[38px] tracking-[0.02em] md:mx-8 lg:mx-16"
        >
          <Balancer>
            Reduce legal & compliance risk by proactive monitoring
          </Balancer>
        </motion.p>
        <motion.div
          initial={{
            y: 80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: "easeOut",
            duration: 0.5,
            delay: 0.4,
          }}
          className="flex items-center gap-4 justify-center md:justify-start mt-6 relative z-10 md:ml-8 lg:ml-16"
        >
          <Button
            onClick={openFormInNewTab}
            className="md:text-left text-white bg-black rounded-sm"
          >
            Get Early Access
            <span />
            <HiArrowRight className="ml-3 text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 text-white dark:text-muted-dark" />
          </Button>
          {/* <Button
          variant="simple"
          as={Link}
          href="/contact"
          className="flex space-x-2 items-center group"
        >
          <span>Contact us</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button> */}
        </motion.div>
        <div className="border md:mt-[163px] border-l-[4px] border-r-[4px] border-t-[4px] border-[#25437333] bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-lg mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
          <div className="bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
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
