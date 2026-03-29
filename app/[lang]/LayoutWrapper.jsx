'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children, lang }) {
  const pathname = usePathname();
  const isRegistrationPage = pathname?.includes('/ERP/erp-register');

  return (
    <>
      {!isRegistrationPage && <Navbar lang={lang} />}
      {children}
      {!isRegistrationPage && <Footer lang={lang} />}
    </>
  );
}
