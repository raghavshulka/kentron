import React from 'react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Secure By Design</h1>
        
        <p className="text-xl text-gray-300 mb-12">
          KENTRON was developed from the ground up with a focus on security, privacy, and compliance. 
          Engineered to safeguard your data.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <SecurityFeature 
            title="Authentication & Verification"
            description="To access KENTRON's resources, users must authenticate through your enterprise's identity provider."
          />
          
          <SecurityFeature 
            title="Role-Based Access Control"
            description="Only displays information that you already have permission to access in the source application. Built-in roles such as Global Admin, Admin, Member, and Auditor empower organizations to manage permissions at a granular level."
          />
          
          <SecurityFeature 
            title="Single Tenant"
            description="KENTRON isolates all your data and stores it in a dedicated cloud instance."
          />
          
          <SecurityFeature 
            title="Audit Logging"
            description="Access detailed audit logs of your organization's use of the KENTRON platform. You can export these logs to your SIEM for monitoring and alerts."
          />
          
          <SecurityFeature 
            title="On-Demand Sync"
            description="On-demand content creation empowers users to collect data when they need it most."
          />
          
          <SecurityFeature 
            title="Retention Controls"
            description="Customers maintain complete control over the retention and disposal of their data."
          />
          
          <SecurityFeature 
            title="Encryption of All Data"
            description="All data is encrypted at rest and during transit using SHA-2. Measures are implemented to mitigate the risk of data exfiltration."
          />
          
          <SecurityFeature 
            title="SSO Support"
            description="Coming soon"
            isComingSoon
          />
        </div>
      </div>
    </div>
  );
}

// Security Feature Component
function SecurityFeature({ 
  title, 
  description, 
  isComingSoon = false 
}: { 
  title: string; 
  description: string; 
  isComingSoon?: boolean;
}) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl border border-white/[0.15] shadow-xl shadow-black/5 ring-1 ring-white/[0.1]">
      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
        {title}
        {isComingSoon && (
          <span className="text-sm px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
            Coming Soon
          </span>
        )}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
} 