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
      headline1: "حلول مبتكرة للتطوير، التصميم، والتسويق، وأنظمة إدارة العقارات والمقاولات",
      primaryBtn: "اكشف الخدمات",
      secondaryBtn: "تواصل معنا",
    },
    en: {
      heading1: "Comprehensive Digital Transformation with Next Future",
      headline1: "Innovative solutions for development, design, marketing, and real estate & contracting management systems",
      primaryBtn: "Discover Services",
      secondaryBtn: "Contact Us",
    }
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
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <Link href={`/${lang}/services`} className="btn-outline">
            {currentContent.primaryBtn}
          </Link>

          <Link href={`/${lang}/contact`} className="btn-primary">
            {currentContent.secondaryBtn}
          </Link>
        </motion.div>
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

        /* Background Image */
        .hero-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          background-image: url('/future2.png');
          background-size: cover;
          filter: grayscale(100%) brightness(140.45%) contrast(100%);

          background-position: center;
          background-repeat: no-repeat;
        }

        /* Gradient Overlay */
        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          background: linear-gradient(180deg, #005BAC 0%, #02417A 100%);
          opacity: 0.75;
        }

        .hero-content {
          position: relative;
          z-index: 3;
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

        .btn-outline,
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          padding: 14px 36px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          text-align: center;
          letter-spacing: 0.5px;
          font-family: inherit;
        }

        .btn-outline {
          background-color: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(2px);
        }

        .btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          border-color: white;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .btn-outline:active {
          transform: translateY(-1px);
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
          color: white;
          border: none;
          box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
        }

        .btn-primary:active {
          transform: translateY(-1px);
        }

        /* RTL specific adjustments */
        [dir="rtl"] .hero-heading,
        [dir="rtl"] .hero-headline {
          letter-spacing: 0;
        }

        /* Responsive Design */
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

          .btn-outline,
          .btn-primary {
            min-width: 160px;
            padding: 12px 28px;
            font-size: 15px;
          }

          .hero-buttons {
            gap: 20px;
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

          .btn-outline,
          .btn-primary {
            min-width: 150px;
            padding: 10px 24px;
            font-size: 14px;
          }

          .hero-buttons {
            gap: 16px;
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
            gap: 14px;
          }

          .btn-outline,
          .btn-primary {
            min-width: 200px;
            width: 100%;
            max-width: 260px;
            padding: 12px 24px;
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

          .btn-outline,
          .btn-primary {
            min-width: 200px;
            padding: 16px 42px;
            font-size: 17px;
          }
        }
      `}</style>
    </section>
  );
}
