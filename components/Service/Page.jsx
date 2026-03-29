"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaServer, 
  FaDatabase,
  FaCogs,
  FaShoppingCart,
  FaChartLine
} from "react-icons/fa";
import { 
  HiOutlineSpeakerphone 
} from "react-icons/hi";
import { 
  MdOutlineBrush,
  MdOutlinePhoneIphone,
  MdBusinessCenter,
  MdCloudQueue
} from "react-icons/md";
import { 
  SiOdoo 
} from "react-icons/si";
import Skills from "@/components/Skills/Skills";

export default function Page({ params }) {
  const { lang } = React.use(params);

 const translations = {
    en: {
      heroTitle: "Our Services",
      explore: "Explore Services",
      learnMore: "Learn More",
      services: [
        {
          title: "Web Design & Development",
          description: "Build scalable and responsive websites tailored to your business needs.",
          link: "/service/webdev",
          icon: <FaLaptopCode size={40} color="#fff" />
        },
        {
          title: "Mobile App Development",
          description: "Create intuitive and engaging mobile applications for iOS and Android platforms.",
          link: "/service/mobile-app",
          icon: <FaMobileAlt size={40} color="#fff" />
        },
    
        {
          title: "IT Solutions",
          description: "Implement robust IT infrastructure and solutions for seamless business operations.",
          link: "/service/itsolutions",
          icon: <FaServer size={40} color="#fff" />
        },
        {
          title: "ERP Solutions",
          description: "Comprehensive Enterprise Resource Planning systems to streamline your business operations.",
          link: "/service/erp",
          icon: <FaDatabase size={40} color="#fff" />
        },

            {
          title: "Digital Marketing",
          description: "Boost your online presence with SEO, social media, PPC, and content strategies.",
          link: "/service/digital-marketing",
          icon: <HiOutlineSpeakerphone size={40} color="#fff" />
        },
        {
          title: "Graphic Design",
          description: "Design compelling visuals for web, print, and digital platforms to capture attention.",
          link: "/service/graphic-design",
          icon: <MdOutlineBrush size={40} color="#fff" />
        },
        {
          title: "E-Commerce Solutions",
          description: "Build powerful online stores with secure payment gateways and inventory management.",
          link: "/service/ecommerce",
          icon: <FaShoppingCart size={40} color="#fff" />
        },
   
        {
          title: "Cloud Services",
          description: "Scalable cloud infrastructure and migration services for modern businesses.",
          link: "/service/cloud-services",
          icon: <MdCloudQueue size={40} color="#fff" />
        },
      ],
    },
    ar: {
      heroTitle: "خدماتنا",
      explore: "استكشف الخدمات",
      learnMore: "المزيد من التفاصيل",
      services: [
        {
          title: "تصميم وتطوير المواقع الإلكترونية",
          description: "بناء مواقع إلكترونية قابلة للتوسع والتكيف مصممة خصيصًا لاحتياجات عملك.",
          link: "/service/webdev",
          icon: <FaLaptopCode size={40} color="#fff" />
        },
        {
          title: "تطوير التطبيقات الجوالة",
          description: "إنشاء تطبيقات جوالة بديهية وجذابة لمنصات iOS و Android.",
          link: "/service/mobile-app",
          icon: <FaMobileAlt size={40} color="#fff" />
        },
   
        {
          title: "حلول تكنولوجيا المعلومات",
          description: "تنفيذ بنية تحتية وحلول تكنولوجيا معلومات قوية لتشغيل أعمال سلس.",
          link: "/service/itsolutions",
          icon: <FaServer size={40} color="#fff" />
        },
        {
          title: "حلول تخطيط موارد المؤسسات",
          description: "أنظمة تخطيط موارد المؤسسات الشاملة لتبسيط عمليات عملك.",
          link: "/service/erp",
          icon: <FaDatabase size={40} color="#fff" />
        },

             {
          title: "التسويق الرقمي",
          description: "عزز وجودك على الإنترنت باستخدام استراتيجيات تحسين محركات البحث ووسائل التواصل الاجتماعي والإعلان المدفوع والمحتوى.",
          link: "/service/digital-marketing",
          icon: <HiOutlineSpeakerphone size={40} color="#fff" />
        },
        {
          title: "التصميم الجرافيكي",
          description: "تصميم مرئيات مؤثرة للويب والطباعة والمنصات الرقمية لجذب الانتباه.",
          link: "/service/graphic-design",
          icon: <MdOutlineBrush size={40} color="#fff" />
        },
        {
          title: "حلول التجارة الإلكترونية",
          description: "بناء متاجر إلكترونية قوية مع بوابات دفع آمنة وأنظمة إدارة المخزون.",
          link: "/service/ecommerce",
          icon: <FaShoppingCart size={40} color="#fff" />
        },
     
        {
          title: "خدمات الحوسبة السحابية",
          description: "بنية تحتية سحابية قابلة للتوسع وخدمات نقل للشركات الحديثة.",
          link: "/service/cloud-services",
          icon: <MdCloudQueue size={40} color="#fff" />
        },
      ],
    },
  };

  const t = translations[lang];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -15,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className={`position-relative overflow-hidden ${lang === "ar" ? "text-end" : "text-start"}`} dir={lang === "ar" ? "rtl" : "ltr"}>
      {/* Services Section with Background Image */}
      <div 
        className="position-relative py-5"
        style={{ 
          backgroundImage: "url('/bg6.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Overlay for better readability */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ 
            backgroundColor: "rgba(13, 31, 76, 0.9)",
            zIndex: 0 
          }}
        ></div>
        
        <div className="container position-relative py-5" style={{ zIndex: 1 }}>
          <motion.h2 
            className="text-center mb-5 fw-bold text-white display-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.heroTitle}
          </motion.h2>
          
          <div className="row g-4">
            {t.services.map((service, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={index}>
                <motion.div 
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card h-100 p-4 text-center border-0 rounded-4 service-card position-relative overflow-hidden"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)"
                  }}
                >
                  {/* Hover Effect Background */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 service-hover-bg"
                    style={{
                      background: "linear-gradient(135deg, rgb(10, 181, 238), rgb(10, 229, 237))",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      zIndex: 0
                    }}
                  ></div>
                  
                  <div className="position-relative" style={{ zIndex: 1 }}>
                    <motion.div 
                      className="mb-3 p-4 rounded-circle mx-auto d-flex justify-content-center align-items-center service-icon"
                      style={{ 
                        background: "linear-gradient(135deg, #3490e7, #3db5ff)",
                        width: "100px",
                        height: "100px"
                      }}
                      variants={iconVariants}
                    >
                      {service.icon}
                    </motion.div>
                    
                    <h5 className="fw-bold mb-3" style={{ minHeight: "3rem" }}>
                      {service.title}
                    </h5>
                    
                    <p className="mb-4" style={{ minHeight: "4rem", lineHeight: "1.6" }}>
                      {service.description}
                    </p>
                    
                  
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Skills lang={lang} />

      <style jsx global>{`
        .service-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .service-card:hover .service-hover-bg {
          opacity: 1 !important;
        }
        
        .service-icon {
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.4) !important;
        }
        
        /* Glow effect on hover */
        .service-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 0.5rem;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover::before {
          opacity: 1;
          animation: glow 2s linear infinite;
        }
        
        @keyframes glow {
          0% {
            filter: blur(5px);
            opacity: 0.7;
          }
          50% {
            filter: blur(10px);
            opacity: 1;
          }
          100% {
            filter: blur(5px);
            opacity: 0.7;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .service-card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}