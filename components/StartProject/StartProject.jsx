"use client";

import { motion } from "framer-motion";
import { Rocket, Lightbulb } from "lucide-react";

export default function StartProject({ lang }) {
  return (
    <section
      className="position-relative py-5 text-center"
      style={{ minHeight: "70vh", backgroundColor: "#ffffff" }}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container d-flex flex-column align-items-center justify-content-center h-100">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            className="fw-bold display-3 mb-4"
            style={{ color: "#0d1f4c" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {lang === "ar"
              ? "هل أنت مستعد للارتقاء بعملك إلى المستوى التالي؟"
              : "Ready to take your business to the next level?"}
          </motion.h1>

          <motion.p
            className="lead mx-auto mt-3 mb-5"
            style={{ 
              maxWidth: "700px",
              color: "#666"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {lang === "ar"
              ? "دعنا نساعدك في بناء هويتك الرقمية وتطوير مواقع وتطبيقات تلبي احتياجات عملك وتحقق أهدافك التسويقية."
              : "Let us help you build your digital identity and develop websites and apps that meet your business needs and achieve your marketing goals."}
          </motion.p>

          <motion.div
            className="d-flex flex-column flex-sm-row justify-content-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <a
              href={lang === "ar" ? "/ar/contact-us" : "/en/contact-us"}
              className="btn btn-primary btn-lg d-flex align-items-center gap-2 px-4 py-3 shadow"
              style={{ 
                background: "linear-gradient(135deg, #1277cf, #379DD7)",
                border: "none"
              }}
            >
              {lang === "ar" ? "ابدأ مشروعك الآن" : "Start your project now"}{" "}
              <Rocket size={20} />
            </a>
            <a
              href={lang === "ar" ? "/ar/service" : "/en/service"}
              className="btn btn-outline-primary btn-lg d-flex align-items-center gap-2 px-4 py-3"
              style={{ 
                color: "#1277cf",
                borderColor: "#1277cf"
              }}
            >
              <Lightbulb size={20} />{" "}
              {lang === "ar" ? "استكشف خدماتنا" : "Explore Our Services"}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}