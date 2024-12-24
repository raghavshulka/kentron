import { GridLineHorizontal } from "./grid-lines";

const benefits = [
  {
    icon: <img src="/search-status.svg" alt="icon" />,
    title: "Lightning-Fast Search",
    description:
      "Instantly locate critical data across all sources with unparalleled speed and accuracy.",
  },
  {
    icon: <img src="/box.svg" alt="icon" />,
    title: "Intelligent Compliance",
    description:
      "Stay ahead of regulations with smart, automated compliance monitoring.",
  },
  {
    icon: <img src="/element-4.svg" alt="icon" />,
    title: "Seamless Integration",
    description:
      "Effortlessly integrate with your enterprise collaboration applications for a unified experience.",
  },
  {
    icon: <img src="/lock.svg" alt="icon" />,
    title: "Unmatched Security",
    description:
      "Your data is protected with complete isolation of data, five-layer security architecture, and advanced encryption & security protocols.",
  },
  {
    icon: <img src="/shield-search.svg" alt="icon" />,
    title: "Detect, De-identify, and Protect PII",
    description:
      "Extract personally identifiable information (PII) from text, images, audio, or video files to enable machine learning and analytics workflows while ensuring privacy protection.",
  },
  {
    icon: <img src="/3square.svg" alt="icon" />,
    title: "Cull data intelligently",
    description:
      "Machine learning capabilities enable to minimize of the volume of data that needs to be reviewed.",
  },
];

export default function KeyBenefits() {
  return (
    <div className=" relative pt-[40px] md:mt-[200px] mx-[30px] md:mx-[80px]  lg:px-8">
      <h1 className="font-bold  md:text-[64px] md:leading-[76px]  text-[29px] md:text-left leading-[34px] md:mb-[60px]  mb-[40px] text-center">
        Key Benefits
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-10 md:gap-x-[0px] gap-y-[32px] md:gap-y-[80px]">
        {benefits.map((key, index) => (
          <div key={index} className="flex md:w-[380px] flex-col">
            <div className="mb-4 p-2 w-12 h-12 flex items-center justify-center rounded-lg ">
              {key.icon}
            </div>
            <h3 className="text-[16px] leading-[19px] md:text-[18px] md:leading-[21px] font-sf-pro font-[700] mb-2">
              {key.title}
            </h3>
            <p className=" text-[14px] leading-[16px] md:text-[16px] md:leading-[29px] font-[400]">
              {key.description}
            </p>
          </div>
        ))}
      </div>
      <div className="relative  bottom-[-40px]  md:bottom-[-80px] ">
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
