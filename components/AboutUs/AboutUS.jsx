"use client";

import React, { use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./aboutus.module.css";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Testimonials from "@/components/Testimonials";

export default function AboutUs({ params }) {
  const resolvedParams = use(params);
  const currentLang = resolvedParams?.lang || "en";
  const router = useRouter();

  const content = {
    en: {
      heroTitle: "Launch Into the Future with Next Future",
      heroSubtitle:
        "We place you at the heart of digital transformation with innovative and comprehensive technology solutions.",
      ctaBtn: "Get In Touch",
      storyHeading: "About Next Future Technology",
      storySubtitle:
        "Empowering businesses through innovation, technology, and strategy.",
      history:
        "We believe the future of business lies at the intersection of technology and creativity. From startups to enterprises, Next Future helps brands redefine how they connect, grow, and succeed in a digital-first world. Next Future turns innovative ideas into tangible results. We believe every business has the potential to excel, combining creativity, strategy, and technology to build modern websites.",
      aboutUs:
        "Next Future Information Technology is a leading company in information technology, software development, and business solutions in marketing, accounting, and management. The company boasts a team of experts, engineers, and developers with high expertise and efficiency in software development and information technology. We are committed to building long-term relationships with our clients through delivering high-quality services and exceptional after-sales support.",
      vision: {
        title: "Our Vision",
        description:
          "Delivering software solutions with global standards, designed to meet market needs, with focus on innovation and quality to achieve a prominent presence for our partners.",
      },
      mission: {
        title: "Our Mission",
        description:
          "Activating innovation in the digital solutions industry, enhancing profitability, increasing effectiveness, and elevating the overall quality of our partners' operations to achieve their goals.",
      },
      goal: {
        title: "Our Goal",
        description:
          "Our goal aligns with Saudi Vision 2030, aspiring for our nation to become a globally successful model in the field of technology, innovation, and sustainable development.",
      },
      valuesTitle: "Our Values & Principles",
    },
    ar: {
      heroTitle: "انطلق نحو المستقبل مع نكست فيوتشر",
      heroSubtitle:
        "نضعك في قلب التحول الرقمي مع حلول تقنية مبتكرة وشاملة",
      ctaBtn: "تواصل معنا",
      storyHeading: "عن نيكست فيوتشر للتقنية",
      storySubtitle:
        "تمكين الشركات من خلال الابتكار والتكنولوجيا والاستراتيجية",
      history:
        "يؤمن أن مستقبل الأعمال يكمن في تقاطع التقنية مع الإبداع من الشركات الناشئة إلى المؤسسات الكبيرة، تساعد نيكست فيوتشر العلامات التجارية على إعادة تعريف كيفية التواصل والنمو والنجاح في عالم رقمي أولا تحول نيكست فيوتشر الأفكار المبتكرة إلى نتائج ملموسة، نحن نؤمن بأن لكل شركة القدرة. على التفوق، ولهذا تمزج بين الإبداع والاستراتيجية والتقنية لبناء مواقع حديثة.",
      aboutUs:
        "نيكست فيوتشر لتقنية المعلومات هي شركة رائدة في مجال تقنية المعلومات وتطوير البرمجيات وحلول الأعمال التسويقية والمحاسبية والإدارية، وتتميز الشركة بفريق عمل مكون من مجموعة من الخبراء والمهندسين والمطورين ذوي خبرة وكفاءة عالية في مجال تطوير البرمجيات وتكنولوجيا المعلومات. نحرص على بناء علاقات طويلة المدى مع عملائنا من خلال تقديم خدمات عالية الجودة وخدمات ما بعد البيع المتميزة.",
      vision: {
        title: "رؤيتنا",
        description:
          "تقديم حلول برمجية بمقاييس عالمية مصممة لتلبية احتياجات السوق، مع التركيز على الابتكار والجودة تسعى لتحقيق تواجد مميز لشركائنا.",
      },
      mission: {
        title: "رسالتنا",
        description:
          "تفعيل الابتكار في صناعة الحلول الرقمية، وتعزيز الربحية وزيادة الفاعلية والارتقاء بالجودة الشاملة في أعمال شركائنا لتحقيق أهدافهم.",
      },
      goal: {
        title: "هدفنا",
        description:
          "هدفنا الالتزام برؤية المملكة 2030 بأن تكون بلادنا نموذجاً عالمياً ناجحاً في مجال التكنولوجيا والابتكار للتحقيق التنمية المستدامة والازدهار.",
      },
      valuesTitle: "قيمنا ومبادئنا",
    },
  };

  const t = content[currentLang];
  const isRtl = currentLang === "ar";

  const values = [
    {
      image: "/services/vison.png",
      fallback: "👁️",
      title: t.vision.title,
      description: t.vision.description,
    },
    {
      image: "/services/message.png",
      fallback: "🎯",
      title: t.mission.title,
      description: t.mission.description,
    },
    {
      image: "/services/misson.png",
      fallback: "🚩",
      title: t.goal.title,
      description: t.goal.description,
    },
  ];

  return (
    <div className={styles.container} dir={isRtl ? "rtl" : "ltr"}>

      {/* ── HERO ── */}
      <section className={styles.heroSection}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h4 className={styles.heroTitle}>{t.heroTitle}</h4>
          <p className={styles.heroSubtitle}>{t.heroSubtitle}</p>
          <button
            className={styles.ctaButton}
            onClick={() => router.push(`/${currentLang}/contact-us`)}
          >
            {t.ctaBtn}
          </button>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className={styles.storySection}>
        <div className={styles.sectionContainer}>
          <div className={styles.storyContent}>
            {/* Text side */}
            <div className={styles.storyText}>
              <h2 className={styles.storyHeading}>{t.storyHeading}</h2>
              <div className={styles.titleUnderlineRight}></div>
              <p className={styles.storySubtitle}>{t.storySubtitle}</p>
              <p className={styles.storyParagraph}>{t.history}</p>
              <p className={styles.storyParagraph}>{t.aboutUs}</p>
            </div>
            {/* Image side */}
            <div className={styles.storyImageWrap}>
              <Image
                src="/side-img.jpg"
                alt="Next Future"
                width={520}
                height={420}
                className={styles.storyImg}
                priority
              />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <div className={styles.valueTop}></div>
                <div className={styles.valueImageContainer}>
                  <img
                    src={v.image}
                    alt={v.title}
                    className={styles.valueImage}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className={styles.valueFallbackIcon} style={{ display: "none" }}>
                    {v.fallback}
                  </div>
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDescription}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES + TESTIMONIALS ── */}
      <ServicesSection params={{ lang: currentLang }} />
      <Testimonials lang={currentLang} />
    </div>
  );
}