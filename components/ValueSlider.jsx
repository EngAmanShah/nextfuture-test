"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function ValueSlider({ lang = "en" }) {
  const isRTL = lang === "ar";

  const services = [
    {
      title: {
        en: "Marketing",
        ar: "التسويق",
      },
      image: "/services-slider/marking.jpg",
    },
    {
      title: {
        en: "SEO",
        ar: "تحسين محركات البحث",
      },
      image: "/services-slider/seo.jpg",
    },
    {
      title: {
        en: "E-Commerce",
        ar: "التجارة الإلكترونية",
      },
      image: "/services-slider/ecommerce.jpg",
    },
    {
      title: {
        en: "Mobile Application",
        ar: "تطبيق الجوال",
      },
      image: "/services-slider/mobile-app.jpg",
    },
    {
      title: {
        en: "Website",
        ar: "الموقع الإلكتروني",
      },
      image: "/services-slider/website.jpg",
    },
    {
      title: {
        en: "Automation",
        ar: "الأتمتة",
      },
      image: "/services-slider/Automation.png",
    },
    {
      title: {
        en: "ERP Systems",
        ar: "أنظمة ERP",
      },
      image: "/services-slider/erp.png",
    },
  ];

  const content = {
    heading: {
      en: "Our Services",
      ar: "خدماتنا",
    },
    subheading: {
      en: "Building Lasting Partnerships On Trust And Success",
      ar: "بناء شراكات دائمة على أساس الثقة والنجاح",
    },
    description: {
      en: "At Next Future tech, we deliver tailored digital solutions, including app development, website design, and brand identity creation, to elevate your digital presence and drive business growth.",
      ar: "في منظمة نكست فيوتشر، نقدم حلولاً رقمية مخصصة، بما في ذلك تطوير التطبيقات وتصميم المواقع الإلكترونية وإنشاء الهوية البصرية، لرفع مستوى حضورك الرقمي وتعزيز نمو عملك.",
    },
  };

  return (
    <section className="services-section" dir={isRTL ? "rtl" : "ltr"}>
      <div className="services-container">
        {/* Main Heading Section */}
        <div className={`header-section ${isRTL ? "header-rtl" : ""}`}>
          <div className="header-left">
            <p className="project-label"></p>
            <h2 className="main-heading">
              {content.subheading[lang]}
            </h2>
          </div>
          <div className={`header-right ${isRTL ? "header-right-rtl" : ""}`}>
            <p className="description">
              {content.description[lang]}
            </p>
          </div>
        </div>
      </div>

      {/* Services Slider - Full Width */}
      <div className="slider-wrapper">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          breakpoints={{
            480: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 36,
            },
          }}
          className="services-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-card">
                <div className="image-container">
                  <Image
                    src={service.image}
                    alt={service.title[lang]}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
                    className="service-image"
                    priority={index < 4}
                  />
                </div>
                <div className="title-bar">
                  <h3 className="service-title">{service.title[lang]}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .services-section {
          padding: 4rem 0;
          background: #ffffff;
          overflow: hidden;
        }

        .services-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Header Section */
        .header-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .header-section {
            flex-direction: row;
            align-items: flex-start;
            gap: 3rem;
          }
        }

        .header-left {
          flex: 1;
        }

        .header-rtl .header-left {
          text-align: right;
        }

        .project-label {
          color: #1e40af;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }

        .main-heading {
          font-size: 2rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
          margin: 0;
        }

        @media (min-width: 768px) {
          .main-heading {
            font-size: 2.5rem;
          }
        }

        .header-right {
          flex: 1;
          border-left: 3px solid #1e40af;
          padding-left: 1.5rem;
        }

        .header-right-rtl {
          border-left: none;
          border-right: 3px solid #1e40af;
          padding-left: 0;
          padding-right: 1.5rem;
          text-align: right;
        }

        .description {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.7;
          margin: 0;
        }

        @media (min-width: 768px) {
          .description {
            font-size: 1.1rem;
          }
        }

        /* Slider Wrapper */
        .slider-wrapper {
          width: 100%;
          padding-left: 2rem;
          padding-right: 2rem;
        }

        @media (min-width: 768px) {
          .slider-wrapper {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        @media (min-width: 1280px) {
          .slider-wrapper {
            padding-left: 6rem;
            padding-right: 6rem;
          }
        }

        [dir="rtl"] .slider-wrapper {
          padding-left: 2rem;
          padding-right: 2rem;
        }

        @media (min-width: 768px) {
          [dir="rtl"] .slider-wrapper {
            padding-left: 3rem;
            padding-right: 3rem;
          }
        }

        @media (min-width: 1280px) {
          [dir="rtl"] .slider-wrapper {
            padding-left: 6rem;
            padding-right: 6rem;
          }
        }

        /* Service Cards */
        .service-card {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .image-container {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .image-container {
            height: 320px;
          }
        }

        @media (min-width: 1024px) {
          .image-container {
            height: 350px;
          }
        }

        .service-image {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .service-card:hover .service-image {
          transform: scale(1.05);
        }

        .title-bar {
          background: linear-gradient(180deg, #f8f9fa 0%, #f1f3f4 100%);
          padding: 1rem 1.25rem;
          border-top: 4px solid #1e40af;
        }

        .service-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1e40af;
          text-align: center;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (min-width: 768px) {
          .service-title {
            font-size: 1.1rem;
          }
        }

        /* Swiper Pagination Styles */
        :global(.services-swiper) {
          padding-bottom: 3.5rem !important;
        }

        :global(.services-swiper .swiper-pagination) {
          bottom: 0 !important;
        }

        :global(.services-swiper .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.services-swiper .swiper-pagination-bullet-active) {
          background: #1e40af;
          width: 24px;
          border-radius: 5px;
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .services-section {
            padding: 2.5rem 0;
          }

          .services-container {
            padding: 0 1rem;
          }

          .slider-wrapper {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          [dir="rtl"] .slider-wrapper {
            padding-left: 0;
            padding-right: 0.5rem;
          }

          .header-right {
            border-left: none;
            border-top: 3px solid #1e40af;
            padding-left: 0;
            padding-top: 1rem;
          }

          .header-right-rtl {
            border-right: none;
            border-top: 3px solid #1e40af;
            padding-right: 0;
            padding-top: 1rem;
          }

          .image-container {
            height: 250px;
          }

          .title-bar {
            padding: 0.875rem 1rem;
          }

          .service-title {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}