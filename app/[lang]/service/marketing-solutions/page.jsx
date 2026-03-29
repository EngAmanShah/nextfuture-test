"use client";

import React from "react";

export default function MarketingSolutionsPage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "Marketing Solutions",
      subtitle: "Comprehensive digital marketing services to grow your brand",
      description: "Boost your online presence and reach your target audience with our strategic marketing solutions. From social media to SEO, we've got you covered.",
      services: [
        {
          title: "Digital Marketing",
          description: "Complete digital marketing strategies including SEO, SEM, and content marketing to increase your online visibility",
          icon: "📊"
        },
        {
          title: "Social Media Marketing",
          description: "Engage your audience across all major social platforms with targeted campaigns and creative content",
          icon: "📱"
        },
        {
          title: "Branding & Identity",
          description: "Build a strong brand identity with professional logo design, brand guidelines, and visual assets",
          icon: "🎨"
        },
        {
          title: "Content Creation",
          description: "High-quality content including copywriting, video production, and graphic design for all your marketing needs",
          icon: "✍️"
        },
        {
          title: "Email Marketing",
          description: "Targeted email campaigns that convert leads into customers with personalized messaging",
          icon: "📧"
        },
        {
          title: "Analytics & Reporting",
          description: "Data-driven insights and detailed reports to track your marketing performance and ROI",
          icon: "📈"
        }
      ]
    },
    ar: {
      title: "حلول التسويق",
      subtitle: "خدمات تسويق رقمي شاملة لتنمية علامتك التجارية",
      description: "عزز تواجدك عبر الإنترنت واصل إلى جمهورك المستهدف من خلال حلولنا التسويقية الاستراتيجية. من وسائل التواصل الاجتماعي إلى تحسين محركات البحث، نحن نغطي كل شيء.",
      services: [
        {
          title: "التسويق الرقمي",
          description: "استراتيجيات تسويق رقمي كاملة بما في ذلك تحسين محركات البحث والتسويق عبر محركات البحث والتسويق بالمحتوى لزيادة ظهورك عبر الإنترنت",
          icon: "📊"
        },
        {
          title: "التسويق عبر وسائل التواصل الاجتماعي",
          description: "تفاعل مع جمهورك عبر جميع المنصات الاجتماعية الرئيسية من خلال حملات مستهدفة ومحتوى إبداعي",
          icon: "📱"
        },
        {
          title: "العلامة التجارية والهوية",
          description: "بناء هوية علامة تجارية قوية مع تصميم شعار احترافي وإرشادات العلامة التجارية والأصول المرئية",
          icon: "🎨"
        },
        {
          title: "إنشاء المحتوى",
          description: "محتوى عالي الجودة بما في ذلك كتابة النصوص وإنتاج الفيديو والتصميم الجرافيكي لجميع احتياجاتك التسويقية",
          icon: "✍️"
        },
        {
          title: "التسويق عبر البريد الإلكتروني",
          description: "حملات بريد إلكتروني مستهدفة تحول العملاء المحتملين إلى عملاء من خلال رسائل مخصصة",
          icon: "📧"
        },
        {
          title: "التحليلات والتقارير",
          description: "رؤى قائمة على البيانات وتقارير مفصلة لتتبع أداء التسويق الخاص بك والعائد على الاستثمار",
          icon: "📈"
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
          <p style={{ fontSize: "0.9rem", color: "#666", maxWidth: "900px", margin: "0 auto", lineHeight: "1.6" }}>
            {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-3 mt-3">
          {t.services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div
                style={{
                  background: "linear-gradient(135deg, #fff 0%, #f8f9fa 100%)",
                  borderRadius: "12px",
                  padding: "1.3rem",
                  border: "1px solid #e0e0e0",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: "0.7rem" }}>{service.icon}</div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: "400", marginBottom: "0.5rem", color: "#333" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.5", margin: 0, flex: 1 }}>
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
