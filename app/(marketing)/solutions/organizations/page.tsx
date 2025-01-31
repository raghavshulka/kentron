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

const AdvancedDigitalCommunicationsGovernance = () => {
  const features = [
    {
      icon: Clipboard,
      title: "Ensuring Regulatory Compliance",
      content:
        "Organizations across industries must comply with regulations such as <strong>GDPR</strong>, <strong>HIPAA</strong>, <strong>SEC</strong>, <strong>FINRA</strong>, and <strong>CCPA</strong>, which require them to store, retrieve, and protect sensitive data. Failure to meet these compliance requirements can result in hefty fines and reputational damage.",
      example:
        "For instance, a healthcare provider must comply with <strong>HIPAA</strong> regulations regarding patient data privacy. <strong>Kentron</strong> empowers compliance teams to quickly locate patient records, communications, and audit logs in response to regulatory audits or patient requests.",
      conclusion:
        "Faster compliance with regulatory requests and audits minimizes the risk of fines and legal penalties.",
    },
    {
      icon: Briefcase,
      title: "Streamlining Legal Investigations & Litigation Readiness",
      content:
        "Organizations must secure, review, and produce relevant data when faced with lawsuits, employee disputes, or corporate fraud investigations. Traditional methods of collecting evidence are manual, time-consuming, and prone to errors. <strong>Kentron</strong> automates data collection and legal hold management, improving efficiency.",
      example:
        "A financial services firm is involved in a contract dispute with a former client. An <strong>AI-powered Kentron</strong> platform helps legal teams identify and extract relevant email exchanges, contracts, and meeting transcripts, strengthening their legal position.",
      conclusion:
        "<strong>Kentron</strong> Speeds up document retrieval while lowering costs and ensures secure, tamper-proof evidence collection.",
    },
    {
      icon: Users,
      title: "Enhancing Internal Investigations & HR Compliance",
      content:
        "HR departments and compliance teams often conduct internal investigations related to misconduct, harassment claims, or unethical behavior. <strong>Kentron</strong> provides powerful search and filtering capabilities to analyze employee communications, shared files, and HR records.",
      example:
        "A large corporation investigates a workplace harassment complaint. With <strong>Kentron</strong>, HR teams can analyze chat messages, emails, and incident reports to determine whether policies were violated.",
      conclusion:
        "<strong>Kentron</strong> accelerates workplace investigations while ensuring unbiased, data-driven decision-making.",
    },
    {
      icon: ShieldAlert,
      title: "Optimizing Incident Response & Data Breach Management",
      content:
        "Organizations are increasingly targeted by cyber threats, data breaches, and insider threats. <strong>Kentron</strong> integrates with security systems to monitor, detect, and investigate potential security incidents on-demand basis.",
      example:
        "An IT team detects unauthorized access to sensitive customer financial data. Using a <strong>Kentron</strong> platform, security analysts can trace file access history, audit logs, and communications to assess the impact and mitigate risks.",
      conclusion:
        "Rapid incident detection and response reduce the impact of data breaches and financial loss.",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="max-w-7xl mt-24 mx-auto text-center mb-24">
          <h1 className="text-6xl sm:text-5xl lg:text-6xl font-bold mb-16 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 tracking-tight">
            Advanced Digital Communications Governance and eDiscovery Solution
          </h1>
          <div className="prose prose-lg prose-invert mx-auto space-y-4 max-w-5xl text-start">
            <p className="text-xl text-gray-300 leading-relaxed">
              Gartner defines <strong >DCGA</strong> as
              digital communications governance solutions that are designed to
              enforce corporate governance and compliance with industry
              regulations, across a growing number of communications tools
              available to employees.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              For the various communication tools in use across the enterprise,{" "}
              <strong >DCGA</strong> solutions enable
              consistent policy management, enforcement, and reporting
              capabilities.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              In today's digital-first world, organizations generate and store
              massive amounts of data across various platforms, including
              emails, collaboration tools, cloud storage, and internal
              databases. Managing, retrieving, and protecting this data is
              critical, especially when dealing with legal disputes, compliance
              regulations, internal investigations, and cybersecurity threats.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              <strong >Kentron's</strong> advanced
              eDiscovery and Digital Communications Governance solution helps
              organizations search, collect, analyze, and manage electronic data
              efficiently, ensuring compliance, reducing legal risks, and
              streamlining operations.
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
                In today's data-driven environment, organizations must be
                prepared to handle compliance audits, legal disputes, security
                incidents, and public records requests efficiently.{" "}
                <strong className="text-gray-300">Kentron's AI driven</strong>{" "}
                solution empowers businesses to reduce risk, enhance compliance,
                and improve operational efficiency.
              </p>
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed">
                  By adopting the <strong>Kentron</strong> platform,
                  organizations can future-proof their data management
                  strategies, ensuring agility and compliance in an evolving
                  regulatory landscape.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdvancedDigitalCommunicationsGovernance;
