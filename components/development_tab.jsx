"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Cairo } from "next/font/google";
import {
  LuGlobe,
  LuSmartphone,
  LuTrendingUp,
  LuLayers,
  LuCode,
  LuPalette,
  LuChartBar,
  LuRocket,
  LuShield,
  LuZap,
  LuUsers,
  LuDatabase,
  LuFileText,
  LuMessageSquare,
  LuCheck,
  LuArrowRight,
  LuAward,
  LuClock,
  LuTarget,
  LuSparkles,
} from "react-icons/lu";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dataByLang = {
  en: {
    all: {
      title: "Complete Development Solutions",
      description:
        "We provide end-to-end digital solutions including web, mobile, and marketing services to help your business grow. Our comprehensive approach ensures that every aspect of your digital presence is optimized for success.",
      sections: [
        {
          title: "Why Choose Our Development Services?",
          description: "We combine cutting-edge technology with industry best practices to deliver solutions that drive real business results.",
          features: [
            { text: "End-to-end development lifecycle", icon: LuLayers },
            { text: "Scalable and future-proof architecture", icon: LuRocket },
            { text: "Enterprise-grade security standards", icon: LuShield },
            { text: "Continuous support and maintenance", icon: LuUsers },
          ]
        }
      ],
      features: [
        { text: "Modern Web Development", icon: LuGlobe, description: "Cutting-edge websites with exceptional performance" },
        { text: "Mobile App Solutions", icon: LuSmartphone, description: "Native and cross-platform mobile experiences" },
        { text: "Digital Marketing Growth", icon: LuTrendingUp, description: "Data-driven strategies for business growth" },
        { text: "UI/UX Design Excellence", icon: LuPalette, description: "User-centered designs that convert" },
      ],
     
      
      technologies: ["React", "Next.js", "Node.js", "Python", "React Native", "Flutter", "AWS", "MongoDB", "Tailwind CSS", "TypeScript"]
    },

    web: {
      title: "Web Development",
      description:
        "We build fast, scalable, and SEO-friendly websites using modern technologies like Next.js and React. Our web solutions are designed to provide exceptional user experiences while maximizing performance and search engine visibility.",
      sections: [
        {
          title: "Our Web Development Process",
          description: "A systematic approach to building high-performance web applications",
          features: [
            { text: "Requirements Analysis & Planning", icon: LuFileText },
            { text: "UI/UX Design & Prototyping", icon: LuPalette },
            { text: "Agile Development & Testing", icon: LuCode },
            { text: "Deployment & Ongoing Support", icon: LuRocket },
          ]
        },
        {
          title: "Technologies We Use",
          subtitle: "Leveraging the latest technologies for optimal results",
          features: [
            { text: "Next.js & React for dynamic UIs", icon: LuGlobe },
            { text: "Node.js for scalable backends", icon: LuDatabase },
            { text: "Tailwind CSS for responsive designs", icon: LuPalette },
            { text: "Headless CMS solutions", icon: LuLayers },
          ]
        }
      ],
      features: [
        { text: "Responsive Design for all devices", icon: LuLayers, description: "Perfect experience on any screen size" },
        { text: "High performance & speed optimization", icon: LuTrendingUp, description: "Lightning-fast load times" },
        { text: "SEO-friendly structure", icon: LuChartBar, description: "Built to rank high on search engines" },
        { text: "Custom dashboards & CMS", icon: LuCode, description: "Easy content management" },
      ],
      benefits: [
        "Increased conversion rates",
        "Better user engagement",
        "Improved search rankings",
        "Reduced bounce rates",
        "Faster time to market"
      ],
     
      
    },

    mobile: {
      title: "Mobile App Development",
      description:
        "We develop high-quality mobile apps for Android and iOS with smooth performance and modern UI. Our apps are built to provide seamless experiences across all devices.",
      sections: [
        {
          title: "Cross-Platform Excellence",
          description: "Build once, deploy everywhere with our cross-platform solutions",
          features: [
            { text: "React Native for iOS & Android", icon: LuSmartphone },
            { text: "Native performance and feel", icon: LuZap },
            { text: "Code reusability up to 90%", icon: LuCode },
            { text: "Faster time to market", icon: LuRocket },
          ]
        },
        {
          title: "App Development Process",
          description: "From concept to store, we handle everything",
          features: [
            { text: "Discovery & Strategy", icon: LuFileText },
            { text: "UI/UX Design", icon: LuPalette },
            { text: "Development & Testing", icon: LuCode },
            { text: "App Store Deployment", icon: LuGlobe },
          ]
        }
      ],
      features: [
        { text: "Cross-platform apps (React Native)", icon: LuSmartphone, description: "Single codebase for both platforms" },
        { text: "Fast & scalable architecture", icon: LuTrendingUp, description: "Built for growth" },
        { text: "User-friendly UI/UX design", icon: LuPalette, description: "Intuitive and engaging interfaces" },
        { text: "API & backend integration", icon: LuCode, description: "Seamless data connectivity" },
      ],
      
      
      platforms: ["iOS", "Android", "Cross-Platform", "Progressive Web Apps"]
    },

    marketing: {
      title: "Digital Marketing",
      description:
        "Boost your online presence and reach more customers with smart marketing strategies. Our data-driven approach ensures maximum ROI on your marketing investments.",
      sections: [
        {
          title: "Our Marketing Approach",
          description: "Data-driven strategies that deliver measurable results",
          features: [
            { text: "Market Research & Analysis", icon: LuChartBar },
            { text: "Strategy Development", icon: LuTrendingUp },
            { text: "Campaign Execution", icon: LuRocket },
            { text: "Performance Tracking & Optimization", icon: LuLayers },
          ]
        },
        {
          title: "Marketing Channels",
          description: "Multi-channel approach for maximum reach",
          features: [
            { text: "Search Engine Optimization (SEO)", icon: LuChartBar },
            { text: "Social Media Marketing", icon: LuUsers },
            { text: "Pay-Per-Click Advertising", icon: LuTrendingUp },
            { text: "Email Marketing", icon: LuMessageSquare },
          ]
        }
      ],
      features: [
        { text: "Social media marketing", icon: LuTrendingUp, description: "Engage audiences on major platforms" },
        { text: "Google Ads & SEO", icon: LuChartBar, description: "Dominate search results" },
        { text: "Content & branding strategy", icon: LuPalette, description: "Build a strong brand identity" },
        { text: "Analytics & performance tracking", icon: LuLayers, description: "Measure what matters" },
      ],
      metrics: [
        { label: "ROI Increase", value: "300%", description: "Average client ROI" },
        { label: "Traffic Growth", value: "200%", description: "Organic traffic increase" },
        { label: "Conversion Rate", value: "5x", description: "Higher conversion rates" }
      ],
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Meta Business Suite", "Mailchimp"]
    },
  },

  ar: {
    all: {
      title: "حلول التطوير المتكاملة",
      description:
        "نقدم حلول رقمية متكاملة تشمل تطوير المواقع، التطبيقات، والتسويق لمساعدتك على نمو أعمالك. نهجنا الشامل يضمن تحسين كل جانب من جوانب وجودك الرقمي لتحقيق النجاح.",
      sections: [
        {
          title: "لماذا تختار خدمات التطوير لدينا؟",
          description: "نحن نجمع بين التكنولوجيا المتطورة وأفضل الممارسات في الصناعة لتقديم حلول تحقق نتائج تجارية حقيقية.",
          features: [
            { text: "دورة حياة تطوير متكاملة", icon: LuLayers },
            { text: "هندسة قابلة للتطوير ومستقبلية", icon: LuRocket },
            { text: "معايير أمان على مستوى المؤسسات", icon: LuShield },
            { text: "دعم وصيانة مستمرة", icon: LuUsers },
          ]
        }
      ],
      features: [
        { text: "تطوير مواقع حديثة", icon: LuGlobe, description: "مواقع متطورة بأداء استثنائي" },
        { text: "تطبيقات موبايل متقدمة", icon: LuSmartphone, description: "تجارب موبايل أصلية ومتعددة المنصات" },
        { text: "نمو عبر التسويق الرقمي", icon: LuTrendingUp, description: "استراتيجيات مدعومة بالبيانات لنمو الأعمال" },
        { text: "تصميم UI/UX احترافي", icon: LuPalette, description: "تصاميم تركز على المستخدم وتحقق التحويلات" },
      ],
      
      
      technologies: ["React", "Next.js", "Node.js", "Python", "React Native", "Flutter", "AWS", "MongoDB", "Tailwind CSS", "TypeScript"]
    },

    web: {
      title: "تطوير المواقع",
      description:
        "نقوم ببناء مواقع سريعة، متجاوبة، ومتوافقة مع محركات البحث باستخدام أحدث التقنيات مثل Next.js و React. حلول الويب الخاصة بنا مصممة لتوفير تجارب مستخدم استثنائية مع زيادة الأداء وظهور محركات البحث.",
      sections: [
        {
          title: "عملية تطوير المواقع لدينا",
          description: "نهج منظم لبناء تطبيقات ويب عالية الأداء",
          features: [
            { text: "تحليل المتطلبات والتخطيط", icon: LuFileText },
            { text: "تصميم ونمذجة UI/UX", icon: LuPalette },
            { text: "تطوير واختبار Agile", icon: LuCode },
            { text: "نشر ودعم مستمر", icon: LuRocket },
          ]
        },
        {
          title: "التقنيات التي نستخدمها",
          subtitle: "الاستفادة من أحدث التقنيات للحصول على أفضل النتائج",
          features: [
            { text: "Next.js و React لواجهات ديناميكية", icon: LuGlobe },
            { text: "Node.js للخلفيات القابلة للتطوير", icon: LuDatabase },
            { text: "Tailwind CSS للتصاميم المتجاوبة", icon: LuPalette },
            { text: "حلول CMS بدون رأس", icon: LuLayers },
          ]
        }
      ],
      features: [
        { text: "تصميم متجاوب لجميع الأجهزة", icon: LuLayers, description: "تجربة مثالية على أي شاشة" },
        { text: "سرعة وأداء عالي", icon: LuTrendingUp, description: "أوقات تحميل فائقة السرعة" },
        { text: "تهيئة SEO احترافية", icon: LuChartBar, description: "مصمم للظهور في أعلى نتائج البحث" },
        { text: "لوحات تحكم مخصصة", icon: LuCode, description: "إدارة محتوى سهلة" },
      ],
      benefits: [
        "زيادة معدلات التحويل",
        "تفاعل أفضل مع المستخدمين",
        "تحسين ترتيب البحث",
        "تقليل معدلات الارتداد",
        "وقت أسرع للتسويق"
      ],
     
      
    },

    mobile: {
      title: "تطوير تطبيقات الجوال",
      description:
        "نطور تطبيقات أندرويد و iOS بجودة عالية وأداء سلس وتجربة مستخدم مميزة. تطبيقاتنا مصممة لتوفير تجارب سلسة عبر جميع الأجهزة.",
      sections: [
        {
          title: "التميز عبر المنصات",
          description: "ابني مرة واحدة، انشر في كل مكان من خلال حلولنا متعددة المنصات",
          features: [
            { text: "React Native لنظامي iOS و Android", icon: LuSmartphone },
            { text: "أداء وشعور أصلي", icon: LuZap },
            { text: "إعادة استخدام الكود بنسبة 90%", icon: LuCode },
            { text: "وقت أسرع للتسويق", icon: LuRocket },
          ]
        },
        {
          title: "عملية تطوير التطبيقات",
          description: "من الفكرة إلى المتجر، نحن ندير كل شيء",
          features: [
            { text: "الاكتشاف والاستراتيجية", icon: LuFileText },
            { text: "تصميم UI/UX", icon: LuPalette },
            { text: "التطوير والاختبار", icon: LuCode },
            { text: "نشر في متاجر التطبيقات", icon: LuGlobe },
          ]
        }
      ],
      features: [
        { text: "تطبيقات Cross Platform", icon: LuSmartphone, description: "قاعدة كود واحدة لكلا المنصتين" },
        { text: "أداء عالي وسرعة", icon: LuTrendingUp, description: "مصمم للنمو" },
        { text: "تصميم UX/UI احترافي", icon: LuPalette, description: "واجهات بديهية وجذابة" },
        { text: "تكامل مع API", icon: LuCode, description: "اتصال سلس بالبيانات" },
      ],
     
      
      platforms: ["iOS", "Android", "متعدد المنصات", "تطبيقات الويب التقدمية"]
    },

    marketing: {
      title: "التسويق الرقمي",
      description:
        "قم بزيادة حضورك الرقمي والوصول إلى عملاء أكثر عبر استراتيجيات تسويق ذكية. نهجنا المدعوم بالبيانات يضمن أقصى عائد على استثماراتك التسويقية.",
      sections: [
        {
          title: "نهجنا في التسويق",
          description: "استراتيجيات مدعومة بالبيانات تحقق نتائج قابلة للقياس",
          features: [
            { text: "بحث وتحليل السوق", icon: LuChartBar },
            { text: "تطوير الاستراتيجية", icon: LuTrendingUp },
            { text: "تنفيذ الحملات", icon: LuRocket },
            { text: "تتبع الأداء والتحسين", icon: LuLayers },
          ]
        },
        {
          title: "قنوات التسويق",
          description: "نهج متعدد القنوات للوصول الأقصى",
          features: [
            { text: "تحسين محركات البحث (SEO)", icon: LuChartBar },
            { text: "تسويق وسائل التواصل الاجتماعي", icon: LuUsers },
            { text: "الإعلانات المدفوعة (PPC)", icon: LuTrendingUp },
            { text: "التسويق عبر البريد الإلكتروني", icon: LuMessageSquare },
          ]
        }
      ],
      features: [
        { text: "إدارة السوشيال ميديا", icon: LuTrendingUp, description: "تفاعل مع الجماهير على المنصات الرئيسية" },
        { text: "إعلانات جوجل و SEO", icon: LuChartBar, description: "السيطرة على نتائج البحث" },
        { text: "بناء العلامة التجارية", icon: LuPalette, description: "بناء هوية علامة تجارية قوية" },
        { text: "تحليل الأداء", icon: LuLayers, description: "قياس ما يهم" },
      ],
      metrics: [
        { label: "زيادة العائد", value: "300%", description: "متوسط عائد العملاء" },
        { label: "نمو الزيارات", value: "200%", description: "زيادة الزيارات العضوية" },
        { label: "معدل التحويل", value: "5x", description: "معدلات تحويل أعلى" }
      ],
      tools: ["Google Analytics", "SEMrush", "Ahrefs", "Meta Business Suite", "Mailchimp"]
    },
  },
};

export default function DevelopmentTabs({ lang = "en" }) {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const tabImages = {
    all: "/all.png?v=2",
    web: "/web.png?v=2",
    mobile: "/mobile2.png?v=2",
    marketing: "/digial.png?v=2",
  };

  const normalizedLang =
    String(lang).toLowerCase().includes("en") ? "en" : "ar";

  const isRTL = normalizedLang === "ar";
  const data = dataByLang[normalizedLang][activeTab];

  const tabs = [
    { id: "all", label: normalizedLang === "en" ? "All Services" : "جميع الخدمات", icon: LuLayers },
    { id: "web", label: normalizedLang === "en" ? "Web Development" : "تطوير المواقع", icon: LuGlobe },
    { id: "mobile", label: normalizedLang === "en" ? "Mobile Apps" : "تطبيقات الجوال", icon: LuSmartphone },
    { id: "marketing", label: normalizedLang === "en" ? "Digital Marketing" : "التسويق الرقمي", icon: LuTrendingUp },
  ];

  const faqData = {
    en: [
              { question: "Do you develop Cross iOS and Android apps?", answer: "Yes, our mobile development includes cross-platform iOS and Android apps, plus solutions with React Native and Flutter to match budget and speed requirements." },

      { question: "How long does it take to develop a website?", answer: "The timeline varies based on project complexity. A typical website takes 1-5 weeks, while complex applications may take 3-6 months." },
      { question: "Do you provide post-launch support?", answer: "Yes, we offer ongoing maintenance and support packages to ensure your digital solutions continue to perform optimally." },
      { question: "Can you help with SEO and marketing?", answer: "Absolutely! We offer comprehensive digital marketing services including SEO, social media marketing, and PPC campaigns." },
      { question: "What technologies do you specialize in?", answer: "We specialize in modern technologies including React, Next.js, Node.js, React Native, Dot.Net ,PHP laravel, Flutter and various cloud platforms." },
      { question: "Do you offer custom pricing?", answer: "Yes, we provide customized pricing based on your specific requirements and project scope." },
    ],
    ar: [
              { question: "هل تطورون تطبيقات iOS و Android؟", answer: "نعم، نوفر تطوير تطبيقات iOS و Android الأصلية بالإضافة إلى حلول متعددة المنصات باستخدام React Native و Flutter وفقًا للميزانية والوقت." },

      { question: "كم من الوقت يستغرق تطوير موقع إلكتروني؟", answer: "يختلف الجدول الزمني حسب تعقيد المشروع. يستغرق الموقع النموذجي من 1-5 أسابيع، بينما قد تستغرق التطبيقات المعقدة من 3-6 أشهر." },
      { question: "هل تقدمون دعمًا بعد الإطلاق؟", answer: "نعم، نقدم حزم صيانة ودعم مستمر لضمان استمرار أداء حلولك الرقمية على النحو الأمثل." },
      { question: "هل يمكنكم المساعدة في تحسين محركات البحث والتسويق؟", answer: "بالتأكيد! نقدم خدمات تسويق رقمي شاملة تشمل تحسين محركات البحث، وتسويق وسائل التواصل الاجتماعي، وحملات الدفع لكل نقرة." },
      { question: "ما هي التقنيات التي تتخصصون فيها؟", answer: "نتخصص في التقنيات الحديثة بما في ذلك React و Next.js و Node.js و React Native و Dot.Net و PHP Laravel و Flutter ومنصات سحابية متنوعة." },
      { question: "هل تقدمون تسعيرًا مخصصًا؟", answer: "نعم، نقدم تسعيرًا مخصصًا بناءً على متطلباتك الخاصة ونطاق المشروع." },
    ],
  };

  const faq = faqData[normalizedLang];

  return (
    <div className={`dev-tabs ${cairo.className}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        {/* Header Section */}
        <div className="header-section">
          <div className="header-badge">
            <LuSparkles size={20} />
            <span>{normalizedLang === "en" ? "Premium Services" : "خدمات متميزة"}</span>
          </div>
          <h1 className="main-title">
            {normalizedLang === "en" ? "Development Services" : "خدمات التطوير"}
          </h1>
          <p className="main-subtitle">
            {normalizedLang === "en" 
              ? "Transforming ideas into powerful digital solutions that drive business growth" 
              : "تحويل الأفكار إلى حلول رقمية قوية تدفع نمو الأعمال"}
          </p>
        </div>

        {/* Tabs */}
        <div className="tabs-container">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={activeTab === tab.id ? "tab-button active" : "tab-button"}
                onClick={() => setActiveTab(tab.id)}
              >
                {Icon && <Icon size={18} />}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
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
              <p className="content-description">{data.description}</p>
            </div>



            {/* Sections */}
            {data.sections && (
              <div className="sections-container">
                {data.sections.map((section, idx) => (
                  <div key={idx} className={`info-section ${idx % 2 === 1 ? "reverse" : ""}`}>
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
                                {FeatureIcon && <FeatureIcon size={20} />}
                                <span>{feature.text}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                    <div className="section-image">
                      <div className="image-placeholder">
                        <Image
                          src={tabImages[activeTab] || "/all.png?v=2"}
                          alt={`${data.title} ${normalizedLang === "en" ? "service" : "خدمة"}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 600px"
                          style={{ objectFit: "cover" }}
                          className="section-tab-image"
                          priority={activeTab === "all"}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Features Grid */}
            {data.features && (
              <div className="features-grid">
                {data.features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <div key={idx} className="feature-card">
                      <div className="feature-icon">
                        <Icon size={36} />
                      </div>
                      <h4 className="feature-title">{feature.text}</h4>
                      {feature.description && (
                        <p className="feature-description">{feature.description}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Benefits Section */}
            {data.benefits && (
              <div className="benefits-section">
                <div className="benefits-header">
                  <LuAward size={28} />
                  <h3 className="benefits-title">
                    {normalizedLang === "en" ? "Key Benefits" : "الفوائد الرئيسية"}
                  </h3>
                </div>
                <div className="benefits-grid">
                  {data.benefits.map((benefit, idx) => (
                    <div key={idx} className="benefit-item">
                      <LuCheck size={18} className="benefit-icon" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Section */}
            {data.metrics && (
              <div className="metrics-section">
                {data.metrics.map((metric, idx) => (
                  <div key={idx} className="metric-card">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-description">{metric.description}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Platforms Section for Mobile */}
            {data.platforms && (
              <div className="platforms-section">
                <h3 className="platforms-title">
                  {normalizedLang === "en" ? "Supported Platforms" : "المنصات المدعومة"}
                </h3>
                <div className="platforms-grid">
                  {data.platforms.map((platform, idx) => (
                    <span key={idx} className="platform-badge">{platform}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Section for Marketing */}
            {data.tools && (
              <div className="tools-section">
                <h3 className="tools-title">
                  {normalizedLang === "en" ? "Tools We Use" : "الأدوات التي نستخدمها"}
                </h3>
                <div className="tools-grid">
                  {data.tools.map((tool, idx) => (
                    <span key={idx} className="tool-badge">{tool}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Section */}
            {data.technologies && (
              <div className="technologies-section">
                <h3 className="technologies-title">
                  {normalizedLang === "en" ? "Technologies We Use" : "التقنيات التي نستخدمها"}
                </h3>
                <div className="technologies-grid">
                  {data.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section */}
            <div className="faq-section">
              <div className="faq-header">
                <LuMessageSquare size={28} />
                <h3 className="faq-title">
                  {normalizedLang === "en" ? "Frequently Asked Questions" : "الأسئلة الشائعة"}
                </h3>
              </div>
              <p className="faq-subtitle">
                {normalizedLang === "en" 
                  ? "Find answers to common questions about our services" 
                  : "اعثر على إجابات للأسئلة الشائعة حول خدماتنا"}
              </p>
              <div className="faq-accordion">
                {faq.map((item, idx) => (
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

            {/* CTA Button */}
         
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .dev-tabs {
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
          margin-bottom: 48px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 91, 172, 0.1);
          padding: 8px 16px;
          border-radius: 50px;
          margin-bottom: 20px;
          color: #005BAC;
          font-weight: 500;
          font-size: 14px;
        }

        .main-title {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 16px;
        }

        .main-subtitle {
          font-size: 18px;
          color: #64748b;
          font-weight: 500;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Tabs */
        .tabs-container {
          display: flex;
          justify-content: center;
          gap: 12px;
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
          padding: 40px;
          border-radius: 24px;
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          margin-bottom: 48px;
        }

        .content-title {
          font-size: 32px;
          font-weight: 800;
          color: white;
          margin-bottom: 16px;
        }

        .content-description {
          font-size: 16px;
          color: white;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
        }

     
        

        .stat-card {
          text-align: center;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 800;
          color: #005BAC;
        }

        .stat-label {
          font-size: 14px;
          color: #64748b;
          margin-top: 8px;
        }

        /* Sections */
        .sections-container {
          display: flex;
          flex-direction: column;
          gap: 48px;
          margin-bottom: 48px;
        }

        .info-section {
          display: flex;
          align-items: center;
          gap: 48px;
          flex-wrap: wrap;
        }

        .info-section.reverse {
          flex-direction: row-reverse;
        }

        .section-content {
          flex: 1;
          min-width: 280px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .section-subtitle {
          font-size: 16px;
          color: #005BAC;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .section-description {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .features-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f1f5f9;
          border-radius: 12px;
          color: #1e293b;
          font-size: 14px;
          font-weight: 500;
        }

        .feature-item svg {
          color: #005BAC;
          flex-shrink: 0;
        }

        .section-image {
          flex: 1;
          min-width: 280px;
        }

        .image-placeholder {
          position: relative;
          width: 100%;
          padding-top: 50%;
          min-height: 220px;
          border-radius: 24px;
          overflow: hidden;
        }

        .image-placeholder :global(img) {
          object-fit: cover;
        }

        .image-placeholder svg {
          width: 100%;
          height: auto;
        }

        .section-tab-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 24px;
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
          padding: 32px 24px;
          border-radius: 20px;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          border-color: #005BAC;
        }

        .feature-icon {
          color: #005BAC;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .feature-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .feature-description {
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
        }

        /* Benefits Section */
        .benefits-section {
          margin-bottom: 48px;
          padding: 32px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e6f3ff 100%);
          border-radius: 24px;
        }

        .benefits-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .benefits-header svg {
          color: #005BAC;
        }

        .benefits-title {
          font-size: 20px;
          font-weight: 700;
          color: #005BAC;
          margin: 0;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: white;
          border-radius: 12px;
          color: #1e293b;
          font-size: 14px;
        }

        .benefit-icon {
          color: #005BAC;
          flex-shrink: 0;
        }

        /* Metrics Section */
        .metrics-section {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 32px;
          margin-bottom: 48px;
          padding: 40px 32px;
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          border-radius: 24px;
        }

        .metric-card {
          text-align: center;
        }

        .metric-value {
          font-size: 48px;
          font-weight: 800;
          color: white;
        }

        .metric-label {
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 8px;
        }

        .metric-description {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          margin-top: 4px;
        }

        /* Platforms Section */
        .platforms-section {
          margin-bottom: 48px;
          padding: 32px;
          background: #f8fafc;
          border-radius: 24px;
          text-align: center;
        }

        .platforms-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .platforms-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .platform-badge {
          padding: 8px 20px;
          background: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #005BAC;
          border: 1px solid #e2e8f0;
        }

        /* Tools Section */
        .tools-section {
          margin-bottom: 48px;
          padding: 32px;
          background: #f8fafc;
          border-radius: 24px;
          text-align: center;
        }

        .tools-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .tool-badge {
          padding: 8px 20px;
          background: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #005BAC;
          border: 1px solid #e2e8f0;
        }

        /* Technologies Section */
        .technologies-section {
          margin-bottom: 48px;
        }

        .technologies-title {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          text-align: center;
          margin-bottom: 24px;
        }

        .technologies-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .tech-badge {
          padding: 8px 20px;
          background: #f1f5f9;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 500;
          color: #005BAC;
          transition: all 0.3s ease;
        }

        .tech-badge:hover {
          background: #005BAC;
          color: white;
          transform: translateY(-2px);
        }

        /* FAQ */
        .faq-section {
          margin-top: 48px;
          padding-top: 48px;
          border-top: 2px solid #e2e8f0;
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .faq-header svg {
          color: #005BAC;
        }

        .faq-title {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
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

        .btn-contact {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 48px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          background: linear-gradient(135deg, #005BAC 0%, #02417A 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(0, 91, 172, 0.3);
        }

        .btn-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 91, 172, 0.4);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        .btn-contact:hover .btn-icon {
          transform: translateX(4px);
        }

        /* RTL Specific */
        [dir="rtl"] .btn-icon {
          transform: rotate(180deg);
        }

        [dir="rtl"] .btn-contact:hover .btn-icon {
          transform: translateX(-4px) rotate(180deg);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .dev-tabs {
            padding: 40px 0 60px;
          }

          .container {
            padding: 0 16px;
          }

          .main-title {
            font-size: 32px;
          }

          .main-subtitle {
            font-size: 14px;
          }

          .tab-button {
            padding: 8px 20px;
            font-size: 13px;
          }

          .content-area {
            padding: 24px 20px;
          }

          .content-header {
            padding: 30px 20px;
          }

          .content-title {
            font-size: 24px;
          }

          .content-description {
            font-size: 14px;
          }

          .info-section,
          .info-section.reverse {
            flex-direction: column;
          }

          .section-title {
            font-size: 20px;
          }


          .metrics-section {
            flex-direction: column;
            align-items: center;
            gap: 24px;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .faq-title {
            font-size: 22px;
          }

          .btn-contact {
            padding: 12px 32px;
            font-size: 14px;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}