"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

type MenuItem = {
  title: string;
  href: string;
  target?: string;
};

const menuItems = [
  {
    title: "PRODUCT",
    items: [
      { title: "Unified Ingestion Engine", href: "/product/unified-ingestion" },
      {
        title: "Intelligent Processing Engine",
        href: "/product/intelligence-processing",
      },
      {
        title: "Predictive Compliance Engine",
        href: "/product/predictive-compliance",
      },
      {
        title: "Nebula",
        href: "/product/nebula",
      },
    ] as MenuItem[],
    // useCases: [
    //   // Removed use cases from PRODUCT
    // ],
  },
  {
    title: "SOLUTIONS",
    items: [
      { title: "Organizations", href: "/solutions/organizations" },
      { title: "Law Firms", href: "/solutions/law-firms" },
      { title: "Educations", href: "/solutions/educations" },      
    ],
    useCases: [
      {
        title: "Early Case Assessment",
        // description: "Assess cases early to streamline processes.",
        href: "/solutions/early-case-assessment",
      },
      {
        title: "Seamless Data Collections",
        // description: "Collect data effortlessly across platforms.",
        href: "/solutions/seamless-data-collections",
      },
      {
        title: "Proactive Data Monitoring",
        // description: "Monitor data proactively to ensure compliance.",
        href: "/solutions/proactive-data-monitoring",
      },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      {
        title: "Documentation",
        href: "https://docs.kentron.ai",
        target: "_blank",
      },
      {
        title: "Integrations",
        href: "https://docs.kentron.ai/connector",
        target: "_blank",
      },
      { title: "Secure by Design", href: "/resources/security" },
      { title: "Case Studies", href: "/resources/case-studies" },
      {
        title: "Regulations",
        href: "https://docs.kentron.ai/regulations",
        target: "_blank",
      },
    ],
  },
];

interface NavBarProps {
  className?: string;
  textColor?: string;
}

export function NavBar({ className, textColor }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <nav className={cn("absolute top-0 left-0 w-full z-50 bg-transparent", className)}>
      <div className="mx-4 mt-5 md:mx-8 md:mt-10 lg:mx-10 lg:mt-12 flex items-center justify-between md:pr-[60px] ">
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn("md:hidden relative z-50 w-8 h-8 flex items-center justify-center rounded-lg  transition-colors", textColor)}
          aria-label="Toggle menu"
        >
          <div className="relative w-4 h-3">
            <span
              className={cn(
                "absolute w-full h-0.5 bg-white transform transition-all duration-200",
                isMenuOpen ? "rotate-45 top-1.5" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute w-full h-0.5 bg-white top-1.5 transform transition-all duration-200",
                isMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute w-full h-0.5 bg-white transform transition-all duration-200",
                isMenuOpen ? "-rotate-45 top-1.5" : "top-3"
              )}
            />
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="md:gap-4">
              {menuItems.map((section) => (
                <NavigationMenuItem key={section.title}>
                  <NavigationMenuTrigger className={cn("text-white/90 hover:text-white", textColor)}>
                    {section.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className={cn(
                        "p-4 bg-black/10 shadow-md backdrop-blur-xl z-50 border-white/[0.15] rounded-md bg-gradient-to-b from-black/5 to-black/10",
                        section.useCases
                          ? "w-[500px] grid grid-cols-[200px_1fr] " // Fixed width and grid layout
                          : "w-[300px]" // Adjusted width for non-use-case menus
                      )}
                    >
                      <div>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <ListItem
                              key={item.title}
                              href={item.href}
                              title={item.title}
                              target={(item as MenuItem).target}
                            />
                          ))}
                        </ul>
                      </div>
                      {section.useCases && (
                        <div className="border-l border-white/10 pl-4">
                          <h3 className="text-white/70 text-sm font-medium mb-3 px-3">
                            USE CASES
                          </h3>
                          <ul className="space-y-2">
                            {section.useCases.map((useCase) => (
                              <ListItem
                                key={useCase.title}
                                href={useCase.href}
                                title={useCase.title}
                                // description={useCase.description}
                              />
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-0 z-40 md:hidden bg-black/70 backdrop-blur-md",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="h-full overflow-y-auto">
            <nav className="relative w-full px-6 py-0">
              {menuItems.map((section) => (
                <div
                  key={section.title}
                  className="py-4 border-b border-white/10"
                >
                  <h2 className="text-white/70 text-sm font-medium tracking-wider mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white/90 hover:text-white text-base font-normal block transition-colors"
                          target={(item as MenuItem).target}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {section.useCases && (
                    <div className="mt-6">
                      <h2 className="text-white/70 text-sm font-medium tracking-wider mb-4">
                        USE CASES
                      </h2>
                      <ul className="space-y-4">
                        {section.useCases.map((useCase) => (
                          <li key={useCase.title}>
                            <Link
                              href={useCase.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-white/90 hover:text-white block transition-colors"
                            >
                              <div className="text-base font-normal">
                                {useCase.title}
                              </div>
                              <p className="text-sm text-white/70 mt-1">
                                {/* {useCase.description} */}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string; description?: string }
>(
  (
    { className, title, description, children, href, target, ...props },
    ref
  ) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href || "#"}
            target={target}
            className={cn(
              "block select-none rounded-md px-3 py-2.5 text-sm leading-tight no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white bg-transparent text-white/90",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium">{title}</div>
            {description && (
              <p className="text-xs text-white/70 mt-1 line-clamp-2">
                {description}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
