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

const menuItems = [
  {
    title: "PRODUCT",
    items: [
      { title: "Unified Ingestion Engine", href: "/product/unified-ingestion" },
      {
        title: "Intelligence Processing Engine",
        href: "/product/intelligence-processing",
      },
      {
        title: "Predictive Compliance Engine",
        href: "/product/predictive-compliance",
      },
    ],
  },
  {
    title: "SOLUTION",
    items: [
      { title: "Corporations", href: "/solutions/corporations" },
      { title: "Legal Service Provider", href: "/solutions/legal-service" },
      { title: "Law Firms", href: "/solutions/law-firms" },
      { title: "Industries", href: "/solutions/industries" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { title: "Help Center", href: "/resources/help-center" },
      { title: "Connectors", href: "/resources/connectors" },
      { title: "Secure by Design", href: "/resources/security" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Regulations", href: "/resources/regulations" },
    ],
  },
];

export function NavBar() {
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
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="mx-4 mt-5 md:mx-8 md:mt-10 lg:mx-10 lg:mt-12 flex items-center justify-between">
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
          className="md:hidden relative z-50 w-8 h-8 flex items-center justify-center rounded-lg  transition-colors"
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
            <NavigationMenuList>
              {menuItems.map((section) => (
                <NavigationMenuItem key={section.title}>
                  <NavigationMenuTrigger className="text-white/90 hover:text-white">
                    {section.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] md:w-[300px] p-2 bg-black/10 shadow-md backdrop-blur-xl  z-50 border-white/[0.15] rounded-md 
                      bg-gradient-to-b from-black/5 to-black/10">
                      {section.items.map((item) => (
                        <ListItem
                          key={item.title}
                          href={item.href}
                          title={item.title}
                        />
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-0 z-40 md:hidden",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          )}
        >
          <div className="absolute inset-0 bg-black/70  backdrop-blur-md" />
          <nav className="relative h-full w-full pt-24 pb-6 px-6 flex flex-col">
            {menuItems.map((section) => (
              <div
                key={section.title}
                className="py-4 border-b border-white/10"
              >
                <h2 className="text-white/70 text-sm font-medium tracking-wider mb-3">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-white/90 hover:text-white text-base font-normal block transition-colors"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href || "#"}
          className={cn(
            "block select-none rounded-md px-3 py-2.5 text-sm leading-tight no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white bg-transparent text-white/90 whitespace-nowrap",
            className
          )}
          {...props}
        >
          {title}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
