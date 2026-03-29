"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";

export default function Footer({ lang = "ar" }) {
  const pathname = usePathname();
  const [currentDate, setCurrentDate] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Hide footer on admin pages only
  if (pathname?.startsWith(`/${lang}/admin`)) {
    return null;
  }

  const arabicText = {
    companyName: "نيكست فيوتشر للتقنية",
    companyNameFull: "شركة نكست فيوتشر لتقنية المعلومات",
    description:
      "في نكست فيوتشر، نرسم لك خارطة طريق نحو الابتكار، مقدمين حلول تقنية غير تقليدية تعزز رؤيتك. دعنا نكون شريكك في رحلة التحول الرقمي، حيث نحقق طموحاتك بأفكار جريئة وتقنيات رائدة. انضم إلينا لصنع مستقبل مشرق سويًا!",
    links: {
      home: "الرئيسية",
      services: "خدماتنا",
      contact: "تواصل معنا",
      about: "من نحن",
      terms: "شروط الاستخدام",
      privacy: "سياسة الخصوصية",
    },
    compliance: {
      commercialRegister: "السجل التجاري",
      taxNumber: "الرقم الضريبي",
    },
    rightsReserved: "جميع الحقوق محفوظة.",
    readText: "إقرأ",
    visionText: "VISION AL",
  };

  const englishText = {
    companyName: "Next Future Tech",
    companyNameFull: "Next Future Information Technology",
    description:
      "At Next Future, we draw you a roadmap to innovation, providing unconventional technological solutions that enhance your vision. Let us be your partner in the digital transformation journey, where we achieve your ambitions with bold ideas and pioneering technologies. Join us to create a bright future together!",
    links: {
      home: "Home",
      services: "Services",
      contact: "Contact Us",
      about: "About Us",
      terms: "Terms of Use",
      privacy: "Privacy Policy",
    },
    compliance: {
      commercialRegister: "Commercial Register",
      taxNumber: "Tax Number",
    },
    rightsReserved: "All Rights Reserved.",
    readText: "Read",
    visionText: "VISION AL",
  };

  const t = lang === "ar" ? arabicText : englishText;
  const isArabic = lang === "ar";

  return (
    <>
      <style jsx>{`
        .footer-section {
          position: relative;
          padding: 60px 0 30px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow: hidden;
          color: #ffffff;
        }

        .footer-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/future2.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .footer-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 82, 156, 0.85);
        }

        .container {
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Logo Section - Centered */
        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-bottom: 30px;
        }

        .logo-link {
          display: inline-block;
          margin-bottom: 15px;
        }

        .logo-image {
          width: 220px;
          height: auto;
        }

        /* Description */
        .description {
          font-size: 1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 30px;
          max-width: 900px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        /* Navigation Links - Centered */
        .nav-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin: 25px 0;
          padding: 15px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: rgba(255, 255, 255, 0.7);
        }

        /* Read and Vision Section - Centered */
        .middle-section {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 90px;
          margin: 20px 0;
          flex-wrap: wrap;
        }

        .compliance-left {
          flex: 1;
             display: flex;
          justify-content: flex-end;
         
        }

        .compliance-right {
          flex: 1;
       
        }

        .vision-center {
          flex: 0 0 auto;
        filter: grayscale(100%) brightness(20.45) contrast(0.85);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .read-box {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.15);
          padding: 8px 20px;
          border-radius: 40px;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .read-text {
          font-size: 1.1rem;
          color: #ffffff;
        }

        .read-number {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.25);
          padding: 3px 12px;
          border-radius: 25px;
        }

        .vision-center {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vision-logo {
          width: 70px;
          height: auto;
        }

        .compliance-item {
          font-size: 1rem;
          color: #ffffff;
        }

        /* Social Icons - Centered */
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px 0 25px 0;
        }

        .social-icon {
          color: #ffffff;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .social-icon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        /* X (Twitter) SVG */
        .x-icon svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }

        /* Copyright - Centered */
        .copyright {
          text-align: center;
          padding: 20px 0 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          margin-top: 20px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .logo-image {
            width: 180px;
          }
          
          .nav-links {
            gap: 20px;
          }
          
          .middle-section {
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            width: 160px;
          }
          
          .nav-links {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          
          .middle-section {
            flex-direction: column;
            gap: 15px;
            margin: 15px 0;
          }
          
          .compliance-left,
          .compliance-right {
            width: 100%;
          }
          
          .vision-logo {
            width: 60px;
          }
        }
      `}</style>

      <footer
        className="footer-section"
        suppressHydrationWarning
        style={{
          direction: isArabic ? "rtl" : "ltr",
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {/* Background Image */}
        <div className="footer-background" />
        
        {/* Blue Overlay */}
        <div className="footer-overlay" />

        <div className="container">
          {/* Logo Section - Centered */}
          <div className="logo-section">
            <Link href={`/${lang}`} className="logo-link">
              <Image
                src="/logo-white.png"
                alt="Next Future Tech"
                width={220}
                height={80}
                priority
                className="logo-image"
                style={{ width: "220px", height: "auto" }}
              />
            </Link>
          </div>

          {/* Description */}
          <p className="description">{t.description}</p>

          {/* Navigation Links - Centered */}
          <div className="nav-links">
            <Link href={`/${lang}`} className="nav-link">{t.links.home}</Link>
            <Link href={`/${lang}/services`} className="nav-link">{t.links.services}</Link>
            <Link href={`/${lang}/contact-us`} className="nav-link">{t.links.contact}</Link>
            <Link href={`/${lang}/about-us`} className="nav-link">{t.links.about}</Link>
            <Link href={`/${lang}/terms`} className="nav-link">{t.links.terms}</Link>
            <Link href={`/${lang}/privacy`} className="nav-link">{t.links.privacy}</Link>
          </div>

          {/* Read and Vision Section - Centered with Compliance on sides */}
          <div className="middle-section">
            {/* Left - Tax Number */}
            <div className="compliance-left">
              <div className="compliance-item">
                <span>{t.compliance.taxNumber}: 312974170600003</span>
              </div>
            </div>

            {/* Center - Vision 2030 Logo */}
            <div className="vision-center">
              <Image
                src="/vision2030.png"
                alt="Vision 2030"
                width={70}
                height={30}
                className="vision-logo"
                style={{ width: "70px", height: "auto" }}
              />
            </div>

            {/* Right - Commercial Register */}
            <div className="compliance-right">
              <div className="compliance-item">
                <span>{t.compliance.commercialRegister}: 7049883445</span>
              </div>
            </div>
          </div>

          {/* Social Icons - Centered */}
          <div className="social-icons">
            {/* X (Twitter) */}
            <a
              href="https://x.com/nextftechsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon x-icon"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 1200 1227"
                fill="currentColor"
              >
                <path d="M714.163 519.284L1185.89 0H1080.67L661.604 472.627L366.102 0H0L494.184 729.625L0 1226.37H105.225L545.021 724.5L851.299 1226.37H1185.89L714.157 519.284H714.163ZM598.89 658.186L552.951 588.626L168.31 79.3771H305.77L604.697 511.342L650.636 580.902L1050.5 1146.63H913.037L598.89 658.186Z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/nextfuture_tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/nextftechsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* Snapchat */}
            <a
              href="https://www.snapchat.com/@nextftechsa"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Snapchat"
            >
              <FaSnapchatGhost size={18} />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@nextfuture_tech"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="TikTok"
            >
              <FaTiktok size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="copyright">
            © 2026 {t.companyNameFull} | {t.rightsReserved}
          </div>
        </div>
      </footer>
    </>
  );
}