import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function Companies() {
  return (
    <div className="relative mx-[16px] md:mx-[80px]">
      <div className="text-center md:text-left md:ml-[80px] ml-0">
        <h2 className="font-sf-pro text-[29px] leading-[34px] md:leading-[64px] text-[#222222] md:text-[54px] font-bold md:font-[700] mb-[8px]">
          Unified Ingestion Engine
        </h2>
        <p className="font-sf-pro text-[14px] leading-[16px] font-[400] md:text-[24px] md:leading-[28px] text-[#222222]">
          Efficiently Ingest Content with Precision at Enterprise Scale
        </p>
      </div>
      <div className="relative mt-[40px] md:mt-[60px] mb-[24px]"></div>
      <div className="mx-auto mb-[40px] md:mb-[72px] md:px-[100px]">
        <BentoGrid>
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
      <div className="relative"></div>
    </div>
  );
}

const items = [
  {
    description:
      "Prebuilt connectors to commonly used enterprise data repositories",
    header: (
      <div className="flex items-center  justify-center w-full h-full">
        <img
          src="/group.svg"
          alt="Connectors"
          className="w-full h-full md:w-[580px] md:h-[200px]   object-contain p-4 md:p-2"
          loading="lazy"
          decoding="async"
        />
      </div>
    ),
    className: "md:col-span-2 md:h-[320px]",
  },
  {
    description: "Continuous ingestion of millions of pages",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Group1.svg"
          alt="Ingestion"
          className="w-full h-full object-contain md:p-6"
        />
      </div>
    ),
    className: "md:col-span-1 md:h-[320px]",
  },
  {
    description: "Smart data chunking",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Group2.svg"
          alt="Chunking"
          className="w-full h-full object-contain md:p-6"
        />
      </div>
    ),
    className: "md:col-span-1 md:h-[320px]",
  },
  {
    description:
      "Accurate reading and analysis of multimodal content — text, images, audio, and video",
    header: (
      <div className="flex items-center justify-center w-full h-full">
        <img
          src="/Frame14.svg"
          alt="Multimodal"
          className="w-full h-full object-contain md:p-6"
        />
      </div>
    ),
    className: "md:col-span-2 md:h-[320px]",
  },
];
