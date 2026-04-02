"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import { User, Users } from "lucide-react";

export default function Testimonials({ lang = "en" }) {
  const [slidesToShow, setSlidesToShow] = useState(3);

const testimonialsContent = {
  en: [
    {
      name: "Abdullah Al-Qahtani",
      gender: "male",
      quote:
        "Polite treatment and high professionalism from the very first meeting. They created a website for my project, and it turned out even better than I imagined. Honestly, it made a big difference in attracting customers.",
    },
    {
      name: "Nora Al-Shehri",
      gender: "female",
      quote:
        "What I liked most was the speed of execution and commitment to deadlines. Their team is very cooperative and understands your needs without complications. I highly recommend them.",
    },
    {
      name: "Turki Al-Otaibi",
      gender: "male",
      quote:
        "I requested mobile app development, and the result was excellent in terms of design and ease of use. Even after delivery, the technical support team followed up with me step by step.",
    },
    {
      name: "Reem Al-Ghamdi",
      gender: "female",
      quote:
        "I worked with them on an e-commerce store, and after launch, sales increased noticeably. Professional work and attention to the smallest details.",
    },
    {
      name: "Faisal Al-Dosari",
      gender: "male",
      quote:
        "The management system they created made my daily work much easier. It saved me time and effort, and everything became organized and clear. More than a wonderful experience.",
    },
    {
      name: "Hind Al-Mutairi",
      gender: "female",
      quote:
        "Their approach is flexible, and they understand the Saudi market very well. They helped improve search engine visibility and digital marketing, and the results were very satisfying.",
    },
  ],
  ar: [
    {
      name: "عبدالله القحطاني",
      gender: "male",
      quote:
        "تعامل راقي واحترافية عالية من أول اجتماع. سويت عندهم موقع إلكتروني لمشروعي وطلع بشكل أفضل مما كنت متخيل. صراحة فرق معي كثير في جذب العملاء.",
    },
    {
      name: "نورة الشهري",
      gender: "female",
      quote:
        "أكثر شيء عجبني سرعة التنفيذ والالتزام بالمواعيد. فريقهم متعاون جدًا ويفهم احتياجك بدون تعقيد. أنصح فيهم وبقوة.",
    },
    {
      name: "تركي العتيبي",
      gender: "male",
      quote:
        "طلبت تطوير تطبيق جوال، والنتيجة كانت ممتازة من ناحية التصميم وسهولة الاستخدام. حتى بعد التسليم، الدعم الفني كان متابع معي خطوة بخطوة.",
    },
    {
      name: "ريم الغامدي",
      gender: "female",
      quote:
        "اشتغلت معهم على متجر إلكتروني، والحمد لله بعد الإطلاق زادت المبيعات بشكل واضح. شغل احترافي واهتمام بأدق التفاصيل.",
    },
    {
      name: "فيصل الدوسري",
      gender: "male",
      quote:
        "نظام الإدارة اللي سووه لي سهّل شغلي اليومي بشكل كبير. وفّر علي وقت وجهد، وكل شيء صار مرتب وواضح قدامي. تجربة أكثر من رائعة.",
    },
    {
      name: "هند المطيري",
      gender: "female",
      quote:
        "تعاملهم مرن ويفهمون السوق السعودي كويس. ساعدوني في تحسين الظهور بمحركات البحث والتسويق الرقمي، والنتائج كانت مرضية جدًا.",
    },
  ],
};


  const testimonials = testimonialsContent[lang] || testimonialsContent.en;

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    rtl: lang === "ar",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rtl: lang === "ar",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rtl: lang === "ar",
        },
      },
    ],
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 992) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <section className="testimonials-section container py-5">
      <style jsx>{`
        .testimonials-section {
          direction: ${lang === "ar" ? "rtl" : "ltr"};
        }

        .testimonials-title {
          color: #0f4f8a;
          font-size: clamp(1.8rem, 2.8vw, 2.5rem);
          font-weight: 800;
          margin: 0;
          line-height: 1.25;
        }

        .testimonials-subtitle {
          color: #6f7a86;
          font-size: 1rem;
          margin-top: 8px;
        }

        .testimonial-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e7e7e7;
          border-radius: 14px;
          min-height: 175px;
          padding: 20px 18px 16px;
          box-shadow: 0 2px 10px rgba(15, 79, 138, 0.04);
        }

        .testimonial-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 10px;
        }

        .user-meta {
          text-align: ${lang === "ar" ? "right" : "left"};
        }

        .user-name {
          margin: 0;
          font-size: 1.35rem;
          font-weight: 700;
          color: #222;
          line-height: 1.1;
        }

        .rating-row {
          margin-top: 2px;
          display: flex;
          align-items: center;
          gap: 6px;
          justify-content: ${lang === "ar" ? "flex-end" : "flex-start"};
        }

        .rating-value {
          font-size: 12px;
          color: #8a8a8a;
          font-weight: 600;
        }

        .avatar-wrap {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 2px solid #0f4f8a;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f4f8a 0%, #1a6ab8 100%);
        }

        .avatar-icon {
          width: 36px;
          height: 36px;
          color: #ffffff;
          stroke: #ffffff !important;
          fill: none;
        }

        .avatar-icon path,
        .avatar-icon circle {
          stroke: #ffffff !important;
          fill: none !important;
        }

        .quote {
          margin: 0;
          color: #8f8f8f;
          font-size: 1.05rem;
          line-height: 1.65;
          text-align: ${lang === "ar" ? "right" : "left"};
        }
      `}</style>

      <div className="d-flex flex-column align-items-center text-center mb-4">
        <h2 className="testimonials-title">
          {lang === "ar"
            ? "اراء عملاء نيكست  فيوتشر"
            : "Next Future Customer Reviews"}
        </h2>
        <p className="testimonials-subtitle text-center w-md-75">
          {lang === "ar"
            ? "تجارب حقيقية من عملائنا بعد تنفيذ المشاريع معنا."
            : "Our customers love us! Read what they have to say about their experiences."}
        </p>
      </div>
      <div className="px-3 px-sm-0">
        <Slider {...settings}>
          {testimonials.map((user, index) => (
            <div className="p-2" key={index}>
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="user-meta">
                    <h3 className="user-name">{user.name}</h3>
                    <div className="rating-row">
                      <span className="rating-value">4.8</span>
                      <Rating
                        value={5}
                        readOnly
                        size="small"
                        sx={{
                          '& .MuiRating-iconFilled svg': { color: '#ffd700' },
                          '& .MuiRating-iconEmpty svg': { color: 'rgba(255, 215, 0, 0.25)' },
                        }}
                      />
                    </div>
                  </div>
                  <div className="avatar-wrap">
                    {user.gender === "female" ? (
                      <Users className="avatar-icon" style={{ color: '#ffffff', stroke: '#ffffff' }} />
                    ) : (
                      <User className="avatar-icon" style={{ color: '#ffffff', stroke: '#ffffff' }} />
                    )}
                  </div>
                </div>
                <p className="quote">{user.quote}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
