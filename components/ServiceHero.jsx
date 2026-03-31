"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700", "800"],
});

export default function ServiceHero({ lang = "ar" }) {
  const isRTL = lang === "ar";

  const content = {
    ar: {
      heading1: "تحول رقمي شامل مع نكست فيوتشر",
      headline1:
        "حلول مبتكرة للتطوير، التصميم، والتسويق، وأنظمة إدارة العقارات والمقاولات",
      primaryBtn1: "اكشف الخدمات",
      secondaryBtn1: "تواصل معنا",
    },
    en: {
      heading1: "Comprehensive Digital Transformation with Next Future",
      headline1:
        "Innovative solutions for development, design, marketing, and real estate & contracting management systems",
      primaryBtn1: "Discover Services",
      secondaryBtn1: "Contact Us",
    },
  };

  const currentContent = content[lang] || content.ar;

  return (
    <section className={`hero ${cairo.className}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Background Image */}
      <div className="hero-bg-image" />

      {/* Gradient Overlay */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="hero-content">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-heading"
        >
          {currentContent.heading1}
        </motion.h1>

        {/* Subtitle / Headline */}
        <motion.p
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          {currentContent.headline1}
        </motion.p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href={`/${lang}/service`} className="hero-btn-outline1">
            {currentContent.primaryBtn1}
          </a>

          <a href={`/${lang}/contact-us`} className="hero-btn-primary1">
            {currentContent.secondaryBtn1}
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("/future2.png");
          background-size: cover;
          filter: grayscale(100%) brightness(140.45%) contrast(100%);
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, #005bac 0%, #02417a 100%);
          opacity: 0.75;
        }

        .hero-content {
          position: relative;
          max-width: 1100px;
          width: 100%;
          padding: 0 32px;
          text-align: center;
          color: white;
        }

        .hero-heading {
          color: white;
          font-size: 48px;
          font-weight: 800;
          margin: 0 0 24px 0;
          line-height: 1.3;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.3px;
        }

        .hero-headline {
          color: rgba(255, 255, 255, 0.95);
          font-size: 22px;
          font-weight: 500;
          margin: 0 0 48px 0;
          line-height: 1.6;
          max-width: 850px;
          margin-left: auto;
          margin-right: auto;
          text-shadow: 0 1px 12px rgba(0, 0, 0, 0.2);
        }

        .hero-buttons {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }

        .hero-btn-outline1,
        .hero-btn-primary1 {
          display: inline-block;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          line-height: 1;
          transition: all 0.3s ease;
        }

        .hero-btn-outline1 {
          background-color: #005BAC;
          border: 2px solid #005BAC;
        }

        .hero-btn-outline1:hover {
         background-color: #0866b9;
          border: 2px solid #005BAC;
        }

        .hero-btn-primary1 {
        background-color: #005BAC;
          border: 2px solid #005BAC;
        }

        .hero-btn-primary1:hover {
        background-color: #0866b9;
          border: 2px solid #005BAC;
        }

        [dir="rtl"] .hero-heading,
        [dir="rtl"] .hero-headline {
          letter-spacing: 0;
        }

        @media (max-width: 1024px) {
          .hero-heading {
            font-size: 42px;
          }

          .hero-headline {
            font-size: 20px;
            margin-bottom: 44px;
          }
        }

        @media (max-width: 768px) {
          .hero {
            min-height: 90vh;
          }

          .hero-heading {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .hero-headline {
            font-size: 18px;
            margin-bottom: 40px;
            padding: 0 10px;
          }

          .hero-btn-outline1,
          .hero-btn-primary1 {
            padding: 12px 24px;
            font-size: 15px;
          }
        }

        @media (max-width: 640px) {
          .hero-content {
            padding: 0 24px;
          }

          .hero-heading {
            font-size: 28px;
            margin-bottom: 18px;
          }

          .hero-headline {
            font-size: 16px;
            margin-bottom: 36px;
            line-height: 1.5;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 24px;
            margin-bottom: 16px;
          }

          .hero-headline {
            font-size: 15px;
            margin-bottom: 32px;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 16px;
          }

          .hero-btn-outline1,
          .hero-btn-primary1 {
            width: 100%;
            text-align: center;
            padding: 13px 24px;
          }
        }

        @media (min-width: 1400px) {
          .hero-heading {
            font-size: 58px;
            margin-bottom: 28px;
          }

          .hero-headline {
            font-size: 24px;
            margin-bottom: 56px;
            max-width: 950px;
          }

          .hero-btn-outline1,
          .hero-btn-primary1 {
            padding: 16px 40px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
}