"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = {
  ar: [
    {
      question: "ما هي نيكست  فيوتشر ؟",
      answer:
        "نيكست  فيوتشر هي منصة ERP متكاملة مصممة للأعمال الحديثة، تجمع بين الإدارة المالية، والمبيعات، والمخزون، وإدارة علاقات العملاء، ورؤى مدعومة بالذكاء الاصطناعي في نظام واحد متكامل.",
    },
    {
      question: "لمن تم تصميم نيكست  فيوتشر ؟",
      answer:
        "تم تصميم نيكست  فيوتشر للشركات الناشئة والمؤسسات الصغيرة والمتوسطة والشركات الكبيرة التي ترغب في تحسين كفاءة العمليات وإدارة أعمالها من منصة واحدة.",
    },
    {
      question: "ما هي المميزات التي تقدمها نيكست  فيوتشر؟",
      answer:
        "تقدم نيكست  فيوتشر إدارة مالية متكاملة، وتتبع المبيعات، وإدارة المخزون، ونظام CRM، ولوحات تقارير تحليلية، ورؤى ذكية مدعومة بالذكاء الاصطناعي.",
    },
    {
      question: "هل يمكن تخصيص نيكست  فيوتشر حسب احتياجات الشركة؟",
      answer:
        "نعم، يمكن تخصيص نيكست  فيوتشر ليتناسب مع طبيعة عمل شركتك ومتطلباتك التشغيلية.",
    },
    {
      question: "هل تقدمون دعمًا بعد التنفيذ؟",
      answer:
        "نعم، نقدم دعمًا فنيًا مستمرًا وتحديثات وصيانة لضمان عمل النظام بكفاءة وأمان.",
    },
    {
      question: "هل نيكست  فيوتشر نظام سحابي؟",
      answer:
        "نعم، نيكست  فيوتشر متاح كنظام سحابي آمن يتيح لك الوصول إلى بيانات عملك في أي وقت ومن أي مكان.",
    },
    {
      question: "كيف يمكنني البدء باستخدام نيكست  فيوتشر؟",
      answer:
        "يمكنك التواصل معنا عبر الموقع الإلكتروني لحجز عرض توضيحي ومناقشة كيفية استفادة عملك من نيكست  فيوتشر.",
    },
  ],
  en: [
    {
      question: "What is NextFuture?",
      answer:
        "NextFuture is an all-in-one ERP platform built for modern businesses. It combines finance, sales, inventory, CRM, and AI-powered insights into one seamless and integrated system.",
    },
    {
      question: "Who is NextFuture designed for?",
      answer:
        "NextFuture is designed for startups, SMEs, and enterprises that want to streamline operations, improve efficiency, and manage their entire business from a single platform.",
    },
    {
      question: "What features does NextFuture offer?",
      answer:
        "NextFuture offers financial management, sales tracking, inventory control, CRM, reporting dashboards, and AI-powered business insights.",
    },
    {
      question: "Can NextFuture be customized?",
      answer:
        "Yes, NextFuture is flexible and can be customized to match your company's specific workflows and business requirements.",
    },
    {
      question: "Do you provide support after implementation?",
      answer:
        "Yes, we provide ongoing technical support, updates, and maintenance to ensure smooth and secure system performance.",
    },
    {
      question: "Is NextFuture cloud-based?",
      answer:
        "Yes, NextFuture is available as a secure cloud-based solution, allowing you to access your business data anytime and anywhere.",
    },
    {
      question: "How can I get started with NextFuture?",
      answer:
        "You can contact our team through the website to schedule a demo and discuss how NextFuture can fit your business needs.",
    },
  ],
};

const content = {
  ar: {
    heading: "الأسئلة المتكررة",
    subtitle: "كل ما تحتاج لمعرفته تجد إجابته هنا",
  },
  en: {
    heading: "Frequently Asked Questions",
    subtitle: "Everything you need to know, answered here.",
  },
};

export default function HomeFAQ({ lang = "ar" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const isRTL = lang === "ar";
  const items = faqs[lang] || faqs.ar;
  const t = content[lang] || content.ar;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" dir={isRTL ? "rtl" : "ltr"}>
      <div className="faq-inner">
        <div className="faq-header">
          <h2 className="faq-title">{t.heading}</h2>
          <p className="faq-subtitle">{t.subtitle}</p>
        </div>

        <div className="faq-list">
          {items.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? " open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="faq-q-text">{item.question}</span>
                <span className="faq-icon">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-footer">
          {/* <Link href={`/${lang}/faq`} className="faq-more-btn">
            {lang === "ar" ? "عرض جميع الأسئلة" : "View All FAQs"}
          </Link> */}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          position: relative;
          padding: 4rem 1.5rem;
          background: #f8fafc;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8d8f0' fill-opacity='0.35'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .faq-inner {
          max-width: 820px;
          margin: 0 auto;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .faq-title {
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          font-weight: 800;
          color: #111827;
          margin: 0 0 0.5rem;
        }

        .faq-subtitle {
          font-size: 0.95rem;
          color: #6b7280;
          margin: 0;
        }

        .faq-footer {
          text-align: center;
          margin-top: 2rem;
        }

        .faq-more-btn {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #2563eb;
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .faq-more-btn:hover {
          background: #1d4ed8;
          transform: translateY(-2px);
          color: #fff;
          text-decoration: none;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          transition: box-shadow 0.2s ease;
        }

        .faq-item:hover {
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
        }

        .faq-item.open {
          border-color: #2563eb;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.4rem;
          background: none;
          border: none;
          cursor: pointer;
          gap: 1rem;
          text-align: ${isRTL ? "right" : "left"};
        }

        .faq-q-text {
          font-size: 1rem;
          font-weight: 600;
          color: #1a1a2e;
          line-height: 1.5;
          flex: 1;
        }

        .faq-icon {
          font-size: 1.6rem;
          font-weight: 700;
          color: #2563eb;
          line-height: 1;
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .faq-item.open .faq-icon {
          color: #2563eb;
        }

        .faq-answer {
          padding: 0 1.4rem 1.1rem;
          border-top: 1px solid #e5e7eb;
        }

        .faq-answer p {
          margin: 0.75rem 0 0;
          font-size: 0.95rem;
          color: #374151;
          line-height: 1.75;
        }

        @media (max-width: 640px) {
          .faq-section {
            padding: 2.5rem 1rem;
          }

          .faq-q-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
