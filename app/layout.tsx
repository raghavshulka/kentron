import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import GoogleAnalytics from '@/components/GoogleAnalytics';

// export const metadata: Metadata = {
//   title: {
//     default: 'KENTRON | Enterprise Legal Intelligence Platform',
//     template: '%s | KENTRON'
//   },
//   description: 'KENTRON is an Enterprise Legal Intelligence Platform that streamlines data management, ensures compliance, and provides advanced security features for legal and compliance purposes.',
//   keywords: [
//     'Legal Intelligence' ,
//     'Enterprise Compliance',
//     'Data Security',
//     'Legal Technology',
//     'Compliance Management',
//     'Data Privacy',
//     'Enterprise Security',
//     'Legal Data Management'
//   ],
//   authors: [{ name: 'KENTRON' }],
//   creator: 'KENTRON',
//   publisher: 'KENTRON',
//   formatDetection: {
//     email: false,
//     address: false,
//     telephone: false,
//   },
// };

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
