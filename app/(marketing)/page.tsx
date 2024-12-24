import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Background } from "@/components/background";
import { Features } from "@/components/features";
import { Companies } from "@/components/companies";
import { GridFeatures } from "@/components/grid-features";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import GraphFeatures from "@/components/GraphFeatures";
import KeyBenefits from "@/components/Keyfont";


export default function Home() {
  return (
    <div className="relative overflow-hidden ">
        <Hero />
        <Companies />
        <GraphFeatures />
        <KeyBenefits />
        <Features />
        {/* <GridFeatures /> */}
        {/* <Testimonials /> */}
      <div className="relative">
        {/* <div className="absolute inset-0 h-full w-full overflow-hidden">
          <Background />
        </div> */}
        {/* <CTA /> */}
      </div>
    </div>
  );
}
