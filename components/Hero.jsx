"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "700", "800"],
});

export default function HeroSection({ lang = "ar" }) {
  const [showVideo, setShowVideo] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isRTL = lang === "ar";

  useEffect(() => {
    setIsLoaded(true);
    // Only load video on desktop after initial render
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    if (mediaQuery.matches) {
      // Delay video loading to improve LCP
      const timer = setTimeout(() => setShowVideo(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

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
    <section
      className={`hero ${cairo.className}`}
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#001233",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background video - only on desktop, delayed load */}
      {showVideo && (
        <video
          src="/coding.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          <track
            kind="captions"
            srcLang={lang}
            label={lang === "ar" ? "العربية" : "English"}
          />
        </video>
      )}

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(11, 36, 71, 0.85) 0%, rgba(11, 100, 150, 0.75) 40%, rgba(8, 80, 130, 0.7) 70%, rgba(0, 60, 110, 0.65) 100%)",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          maxWidth: "1000px",
          width: "100%",
          padding: "0 30px",
          textAlign: "center",
          color: "white",
          zIndex: 3,
        }}
      >
        {/* Heading - first line */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            color: "white",
            fontSize: "40px",
            fontWeight: 800,
            marginBottom: "40px",
            lineHeight: 1.25,
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          {currentContent.heading1}
        </motion.h1>

        {/* Line spacing after heading */}
        <div style={{ height: "30px", width: "100%" }} />

        {/* Headline - second line */}
        <motion.h5
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          style={{
            color: "white",
            fontSize: "26px",
            fontWeight: 600,
            marginBottom: "40px",
            lineHeight: 1.6,
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          {currentContent.headline1}
        </motion.h5>

        {/* Line spacing after headline */}
        <div style={{ height: "30px", width: "100%" }} />

        {/* Big text - third line (long paragraph) */}
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: 1.8,
            margin: "0 auto 55px",
            maxWidth: "850px",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
            opacity: 0.95,
          }}
        >
          {currentContent.big1}
        </motion.h6>

        {/* Line spacing before buttons */}
        <div style={{ height: "55px", width: "100%" }} />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginTop: 0,
          }}
        >
          <Link href={`/${lang}/service`}>
            <button
              style={{
                height: "60px",
                width: "300px",
                marginInlineEnd: "20px",
                padding: "0 35px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                background: "linear-gradient(135deg, #0e68dd 0%, #0a4eb9 100%)",
                border: "none",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
                letterSpacing: "0.25px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #2f88f3 0%, #1771c4 100%)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(37, 99, 235, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, #0e68dd 0%, #0a4eb9 100%)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(37, 99, 235, 0.2)";
              }}
            >
              {currentContent.primaryBtn1}
            </button>
          </Link>

          <Link href={`/${lang}/contact-us`}>
            <button
              style={{
                height: "60px",
                width: "300px",
                padding: "0 35px",
                fontSize: "18px",
                fontWeight: 700,
                color: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.16)",
                border: "2px solid rgba(255, 255, 255, 0.35)",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
                letterSpacing: "0.25px",
                backdropFilter: "blur(4px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.26)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(37, 99, 235, 0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.16)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                e.currentTarget.style.boxShadow =
                  "0 10px 20px rgba(37, 99, 235, 0.2)";
              }}
            >
              {currentContent.secondaryBtn1}
            </button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section.hero {
            padding: 100px 0;
          }

          @media (max-width: 480px) {
            section.hero {
              padding: 80px 0;
            }
          }
        }
      `}</style>
    </section>
  );
}
