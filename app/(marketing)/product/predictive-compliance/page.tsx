import React from 'react';

export default function PredictiveCompliancePage() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl text-center font-bold mb-6">Predictive Compliance Engine</h1>
        
        {/* Main Description */}
        <section className="mb-12">
          <div className="space-y-4 text-gray-300">
            <p>
              The Predictive Compliance Engine is a powerful, AI-driven feature that streamlines eDiscovery and compliance processes.
            </p>
            <p>
              By analyzing patterns and anticipating risks, it proactively identifies potential compliance issues and highlights relevant data before problems arise.
            </p>
            <p>
              This engine ensures regulatory adherence by automating compliance workflows, reducing manual intervention, and delivering actionable insights. With its ability to predict and mitigate risks, organizations can confidently navigate complex legal landscapes while maintaining operational efficiency.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Data Redaction and Anonymization */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Data Redaction and Anonymization</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Redact sensitive information (e.g., SSNs, financial details) from documents during export</li>
              <li>Anonymize data to comply with privacy regulations while maintaining usability (coming soon)</li>
            </ul>
          </div>

          {/* Predictive Search and Data Retrieval */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Predictive Search and Data Retrieval</h3>
            <p className="text-gray-300">
              AI-driven predictions will surface the most relevant documents and communications for eDiscovery. Enhances search efficiency with contextual relevance scoring
            </p>
          </div>

          {/* Compliance Reporting Dashboard */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Compliance Reporting Dashboard</h3>
            <p className="text-gray-300">
              Create tailored reports for internal stakeholders and external regulators, with visualization of compliance status, risks, and progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 