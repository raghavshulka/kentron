import React from "react";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonThree } from "./skeletons/third";

export const Features = () => {
  const features = [
    {
      title: "All in One eDiscovery and Compliance Hub",
      description:
        "With our blazing fast, state of art connectors, Seamlessly Collect, Analyze, and Act from Over 20 Enterprise Platforms",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-3",
    },
  ];
  return (
    <div className="relative  mx-[14px]  mt-[90px] md:mt-[160px] md:ml-[80px]">
    <h2 className="font-bold w-[400px] text-[29px] leading-[34px] md:text-[64px] md:leading-[76px] mb-[16px] text-center md:text-start  md:w-[960px]">
      Packed with industry leading<br /> unmatched features
    </h2>
    <p className="mb-[40px] w-[400px] md:mb-[72px] text-[14px] leading-[16px] md:text-[24px] md:w-[960px] md:leading-[28px] text-center md:text-start text-[#222222] font-[400] tracking-[0.02em] font-sf-pro max-w-full md:max-w-[960px]">
      Unleash the power of automated workflows, advanced analytics, and
      intuitive user experiences to stay ahead in an ever-evolving regulatory
      landscape
    </p>
  
      <div className="flex flex-row justify-center mt-12">
        <div className="relative w-[350px] md:w-[1300px]">
          <div className="flex flex-row justify-center mt-12">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <div className="h-full w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
          <GridLineHorizontal
            style={{
              top: 0,
              left: "-10%",
              width: "120%",
            }}
          />

          <GridLineHorizontal
            style={{
              bottom: 0,
              left: "-10%",
              width: "120%",
            }}
          />

          <GridLineVertical
            style={{
              top: "-10%",
              right: 0,
              height: "120%",
            }}
          />
          <GridLineVertical
            style={{
              top: "-10%",
              left: 0,
              height: "120%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div  className="md:text-left text-[16px] md:text-2xl font-semibold text-gray-900 mt-4">
      {children}
    </div>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Subheading className="text-left max-w-xs mx-0 md:text-base my-2 text-[12px] text-gray-600">
      {children}
    </Subheading>
  );
};