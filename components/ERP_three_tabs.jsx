"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cairo } from "next/font/google";
import {
  LuTrendingUp,
  LuUsers,
  LuGraduationCap,
  LuBuilding,
  LuBriefcase,
  LuDatabase,
  LuFileText,
  LuMessageSquare,
} from "react-icons/lu";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const tabsDataByLang = {
  ar: {
    odoo: {
      title: "الحل المتكامل لإدارة أعمالك بفعالية وجودة عالية",
      subtitle: "",
      description: "اكتشف كيف يقدّم Odoo نظام ERP مفتوح المصدر شامل لإدارة المبيعات، المحاسبة، المخزون، التسويق، والموارد البشرية. تعرف على مميزاته وفوائده وكيفية استخدامه لتطوير أعمالك بكل سهولة وتوافق مع رؤية المملكة 2030.",
      buttons: [
        { text: "احجز موعد الان", type: "primary", link: "/contact" },
        { text: "تحميل الملف التعريفي", type: "outline", link: "/brochure" },
      ],
      sections: [
        {
          title: "ما هو Odoo ؟",
          subtitle: "اكتشف المميزات التي تجعل Odoo الخيار الأمثل لعملك",
          description: "هو برنامج لإدارة الأعمال طور في بلجيكا، وهو نظام ERP لتخطيط موارد المؤسسات متكامل ومفتوح المصدر يُستخدم لإدارة جميع عمليات الشركة من مكان واحد. يساعد Odoo في ربط وتنظيم الأقسام المختلفة داخل المؤسسة مثل: المبيعات، المحاسبة، إدارة المخزون، الموارد البشرية، التسويق، التجارة الإلكترونية، الفوترة، التصنيع، إدارة المشاريع.",
          image: "/odoo.jpg",
          features: [
            { text: "تقليل التكلفة التشغيلية ورفع الأداء", icon: LuTrendingUp },
            { text: "دمج التطبيقات ضمن بيئة واحدة", icon: LuDatabase },
            { text: "تناسق البيانات وتناغم العمليات", icon: LuDatabase },
            { text: "مناسب لجميع الشركات من الناشئة حتى الكبرى", icon: LuBuilding },
          ]
        },
        {
          title: "نقدم تدريبًا مخصصًا لموظفي شركتك",
          subtitle: "خدمة تدريب Odoo الوظيفي تعتبر عنصرًا أساسيًا لتحقيق أقصى استفادة من النظام. فالتدريب المهني المصمم بحرفية يساعد المستخدمين على فهم المميزات المتقدمة واستخدامها بفعالية.",
          image: "/odoo2.webp",
          features: [
            { text: "التحول من مستخدم مبتدئ إلى محترف في النظام", icon: LuGraduationCap },
            { text: "معرفة دقيقة بكل وحدة وظيفية", icon: LuFileText },
            { text: "مناسب لجميع الشركات من الناشئة حتى الكبرى", icon: LuBuilding },
          ]
        }
      ],
      faq: [
        { question: "ما هو نظام Odoo ؟", answer: "Odoo هو نظام ERP متكامل مفتوح المصدر يساعد الشركات على إدارة جميع عملياتها من مكان واحد." },
        { question: "ما هي مميزات Odoo ؟", answer: "يتميز Odoo بمرونته، سهولة استخدامه، وتكامله مع جميع وحدات الأعمال." },
        { question: "كيف يمكنني البدء مع Odoo ؟", answer: "يمكنك التواصل مع فريقنا للحصول على استشارة مجانية وبدء رحلة التحول الرقمي." },
      ]
    },
    contracting: {
      title: "قطاع المقاولات",
      subtitle: "برنامج إدارة الشركات في قطاع المقاولات من الفوضى إلى الإتقان التشغيلي",
      description: "يوفر نظام Odoo أدوات متكاملة لإدارة المشاريع، المالية، والمخزون. مما يعزز الكفاءة ويساعد في تحقيق النجاح في قطاع المقاولات.",
      image: "/real_estate.jpg",
      buttons: [
        { text: "احصل على استشارة مجانية", type: "primary", link: "/contact" },
        { text: "تحميل الملف التعريفي", type: "outline", link: "/brochure" },
      ],
      features: [
        { text: "نظام تتبع العمال والمعدات - توفر المعلومات المهمة ومعرفة مواقع المعدات بشكل فعال", icon: LuUsers },
        { text: "إصدار تقارير مالية مفصلة - تقارير في الوقت الفعلي لتسهيل اتخاذ القرارات", icon: LuFileText },
        { text: "برنامج محاسبة للمقاولات - يربط بين المشاريع والموازنات بدقة وجمع المعلومات", icon: LuDatabase },
        { text: "برنامج إدارة المشاريع الإنشائية - لتحقيق رؤية كاملة لكل مراحل التنفيذ بكفاءة", icon: LuBriefcase },
      ],
      faq: [
        { question: "كيف يخدم Odoo قطاع المقاولات؟", answer: "يوفر Odoo حلولاً متكاملة لإدارة المشاريع، تتبع الموارد، وإدارة الميزانيات بكفاءة عالية." },
        { question: "ما هي فوائد استخدام Odoo في المقاولات؟", answer: "يساعد في تقليل التكاليف، تحسين الجدولة، وتقديم تقارير دقيقة في الوقت الفعلي." },
        { question: "هل يناسب Odoo شركات المقاولات الكبرى؟", answer: "نعم، Odoo مناسب لجميع أحجام الشركات من الناشئة إلى الكبرى." },
      ]
    },
    realestate: {
      title: "قطاع العقارات",
      subtitle: "نظام إدارة الأماكن والعقارات المتكامل",
      description: "هو وحدة برمجية متكاملة مصممة خصيصًا لأصحاب العقارات، شركات الوساطة العقارية، والمطورين العقاريين. تمكنك من إدارة كافة جوانب الأملاك في مكان واحد مع أتمتة العمليات الرئيسية ومنحك رؤية شاملة حول وضع عقاراتك وأرباحك بشكل لحظي.",
      image: "/third_tab.jpg",
      buttons: [
        { text: "احجز موعد الان", type: "primary", link: "/contact" },
        { text: "تحميل الملف التقريري", type: "outline", link: "/brochure" },
      ],
      sections: [
        {
          title: "ما هو نظام إدارة الأملاك؟",
          subtitle: "بروفايل إدارة الاملاك والعقارات",
          description: "كل ما يحتاجه عملك في مكان واحد - من المبيعات إلى المحاسبة، العمليات إلى الرؤى المدعومة بالذكاء الاصطناعي"
        }
      ],
      features: [
        { title: "إدارة العقارات والعقود", icon: "/next-erp/hugeicons.png", items: ["تسجيل جميع الوحدات (شقق - فلل - مكاتب - محلات) مع تفاصيلها الكاملة", "إدارة عقود الإيجار ومتابعة تواريخ البداية والانتهاء والتنبيهات التلقائية للتجديد"] },
        { title: "إدارة الفوترة والمدفوعات", icon: "/next-erp/suit-box.png", items: ["إنشاء فواتير تلقائية شهرية أو سنوية بناء على شروط العقد", "متابعة حالات الدفع (مدفوع - متاخر - مستحق) مع ربط مباشر مع النظام المحاسبي"] },
        { title: "إدارة الصيانة والخدمات", icon: "/next-erp/setting.png", items: ["تسجيل طلبات الصيانة من المستأجرين بسهولة، جدولة أعمال الصيانة الدورية وربطها بالموردين أو الفرق الفنية مع تتبع التكاليف"] },
        { title: "تقارير ولوحات تحكم تفاعلية", icon: "/next-erp/contact.png", items: ["تقارير مالية تفصيلية حول الإيرادات والإيجارات المستحقة", "تحليل نسب الإشغال والشواغر لكل عقار مع لوحات تحكم بصرية لمتابعة الأداء"] },
        { title: "تكامل مع باقي وحدات Odoo", icon: "/next-erp/odoo.png", items: ["ربط كامل لكل الجوانب مع المحاسبة، إدارة العملاء (CRM)، وإدارة المشاريع لتعزيز العلاقة مع المستأجرين والمستثمرين"] },
        { title: "واجهة مستخدم متجاوبة", icon: "/next-erp/arrow.png", items: ["تصميم متجاوب يعمل بكفاءة على جميع الأجهزة من الحواسيب إلى الهواتف الذكية مع تجربة مستخدم سلسة"] },
      ],
      faq: [
        { question: "ما هو نظام إدارة الأملاك؟", answer: "هو وحدة برمجية متكاملة مصممة خصيصًا لأصحاب العقارات وشركات الوساطة العقارية. يمكنك إدارة كافة جوانب الأملاك في مكان واحد مع أتمتة العمليات الرئيسية." },
        { question: "كيف يساعد النظام في إدارة الإيجارات؟", answer: "يمكنك إنشاء فواتير إيجار تلقائية، تتبع حالات الدفع، وإدارة عقود المستأجرين مع ربط مباشر بالنظام المحاسبي." },
        { question: "هل النظام مناسب للشركات العقارية الكبرى؟", answer: "نعم، النظام قابل للتوسع ويناسب جميع أحجام الشركات العقارية والمطورين العقاريين." },
      ]
    }
  },
  en: {
    odoo: {
      title: "The Integrated Solution for Managing Your Business Effectively",
      subtitle: "",
      description: "Discover how Odoo provides a comprehensive open-source ERP system for managing sales, accounting, inventory, marketing, and human resources. Learn about its features, benefits, and how to use it to grow your business with ease and in alignment with Saudi Vision 2030.",
      // buttons: [
      //   { text: "Book an Appointment", type: "primary", link: "/contact" },
      //   { text: "Download Brochure", type: "outline", link: "/brochure" },
      // ],
      sections: [
        {
          title: "What is Odoo?",
          subtitle: "Discover the features that make Odoo the ideal choice for your business",
          description: "It is a business management software developed in Belgium — a comprehensive open-source ERP system used to manage all company operations from one place. Odoo helps connect and organize different departments within the organization such as: Sales, Accounting, Inventory Management, Human Resources, Marketing, E-Commerce, Billing, Manufacturing, and Project Management.",
          image: "/odoo.jpg",
          features: [
            { text: "Reduce operational costs and boost performance", icon: LuTrendingUp },
            { text: "Integrate all applications in a single environment", icon: LuDatabase },
            { text: "Data consistency and process harmony", icon: LuDatabase },
            { text: "Suitable for all companies from startups to enterprises", icon: LuBuilding },
          ]
        },
        {
          title: "We Provide Customized Training for Your Team",
          subtitle: "Odoo functional training is a key element for maximizing system ROI. Professionally designed training helps users understand advanced features and use them effectively.",
          image: "/odoo2.webp",
          features: [
            { text: "Transition from a beginner to a system professional", icon: LuGraduationCap },
            { text: "Precise knowledge of each functional module", icon: LuFileText },
            { text: "Suitable for all companies from startups to enterprises", icon: LuBuilding },
          ]
        }
      ],
      faq: [
        { question: "What is the Odoo system?", answer: "Odoo is a comprehensive open-source ERP system that helps companies manage all their operations from one place." },
        { question: "What are the features of Odoo?", answer: "Odoo is distinguished by its flexibility, ease of use, and seamless integration across all business units." },
        { question: "How can I get started with Odoo?", answer: "Contact our team for a free consultation and start your digital transformation journey today." },
      ]
    },
    contracting: {
      title: "Construction Sector",
      subtitle: "Construction company management software — from chaos to operational excellence",
      description: "Odoo provides integrated tools for project management, finance, and inventory — enhancing efficiency and driving success in the construction sector.",
      image: "/real_estate.jpg",
      buttons: [
        { text: "Get a Free Consultation", type: "primary", link: "/contact" },
        { text: "Download Brochure", type: "outline", link: "/brochure" },
      ],
      features: [
        { text: "Worker & equipment tracking system — know locations and key info in real time", icon: LuUsers },
        { text: "Detailed financial reports — real-time insights to support decision-making", icon: LuFileText },
        { text: "Construction accounting software — link projects and budgets with precision", icon: LuDatabase },
        { text: "Construction project management — full visibility across all execution stages", icon: LuBriefcase },
      ],
      faq: [
        { question: "How does Odoo serve the construction sector?", answer: "Odoo provides integrated solutions for project management, resource tracking, and budget management with high efficiency." },
        { question: "What are the benefits of using Odoo in construction?", answer: "It helps reduce costs, improve scheduling, and deliver accurate real-time reports." },
        { question: "Is Odoo suitable for large construction companies?", answer: "Yes, Odoo is suitable for all company sizes from startups to large enterprises." },
      ]
    },
    
    realestate: {
      title: "Real Estate Sector",
      subtitle: "The Integrated Property & Real Estate Management System",
      description: "A comprehensive software module designed specifically for property owners, real estate brokerage firms, and developers. Manage all aspects of your properties in one place with automated key processes and real-time insight into your portfolio performance.",
      image: "/third_tab.jpg",
      // buttons: [
      //   { text: "Book an Appointment", type: "primary", link: "/contact" },
      //   { text: "Download Brochure", type: "outline", link: "/brochure" },
      // ],
      sections: [
        {
          title: "What is a Property Management System?",
          subtitle: "Property and real estate management profile",
          description: "Everything your business needs in one place — from sales to accounting, operations to AI-powered insights."
        }
      ],
      features: [
        { title: "Property & Contract Management", icon: "/next-erp/suit-box.png", items: ["Register all units (apartments, villas, offices, shops) with complete details", "Manage lease contracts and track start/end dates with automatic renewal alerts"] },
        { title: "Billing & Payment Management", icon: "/next-erp/sale.png", items: ["Generate automatic monthly or annual invoices based on contract terms", "Track payment statuses (paid, overdue, pending) with direct accounting system integration"] },
        { title: "Maintenance & Services Management", icon: "/next-erp/services.png", items: ["Easily log maintenance requests from tenants, schedule periodic maintenance and link to suppliers or technical teams with cost tracking"] },
        { title: "Reports & Interactive Dashboards", icon: "/next-erp/hugeicons.png", items: ["Detailed financial reports on revenues and outstanding rents", "Analyze occupancy rates and vacancies per property with visual performance dashboards"] },
        { title: "Integration with Other Odoo Modules", icon: "/next-erp/odoo.png", items: ["Full integration with Accounting, CRM, and Project Management to strengthen tenant and investor relationships"] },
        { title: "Responsive User Interface", icon: "/next-erp/setting.png", items: ["Responsive design that works seamlessly across all devices from desktops to smartphones"] },
      ],
      faq: [
        { question: "What is a property management system?", answer: "A comprehensive software module designed for property owners and real estate brokerages. Manage all aspects of properties in one place with automated key processes." },
        { question: "How does the system help manage rentals?", answer: "You can auto-generate rental invoices, track payment statuses, and manage tenant contracts with direct accounting system integration." },
        { question: "Is the system suitable for large real estate companies?", answer: "Yes, the system is fully scalable and suitable for all sizes of real estate companies and developers." },
      ]
    }
  }
};

export default function ERPPage({ lang = "ar" }) {
  const [activeTab, setActiveTab] = useState("odoo");
  const [expandedFaq, setExpandedFaq] = useState(null);
  const rawLang = Array.isArray(lang)
    ? lang[0]
    : typeof lang === "object" && lang !== null
      ? lang.lang || lang.locale || ""
      : lang;
  const normalizedLang = String(rawLang || "")
    .toLowerCase()
    .includes("en")
    ? "en"
    : "ar";
  const isRTL = normalizedLang === "ar";
  const currentLangData = tabsDataByLang[normalizedLang] || tabsDataByLang.ar;
  const data = currentLangData[activeTab];

  const uiText = {
    ar: {
      mainTitle: "أنظمة تخطيط موارد المؤسسات - ERP",
      mainSubtitle: "ميزة تنافسية، نكست فيوتشر تمييزك عن أنظمة ERP الأخرى",
      faqTitle: "الأسئلة المتكررة",
      faqSubtitle: "كل ما تحتاج لمعرفته تجد إجابة هنا:",
      contactCta: "تواصل معنا",
    },
    en: {
      mainTitle: "Enterprise Resource Planning - ERP",
      mainSubtitle: "A competitive advantage — Next Future sets you apart from other ERP systems",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Find answers to everything you need to know:",
      contactCta: "Contact Us",
    },
  };
  const ui = uiText[normalizedLang] || uiText.ar;

  const tabs = [
    { id: "odoo", label: normalizedLang === "en" ? "Odoo ERP" : "اودو ERP", icon: LuDatabase },
    { id: "contracting", label: normalizedLang === "en" ? "Construction Sector" : "قطاع المقاولات", icon: LuBriefcase },
    { id: "realestate", label: normalizedLang === "en" ? "Real Estate Sector" : "قطاع العقارات", icon: LuBuilding },
  ];

  return (
    <div className={`erp-page ${cairo.className}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        {/* Header Section */}
        <div className="header-section ">
          <h1 className="main-title">
            {ui.mainTitle}
          </h1>
          <p className="main-subtitle">
            {ui.mainSubtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${isActive ? "active" : ""}`}
              >
                {Icon && <Icon size={20} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="content-area"
          >
            {/* Title Section */}
            <div className="content-header">
              <h2 className="content-title">{data.title}</h2>
              <p className="content-subtitle">{data.subtitle}</p>
              {data.description && (
                <p className="content-description">{data.description}</p>
              )}
              
              {/* Buttons */}
              {data.buttons && (
                <div className="button-group">
                  {data.buttons.map((btn, idx) => (
                    <Link key={idx} href={btn.link} className={`btn-${btn.type}`}>
                      {btn.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Features Grid - for contracting */}
            {activeTab === "contracting" && data.features && (
              <div className={`contracting-wrapper ${data.image ? "with-image" : ""}`}>
                <div className="contracting-content">
                  <div className="features-grid">
                    {data.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="feature-card">
                          {Icon && (
                            <div className="feature-icon">
                              <Icon size={28} />
                            </div>
                          )}
                          <p className="feature-text">{feature.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {data.image && (
                  <div className="contracting-image">
                    <img src={data.image} alt="قطاع المقاولات" />
                  </div>
                )}
              </div>
            )}

            {/* Sections - for odoo */}
            {activeTab === "odoo" && data.sections && (
              <div className="sections-container">
                {data.sections.map((section, idx) => (
                  <div key={idx} className={`info-section ${section.image ? "with-image" : ""}`}>
                    <div className="section-content">
                      <h3 className="section-title">{section.title}</h3>
                      {section.subtitle && (
                        <p className="section-subtitle">{section.subtitle}</p>
                      )}
                      {section.description && (
                        <p className="section-description">{section.description}</p>
                      )}
                      {section.features && (
                        <div className="features-list">
                          {section.features.map((feature, fIdx) => {
                            const FeatureIcon = feature.icon;
                            return (
                              <div key={fIdx} className="feature-item">
                                {FeatureIcon && <FeatureIcon size={22} />}
                                <span>{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {section.image && (
                      <div className="section-image">
                        <img src={section.image} alt={section.title} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Features Grid - for realestate */}
            {activeTab === "realestate" && data.sections && (
              <>
                {data.sections.map((section, idx) => (
                  <div key={idx} className={`info-section ${data.image ? "with-image" : ""}`}>
                    <div className="section-content">
                      <h3 className="section-title">{section.title}</h3>
                      {section.subtitle && <h4 className="section-subtitle">{section.subtitle}</h4>}
                      <p className="section-description">{section.description}</p>
                    </div>
                    {data.image && (
                      <div className="section-image">
                        <img src={data.image} alt={section.title} loading="lazy" />
                      </div>
                    )}
                  </div>
                ))}
                
                {data.features && (
                  <div className="realestate-features">
                    {data.features.map((feature, idx) => (
                      <div key={idx} className="feature-block">
                        {feature.icon && (
                          <div className="feature-block-icon">
                            <img src={feature.icon} alt={feature.title} loading="lazy" />
                          </div>
                        )}
                        <h4 className="feature-block-title">{feature.title}</h4>
                        <ul className="feature-list">
                          {feature.items.map((item, iIdx) => (
                            <li key={iIdx}>
                              <LuFileText size={18} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* FAQ Section */}
            <div className="faq-section">
              <h3 className="faq-title">{ui.faqTitle}</h3>
              <p className="faq-subtitle">{ui.faqSubtitle}</p>
              <div className="faq-accordion">
                {data.faq.map((item, idx) => (
                  <div key={idx} className="faq-accordion-item">
                    <button
                      className={`faq-accordion-header ${expandedFaq === idx ? "expanded" : ""}`}
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    >
                      <span className="faq-question-text">{item.question}</span>
                      <span className="faq-toggle-icon">+</span>
                    </button>
                    <AnimatePresence>
                      {expandedFaq === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="faq-accordion-content"
                        >
                          <p className="faq-answer">{item.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="contact-cta">
              <a href="/contact-us" className="btn-contact">
                {ui.contactCta}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .erp-page {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 60px 0 80px;
          min-height: 100vh;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Header */
        .header-section {
          text-align: center;
          width: 100%;
          margin-bottom: 48px;
        }

        .main-title {
          font-size: 36px;
          font-weight: 800;
          color: #fafafa;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .main-subtitle {
          font-size: 18px;
          color: #fcfcfc;
          font-weight: 500;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          border: 2px solid #e2e8f0;
          background: white;
          color: #334155;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .tab-button:hover {
          border-color: #005BAC;
          color: #005BAC;
          transform: translateY(-2px);
        }

        .tab-button.active {
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          border-color: transparent;
          color: white;
          box-shadow: 0 8px 20px rgba(0, 91, 172, 0.3);
        }

        /* Content Area */
        .content-area {
          background: white;
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        .content-header {
          text-align: center;
          padding: 50px;
          border-radius: 24px;
          color: #fbfbfb;
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          margin-bottom: 48px;
        }

        .content-title {
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .content-subtitle {
          font-size: 20px;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .content-description {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto 24px;
        }

        /* Buttons */
        .button-group {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .btn-primary, .btn-outline, .btn-contact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 32px;
          font-size: 15px;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 91, 172, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 91, 172, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: #005BAC;
          border: 2px solid #005BAC;
        }

        .btn-outline:hover {
          background: #005BAC;
          color: white;
          transform: translateY(-2px);
        }

        .btn-contact {
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          color: white;
          padding: 14px 48px;
          font-size: 16px;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .feature-card {
          background: #f8fafc;
          padding: 24px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          color: #005BAC;
          margin-bottom: 16px;
        }

        .feature-text {
          font-size: 15px;
          color: #334155;
          line-height: 1.6;
        }

        /* Contracting Section */
        .contracting-wrapper {
          display: flex;
          gap: 40px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .contracting-wrapper.with-image {
          flex-direction: row;
        }

        .contracting-content {
          flex: 1;
          min-width: 250px;
        }

        .contracting-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 250px;
        }

        .contracting-image img {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        /* Sections */
        .sections-container {
          display: flex;
          flex-direction: column;
          gap: 48px;
          margin-bottom: 48px;
        }

        .info-section {
          background: #266CCE;
          padding: 32px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .info-section.with-image {
          flex-direction: row;
        }

        .section-content {
          flex: 1;
          min-width: 250px;
        }

        .section-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 250px;
        }

        .section-image img {
          width: 100%;
          max-width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          object-fit: cover;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 16px;
          color: #ffffff;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .section-description {
          font-size: 15px;
          color: #ffffff;
          line-height: 1.7;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          color: #ffffff;
        }

        .feature-item span {
          color: #ffffff;
          font-size: 14px;
        }

        /* Real Estate Features */
        .realestate-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .feature-block {
          background: #f8fafc;
          padding: 24px;
          border-radius: 20px;
        }

        .feature-block-title {
          font-size: 18px;
          font-weight: 700;
          color: #005BAC;
          margin-bottom: 16px;
        }

        .feature-block-icon {
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .feature-block-icon img {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 12px;
          color: #334155;
          font-size: 14px;
          line-height: 1.5;
        }

        .feature-list li svg {
          color: #005BAC;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* FAQ */
        .faq-section {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 2px solid #e2e8f0;
        }

        .faq-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          text-align: center;
          margin-bottom: 12px;
        }

        .faq-subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 32px;
        }

        .faq-accordion {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-accordion-item {
          margin-bottom: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          background: #f8fafc;
          transition: all 0.3s ease;
        }

        .faq-accordion-item:hover {
          border-color: #005BAC;
          box-shadow: 0 4px 12px rgba(0, 91, 172, 0.1);
        }

        .faq-accordion-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 20px 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: start;
          font-size: 16px;
          font-weight: 600;
          color: #0f172a;
          transition: all 0.3s ease;
        }

        .faq-accordion-header:hover {
          background: rgba(0, 91, 172, 0.05);
        }

        .faq-accordion-header.expanded {
          background: rgba(0, 91, 172, 0.08);
        }

        .faq-question-text {
          flex: 1;
          text-align: start;
        }

        .faq-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #005BAC;
          color: white;
          border-radius: 50%;
          font-size: 18px;
          font-weight: bold;
          margin-inline-start: 16px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .faq-accordion-header.expanded .faq-toggle-icon {
          transform: rotate(45deg);
        }

        .faq-accordion-content {
          overflow: hidden;
          background: white;
          border-top: 1px solid #e2e8f0;
        }

        .faq-answer {
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
          padding: 20px 24px;
          margin: 0;
        }

        /* Contact CTA */
        .contact-cta {
          text-align: center;
          margin-top: 48px;
        }

        /* Mobile Responsive Fixes */
        @media (max-width: 1024px) {
          .content-area {
            padding: 40px 32px;
          }
          
          .content-header {
            padding: 40px 30px;
          }
          
          .content-title {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .erp-page {
            padding: 30px 0 50px;
          }

          .container {
            padding: 0 16px;
          }

          .main-title {
            font-size: 24px;
          }

          .main-subtitle {
            font-size: 14px;
          }

          .tabs-container {
            gap: 10px;
            margin-bottom: 32px;
          }

          .tab-button {
            padding: 8px 16px;
            font-size: 13px;
            gap: 6px;
          }
          
          .tab-button svg {
            width: 16px;
            height: 16px;
          }

          .content-area {
            padding: 24px 16px;
            border-radius: 24px;
          }

          .content-header {
            padding: 30px 20px;
            margin-bottom: 32px;
          }

          .content-title {
            font-size: 22px;
          }

          .content-subtitle {
            font-size: 16px;
          }

          .content-description {
            font-size: 14px;
            padding: 0 10px;
          }

          .button-group {
            gap: 12px;
          }
          
          .btn-primary, .btn-outline {
            padding: 10px 20px;
            font-size: 13px;
          }

          /* Contracting Section Mobile */
          .contracting-wrapper {
            flex-direction: column;
            gap: 24px;
          }
          
          .contracting-wrapper.with-image {
            flex-direction: column;
          }
          
          .contracting-content {
            width: 100%;
          }
          
          .contracting-image {
            width: 100%;
            order: -1;
          }
          
          .contracting-image img {
            width: 100%;
            max-height: 250px;
            object-fit: cover;
          }

          /* Features Grid Mobile */
          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 0;
          }
          
          .feature-card {
            padding: 20px;
          }

          /* Info Section Mobile */
          .info-section {
            flex-direction: column !important;
            padding: 24px 20px;
            gap: 24px;
          }
          
          .section-content {
            width: 100%;
            min-width: auto;
          }
          
          .section-image {
            width: 100%;
            min-width: auto;
            order: -1;
          }
          
          .section-image img {
            width: 100%;
            max-height: 220px;
            object-fit: cover;
          }
          
          .section-title {
            font-size: 20px;
          }
          
          .section-subtitle {
            font-size: 14px;
          }
          
          .section-description {
            font-size: 13px;
          }
          
          .features-list {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          
          .feature-item {
            padding: 8px;
          }
          
          .feature-item span {
            font-size: 13px;
          }

          /* Real Estate Features Mobile */
          .realestate-features {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .feature-block {
            padding: 20px;
          }
          
          .feature-block-title {
            font-size: 16px;
          }
          
          .feature-block-icon img {
            width: 32px;
            height: 32px;
          }
          
          .feature-list li {
            font-size: 13px;
          }

          /* FAQ Mobile */
          .faq-section {
            margin-top: 32px;
            padding-top: 32px;
          }
          
          .faq-title {
            font-size: 22px;
          }
          
          .faq-subtitle {
            font-size: 14px;
            margin-bottom: 24px;
          }
          
          .faq-accordion-header {
            padding: 14px 16px;
            font-size: 14px;
          }
          
          .faq-toggle-icon {
            width: 24px;
            height: 24px;
            font-size: 14px;
            margin-left: 12px;
          }
          
          .faq-answer {
            padding: 14px 16px;
            font-size: 13px;
          }

          .btn-contact {
            padding: 12px 32px;
            font-size: 14px;
          }
        }

        /* Small Mobile Devices */
        @media (max-width: 480px) {
          .container {
            padding: 0 12px;
          }
          
          .content-header {
            padding: 24px 16px;
          }
          
          .content-title {
            font-size: 20px;
          }
          
          .content-subtitle {
            font-size: 14px;
          }
          
          .tab-button {
            padding: 6px 12px;
            font-size: 12px;
          }
          
          .contracting-image img,
          .section-image img {
            max-height: 200px;
          }
          
          .feature-card {
            padding: 16px;
          }
          
          .feature-icon svg {
            width: 24px;
            height: 24px;
          }
          
          .feature-text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}