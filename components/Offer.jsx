"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Cairo, Inter } from "next/font/google";
import Image from "next/image";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function WhyChooseUs({ lang = "ar" }) {
  const router = useRouter();
  const isRTL = lang === "ar";
  const fontClass = lang === "ar" ? cairo.className : inter.className;

  // Content matching the image exactly - 4 cards in 2 columns
  const content = {
    ar: {
      title: "نقدم أكثر لك من مجرد خدمة تقنية",
      subtitle: "خطة متكاملة لتحقيق الأهداف وزيادة النمو",
      description:
        "في نيكست فيوتش، نرسم لك خارطة طريق نحو الابتكار، مقدّمين حلولاً تقنية غير تقليدية تعزز رؤيتك. دعنا نكون شريكك في رحلة التحول الرقمي، حيث نحقق طموحاتك بأفكار جريئة وتقنيات رائدة. انضم إلينا لنصنع مستقبلًا مشرقًا سويًا!",
      features: [
        {
          icon: "/services/erp.png",
          title: "أنظمة تخطيط موارد المؤسسة",
          items: ["تحسين العمليات وزيادة الكفاءة في جميع الأقسام", "ERP"],
        },
        {
          icon: "/services/uim_apps.png",
          title: "تطوير وتصميم التطبيقات",
          items: ["حلول مبتكرة وتجربة مستخدم ممتازة لكل التطبيقات", "ERP"],
        },

        {
          icon: "/services/grommet-icons_technology.png",
          title: "خدمات تقنية أخرى",
          items: [
            "حلول شاملة لكل ما تبحث عنه في التقنية والتكنولوجيا الحديثة",
            "ERP",
          ],
        },
        {
          icon: "/services/Vector2.png",
          title: "خدمات التسويق",
          items: ["استراتيجيات فعالة لتحسين الوعي وزيادة النتائج", "ERP"],
        },
      ],
      cta: "اكشف خدماتنا",
    },
    en: {
      title: "We Offer More Than Just As Technical Services",
      subtitle: "A Comprehensive Plan to Achieve Goals and Drive Growth",
      description:
        "At Next Future, we create a roadmap to innovation, providing technical solutions that enhance your vision. Let us be your partner in the digital transformation journey, achieving your ambitions with bold ideas and cutting-edge technologies. Join us and shape a bright future together!",
      features: [
        {
          icon: "/services/erp.png",
          title: "Enterprise Resource Planning Systems",
          items: [
            "Enhance operations and boost efficiency across all departments",
            "ERP",
          ],
        },
        {
          icon: "/services/uim_apps.png",
          title: "Application Development & Design",
          items: [
            "Innovative solutions with exceptional user experience for all applications",
          ],
        },
        {
          icon: "/services/grommet-icons_technology.png",
          title: "Other Technical Services",
          items: ["Comprehensive solutions for all your technology needs"],
        },
        {
          icon: "/services/Vector2.png",
          title: "Marketing Services",
          items: [
            "Effective strategies to increase awareness and drive results",
          ],
        },
      ],
      cta: "Discover Our Services",
    },
  };

  const currentContent = content[lang] || content.ar;

  return (
    <section
      className={`why-choose-us ${fontClass}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container">
        <h1 className="main-title">{currentContent.title}</h1>

        <div className="content-wrapper">
          {/* Left Side - Text Content with 4 cards */}
          <motion.div
            className="text-content"
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="sub-title">{currentContent.subtitle}</h2>
            <p className="description">{currentContent.description}</p>

            {/* Separator */}
            {/* <div className="separator"></div> */}

            {/* Features Grid - 2 columns, 4 cards */}
            <div className="features-grid">
              {currentContent.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-header">
                    <div className="icon-wrapper">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="feature-icon"
                      />
                    </div>
                    <h3 className="card-title">{feature.title}</h3>
                  </div>
                  <div className="card-content">
                    {feature.items.map((item, itemIdx) => (
                      <p key={itemIdx} className="card-item">
                        {item}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="cta-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                type="button"
                className="cta-button"
                onClick={() => router.push(`/${lang}/service`)}
              >
                {currentContent.cta}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="image-content"
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <Image
                src="/side-img.jpg"
                alt={lang === "ar" ? "نكست فيوتشير" : "Next Future"}
                width={500}
                height={400}
                className="feature-image"
                priority
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .why-choose-us {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          padding: 100px 0;
          min-height: auto;
          display: flex;
          text-align: ${isRTL ? "right" : "left"};
        }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          width: 100%;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 22px;
          align-items: center;
          direction: ltr;
        }

        /* Text Content Styles */
        .text-content {
          max-width: 650px;
          text-align: ${isRTL ? "right" : "left"};
        }

        .main-title {
          font-size: 42px;
          font-weight: 800;
          text-align: center !important;
          color: #005bac;
          margin-bottom: 15px;
          line-height: 1.3;
          grid-column: 1 / -1;
          text-align: ${isRTL ? "right" : "left"};
        }

        .sub-title {
          font-size: 24px;
          font-weight: 600;
          color: #1e1e1e99;
          margin-bottom: 20px;
          text-align: ${isRTL ? "right" : "left"};
        }

        .description {
          font-size: 16px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 30px;
          text-align: ${isRTL ? "right" : "left"};
        }

        /* Separator */
        .separator {
          width: 100px;
          height: 3px;
          background: #2563eb;
          margin: 25px 0 35px;
          border-radius: 2px;
        }

        /* Features Grid - 2 columns */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .feature-card {
          background: white;
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: ${isRTL ? "right" : "left"};
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(37, 99, 235, 0.1);
          border-color: #2563eb;
        }

        .card-header {
          display: flex;
          flex-direction: ${isRTL ? "row-reverse" : "row"};
          justify-content: ${isRTL ? "flex-start" : "flex-start"};
          align-items: center;
          text-align: ${isRTL ? "right" : "left"};
          gap: 12px;
          margin-bottom: 15px;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 12px;
        }

        .icon-wrapper {
          width: auto;
          height: auto;
          max-width: 110px;
          max-height: 110px;
          flex-shrink: 0;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
        }

        .feature-icon {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .card-title {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          margin: 0;
          line-height: 1.4;
          text-align: ${isRTL ? "right" : "left"};
        }

        .card-content {
          text-align: ${isRTL ? "right" : "left"};
          padding-inline-start: ${isRTL ? "0" : "5px"};
          padding-inline-end: ${isRTL ? "5px" : "0"};
        }

        .card-item {
          font-size: 14px;
          color: #475569;
          margin-bottom: 8px;
          line-height: 1.5;
          padding-inline-start: ${isRTL ? "0" : "18px"};
          padding-inline-end: ${isRTL ? "18px" : "0"};
          position: relative;
          text-align: ${isRTL ? "right" : "left"};
        }

        .card-item:last-child {
          margin-bottom: 0;
        }

        .card-item::before {
          content: "•";
          color: #2563eb;
          font-weight: bold;
          position: absolute;
          ${isRTL ? "right" : "left"}: 0;
          font-size: 16px;
          top: 50%;
          transform: translateY(-50%);
        }

        /* CTA Button */
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 220px;

          min-height: 50px;
          background: linear-gradient(135deg, #0079e3, #005eb8) !important;
          color: #ffffff;
          border: 2px solid #ffffff;
          padding: 0 24px;
          font-size: 18px;
          font-weight: 700;
          border-radius: 14px;
          cursor: pointer;
          text-decoration: none;
          text-align: center;
          transition: all 0.25s ease;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
        }

        .cta-button:hover {
          background: linear-gradient(135deg, #0093ff, #0a72c3);
          transform: translateY(-2px);
          box-shadow: 0 10px 26px rgba(0, 0, 0, 0.25);
        }

        .cta-button:active {
          transform: translateY(0);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        /* Image Styles */
        .image-content {
          display: flex;
          justify-content: flex-end;
          text-align: ${isRTL ? "right" : "left"};
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .feature-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .feature-image:hover {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(37, 99, 235, 0.1),
            transparent
          );
          pointer-events: none;
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */

        /* Large Desktop (1400px+) */
        @media (min-width: 1400px) {
          .container {
            max-width: 1400px;
            padding: 0 50px;
          }

          .features-grid {
            gap: 25px;
          }

          .feature-card {
            padding: 25px;
          }
        }

        /* Desktop to Tablet Landscape (1024px - 1199px) */
        @media (max-width: 1199px) and (min-width: 1024px) {
          .why-choose-us {
            padding: 80px 0;
          }

          .container {
            padding: 0 36px;
          }

          .content-wrapper {
            gap: 50px;
          }

          .main-title {
            font-size: 38px;
            margin-bottom: 20px;
          }

          .sub-title {
            font-size: 22px;
          }

          .description {
            font-size: 15px;
          }

          .features-grid {
            gap: 18px;
          }

          .feature-card {
            padding: 18px;
          }

          .card-title {
            font-size: 15px;
          }

          .card-item {
            font-size: 13px;
          }

          .cta-button {
            padding: 15px 40px;
            font-size: 16px;
          }
        }

        /* Tablet (768px - 1023px) */
        @media (max-width: 1023px) and (min-width: 768px) {
          .why-choose-us {
            padding: 70px 0;
          }

          .container {
            padding: 0 30px;
          }

          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .text-content {
            max-width: 100%;
            order: 2;
          }

          .image-content {
            order: 1;
          }

          .main-title {
            font-size: 34px;
            margin-bottom: 25px;
            grid-column: auto;
          }

          .sub-title {
            font-size: 20px;
          }

          .description {
            font-size: 15px;
          }

          .image-wrapper {
            width: 100% !important;
          }

          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 35px;
          }

          .feature-card {
            padding: 16px;
            border-radius: 16px;
          }

          .card-header {
            gap: 10px;
            padding-bottom: 10px;
          }

          .card-title {
            font-size: 14px;
          }

          .card-item {
            font-size: 12px;
            margin-bottom: 6px;
            padding-inline-start: 16px;
          }

          .card-item::before {
            font-size: 14px;
          }

          .cta-button {
            padding: 13px 35px;
            font-size: 15px;
          }

          .separator {
            width: 80px;
            margin: 20px 0 30px;
          }
        }

        /* Large Mobile (640px - 767px) */
        @media (max-width: 767px) and (min-width: 640px) {
          .why-choose-us {
            padding: 60px 0;
          }

          .container {
            padding: 0 20px;
          }

          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .text-content {
            max-width: 100%;
            order: 1;
            text-align: center;
          }

          .image-content {
            order: 2;
            max-width: 100%;
            display: flex;
            justify-content: center;
          }

          .main-title {
            font-size: 28px;
            margin-bottom: 20px;
            grid-column: auto;
          }

          .sub-title {
            font-size: 18px;
            margin-bottom: 16px;
          }

          .description {
            font-size: 14px;
            margin-bottom: 24px;
          }

          .separator {
            width: 70px;
            height: 2px;
            margin: 18px 0 24px;
          }

          .image-wrapper {
            width: 100%;
            margin: 0 auto;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-bottom: 30px;
          }

          .feature-card {
            padding: 14px;
            border-radius: 14px;
          }

          .card-header {
            gap: 10px;
            padding-bottom: 10px;
            margin-bottom: 12px;
          }

          .icon-wrapper {
            width: 32px;
            height: 32px;
          }

          .card-title {
            font-size: 13px;
          }

          .card-item {
            font-size: 11px;
            margin-bottom: 5px;
            padding-inline-start: 15px;
          }

          .cta-button {
            padding: 12px 32px;
            font-size: 14px;
            width: auto;
          }
        }

        /* Mobile (480px - 639px) */
        @media (max-width: 639px) and (min-width: 480px) {
          .why-choose-us {
            padding: 50px 0;
          }

          .container {
            padding: 0 18px;
          }

          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 35px;
            text-align: center;
          }

          .text-content {
            max-width: 100%;
            order: 1;
            text-align: center;
          }

          .image-content {
            order: 2;
            display: flex;
            justify-content: center;
          }

          .main-title {
            font-size: 24px;
            margin-bottom: 16px;
            grid-column: auto;
          }

          .sub-title {
            font-size: 16px;
            margin-bottom: 14px;
          }

          .description {
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .separator {
            width: 60px;
            height: 2px;
            margin: 15px 0 20px;
          }

          .image-wrapper {
            width: 100% !important;
            margin: 0 auto;
            border-radius: 20px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 25px;
          }

          .feature-card {
            padding: 12px;
            border-radius: 12px;
          }

          .card-header {
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 10px;
          }

          .icon-wrapper {
            width: 30px;
            height: 30px;
            padding: 6px;
          }

          .card-title {
            font-size: 12px;
            font-weight: 600;
          }

          .card-item {
            font-size: 10px;
            margin-bottom: 4px;
            padding-inline-start: 14px;
          }

          .cta-button {
            padding: 11px 28px;
            font-size: 13px;
            width: auto;
          }
        }

        /* Small Mobile (375px - 479px) */
        @media (max-width: 479px) and (min-width: 375px) {
          .why-choose-us {
            padding: 45px 0;
          }

          .container {
            padding: 0 16px;
          }

          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 30px;
            text-align: center;
          }

          .text-content {
            max-width: 100%;
            order: 1;
            text-align: center;
          }

          .image-content {
            order: 2;
            display: flex;
            justify-content: center;
          }

          .main-title {
            font-size: 20px;
            margin-bottom: 14px;
            line-height: 1.25;
            grid-column: auto;
          }

          .sub-title {
            font-size: 15px;
            margin-bottom: 12px;
          }

          .description {
            font-size: 12px;
            line-height: 1.55;
            margin-bottom: 18px;
          }

          .separator {
            width: 50px;
            height: 2px;
            margin: 12px 0 18px;
          }

          .image-wrapper {
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
            border-radius: 18px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 22px;
          }

          .feature-card {
            padding: 10px;
            border-radius: 11px;
          }

          .card-header {
            gap: 8px;
            padding-bottom: 8px;
            margin-bottom: 8px;
          }

          .icon-wrapper {
            width: 28px;
            height: 28px;
            padding: 5px;
            border-radius: 8px;
          }

          .card-title {
            font-size: 11px;
            font-weight: 600;
          }

          .card-item {
            font-size: 9px;
            margin-bottom: 3px;
            padding-inline-start: 13px;
            line-height: 1.4;
          }

          .cta-button {
            padding: 10px 26px;
            font-size: 12px;
            width: auto;
          }
        }

        /* Extra Small Mobile (< 375px) */
        @media (max-width: 374px) {
          .why-choose-us {
            padding: 40px 0;
          }

          .container {
            padding: 0 14px;
          }

          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 25px;
            text-align: center;
          }

          .text-content {
            width: 100%;
            order: 1;
            text-align: center;
          }

          .image-content {
            order: 2;
            display: flex;
            justify-content: center;
          }

          .main-title {
            font-size: 18px;
            margin-bottom: 12px;
            line-height: 1.2;
            grid-column: auto;
          }

          .sub-title {
            font-size: 13px;
            margin-bottom: 10px;
          }

          .description {
            font-size: 11px;
            line-height: 1.5;
            margin-bottom: 16px;
          }

          .separator {
            width: 40px;
            height: 2px;
            margin: 10px 0 16px;
          }

          .image-wrapper {
            width: 100%;
            max-width: 240px;
            margin: 0 auto;
            border-radius: 16px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 8px;
            margin-bottom: 20px;
          }

          .feature-card {
            padding: 9px;
            border-radius: 10px;
          }

          .card-header {
            gap: 7px;
            padding-bottom: 7px;
            margin-bottom: 7px;
          }

          .icon-wrapper {
            width: 26px;
            height: 26px;
            padding: 4px;
            border-radius: 6px;
          }

          .card-title {
            font-size: 10px;
            font-weight: 600;
          }

          .card-item {
            font-size: 8px;
            margin-bottom: 2px;
            padding-inline-start: 12px;
            line-height: 1.3;
          }

          .cta-button {
            padding: 9px 24px;
            font-size: 11px;
            width: auto;
          }
        }

        /* Accessibility - Reduced Motion */
        @media (prefers-reduced-motion: reduce) {
          .feature-card,
          .feature-image,
          .cta-button {
            transition: none;
          }

          .feature-card:hover,
          .feature-image:hover,
          .cta-button:hover {
            transform: none;
          }
        }

        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .feature-card {
            border: 2px solid #2563eb;
          }

          .card-title {
            color: #000;
          }

          .description {
            color: #000;
          }
        }

        /* Print Styles */
        @media print {
          .why-choose-us {
            background: white;
          }

          .feature-card {
            page-break-inside: avoid;
            border: 1px solid #ddd;
            box-shadow: none;
          }
        }
      `}</style>
    </section>
  );
}
