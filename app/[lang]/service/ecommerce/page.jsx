"use client";

import React from "react";

export default function EcommercePage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "E-commerce Solutions",
      subtitle: "Build and grow your online store with our comprehensive e-commerce solutions",
      description: "Transform your business with a powerful online store. We provide end-to-end e-commerce solutions from design and development to marketing and maintenance.",
      services: [
        {
          title: "Shopify Development",
          description: "Professional Shopify store setup and customization with themes, apps, and payment integration",
          icon: "🛒"
        },
        {
          title: "WooCommerce Development",
          description: "Custom WooCommerce stores on WordPress with full functionality and responsive design",
          icon: "🏪"
        },
        {
          title: "Salla Development",
          description: "Complete Salla store setup optimized for the Saudi market with Arabic support",
          icon: "🏬"
        },
        {
          title: "Zid Development",
          description: "Professional Zid e-commerce platform setup with full customization and integration",
          icon: "🛍️"
        },
        {
          title: "Payment Gateway Integration",
          description: "Secure payment solutions including local and international payment gateways",
          icon: "💳"
        },
        {
          title: "E-commerce Optimization",
          description: "SEO, performance optimization, and conversion rate optimization for your online store",
          icon: "📈"
        }
      ]
    },
    ar: {
      title: "حلول التجارة الإلكترونية",
      subtitle: "ابنِ متجرك الإلكتروني وطوّره مع حلولنا الشاملة للتجارة الإلكترونية",
      description: "حوّل عملك بمتجر إلكتروني قوي. نحن نقدم حلول التجارة الإلكترونية الشاملة من التصميم والتطوير إلى التسويق والصيانة.",
      services: [
        {
          title: "تطوير متاجر شوبيفاي",
          description: "إعداد وتخصيص احترافي لمتجر شوبيفاي مع القوالب والتطبيقات ودمج بوابات الدفع",
          icon: "🛒"
        },
        {
          title: "تطوير متاجر ووكوميرس",
          description: "متاجر ووكوميرس مخصصة على ووردبريس بوظائف كاملة وتصميم متجاوب",
          icon: "🏪"
        },
        {
          title: "تطوير متاجر سلة",
          description: "إعداد كامل لمتجر سلة محسّن للسوق السعودي مع دعم اللغة العربية",
          icon: "🏬"
        },
        {
          title: "تطوير متاجر زد",
          description: "إعداد احترافي لمنصة زد للتجارة الإلكترونية مع تخصيص كامل وتكامل",
          icon: "🛍️"
        },
        {
          title: "تكامل بوابات الدفع",
          description: "حلول دفع آمنة بما في ذلك بوابات الدفع المحلية والدولية",
          icon: "💳"
        },
        {
          title: "تحسين التجارة الإلكترونية",
          description: "تحسين محركات البحث والأداء ومعدل التحويل لمتجرك الإلكتروني",
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
        <div className="text-center mb-5">
          <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "1rem", color: "#333" }}>
            {t.title}
          </h1>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "400", color: "#379DD7", marginBottom: "1rem" }}>
            {t.subtitle}
          </h2>
          <p style={{ fontSize: "1rem", color: "#666", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
            {t.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {t.services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div 
                className="h-100 p-4 rounded-3 shadow-sm" 
                style={{ 
                  backgroundColor: "#fff",
                  border: "1px solid #e0e0e0",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12)";
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.8rem", color: "#333" }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", marginBottom: "0" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 p-5 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
          <h3 style={{ fontSize: "1.8rem", fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
            {lang === "ar" ? "جاهز لبدء متجرك الإلكتروني؟" : "Ready to Start Your Online Store?"}
          </h3>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "1.5rem" }}>
            {lang === "ar" 
              ? "تواصل معنا اليوم ودعنا نساعدك في إنشاء متجر إلكتروني ناجح"
              : "Contact us today and let us help you build a successful online store"
            }
          </p>
          <a 
            href={`/${lang}/contact-us`} 
            className="btn btn-primary btn-lg px-5"
            style={{
              backgroundColor: "#379DD7",
              border: "none",
              borderRadius: "50px",
              padding: "12px 40px",
              fontSize: "1rem",
              fontWeight: "600"
            }}
          >
            {lang === "ar" ? "تواصل معنا" : "Contact Us"}
          </a>
        </div>
      </div>
    </div>
  );
}
