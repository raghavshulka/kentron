"use client";
import React, { useState } from "react";

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

  const toggleDropdown = (key: string) => {
    setDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeAllDropdowns = () => {
    setDropdowns({ product: false, solution: false, platform: false });
  };

  const dropdownConfigs: DropdownConfig[] = [
    { key: "product", label: "Product", items: ["Overview", "Features"] },
    { key: "solution", label: "Solution", items: ["Use Cases", "Integrations"] },
    { key: "platform", label: "Platform", items: ["Pricing", "Support"] },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-4 md:mx-[50px] flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/vector.svg" className="h-8" alt="Logo" />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
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
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/* Dropdowns */}
            {dropdownConfigs.map(({ key, label, items }) => (
              <li key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 md:w-auto"
                >
                  {label}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
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
                {dropdowns[key] && (
                  <div
                    className="absolute top-full left-0 z-10 font-normal bg-gray-800 rounded-lg shadow w-44"
                    onMouseLeave={closeAllDropdowns}
                  >
                    <ul className="py-2 text-sm text-white">
                      {items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-700"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
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
