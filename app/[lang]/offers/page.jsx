"use client";

import React, { useState, useEffect } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function OffersPage({ params }) {
  const { lang } = params;
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data for offers
  const dummyOffers = [
    {
      id: 1,
      title: { en: "Branding", ar: "العلامة التجارية" },
      description: { en: "Complete branding package with logo, identity, and marketing materials", ar: "حزمة علامة تجارية كاملة مع الشعار والهوية والمواد التسويقية" },
      image: "/services/images/branding.jpg"
    },
    {
      id: 2,
      title: { en: "Digital Marketing", ar: "التسويق الرقمي" },
      description: { en: "Comprehensive digital marketing solutions to grow your online presence", ar: "حلول تسويق رقمي شاملة لتنمية تواجدك عبر الإنترنت" },
      image: "/services/images/digital-marketing.jpg"
    },
    {
      id: 3,
      title: { en: "Web Development", ar: "تطوير الويب" },
      description: { en: "Custom website development with modern technologies and responsive design", ar: "تطوير مواقع ويب مخصصة بتقنيات حديثة وتصميم متجاوب" },
      image: "/services/images/web-dev.jpg"
    },
    {
      id: 4,
      title: { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
      description: { en: "Native and cross-platform mobile applications for iOS and Android", ar: "تطبيقات جوال أصلية ومتعددة المنصات لنظامي iOS و Android" },
      image: "/services/images/mobile-app.jpg"
    },
    {
      id: 5,
      title: { en: "ERP Systems", ar: "أنظمة تخطيط موارد المؤسسات" },
      description: { en: "Tailored ERP solutions to streamline your business operations", ar: "حلول تخطيط موارد المؤسسات المخصصة لتبسيط عملياتك التجارية" },
      image: "/services/images/erp.jpg"
    },
    {
      id: 6,
      title: { en: "Cloud Services", ar: "الخدمات السحابية" },
      description: { en: "Secure and scalable cloud infrastructure for your business", ar: "بنية تحتية سحابية آمنة وقابلة للتوسع لعملك" },
      image: "/services/images/cloud.jpg"
    }
  ];

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const offersRef = collection(db, "offers");
        const q = query(offersRef, orderBy("timestamp", "desc"));
        const snapshot = await getDocs(q);
        
        const offersData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        // Use dummy data if no offers in database
        setOffers(offersData.length > 0 ? offersData : dummyOffers);
      } catch (error) {
        console.error("Error fetching offers:", error);
        // Use dummy data on error
        setOffers(dummyOffers);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const content = {
    en: {
      title: "Special Offers",
      subtitle: "Check out our latest deals and promotions",
      noOffers: "No offers available at the moment",
      loading: "Loading offers...",
    },
    ar: {
      title: "العروض الخاصة",
      subtitle: "تحقق من أحدث العروض والخصومات",
      noOffers: "لا توجد عروض متاحة في الوقت الحالي",
      loading: "جارٍ تحميل العروض...",
    },
  };

  const t = content[lang] || content.en;

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", paddingTop: "100px", textAlign: "center" }}>
        <div className="container">
          <h2>{t.loading}</h2>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", paddingTop: "100px", paddingBottom: "50px" }}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 style={{ fontSize: "1.2rem", fontWeight: "400", marginBottom: "1rem" }}>
            {t.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#666" }}>{t.subtitle}</p>
        </div>

        {/* Offers Grid */}
        {offers.length > 0 ? (
          <div className="row g-4">
            {offers.map((offer) => (
              <div key={offer.id} className="col-lg-4 col-md-6">
                <div
                  className="offer-card"
                  style={{
                    background: "#fff",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    height: "100%",
                    border: "1px solid #e0e0e0",
                  }}
                >
                  {offer.image && (
                    <img
                      src={offer.image}
                      alt={offer.title?.[lang] || offer.title?.en || "Offer"}
                      style={{
                        width: "100%",
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <div style={{ padding: "1.5rem" }}>
                    <h2 style={{ fontSize: "0.9rem", fontWeight: "400", marginBottom: "0.75rem" }}>
                      {offer.title?.[lang] || offer.title?.en || "Offer"}
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "#666", marginBottom: "0" }}>
                      {offer.description?.[lang] || offer.description?.en || ""}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p style={{ fontSize: "1.1rem", color: "#999" }}>{t.noOffers}</p>
          </div>
        )}
      </div>
    </div>
  );
}
