"use client";

import React from "react";

export default function CloudServicesPage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "Cloud Services",
      subtitle: "Scalable and secure cloud solutions for modern businesses",
      description: "Leverage the power of cloud computing with our comprehensive cloud services. From infrastructure setup to migration and management, we ensure your business runs smoothly in the cloud.",
      services: [
        {
          title: "Cloud Infrastructure",
          description: "Design and implement robust cloud infrastructure on AWS, Azure, or Google Cloud Platform tailored to your needs",
          icon: "☁️"
        },
        {
          title: "Cloud Migration",
          description: "Seamlessly migrate your applications and data to the cloud with minimal downtime and maximum security",
          icon: "🔄"
        },
        {
          title: "Cloud Management",
          description: "Ongoing cloud infrastructure management, monitoring, and optimization to ensure peak performance",
          icon: "⚙️"
        },
        {
          title: "Cloud Security",
          description: "Implement comprehensive security measures including encryption, access control, and compliance",
          icon: "🔒"
        },
        {
          title: "Cloud Backup & Recovery",
          description: "Automated backup solutions and disaster recovery planning to protect your critical data",
          icon: "💾"
        },
        {
          title: "Cloud Cost Optimization",
          description: "Analyze and optimize your cloud spending to maximize ROI and reduce unnecessary costs",
          icon: "💰"
        }
      ]
    },
    ar: {
      title: "خدمات الحوسبة السحابية",
      subtitle: "حلول سحابية قابلة للتطوير وآمنة للأعمال الحديثة",
      description: "استفد من قوة الحوسبة السحابية مع خدماتنا الشاملة. من إعداد البنية التحتية إلى الترحيل والإدارة، نضمن تشغيل عملك بسلاسة في السحابة.",
      services: [
        {
          title: "البنية التحتية السحابية",
          description: "تصميم وتنفيذ بنية تحتية سحابية قوية على AWS أو Azure أو Google Cloud Platform مصممة خصيصًا لاحتياجاتك",
          icon: "☁️"
        },
        {
          title: "الترحيل السحابي",
          description: "ترحيل تطبيقاتك وبياناتك بسلاسة إلى السحابة مع الحد الأدنى من وقت التوقف والحد الأقصى من الأمان",
          icon: "🔄"
        },
        {
          title: "إدارة السحابة",
          description: "إدارة ومراقبة وتحسين البنية التحتية السحابية المستمرة لضمان الأداء الأمثل",
          icon: "⚙️"
        },
        {
          title: "أمن السحابة",
          description: "تنفيذ تدابير أمنية شاملة بما في ذلك التشفير والتحكم في الوصول والامتثال",
          icon: "🔒"
        },
        {
          title: "النسخ الاحتياطي والاسترداد السحابي",
          description: "حلول نسخ احتياطي تلقائية وتخطيط للتعافي من الكوارث لحماية بياناتك الحيوية",
          icon: "💾"
        },
        {
          title: "تحسين تكلفة السحابة",
          description: "تحليل وتحسين إنفاقك السحابي لتعظيم العائد على الاستثمار وتقليل التكاليف غير الضرورية",
          icon: "💰"
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
            {lang === "ar" ? "جاهز للانتقال إلى السحابة؟" : "Ready to Move to the Cloud?"}
          </h3>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "1.5rem" }}>
            {lang === "ar" 
              ? "تواصل معنا اليوم ودعنا نساعدك في رحلتك السحابية"
              : "Contact us today and let us help you with your cloud journey"
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
