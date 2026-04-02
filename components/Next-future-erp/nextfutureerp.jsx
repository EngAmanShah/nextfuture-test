"use client";
import ERP from "@/components/ERP";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const translations = {
  ar: {
    badge: "منصة ERP السحابية",
    heroTitle: "نيكست فيوتشر ERP",
    heroSubtitle: "حلاً متكاملاً يعزز كفاءة أعمالك ويضمن نجاحك",
    heroDesc: "نيكست  فيوتشر هي منصة ERP متكاملة مصممة للأعمال الحديثة، <br />تجمع بين الإدارة المالية، المبيعات، المخزون، إدارة علاقات العملاء (CRM)، ورؤى مدعومة بالذكاء <br />الاصطناعي في نظام واحد متكامل وسلس.",
    startNow: "ابدأ الآن",
    exploreFeatures: "اكتشف المميزات",
    modulesTag: "المنصة الأساسية",
    modulesTitle: "كل ما يحتاجه عملك في",
    modulesTitleEm: "مكان واحد",
    modulesDesc:
      "من المبيعات إلى المحاسبة، العمليات إلى الرؤى المدعومة بالذكاء الاصطناعي",
    moreComing: "المزيد قريباً",
    moreComingDesc: "موارد بشرية وفواتير وتجارة إلكترونية ووحدات أخرى قيد التطوير",
    whyTag: "لماذا نيكست  فيوتشر",
    whyTitle: "لماذا نيكست  فيوتشر ERP ؟",
    whySubtitle: "مصممة للطموح والنمو، نقدم لك ميزة تنافسية فريدة",
    erpSystem: "ERP نظام",
    customErpTitle: "حلول ERP",
    customErpTitleSpan: "مخصصة",
    customErpSubtitle: "أنظمة مصممة خصيصًا لتلبية احتياجات عملك",
    customErpDesc: "كل عمل فريد من نوعه، حلول ERP المخصصة لدينا مبنية من الصفر لتتناسب مع سير العمل والعمليات والمتطلبات الخاصة بك، مما يمنحك ميزة تنافسية.",
    fullyCustom: "مخصص بالكامل",
    fullyCustomDesc: "يصمم خصيصًا لعمليات عملك واحتياجاته المتفردة",
    seamlessIntegration: "تكامل سلس",
    seamlessIntegrationDesc: "يتفاعل بسهولة مع أنظمتك الحالية دون أي مشاكل",
    scalability: "قابلية التوسع",
    scalabilityDesc: "ينمو بسلاسة مع توسع أعمالك دون أي قيود",
    easeOfUse: "سهولة الاستخدام",
    easeOfUseDesc: "واجهة بديهية تجعل العمل أكثر كفاءة وسلاسة",
    readyToBuild: "جاهز لبناء نظام ERP المخصص لك؟",
    letsDiscuss: "دعنا نناقش كيف يمكننا إنشاء حل ERP المثالي لعملك",
    contactUs: "تواصل معنا",
  },
  en: {
    badge: "Cloud ERP Platform",
    heroTitle: "NextFuture ERP",
    heroSubtitle: "An integrated solution that boosts your business efficiency and ensures your success",
    heroDesc:
      "NextFuture is an all-in-one ERP platform built for modern businesses — combining finance, sales, inventory, CRM, and AI-powered insights in one seamless integrated system.",
    startNow: "Start Now",
    exploreFeatures: "Explore Features",
    modulesTag: "Core Platform",
    modulesTitle: "Everything Your Business Needs in",
    modulesTitleEm: "One Place",
    modulesDesc:
      "From sales to accounting, operations to AI-powered insights",
    moreComing: "More Coming Soon",
    moreComingDesc: "HR, Payroll, E-Commerce & more modules in development",
    whyTag: "Why NextFuture",
    whyTitle: "Why NextFuture ERP?",
    whySubtitle: "Designed for ambition and growth, we offer you a unique competitive edge",
    erpSystem: "ERP System",
    customErpTitle: "Custom",
    customErpTitleSpan: "ERP Solutions",
    customErpSubtitle: "Systems tailored specifically to meet your business needs",
    customErpDesc: "Every business is unique. Our custom ERP solutions are built from the ground up to match your specific workflows, processes, and requirements, giving you a competitive advantage.",
    fullyCustom: "Fully Custom",
    fullyCustomDesc: "Designed specifically for your business processes and unique needs",
    seamlessIntegration: "Seamless Integration",
    seamlessIntegrationDesc: "Easily interacts with your existing systems without any issues",
    scalability: "Scalability",
    scalabilityDesc: "Grows smoothly as your business expands without any limitations",
    easeOfUse: "Ease of Use",
    easeOfUseDesc: "Intuitive interface makes work more efficient and streamlined",
    readyToBuild: "Ready to Build Your Custom ERP System?",
    letsDiscuss: "Let's discuss how we can create the perfect ERP solution for your business",
    contactUs: "Contact Us",
  },
};

const getModules = (lang) =>
  lang === "ar"
    ? [
        { icon: "/services/suit-box.png", title: "المبيعات", desc: "الفوترة وأنظمة النقاط والعروض وقوائم الأسعار وإدارة العمولات — كل شيء في تدفق واحد." },
        { icon: "/services/Vector2.png", title: "المحاسبة", desc: "الرسم البياني للحسابات والدفتر والتقارير المالية وإدارة الأصول الكاملة." },
        { icon: "/services/erp.png", title: "المخزون", desc: "تتبع الأسهم والرموز وإدارة المستودعات المتعددة والموردين والجرد.", featured: true },
        { icon: "/services/Vector3.png", title: "محرك الذكاء الاصطناعي", desc: "الذكاء الاصطناعي للأتمتة والرؤى التنبؤية والتنبؤ بالأعمال." },
        { icon: "/services/Vector2.png", title: "هيئة الزكاة والضريبة والجمارك", desc: "تكامل مباشر وآمن مع أنظمة هيئة الزكاة والضريبة والجمارك لضمان الامتثال الكامل." },
        { icon: "/services/Vector1.png", title: "تقرير أعمار الذمم المدينة", desc: "تحليل شامل لحالات الذمم المدينة وتصنيفها حسب أعمارها لضمان الاستحقاقات." },
        { icon: "/services/uim_apps.png", title: "الترميزات", desc: "إدارة شاملة للترميزات والتصنيفات والوحدات لتنظيم العمليات بكفاءة عالية." },
      ]
    : [
        { icon: "/services/suit-box.png", title: "Sales", desc: "Invoicing, POS, offers, price lists, and commission management — everything in one flow." },
        { icon: "/services/Vector2.png", title: "Accounting", desc: "Chart of accounts, ledger, financial reports, and complete asset management." },
        { icon: "/services/erp.png", title: "Inventory", desc: "Stock tracking, barcodes, multi-warehouse management, suppliers, and inventory.", featured: true },
        { icon: "/services/Vector3.png", title: "AI Engine", desc: "Artificial intelligence for automation, predictive insights, and business forecasting." },
        { icon: "/services/Vector2.png", title: "ZATCA", desc: "Direct and secure integration with Zakat, Tax and Customs Authority systems for full compliance." },
        { icon: "/services/Vector1.png", title: "AR Aging Report", desc: "Comprehensive analysis of accounts receivable aging to ensure timely collections." },
        { icon: "/services/uim_apps.png", title: "Coding System", desc: "Comprehensive management of codes, categories, and units for efficient process organization." },
      ];

const getWhyFeatures = (lang) =>
  lang === "ar"
    ? [
        { icon: "/services/icon2.png", title: "التحليلات في الوقت الحقيقي", desc: "لوحات معلومات فورية وتقارير شاملة، لتبقى على دراية دائماً بمكانك ومكانة عملك", pos: "top-right" },
        { icon: "/services/icon1.png", title: "كفاءة التشغيل", desc: "أتمتة المهام الروتينية، القضاء على الأخطاء اليدوية، وتبسيط جميع العمليات لتحقيق أفضل النتائج", pos: "top-left" },
        { icon: "/services/icon4.png", title: "التكامل السلس", desc: "تواصل جميع الوحدات بسلاسة، مما يضمن تدفق المعلومات بسهولة بين جميع أقسام عملك", pos: "bottom-left" },
        { icon: "/services/icon3.png", title: "منصة سحابية موجهة نحو الرقمية", desc: "الوصول الكامل إلى عملك من أي مكان، عبر جميع الأجهزة، وفي الوقت الحقيقي", pos: "bottom-right" },
      ]
    : [
        { icon: "/services/icon2.png", title: "Real-Time Analytics", desc: "Instant dashboards and comprehensive reports so you always know where you stand.", pos: "top-right" },
        { icon: "/services/icon1.png", title: "Operational Efficiency", desc: "Automate routine tasks, eliminate manual errors, and streamline all operations for best results.", pos: "top-left" },
        { icon: "/services/icon4.png", title: "Seamless Integration", desc: "All modules communicate smoothly, ensuring information flows easily across your business.", pos: "bottom-left" },
        { icon: "/services/icon3.png", title: "Cloud-First Platform", desc: "Full access to your business from anywhere, on any device, in real time.", pos: "bottom-right" },
      ];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function NextFutureERPPage() {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = translations[lang];
  const isRTL = lang === "ar";
  const modules = getModules(lang);
  const whyFeatures = getWhyFeatures(lang);

  const handleStart = () => router.push(`/${lang}/ERP/erp-register`);

  return (
    <>
      <style>{globalStyles}</style>
      <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif" }}>

        {/* ══════════════════════════════════════
            SECTION 1 — HERO
        ══════════════════════════════════════ */}
        <HeroSection t={t} onStart={handleStart} isRTL={isRTL} />

        {/* ══════════════════════════════════════
            SECTION 2 — MODULES GRID
        ══════════════════════════════════════ */}
        <ModulesSection t={t} modules={modules} isRTL={isRTL} />

        {/* ══════════════════════════════════════
            SECTION 3 — WHY NEXTFUTURE
        ══════════════════════════════════════ */}
        <WhySection t={t} features={whyFeatures} isRTL={isRTL} />

        <ERP lang={lang} />

        <CustomERPSolutionsSection t={t} isRTL={isRTL} lang={lang} />

      </div>
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection({ t, onStart, isRTL }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-image" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className={`hero-content ${isRTL ? "hero-content-rtl" : "hero-content-ltr"}`}>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t.heroDesc }} />
          <div className="hero-actions">
            <button className="btn-primary" onClick={onStart}>{t.startNow}</button>
            <button className="btn-ghost">{t.exploreFeatures}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MODULES SECTION
───────────────────────────────────────────── */
function ModulesSection({ t, modules, isRTL }) {
  return (
    <section className="modules-section">
      <div className="modules-dots" />

      <div className="section-inner">
        <div className="section-header">
          <h2 className="modules-title">
            {t.modulesTitle}{" "}
            <span className="modules-title-em">{t.modulesTitleEm}</span>
          </h2>
          <p className="section-sub">{t.modulesDesc}</p>
        </div>

        <div className="modules-grid">
          {modules.map((mod, i) => (
            <ModuleCard key={i} mod={mod} isRTL={isRTL} />
          ))}
          <div className="module-card module-card-more">
            <div className="module-icon-wrap module-icon-soon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="soon-label">SOON</span>
            </div>
            <h3 className="module-title">{t.moreComing}</h3>
            <p className="module-desc">{t.moreComingDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ mod, isRTL }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`module-card${mod.featured ? " module-card-featured" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="module-icon-wrap">
        <Image src={mod.icon} alt={mod.title} width={40} height={40} style={{ objectFit: "contain" }} />
      </div>
      <h3 className="module-title">{mod.title}</h3>
      <p className="module-desc">{mod.desc}</p>
      {hovered && mod.image && (
        <div className="module-hover-img">
          <img src={mod.image} alt={mod.title} />
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHY SECTION
───────────────────────────────────────────── */
function WhySection({ t, features, isRTL }) {
  const topRight = features[0];
  const topLeft = features[1];
  const bottomLeft = features[2];
  const bottomRight = features[3];

  return (
    <section className="why-section">
      <div className="why-grid-bg" />

      <div className="section-inner">
        <div className="why-header">
          <h2 className="why-title">{t.whyTitle}</h2>
          <p className="why-subtitle">{t.whySubtitle}</p>
        </div>

        <div className="why-layout">
          <div className="why-col why-col-left">
            <WhyCard feature={topLeft} align="left" isRTL={isRTL} />
            <WhyCard feature={bottomLeft} align="left" isRTL={isRTL} />
          </div>

          <div className="why-center">
            <svg className="why-connectors" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
              <line x1="150" y1="155" x2="10"  y2="80"  stroke="rgba(100,160,255,0.4)" strokeWidth="1.5" strokeDasharray="7,5"/>
              <line x1="150" y1="155" x2="290" y2="80"  stroke="rgba(100,160,255,0.4)" strokeWidth="1.5" strokeDasharray="7,5"/>
              <line x1="150" y1="245" x2="10"  y2="320" stroke="rgba(100,160,255,0.4)" strokeWidth="1.5" strokeDasharray="7,5"/>
              <line x1="150" y1="245" x2="290" y2="320" stroke="rgba(100,160,255,0.4)" strokeWidth="1.5" strokeDasharray="7,5"/>
              <line x1="10"  y1="200" x2="80"  y2="200" stroke="rgba(100,160,255,0.3)" strokeWidth="1" strokeDasharray="5,4"/>
              <line x1="220" y1="200" x2="290" y2="200" stroke="rgba(100,160,255,0.3)" strokeWidth="1" strokeDasharray="5,4"/>
              <circle cx="150" cy="200" r="110" fill="none" stroke="rgba(100,160,255,0.2)" strokeWidth="1" strokeDasharray="10,7"/>
            </svg>

            <div className="why-logo-circle">
              <Image
                src="/logo1.png"
                alt="NextFuture ERP"
                width={90}
                height={65}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
              <span className="why-erp-label">{t.erpSystem}</span>
            </div>
          </div>

          <div className="why-col why-col-right">
            <WhyCard feature={topRight} align="right" isRTL={isRTL} />
            <WhyCard feature={bottomRight} align="right" isRTL={isRTL} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyCard({ feature, align, isRTL }) {
  return (
    <div className={`why-card why-card-${align}`}>
      <div className="why-card-header">
        <span className="why-card-title">{feature.title}</span>
        <div className="why-card-icon">
          <Image src={feature.icon} alt={feature.title} width={24} height={24} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
        </div>
      </div>
      <p className="why-card-desc">{feature.desc}</p>
    </div>
  );
}

function CustomERPSolutionsSection({ t, isRTL, lang }) {
  const router = useRouter();

  const handleContact = () => {
    router.push(`/${lang}/contact-us`);
  };

  return (
    <section className="custom-erp-section">
      <div className="custom-erp-overlay" />
      <div className="custom-erp-inner">
        <div className="custom-erp-top">
          <div className={`custom-erp-content ${isRTL ? 'custom-erp-content-rtl' : 'custom-erp-content-ltr'}`}>
            <h2 className="custom-erp-title">
              {t.customErpTitle} <span>{t.customErpTitleSpan}</span>
            </h2>
            <h3 className="custom-erp-subtitle">{t.customErpSubtitle}</h3>
            <p className="custom-erp-desc">{t.customErpDesc}</p>

            <div className="custom-erp-points">
              <div className="custom-erp-point">
                <h4>{t.fullyCustom}</h4>
                <p>{t.fullyCustomDesc}</p>
              </div>
              <div className="custom-erp-point">
                <h4>{t.seamlessIntegration}</h4>
                <p>{t.seamlessIntegrationDesc}</p>
              </div>
              <div className="custom-erp-point">
                <h4>{t.scalability}</h4>
                <p>{t.scalabilityDesc}</p>
              </div>
              <div className="custom-erp-point">
                <h4>{t.easeOfUse}</h4>
                <p>{t.easeOfUseDesc}</p>
              </div>
            </div>
          </div>

        </div>

        <div className="custom-erp-cta">
          <Image src="/logo1.png" alt="NF" width={64} height={48} style={{ objectFit: "contain" }} />
          <h3>{t.readyToBuild}</h3>
          <p>{t.letsDiscuss}</p>
          <button type="button" onClick={handleContact}>{t.contactUs}</button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GLOBAL STYLES
───────────────────────────────────────────── */
const globalStyles = `
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── HERO ── */
.hero-section {
  position: relative;
  min-height: 220px !important;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0a1628;
}
.hero-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('/next-erp/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.55;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to left, rgba(5,15,45,0.2) 0%, rgba(5, 15, 45, 0.31) 60%);
}
.hero-inner {
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 48px;
  display: flex;
  justify-content: flex-end;
}
.hero-content {
  width: 100%;
  max-width: 1800px;
  margin-top: 100px;
}
.hero-content-ltr {
  text-align: left ;
}
.hero-content-rtl {
  text-align: right;
}

.hero-title {
  font-size: clamp(28px, 4vw, 46px);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 10px;
}
.hero-subtitle {
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 400;
  color: rgba(220,235,255,0.9);
  margin-bottom: 20px;
}
.hero-desc {
  font-size: 14px;
  line-height: 1.9;
  color: rgba(190,215,255,0.8);
  margin-bottom: 32px;
  max-width: 1250px;
}
.hero-actions {
  display: flex;
  gap: 14px;
}
.btn-primary {
  background: #1a6fff;
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-family: 'Cairo', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}
.btn-primary:hover { background: #1057d4; transform: translateY(-2px); }
.btn-ghost {
  background: transparent;
  color: #fff;
  border: 1.5px solid rgba(255,255,255,0.4);
  padding: 12px 28px;
  border-radius: 8px;
  font-family: 'Cairo', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}
.btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

/* ── MODULES ── */
.modules-section {
  position: relative;
  background: #fff;
  padding: 80px 0 90px;
  overflow: hidden;
}
.modules-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(30,80,200,0.06) 1.5px, transparent 1.5px);
  background-size: 28px 28px;
  pointer-events: none;
}
.section-inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 2;
}
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.modules-title {
  font-size: clamp(24px, 3.5vw, 38px);
  font-weight: 800;
  color: #0d1a3a;
  line-height: 1.3;
}
.modules-title-em {
  color: #1a6fff;
  font-style: normal;
}
.section-sub {
  font-size: 15px;
  color: #5a6a8a;
  margin-top: 12px;
}
.modules-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
}
.module-card {
  position: relative;
  flex: 0 1 calc((100% - 36px) / 3);
  min-height: 220px;
  padding: 36px 28px;
  border: 1px solid rgba(30,80,200,0.08);
  border-radius: 20px;
  background: url('/future2.png') center/cover;
  text-align: right;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: default;
}
[dir="rtl"] .module-card {
  text-align: left;
}
.module-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.5);
  pointer-events: none;
}
.module-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 28px rgba(26,111,255,0.14);
  z-index: 2;
}
.module-card:hover::before {
  background: rgba(255,255,255,0.45);
}
.module-card > * {
  position: relative;
  z-index: 2;
}
.module-card-featured::before { background: rgba(240,246,255,0.5); }
.module-card-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.module-card-more::before {
  background: rgba(247,250,255,0.5);
}
.module-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: linear-gradient(135deg, #e8f0ff, #d0e2ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}
[dir="rtl"] .module-icon-wrap {
  margin-left: auto;
  margin-right: auto;
}
.module-icon-soon {
  flex-direction: column;
  gap: 2px;
  background: linear-gradient(135deg, #e8fff0, #c8f0d8);
  margin: 0 auto 18px;
}
.soon-label {
  font-size: 9px;
  font-weight: 700;
  color: #1a9e5a;
  letter-spacing: 1px;
}
.module-card {
  position: relative;
  flex: 0 1 calc((100% - 36px) / 3);
  min-height: 220px;
  padding: 36px 28px;
  border: 1px solid rgba(30,80,200,0.08);
  border-radius: 20px;
  background: url('/future2.png') center/cover;
  text-align: center;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: default;
}

.module-title {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #0d1a3a;
  margin-bottom: 10px;
}
.module-desc {
  text-align: center;
  font-size: 13px;
  color: #5a6a8a;
  line-height: 1.75;
}
.module-hover-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
}
.module-hover-img img {
  width: 340px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  border: 2px solid #fff;
}

/* ── WHY SECTION ── */
.why-section {
  position: relative;
  background: linear-gradient(160deg, #0c1e52 0%, #1040a0 50%, #0c1e52 100%);
  padding: 80px 0 90px;
  overflow: hidden;
}
.why-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(100,160,255,0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100,160,255,0.07) 1px, transparent 1px);
  background-size: 55px 55px;
  pointer-events: none;
}
.why-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 2;
}
.why-title {
  font-size: clamp(22px, 3.5vw, 38px);
  font-weight: 800;
  color: #fff;
}
.why-subtitle {
  font-size: 15px;
  color: rgba(180,210,255,0.85);
  margin-top: 12px;
}
.why-layout {
  display: grid;
  grid-template-columns: 1fr 260px 1fr;
  gap: 32px;
  align-items: center;
  position: relative;
  z-index: 2;
}
.why-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.why-card {
  background: rgba(10,30,90,0.5);
  border: 1px solid rgba(100,160,255,0.2);
  border-radius: 14px;
  padding: 24px 20px;
  backdrop-filter: blur(10px);
  transition: transform 0.25s, box-shadow 0.25s;
}
.why-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(30,80,255,0.2);
}
.why-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.why-card-left .why-card-header {
  justify-content: flex-start;
  flex-direction: row;
}
.why-card-right .why-card-header {
  justify-content: flex-end;
  flex-direction: row-reverse;
}
.why-card-title {
  font-size: 15px;
  font-weight: 700;
  color: #e8f0ff;
}
.why-card-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(30,80,255,0.25);
  border: 1px solid rgba(100,160,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.why-card-desc {
  font-size: 13px;
  color: rgba(160,195,255,0.8);
  line-height: 1.8;
}
.why-card-left .why-card-desc {
  text-align: left;
}
.why-card-right .why-card-desc {
  text-align: right;
}
[dir="rtl"] .why-card-left .why-card-desc {
  text-align: right;
}
[dir="rtl"] .why-card-right .why-card-desc {
  text-align: left;
}
.why-center {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 380px;
}
.why-connectors {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.why-logo-circle {
  position: relative;
  z-index: 3;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 32%, #2a5ad4 0%, #0e2870 55%, #060f30 100%);
  border: 2px solid rgba(100,160,255,0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 70px rgba(30,80,255,0.4), inset 0 0 40px rgba(0,0,0,0.3);
}
.why-erp-label {
  color: rgba(180,215,255,0.75);
  font-size: 10px;
  margin-top: 8px;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
}

/* ── CUSTOM ERP SECTION ── */
.custom-erp-section {
  position: relative;
  background-image: url('/next-erp/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.custom-erp-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255, 255, 255, 0.73) 100%);
}
.custom-erp-inner {
  max-width: 1060px;
  margin: 0 auto;
  padding: 48px 24px;
  position: relative;
  z-index: 1;
}
.custom-erp-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;
  align-items: start;
}
.custom-erp-content {
  max-width: 100%;
}
.custom-erp-point {
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(15,98,195,0.12);
  border-radius: 12px;
  padding: 10px 14px;
  margin-bottom: 10px;
}
.custom-erp-point h4 {
  font-size: 16px;
  margin: 0 0 6px;
}
.custom-erp-point p {
  font-size: 13px;
  margin: 0;
}

.custom-erp-image {
  background-image: url('/next-erp/erp-custom.jpg');
  min-height: 400px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.6);
}

[dir="rtl"] .custom-erp-image {
  transform: scaleX(-1);
  filter: none;
}

[dir="rtl"] .custom-erp-image * {
  transform: scaleX(-1);
}

.custom-erp-content {
  text-align: left;
  direction: ltr;
}
.custom-erp-content-rtl {
  text-align: right;
  direction: rtl;
}
.custom-erp-content-ltr {
  text-align: left;
  direction: ltr;
}
[dir="rtl"] .custom-erp-content-ltr {
  text-align: left; /* explicit for RTL navigation not to flip this content */
}
[dir="rtl"] .custom-erp-content-rtl {
  text-align: right;
}

.custom-erp-title {
  font-size: clamp(28px, 4vw, 44px);
  color: #12213f;
  margin-bottom: 10px;
  content-justify: flex-end;
  font-weight: 800;
}
.custom-erp-title span {
  color: #0f62c3;
}
.custom-erp-subtitle {
  font-size: clamp(20px, 2.7vw, 31px);
  color: #1e2f53;
  font-weight: 700;
  margin-bottom: 14px;
}
.custom-erp-desc {
  font-size: 16px;
  line-height: 1.6;
  color: #2c3f67;
  margin-bottom: 28px;
}
.custom-erp-points {
  display: flex;
  flex-wrap: nowrap;
  gap: 14px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
}
.custom-erp-points::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.custom-erp-point {
  flex: 0 0 calc(25% - 10px);
  min-width: 240px;
  scroll-snap-align: start;
}

@media (max-width: 1200px) {
  .custom-erp-point {
    flex: 0 0 40%;
    min-width: 260px;
  }
}

@media (max-width: 900px) {
  .custom-erp-point {
    flex: 0 0 46%;
    min-width: calc(46% - 8px);
    max-width: 46%;
  }
}

@media (max-width: 680px) {
  .custom-erp-point {
    flex: 0 0 42%;
    min-width: calc(42% - 8px);
    max-width: 42%;
  }
}

@media (max-width: 560px) {
  .custom-erp-point {
    flex: 0 0 44%;
    min-width: calc(44% - 8px);
    max-width: 44%;
  }
}

@media (max-width: 380px) {
  .custom-erp-point {
    flex: 0 0 48%;
    min-width: calc(48% - 8px);
    max-width: 48%;
  }
}
.custom-erp-point {
  background: rgba(255,255,255,0.72);
  border: 1px solid rgba(15,98,195,0.14);
  border-radius: 12px;
  padding: 14px 16px;
}
.custom-erp-point h4 {
  font-size: 18px;
  color: #12213f;
  margin-bottom: 6px;
}
.custom-erp-point p {
  font-size: 14px;
  line-height: 1.55;
  color: #3f5278;
}
.custom-erp-cta {
  margin-top: 60px;
  text-align: center;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(15,98,195,0.18);
  border-radius: 18px;
  padding: 40px 20px;
}
.custom-erp-cta h3 {
  font-size: clamp(22px, 3vw, 28px);
  color: #0f62c3;
  margin: 16px 0 8px;
}
.custom-erp-cta p {
  font-size: 16px;
  color: #2f4268;
  margin-bottom: 24px;
}
.custom-erp-cta button {
  border: none;
  background: #0f62c3;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  padding: 12px 36px;
  cursor: pointer;
  transition: background 0.3s;
}
.custom-erp-cta button:hover {
  background: #0b4e9c;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .module-card { flex-basis: calc((100% - 18px) / 2); }
  .why-layout { grid-template-columns: 1fr; gap: 24px; }
  .why-center { height: 260px; }
  .why-connectors { display: none; }
  .hero-inner { padding: 48px 24px; justify-content: center; }
  .hero-content { margin-top: 100px; text-align: center !important; }
  .hero-actions { justify-content: center; }
  .custom-erp-top { grid-template-columns: 1fr; }
 
  .custom-erp-points { grid-template-columns: 1fr; }
  .custom-erp-desc { font-size: 15px; }
  .custom-erp-point h4 { font-size: 16px; }
  .custom-erp-point p { font-size: 13px; }
}
@media (max-width: 560px) {
  .module-card { flex-basis: 100%; }
  .custom-erp-inner { padding: 44px 18px; }
  .custom-erp-title { font-size: 28px; }
  .custom-erp-subtitle { font-size: 20px; }
  .custom-erp-cta h3 { font-size: 20px; }
  .custom-erp-cta p { font-size: 14px; }
  .custom-erp-cta button { font-size: 14px; padding: 10px 28px; }
}
`;