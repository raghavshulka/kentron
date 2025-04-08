import React from "react";
import { NavBar } from "@/components/navbar";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HiArrowRight } from "react-icons/hi2";
import {
  FaBalanceScale,
  FaSearch,
  FaShieldAlt,
  FaBrain,
  FaDatabase,
} from "react-icons/fa";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { IoSearchOutline } from "react-icons/io5";
import text from "@/public/Text Container.png";
import { MdGavel, MdAssessment } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";
import { FiDatabase, FiLink } from "react-icons/fi";
import {
  LucideNotebookPen,
  LucideSearch,
  LucideShieldCheck,
} from "lucide-react";

const page = () => {
  const useCases = [
    {
      icon: <FaBalanceScale className="w-5 h-5" />,
      title: "Regulatory Response",
      description:
        "Lorem ipsum dolor sit amet consectetur. In placerat sit euismod ipsum fermentum euismod pellentesque. Magna tellus scelerisque et cursus ac etiam tellus sagittis in. Accumsan netus.",
    },
    {
      icon: <LucideNotebookPen className="w-5 h-5" />,
      title: "Early Case Assessment",
      description:
        "Lorem ipsum dolor sit amet consectetur. In placerat sit euismod ipsum fermentum euismod pellentesque. Magna tellus scelerisque et cursus ac etiam tellus sagittis in. Accumsan netus.",
    },
    {
      icon: <FiDatabase className="w-5 h-5" />,
      title: "PII/PHI Classification & Validation",
      description:
        "Lorem ipsum dolor sit amet consectetur. In placerat sit euismod ipsum fermentum euismod pellentesque. Magna tellus scelerisque et cursus ac etiam tellus sagittis in. Accumsan netus.",
    },
    {
      icon: <FaBalanceScale className="w-5 h-5" />,
      title: "Regulatory Response",
      description:
        "Lorem ipsum dolor sit amet consectetur. In placerat sit euismod ipsum fermentum euismod pellentesque. Magna tellus scelerisque et cursus ac etiam tellus sagittis in. Accumsan netus.",
    },
    {
      icon: <LucideNotebookPen className="w-5 h-5" />,
      title: "Early Case Assessment",
      description:
        "Lorem ipsum dolor sit amet consectetur. In placerat sit euismod ipsum fermentum euismod pellentesque. Magna tellus scelerisque et cursus ac etiam tellus sagittis in. Accumsan netus.",
    },
    {
      icon: <FiDatabase className="w-5 h-5" />,
      title: "PII/PHI Classification & Validation",
      description:
        "Lorem ipsum dolor sit amet consectetur. In placerat sit euismod ipsum fermentum euismod pellentesque. Magna tellus scelerisque et cursus ac etiam tellus sagittis in. Accumsan netus.",
    },
  ];

  const keyFeatures = [
    {
      icon: <LucideSearch className="w-5 h-5" />,
      title: "Lightning-Fast Search",
      description:
        "Instantly find the data that matters — across every source, with unparalleled accuracy and speed.",
    },
    {
      icon: <LucideShieldCheck className="w-5 h-5" />,
      title: "Intelligent Compliance",
      description:
        "Effortlessly stay compliant — across every system, with unmatched intelligence and automation.",
    },
    {
      icon: <FiLink className="w-5 h-5" />,
      title: "Seamless Integration",
      description:
        "Unify your workflows — by integrating instantly with the tools your teams already use.",
    },
    {
      icon: <LucideShieldCheck className="w-5 h-5" />,
      title: "Unmatched Security",
      description:
        "Enterprise-grade protection — with complete data isolation and five-layer security from edge to core.",
    },
    {
      icon: <LucideShieldCheck className="w-5 h-5" />,
      title: "Detect, De-identify, and Protect PII",
      description:
        "Detect Personally Identifiable Information — across text, images, audio, and video for compliant data export.",
    },
    {
      icon: <FiDatabase className="w-5 h-5" />,
      title: "Cull data intelligently",
      description:
        "Machine learning minimizes the volume of data to review — so your team can focus on what matters most.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavBar textColor="text-black" className="bg-white text-black" />

      {/* Hero Section */}
      <div className="pt-32 text-center ">
        <div className="relative bg-[#F3F3F3] ">
          <DotPattern className="absolute  w-full h-full" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <h1 className="text-[32px] md:text-[64px]  flex items-center gap-2 font-sf-pro pt-[80px] md:pt-[105px]  text-center font-semibold tracking-tight leading-[100%] text-black dark:text-white">
                <div className="w-5 h-5 md:w-12 md:h-12">
                  <IoSearchOutline className="w-6 h-6 md:w-12 md:h-12" />
                </div>
                Nebula Trace
              </h1>
            </div>
            <div className=" mx-auto">
              <p className="text-[16px] md:text-[20px] font-sf-pro  leading-[28px] text-center pb-[53px] md:pb-[88px] font-normal  dark:text-neutral-200">
                Next-generation enterprise AI-driven eDiscovery and Legal Hold
                from innovator in legal solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center  items-center mt-[18px] md:mt-[80px] ">
        <div className="md:w-[455px]">
          <div className=" flex justify-center md:justify-start items-center">
            <div className="px-4 py-1 md:px-[18px] md:py-[5px]  rounded-full  bg-[#F4F4F5]">
              <span className="bg-gradient-to-r md:text-[17.5px] md:leading-[23px]   text-[12px] font-sf-pro font-bold leading-[16px] from-[#457DED] to-[#8BA4D5] text-transparent bg-clip-text">
                Product Description
              </span>
            </div>
          </div>
          <div className="flex flex-col mt-[4px] text-[#262626]   md:mt-[16px] md:items-start mb-4 md:mb-8 text-[24px] md:text-[32px] font-semibold leading-[150%] font-sf-pro justify-center items-center">
            Nebula Trace
          </div>
          <div className="flex md:hidden justify-center items-center mb-2">
            <Image src={text} alt="Nebula Trace" width={380} height={234} />
          </div>
          <Container className="md:text-start md:m-0 md:p-0 text-[#262626] md:text-[16px] md:leading-[24px] md:w-[400px] md:font-normal">
            Lorem ipsum dolor sit amet consectetur. Tincidunt arcu sollicitudin
            massa tristique. Faucibus a sagittis purus tellus nulla sit. Pretium
            tempor ac magna tempor. Netus mi non massa vulputate luctus. Auctor
            placerat vestibulum laoreet mus elementum feugiat id. Interdum id
            fermentum sit non faucibus porttitor nunc. Cursus porttitor ornare
            volutpat fames quis a at egestas nunc. Convallis eu amet dui
            accumsan lacus lacus nunc. Laoreet dictum molestie blandit mauris
            amet amet elementum dui eu. Nibh massa montes egestas porttitor erat
            cursus. Ac convallis eu a eu in id.
          </Container>
        </div>
        <div className=" hidden md:flex md:flex-shrink-0 justify-center items-center mb-2">
          <Image src={text} alt="Nebula Trace" width={600} height={260} />
        </div>
      </div>

      {/* Use Cases */}
      <div className="flex flex-col justify-center items-center mt-[18px] md:mt-[80px]">
        <div className="px-4 py-1 md:px-[18px] md:py-[5px]  rounded-full bg-[#F4F4F5]">
          <span className="bg-gradient-to-r md:text-[17.5px] md:leading-[23px]   text-[12px] font-sf-pro font-bold leading-[16px] from-[#457DED] to-[#8BA4D5] text-transparent bg-clip-text">
            Using Nebula Trace
          </span>
        </div>
        <div className="flex flex-col mt-[4px] text-[#262626] mb-4 md:mb-8 md:mt-[16px] text-[24px] md:text-[32px] font-semibold leading-[150%] font-sf-pro justify-center items-center">
          Use Cases
        </div>

        <div className="w-full max-w-[1200px] px-0 md:px-6 lg:px-8">
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex items-center mb-2">
                    <div className="bg-white pr-[10px]">{useCase.icon}</div>
                    <h3 className="text-[16px] text-center font-semibold leading-[150%] font-sf-pro text-[#262626]">
                      {useCase.title}
                    </h3>
                  </div>
                  <Container className="text-[14px] font-normal leading-[28px] font-sf-pro text-[#262626] mb-2">
                    {useCase.description}
                  </Container>
                  <div className="flex-grow" />
                  <Link
                    href="#"
                    className="text-[14px] font-normal leading-[28px] font-sf-pro text-[#262626] hover:underline flex items-center justify-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 gap-x-[32px]">
              {useCases.map((useCase, index) => (
                <div key={index} className={`border-t border-b-[0.5px] border-[#18181B] ${index >= 2 ? '-mt-[1px]' : ''}`}>
                  <div className="flex items-start gap-3 py-8">
                    <div className="bg-white">
                      {useCase.icon}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[20px] leading-[150%] font-semibold font-sf-pro text-[#262626] mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-[16px] leading-[28px] font-normal font-sf-pro text-[#262626]">
                        {useCase.description}
                      </p>
                      <Link
                        href="#"
                        className="text-[14px] leading-[28px] font-normal font-sf-pro text-[#262626] hover:underline flex items-center mt-4"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                             d="M9 18L15 12L9 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="flex flex-col justify-center items-center mt-[64px]">
        <div className="px-4 py-1 md:py-[5px] md:px-[18px] rounded-full bg-[#F4F4F5]">
          <span className="bg-gradient-to-r text-[12px]  md:font-bold md:text-[12.5px] font-sf-pro font-bold leading-[16px] md:leading-[23px] from-[#457DED] to-[#8BA4D5] text-transparent bg-clip-text">
            Core Solutions
          </span>
        </div>
        <div className="flex flex-col mt-[4px] md:mt-[16px] text-[#262626] mb-8 text-[24px] md:text-[32px] font-semibold leading-[150%] font-sf-pro justify-center items-center">
          Key Features
        </div>

        <div className="w-full max-w-[1200px] px-4 md:px-6 lg:px-8">
          {/* Mobile Layout */}
          <div className="block md:hidden">
            <div className="grid grid-cols-1 gap-y-6">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex flex-row items-center">
                  <div className="bg-white pt-1 mr-4">{feature.icon}</div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-[20px] font-medium leading-[30px] font-sf-pro text-[#101828]">
                      {feature.title}
                    </h3>
                    <p className="text-[14px] font-normal text-start leading-[22px] font-sf-pro text-[#71717A]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block ">
            <div className="grid md:grid-cols-3">
              {keyFeatures.map((feature, index) => (
                <div key={index} 
                  className={`
                    ${index >= 3 ? 'border-t border-[#E4E4E7]' : ''} 
                    ${index % 3 !== 0 ? 'border-l border-[#E4E4E7]' : ''}
                  `}
                >
                  <div className="flex flex-col p-4 w-[1300px] ">
                    <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white -mt-12">{feature.icon}</div>
                      <div className="flex flex-col w-[340px]">
                      <h3 className="text-[20px] font-sf-pro  font-semibold leading-[30px] text-[#101828]">
                        {feature.title}
                      </h3>
                    <p className=" inline-flex text-[14px] leading-[22px] font-sf-pro font-normal text-[#71717A] max-w-[340px]">
                      {feature.description}
                    </p>
                    </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Request Section */}
      <div className="relative bg-[#F3F3F3] mt-24">
        <DotPattern className="absolute w-full h-full" />
        <div className="relative z-10 flex flex-col items-center py-24">
          <div className=" w-full flex flex-col items-center">
            <h2 className="text-[36px] md:text-[48px] text-center font-semibold leading-[100%] text-[#040404] mb-8">
              Request a demo of Nebula Trace today.
            </h2>
            <Link 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-[#457DED] text-[#FAFAFA] rounded-md text-[14px] leading-[20px] font-medium hover:bg-opacity-90 transition-all"
            >
              Get Early Access
              <svg 
                className="w-5 h-5 ml-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
