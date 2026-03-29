"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./property-management.module.css";
import Image from "next/image";

export default function PropertyManagementPage({ resolvedParams }) {
  const params = useParams();
  const lang = params?.lang || resolvedParams?.lang || "ar";

  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1L4LBpcWwPekj2T3k1cGgjOqU4iQrD_1m",
      "_blank"
    );
  };

  const handleBookAppointment = () => {
    window.open(
      lang === 'ar' 
        ? "https://wa.me/966539983393?text=مرحبا، أريد حجز موعد للاستشارة حول نظام إدارة الأملاك"
        : "https://wa.me/966539983393?text=Hello, I would like to book an appointment for Property Management System consultation",
      "_blank"
    );
  };

  const handleContactUs = () => {
    window.open(
      lang === 'ar'
        ? "https://wa.me/966539983393?text=مرحبا، أريد الاستفسار عن نظام إدارة الأملاك والعقارات"
        : "https://wa.me/966539983393?text=Hello, I would like to inquire about Property Management System",
      "_blank"
    );
  };

  const handleStartNow = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const content = {
    ar: {
      hero: {
        title: "نظام إدارة الأملاك والعقارات المتكامل",
        subtitle: "إدارة عقاراتك أصبحت أسهل مع نظامنا المتكامل. راقب عقود الإيجار، الفواتير، الصيانة، والتقارير المالية من منصة واحدة. حلول ذكية توفر وقتك وتزيد أرباحك.",
        cta: "تحميل الملف التعريفي",
        book: "احجز موعدًا",
      },
      whatIsSystem: {
        title: "ما هو نظام إدارة الأملاك ؟",
        description: "هو وحدة برمجية متكاملة مصممة خصيصًا لأصحاب العقارات، شركات الوساطة العقارية، والمطورين العقاريين. تمكّنك من إدارة كافة جوانب الأملاك في مكان واحد مع أتمتة العمليات الرئيسية ومنحك رؤية شاملة حول وضع عقاراتك وأرباحك بشكل لحظي.",
      },
      features: {
        title: "🌟 المزايا الرئيسية للنظام",
        items: [
          {
            icon: "🏢",
            title: "إدارة العقارات والعقود",
            description: "تسجيل جميع الوحدات (شقق – فلل – مكاتب – محلات) مع تفاصيلها الكاملة. إدارة عقود الإيجار ومتابعة تواريخ البداية والانتهاء والتنبيهات التلقائية للتجديد.",
          },
          {
            icon: "💰",
            title: "إدارة الفوترة والمدفوعات",
            description: "إنشاء فواتير تلقائية شهرية أو سنوية بناءً على شروط العقد. متابعة حالات الدفع (مدفوع – متأخر – مستحق) مع ربط مباشر مع النظام المحاسبي.",
          },
          {
            icon: "🔧",
            title: "إدارة الصيانة والخدمات",
            description: "تسجيل طلبات الصيانة من المستأجرين بسهولة. جدولة أعمال الصيانة الدورية وربطها بالموردين أو الفرق الفنية مع تتبع التكاليف.",
          },
          {
            icon: "📊",
            title: "تقارير ولوحات تحكم تفاعلية",
            description: "تقارير مالية تفصيلية حول الإيرادات والإيجارات المستحقة. تحليل نسب الإشغال والشواغر لكل عقار مع لوحات تحكم بصرية لمتابعة الأداء.",
          },
          {
            icon: "🔗",
            title: "تكامل مع باقي وحدات أودو",
            description: "ربط كامل مع المحاسبة، إدارة العملاء (CRM)، وإدارة المشاريع لتعزيز العلاقة مع المستأجرين والمستثمرين.",
          },
          {
            icon: "📱",
            title: "واجهة مستخدم متجاوبة",
            description: "تصميم متجاوب يعمل بكفاءة على جميع الأجهزة من الحواسيب إلى الهواتف الذكية مع تجربة مستخدم سلسة.",
          },
        ],
      },
      benefits: {
        title: "💡 الفوائد العملية",
        items: [
          {
            icon: "⚙️",
            title: "تقليل الوقت والجهد",
            description: "توفير يصل إلى 70% من الوقت المستغرق في المتابعة اليدوية للعقارات والمستأجرين.",
          },
          {
            icon: "🤝",
            title: "شفافية أكبر",
            description: "ضمان شفافية كاملة بين المالك والمستأجر مع تقارير دقيقة ومفصلة.",
          },
          {
            icon: "🚀",
            title: "زيادة الكفاءة",
            description: "رفع الكفاءة التشغيلية بنسبة 60% وتقليل الأخطاء البشرية إلى أدنى حد.",
          },
          // {
          //   icon: "📈",
          //   title: "تحسين القرارات",
          //   description: "اتخاذ قرارات استراتيجية مدعومة ببيانات دقيقة وتقارير فورية وتحليلات متقدمة.",
          // },
        ],
      },
      audience: {
        title: "🎯 لمن يناسب هذا النظام؟",
        items: [
          {
            icon: "🏗️",
            title: "شركات التطوير العقاري",
            description: "إدارة المشاريع والوحدات السكنية ومتابعة الأداء المالي والتشغيلي بسهولة وكفاءة.",
          },
          {
            icon: "🏢",
            title: "شركات الوساطة والتسويق العقاري",
            description: "تحسين تجربة العملاء وإدارة العقود والعمولات ضمن نظام موحد ودقيق ومتكامل.",
          },
          {
            icon: "🏠",
            title: "ملاك العقارات الفردية",
            description: "لمن يملك أكثر من وحدة ويرغب في إدارة الإيجارات والمدفوعات بسهولة ووضوح واحترافية.",
          },
          // {
          //   icon: "🏛️",
          //   title: "الجهات الحكومية والمؤسسات",
          //   description: "إدارة الأصول المتعددة وتتبع العقود والمصاريف بدقة وشفافية عالية مع تقارير مفصلة.",
          // },
        ],
      },
      faq: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            question: "كم يستغرق تنفيذ النظام؟",
            answer: "معظم المشاريع تنفذ خلال 2-6 أسابيع حسب حجم وتعقود العمليات والعقارات.",
          },
          {
            question: "هل يمكن الربط مع أنظمة أخرى؟",
            answer: "نعم، النظام يدعم التكامل مع معظم الأنظمة المحاسبية والبرمجيات الأخرى المستخدمة.",
          },
          {
            question: "ما هي تكلفة النظام؟",
            answer: "التكلفة تعتمد على عدد الوحدات والمستخدمين والوظائف المطلوبة. نقدم عروضاً مخصصة تناسب احتياجاتك.",
          },
          {
            question: "هل يدعم النظام اللغة العربية؟",
            answer: "نعم، النظام يدعم اللغة العربية بشكل كامل مع واجهة مستخدم مترجمة بالكامل وتقارير عربية.",
          },
          {
            question: "هل يوجد تدريب على النظام؟",
            answer: "نعم، نقدم حزمة تدريب كاملة مع دعم فني مستمر لضمان الاستفادة القصوى من النظام.",
          },
        ],
      },
      finalCta: {
        title: "جاهز لتحويل إدارة عقاراتك؟",
        subtitle: "استخدم قوة نظام إدارة الأملاك المتكامل لإدارة جميع جوانب عقاراتك من منصة واحدة. تخلَّص من التعقيدات وابدأ رحلة النمو والكفاءة.",
        cta: "ابدأ الآن",
        whatsapp: "تواصل معنا",
      },
    },
    en: {
      hero: {
        title: "Integrated Property Management System",
        subtitle: "Managing your properties has never been easier with our integrated system. Monitor leases, invoices, maintenance, and financial reports from one platform.",
        cta: "Download Profile",
        book: "Book Appointment",
      },
      whatIsSystem: {
        title: "What is Property Management System?",
        description: "It is an integrated software module specifically designed for property owners, real estate brokerage companies, and developers. It enables you to manage all aspects of properties in one place with automation of key processes.",
      },
      features: {
        title: "🌟 Key System Features",
        items: [
          {
            icon: "🏢",
            title: "Property & Contract Management",
            description: "Register all units (apartments - villas - offices - shops) with complete details. Manage rental contracts with automatic renewal alerts.",
          },
          {
            icon: "💰",
            title: "Billing & Payment Management",
            description: "Create automatic monthly or annual invoices based on contract terms. Track payment status with direct accounting integration.",
          },
          {
            icon: "🔧",
            title: "Maintenance & Services Management",
            description: "Easily record maintenance requests from tenants. Schedule periodic maintenance work and track costs.",
          },
          {
            icon: "📊",
            title: "Interactive Reports & Dashboards",
            description: "Detailed financial reports on revenues and due rents. Analyze occupancy rates with visual dashboards.",
          },
          {
            icon: "🔗",
            title: "Integration with Other Modules",
            description: "Full integration with accounting, CRM, and project management to enhance relationships.",
          },
          {
            icon: "📱",
            title: "Responsive User Interface",
            description: "Responsive design that works efficiently on all devices from computers to smartphones.",
          },
        ],
      },
      benefits: {
        title: "💡 Practical Benefits",
        items: [
          {
            icon: "⚙️",
            title: "Time & Effort Reduction",
            description: "Save up to 70% of time spent on manual property and tenant tracking.",
          },
          {
            icon: "🤝",
            title: "Greater Transparency",
            description: "Ensure complete transparency between owner and tenant with accurate reports.",
          },
          {
            icon: "🚀",
            title: "Increased Efficiency",
            description: "Increase operational efficiency by 60% and minimize human errors.",
          },
          // {
          //   icon: "📈",
          //   title: "Better Decision Making",
          //   description: "Make strategic decisions supported by accurate data and instant reports.",
          // },
        ],
      },
      audience: {
        title: "🎯 Who is this system for?",
        items: [
          {
            icon: "🏗️",
            title: "Real Estate Development Companies",
            description: "Manage projects and residential units with easy tracking of financial and operational performance.",
          },
          {
            icon: "🏢",
            title: "Real Estate Brokerage & Marketing Companies",
            description: "Improve customer experience and manage contracts and commissions within a unified system.",
          },
          {
            icon: "🏠",
            title: "Individual Property Owners",
            description: "For those who own multiple units and want professional management of rentals and payments.",
          },
          // {
          //   icon: "🏛️",
          //   title: "Government Entities & Institutions",
          //   description: "Manage multiple assets and track contracts and expenses with high accuracy and transparency.",
          // },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "How long does implementation take?",
            answer: "Most projects are implemented within 2-6 weeks depending on the size and complexity.",
          },
          {
            question: "Can it integrate with other systems?",
            answer: "Yes, the system supports integration with most accounting systems and other software.",
          },
          {
            question: "What is the system cost?",
            answer: "Cost depends on the number of units, users, and required functions. We offer customized proposals.",
          },
          {
            question: "Does the system support Arabic?",
            answer: "Yes, the system fully supports Arabic with completely translated interface and Arabic reports.",
          },
          {
            question: "Is training provided?",
            answer: "Yes, we provide complete training package with continuous technical support.",
          },
        ],
      },
      finalCta: {
        title: "Ready to transform your property management?",
        subtitle: "Use the power of our integrated property management system to manage all aspects of your properties from one platform.",
        cta: "Start Now",
        whatsapp: "Contact Us",
      },
    },
  };

  const t = content[lang] || content.ar;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div
      className={`${styles.container} ${
        lang === "ar" ? styles.rtl : styles.ltr
      } ${isVisible ? styles.visible : ""}`}
    >
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroAnimation}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>
              {lang === "ar" ? "Next Future Real Estate" : "Next Future Real Estate"}
            </div>
            <h1 className={styles.heroTitle}>{t.hero.title}</h1>
            <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>70%</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "توفير في الوقت" : "Time Savings"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>60%</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "زيادة الكفاءة" : "Efficiency Increase"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "متابعة مستمرة" : "Continuous Monitoring"}
                </span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <button
                className={`${styles.primaryButton} ${styles.pulseAnimation}`}
                onClick={handleDownload}
              >
                <span className={styles.buttonIcon}>📥</span>
                {t.hero.cta}
              </button>
              <button 
                className={styles.secondaryButton}
                onClick={handleBookAppointment}
              >
                <span className={styles.buttonIcon}>📅</span>
                {t.hero.book}
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.imageContainer}>
              <Image
                src="/technology.jpg"
                alt="Property Management System"
                width={600}
                height={400}
                className={styles.propertyImage}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      {/* What is System Section */}
      <section className={styles.section}>
        <div className={styles.contentGrid}>
          <div className={styles.contentText}>
            <h2 className={`${styles.contentTitle} ${styles.fadeIn}`}>
              {t.whatIsSystem.title}
            </h2>
            <p className={`${styles.contentDescription} ${styles.fadeIn}`}>
              {t.whatIsSystem.description}
            </p>
            <div className={styles.contentActions}>
              <button
                className={`${styles.primaryButton} ${styles.pulseAnimation}`}
                onClick={handleDownload}
              >
                <span className={styles.buttonIcon}>📋</span>
                {lang === "ar"
                  ? "بروفايل إدارة الأملاك والعقارات"
                  : "Property Management Profile"}
              </button>
            </div>
          </div>
          <div className={styles.contentVisual}>
            <div className={styles.visualCard}>
              <Image
                src="/managment.jpg"
                alt="Property Management Dashboard"
                width={500}
                height={350}
                className={styles.featureImage}
              />
              <div className={styles.visualBadge}>
                {lang === "ar" ? "نظام متكامل" : "Integrated System"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.features.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "اكتشف المميزات التي تجعل نظامنا الخيار الأمثل لإدارة أملاكك"
              : "Discover the features that make our system the ideal choice for managing your properties"}
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <div className={styles.featureHover}></div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.benefits.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "تعرف على الفوائد التي ستحققها لنشاطك العقاري"
              : "Discover the benefits your real estate business will achieve"}
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {t.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className={`${styles.benefitCard} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.benefitIcon}>{benefit.icon}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.audience.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "نظام مصمم خصيصًا لمختلف أنواع العملاء في القطاع العقاري"
              : "A system specifically designed for various types of clients in the real estate sector"}
          </p>
        </div>
        <div className={styles.audienceGrid}>
          {t.audience.items.map((audience, index) => (
            <div
              key={index}
              className={`${styles.audienceCard} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.audienceIcon}>{audience.icon}</div>
              <h3 className={styles.audienceTitle}>{audience.title}</h3>
              <p className={styles.audienceDescription}>
                {audience.description}
              </p>
              <div className={styles.audienceHover}></div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            {lang === "ar" ? "الدعم والمساعدة" : "Support & Help"}
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.faq.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {lang === "ar"
              ? "إجابات على أسئلتك الأكثر شيوعاً"
              : "Answers to your most common questions"}
          </p>
        </div>
        <div className={styles.faqGrid}>
          {t.faq.questions.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${styles.slideInUp} ${
                activeFaq === index ? styles.active : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span className={styles.faqNumber}>0{index + 1}</span>
                <span className={styles.faqText}>{item.question}</span>
                <span className={styles.faqIcon}>
                  {activeFaq === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  activeFaq === index ? styles.show : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCTA} id="contact-section">
        <div className={styles.ctaBackground}>
          <div className={styles.ctaAnimation}></div>
        </div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaBadge}>
            {lang === "ar"
              ? "نحن هنا لمساعدتك.. كل ما يتطلبه الأمر خطوة"
              : "We are here to help you.. All it takes is one step"}
          </div>
          <h2 className={`${styles.ctaTitle} ${styles.fadeIn}`}>
            {t.finalCta.title}
          </h2>
          <p className={`${styles.ctaSubtitle} ${styles.fadeIn}`}>
            {t.finalCta.subtitle}
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <span>
                {lang === "ar" ? "تنفيذ سريع" : "Quick Implementation"}
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🛠️</div>
              <span>
                {lang === "ar" ? "دعم فني متكامل" : "Full Technical Support"}
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📊</div>
              <span>
                {lang === "ar" ? "تقارير متقدمة" : "Advanced Analytics"}
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔒</div>
              <span>
                {lang === "ar" ? "أمان وحماية" : "Security & Protection"}
              </span>
            </div>
          </div>

          <div className={styles.ctaActions}>
            <button 
              className={`${styles.ctaPrimary} ${styles.pulseAnimation}`}
              onClick={handleStartNow}
            >
              <span className={styles.buttonIcon}>🚀</span>
              {t.finalCta.cta}
            </button>
            <button 
              className={styles.ctaSecondary}
              onClick={handleContactUs}
            >
              <span className={styles.buttonIcon}>💬</span>
              {t.finalCta.whatsapp}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}