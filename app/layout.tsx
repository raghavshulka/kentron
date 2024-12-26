import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import GoogleAnalytics from '@/components/GoogleAnalytics';

export const metadata: Metadata = {
  title: "Kentron",
  description:
    "Kentron is a platform that provides a wide range of AI tools and services to help you stay on top of your business. Generate images, text and everything else that you need to get your business off the ground.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
