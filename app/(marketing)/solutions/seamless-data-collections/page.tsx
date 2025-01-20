import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Database,
  Shield,
  Zap,
  Target,
  FileCheck,
  Lock,
  Layers,
  Clock,
  Filter,
  Scale,
} from "lucide-react";

const SeamlessDataCollection = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Seamless Data Collection
          </h1>
          <p className="text-xl text-gray-400">
            {/* Efficient Gathering of Data from Various Sources */}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400 flex items-center">
                <Database className="mr-2" />
                Seamless Data Collection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                The seamless data collection enables efficient gathering of data
                from various sources while ensuring accuracy, completeness, and
                compliance. Automating the data collection process reduces
                manual efforts, and integration with multiple platforms to
                provide a streamlined and defensible workflow.
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
                  <Layers className="mr-2 text-green-500" /> Comprehensive Data
                  Coverage
                </li>
                <li className="flex items-center">
                  <Shield className="mr-2 text-green-500" /> Efficiently collect
                  data with Integrity and Authenticity
                </li>
                <li className="flex items-center">
                  <Clock className="mr-2 text-green-500" /> Non-Disruptive
                  Collection
                </li>
                <li className="flex items-center">
                  <Target className="mr-2 text-green-500" /> Targeted Collection
                  with scalability
                </li>
                <li className="flex items-center">
                  <Scale className="mr-2 text-green-500" /> Regulatory
                  Compliance
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className=" rounded-md border border-gray-800 p-6 mb-16 bg-gray-900 overflow-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            Detailed Benefits
          </h2>
          <ol className="space-y-8 text-gray-300">
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Layers className="text-blue-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Comprehensive Data Coverage:
                </strong>
                Collecting data from diverse sources, including email, chat
                platforms (e.g., Slack, Microsoft Teams), cloud storage (e.g.,
                Google Drive, SharePoint), enterprise tools (e.g., JIRA,
                Confluence), and endpoints ensures no relevant data is
                overlooked, reducing the risk of incomplete evidence or
                compliance gaps.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Shield className="text-green-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Efficiently collect data with Integrity and Authenticity:
                </strong>{" "}
                Automation accelerates the data collection process and provides
                authenticity by capturing metadata, timestamps, and audit trails
                to maintain data integrity and chain of custody. Ensuring
                defensibility in legal proceedings.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Clock className="text-red-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Non-Disruptive Collection:
                </strong>{" "}
                Collections without disrupting employee workflows or operational
                systems. Ensures business continuity while still meeting legal
                and regulatory requirements. Automation reduces time spent on
                locating and gathering data, enabling faster Early Case
                Assessment (ECA) and compliance responses.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Target className="text-purple-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Targeted Collection with scalability:
                </strong>
                Allows precise filtering by custodian, keyword, date range, or
                file type to collect only relevant data. Minimizes the volume of
                unnecessary data, reducing review costs and time. A scalable
                system empowers users with data collection for multiple users,
                locations, and platforms.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Scale className="text-yellow-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Regulatory Compliance:
                </strong>
                Data collection needs to adhere to data privacy laws and
                compliance standards (e.g., GDPR, CCPA, HIPAA) by applying rules
                during collection, such as excluding sensitive or irrelevant
                data. It protects the organizations from legal penalties and
                ensures ethical handling of sensitive information.
              </div>
            </li>
          </ol>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-purple-400 flex items-center">
              <Database className="mr-2" /> Kentron for Seamless Data Collection
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start">
              <Layers className="mr-4 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Multi-Platform Integration
                </h3>
                <p className="text-gray-300">
                  Kentron &apos;s multi-platform integration gathers data from various
                  sources, such as Slack, Microsoft Teams, JIRA, Confluence,
                  Google Drive, Gmail, and more, providing a unified solution to
                  capture all relevant data regardless of its source.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Filter className="mr-4 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  On-demand Selective and Targeted Collection
                </h3>
                <p className="text-gray-300">
                  On-demand data collection enables legal teams to meet the
                  requirements of Federal Rules of Civil Procedure Rule 26(f),
                  which mandates submitting a written report to the court within
                  14 days outlining the proposed discovery plan. By focusing
                  solely on necessary data, targeted collection minimizes volume
                  and eliminates irrelevant information.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Lock className="mr-4 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Security, Audit Trails, and Reporting
                </h3>
                <p className="text-gray-300">
                  Kentron is designed with a Security First approach, ensuring
                  robust data protection. We utilize encryption for data both in
                  transit and at rest and implement role-based access controls
                  to restrict access to authorized personnel only. Additionally,
                  detailed logs of all collection activities are maintained,
                  ensuring full transparency and defensibility.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SeamlessDataCollection;
