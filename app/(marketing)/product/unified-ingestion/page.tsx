import React from 'react';

export default function UnifiedIngestionPage() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl text-center font-bold mb-6">Unified Ingestion Engine</h1>
        
        {/* Main Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Ingest Content with Precision and Enterprise-Grade Scalability</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The Unified Injection Engine is a robust solution designed to seamlessly collect and centralize data from various enterprise applications, including Google Workspace, Slack, JIRA, Confluence, and more.
            </p>
            <p>
              Tailored for legal and compliance purposes, it ensures secure, accurate, and efficient data extraction, enabling organizations to maintain regulatory compliance, streamline audits, and mitigate risks.
            </p>
            <p>
              With its enterprise-grade scalability and precision, the engine simplifies the complexities of multi-application data management, providing a unified and reliable approach to handling critical business information.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Integrations */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Integrations</h3>
            <p className="text-gray-300">
              Natively integrated applications, empower users to collect structured and unstructured data.
            </p>
          </div>

          {/* On-demand Data Collection */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">On-demand Data Collection</h3>
            <p className="text-gray-300">
              Gather data on demand for proactive review and monitoring to mitigate risks effectively
            </p>
          </div>

          {/* Multimodal Understanding */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Multimodal Understanding</h3>
            <p className="text-gray-300">
              Precise interpretation and analysis of multimodal content—text, images, audio, and video.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 