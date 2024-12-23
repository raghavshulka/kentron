"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BackgroundGradient } from "./background-gradient";
import { Button } from "./button";

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
    <div className=" relative container mx-auto px-4 py-16 space-y-24">
      {engines.map((engine, index) => (
        <section key={index} className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-sf-pro text-[#222222] text-4xl md:text-5xl font-bold mb-4">
              {engine.title}
            </h2>
            <p className="text-xl md:text-2xl text-[#222222] font-sf-pro">
              {engine.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engine.features.map((feature, featureIndex) => (
              <Card className="p-6 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <p className=" text-black md:text-[24px] md:leading-[28px]  text-[16px] leading-[19px]  font-medium font-sf-pro px-[10px] py-[24px] md:px-[18px]  ">
                  {feature.title}
                </p>
                <div className=" flex items-center justify-center">
                  {feature.icon}
                </div>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <div className=" mx-auto md:mt[120px]  px-[28px] mt-[30px]  ">
        <h2 className="   md:leading-[39px] md:tracking-[0.02em] text-center md:text-left font-sf-pro text-[#222222] md:text-[30px] text-[24px] leading-[31px] font-[700] ">
          Our product is best suited
          <span className="text-gray-400 font-[500] ">
            for businesses seeking efficient, scalable solutions to optimize
            operations and drive growth. Ideal for companies in need of seamless
            integration and advanced analytics capabilities.
          </span>
        </h2>
      </div>
      <div className=" flex flex-wrap justify-center gap-3  ">
        {industries.map((industry) => (
          <Button
            key={industry}
            className="bg-[#E7EFFA] opacity-80 hover:bg-blue-100 md:text-[20px] text-black text-[16px] md:leading-[28px] font-[400] leading-[22px] rounded-full  "
          >
            {industry}
          </Button>
        ))}
      </div>
    </div>
  );
}
