"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamSection({ lang = "en" }) {
  const translations = {
    en: {
      heading: "Our Team",
      description: "Meet our professional team who are passionate about technology and delivering solutions.",
    },
    ar: {
      heading: "فريقنا",
      description: "تعرف على فريقنا المحترف الذي لديه شغف بالتكنولوجيا وتقديم الحلول.",
    },
  };

  const t = translations[lang] ?? translations.en;

  const teamMembers = [
    { id: 1, name: { en: "Omar Jameel", ar: " عمر جميـل" }, position: { en: "CEO", ar: "الرئيس التنفيذي" }, image: "/ceo.png" },
    { id: 2, name: { en: "Engr Yousef Mohammed", ar: "المهندس يوسف محمد" }, position: { en: "Development Manager", ar: "مدير التطوير" }, image: "/yy.png" },
    { id: 3, name: { en: "Mahmoud Tarek", ar: "محمود طارق" }, position: { en: "Business Consultant", ar: "مستشار الأعمال" }, image: "/mehmod.png" },
    { id: 4, name: { en: "Engr Aman Shah", ar: "المهندس أمان شاه" }, position: { en: "Software Engineer", ar: " المهندس البرمجيات" }, image: "/aman.jpg" },
    { id: 5, name: { en: "  Majid Al Zahrani", ar: "  ماجد الزهراني" }, position: { en: " HR Specialist", ar: " أخصائي موارد بشرية" }, image: "/majid.png" },

  ];

  return (
    <section className="team-section" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <h1>{t.heading}</h1>
        <p>{t.description}</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}                // ✅ Enables infinite looping
          autoplay={{                 // ✅ Optional: auto scroll
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card">
                <div className="image-wrapper">
                  <img src={member.image} alt={member.name[lang]} />
                </div>
                <h3>{member.name[lang]}</h3>
                <p>{member.position[lang]}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .team-section {
          padding: 4rem 1rem;
          text-align: center;
          font-family: 'Cairo', sans-serif;
          background: #f4f6f9;
        }
        h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1rem;
          margin-bottom: 2rem;
          color: #555;
        }
        .team-card {
          padding: 1.5rem 1rem;
          border-radius: 16px;
          background: white;
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.12);
        }
        .image-wrapper {
          width: 150px;
          height: 150px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #667eea;
        }
        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .team-card h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0 0.25rem 0;
          color: #333;
        }
        .team-card p {
          font-size: 1rem;
          color: #777;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
