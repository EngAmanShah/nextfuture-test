"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800"],
});

export default function HeroSection({ lang = "ar" }) {
  const isRTL = lang === "ar";

  // Content matching the image exactly
  const content = {
    ar: {
      heading1: "انطلاق نحو المستقبل مع نكست فيوتشير",
      headline1: "نضعك في قلب التحول الرقمي مع حلول تقنية مبتكرة وشاملة",
      big1: "نقدم لك حلول مصممة لدعم طموحاتك وتلبية احتياجات عملك، مما يساعدك على التكيف مع التغيرات السريعة في عالم التقنية.",
      primaryBtn1: "اكتشف خدماتنا",
      secondaryBtn1: "تواصل معنا",
    },
    en: {
      heading1: "Step into the future with Next Future",
      headline1:
        "We place you at the center of digital transformation with innovative and comprehensive tech solutions.",
      big1: "We offer solutions designed to support your ambitions and fulfill your business needs, helping you adapt to rapid technological changes.",
      primaryBtn1: "Discover Our Services",
      secondaryBtn1: "Contact Us",
    },
  };

  const currentContent = content[lang] || content.ar;

  return (
    <section className={`hero ${cairo.className}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        {/* Heading - first line */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-heading"
        >
          {currentContent.heading1}
        </motion.h1>

        {/* Line spacing after heading */}
        <div className="line-spacing" />

        {/* Headline - second line */}
        <motion.h5
          className="hero-headline"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        >
          {currentContent.headline1}
        </motion.h5>

        {/* Line spacing after headline */}
        <div className="line-spacing" />

        {/* Big text - third line (long paragraph) */}
        <motion.h6
          className="hero-big"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {currentContent.big1}
        </motion.h6>

        {/* Line spacing before buttons */}
        <div className="line-spacing-large" />

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <Link href={`/${lang}/service`}>
            <button className="hero-btn-primary">
              {currentContent.primaryBtn1}
            </button>
          </Link>

          <Link href={`/${lang}/contact-us`}>
            <button className="hero-btn-outline">
              {currentContent.secondaryBtn1}
            </button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          background-image: url("/new-bg.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(11, 36, 71, 0.85) 0%,
            rgba(11, 100, 150, 0.75) 40%,
            rgba(8, 80, 130, 0.7) 70%,
            rgba(0, 60, 110, 0.65) 100%
          );
        }

        .hero-content {
          position: relative;
          max-width: 1000px;
          width: 100%;
          padding: 0 30px;
          text-align: center;
          color: white;
        }

        .hero-heading {
          color: white;
          font-size: 40px;
          font-weight: 800;
          margin-bottom: 40px;
          line-height: 1.25;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .hero-headline {
          color: white;
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 40px;
          line-height: 1.6;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        .hero-big {
          color: white;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.8;
          margin: 0 auto 55px;
          max-width: 850px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
          opacity: 0.95;
        }

        .line-spacing {
          height: 30px;
          width: 100%;
        }

        .line-spacing-large {
          height: 55px;
          width: 100%;
        }

        .hero-buttons {
          display: flex;
          gap: 40px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 0px;
        }

        .hero-btn-primary {
          height: 60px;
          width: 300px !important;
          margin-inline-end: 20px;
          padding: 0 35px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          background: linear-gradient(135deg, #0e68dd 0%, #0a4eb9 100%);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
          letter-spacing: 0.25px;
        }

        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #2f88f3 0%, #1771c4 100%);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
        }

        .hero-btn-outline {
          height: 60px;
          width: 300px !important;
          padding: 0 35px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          background-color: rgba(255, 255, 255, 0.16);
          border: 2px solid rgba(255, 255, 255, 0.35);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
          letter-spacing: 0.25px;
          backdrop-filter: blur(4px);
        }

        .hero-btn-outline:hover {
          background-color: rgba(255, 255, 255, 0.26);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.28);
        }

        @media (max-width: 768px) {
          .hero {
            background-attachment: scroll;
            padding: 100px 0;
          }

          .hero-heading {
            font-size: 34px;
            margin-bottom: 34px;
            line-height: 1.3;
          }

          .hero-headline {
            font-size: 22px;
            margin-bottom: 34px;
            line-height: 1.6;
          }

          .hero-big {
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 44px;
          }

          .line-spacing {
            height: 28px;
          }

          .line-spacing-large {
            height: 50px;
          }

          .hero-buttons {
            gap: 15px;
            flex-direction: column;
            width: 100%;
            margin-top: 55px;
          }

          .hero-btn-primary,
          .hero-btn-outline {
            height: 55px;
            min-width: 200px;
            font-size: 16px;
            padding: 0 30px;
            width: 100%;
            margin-top: 24px;
          }

          .hero-btn-primary {
            margin-inline-end: 0;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 26px;
            margin-bottom: 28px;
            line-height: 1.3;
          }

          .hero-headline {
            font-size: 18px;
            margin-bottom: 28px;
            line-height: 1.6;
          }

          .hero-big {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 40px;
          }

          .line-spacing {
            height: 22px;
          }

          .line-spacing-large {
            height: 40px;
          }

          .hero-buttons {
            gap: 15px;
            flex-direction: column;
            width: 100%;
          }

          .hero-btn-primary,
          .hero-btn-outline {
            height: 50px;
            min-width: 200px;
            font-size: 15px;
            letter-spacing: 1.5px;
            padding: 0 25px;
            width: 100%;
          }

          .hero-btn-primary {
            margin-inline-end: 0;
          }
        }
      `}</style>
    </section>
  );
}
