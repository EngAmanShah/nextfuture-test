"use client";
import './Badge.css';
import { motion } from "framer-motion";
import { LucideShield, LucideCircleCheckBig, Download, Link2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Badge({ lang = "en" }) {
  const router = useRouter();

  const features = {
    en: ["The latest global technology", "A team of certified engineers"],
    ar: ["أحدث التقنيات العالمية", "فريق من المهندسين المعتمدين"]
  };

  const handleRegisterClick = () => {
    router.push(`/${lang}/ERP/erp-register`);
  };

  const heroTitle = {
    en: "NextFuture Technology - The Safe and Reliable Solution for E-Invoicing",
    ar: "نيكست  فيوتشر للتقنية الحل الآمن والموثوق للفوترة الإلكترونية"
  };

  const heroDescription = {
    en: "Discover why NextFuture products and services are the best for streamlining your operations and reducing human errors.",
    ar: "اكتشف لماذا تعد منتجات وخدمات نيكست  فيوتشر الأفضل لتبسيط عملياتك وتقليل الأخطاء البشرية."
  };

  const buttonText = {
    downloadApp: { en: "Download Desktop App", ar: "تحميل تطبيق سطح المكتب" },
    exploreFeatures: { en: "Explore Features →", ar: "استكشف الميزات ←" }
  };

  const electronicLinkContent = {
    title: { 
      en: "Electronic Link", 
      ar: "الربط الإلكتروني" 
    },
    subtitle: { 
      en: "Work smart by linking NextFuture solutions with software and tools.", 
      ar: "اعمل بذكاء من خلال ربط حلول نيكست  فيوتشر مع البرامج والأدوات." 
    },
    description: { 
      en: "Enjoy a seamless work experience by linking the solutions to the rest of the programs, to save your time and get better results.", 
      ar: "استمتع بتجربة عمل سلسة من خلال ربط الحلول ببقية البرامج، لتوفير وقتك والحصول على نتائج أفضل." 
    }
  };

  const zakatContent = {
    title: { 
      en: "Zakat, Tax and Customs Authority", 
      ar: "هيئة الزكاة والضريبة والجمارك" 
    },
    description: { 
      en: "Benefit from seamless integration between the Zakat, Tax and Customs Authority solutions for automatic invoice exchange.", 
      ar: "استفد من التكامل السلس مع حلول هيئة الزكاة والضريبة والجمارك لتبادل الفواتير تلقائياً." 
    }
  };

  const circleColors = ["#FACC15", "#F472B6", "#38BDF8", "#34D399", "#F87171", "#38BDF8"];

  return (
    <section className="hero-section col-lg-12 mx-auto position-relative" dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Particle Canvas */}
      {/* <ParticleCanvas /> */}

      <div className="hero-container row align-items-center position-relative" style={{ zIndex: 1 }}>

        {/* Text Section */}
        <div className={`col-lg-8 order-2 order-lg-1 ${lang === "ar" ? "text-end" : "text-start"}`}>
          <motion.h2
            className="fw-bold mb-3"
            initial={{ opacity: 0, x: lang === "ar" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heroTitle[lang]}
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0, x: lang === "ar" ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {heroDescription[lang]}
          </motion.p>

          <div className={`d-flex flex-wrap gap-2 ${lang === "ar" ? "justify-content-end" : ""}`}>
            {features[lang].map((feature, idx) => (
              <div key={idx} className="feature-badge">
                <span>{feature}</span>
                <LucideCircleCheckBig size={20} color="white" />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            className={`d-flex flex-wrap gap-3 mt-4 ${lang === "ar" ? "justify-content-end" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="badge-download-btn" onClick={handleRegisterClick}>
              <Download size={18} />
              {buttonText.downloadApp[lang]}
            </button>
            <a href={`/${lang}/ERP/Next-Future-ERP`} className="badge-explore-btn">
              {buttonText.exploreFeatures[lang]}
            </a>
          </motion.div>
        </div>

        {/* Icon Section */}
        <div className={`col-lg-4 d-flex justify-content-center ${lang === "ar" ? "justify-content-lg-start" : "justify-content-lg-end"} order-1 order-lg-2 mb-4 mb-lg-0`}>
          <div className="shield-container">
            {circleColors.map((color, idx) => (
              <motion.div
                key={idx}
                className="floating-circle"
                style={{ backgroundColor: color }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2 + idx * 0.2, repeat: Infinity, repeatType: "loop" }}
              />
            ))}
            <div className="shield-center">
              <LucideShield size={80} color="#38BDF8" />
            </div>
          </div>
        </div>

      </div>

      {/* Electronic Link Section */}
      <div className="electronic-link-section" dir={lang === "ar" ? "rtl" : "ltr"}>
        <motion.div 
          className="electronic-link-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="electronic-link-icon">
            <Link2 size={40} color="#38BDF8" />
          </div>
          <h3>{electronicLinkContent.title[lang]}</h3>
          <p className="subtitle">{electronicLinkContent.subtitle[lang]}</p>
          <p className="description">{electronicLinkContent.description[lang]}</p>
        </motion.div>

        {/* Zakat Authority Card */}
        <motion.div 
          className="zakat-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="zakat-logo">
            {/* <img 
              // src="https://campaigns.qoyod.com/hubfs/Zakat-logo%20(1).svg" 
              alt="Zakat, Tax and Customs Authority Logo"
              className="zakat-logo-img"
            /> */}
          </div>
          <h4>{zakatContent.title[lang]}</h4>
          <p>{zakatContent.description[lang]}</p>
        </motion.div>
      </div>

      {/* Integrated Solutions Section */}
      <div className="integrated-solutions-section" dir={lang === "ar" ? "rtl" : "ltr"}>
        <div className="integrated-solutions-grid">
          {/* Services Grid Left */}
          <motion.div 
            className="services-icons-grid"
            initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://campaigns.qoyod.com/hs-fs/hubfs/Homepage.png?width=2234&height=1562&name=Homepage.png" 
              alt="NextFuture Services"
              className="services-homepage-img"
            />
          </motion.div>

          {/* Content Right */}
          <motion.div
            className="integrated-content"
            initial={{ opacity: 0, x: lang === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="services-tag">{lang === "ar" ? "خدمات نيكست  فيوتشر" : "NextFuture Services"}</span>
            <h3>{lang === "ar" ? "وفر وقتك وجهدك مع خدماتنا المحاسبية المهنية" : "Save your time and effort with our professional accounting services"}</h3>
            <p>{lang === "ar" ? "خدمات محاسبية متكاملة لضمان أفضل استفادة من برنامج نيكست  فيوتشر المحاسبي، مثل التأسيس، مسك الدفاتر، رفع إقرارات هيئة الزكاة والضريبة والجمارك، وغيرها." : "Integrated accounting services to ensure the best use of the NextFuture accounting program, such as establishment, bookkeeping, filing returns for the Zakat, Tax and Customs Authority, and more."}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
