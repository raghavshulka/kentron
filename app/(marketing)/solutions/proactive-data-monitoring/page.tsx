import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Lock,
  FileCheck,
  UserX,
  Search,
  AlertTriangle,
  Eye,
  Database,
  Zap,
} from "lucide-react";

const ProactiveDataMonitoring = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 mt-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Proactive Data Monitoring
          </h1>
          <p className="text-xl text-gray-400">
            {/* Safeguarding Sensitive Data and Ensuring Compliance */}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400 flex items-center">
                <Shield className="mr-2" />             Proactive Data Monitoring

              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>
                Organizations concerned with eDiscovery and compliance,
                proactive data monitoring offers a game-changing approach to
                safeguarding sensitive data, reducing risks, and ensuring
                adherence to regulatory frameworks.
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
                  <Eye className="mr-2 text-green-500" /> Early Identification
                  of Sensitive Data
                </li>
                <li className="flex items-center">
                  <Lock className="mr-2 text-green-500" /> Strengthening Data
                  Security
                </li>
                <li className="flex items-center">
                  <FileCheck className="mr-2 text-green-500" /> Enhancing
                  Compliance Readiness
                </li>
                <li className="flex items-center">
                  <UserX className="mr-2 text-green-500" /> Preventing Data
                  Leaks and Insider Threats
                </li>
                <li className="flex items-center">
                  <Search className="mr-2 text-green-500" /> Improving
                  eDiscovery Efficiency
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className=" rounded-md border border-gray-800 p-6 mb-16 bg-gray-900 overflow-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-400">
            {/* Detailed Benefits */}
          </h2>
          <ol className="space-y-8 text-gray-300">
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Eye className="text-blue-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Early Identification of Sensitive Data:
                </strong>{" "}
                A significant advantage of proactive monitoring is the early
                identification of sensitive data such as PII, SSNs, and credit
                card information. Automated processes can scan documents,
                emails, and databases to detect patterns that match sensitive
                data types. Once identified, these data elements can be flagged
                for encryption, restricted access, or other protective measures.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Lock className="text-green-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Strengthening Data Security:
                </strong>{" "}
                Identifying sensitive data early helps organizations implement
                appropriate security controls, such as encryption, redaction,
                and role-based access. Proactive monitoring minimizes exposure
                to data theft, which could result in significant financial and
                reputational damage.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <FileCheck className="text-red-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Enhancing Compliance Readiness:
                </strong>{" "}
                Many regulations such as HIPAA, GDPR, and PCI require
                organizations to maintain strict control over sensitive data and
                provide evidence of compliance efforts during audits. Proactive
                data monitoring simplifies this by maintaining a real-time
                inventory of where sensitive data resides and how it is used.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <UserX className="text-purple-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Preventing Data Leaks and Insider Threats:
                </strong>
                Proactive monitoring can detect unusual data access patterns and
                alert security teams before data leaks occur. Early detection
                can prevent significant damage, whether it &apos;s an external breach
                attempt or an insider threat.
              </div>
            </li>
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <Search className="text-yellow-400" />
              </div>
              <div>
                <strong className="text-blue-400 text-lg">
                  Improving eDiscovery Efficiency:
                </strong>{" "}
                Proactive monitoring ensures that sensitive data is
                well-organized and properly classified, making it easier to
                locate during eDiscovery requests. This reduces the time and
                cost of legal discovery and ensures relevant information is
                available when needed.
              </div>
            </li>
          </ol>
        </div>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-3xl font-semibold text-purple-400 flex items-center">
              <Database className="mr-2" /> Kentron for Proactive Data
              Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start">
              <AlertTriangle className="mr-4 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">
                  Keyword and Sentiment Monitoring
                </h3>
                <p className="text-gray-300">
                  <strong>What It Does:</strong> Continuously monitor data for
                  predefined keywords, phrases, or sentiment shifts across
                  platforms.
                </p>
                <p className="text-gray-300">
                  <strong>Benefit:</strong> Alerts teams to emerging issues
                  (e.g., negative sentiment regarding a policy) that may require
                  legal or compliance attention.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield className="mr-4 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2">
                  Preemptive Legal Hold Alerts
                </h3>
                <p className="text-gray-300">
                  <strong>What It Does:</strong> Automatically scans
                  organizational data for potential triggers (e.g., internal
                  investigations, regulatory reviews) and recommends placing
                  relevant data sources under legal hold.
                </p>
                <p className="text-gray-300">
                  <strong>Benefit:</strong> Reduces the risk of data spoliation
                  and ensures compliance with preservation obligations
                  proactively.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Zap className="mr-4 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">
                  Automated Data Source Monitoring
                </h3>
                <p className="text-gray-300">
                  <strong>What It Does:</strong> Continuously monitor connected
                  data sources (e.g., Slack, Google Workspace, JIRA) for new or
                  updated information relevant to ongoing or anticipated cases.
                </p>
                <p className="text-gray-300">
                  <strong>Benefit:</strong> Enables early identification of
                  relevant data and reduces the risk of missing critical updates
                  during litigation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProactiveDataMonitoring;
