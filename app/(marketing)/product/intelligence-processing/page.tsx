import React from 'react';

export default function IntelligenceRetrievalPage() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Intelligent Processing Engine</h1>
        
        {/* Main Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Precise and Rapid Data Access</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              The Intelligent Processing Engine is a cutting-edge solution designed to streamline and enhance data management for Legal and Compliance purposes.
            </p>
            <p>
              It empowers users to efficiently de-duplicate structured and unstructured data from various enterprise applications, including Google Workspace, Slack, JIRA, Confluence, and more.
            </p>
            <p>
              By leveraging advanced algorithms and intelligent workflows, the engine identifies and eliminates redundant data, ensuring accuracy, consistency, and compliance with regulatory standards.
            </p>
            <p>
              This simplifies data consolidation, reduces storage overhead, and enables organizations to maintain a clean, reliable data repository critical for audits, investigations, and legal discovery processes.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sensitive Data Detection */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Sensitive Data Detection</h3>
            <p className="text-gray-300">
              Processing Engine classifies over 150 data types. This helps to Identify, categorize, and safeguard your most sensitive data
            </p>
          </div>

          {/* Cross-Platform Data Fragmentation */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cross-Platform Data Fragmentation</h3>
            <p className="text-gray-300">
              The engine consolidates fragmented data into a unified data collection offering best-in-class accuracy and speed
            </p>
          </div>

          {/* Metadata Aggregation */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Metadata Aggregation</h3>
            <p className="text-gray-300">
              Metadata aggregation enables advanced search for fast and accurate data retrieval
            </p>
          </div>

          {/* RAG Features */}
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Advanced RAG Technology</h3>
            <ul className="text-gray-300 space-y-2 list-disc pl-4">
              <li>Proprietary graph-based retrieval-augmented generation (RAG), achieves higher accuracy</li>
              <li>Seamless, intuitive responses to user queries that reference source documents or information</li>
              <li>Source document attribution, allowing users to obtain additional context</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 