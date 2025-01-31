import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clipboard, Briefcase, Users, ShieldAlert, Globe } from "lucide-react";
import React from 'react';

const FeatureCard = ({
  icon: Icon,
  title,
  content,
  example,
  conclusion,
}: {
  icon: any;
  title: any;
  content: any;
  example: any;
  conclusion: any;
}) => (
  <Card className="group h-full bg-gray-900/95 border-gray-800 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
    <CardHeader className="relative p-8 bg-gradient-to-br from-blue-600 via-purple-500 to-purple-600 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <CardTitle className="relative text-2xl lg:text-3xl font-bold text-white flex items-center gap-4">
        <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
        <span className="tracking-tight">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="p-8 space-y-8">
      <div className="text-gray-200 space-y-6">
        <p
          className="p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm"
          dangerouslySetInnerHTML={{ __html: content }}
        ></p>
        <blockquote className="p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
          <p
            className=" text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: example }}
          ></p>
        </blockquote>
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
          <p
            className="text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: conclusion }}
          ></p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const EducationAdvancedEDiscovery = () => {
  const features = [
    {
      icon: Clipboard,
      title: "Ensuring Compliance with Data Protection Laws",
      content:
        "Educational institutions must comply with regulations such as <strong>FERPA</strong> (Family Educational Rights and Privacy Act), <strong>GDPR</strong> (General Data Protection Regulation), and state privacy laws. Kentron’s eDiscovery platform helps institutions efficiently locate and manage student records, faculty communications, and other sensitive information in response to legal or regulatory requests.",
      example:
        "A university receives a <strong>FERPA</strong> request from a parent seeking access to their child educational records. An eDiscovery solution enables administrators to quickly search and retrieve relevant documents while ensuring confidential information is protected.",
      conclusion:
        "As a result, enables faster compliance with legal requests without manually sorting through vast amounts of data. Reduces legal risks associated with non-compliance.",
    },
    {
      icon: Briefcase,
      title: "Efficient Handling of Internal Investigations",
      content:
        "Educational institutions often face internal investigations related to student misconduct, faculty disputes, or financial audits. Traditional methods of collecting and reviewing data can be time-consuming and prone to human error. Kentron’s solutions provide automated data collection and analysis, allowing institutions to efficiently manage internal investigations.",
      example:
        "For instance, a college is investigating a plagiarism case involving multiple students. With Kentron’s AI-powered platform, administrators can search emails, shared documents, and learning management systems (LMS) data to find relevant communications and evidence.",
      conclusion:
        "Faster resolution of disputes and investigations, accurate, defensible documentation for hearings or legal proceedings.",
    },
    {
      icon: Users,
      title: "Streamlined Public Records Requests (FOIA Compliance)",
      content:
        "Public universities and institutions are subject to Freedom of Information Act (FOIA) requests, requiring them to disclose specific records upon request. Without a centralized eDiscovery system, responding to these requests can be challenging.",
      example:
        "A journalist submits a <strong>FOIA</strong> request for university expenditure records. Leveraging Kentron’s platform can automatically search and filter relevant financial documents, ensuring timely compliance while protecting sensitive information.",
      conclusion:
        "It reduces manual effort in searching for records and ensures transparency while protecting confidential data.",
    },
    {
      icon: ShieldAlert,
      title: "Managing Litigation and Legal Holds",
      content:
        "Educational institutions may be involved in lawsuits related to employment disputes, discrimination claims, or contractual issues. When litigation occurs, preserving and retrieving relevant electronic records (emails, contracts, HR documents) is crucial.",
      example:
        "A university is facing a wrongful termination lawsuit from a former professor. Kentron enables legal teams to automatically place a legal hold on all relevant communications and retrieve essential documents within minutes.",
      conclusion:
        "As a result, reduces the risk of spoliation (loss of critical evidence), and speeds up legal proceedings by making relevant data easily accessible.",
    },
    {
      icon: Globe,
      title: "Preventing Data Breaches and Cyber Threats",
      content:
        "Cybersecurity threats in education are on the rise, with schools and universities being prime targets for data breaches and ransomware attacks. Kentron integrates with cloud platforms like Google Workspace, Slack, and Microsoft 365, providing real-time monitoring and proactive risk management.",
      example:
        "A school IT team detects suspicious file-sharing activities involving sensitive student data. The Kentron can flag the potential breach, allowing administrators to take immediate action to secure the data and prevent unauthorized access.",
      conclusion:
        "Proactive risk management to prevent data leaks reduces response time to security incidents.",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="max-w-7xl mt-24 mx-auto text-center mb-24">
          <h1 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-16 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 tracking-tight">
            Advanced eDiscovery Solution for Education Institutions
          </h1>
          <div className="prose prose-lg prose-invert mx-auto space-y-4 max-w-5xl text-start">
            <p className="text-xl text-gray-300 leading-relaxed">
              In an era where digital communication dominates, educational institutions generate vast amounts of data across emails, collaboration tools, and learning management systems. From student records and faculty communications to compliance with data privacy laws, managing this information securely and efficiently is critical.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Kentron’s advanced eDiscovery solutions can help educational institutions streamline data retrieval, ensure compliance, and improve incident response.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 md:mx-8 mb-24">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <Card className="bg-gray-900/95 border-gray-800 shadow-2xl mx-auto max-w-4xl">
          <CardHeader className="p-8 bg-gradient-to-br from-blue-600 via-purple-500 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <CardTitle className="relative text-3xl lg:text-4xl font-bold text-white flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                <Globe className="w-8 h-8" strokeWidth={1.5} />
              </div>
              Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-gray-200 space-y-6">
              <p className="text-xl leading-relaxed">
                Educational institutions handle vast amounts of sensitive digital information daily. Kentron’s advanced AI-driven solution offers a powerful way to manage compliance, investigations, and data security efficiently. By integrating Kentron into their IT infrastructure, schools and universities can protect data, enhance transparency, and ensure legal compliance with minimal effort.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EducationAdvancedEDiscovery;