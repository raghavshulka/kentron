import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Gavel,
  DollarSign,
  ShieldAlert,
  Crosshair,
  Search,
  CheckCircle,
  Zap,
  Database,
  Brain,
} from "lucide-react";

const EarlyCaseAssessment = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Early Case Assessment
          </h1>
          <p className="text-xl text-gray-400"></p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400 flex items-center">
                <Gavel className="mr-2" />
                Early Case Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                In legal practice, whether you&apos;re representing a client in
                a high-stakes litigation or managing a routine legal matter, the
                importance of early case assessment (ECA) cannot be overstated.
                Early case assessment refers to evaluating the facts, evidence,
                and legal issues of a case as soon as it arises, often before
                formal litigation or extensive legal proceedings commence.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-400 flex items-center">
                <Zap className="mr-2" /> Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" /> Informed
                  Decision-Making
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" /> Cost
                  Efficiency
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" /> Risk
                  Mitigation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" /> Strategic
                  Advantage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" /> Streamlined
                  Discovery Process
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="h-full rounded-md border border-gray-800 p-6 mb-16 bg-gray-900">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            {/* Detailed Benefits */}
          </h2>
          <ol className="space-y-8 text-gray-300">
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Crosshair className="text-blue-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Informed Decision-Making:
                </strong>{" "}
                Early case assessment provides a comprehensive understanding of
                a case&apos;s strengths and weaknesses. By evaluating evidence,
                assessing legal claims, and identifying potential risks early
                on, attorneys can make more informed decisions about how to
                proceed. This insight allows for strategic planning and helps
                set realistic expectations for clients.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <DollarSign className="text-green-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Cost Efficiency:
                </strong>{" "}
                Addressing a case early can lead to substantial cost savings.
                Identifying potential issues or areas of concern at the outset
                can prevent unnecessary legal expenses. For example, early
                assessment might reveal that a case is unlikely to succeed,
                leading to a decision to negotiate a settlement rather than
                pursuing a costly trial. This proactive approach helps in
                budgeting and allocating resources more effectively.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <ShieldAlert className="text-red-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Risk Mitigation:
                </strong>{" "}
                Identifying potential risks early in the process allows legal
                teams to address them proactively. Whether it&apos;s uncovering
                weaknesses in evidence or anticipating challenges from opposing
                counsel, early case assessment helps in developing strategies to
                mitigate these risks. This foresight can prevent surprises and
                improve overall case outcomes.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Crosshair className="text-purple-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Strategic Advantage:
                </strong>{" "}
                Having a detailed early case assessment provides a strategic
                advantage in litigation. It allows legal teams to anticipate the
                opposing party&apos;s arguments, prepare counterarguments, and
                adjust their strategies accordingly. This preparedness can be
                crucial in high-stakes cases where every advantage counts.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Search className="text-yellow-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Streamlined Discovery Process:
                </strong>{" "}
                Early assessment often includes a preliminary review of evidence
                and potential discovery issues. By identifying key evidence and
                potential pitfalls early, the discovery process can be
                streamlined, reducing the likelihood of disputes or delays. This
                efficiency can lead to a smoother litigation process and quicker
                resolution.
              </div>
            </li>
          </ol>
        </div>

        <Card className="bg-gray-900 border-gray-800 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-blue-400 flex items-center">
              <CheckCircle className="mr-2" /> Conclusion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 leading-relaxed">
              Early case assessment is more than just a preliminary step;
              it&apos;s a strategic advantage that can influence every aspect of
              legal practice. The benefits of starting early are substantial
              from informed decision-making and cost efficiency to improved case
              management and client satisfaction. For legal professionals
              committed to achieving the best outcomes for their clients,
              incorporating early case assessment into their practice is not
              just recommended—it&apos;s essential.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-purple-400 flex items-center">
              <Database className="mr-2" /> Kentron for Early Case Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start">
              <Search className="mr-4 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Precise Identification
                </h3>
                <p className="text-gray-300">
                  Kentron&apos;s advanced search capabilities allow users to
                  quickly pinpoint relevant data across vast data sources such
                  as Slack, JIRA, Confluence, Teams, etc. In addition,
                  Kentron&apos;s auto-classification feature can identify and
                  label over 150 data into predefined categories such as
                  personal identifiable information (PII), credit card number,
                  name, age, passport, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Brain className="mr-4 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  AI-Powered Insights
                </h3>
                <p className="text-gray-300">
                  Incorporating natural language processing (NLP) and machine
                  learning helps surface patterns, key custodians, and
                  communication trends without manually sifting through data.
                  Kentron automatically also identifies and categorizes over 100
                  file types of business plans, contract agreements,
                  compensation policies, etc.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="mr-4 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Pre-Review Culling
                </h3>
                <p className="text-gray-300">
                  Deduplication, threading, and filtering by metadata (e.g.,
                  date ranges, participants, and file types) significantly
                  reduce data volume, lowering review costs. By leveraging
                  Kentron&apos;s robust data classification feature, you can
                  transform chaotic datasets into organized, actionable
                  insights, streamlining the litigation and compliance
                  processes. This process enhances efficiency and ensures that
                  legal teams can focus on critical tasks without being bogged
                  down by irrelevant data.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EarlyCaseAssessment;
