"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page({ params }) {
  const { lang } = params || {};
  const currentLang = lang || "en";
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const sliderRef = useRef(null);

  const translations = {
    en: {
      introTitle: "What We Offer",
      heroTitle: "Our Services - More Than Just Service",
      heroSubtitle: "We take pride in offering a wide range of tech services designed to meet your unique business needs.",
      explore: "Explore Services",
      learnMore: "Learn More",
      services: [
        {
          title: "Web Design & Development",
          description: "Build scalable and responsive websites tailored to your business needs.",
          link: "/service/webdev",
          icon: <img src="/services/clarity_building-line.png" alt="Web" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "Mobile App Development",
          description: "Create intuitive and engaging mobile applications for iOS and Android platforms.",
          link: "/service/mobile-app",
          icon: <img src="/services/Vector3.png" alt="Mobile" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "IT Solutions",
          description: "Implement robust IT infrastructure and solutions for seamless business operations.",
          link: "/service/itsolutions",
          icon: <img src="/services/Vector1.png" alt="IT" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "ERP Solutions",
          description: "Comprehensive Enterprise Resource Planning systems to streamline your business operations.",
          link: "/service/erp",
          icon: <img src="/services/erp.png" alt="ERP" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "Digital Marketing",
          description: "Boost your online presence with SEO, social media, PPC, and content strategies.",
          link: "/service/digital-marketing",
          icon: <img src="/services/Group.png" alt="Marketing" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "UI/UX Design",
          description: "Modern UI/UX design for intuitive and seamless digital experiences.",
          link: "/service/graphic-design",
          icon: <img src="/services/solar_figma-bold-duotone.png" alt="Design" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "Motion Graphic",
          description: "Professional motion graphic videos that enhance your marketing messages.",
          link: "/service/graphic-design",
          icon: <img src="/services/mdi_motion-outline.png" alt="Motion" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "Construction Management System",
          description: "Integrated systems to manage construction projects efficiently.",
          link: "/service/erp",
          icon: <img src="/services/ri_building-2-line.png" alt="Construction" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "Property Management System",
          description: "Smart solutions for managing real estate and properties.",
          link: "/service/erp",
          icon: <img src="/services/Vector2.png" alt="Property" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "E-Commerce Solutions",
          description: "Build powerful online stores with secure payment gateways and inventory management.",
          link: "/service/ecommerce",
          icon: <img src="/services/solar_cart-bold-duotone.png" alt="E-Commerce" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "Other Tech Services",
          description: "Scalable cloud infrastructure and migration services for modern businesses.",
          link: "/service/cloud-services",
          icon: <img src="/services/grommet-icons_technology.png" alt="Other Tech" style={{ width: '40px', height: '40px' }} />,
        },
      ],
    },
    ar: {
      introTitle: "ماذا نقدم",
      heroTitle: "خدماتنا - أكثر من مجرد خدمة",
      heroSubtitle: "نفتخر بتقديم مجموعة متنوعة من الخدمات التقنية المصممة",
      explore: "استكشف الخدمات",
      learnMore: "قراءة المزيد",
      services: [

        {
          title: "تصميم وتطوير المواقع",
          description: "بناء مواقع ويب قابلة للتطوير ومتجاوبة مصممة خصيصًا لاحتياجات عملك.",
          link: "/service/webdev",
          icon: <img src="/services/clarity_building-line.png" alt="مواقع" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "تطوير تطبيقات الجوال",
          description: "إنشاء تطبيقات جوال بديهية وجذابة لمنصات iOS و Android.",
          link: "/service/mobile-app",
          icon: <img src="/services/Vector3.png" alt="تطبيقات" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "حلول تقنية المعلومات",
          description: "تنفيذ بنية تحتية وحلول تقنية قوية لعمليات تجارية سلسة.",
          link: "/service/itsolutions",
          icon: <img src="/services/Vector1.png" alt="تقنية" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "حلول تخطيط الموارد",
          description: "أنظمة شاملة لتخطيط موارد المؤسسات لتبسيط عمليات عملك.",
          link: "/service/erp",
          icon: <img src="/services/erp.png" alt="ERP" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "التسويق الرقمي",
          description: "عزز وجودك عبر الإنترنت من خلال استراتيجيات تحسين محركات البحث ووسائل التواصل الاجتماعي.",
          link: "/service/digital-marketing",
          icon: <img src="/services/Group.png" alt="تسويق" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "تصميم تجربة المستخدم",
          description: "تصميم حديث لتجربة المستخدم وواجهات مستخدم لتجارب رقمية بديهية وسلسة.",
          link: "/service/graphic-design",
          icon: <img src="/services/solar_figma-bold-duotone.png" alt="تصميم" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "الرسوم المتحركة",
          description: "فيديوهات احترافية بالرسوم المتحركة تعزز رسائلك التسويقية.",
          link: "/service/graphic-design",
          icon: <img src="/services/mdi_motion-outline.png" alt="رسوم متحركة" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "نظام إدارة المقاولات",
          description: "أنظمة متكاملة لإدارة مشاريع المقاولات بكفاءة.",
          link: "/service/erp",
          icon: <img src="/services/ri_building-2-line.png" alt="مقاولات" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "نظام إدارة العقارات",
          description: "حلول ذكية لإدارة العقارات والممتلكات بسهولة.",
          link: "/service/erp",
          icon: <img src="/services/Vector2.png" alt="عقارات" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "حلول التجارة الإلكترونية",
          description: "بناء متاجر إلكترونية قوية مع بوابات دفع آمنة وإدارة المخزون.",
          link: "/service/ecommerce",
          icon: <img src="/services/solar_cart-bold-duotone.png" alt="تجارة" style={{ width: '40px', height: '40px' }} />,
        },
        {
          title: "الخدمات التقنية الأخرى",
          description: "بنية تحتية سحابية قابلة للتطوير وخدمات نقل للشركات الحديثة.",
          link: "/service/cloud-services",
          icon: <img src="/services/grommet-icons_technology.png" alt="خدمات" style={{ width: '40px', height: '40px' }} />,
        },
      ],
    },
  };

  const t = translations[currentLang];

  if (!t) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className={`position-relative ${
        currentLang === "ar" ? "text-end" : "text-start"
      }`}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      <div className="position-relative py-5 bg-white min-vh-100">
        <div className="container py-5" style={{ paddingTop: "6rem" }}>
          <motion.h5
            className="text-center mb-3"
            style={{ color: "#0d1f4c", fontSize: "2.5rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.heroTitle}
          </motion.h5>

          {t.heroSubtitle && (
            <motion.p
              className="text-center mb-5 mx-auto"
              style={{ 
                color: "#666", 
                fontSize: "1.3rem", 
                maxWidth: "800px",
                lineHeight: "1.8"
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.heroSubtitle}
            </motion.p>
          )}

          {/* DESKTOP GRID */}
          <div className="d-none d-md-block">
            <div className="services-grid">
              {t.services.slice(0, 6).map((service, index) => (
                <div
                  key={index}
                  className="svc-card"
                >
                  <div className="svc-icon-wrap">
                    {service.icon}
                  </div>
                  <span className="svc-title">{service.title}</span>
                </div>
              ))}
            </div>
            <div className="services-grid-row2">
              {t.services.slice(6).map((service, index) => (
                <div
                  key={index + 6}
                  className="svc-card"
                >
                  <div className="svc-icon-wrap">
                    {service.icon}
                  </div>
                  <span className="svc-title">{service.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE GRID - SAME LOOK AS DESKTOP */}
          <div className="d-md-none">
            <div className="mobile-services-grid">
              {t.services.map((service, index) => (
                <div
                  key={index}
                  className="svc-card"
                >
                  <div className="svc-icon-wrap">
                    {service.icon}
                  </div>
                  <span className="svc-title">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          margin-bottom: 14px;
        }

        .services-grid-row2 {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        /* Mobile grid - same card style as desktop */
        .mobile-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .svc-card {
          position: relative;
          overflow: hidden;
          background-image: url('/future2.png');
          background-size: cover;
          background-color: #ffffff80;
          background-position: center;
          border: 1px solid #dce6f5a8;
          border-radius: 14px;
          padding: 18px 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(0,0,0,0.07);
          cursor: default;
          transition: none;
          min-height: 130px;
        }

        .svc-card-selected {
          border-color: #0056b3;
          background: rgba(255, 255, 255, 0.9);
          color: #0d1f4c;
          box-shadow: 0 12px 22px rgba(0,0,0,0.2);
          transform: translateY(-1px);
        }

        .svc-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.4);
          z-index: 0;
        }

        .svc-icon-wrap {
          position: relative;
          z-index: 1;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
        }

        .svc-icon-wrap img {
          width: 30px;
          height: 30px;
          object-fit: contain;
        }

        .svc-title {
          position: relative;
          z-index: 1;
          font-size: 0.7rem;
          font-weight: 700;
          text-align: center;
          line-height: 1.3;
          color: #0d1f4c;
        }

        @media (min-width: 480px) {
          .mobile-services-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .svc-card {
            padding: 20px 10px;
            min-height: 140px;
          }
          .svc-icon-wrap {
            width: 60px;
            height: 60px;
          }
          .svc-icon-wrap img {
            width: 34px;
            height: 34px;
          }
          .svc-title {
            font-size: 0.75rem;
          }
        }

        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .services-grid-row2 {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .services-grid-row2 {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}