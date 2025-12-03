"use client";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function SiteLayout({ children }: { children: React.ReactNode } ) {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        {children}
      </main>
      <Footer />
    </>
  );
}