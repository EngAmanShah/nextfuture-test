"use client";

import React from "react";

export default function TailoredPage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "Tailored Solutions",
      subtitle: "Custom-built solutions for your unique business needs",
      description: "Next Future Technology provides professional services for creating & developing tailored seamless & secure services experience that supports your business growth & achieves your digital goals.",
      services: [
        {
          title: "Website Development",
          description: "Custom websites built with modern technologies, responsive design, and optimized performance",
          icon: "💻"
        },
        {
          title: "Tailored ERP Systems",
          description: "Enterprise resource planning systems customized to fit your specific business processes",
          icon: "⚙️"
        },
        {
          title: "Mobile & Tablet Apps",
          description: "Native and cross-platform mobile applications for iOS and Android devices",
          icon: "📱"
        },
        {
          title: "IT Infrastructure Dev",
          description: "Comprehensive IT infrastructure development and deployment services",
          icon: "🏗️"
        }
      ]
    },
    ar: {
      title: "حلول مخصصة",
      subtitle: "حلول مصممة خصيصاً لاحتياجات عملك الفريدة",
      description: "توفر شركة نكست فيوتشر للتقنية خدمات احترافية لإنشاء وتطوير تجربة خدمات سلسة وآمنة ومخصصة تدعم نمو أعمالك وتحقق أهدافك الرقمية.",
      services: [
        {
          title: "تطوير المواقع الإلكترونية",
          description: "مواقع ويب مخصصة مبنية بتقنيات حديثة وتصميم متجاوب وأداء محسّن",
          icon: "💻"
        },
        {
          title: "أنظمة ERP مخصصة",
          description: "أنظمة تخطيط موارد المؤسسات المخصصة لتناسب عمليات عملك المحددة",
          icon: "⚙️"
        },
        {
          title: "تطبيقات الجوال والتابلت",
          description: "تطبيقات جوال أصلية ومتعددة المنصات لأجهزة iOS و Android",
          icon: "📱"
        },
        {
          title: "تطوير البنية التحتية لتقنية المعلومات",
          description: "خدمات شاملة لتطوير ونشر البنية التحتية لتقنية المعلومات",
          icon: "🏗️"
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "40px", background: "#f8f9fa" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 style={{ fontSize: "1.2rem", fontWeight: "400", marginBottom: "0.8rem", color: "#333" }}>
            {t.title}
          </h1>
          <h2 style={{ fontSize: "0.9rem", fontWeight: "400", color: "#379DD7", marginBottom: "0.8rem" }}>
            {t.subtitle}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#666", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
            {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 mt-3">
          {t.services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  border: "1px solid #e0e0e0",
                  height: "100%",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: "400", marginBottom: "0.6rem", color: "#333" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.5", margin: 0 }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
