

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
    <div className=" relative py-16 px-4 md:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-16">Key Benefits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
        {benefits.map((key, index) => (
          <div key={index} className="flex flex-col">
            <div className="mb-4 p-2 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100">
              {key.icon }
            </div>
            <h3 className="text-xl font-semibold mb-2">{key.title}</h3>
            <p className="text-gray-600 leading-relaxed">{key.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

