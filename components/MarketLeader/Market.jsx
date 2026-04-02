"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideCode, LucideSmartphone, LucideListChecks } from "lucide-react";
import './Market.css';

export default function Market({ lang }) {
  const [activeTab, setActiveTab] = useState(1);

  const translations = {
    en: {
      headerTitle: "Why Choose Next Future Technology?",
      headerDesc:
        "Next Future Technology Company provides integrated digital solutions including software development, ERP systems, websites, applications, and digital marketing, helping your business succeed in the modern digital landscape.",
      tabs: [
        {
          title: "Expert Developer Team",
          description:
            "Our team of engineers, developers, and IT specialists deliver high-quality, scalable solutions tailored to your business needs.",
        },
        {
          title: "Comprehensive Digital Solutions",
          description:
            "We offer a complete digital experience including websites, online stores, SEO services, marketing, and ERP solutions.",
        },
        {
          title: "Client Success & Support",
          description:
            "We ensure sustainable growth and long-term client relationships with high-quality services and after-sales support.",
        },
      ],
      cta: "Learn more about Next Future Technology",
    },
    ar: {
      headerTitle: "لماذا تختار نيكست  فيوتشر تكنولوجي؟",
      headerDesc:
        "تقدم شركة نيكست  فيوتشر تكنولوجي حلولًا رقمية متكاملة تشمل تطوير البرمجيات، أنظمة ERP، المواقع والتطبيقات، والتسويق الرقمي لمساعدة أعمالك على النجاح في العصر الرقمي.",
      tabs: [
        {
          title: "فريق مطورين وخبراء",
          description:
            "يقدم فريقنا من المهندسين والمطورين والمتخصصين في تكنولوجيا المعلومات حلولًا عالية الجودة وقابلة للتوسع مصممة خصيصًا لتلبية احتياجات أعمالك.",
        },
        {
          title: "حلول رقمية شاملة",
          description:
            "نوفر تجربة رقمية متكاملة تشمل المواقع والمتاجر الإلكترونية، خدمات SEO، التسويق، وأنظمة ERP.",
        },
        {
          title: "نجاح العملاء والدعم",
          description:
            "نضمن نموًا مستدامًا وعلاقات طويلة الأمد مع العملاء من خلال خدمات عالية الجودة ودعم ما بعد البيع.",
        },
      ],
      cta: "اكتشف المزيد عن نيكست  فيوتشر تكنولوجي",
    },
  };

  const t = translations[lang] || translations.en; // default to English

  const tabs = [
    { id: 1, icon: <LucideCode className="me-2" />, ...t.tabs[0] },
    { id: 2, icon: <LucideSmartphone className="me-2" />, ...t.tabs[1] },
    { id: 3, icon: <LucideListChecks className="me-2" />, ...t.tabs[2] },
  ];

  return (
    <section
      className="py-5 position-relative"
      style={{ 
        backgroundImage: "url('/ser-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        direction: lang === "ar" ? "rtl" : "ltr", 
        overflow: "hidden" 
      }}
    >
      {/* Overlay for better readability */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          zIndex: 0
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-3 text-black">{t.headerTitle}</h2>
          <div
            className="mx-auto mb-3 text-black"
            style={{ width: "80px", height: "4px", backgroundColor: "#0d6efd" }}
          ></div>
          <p className="text-black">{t.headerDesc}</p>
        </div>

        {/* Tabs */}
        <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-8">
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      className="tab-panel"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="d-flex align-items-center mb-3 flex-wrap">
                        <div className="me-3 fs-2 text-primary">{tab.icon}</div>
                        <h4 className="mb-0">{tab.title}</h4>
                      </div>
                      <p className="mb-0">{tab.description}</p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-4">
          <a href={`/${lang}/about-us`} className="btn btn-primary btn-lg">
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}