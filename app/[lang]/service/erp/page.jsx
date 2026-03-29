"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ERPPage() {
  const params = useParams();
  const { lang } = params || { lang: "en" };

  const content = {
    en: {
      title: "ERP Solutions",
      subtitle: "Comprehensive Enterprise Resource Planning Systems",
      description: "Transform your business operations with our powerful ERP solutions. We offer industry-leading platforms and custom solutions tailored to your specific needs.",
      
      solutions: [
        {
          title: "Odoo ERP",
          description: "Open-source business management software with comprehensive modules for all business needs",
          icon: "🔷",
          link: "/ERP/odoo",
          features: ["Sales & CRM", "Accounting", "Inventory", "Manufacturing", "HR Management"]
        },
        {
          title: "Construction Management ERP",
          description: "Specialized ERP system designed for construction companies and contractors",
          icon: "🏗️",
          link: "/ERP/Construction-Management",
          features: ["Project Management", "Cost Tracking", "Resource Planning", "Invoice Management", "Site Monitoring"]
        },
        {
          title: "Property Management ERP",
          description: "Complete property management solution for real estate businesses",
          icon: "🏢",
          link: "/ERP/property-management",
          features: ["Lease Management", "Tenant Portal", "Maintenance Tracking", "Financial Reports", "Document Management"]
        },
        {
          title: "Custom ERP Solutions",
          description: "Tailored ERP systems built specifically for your unique business requirements",
          icon: "⚙️",
          link: "/ERP/custom",
          features: ["Custom Modules", "Scalable Architecture", "Full Integration", "Dedicated Support", "Continuous Updates"]
        }
      ],

      benefits: {
        title: "Why Choose Our ERP Solutions?",
        items: [
          {
            icon: "📊",
            title: "Centralized Data",
            description: "All your business data in one unified system"
          },
          {
            icon: "⚡",
            title: "Increased Efficiency",
            description: "Automate workflows and reduce manual tasks"
          },
          {
            icon: "💰",
            title: "Cost Reduction",
            description: "Lower operational costs and improve ROI"
          },
          {
            icon: "📈",
            title: "Real-time Analytics",
            description: "Make data-driven decisions with live insights"
          },
          {
            icon: "🔒",
            title: "Enhanced Security",
            description: "Enterprise-grade security for your data"
          },
          {
            icon: "🌐",
            title: "Scalability",
            description: "Grow your system as your business expands"
          }
        ]
      },

      industries: {
        title: "Industries We Serve",
        list: ["Construction & Real Estate", "Manufacturing", "Retail & E-commerce", "Healthcare", "Logistics & Distribution", "Professional Services"]
      },

      cta: {
        title: "Ready to Transform Your Business?",
        description: "Let us help you choose the perfect ERP solution for your organization",
        button: "Get Free Consultation"
      }
    },
    ar: {
      title: "حلول تخطيط موارد المؤسسات",
      subtitle: "أنظمة تخطيط موارد المؤسسات الشاملة",
      description: "حوّل عمليات عملك مع حلول ERP القوية لدينا. نقدم منصات رائدة في الصناعة وحلول مخصصة تناسب احتياجاتك الخاصة.",
      
      solutions: [
        {
          title: "أودو ERP",
          description: "برنامج إدارة الأعمال مفتوح المصدر مع وحدات شاملة لجميع احتياجات العمل",
          icon: "🔷",
          link: "/ERP/odoo",
          features: ["المبيعات وإدارة العملاء", "المحاسبة", "المخزون", "التصنيع", "إدارة الموارد البشرية"]
        },
        {
          title: "نظام إدارة شركات المقاولات",
          description: "نظام ERP متخصص مصمم لشركات المقاولات والبناء",
          icon: "🏗️",
          link: "/ERP/Construction-Management",
          features: ["إدارة المشاريع", "تتبع التكاليف", "تخطيط الموارد", "إدارة الفواتير", "مراقبة المواقع"]
        },
        {
          title: "نظام إدارة العقارات",
          description: "حل شامل لإدارة العقارات لشركات العقارات",
          icon: "🏢",
          link: "/ERP/property-management",
          features: ["إدارة العقود", "بوابة المستأجرين", "تتبع الصيانة", "التقارير المالية", "إدارة المستندات"]
        },
        {
          title: "حلول ERP مخصصة",
          description: "أنظمة ERP مصممة خصيصًا لمتطلبات عملك الفريدة",
          icon: "⚙️",
          link: "/ERP/custom",
          features: ["وحدات مخصصة", "بنية قابلة للتوسع", "تكامل كامل", "دعم مخصص", "تحديثات مستمرة"]
        }
      ],

      benefits: {
        title: "لماذا تختار حلول ERP لدينا؟",
        items: [
          {
            icon: "📊",
            title: "بيانات مركزية",
            description: "جميع بيانات عملك في نظام موحد واحد"
          },
          {
            icon: "⚡",
            title: "زيادة الكفاءة",
            description: "أتمتة سير العمل وتقليل المهام اليدوية"
          },
          {
            icon: "💰",
            title: "خفض التكاليف",
            description: "تقليل التكاليف التشغيلية وتحسين العائد على الاستثمار"
          },
          {
            icon: "📈",
            title: "تحليلات فورية",
            description: "اتخذ قرارات قائمة على البيانات مع رؤى مباشرة"
          },
          {
            icon: "🔒",
            title: "أمان محسّن",
            description: "أمان على مستوى المؤسسات لبياناتك"
          },
          {
            icon: "🌐",
            title: "قابلية التوسع",
            description: "قم بتوسيع نظامك مع نمو عملك"
          }
        ]
      },

      industries: {
        title: "الصناعات التي نخدمها",
        list: ["البناء والعقارات", "التصنيع", "التجزئة والتجارة الإلكترونية", "الرعاية الصحية", "اللوجستيات والتوزيع", "الخدمات المهنية"]
      },

      cta: {
        title: "جاهز لتحويل عملك؟",
        description: "دعنا نساعدك في اختيار حل ERP المثالي لمؤسستك",
        button: "احصل على استشارة مجانية"
      }
    }
  };

  const t = content[lang] || content.en;

  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px", paddingBottom: "40px" }}>
      {/* Hero Section */}
      <div 
        className="text-center py-5 mb-5" 
        style={{ 
          background: "linear-gradient(135deg, #379DD7 0%, #2c7bb6 100%)",
          color: "white"
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: "2.8rem", fontWeight: "700", marginBottom: "1rem" }}>
            {t.title}
          </h1>
          <h2 style={{ fontSize: "1.3rem", fontWeight: "400", marginBottom: "1rem", opacity: "0.95" }}>
            {t.subtitle}
          </h2>
          <p style={{ fontSize: "1.1rem", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8", opacity: "0.9" }}>
            {t.description}
          </p>
        </div>
      </div>

      <div className="container">
        {/* ERP Solutions Grid */}
        <div className="mb-5">
          <h2 className="text-center mb-5" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {lang === "ar" ? "حلولنا" : "Our Solutions"}
          </h2>
          <div className="row g-4">
            {t.solutions.map((solution, index) => (
              <div key={index} className="col-md-6">
                <Link 
                  href={`/${lang}${solution.link}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div 
                    className="h-100 p-4 rounded-3 shadow-sm" 
                    style={{ 
                      backgroundColor: "#fff",
                      border: "2px solid #e0e0e0",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = "#379DD7";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(55, 157, 215, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "#e0e0e0";
                      e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12)";
                    }}
                  >
                    <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
                      {solution.icon}
                    </div>
                    <h3 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "0.8rem", color: "#333" }}>
                      {solution.title}
                    </h3>
                    <p style={{ fontSize: "1rem", color: "#666", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                      {solution.description}
                    </p>
                    <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "1rem" }}>
                      <h4 style={{ fontSize: "0.9rem", fontWeight: "600", color: "#379DD7", marginBottom: "0.8rem" }}>
                        {lang === "ar" ? "المميزات الرئيسية:" : "Key Features:"}
                      </h4>
                      <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                        {solution.features.map((feature, idx) => (
                          <li key={idx} style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.5rem" }}>
                            <span style={{ color: "#379DD7", marginRight: "0.5rem" }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <div className="mt-3 text-end">
                      <span style={{ color: "#379DD7", fontWeight: "600", fontSize: "0.95rem" }}>
                        {lang === "ar" ? "اعرف المزيد ←" : "Learn More →"}
                      </span>
                    </div> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-5 py-5" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "3rem" }}>
          <h2 className="text-center mb-5" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {t.benefits.title}
          </h2>
          <div className="row g-4">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} className="col-md-4">
                <div className="text-center p-3">
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    {benefit.icon}
                  </div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.8rem", color: "#333" }}>
                    {benefit.title}
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6" }}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Section */}
        <div className="mb-5 text-center">
          <h2 className="mb-4" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {t.industries.title}
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {t.industries.list.map((industry, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-pill"
                style={{
                  backgroundColor: "#fff",
                  border: "2px solid #379DD7",
                  color: "#379DD7",
                  fontWeight: "600",
                  fontSize: "0.95rem"
                }}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5 p-5 rounded-3" style={{ background: "linear-gradient(135deg, #379DD7 0%, #2c7bb6 100%)", color: "white" }}>
          <h3 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "1rem" }}>
            {t.cta.title}
          </h3>
          <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: "0.95" }}>
            {t.cta.description}
          </p>
          <Link 
            href={`/${lang}/contact-us`} 
            className="btn btn-light btn-lg px-5"
            style={{
              borderRadius: "50px",
              padding: "12px 40px",
              fontSize: "1.1rem",
              fontWeight: "600",
              color: "#379DD7"
            }}
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </div>
  );
}