"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLLIElement | null>>({});

  // Detect if the viewport is mobile-sized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMobile) {
        const isOutside = Object.values(dropdownRefs.current).every(
          (ref) => ref && !ref.contains(event.target as Node)
        );
        if (isOutside) {
          closeAllDropdowns();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDropdownHover = (key: string, isHovering: boolean) => {
    if (!isMobile) {
      setDropdowns((prev) => ({
        ...prev,
        [key]: isHovering,
      }));
    }
  };

  const toggleDropdown = (key: string) => {
    if (isMobile) {
      setExpandedMobile((prev) => (prev === key ? null : key));
    }
  };

  const closeAllDropdowns = () => {
    setDropdowns({ product: false, solution: false, platform: false });
    setExpandedMobile(null);
  };

  const dropdownConfigs: DropdownConfig[] = [
    { key: "product", label: "PRODUCT", items: ["Overview", "Features"] },
    {
      key: "solution",
      label: "SOLUTION",
      items: ["Use Cases", "Integrations"],
    },
    { key: "platform", label: "PLATFORM", items: ["Pricing", "Support"] },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-4 mt-5 md:mx-8 md:mt-10 lg:mx-10 lg:mt-12 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/mainlogo.svg"
            alt="Kentron"
            width={90}
            height={30}
            className="md:w-[160px] md:h-[37px]"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
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
          <ul
            className="flex flex-col p-3 md:p-0 mt-3 md:mt-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row
            bg-white/5 backdrop-blur-xl border border-white/10 md:bg-transparent md:backdrop-filter-none md:border-0"
          >
            {dropdownConfigs.map(({ key, label, items }) => (
              <li
                key={key}
                ref={(el) => {
                  if (el) {
                    dropdownRefs.current[key] = el;
                  }
                }}
                className="relative"
                onMouseEnter={() => handleDropdownHover(key, true)}
                onMouseLeave={() => handleDropdownHover(key, false)}
              >
                <button
                  onClick={() => toggleDropdown(key)}
                  className="flex items-center justify-between w-full py-2 px-3 
                    text-sm tracking-wide md:text-[16px] lg:text-base md:font-sf-pro text-white/90 
                    rounded hover:bg-white/10 md:hover:bg-transparent md:border-0 
                    md:hover:text-white md:p-0 md:w-auto transition-all duration-200"
                >
                  {label}
                  <svg
                    className={`w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-200 ${
                      expandedMobile === key || dropdowns[key]
                        ? "rotate-180"
                        : ""
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
                {!isMobile && dropdowns[key] && (
                  <div
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/10 backdrop-blur-xl 
                    border border-white/10 transform opacity-100 scale-100 transition-all duration-200 ease-out"
                  >
                    <div className="py-1">
                      {items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-white/90 hover:bg-white/10 
                            transition-colors duration-200"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Expanded Menu */}
                {isMobile && expandedMobile === key && (
                  <div className="mt-1 pl-3 border-l border-white/10">
                    {items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block py-1.5 text-sm tracking-wide text-white/80 
                          hover:text-white transition-colors duration-200"
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
