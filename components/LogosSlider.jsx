"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

export default function LogosSlider({ lang = "ar" }) {
  const isRTL = lang === "ar";

  const logos = [
    { src: "/services-slider/img.jpg", alt: "Client 1" },
    { src: "/services-slider/img.jpg", alt: "Client 2" },
    { src: "/services-slider/img.jpg", alt: "Client 3" },
    { src: "/services-slider/img.jpg", alt: "Client 4" },
    { src: "/services-slider/img.jpg", alt: "Client 5" },
    { src: "/services-slider/img.jpg", alt: "Client 6" },
    // Add duplicate logos for better loop effect if needed
    { src: "/services-slider/img.jpg", alt: "Client 7" },
    { src: "/services-slider/img.jpg", alt: "Client 8" },
  ];

  const content = {
    ar: {
      headingStart: "بعض ",
      headingHighlight: "مشاريعنا",
      headingEnd: " السابقة",
      subtitle: "قصص نجاح تعكس خبرتنا وإبداعنا",
    },
    en: {
      headingStart: "Some of Our ",
      headingHighlight: "Previous",
      headingEnd: " Projects",
      subtitle: "Success stories that reflect our expertise and creativity.",
    },
  };

  const t = content[lang] || content.ar;

  return (
    <section className="logos-section" dir={isRTL ? "rtl" : "ltr"}>
      <div className="logos-container">
        <h2 className="logos-heading">
          {t.headingStart}
          <span className="heading-highlight">{t.headingHighlight}</span>
          {t.headingEnd}
        </h2>
        <p className="logos-subtitle">{t.subtitle}</p>
      </div>

      <div className="logos-slider-wrapper">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={24}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          loop={true}
          speed={800}
          loopAdditionalSlides={4}
          centeredSlides={false}
          grabCursor={true}
          touchRatio={1.5}
          resistance={true}
          resistanceRatio={0.85}
          breakpoints={{
            480: { 
              slidesPerView: 3, 
              spaceBetween: 24,
              speed: 800,
            },
            768: { 
              slidesPerView: 4, 
              spaceBetween: 32,
              speed: 800,
            },
            1024: { 
              slidesPerView: 5, 
              spaceBetween: 40,
              speed: 800,
            },
            1280: { 
              slidesPerView: 6, 
              spaceBetween: 48,
              speed: 800,
            },
          }}
          className="logos-swiper"
          style={{ overflow: "visible" }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <div className="logo-card">
                <div className="logo-img-wrap">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 640px) 90px, 120px"
                    className="logo-img"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .logos-section {
          padding: 3.5rem 0 2.5rem;
          background: #ffffff;
          overflow: hidden;
          position: relative;
        }

        .logos-container {
          text-align: center;
          padding: 0 1.5rem;
          margin-bottom: 2.5rem;
        }

        .logos-heading {
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem;
          line-height: 1.4;
        }

        .heading-highlight {
          color: #d4a017;
        }

        .logos-subtitle {
          font-size: 0.95rem;
          color: #6b7280;
          margin: 0;
          line-height: 1.6;
        }

        .logos-slider-wrapper {
          width: 100%;
          padding: 0 2rem;
          position: relative;
          overflow: visible;
        }

        /* Swiper container styles */
        :global(.logos-swiper) {
          overflow: visible !important;
          padding: 10px 0;
        }

        :global(.logos-swiper .swiper-wrapper) {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        :global(.logos-swiper .swiper-slide) {
          height: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          width: 100%;
          transition: transform 0.3s ease;
        }

        .logo-img-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          background: #f9fafb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .logo-img {
          object-fit: cover;
          width: 100% !important;
          height: 100% !important;
          filter: grayscale(20%);
          transition: filter 0.4s ease, transform 0.4s ease;
        }

        .logo-card:hover .logo-img-wrap {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transform: translateY(-2px);
        }

        .logo-card:hover .logo-img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        @media (max-width: 640px) {
          .logos-section {
            padding: 2.5rem 0 1.5rem;
          }

          .logos-slider-wrapper {
            padding: 0 0.75rem;
          }

          .logo-img-wrap {
            width: 90px;
            height: 90px;
          }

          .logo-card {
            padding: 0.5rem;
          }
        }

        /* Optional: Add fade effect on edges for smoother visual */
        .logos-slider-wrapper::before,
        .logos-slider-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 40px;
          pointer-events: none;
        }

        .logos-slider-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #ffffff, transparent);
        }

        .logos-slider-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #ffffff, transparent);
        }

        @media (max-width: 640px) {
          .logos-slider-wrapper::before,
          .logos-slider-wrapper::after {
            width: 20px;
          }
        }
      `}</style>
    </section>
  );
}