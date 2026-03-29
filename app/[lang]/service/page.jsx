
"use client";

import React from "react";
import ServiceHero from "@/components/ServiceHero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import ERPPage from "@/components/ERP_three_tabs";

export default function ServicePage({ params }) {
  const resolvedParams = React.use(params);
  const lang = resolvedParams?.lang || "ar";

  return (
    <>
      <ServiceHero lang={lang} />
      <ServicesSection params={{ lang }} />
      <ERPPage lang={lang} />
    </>
  );
}