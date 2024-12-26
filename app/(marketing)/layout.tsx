import { NavBar } from "@/components/navbar";
import Footer from "@/components/footer";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="scroll-smooth overflow-hidden">
      <NavBar />
      
      {children}
      <Footer />
    </main>
  );
}
