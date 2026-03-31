'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LayoutWrapper({ children, lang }) {
  const pathname = usePathname();
  const pathLang = pathname?.split("/")?.[1];
  const resolvedLang = pathLang === "ar" || pathLang === "en" ? pathLang : (lang || "en");
  const isRegistrationPage = pathname?.includes('/ERP/erp-register');

  useEffect(() => {
    document.documentElement.lang = resolvedLang;
    document.documentElement.dir = resolvedLang === "ar" ? "rtl" : "ltr";
  }, [resolvedLang]);

  return (
    <>
      {!isRegistrationPage && <Navbar lang={resolvedLang} />}
      {children}
    </>
  );
}
