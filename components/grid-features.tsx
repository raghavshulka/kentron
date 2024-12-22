import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export const GridFeatures = () => {
  const features = [
    {
      title: "Unified Search",
      description:
        "Instantly locate critical data across all sources with unparalleled speed and accuracy.",
      list: [
        {
          title: "Cross-Platform Search Capability",
          description:
            "Unified Search should allow users to search across multiple data sources and platforms (email, cloud storage, databases, collaboration tools, etc.) from a single interface. This feature eliminates the need to search individually in each system, providing a centralized experience for retrieving relevant information regardless of its location.",
        },
        {
          title: "Search from Large Corpus of Data Type",
          description:
            "Search across all data collection from text, images, files, attachments, and transcripts to voice and video recordings",
        },
        {
          title: "AI-Powered Relevance and Suggestions",
          description:
            "Leveraging AI and machine learning, Unified Search should provide intelligent ranking of search results based on relevance, user behavior, and historical context. It can also offer suggestions, such as related documents or search terms, to further enhance user productivity and ensure they find what they need more efficiently.",
        },
      ],
      icon: <IconTerminal2 />,
    },
    {
      title: "Proactive Identification & Monitoring",
      description:
        "Stay ahead of regulations with smart, automated compliance monitoring.",
      list: [
        {
          title: "On-demand Data Ingestion",
          description:
            "On-demand data ingest from various sources (emails, collaboration tools, cloud storage, databases, etc.) in real-time. Use APIs or data connectors to ensure ongoing data synchronization.",
        },
        {
          title: "Predictive and Prescriptive Insights",
          description:
            "Using AI and machine learning, Unmatched Insights should go beyond descriptive analytics to offer predictive insights (forecasting future trends) and prescriptive insights (recommending actions based on data). This feature helps users not only understand what has happened but also anticipate what will happen and how to act on it.",
        },
        {
          title: "Data Segregation",
          description:
            "Machine learning algorithms quickly segregate work and non-work-related data. As a result reduced the overall amount of data needed to be reviewed for effective and efficient eDiscovery and compliance",
        },
      ],
      icon: <IconEaseInOut />,
    },
    {
      title: "Un-parallel insights",
      description:
        "Effortlessly integrate with your enterprise collaboration applications for a unified experience.",
      list: [
        {
          title: "Automated Classification and Tagging",
          description:
            "Implement automatic classification and tagging of documents based on their relevance to certain criteria (e.g., legal hold, privileged information, or potentially incriminating evidence). The system should automatically tag and group documents as soon as they match the monitoring criteria. Speed up your review process by leveraging 150+ data classifiers to identify PII, PHI, SSN, etc quickly",
        },
        {
          title: "AI-Powered Risk Identification",
          description:
            "Quickly search and identify over 100 different types of documents such as medical records, bank statements, credit card bills, and Business Plan",
        },
        {
          title: "Customizable Monitoring Scenarios",
          description:
            "Provide users with predefined monitoring scenarios tailored to common legal use cases such as compliance breaches, fraud detection, or IP theft. This allows users to quickly set up monitoring without needing to define their own rules from scratch.",
        },
      ],
      icon: <IconCurrencyDollar />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
  list,
}: {
  title: string;
  description: string;
  list: {
    title: string;
    description: string;
  }[];
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-200 group absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-blue-500 transition duration-200" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>
      {/* <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p> */}
      <ol className=" list-inside text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 ">
        {list.map((item, index) => (
          <li key={index} className="flex flex-col gap-2 mt-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted dark:text-muted-dark w-full font-semibold">
                {item.title}
              </span>
              <span className="text-xs text-muted dark:text-muted-dark w-full">
                {item.description}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
