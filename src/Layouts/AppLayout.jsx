"use client";

import ScrollToTopButton from "@/components/buttons/ScrollToTopButton";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";
import PrivacyTermsHeader from "./PrivacyTermsHeader";

export default function AppLayout({ children }) {

  const pathname = usePathname();
  const usePrivacyHeader = ["/terms-of-use", "/privacy-policy"].includes(pathname);

  return (
    <>
      {usePrivacyHeader ? <PrivacyTermsHeader /> : <Header />}
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}
