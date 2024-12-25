import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navigation = {
    product: [
      { name: "Unified Ingestion Engine", href: "#" },
      { name: "Intelligence Retrieval Engine", href: "#" },
      { name: "Predictive Compliance Engine", href: "#" },
    ],
    solution: [
      { name: "Corporations", href: "#" },
      { name: "Legal Service Provider", href: "#" },
      { name: "Law Firms", href: "#" },
      { name: "Financial Services", href: "#" },
      { name: "Healthcare", href: "#" },
      { name: "Education", href: "#" },
    ],
    platform: [
      { name: "Seamless Data Collections", href: "#" },
      { name: "Early Case Assessment", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ],
  };

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12">
          {/* Logo and Social Section - 3 columns wide */}
          <div className="md:col-span-3 space-y-8">
            <div>
              <Link href="/" className="flex items-center">
                <Image
                  src="/Frame20.svg"
                  alt="Kentron"
                  width={120}
                  height={40}
                  priority
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <div className="space-y-6">
              <Link
                href="https://linkedin.com"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </Link>
              <p className="text-sm text-gray-600">
                Copyright © {new Date().getFullYear()} Kentron
                <br />
                All rights reserved
              </p>
            </div>
          </div>

          {/* Navigation Sections - 3 columns each */}
          <div className="md:col-span-3">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Product
              </h3>
              <ul role="list" className="space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Solution
              </h3>
              <ul role="list" className="space-y-4">
                {navigation.solution.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Platform
              </h3>
              <ul role="list" className="space-y-4">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 space-y-6">
              <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase">
                Legal
              </h3>
              <ul role="list" className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
