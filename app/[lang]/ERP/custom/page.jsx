"use client";

import React from "react";
import Link from "next/link";

export default function CustomERPPage({ params }) {
  const { lang } = params;

  const content = {
    en: {
      title: "Custom ERP Solutions",
      subtitle: "Tailored ERP systems designed specifically for your business needs",
      description: "Every business is unique. Our custom ERP solutions are built from the ground up to match your specific workflows, processes, and requirements, giving you a competitive advantage.",
      heroTagline: "Transform Your Business with Custom ERP",
      
      features: [
        {
          title: "Fully Customized",
          description: "Built specifically for your business processes and workflows",
          icon: "🎯"
        },
        {
          title: "Scalable Architecture",
          description: "Grows with your business without limitations",
          icon: "📈"
        },
        {
          title: "Integration Ready",
          description: "Seamlessly integrates with your existing systems",
          icon: "🔗"
        },
        {
          title: "User-Friendly",
          description: "Intuitive interface designed for your team",
          icon: "👥"
        },
        {
          title: "Real-Time Analytics",
          description: "Make data-driven decisions with live insights",
          icon: "📊"
        },
        {
          title: "24/7 Support",
          description: "Dedicated support team for your custom solution",
          icon: "🛟"
        }
      ],

      modules: {
        title: "Custom Modules We Develop",
        list: [
          {
            name: "Financial Management",
            description: "Custom accounting, budgeting, and financial reporting tailored to your needs",
            icon: "💰"
          },
          {
            name: "Inventory Management",
            description: "Track and manage your inventory with custom workflows and automation",
            icon: "📦"
          },
          {
            name: "Human Resources",
            description: "Custom HR solutions for recruitment, payroll, and employee management",
            icon: "👔"
          },
          {
            name: "Project Management",
            description: "Manage projects with custom timelines, resources, and tracking",
            icon: "📋"
          },
          {
            name: "CRM",
            description: "Customer relationship management tailored to your sales process",
            icon: "🤝"
          },
          {
            name: "Supply Chain",
            description: "Custom supply chain management with vendor and logistics tracking",
            icon: "🚚"
          }
        ]
      },

      process: {
        title: "Our Development Process",
        steps: [
          {
            number: "01",
            title: "Discovery & Analysis",
            description: "We analyze your business processes and requirements in detail"
          },
          {
            number: "02",
            title: "System Design",
            description: "Create a comprehensive blueprint of your custom ERP system"
          },
          {
            number: "03",
            title: "Development",
            description: "Build your ERP with agile methodology and regular updates"
          },
          {
            number: "04",
            title: "Testing & Training",
            description: "Thorough testing and comprehensive team training"
          },
          {
            number: "05",
            title: "Deployment",
            description: "Smooth rollout with minimal disruption to operations"
          },
          {
            number: "06",
            title: "Support & Evolution",
            description: "Ongoing support and continuous improvement"
          }
        ]
      },

      benefits: {
        title: "Why Choose Custom ERP?",
        items: [
          "Perfect fit for your unique business processes",
          "No paying for features you don't need",
          "Complete control over functionality and data",
          "Competitive advantage through specialized features",
          "Easier to train staff on familiar workflows",
          "Better ROI in the long term"
        ]
      },

      cta: {
        title: "Ready to Build Your Custom ERP?",
        description: "Let's discuss how we can create the perfect ERP solution for your business",
        button: "Get Started"
      }
    },
    ar: {
      title: "حلول ERP مخصصة",
      subtitle: "أنظمة ERP مصممة خصيصًا لتلبية احتياجات عملك",
      description: "كل عمل فريد من نوعه. حلول ERP المخصصة لدينا مبنية من الصفر لتتناسب مع سير العمل والعمليات والمتطلبات الخاصة بك، مما يمنحك ميزة تنافسية.",
      heroTagline: "حوّل عملك مع ERP مخصص",
      
      features: [
        {
          title: "مخصص بالكامل",
          description: "مبني خصيصًا لعمليات وسير عمل شركتك",
          icon: "🎯"
        },
        {
          title: "بنية قابلة للتطوير",
          description: "ينمو مع عملك دون قيود",
          icon: "📈"
        },
        {
          title: "جاهز للتكامل",
          description: "يتكامل بسلاسة مع أنظمتك الحالية",
          icon: "🔗"
        },
        {
          title: "سهل الاستخدام",
          description: "واجهة بديهية مصممة لفريقك",
          icon: "👥"
        },
        {
          title: "تحليلات فورية",
          description: "اتخذ قرارات قائمة على البيانات مع رؤى مباشرة",
          icon: "📊"
        },
        {
          title: "دعم على مدار الساعة",
          description: "فريق دعم مخصص لحلك المخصص",
          icon: "🛟"
        }
      ],

      modules: {
        title: "الوحدات المخصصة التي نطورها",
        list: [
          {
            name: "الإدارة المالية",
            description: "محاسبة وميزانية وتقارير مالية مخصصة حسب احتياجاتك",
            icon: "💰"
          },
          {
            name: "إدارة المخزون",
            description: "تتبع وإدارة مخزونك بسير عمل مخصص وأتمتة",
            icon: "📦"
          },
          {
            name: "الموارد البشرية",
            description: "حلول موارد بشرية مخصصة للتوظيف والرواتب وإدارة الموظفين",
            icon: "👔"
          },
          {
            name: "إدارة المشاريع",
            description: "إدارة المشاريع بجداول زمنية وموارد وتتبع مخصص",
            icon: "📋"
          },
          {
            name: "إدارة علاقات العملاء",
            description: "إدارة علاقات العملاء مصممة لعملية المبيعات الخاصة بك",
            icon: "🤝"
          },
          {
            name: "سلسلة التوريد",
            description: "إدارة سلسلة التوريد المخصصة مع تتبع الموردين واللوجستيات",
            icon: "🚚"
          }
        ]
      },

      process: {
        title: "عملية التطوير لدينا",
        steps: [
          {
            number: "01",
            title: "الاكتشاف والتحليل",
            description: "نحلل عمليات عملك ومتطلباتك بالتفصيل"
          },
          {
            number: "02",
            title: "تصميم النظام",
            description: "إنشاء مخطط شامل لنظام ERP المخصص الخاص بك"
          },
          {
            number: "03",
            title: "التطوير",
            description: "بناء ERP الخاص بك بمنهجية رشيقة وتحديثات منتظمة"
          },
          {
            number: "04",
            title: "الاختبار والتدريب",
            description: "اختبار شامل وتدريب شامل للفريق"
          },
          {
            number: "05",
            title: "النشر",
            description: "إطلاق سلس مع الحد الأدنى من التعطيل للعمليات"
          },
          {
            number: "06",
            title: "الدعم والتطور",
            description: "دعم مستمر وتحسين مستمر"
          }
        ]
      },

      benefits: {
        title: "لماذا تختار ERP مخصص؟",
        items: [
          "مناسب تمامًا لعمليات عملك الفريدة",
          "عدم الدفع مقابل ميزات لا تحتاجها",
          "تحكم كامل في الوظائف والبيانات",
          "ميزة تنافسية من خلال ميزات متخصصة",
          "أسهل لتدريب الموظفين على سير العمل المألوف",
          "عائد استثمار أفضل على المدى الطويل"
        ]
      },

      cta: {
        title: "جاهز لبناء ERP المخصص الخاص بك؟",
        description: "دعنا نناقش كيف يمكننا إنشاء حل ERP المثالي لعملك",
        button: "ابدأ الآن"
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
        {/* Features Grid */}
        <div className="mb-5">
          <h2 className="text-center mb-4" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {t.heroTagline}
          </h2>
          <div className="row g-4">
            {t.features.map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div 
                  className="h-100 p-4 rounded-3 shadow-sm text-center" 
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
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.8rem", color: "#333" }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", marginBottom: "0" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Modules Section */}
        <div className="mb-5 py-5" style={{ backgroundColor: "#f8f9fa", borderRadius: "15px", padding: "3rem" }}>
          <h2 className="text-center mb-5" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {t.modules.title}
          </h2>
          <div className="row g-4">
            {t.modules.list.map((module, index) => (
              <div key={index} className="col-md-6">
                <div className="d-flex align-items-start p-3">
                  <div style={{ fontSize: "2.5rem", marginRight: lang === "ar" ? "0" : "1rem", marginLeft: lang === "ar" ? "1rem" : "0" }}>
                    {module.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.5rem", color: "#333" }}>
                      {module.name}
                    </h4>
                    <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", marginBottom: "0" }}>
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-5">
          <h2 className="text-center mb-5" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {t.process.title}
          </h2>
          <div className="row g-4">
            {t.process.steps.map((step, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="p-4 h-100">
                  <div 
                    className="mb-3" 
                    style={{ 
                      fontSize: "2.5rem", 
                      fontWeight: "700", 
                      color: "#379DD7",
                      opacity: "0.3"
                    }}
                  >
                    {step.number}
                  </div>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "0.8rem", color: "#333" }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-5 py-5" style={{ backgroundColor: "#fff", borderRadius: "15px", border: "2px solid #379DD7", padding: "3rem" }}>
          <h2 className="text-center mb-4" style={{ fontSize: "2rem", fontWeight: "600", color: "#333" }}>
            {t.benefits.title}
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <ul style={{ fontSize: "1.05rem", color: "#666", lineHeight: "2.2" }}>
                {t.benefits.items.map((benefit, index) => (
                  <li key={index}>
                    <strong style={{ color: "#379DD7" }}>✓</strong> {benefit}
                  </li>
                ))}
              </ul>
            </div>
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
