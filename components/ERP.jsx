"use client";
import { useState } from "react";
import { Check, Zap, Building2, Package } from "lucide-react";

export default function ErpPackages({ lang }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const translations = {
    en: {
      title: "Next Future ERP",
      subtitle: "Integrated ERP systems for modern businesses including financial management, sales, inventory, CRM, and AI-powered insights in one system.",
      packages: [
        {
          name: "Basic Package",
          price: "65",
          period: "/month",
          bgImage: "/future2.png",
          features: [
            "Invoicing & Receipts",
            "Limited products & invoices",
            "Accounting",
            "Inventory",
            "Sales & Purchases",
            "Customer management",
            "Permissions management"
          ]
        },
        {
          name: "Basic Package",
          price: "65",
          period: "/month",
       bgImage: "/future2.png",
          features: [
            "Invoicing & Receipts",
            "Limited products & invoices",
            "Accounting",
            "Inventory",
            "Sales & Purchases",
            "Customer management",
            "Permissions management"
          ]
        },
        {
          name: "Basic Package",
          price: "65",
          period: "/month",
           bgImage: "/future2.png",
          features: [
            "Invoicing & Receipts",
            "Limited products & invoices",
            "Accounting",
            "Inventory",
            "Sales & Purchases",
            "Customer management",
            "Permissions management"
          ]
        },
        {
          name: "Basic Package",
          price: "40",
          period: "/month",
           bgImage: "/future2.png",
          features: [
            "One branch",
            "One warehouse",
            "Purchase included"
          ]
        }
      ],
      choosePackage: "Choose Package",
      purchase: "Purchase",
      branch: "Branch",
      warehouse: "Warehouse"
    },
    ar: {
      title: "ERP نكست فيوتشر",
      subtitle: "أنظمة ERP متكاملة للأعمال الحديثة تشمل الإدارة المالية، المبيعات، المخزون، إدارة علاقات العملاء (CRM)، ورؤى مدعومة بالذكاء الاصطناعي في نظام واحد.",
      packages: [
        {
          name: "الباقة الأساسية",
          price: "65",
          period: "/شهراً",
          bgImage: "/future2.png",
          features: [
            "الفوترة والإيصالات",
            "منتجات وفواتير محدودة",
            "حسابات المحاسبة",
            "المخزون",
            "المبيعات والمشتريات",
            "إدارة العملاء والموجودين",
            "إدارة الصلاحيات"
          ]
        },
        {
          name: "الباقة الأساسية",
          price: "65",
          period: "/شهراً",
          bgImage: "/future2.png",
          features: [
            "الفوترة والإيصالات",
            "منتجات وفواتير محدودة",
            "حسابات المحاسبة",
            "المخزون",
            "المبيعات والمشتريات",
            "إدارة العملاء والموجودين",
            "إدارة الصلاحيات"
          ]
        },
        {
          name: "الباقة الأساسية",
          price: "65",
          period: "/شهراً",
          bgImage: "/future2.png",
          features: [
            "الفوترة والإيصالات",
            "منتجات وفواتير محدودة",
            "حسابات المحاسبة",
            "المخزون",
            "المبيعات والمشتريات",
            "إدارة العملاء والموجودين",
            "إدارة الصلاحيات"
          ]
        },
        {
          name: "الباقة الأساسية",
          price: "٤٠",
          period: "/شهراً",
          bgImage: "/future2.png",
          features: [
            "فرع واحد",
            "مخزن واحد",
            "شراء / شهراً"
          ]
        }
      ],
      choosePackage: "اختر الباقة",
      purchase: "شراء",
      branch: "فرع",
      warehouse: "مخزن"
    }
  };

  const t = translations[lang] || translations.ar;

  return (
    <>
      <style jsx>{`
        .erp-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8faff 0%, #ffffff 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          direction: ${lang === 'ar' ? 'rtl' : 'ltr'};
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
        }

        /* Header */
        .header {
          text-align: center;
          margin-bottom: 60px;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 15px 0;
          position: relative;
          display: inline-block;
        }

        .title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #379DD7;
          border-radius: 2px;
        }

        .subtitle {
          font-size: 1.1rem;
          color: #4a4a4a;
          max-width: 800px;
          margin: 20px auto 0;
          line-height: 1.7;
        }

        /* Packages Grid */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 40px;
        }

        /* Package Card */
        .package-card {
          background: #ffffff09;
          border-radius: 20px;
          padding: 30px 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(55, 157, 215, 0.1);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .package-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(255, 255, 255, 0.47);
          border-radius: 20px;
        }

        .package-card > * {
          position: relative;
        }

        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(55, 157, 215, 0.15);
          border-color: #379DD7;
        }

        .package-card.popular::before {
          content: '✨';
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
        }

        .package-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 15px 0;
          text-align: center;
        }

        .package-price {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 1px solid rgba(55, 157, 215, 0.1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          direction: ltr;
        }

        .price {
          font-size: 2.5rem;
          font-weight: 800;
          color: #379DD7;
          line-height: 1;
        }

        .price-period {
          font-size: 0.9rem;
          color: #666;
          margin-right: 5px;
        }

        .riyal-icon {
          width: 22px;
          height: 22px;
          object-fit: contain;
          margin-right: 5px;
          vertical-align: middle;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 25px 0;
          flex-grow: 1;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: #4a4a4a;
        }

        .feature-icon {
          color: #379DD7;
          flex-shrink: 0;
        }

        .choose-btn {
          background: white;
          color: #379DD7;
          border: 2px solid #379DD7;
          border-radius: 50px;
          padding: 12px 20px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          text-align: center;
          margin-top: auto;
        }

        .choose-btn:hover {
          background: #379DD7;
          color: white;
        }

        .choose-btn.selected {
          background: #379DD7;
          color: white;
        }

        /* Package Meta */
        .package-meta {
          display: flex;
          justify-content: space-around;
          margin-top: 15px;
          padding-top: 15px;
          border-top: 1px solid rgba(55, 157, 215, 0.1);
          font-size: 0.9rem;
          color: #666;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .meta-icon {
          color: #379DD7;
          width: 16px;
          height: 16px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          
          .title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 640px) {
          .erp-section {
            padding: 60px 0;
          }
          
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .subtitle {
            font-size: 1rem;
            padding: 0 15px;
          }
        }

        /* RTL Specific */
        [dir="rtl"] .feature-item {
          flex-direction: row-reverse;
        }
        
        [dir="rtl"] .price-period {
          margin-right: 0;
          margin-left: 5px;
        }

        [dir="rtl"] .riyal-icon {
          margin-right: 0;
          margin-left: 5px;
        }
        
        [dir="rtl"] .meta-item {
          flex-direction: row-reverse;
        }
      `}</style>

      <section className="erp-section">
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1 className="title">{t.title}</h1>
            <p className="subtitle">{t.subtitle}</p>
          </div>

          {/* Packages Grid */}
          <div className="packages-grid">
            {t.packages.slice(0, 3).map((pkg, idx) => (
              <div 
                key={idx} 
                className={`package-card ${idx === 1 ? 'popular' : ''}`}
                style={{
                  backgroundImage: `url('${pkg.bgImage}')`
                }}
              >
                <h3 className="package-name">{pkg.name}</h3>
                
                <div className="package-price">
                  {pkg.period &&
                  (pkg.period.includes('شهراً') ||
                    pkg.period.toLowerCase().includes('month')) && (
                    <img
                      src="/saudi_riyal.png"
                      alt="Saudi Riyal"
                      className="riyal-icon"
                    />
                  )}
                  <span className="price">{pkg.price}</span>
                  {!pkg.period ||
                  !(pkg.period.includes('شهراً') ||
                    pkg.period.toLowerCase().includes('month')) ? (
                    <span className="price-period">{pkg.period}</span>
                  ) : null}
                </div>

                <ul className="features-list">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <Check size={18} className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {idx < 3 && (
                  <button 
                    className={`choose-btn ${selectedPackage === idx ? 'selected' : ''}`}
                    onClick={() => setSelectedPackage(idx)}
                  >
                    {t.choosePackage}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}