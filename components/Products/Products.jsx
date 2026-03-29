"use client";
import { useState, useEffect, useRef } from "react";
import "./product.css";

// 🌟 Products Component
export default function Products({ lang = "en" }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const imgRefs = useRef([]);

  const categories = [
    { key: "All", label: lang === "ar" ? "الكل" : "All" },
    {
      key: "Web Development",
      label: lang === "ar" ? "تطوير الويب" : "Web Development",
    },
    {
      key: "Mobile App Development",
      label: lang === "ar" ? "تطوير التطبيقات" : "Mobile App Development",
    },
    {
      key: "Digital Marketing",
      label: lang === "ar" ? "تطوير التطبيقات" : "Digital Marketing",
    },
    {
      key: "Graphic Design and Video And Animation",
      label: lang === "ar" ? "تطوير التطبيقات" : "Video And Animation",
    },
    {
      key: "ERP Odoo",
      label: lang === "ar" ? "تطوير التطبيقات" : "Video And Animation",
    },
    {
      key: "E-commerce",
      label: lang === "ar" ? "المتاجر الإلكترونية" : "E-commerce",
    },
    {
      key: "Corporate Website",
      label: lang === "ar" ? "مواقع تعريفي" : "Corporate Website",
    },
    { key: "Real Estate", label: lang === "ar" ? "العقارات" : "Real Estate" },
  ];

  const products = [
    {
      name: lang === "ar" ? "مشروع 1" : "Project 1",
      img: "/work/next.png",
      link: "https://nextfuturetech.net/",
      category: "Web Development",
    },
    {
      name: lang === "ar" ? "مشروع 2" : "Project 2",
      img: "/work/tilramal.png",
      link: "https://tilalr.com/",
      category: "Graphic Design",
    },
       {
      name: lang === "ar" ? "مشروع 3" : "Project 2",
      img: "/work/idealservice-sa.png",
      link: "https://idealservice.sa/",
      category: "Graphic Design",
    },

    {
      name: lang === "ar" ? "مشروع 4" : "Project 3",
      img: "/work/remaskitchens.png",
      link: "https://remaskitchens.com/",
      category: "Web Development",
    },

     {
      name: lang === "ar" ? "مشروع 5" : "Project 3",
      img: "/work/fasthelp.png",
      link: "https://fasthelp2024.com/",
      category: "Web Development",
    },

         {
      name: lang === "ar" ? "مشروع 6" : "Project 3",
      img: "/work/screencapture.png",
      link: "https://antiquewhite-horse-250374.hostingersite.com/what-weve-done/",
      category: "Web Development",
    },
    {
      name: lang === "ar" ? " 7 مشروع" : "Project 4",
      img: "/work/nille.png",
      link: "https://nille.qodeinteractive.com/clothing-home/",
      category: "Video And Animation",
    },
     {
      name: lang === "ar" ? " 7 مشروع" : "Project 4",
      img: "/work/consulting.png",
      link: "https://consulting.stylemixthemes.com/seventeen/",
      category: "Video And Animation",
    },
    
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  useEffect(() => {
    imgRefs.current.forEach((img) => {
      if (!img) return;
      const cardHeight = 280;
      const imgHeight =
        img.naturalHeight * (img.clientWidth / img.naturalWidth);
      const slide = imgHeight > cardHeight ? -(imgHeight - cardHeight) : 0;
      img.style.setProperty("--slide-height", `${slide}px`);
      const duration = Math.max(8, Math.abs(slide) * 0);
      img.style.setProperty("--scroll-duration", `${duration}s`);
    });
  }, [filteredProducts]);

  return (
    <section
      className="py-5 position-relative"
      dir={lang === "ar" ? "rtl" : "ltr"}
      style={{ minHeight: "100vh", background: "#" }} // dark blue
    >
      {/* Particle Canvas */}
      {/* <ParticleCanvas /> */}

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="lg:w-7/12 w-full mb-3 lg:mb-0 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl fw-bold text-black uppercase">
            {lang === "ar"
              ? "مشاريع حائزة على جوائز"
              : "Award Winning Projects"}
          </h2>
        </div>

        {/* Categories */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`category-btn ${
                activeCategory === cat.key ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="row g-3">
          {filteredProducts.map((product, idx) => (
            <div key={idx} className="col-12 col-md-4 col-lg-3">
              <div className="product-card">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    ref={(el) => (imgRefs.current[idx] = el)}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
