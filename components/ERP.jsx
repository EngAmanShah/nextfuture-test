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
          name: "Basic",
          price: "49",
          oldPrice: "99",
          period: "/mo",
          users: "1 user + 1 free",
          branches: "1 branch",
          warehouses: "1 warehouse",
          suitableFor: "Startups, Small shops",
          bgImage: "/future2.png",
          features: [
            "Invoicing & receipts",
            "Limited products & invoices",
            "Accounting accounts",
            "Inventory",
            "Sales & purchases",
            "Customer & supplier management",
            "Permissions management"
          ]
        },
        {
          name: "Pro",
          price: "149",
          oldPrice: "299",
          period: "/mo",
          users: "Up to 5 users + 1 free",
          branches: "Up to 3 branches",
          warehouses: "Up to 3 warehouses",
          suitableFor: "Medium companies, Retail chains, Restaurants",
          bgImage: "/future2.png",
          features: [
            "Unlimited products & invoices",
            "All basic features",
            "Advanced accounting & reports",
            "Point of Sale (POS)",
            "Custom dashboards",
            "Bulk offers",
            "AI integration",
            "Designated account manager"
          ]
        },
        {
          name: "Plus",
          price: "299",
          oldPrice: "599",
          period: "/mo",
          users: "Up to 10 users + 5 free",
          branches: "Up to 5 branches",
          warehouses: "Up to 5 warehouses",
          suitableFor: "Large companies, Trading chains, Factories",
          bgImage: "/future2.png",
          features: [
            "Everything in Pro +",
            "All system modules",
            "ZATCA integration",
            "E-invoicing",
            "Priority support (24/7)",
            "Hourly backups",
            "Comprehensive training (20 hours)",
            "Full backup services"
          ]
        },
      ],
      choosePackage: "Choose Package",
      purchase: "Purchase",
      users: "Users & Branches",
      branches: "Branches",
      warehouses: "Warehouses",
      suitableFor: "Suitable for",
      branch: "Branch",
      warehouse: "Warehouse"
    },
    ar: {
      title: " نيكست  فيوتشر ERP",
      subtitle: "أنظمة ERP متكاملة للأعمال الحديثة تشمل الإدارة المالية، المبيعات، المخزون، إدارة علاقات العملاء (CRM)، ورؤى مدعومة بالذكاء الاصطناعي في نظام واحد.",
      packages: [
        {
          name: "الباقة الأساسية",
          price: "49",
          oldPrice: "99",
          period: "/شهراً",
          users: "مستخدم واحد + 1 مجاناً",
          branches: "فرع واحد",
          warehouses: "مخزن واحد",
          suitableFor: "شركات ناشئة، متاجر صغيرة",
          bgImage: "/future2.png",
          features: [
            "الفوترة والإيصالات",
            "منتجات وفواتير محدودة",
            "حسابات المحاسبة",
            "المخزون",
            "المبيعات والمشتريات",
            "إدارة العملاء والموردين",
            "إدارة الصلاحيات"
          ]
        },
        {
          name: "برو",
          price: "149",
          oldPrice: "299",
          period: "/شهراً",
          users: "حتى 5 مستخدمين + 1 مجاناً",
          branches: "حتى 3 فروع",
          warehouses: "حتى 3 مخازن",
          suitableFor: "شركات متوسطة، سلاسل تجزئة، مطاعم",
          bgImage: "/future2.png",
          features: [
            "منتجات وفواتير غير محدودة",
            "كل ميزات الباقة الأساسية",
            "محاسبة متقدمة وتقارير",
            "نقطة بيع (POS)",
            "لوحات بيانات مخصصة",
            "عروض جماعية",
            "تكامل الذكاء الاصطناعي",
            "مدير حساب مخصص"
          ]
        },
        {
          name: "بلس",
          price: "299",
          oldPrice: "599",
          period: "/شهراً",
          users: "حتى 10 مستخدمين + 5 مجاناً",
          branches: "حتى 5 فروع",
          warehouses: "حتى 5 مخازن",
          suitableFor: "شركات كبيرة،سلاسل تجارية،مصانع",
          bgImage: "/future2.png",
          features: [
            "كل ما في برو +",
            "جميع وحدات النظام",
            "تكامل زاتكا",
            "الفاتورة الإلكترونية",
            "دعم أولوية (24/7)",
            "نسخ احتياطي بالساعة",
            "تدريب شامل (20 ساعة)",
            "خدمات نسخ احتياطي كاملة"
          ]
        },
      ],
      choosePackage: "اختر الباقة",
      purchase: "شراء",
      users: "المستخدمون والفروع",
      branches: "الفروع",
      warehouses: "المستودعات",
      suitableFor: "مناسب لـ",
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
          font-weight: 800;
          margin: 0 0 15px 0;
          position: relative;
          display: inline-block;
          font-family: 'Cairo', sans-serif;
          text-align: center;
        }

        .title .title-main {
          color: #1a1a1a;
          font-weight: 900;
        }

        .title .title-highlight {
          color: #0e79d8;
          font-weight: 900;
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
          position: relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          text-align: left;
          height: 100%;
        }

        .erp-section[dir="rtl"] .package-card {
          direction: rtl;
          text-align: right;
        }

        .erp-section[dir="rtl"] .package-price {
          direction: rtl;
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

        .old-price {
          font-size: 1.1rem;
          color: #999;
          text-decoration: line-through;
          margin-right: 5px;
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
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid rgba(55, 157, 215, 0.1);
          font-size: 0.95rem;
          color: #444;
        }

        .meta-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 6px;
          font-weight: 600;
        }

        .meta-item span:first-child {
          opacity: 0.8;
        }

        .meta-item span:last-child {
          color: #0e79d8;
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
      `}</style>

      <section className="erp-section" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container">
          {/* Header */}
          <div className="header">
            <h1 className="title">
              {t.title.includes('ERP') ? (
                <>
                  <span className="title-main">{t.title.replace('ERP', '').trim()}</span>
                  <span className="title-highlight"> ERP</span>
                </>
              ) : (
                t.title
              )}
            </h1>
            <p className="subtitle">{t.subtitle}</p>
          </div>

          {/* Packages Grid */}
          <div className="packages-grid">
            {t.packages.map((pkg, idx) => (
              <div 
                key={idx} 
                className={`package-card ${idx === 1 ? 'popular' : ''}`}
                style={{
                  backgroundImage: `url('${pkg.bgImage}')`
                }}
              >
                <h3 className="package-name">{pkg.name}</h3>
                
                <div className="package-price">
                  {pkg.oldPrice && <span className="old-price">{pkg.oldPrice}</span>}
                  <img
                    src="/saudi_riyal.png"
                    alt="Saudi Riyal"
                    className="riyal-icon"
                  />
                  <span className="price">{pkg.price}</span>
                  <span className="price-period">{pkg.period}</span>
                </div>

                <ul className="features-list">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="feature-item">
                      <Check size={18} className="feature-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-meta">
                  <div className="meta-item">
                    <span>{t.users}</span>
                    <span>{pkg.users}</span>
                  </div>
                  <div className="meta-item">
                    <span>{t.branches}</span>
                    <span>{pkg.branches}</span>
                  </div>
                  <div className="meta-item">
                    <span>{t.warehouses}</span>
                    <span>{pkg.warehouses}</span>
                  </div>
                  <div className="meta-item">
                    <span>{t.suitableFor}</span>
                    <span>{pkg.suitableFor}</span>
                  </div>
                </div>

             

                <button 
                    className={`choose-btn ${selectedPackage === idx ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedPackage(idx);
                      window.open(
                        "https://api.whatsapp.com/send/?phone=%2B966539983393&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1+%D8%B9%D9%86+%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85&type=phone_number&app_absent=0",
                        "_blank"
                      );
                    }}
                  >
                    {t.choosePackage}
                  </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}