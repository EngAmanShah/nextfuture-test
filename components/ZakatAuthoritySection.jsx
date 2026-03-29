"use client";

import Image from "next/image";
import {
  LuFileChartPie,
  LuClock3,
  LuHeadphones,
  LuFileText,
} from "react-icons/lu";

const content = {
  ar: {
    title: "هيئة الزكاة والضريبة ",
    logoTitle: "هيئة الزكاة والضريبة والجمارك",
    logoSubtitle: "Zakat, Tax and Customs Authority",
    intro:
      "استفد من التكامل السلس مع حلول هيئة الزكاة والضريبة والجمارك لتبادل الفواتير تلقائياً.",
    details:
      "نقدم حلولاً متكاملة للتكامل مع هيئة الزكاة والضريبة، مما يضمن التوافق التام مع المتطلبات التنظيمية والمساهمة في تبسيط عمليات المحاسبة والإبلاغ.",
    imageAlt: "هيئة الزكاة والضريبة والجمارك",
    features: [
      {
        title: "إدارة البيانات المالية",
        description:
          "أتمتة جميع البيانات المالية المتعلقة بالزكاة والضرائب. إعداد تقارير دقيقة وسريعة.",
        icon: LuFileChartPie,
      },
      {
        title: "تحديثات فورية",
        description:
          "ضمان الحصول على آخر التحديثات والتعديلات التشريعية المتعلقة بالزكاة والضرائب.",
        icon: LuClock3,
      },
      {
        title: "تقدير تفصيلي",
        description:
          "تقديم تقارير تحليلية مفصلة للمساهمة في فهم الزكاة والضرائب وتحسين التخطيط المالي.",
        icon: LuFileText,
      },
      {
        title: "دعم فني متخصص",
        description:
          "تقديم دعم فني متخصص للتعامل مع أي استفسارات متعلقة بالزكاة والضرائب.",
        icon: LuHeadphones,
      },
    ],
  },
  en: {
    title: "Zakat, Tax and Customs Authority",
    logoTitle: "Zakat, Tax and Customs Authority",
    logoSubtitle: "Zakat, Tax and Customs Authority",
    intro:
      "Benefit from seamless integration with ZATCA solutions to exchange invoices automatically.",
    details:
      "We provide end-to-end integration solutions with ZATCA to ensure full regulatory compliance and simplify accounting and reporting processes.",
    imageAlt: "Zakat, Tax and Customs Authority",
    features: [
      {
        title: "Financial Data Management",
        description:
          "Automate all financial data related to zakat and taxes with accurate, fast reporting.",
        icon: LuFileChartPie,
      },
      {
        title: "Real-Time Updates",
        description:
          "Stay up to date with the latest legislative changes and tax and zakat requirements.",
        icon: LuClock3,
      },
      {
        title: "Detailed Reports",
        description:
          "Get in-depth analytical reports to better understand obligations and improve financial planning.",
        icon: LuFileText,
      },
      {
        title: "Specialized Technical Support",
        description:
          "Receive dedicated technical support for all questions related to zakat and tax integration.",
        icon: LuHeadphones,
      },
    ],
  },
};

export default function ZakatAuthoritySection({ lang = "ar" }) {
  const isArabic = lang === "ar";
  const t = content[lang] || content.ar;

  return (
    <>
      <style jsx>{`
        .zakat-wrapper {
          padding: 24px 0;
          font-family: 'Tajawal', 'Cairo', sans-serif;
        }

        .zakat-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: #0a6cc2e7;
        }

        .zakat-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url('/future2.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: grayscale(100%) brightness(20.45) contrast(0.85);
          opacity: 0.55;
          pointer-events: none;
        }

        .zakat-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        .zakat-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.05;
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 32px 32px;
          pointer-events: none;
        }

        .zakat-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .zakat-content {
          position: relative;
          min-height: 390px;
          display: grid;
          grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
          align-items: start;
          gap: 54px;
          padding: 42px 36px 34px;
        }

        .text-column {
          color: #ffffff;
          padding-top: 6px;
        }

        .text-column.ltr {
          text-align: left;
        }

        .text-column.rtl {
          text-align: right;
        }

        .title {
          margin: 0 0 10px;
          font-size: 26px;
          font-weight: 800;
          line-height: 1.3;
        }

        .intro {
          margin: 0 0 12px;
          font-size: 17px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.92);
          font-weight: 500;
        }

        .details {
          margin: 0 0 28px;
          max-width: 880px;
          font-size: 17px;
          line-height: 1.8;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 48px;
        }

        /* Base feature card - flex container */
        .feature-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }


        .feature-icon {
          color: rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-content {
          flex: 1;
        }

        .feature-title {
          margin: 0 0 6px;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.2;
          color: #ffffff;
        }

        .feature-description {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.82);
          font-weight: 500;
        }

        .logo-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          padding-top: 28px;
        }

        .logo-wrap {
          position: relative;
          width: 315px;
          height: 215px;
          display: flex;
        filter: grayscale(100%) brightness(20.45) contrast(0.85);

          align-items: center;
          justify-content: center;
        }

        .logo-image {
          object-fit: contain;
          width: 100%;
          height: 100%;
        }

        .logo-title {
          margin: 10px 0 2px;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.25;
          color: #ffffff;
        }

        .logo-subtitle {
          margin: 0;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.35;
          color: rgba(255, 255, 255, 0.95);
        }

        @media (max-width: 900px) {
          .zakat-content {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 36px 24px;
          }

          .logo-column {
            order: -1;
            padding-top: 0;
          }

          .title {
            font-size: 24px;
          }

          .intro,
          .details,
          .feature-description {
            font-size: 15px;
          }

          .feature-title {
            font-size: 18px;
          }

          .features-grid {
            gap: 24px 32px;
          }
        }

        @media (max-width: 640px) {
          .zakat-wrapper {
            padding: 16px 0;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .zakat-content {
            padding: 28px 18px;
          }

          .logo-wrap {
            width: 150px;
            height: 150px;
          }

          .title {
            font-size: 21px;
          }

          .intro,
          .details,
          .feature-description {
            font-size: 14px;
          }
        }
      `}</style>

      <div dir={isArabic ? "rtl" : "ltr"} className="zakat-wrapper">
        <section className="zakat-section">
          <div className="zakat-pattern" />
          <div className="zakat-overlay" />

          <div className="zakat-inner">
            <div className="zakat-content">
              {/* Logo Column */}
              <div className="logo-column">
                <div className="logo-wrap">
                  <Image
                    src="/zka.png"
                    alt={t.imageAlt}
                    fill
                    className="logo-image"
                    priority
                    sizes="(max-width: 640px) 150px, 215px"
                  />
                </div>
                {/* <h2 className="logo-title">{t.logoTitle}</h2> */}
                {/* <p className="logo-subtitle">{t.logoSubtitle}</p> */}
              </div>

              {/* Text Content Column */}
              <div className={`text-column ${isArabic ? "rtl" : "ltr"}`}>
                <h1 className="title">{t.title}</h1>

                <p className="intro">{t.intro}</p>

                <p className="details">{t.details}</p>

                <div className="features-grid">
                  {t.features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={idx}
                        className={`feature-card ${isArabic ? "rtl" : "ltr"}`}
                      >
                        <div className="feature-icon">
                          <Icon size={34} strokeWidth={1.8} />
                        </div>
                        <div className="feature-content">
                          <h3 className="feature-title">{feature.title}</h3>
                          <p className="feature-description">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}