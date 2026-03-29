"use client";

import React from "react";
import Image from "next/image";

export default function ReadyMadePage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "Ready IT Solutions",
      subtitle: "Pre-built, reliable solutions ready to deploy",
      description: "Our ready-made IT solutions are designed to meet common business needs with minimal customization. Get up and running quickly with proven, tested systems.",
      services: [
        {
          title: "Cloud Services",
          description: "Secure and scalable cloud infrastructure solutions for modern businesses",
          image: "/services/images/cloud.jpg"
        },
        {
          title: "Property Management ERP",
          description: "Complete property management system with tenant, lease, and maintenance tracking",
          image: "/services/images/property.jpg"
        },
        {
          title: "Odoo ERP",
          description: "Fully integrated business management suite with accounting, CRM, inventory, and more",
          image: "/services/images/odoo.jpg"
        }
      ]
    },
    ar: {
      title: "الحلول الجاهزة",
      subtitle: "حلول موثوقة جاهزة للنشر",
      description: "تم تصميم حلولنا التقنية الجاهزة لتلبية احتياجات الأعمال الشائعة بأقل قدر من التخصيص. ابدأ بسرعة مع أنظمة مثبتة ومختبرة.",
      services: [
        {
          title: "الخدمات السحابية",
          description: "حلول بنية تحتية سحابية آمنة وقابلة للتوسع للشركات الحديثة",
          image: "/services/images/cloud.jpg"
        },
        {
          title: "نظام إدارة العقارات",
          description: "نظام إدارة عقارات كامل مع تتبع المستأجرين والإيجارات والصيانة",
          image: "/services/images/property.jpg"
        },
        {
          title: "أودو ERP",
          description: "مجموعة إدارة أعمال متكاملة بالكامل مع المحاسبة وإدارة علاقات العملاء والمخزون والمزيد",
          image: "/services/images/odoo.jpg"
        }
      ]
    }
  };

  const t = content[lang] || content.en;

  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "40px" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 style={{ fontSize: "1.2rem", fontWeight: "400", marginBottom: "0.8rem", color: "#333" }}>
            {t.title}
          </h1>
          <h2 style={{ fontSize: "0.9rem", fontWeight: "400", color: "#379DD7", marginBottom: "0.8rem" }}>
            {t.subtitle}
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#666", maxWidth: "800px", margin: "0 auto" }}>
            {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 mt-3">
          {t.services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  overflow: "hidden",
                  height: "100%",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ height: "200px", background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "3rem", color: "#379DD7" }}>📦</div>
                </div>
                <div style={{ padding: "1.2rem" }}>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: "400", marginBottom: "0.5rem", color: "#333" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.5", margin: 0 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
