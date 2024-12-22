import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CircleFlowGrid } from "@/components/circleFlowGrid";

export function Companies() {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto ">
        <div className="text-center md:text-left md:mb-[72px] mb-12">
          <h2 className="font-sf-pro text-[#222222] text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight font-bold mb-4">
            Unified Ingestion Engine
          </h2>
          <p className="font-sf-pro text-lg sm:text-xl md:text-2xl text-[#222222] tracking-wide">
            Efficiently Ingest Content with Precision at Enterprise Scale
          </p>
        </div>
        <BentoGrid className="font-sf-pro text-black   ">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              description={item.description}
              className={cn(
                item.className,
                "relative overflow-hidden"
              )}
              header={item.header}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const items = [
  {
    description:
      "Prebuilt connectors to commonly used enterprise data repositories.",
    header: <CircleFlowGrid className="w-full h-full" />,
    className: "md:col-span-2",
  },
  {
    description: "Continuous ingestion of millions of pages.",
    header: (
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/Group1.svg"
          alt="Group1 Illustration"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    description: "Smart data chunking for optimal processing.",
    header: (
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/Group2.svg"
          alt="Group2 Illustration"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    description:
      "Accurate reading and analysis of multimodal content — text, images, audio, and video",
    header: (
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src="/Frame14.svg"
          alt="Group14 Illustration"
          className="w-5/6 h-5/6 object-contain"
        />
      </div>
    ),
    className: "md:col-span-2",
  },
];

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

