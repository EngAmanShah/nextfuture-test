
"use client";

import React from "react";
import ServiceHero from "@/components/ServiceHero";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import DevelopmentTabs from "@/components/development_tab";
import Skills from "@/components/Skills/Skills";
import ERPPage from "@/components/ERP_three_tabs";

import { GiSkills } from "react-icons/gi";

export default function ServicePage({ params }) {
  const resolvedParams = React.use(params);
  const lang = resolvedParams?.lang || "ar";

  return (
    <>
      <ServiceHero lang={lang} />
      <ServicesSection params={{ lang }} />

      <ERPPage lang={lang} />

      <DevelopmentTabs lang={lang} />

      <Skills lang={lang} />

    </>
  );
}