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
            <h2 className="text-3xl font-bold mb-2">{engine.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {engine.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engine.features.map((feature, featureIndex) => (
              <BackgroundGradient
                key={featureIndex}
                className="rounded-xl p-[1px]"
              >
                <Card className="p-6 h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="h-[240px] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <p className="text-sm mt-4">{feature.title}</p>
                </Card>
              </BackgroundGradient>
            ))}
          </div>
        </section>
      ))}

      <div className="max-w-4xl mx-auto py-12 px-[28px] mt-[30px]">
        <h2 className=" text-center font-sf-pro text-[#222222]  text-[24px] leading-[31px] font-[700] mb-4">
          Our product is best suited{" "}
          <span className="text-gray-400 font-[500]">
            for businesses seeking efficient, scalable solutions to optimize
            operations and drive growth. Ideal for companies in need of seamless
            integration and advanced analytics capabilities.
          </span>
        </h2>
      </div>
      <div className=" flex flex-wrap justify-center gap-3 mt-[30px]">
        {industries.map((industry) => (
          <Button
            key={industry}
            className="bg-[#E7EFFA] hover:bg-blue-100 text-black font-[16px] leading-[22px]  rounded-full  "
          >
            {industry}
          </Button>
        ))}
      </div>
    </div>
  );
}
