import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clipboard, Briefcase, Users, ShieldAlert, Globe } from "lucide-react";

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
  conclusion?: any;
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
        {conclusion && (
          <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
            <p
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: conclusion }}
            ></p>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

const LawFirmsAdvancedEDiscovery = () => {
  const features = [
    {
      icon: Clipboard,
      title: "Faster Data Collection and Processing",
      content:
        "Kentron leverages AI to automate data collection and process vast amounts of structured, unstructured, and semi-structured data. Whether dealing with emails, Slack messages, or Confluence pages, Kentron’s integrates directly with cloud-based sources and reduces manual collection efforts.",
      example:
        "For instance, a litigation firm handling a corporate fraud case can use Kentron’s platform to collect relevant Slack conversations and financial records in real-time—saving weeks of manual document retrieval.",
      conclusion:
        "Speeding up data collection helps law firms meet tight case deadlines while reducing labor-intensive tasks.",
    },
    {
      icon: Briefcase,
      title: "Cost Reduction and Predictable Pricing",
      content:
        "Traditional discovery can be costly due to manual document review and extensive IT support. Kentron’s AI-driven advanced eDiscovery solutions reduce costs through automation, AI-powered document review, and cloud-based storage, which eliminates expensive infrastructure investments.",
      example:
        "A mid-sized firm managing a class-action lawsuit can use predictive coding (TAR) to automatically categorize and prioritize relevant documents, reducing attorney review hours by 50%.",
      conclusion:
        "Law firms can more effectively control costs and offer clients predictable pricing models, making their services more competitive.",
    },
    {
      icon: Users,
      title: "Enhanced Accuracy with AI-Powered Review",
      content:
        "Kentron’s AI and machine learning algorithms significantly improve document review accuracy by identifying patterns, detecting key entities, and flagging privileged or sensitive information.",
      example:
        "A law firm representing a financial institution in a regulatory investigation can use AI-powered entity recognition to identify risky communications and ensure compliance with legal requirements.",
      conclusion:
        "Reducing human error and increasing the accuracy of document review leads to stronger case strategies and better client outcomes.",
    },
    {
      icon: ShieldAlert,
      title: "Compliance and Risk Management",
      content:
        "Law firms must ensure that their eDiscovery processes align with industry regulations, including GDPR, HIPAA, and SEC compliance. Kenton offers built-in compliance controls, various roles to manage access, and audit logs.",
      example:
        "A firm advising a multinational client on a data breach can quickly identify and classify personal data across different jurisdictions to meet regulatory reporting deadlines. Kentron offers over 150 data classifiers out of the box such as PII, credit card number, passport number, etc.",
      conclusion:
        "Automated compliance features help law firms mitigate legal risks and avoid penalties.",
    },
    {
      icon: Globe,
      title: "Seamless Collaboration Across Teams",
      content:
        "Kentron facilitates seamless collaboration between legal teams, clients, and external stakeholders. Cloud-based access with various roles such as admin, auditor, and member, ensures that multiple users can securely work on cases from different locations.",
      example:
        "A global law firm handling cross-border litigation can enable attorneys in different time zones to collaborate on the same case file without delays. This improves efficiency and coordination lead to more effective case management.",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="max-w-6xl mt-24 mx-auto text-center mb-24">
          <h1 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-16 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 tracking-tight">
            Advanced eDiscovery Solutions for Law Firms
          </h1>
          <div className="prose prose-lg prose-invert mx-auto space-y-4 max-w-5xl text-start">
            <p className="text-xl text-gray-300 leading-relaxed">
              In today’s fast-paced legal landscape, law firms face increasing
              pressure to efficiently manage large volumes of digital evidence.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Traditional discovery methods are no longer sufficient to handle
              the complexity and scale of modern litigation, regulatory
              investigations, and compliance matters.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Advanced eDiscovery solutions are transforming how law firms
              collect, analyze, and review data—delivering significant benefits
              in cost reduction, efficiency, and accuracy.
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
                Kentron’s advanced eDiscovery solutions empower law firms with
                cutting-edge technology to streamline workflows, reduce costs,
                and improve accuracy in legal proceedings. By leveraging AI,
                automation, and cloud integrations, law firms can enhance their
                competitive advantage, deliver better client outcomes, and stay
                ahead in an increasingly digital legal environment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LawFirmsAdvancedEDiscovery;
