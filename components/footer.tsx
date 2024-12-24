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
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between lg:px-8">
        <div className="space-y-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/Frame20.svg"
                alt="Kentron"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="space-y-2">
            <Link
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </Link>
            <p className="text-sm text-gray-600">
              Copyright © 2024 Kentron
              <br />
              All rights reserved
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:mt-0">
          {/* PRODUCT Section */}
          <div className="space-y-4">
            <h3 className="text-[16px] font-sf-pro font-semibold leading-[16px] text-gray-900">
              PRODUCT
            </h3>
            <ul role="list" className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-sf-pro leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTION Section */}
          <div className="space-y-4 mt-8">
            <h3 className="text-[16px] font-sf-pro font-semibold leading-[16px] text-gray-900">
              SOLUTION
            </h3>
            <ul role="list" className="space-y-2">
              {navigation.solution.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-sf-pro leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PLATFORM Section */}
          <div className="space-y-4 mt-8">
            <h3 className="text-[16px] font-sf-pro font-semibold leading-[16px] text-gray-900">
              PLATFORM
            </h3>
            <ul role="list" className="space-y-2">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-sf-pro leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LEGAL Section */}
        <div className="mt-16 md:mt-0">
          <ul role="list" className="space-y-4">
            {navigation.legal.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-sf-pro leading-6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
