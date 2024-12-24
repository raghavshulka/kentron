"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "./button";
import { GridLineHorizontal } from "./grid-lines";

export default function GraphFeatures() {
  const engines = [
    {
      title: "Intelligence Retrieval Engine",
      description:
        "The Kentron Intelligence retrieval engine is context-aware with ingested content, retrieving relevant and most accurate information",
      features: [
        {
          title:
            "Proprietary graph-based retrieval-augmented generation (RAG), achieves higher accuracy",
          icon: <img src="/graph.svg" alt="Graph" />,
        },
        {
          title:
            "Seamless, intuitive responses to user queries that reference source documents or information",
          icon: <img src="/profile.svg" alt="Graph" />,
        },
        {
          title:
            "Source document attribution, allowing users to obtain additional context",
          icon: <img src="/profile.svg" alt="Graph" />,
        },
      ],
    },
    {
      title: "Predictive Compliance Engine",
      description:
        "Utilize ML and AI to detect and prevent risks, support reviewers, and implement protection measures",
      features: [
        {
          title:
            "Proprietary graph-based retrieval-augmented generation (RAG), achieves higher accuracy",
          icon: <img src="/graph.svg" alt="Graph" />,
        },
        {
          title:
            "Seamless, intuitive responses to user queries that reference source documents or information",
          icon: <img src="/profile.svg" alt="Graph" />,
        },
        {
          title:
            "Source document attribution, allowing users to obtain additional context",
          icon: <img src="/profile.svg" alt="Graph" />,
        },
      ],
    },
  ];

  const industries = [
    "Corporations",
    "Legal Service Provider",
    "Law Firms",
    "Financial Services",
    "Healthcare",
    "Education",
  ];

  return (
    <div className=" container mx-auto px-4 mt-[50px]">
      {engines.map((engine, index) => (
        <section key={index} className="space-y-[24px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[29px] leading-[34px] md:text-[54px] md:leading-[64px] text-center md:text-start font-sf-pro text-[#222222] tracking-[0.02em] font-bold mb-4 mt-12 md:mt-[60px]">
              {engine.title}
            </h2>
            <p className="text-[14px] leading-[17px] md:text-[24px] md:leading-[28px] text-center md:text-start max-w-full md:max-w-[760px] mx-auto md:mx-0 text-[#222222] font-[400] tracking-[0.02em] font-sf-pro mb-12 md:mb-[72px]">
              {engine.description}
            </p>
          </motion.div>

          {/* GridLine between title and features */}
          <div className="relative">
            <GridLineHorizontal
              style={{
                position: "absolute",
                top: "0", // This places the line just below the description
                left: "-10%",
                width: "120%",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3">
            {engine.features.map((feature, featureIndex) => (
              <Card
                className="p-6 h-full supports-[backdrop-filter]:bg-background/60 border-none shadow-none"
                key={featureIndex}
              >
                <p className="text-black md:text-[24px] md:leading-[28px] text-[16px] leading-[19px] font-medium font-sf-pro px-[10px] py-[24px] md:px-[18px]">
                  {feature.title}
                </p>
                <div className="flex items-center justify-center">
                  {feature.icon}
                </div>
              </Card>
            ))}
          </div>

          {/*  bottom */}
          <div className="relative ">
            <GridLineHorizontal
              style={{
                position: "absolute",
                bottom: "0px", // Adjusted for better alignment
                left: "-10%",
                width: "120%",
              }}
            />
          </div>
        </section>
      ))}

      <div className="mx-auto md:mt-[120px] px-[28px] mt-[49px] mb-[30px]">
        <h2 className="max-w-[336px] md:max-w-[1150px] md:leading-[39px] md:tracking-[0.02em] text-center md:text-left font-sf-pro text-[#222222] md:text-[30px] text-[24px] leading-[30px] font-[700]">
          Our product is best suited
          <span className="text-gray-400 font-[500]">
            for businesses seeking efficient, scalable solutions to optimize
            operations and drive growth. Ideal for companies in need of seamless
            integration and advanced analytics capabilities.
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-8 md:mt-[60px]">
        {industries.map((industry) => (
          <button
            key={industry}
            className="w-auto md:w-auto h-[42px] md:h-[48px] rounded-full bg-[#E7EFFA] opacity-80 hover:bg-blue-100 text-black flex items-center justify-center px-6 py-2"
          >
            <p className="text-[16px] md:leading-[28px] font-[400] leading-[22px] md:text-[20px] text-center">
              {industry}
            </p>
          </button>
        ))}
      </div>
      <div className="relative mt-8 md:bottom-[-120px] bottom-[-4px] ">
            <GridLineHorizontal
              style={{
                position: "absolute",
                left: "-10%",
                width: "120%",
              }}
            />
          </div>
    </div>
  );
}
