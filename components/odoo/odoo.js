"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./odoo.module.css";
import Image from "next/image";

export default function OdooMainPage({ resolvedParams }) {
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
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1L4LBpcWwPekj2T3k1cGgjOqU4iQrD_1m",
      "_blank"
    );
  };

  const handleBookAppointment = () => {
    // You can integrate with your booking system here
    window.open(
      lang === "ar"
        ? "https://wa.me/966539983393?text=مرحبا، أريد حجز موعد للاستشارة حول Odoo"
        : "https://wa.me/966539983393?text=Hello, I would like to book an appointment for Odoo consultation",
      "_blank"
    );
  };

  const handleContactUs = () => {
    window.open(
      lang === "ar"
        ? "https://wa.me/966539983393?text=مرحبا، أريد الاستفسار عن خدمات Odoo"
        : "https://wa.me/966539983393?text=Hello, I would like to inquire about Odoo services",
      "_blank"
    );
  };

  const handleStartNow = () => {
    // Scroll to contact form or open modal
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    ar: {
      hero: {
        title: "Odoo الحل المتكامل لإدارة أعمالك بفعالية وجودة عالية",
        subtitle:
          "اكتشف كيف يقدّم Odoo نظام ERP مفتوح المصدر شامل لإدارة المبيعات، المحاسبة، المخزون، التسويق، والموارد البشرية. تعرف على مميزاته وفوائده وكيفية استخدامه لتطوير أعمالك بكل سهولة وتوافق مع رؤية المملكة 2030.",
        cta: "تحميل الملف التعريفي",
        book: "احجز موعدًا",
      },
      whatIsOdoo: {
        title: "ما هو Odoo ؟",
        description:
          "هو برنامج لإدارة الأعمال طور في بلجيكا، وهو نظام ERP لتخطيط موارد المؤسسات متكامل ومفتوح المصدر يُستخدم لإدارة جميع عمليات الشركة من مكان واحد. يساعد Odoo في ربط وتنظيم الأقسام المختلفة داخل المؤسسة مثل: المبيعات، المحاسبة، إدارة المخزون، الموارد البشرية، التسويق، التجارة الإلكترونية، الفوترة، التصنيع، إدارة المشاريع.",
        features: [
          "التنسيق بين الأقسام المختلفة بسلاسة عالية",
          "يقلل التكرار ويحسن الدقة",
          "قرارات أسرع وأكثر ذكاءً للمؤسسات",
          "قابل للتخصيص بسهولة وفقًا للاحتياجات",
          "يدعم اللغات المتعددة بما فيها العربية",
        ],
      },
      howItWorks: {
        title: "كيف يعمل نظام Odoo ؟",
        description:
          "يعتمد نظام Odoo على مفهوم البرمجيات النمطية (Modular Software)، مما يعني أنك تستطيع تفعيل فقط التطبيقات التي تناسب نشاطك التجاري دون الحاجة لنظام شامل ثقيل.",
        examples: [
          "متجر إلكتروني: المبيعات، المخزون، الكاشير، الفواتير",
          "مصنع أو منشأة صناعية: التصنيع، المخزون، المشتريات، الموارد البشرية",
        ],
        benefits: [
          "تقليل التكلفة التشغيلية ورفع الأداء",
          "دمج التطبيقات ضمن بيئة واحدة",
          "تناسق البيانات وتناغم العمليات",
          "مناسب لجميع الشركات من الناشئة حتى الكبرى",
        ],
      },
      features: {
        title: "ما هي مميزات برنامج Odoo",
        items: [
          {
            icon: "🎯",
            title: "واجهة استخدام عصرية وسهلة",
            description:
              "بفضل تصميمه البسيط والواضح، يمكن للمستخدمين تعلم النظام بسرعة، مما يقلل الحاجة للتدريب المكثف.",
          },
          {
            icon: "🔗",
            title: "تكامل كامل بين الأقسام",
            description:
              "جميع البيانات والمعلومات متصلة مباشرة، من المبيعات إلى المحاسبة إلى المخزون، مما يتيح رؤية شاملة وآنية.",
          },
          {
            icon: "⚙️",
            title: "قابل للتخصيص بشكل كبير",
            description:
              "بفضل بنيته المفتوحة المصدر، يمكن تعديل الوحدات أو إنشاء وحدات جديدة بسهولة لتتناسب مع احتياجات الأعمال الفريدة.",
          },
          {
            icon: "📱",
            title: "دعم كامل للجوال",
            description:
              "واجهة متجاوبة تعمل بشكل مثالي على جميع الأجهزة من الحواسيب إلى الهواتف الذكية.",
          },
          {
            icon: "🚀",
            title: "تنفيذ سريع وفعال",
            description:
              "نظام سهل التنفيذ يمكنك البدء في استخدامه خلال فترة زمنية قصيرة.",
          },
          {
            icon: "💰",
            title: "توفير في التكاليف",
            description:
              "بديل اقتصادي وفعال لأنظمة الـ ERP التقليدية باهظة الثمن.",
          },
        ],
      },
      benefits: {
        title: "أبرز فوائد Odoo ؟",
        items: [
          {
            title: "تحسين الإنتاجية",
            description:
              "بتوحيد العمليات ضمن نظام واحد، يتم تسريع تنفيذ المهام وتقليل الأخطاء البشرية.",
          },
          {
            title: "رفع جودة المنتجات",
            description:
              "لأن المعلومات محدثة لحظيًا بين الأقسام، يمكن التحكم بالجودة بشكل أفضل من المخزون حتى التسليم.",
          },
          {
            title: "تعزيز التنافسية",
            description:
              "الشركات التي تعتمد على أتمتة متقدمة مثل Odoo تتميز بخدمة أسرع وقرارات أكثر ذكاءً ما يجعلها تتفوق في السوق.",
          },
          {
            title: "تكامل العمليات",
            description:
              "من المبيعات وحتى الإدارة المالية وإدارة الموارد البشرية، كل جزء من النظام يعمل بتناغم تام.",
          },
          {
            title: "تعزيز رضا العملاء",
            description:
              "تقديم خدمة أسرع، دقة أعلى في الفواتير والتسليم، مما يزيد من مستوى الثقة والولاء.",
          },
          {
            title: "التوافق مع رؤية المملكة 2030",
            description:
              "يشجع النظام الرقمنة وزيادة كفاءة المؤسسات، مما يدعم التوجه الوطني نحو التحول الرقمي.",
          },
        ],
      },
      companies: {
        title: "ما هي الشركات التي تستخدم Odoo ؟",
        description:
          "الكثير من المؤسسات والشركات في مختلف القطاعات تعتمد Odoo كنظام إدارة مركزي. تشمل هذه القطاعات: التجزئة، الصناعات التحويلية، الخدمات اللوجستية، التجارة الإلكترونية، التعليم، والرعاية الصحية.",
        logos: ["شركة 1", "شركة 2", "شركة 3", "شركة 4", "شركة 5", "شركة 6"],
      },
      training: {
        title: "ما هي دورة Odoo ؟",
        description:
          "خدمة تدريب Odoo الوظيفي تعتبر عنصرًا أساسيًا لتحقيق أقصى استفادة من النظام. فالتدريب المهني المصمم بحرفية يساعد المستخدمين على فهم المميزات المتقدمة واستخدامها بفعالية.",
        benefits: [
          "التحول من مستخدم مبتدئ إلى محترف في النظام",
          "معرفة دقيقة بكل وحدة وظيفية",
          "تقليل الوقت المستغرق في التعلم",
          "شرح عملي لجميع الوظائف",
          "سيناريوهات استخدام حقيقية",
        ],
      },
      pricing: {
        title: "كم سعر برنامج Odoo ؟",
        description:
          "تعتمد أسعار Odoo على حجم الاستخدام وعدد المستخدمين والوحدات المطلوبة، إذ يقدم النظام خيارًا مجانيًا للوحدات الأساسية والمستخدمين الأفراد، بينما تكون الوحدات المتقدمة مدفوعة حسب الاشتراك الشهري أو السنوي.",
      },
      erpVsOdoo: {
        title: "ما الفرق بين ERP و Odoo ؟",
        description:
          "يُعد ERP (Enterprise Resource Planning) نوعًا عامًا من الأنظمة البرمجية يهدف إلى دمج جميع عمليات الشركة ضمن قاعدة بيانات موحدة ونظام واحد. أما Odoo فهو أحد أنظمة ERP، لكن أبرز ما يميزه أنه مفتوح المصدر، ويوفر مجموعة متكاملة من التطبيقات التي يمكن تفعيلها أو تعطيلها حسب الحاجة.",
      },
      odooVsSap: {
        title: "ما هو الفرق بين Odoo و SAP ؟",
        differences: [
          "التخصيص: SAP يُتيح تخصيصًا معمقًا جدًا للشركات الكبرى، بينما يوفر Odoo تخصيصات مرنة وسهلة التنفيذ",
          "سهولة الاستخدام: Odoo يتميز بواجهة بسيطة وتجربة مستخدم مرنة، بينما SAP غالبًا ما يتطلب تدريبًا مكثفًا",
        ],
      },
      faq: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            question: "سعر برنامج أودو المحاسبي؟",
            answer:
              "أسعار Odoo تختلف حسب الوحدات المطلوبة وعدد المستخدمين. يمكنك التواصل معنا للحصول على عرض سعر مخصص.",
          },
          {
            question: "كم سعر برنامج Odoo؟",
            answer:
              "يقدم Odoo خيارات مجانية ومدفوعة. الأسعار تعتمد على احتياجاتك الخاصة ويمكن أن تبدأ من بضع مئات إلى آلاف الريالات سنويًا.",
          },
          {
            question: "ما هي لغة برمجة Odoo؟",
            answer:
              "Odoo مبرمج بلغة Python مع واجهة مستخدم باستخدام JavaScript وQWeb.",
          },
          {
            question: "هل يدعم Odoo اللغة العربية؟",
            answer:
              "نعم، Odoo يدعم اللغة العربية بشكل كامل مع واجهة مستخدم مترجمة بالكامل.",
          },
          {
            question: "كم تستغرق عملية التنفيذ؟",
            answer:
              "تعتمد مدة التنفيذ على حجم وتعقيد عملك، ولكن معظم المشاريع تنفذ خلال 2-8 أسابيع.",
          },
        ],
      },
      finalCta: {
        title: "جاهز لتحوّل أعمالك؟",
        subtitle:
          "استخدم قوة Odoo لإدارة جميع جوانب عملك من مكان واحد. من المحاسبة إلى إدارة المخزون والمبيعات. قل وداعًا للأنظمة المتفرقة وابدأ العمل بكفاءة وذكاء.",
        cta: "ابدأ الآن",
        whatsapp: "تواصل معنا",
      },
    },
    en: {
      hero: {
        title: "Odoo - Complete Business Management Solution",
        subtitle:
          "Discover how Odoo provides comprehensive open-source ERP system for sales, accounting, inventory, marketing, and HR management. Learn about its features, benefits, and how to use it to develop your business easily.",
        cta: "Download Profile",
        book: "Book Appointment",
      },
      whatIsOdoo: {
        title: "What is Odoo?",
        description:
          "Odoo is a business management software developed in Belgium. It is an integrated open-source ERP system used to manage all company operations from one place.",
        features: [
          "Coordination between different departments with high smoothness",
          "Reduces repetition and improves accuracy",
          "Faster and smarter decisions for organizations",
          "Easily customizable according to needs",
          "Supports multiple languages including Arabic",
        ],
      },
      howItWorks: {
        title: "How does Odoo work?",
        description:
          "Odoo system is based on the concept of Modular Software, which means you can activate only the applications that suit your business activity without needing a comprehensive heavy system.",
        benefits: [
          "Reduce operational costs and improve performance",
          "Integrate applications within one environment",
          "Data consistency and process harmony",
          "Suitable for all companies from startups to large enterprises",
        ],
      },
      features: {
        title: "What are the features of Odoo?",
        items: [
          {
            icon: "🎯",
            title: "Modern and easy-to-use interface",
            description:
              "Thanks to its simple and clear design, users can learn the system quickly, reducing the need for intensive training.",
          },
          {
            icon: "🔗",
            title: "Full integration between departments",
            description:
              "All data and information are directly connected, from sales to accounting to inventory, providing comprehensive real-time visibility.",
          },
          {
            icon: "⚙️",
            title: "Highly customizable",
            description:
              "Thanks to its open-source structure, modules can be easily modified or new modules created to suit unique business needs.",
          },
          {
            icon: "📱",
            title: "Full Mobile Support",
            description:
              "Responsive interface that works perfectly on all devices from computers to smartphones.",
          },
          {
            icon: "🚀",
            title: "Fast and Effective Implementation",
            description:
              "Easy-to-implement system that you can start using in a short time.",
          },
          {
            icon: "💰",
            title: "Cost Saving",
            description:
              "Economic and effective alternative to expensive traditional ERP systems.",
          },
        ],
      },
      benefits: {
        title: "Key Benefits of Odoo",
        items: [
          {
            title: "Improve Productivity",
            description:
              "By unifying operations within one system, task execution is accelerated and human errors are reduced.",
          },
          {
            title: "Improve Product Quality",
            description:
              "Because information is updated instantly between departments, quality can be better controlled from inventory to delivery.",
          },
          {
            title: "Enhance Competitiveness",
            description:
              "Companies that rely on advanced automation like Odoo stand out with faster service and smarter decisions.",
          },
          {
            title: "Process Integration",
            description:
              "From sales to financial management and human resources management, every part of the system works in perfect harmony.",
          },
          {
            title: "Enhance Customer Satisfaction",
            description:
              "Faster service, higher accuracy in invoices and delivery, which increases the level of trust and loyalty.",
          },
          {
            title: "Compatibility with Saudi Vision 2030",
            description:
              "The system encourages digitization and increases the efficiency of institutions.",
          },
        ],
      },
      companies: {
        title: "Which companies use Odoo?",
        description:
          "Many institutions and companies in various sectors rely on Odoo as a central management system.",
        logos: [
          "Company 1",
          "Company 2",
          "Company 3",
          "Company 4",
          "Company 5",
          "Company 6",
        ],
      },
      training: {
        title: "What is Odoo training?",
        description:
          "Odoo functional training service is an essential element to get the maximum benefit from the system.",
        benefits: [
          "Transform from beginner to professional in the system",
          "Accurate knowledge of each functional unit",
          "Reduce time spent learning",
          "Practical explanation of all functions",
          "Real usage scenarios",
        ],
      },
      pricing: {
        title: "How much does Odoo cost?",
        description:
          "Odoo prices depend on usage volume, number of users, and required modules.",
      },
      erpVsOdoo: {
        title: "What is the difference between ERP and Odoo?",
        description:
          "ERP is a general type of software system that aims to integrate all company operations.",
      },
      odooVsSap: {
        title: "What is the difference between Odoo and SAP?",
        differences: [
          "Customization: SAP allows very deep customization for large companies",
          "Ease of use: Odoo features a simple interface and flexible user experience",
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "Odoo accounting software price?",
            answer:
              "Odoo prices vary depending on the required modules and number of users.",
          },
          {
            question: "How much does Odoo cost?",
            answer:
              "Odoo offers free and paid options. Prices depend on your specific needs.",
          },
          {
            question: "What programming language does Odoo use?",
            answer:
              "Odoo is programmed in Python with user interface using JavaScript and QWeb.",
          },
          {
            question: "Does Odoo support Arabic language?",
            answer:
              "Yes, Odoo fully supports Arabic language with completely translated user interface.",
          },
          {
            question: "How long does implementation take?",
            answer:
              "Implementation duration depends on the size and complexity of your business, but most projects are implemented within 2-8 weeks.",
          },
        ],
      },
      finalCta: {
        title: "Ready to transform your business?",
        subtitle:
          "Use the power of Odoo to manage all aspects of your business from one place.",
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
        <div className={styles.heroContent}>
          {/* Text Content */}
          <div className={styles.heroText}>
            <div className={styles.badge}>
              {lang === "ar" ? "حلول متكاملة" : "Integrated Solutions"}
            </div>
            <h1 className={styles.heroTitle}>{t.hero.title}</h1>
            <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>

            {/* Hero Stats */}
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "توفير في الوقت" : "Time Savings"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "دقة في البيانات" : "Data Accuracy"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "متابعة مستمرة" : "Real-time Tracking"}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className={styles.heroActions}>
              <button
                className={`${styles.primaryButton} ${styles.pulseAnimation}`}
                onClick={handleDownload}
              >
                📥 {t.hero.cta}
              </button>
              <button
                className={styles.secondaryButton}
                onClick={handleBookAppointment}
              >
                📅 {t.hero.book}
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className={styles.heroVisual}>
            <div className={styles.imageContainer}>
              <Image
                src="/odoo.webp"
                alt="Odoo Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.odooImage}
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

      {/* What is Odoo Section */}
      <section className={styles.section}>
        <div className={styles.contentGrid}>
          <div className={styles.contentText}>
            <h2 className={`${styles.contentTitle} ${styles.fadeIn}`}>
              {t.whatIsOdoo.title}
            </h2>
            <p className={`${styles.contentDescription} ${styles.fadeIn}`}>
              {t.whatIsOdoo.description}
            </p>
            <ul className={styles.contentList}>
              {t.whatIsOdoo.features.map((feature, index) => (
                <li
                  key={index}
                  className={styles.fadeIn}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={styles.listIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contentVisual}>
            <div className={styles.visualCard}>
              <Image
                src="/erp.jpg"
                alt="Odoo Features"
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

      {/* How It Works Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.contentGridReverse}>
          <div className={styles.contentVisual}>
            <div className={styles.dashboardPreview}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dashboardDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.dashboardAnimation}>
                <div className={styles.chartContainer}>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                </div>
                <div className={styles.metricsGrid}>
                  <div className={styles.metric}></div>
                  <div className={styles.metric}></div>
                  <div className={styles.metric}></div>
                  <div className={styles.metric}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentText}>
            <h2 className={`${styles.contentTitle} ${styles.fadeIn}`}>
              {t.howItWorks.title}
            </h2>
            <p className={`${styles.contentDescription} ${styles.fadeIn}`}>
              {t.howItWorks.description}
            </p>
            <div className={styles.benefitsGrid}>
              {t.howItWorks.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`${styles.benefitItem} ${styles.slideInUp}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.benefitIcon}>🚀</div>
                  <div className={styles.benefitText}>{benefit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.features.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "اكتشف المميزات التي تجعل Odoo الخيار الأمثل لعملك"
              : "Discover the features that make Odoo the ideal choice for your business"}
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
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.benefits.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "تعرف على الفوائد التي ستحققها لشركتك"
              : "Discover the benefits your company will achieve"}
          </p>
        </div>
        <div className={styles.benefitsGridLarge}>
          {t.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className={`${styles.benefitCard} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.benefitNumber}>0{index + 1}</div>
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.contentGrid}>
          <div className={styles.contentText}>
            <h2 className={`${styles.contentTitle} ${styles.fadeIn}`}>
              {t.training.title}
            </h2>
            <p className={`${styles.contentDescription} ${styles.fadeIn}`}>
              {t.training.description}
            </p>
            <ul className={styles.contentList}>
              {t.training.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className={styles.fadeIn}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={styles.listIcon}>🎯</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contentVisual}>
            <div className={styles.visualCard}>
              <Image
                src="/odoo.webp"
                alt="Odoo Training"
                width={500}
                height={350}
                className={styles.featureImage}
              />
              <div className={styles.visualBadge}>
                {lang === "ar" ? "تدريب متخصص" : "Specialized Training"}
              </div>
            </div>
          </div>
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
            {lang === "ar" ? "ابدأ رحلتك" : "Start Your Journey"}
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
            <button className={styles.ctaSecondary} onClick={handleContactUs}>
              <span className={styles.buttonIcon}>💬</span>
              {t.finalCta.whatsapp}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
