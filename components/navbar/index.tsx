"use client";
import React, { useState } from "react";
import Image from "next/image";

interface DropdownConfig {
  key: string;
  label: string;
  items: string[];
}

export function NavBar() {
  const [dropdowns, setDropdowns] = useState<Record<string, boolean>>({
    product: false,
    solution: false,
    platform: false,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    // On desktop: toggle dropdown
    // On mobile: toggle expansion
    if (window.innerWidth >= 768) {
      setDropdowns((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    } else {
      setExpandedMobile(expandedMobile === key ? null : key);
    }
  };

  const closeAllDropdowns = () => {
    setDropdowns({ product: false, solution: false, platform: false });
    setExpandedMobile(null);
  };

  const dropdownConfigs: DropdownConfig[] = [
    { key: "product", label: "PRODUCT", items: ["Overview", "Features"] },
    { key: "solution", label: "SOLUTION", items: ["Use Cases", "Integrations"] },
    { key: "platform", label: "PLATFORM", items: ["Pricing", "Support"] },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-[20px] mt-[40px] md:mt-[47px] flex flex-wrap items-center justify-between  md:mx-[40px]">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/vector.svg" className="h-8" alt="Logo" width={160} height={37} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center p-2 w-16 h-8 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0
            bg-white/5 backdrop-blur-xl border border-white/10 md:bg-transparent md:backdrop-filter-none md:border-0">
            {dropdownConfigs.map(({ key, label, items }) => (
              <li key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center md:font-sf-pro md:text-[16px] justify-between w-full py-2 px-3 text-white rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 md:w-auto transition-colors duration-200"
                >
                  {label}
                  <svg
                    className={`w-[17px] h-[17px] ms-2.5 transition-transform duration-200 ${
                      (expandedMobile === key || dropdowns[key]) ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                
                {/* Desktop Dropdown */}
                {dropdowns[key] && window.innerWidth >= 768 && (
                  <div
                    className="absolute top-full left-0 z-10 font-normal bg-white/5 backdrop-blur-xl rounded-lg shadow-lg w-44 border border-white/10"
                    onMouseLeave={closeAllDropdowns}
                  >
                    <ul className="py-2 text-sm text-white/90">
                      {items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-white/10 hover:backdrop-blur-xl transition-all duration-200 ease-in-out"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Mobile Expanded Menu */}
                {expandedMobile === key && window.innerWidth < 768 && (
                  <div className="mt-2 pl-4 border-l border-white/10">
                    {items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block py-2 text-white/90 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
