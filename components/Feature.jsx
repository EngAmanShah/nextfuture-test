"use client";
import {
  LucideHeadphones,
  LucideLayers,
  LucideUsers,
} from "lucide-react";

export default function WhyChooseUs({ lang }) {
  const translations = {
    en: {
      mainTitle: "Why Choose Next Future",
      subtitle: "We understand your needs and provide innovative solutions",
      features: [
        {
          icon: <LucideHeadphones size={40} strokeWidth={1.5} />,
          title: "Customer Success & Support",
          description:
            "We ensure a sustainable model and long-term relationships with clients by providing high-quality services and comprehensive after-sales support.",
        },
        {
          icon: <LucideLayers size={40} strokeWidth={1.5} />,
          title: "Comprehensive Digital Solutions",
          description:
            "Integrated digital experience including website design and development, SEO services, diversified marketing services, and ERP systems.",
        },
        {
          icon: <LucideUsers size={40} strokeWidth={1.5} />,
          title: "Team of Developers & Experts",
          description:
            "Our team of engineers, developers, and IT specialists delivers high-quality, scalable solutions tailored to meet your business needs.",
        },
      ],
    },
    ar: {
      mainTitle: "لماذا تختار نكست فيوتشر",
      subtitle: "نفهم احتياجاتك ونقدم حلولاً مبتكرة",
      features: [
        {
          icon: <LucideHeadphones size={40} strokeWidth={1.5} />,
          title: "نجاح العملاء والدعم",
          description:
            "نضمن نموذجًا مستدامًا وعلاقات طويلة الأمد مع العملاء من خلال تقديم خدمات عالية الجودة ودعم شامل ما بعد البيع.",
        },
        {
          icon: <LucideLayers size={40} strokeWidth={1.5} />,
          title: "حلول رقمية شاملة",
          description:
            "تجربة رقمية متكاملة تشمل تصميم وتطوير المواقع بالإضافة إلى خدمات محركات البحث (SEO)، خدمات التسويق المتنوع، وأنظمة موارد المؤسسة (ERP).",
        },
        {
          icon: <LucideUsers size={40} strokeWidth={1.5} />,
          title: "فريق مطورين وخبراء",
          description:
            "يقدم فريقنا من المهندسين والمطورين والمتخصصين في تكنولوجيا المعلومات حلول عالية الجودة وقابلة للتوسع مصممة خصيصًا لتلبية احتياجات أعمالك.",
        },
      ],
    },
  };

  const t = translations[lang] || translations.ar;

  return (
    <>
      <style jsx>{`
        .why-choose-section {
          position: relative;
          padding: 80px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow: hidden;
          background-color: #f9f9f9;
        }

        .background-image {
          position: absolute;
          top: 40%;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/future.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
          opacity: 0.8;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.97) 0%,
            rgba(255, 255, 255, 0.90) 100%
          );
        }

        .container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .main-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 12px 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #555;
          margin: 0;
          font-weight: 400;
          line-height: 1.6;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }

        /* Grid - Desktop */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        /* Feature Card - Desktop */
        .feature-card {
          text-align: center;
          background: rgba(255, 255, 255, 0.92);
          padding: 35px 28px;
          border-radius: 18px;
          border: 1px solid rgba(55, 157, 215, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(55, 157, 215, 0.35);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }

        .icon-wrapper {
          margin-bottom: 22px;
          color: #379DD7;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 60px;
          height: 60px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .feature-card:hover .icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .feature-title {
          font-size: 1.35rem;
          font-weight: 650;
          color: #1a1a1a;
          margin: 0 0 16px 0;
          line-height: 1.35;
        }

        .feature-description {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #555;
          margin: 0;
        }

        /* RTL Support */
        [dir="rtl"] .feature-card {
          text-align: right;
        }

        [dir="rtl"] .icon-wrapper {
          margin-inline-end: 0;
        }


        /* Responsive Icon Sizes */
        @media (max-width: 768px) {
          .icon-wrapper :global(svg) {
            width: 40px;
            height: 40px;
          }
        }

        /* Tablet Landscape (1024px - 1199px) */
        @media (max-width: 1199px) and (min-width: 1024px) {
          .why-choose-section {
            padding: 70px 0;
          }

          .header {
            margin-bottom: 50px;
          }

          .features-grid {
            gap: 35px;
          }

          .main-title {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1rem;
          }

          .feature-card {
            padding: 32px 25px;
          }

          .feature-title {
            font-size: 1.25rem;
          }

          .feature-description {
            font-size: 0.9rem;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .why-choose-section {
            padding: 60px 0;
          }

          .container {
            padding: 0 24px;
          }

          .header {
            margin-bottom: 45px;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .main-title {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 0.98rem;
          }

          .feature-card {
            padding: 28px 22px;
            border-radius: 16px;
          }

          .icon-wrapper {
            margin-bottom: 18px;
            width: 55px;
            height: 55px;
          }

          .feature-title {
            font-size: 1.15rem;
          }

          .feature-description {
            font-size: 0.88rem;
            line-height: 1.6;
          }
        }

        /* Tablet Portrait (640px - 767px) */
        @media (max-width: 767px) and (min-width: 640px) {
          .why-choose-section {
            padding: 55px 0;
          }

          .container {
            padding: 0 18px;
          }

          .header {
            margin-bottom: 40px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .main-title {
            font-size: 1.8rem;
          }

          .subtitle {
            font-size: 0.95rem;
          }

          .feature-card {
            padding: 24px 20px;
            border-radius: 14px;
            display: block;
            position: relative;
          }

          .icon-wrapper {
            margin-bottom: 12px;
            margin-right: 0;
            margin-left: 0;
            min-width: 50px;
            width: 50px;
            height: 50px;
            flex-shrink: 0;
            float: left;
          }

          .feature-title {
            font-size: 1.05rem;
            margin: 0 0 8px 0;
            text-align: left;
          }

          .feature-description {
            font-size: 0.85rem;
            line-height: 1.55;
            text-align: left;
            clear: both;
          }

          [dir="rtl"] .feature-card {
            text-align: right;
            position: relative;
          }

          [dir="rtl"] .icon-wrapper {
            float: right !important;
            margin-right: 0;
            margin-left: 12px;
          }

          [dir="rtl"] .feature-title {
            text-align: right;
          }

          [dir="rtl"] .feature-description {
            text-align: right;
            clear: both;
          }
        }

        /* Mobile Large (480px - 639px) */
        @media (max-width: 639px) and (min-width: 480px) {
          .why-choose-section {
            padding: 50px 0;
          }

          .container {
            padding: 0 16px;
          }

          .header {
            margin-bottom: 38px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .main-title {
            font-size: 1.65rem;
            margin: 0 0 10px 0;
          }

          .subtitle {
            font-size: 0.9rem;
          }

          .feature-card {
            padding: 20px 18px;
            border-radius: 14px;
            display: block;
            position: relative;
          }

          .icon-wrapper {
            margin-bottom: 8px;
            margin-right: 0;
            min-width: 48px;
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            float: left;
          }

          .feature-title {
            font-size: 1rem;
            margin: 0 0 6px 0;
            text-align: left;
          }

          .feature-description {
            font-size: 0.82rem;
            line-height: 1.5;
            clear: both;
          }

          [dir="rtl"] .feature-card {
            text-align: right;
            position: relative;
          }

          [dir="rtl"] .icon-wrapper {
            float: right !important;
            margin-right: 0;
            margin-left: 8px;
          }

          [dir="rtl"] .feature-title {
            text-align: right;
          }

          [dir="rtl"] .feature-description {
            text-align: right;
            clear: both;
          }
        }

        /* Mobile Medium (375px - 479px) */
        @media (max-width: 479px) and (min-width: 375px) {
          .why-choose-section {
            padding: 45px 0;
          }

          .container {
            padding: 0 14px;
          }

          .header {
            margin-bottom: 32px;
          }

          .background-image {
            opacity: 0.6;
          }

          .overlay {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.97) 0%,
              rgba(255, 255, 255, 0.92) 100%
            );
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .main-title {
            font-size: 1.45rem;
            margin: 0 0 8px 0;
          }

          .subtitle {
            font-size: 0.87rem;
          }

          .feature-card {
            padding: 18px 16px;
            border-radius: 12px;
            display: block;
            position: relative;
          }

          .icon-wrapper {
            margin-bottom: 8px;
            min-width: 44px;
            width: 44px;
            height: 44px;
            flex-shrink: 0;
            float: left;
            margin-right: 8px;
          }

          .feature-title {
            font-size: 0.95rem;
            margin: 0 0 5px 0;
            font-weight: 600;
            text-align: left;
          }

          .feature-description {
            font-size: 0.8rem;
            line-height: 1.5;
            clear: both;
          }

          [dir="rtl"] .feature-card {
            text-align: right;
            position: relative;
          }

          [dir="rtl"] .icon-wrapper {
            float: right !important;
            margin-right: 0;
            margin-left: 8px;
          }

          [dir="rtl"] .feature-title {
            text-align: right;
          }

          [dir="rtl"] .feature-description {
            text-align: right;
            clear: both;
          }
        }

        /* Mobile Small (320px - 374px) */
        @media (max-width: 374px) {
          .why-choose-section {
            padding: 40px 0;
          }

          .container {
            padding: 0 12px;
          }

          .header {
            margin-bottom: 28px;
          }

          .background-image {
            opacity: 0.5;
            display: none;
          }

          .overlay {
            background: linear-gradient(
              135deg,
              rgba(255, 255, 255, 0.98) 0%,
              rgba(255, 255, 255, 0.94) 100%
            );
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .main-title {
            font-size: 1.3rem;
            margin: 0 0 7px 0;
          }

          .subtitle {
            font-size: 0.82rem;
            line-height: 1.5;
          }

          .feature-card {
            padding: 16px 14px;
            border-radius: 12px;
            display: block;
            position: relative;
          }

          .icon-wrapper {
            margin-bottom: 8px;
            min-width: 40px;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            float: left;
            margin-right: 8px;
          }

          .feature-title {
            font-size: 0.9rem;
            margin: 0 0 4px 0;
            font-weight: 600;
            text-align: left;
          }

          .feature-description {
            font-size: 0.76rem;
            line-height: 1.45;
            clear: both;
          }

          [dir="rtl"] .feature-card {
            text-align: right;
            position: relative;
          }

          [dir="rtl"] .icon-wrapper {
            float: right !important;
            margin-right: 0;
            margin-left: 8px;
          }

          [dir="rtl"] .feature-title {
            text-align: right;
          }

          [dir="rtl"] .feature-description {
            text-align: right;
            clear: both;
          }
        }

        /* Enhanced transitions and effects */
        .feature-card,
        .icon-wrapper {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Accessibility - Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .feature-card:hover,
          .icon-wrapper,
          .feature-card:hover .icon-wrapper {
            transform: none;
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .feature-card {
            border: 2px solid #379DD7;
          }
          
          .feature-title {
            color: #000;
          }

          .feature-description {
            color: #000;
          }
        }

        /* Print styles */
        @media print {
          .background-image {
            display: none;
          }

          .overlay {
            background: white;
          }

          .feature-card {
            page-break-inside: avoid;
            box-shadow: none;
            border: 1px solid #ddd;
          }
        }
      `}</style>

      <section
        className="why-choose-section"
        dir={lang === "ar" ? "rtl" : "ltr"}
        style={{
          direction: lang === "ar" ? "rtl" : "ltr",
          textAlign: lang === "ar" ? "right" : "left",
        }}
      >
        {/* Background Image */}
        <div className="background-image" />
        
        {/* White Overlay */}
        <div className="overlay" />

        <div className="container">
          {/* Header */}
          <div className="header">
            <h2 className="main-title">{t.mainTitle}</h2>
            <p className="subtitle">{t.subtitle}</p>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            {t.features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}