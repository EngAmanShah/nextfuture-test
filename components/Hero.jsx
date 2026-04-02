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
      heading1: "انطلاق نحو المستقبل مع نيكست  فيوتشير",
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
      style={styles.hero}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        // poster="/side-img.png"
        aria-hidden="true"
        style={styles.heroVideo}
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div style={styles.heroBackdrop} aria-hidden="true" />

      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>
          {currentContent.heading1}
        </h1>

        <p style={styles.heroHeadline}>
          {currentContent.headline1}
        </p>

        <p style={styles.heroDescription}>
          {currentContent.big1}
        </p>

        <div style={styles.heroActions}>
          <Link href={`/${lang}/service`}>
            <button style={styles.heroButtonPrimary}>
              {currentContent.primaryBtn1}
            </button>
          </Link>

          <Link href={`/${lang}/contact-us`}>
            <button style={styles.heroButtonSecondary}>
              {currentContent.secondaryBtn1}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#001233",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  heroVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
  },
  heroBackdrop: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(11, 36, 71, 0.85) 0%, rgba(11, 100, 150, 0.75) 40%, rgba(8, 80, 130, 0.72) 70%, rgba(0, 60, 110, 0.78) 100%)",
    zIndex: 1,
    pointerEvents: "none",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1000px",
    width: "100%",
    padding: "140px 30px 80px",
    textAlign: "center",
    color: "white",
  },
  heroTitle: {
    margin: "0 0 28px",
    fontSize: "clamp(2.4rem, 4vw, 4.2rem)",
    fontWeight: 800,
    lineHeight: 1.2,
    textShadow: "0 2px 10px rgba(0, 0, 0, 0.35)",
  },
  heroHeadline: {
    margin: "0 0 26px",
    fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
    fontWeight: 600,
    lineHeight: 1.6,
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
  },
  heroDescription: {
    margin: "0 auto 48px",
    maxWidth: "850px",
    fontSize: "clamp(1rem, 1.7vw, 1.35rem)",
    fontWeight: 600,
    lineHeight: 1.9,
    opacity: 0.95,
    textShadow: "0 2px 8px rgba(0, 0, 0, 0.35)",
  },
  heroActions: {
    display: "flex",
    gap: "24px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  heroButtonPrimary: {
    minHeight: "60px",
    minWidth: "280px",
    padding: "0 35px",
    fontSize: "18px",
    fontWeight: 700,
    color: "#ffffff",
    background: "linear-gradient(135deg, #0e68dd 0%, #0a4eb9 100%)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
    letterSpacing: "0.25px",
  },
  heroButtonSecondary: {
    minHeight: "60px",
    minWidth: "280px",
    padding: "0 35px",
    fontSize: "18px",
    fontWeight: 700,
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
    border: "2px solid rgba(255, 255, 255, 0.35)",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)",
    letterSpacing: "0.25px",
    backdropFilter: "blur(4px)",
  },
};
