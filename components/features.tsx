"use client";

import React, { memo, useMemo } from "react";
import { cn } from "@/lib/utils";
import { GridLineHorizontal, GridLineVertical } from "./grid-lines";
import { SkeletonFour } from "./skeletons/fourth";
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
// Move components outside to prevent recreation
const FeatureCard = memo(({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
    {children}
  </div>
));
FeatureCard.displayName = 'FeatureCard';

const FeatureTitle = memo(({ children }: { children?: React.ReactNode }) => (
  <div className="md:text-left text-[16px] md:text-2xl font-semibold text-gray-900 mt-4">
    {children}
  </div>
));
FeatureTitle.displayName = 'FeatureTitle';

const FeatureDescription = memo(({ children }: { children?: React.ReactNode }) => (
  <p className="text-left max-w-xs md:max-w-[400px] mx-0 md:text-base my-2 text-[12px] text-gray-600">
    {children}
  </p>
));
FeatureDescription.displayName = 'FeatureDescription';

// Static data
const features = [
  {
    title: "All in One eDiscovery and Compliance Hub",
    description: "Leverage our state-of-the-art, high-speed connectors to seamlessly collect, analyze, and act on data from various enterprise platforms.",
    skeleton: <SkeletonFour />,
    className: "col-span-1 md:col-span-3",
  },
] as const;

// Memoize static grid lines
const GridLines = memo(() => (
  <>
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
  </>
));
GridLines.displayName = 'GridLines';

export const Features = memo(() => {
  const [featuresRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  // Memoize feature cards
  const featureCards = useMemo(() => (
    features.map((feature) => (
      <FeatureCard key={feature.title} className={feature.className}>
        <FeatureTitle>{feature.title}</FeatureTitle>
        <FeatureDescription>{feature.description}</FeatureDescription>
        <div className="h-full w-full">{feature.skeleton}</div>
      </FeatureCard>
    ))
  ), []);

  if (!isVisible) {
    return <div ref={featuresRef} />;
  }

  return (
    <div ref={featuresRef} className="relative mx-[14px] mt-[90px] md:mt-[160px] md:ml-[80px]">
      <h2 className="font-bold w-[350px] md:w-[960px] text-[29px] leading-[34px] md:text-[64px] md:leading-[76px] mb-[16px] text-center md:text-start mx-auto md:mx-0">
        <span className="md:hidden">
          Packed with industry<br />
          leading<br />
          unmatched features
        </span>
        <span className="hidden md:inline">
          Packed with industry leading<br />
          unmatched features
        </span>
      </h2>
      <p className="mb-[40px] w-[400px] md:mb-[72px] text-[14px] leading-[16px] md:text-[24px] md:w-[960px] md:leading-[28px] text-center md:text-start text-[#222222] font-[400] tracking-[0.02em] font-sf-pro max-w-full md:max-w-[960px]">
        Unleash the power of automated workflows, advanced analytics, and
        intuitive user experiences to stay ahead in an ever-evolving regulatory
        landscape
      </p>
      
      <div className="flex flex-row justify-center mt-12">
        <div className="relative w-[350px] md:w-[1250px]">
          <div className="flex flex-row justify-center mt-12">
            {featureCards}
          </div>
          <GridLines />
        </div>
      </div>
    </div>
  );
});
Features.displayName = 'Features';