import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";

export function Companies() {
  return (
    <div className="relative py-16 px-4">
      <div className="mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className=" font-sf-pro text-[#222222] text-4xl md:text-5xl font-bold mb-4">
            Unified Ingestion Engine
          </h2>
          <p className=" font-sf-pro text-xl md:text-2xl text-[#222222]">
            Efficiently Ingest Content with Precision at Enterprise Scale
          </p>
        </div>
        <BentoGrid className="">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              description={item.description}
              className={item.className}
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
    description: "Prebuilt connectors to commonly used enterprise data repositories",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Frame18.svg"
          alt="Connectors"
          className="w-full h-full object-contain p-6"
        />
      </div>
    ),
    className: "md:col-span-2 h-[320px]",
  },
  {
    description: "Continuous ingestion of millions of pages",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Group1.svg"
          alt="Ingestion"
          className="w-full h-full object-contain p-6"
        />
      </div>
    ),
    className: "md:col-span-1 h-[320px]",
  },
  {
    description: "Smart data chunking",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Group2.svg"
          alt="Chunking"
          className="w-full h-full object-contain p-6"
        />
      </div>
    ),
    className: "md:col-span-1 h-[320px]",
  },
  {
    description: "Accurate reading and analysis of multimodal content — text, images, audio, and video",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Frame14.svg"
          alt="Multimodal"
          className="w-full h-full object-contain p-6"
        />
      </div>
    ),
    className: "md:col-span-2 h-[320px]",
  },
];