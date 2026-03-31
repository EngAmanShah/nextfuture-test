"use client";

import { useState } from "react";
import { db } from "@/configuration/firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactUsClient({ lang }) {
  const isArabic = lang === "ar";
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const content = {
    en: {
      title: "Contact Us",
      subtitle:
        "Don't hesitate to contact us if you have any question, suggestion, or need support. Our team is ready to assist you and provide the necessary help.",
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={24} color="#2c7de0" />,
          label: "Address",
          value: "6931 King Fahd Road Branch, Al Rabwah District, Jeddah 21532",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.783607085108!2d39.15792746524167!3d21.587874536345584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d16f01439ecd%3A0xdf829b7e2fc0739c!2z2YbZitmD2LPYqiDZgdmK2YjYqti02LEg2YTZhNiq2YLZhtmK2KkgTmV4dCBGdXR1cmU!5e1!3m2!1sen!2ssa!4v1771139606478!5m2!1sen!2ssa",
        },
        {
          icon: <FaPhoneAlt size={24} color="#2c7de0" />,
          label: "Phone",
          value: "+966 38995 393",
          link: "tel:+966539983393",
        },
        {
          icon: <FaEnvelope size={24} color="#2c7de0" />,
          label: "Email",
          value: "info@nextfuture.com",
          link: "mailto:info@nextfuture.com",
        },
      ],
    },
    ar: {
      title: "تواصل معنا",
      subtitle:
        "لا تتردد في التواصل معنا في حال كان لديك أي استفسار، اقتراح. أو بحاجة إلى دعم، فريقنا جاهز لمساعدتك وتقديم الدعم اللازم.",
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={24} color="#2c7de0" />,
          label: "العنوان",
          value: "6931 طريق الملك فهد فرعي، حي الربوة، جدة 21532",
          iframe:
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10646.783607085108!2d39.15792746524167!3d21.587874536345584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d16f01439ecd%3A0xdf829b7e2fc0739c!2z2YbZitmD2LPYqiDZgdmK2YjYqti02LEg2YTZhNiq2YLZhtmK2KkgTmV4dCBGdXR1cmU!5e1!3m2!1sen!2ssa!4v1771139606478!5m2!1sen!2ssa",
        },
        {
          icon: <FaPhoneAlt size={24} color="#2c7de0" />,
          label: "الهاتف",
          value: "966539983393",
          link: "tel:+966539983393",
        },
        {
          icon: <FaEnvelope size={24} color="#2c7de0" />,
          label: "البريد الإلكتروني",
          value: "info@nextfuture.com",
          link: "mailto:info@nextfuture.com",
        },
      ],
    },
  };

  const { title, subtitle, contactInfo } = content[lang] || content.en;

  const formText = {
    en: {
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      phonePlaceholder: "Phone Number",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Message, suggestion, inquiry in detail",
      send: "Send",
      clear: "Clear Data",
      success: "Message sent successfully.",
      error: "Failed to send message. Please try again.",
      sending: "Sending...",
    },
    ar: {
      namePlaceholder: "الاسم",
      emailPlaceholder: "البريد الالكتروني",
      phonePlaceholder: "رقم الهاتف",
      subjectPlaceholder: "الموضوع",
      messagePlaceholder: "الرسالة، الاقتراح، الاستفسار بالتفصيل",
      send: "إرسال",
      clear: "حذف البيانات",
      success: "تم إرسال الرسالة بنجاح.",
      error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      sending: "جاري الإرسال...",
    },
  };

  const tForm = formText[lang] || formText.en;

  const dataChange = (e) => {
    const { name, value } = e.target;
    if (/^\s+$/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const collectionRef = collection(db, "contacts");
      await addDoc(collectionRef, {
        ...formData,
        timestamp: serverTimestamp(),
        read: false,
      });
      toast.success(tForm.success);
      handleClear();
    } catch (error) {
      console.log("Failed to send message", error);
      toast.error(tForm.error);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.85rem 1rem",
    background: "#f0f2f5",
    border: "none",
    borderRadius: "8px",
    fontSize: "0.95rem",
    color: "#333",
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box",
    textAlign: isArabic ? "right" : "left",
  };

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      style={{ fontFamily: "'Tajawal', 'Segoe UI', sans-serif", background: "#fff" }}
    >
      {/* Top strip to appear behind transparent header */}
      <div
        style={{
          height: "75px",
          background: "linear-gradient(135deg, #1a4fa0 0%, #2c7de0 100%)",
        }}
      />

      {/* ═══════════════════════════════════════════
          TOP SPLIT SECTION: form (left) + brand (right)
      ════════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 768px) {
          .contact-section {
            display: grid !important;
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .contact-form-panel {
            order: 1;
            padding: 2rem 1.5rem 2rem !important;
          }
          .contact-brand-panel {
            order: 2;
            min-height: 300px;
          }
        }
        @media (max-width: 480px) {
          .contact-form-panel {
            padding: 1.5rem 1rem 1.5rem !important;
          }
          .contact-brand-panel {
            min-height: 250px;
          }
        }
      `}</style>
      <section
        className="contact-section"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 390px",
          minHeight: "560px",
          background: "#fff",
        }}
      >
        {/* ── Left: form panel ── */}
        <div
          className="contact-form-panel"
          style={{
            padding: "3rem 3rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "#1a4fa0",
              margin: "0 0 0.6rem",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: 1.75,
              margin: "0 0 1.75rem",
              maxWidth: "520px",
              textAlign: isArabic ? "right" : "left",
            }}
          >
            {subtitle}
          </p>

          <form
            onSubmit={handleSubmit}
            dir={isArabic ? "rtl" : "ltr"}
            style={{ display: "flex", flexDirection: "column", gap: "0.85rem", width: "100%" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={dataChange}
                placeholder={tForm.namePlaceholder}
                required
                style={inputStyle}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={dataChange}
                placeholder={tForm.emailPlaceholder}
                required
                style={inputStyle}
              />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={dataChange}
                placeholder={tForm.phonePlaceholder}
                style={inputStyle}
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={dataChange}
                placeholder={tForm.subjectPlaceholder}
                style={inputStyle}
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={dataChange}
              rows={6}
              placeholder={tForm.messagePlaceholder}
              required
              style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem" }}>
              <button
                type="button"
                onClick={handleClear}
                style={{
                  background: "#f0f2f5",
                  color: "#444",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.9rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {tForm.clear}
              </button>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "#1a4fa0",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.9rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: loading ? "not-allowed" : "pointer",
                  fontFamily: "inherit",
                  opacity: loading ? 0.75 : 1,
                }}
              >
                {loading ? tForm.sending : tForm.send}
              </button>
            </div>
          </form>
        </div>

        {/* ── Right: branded blue panel ── */}
        <div
          className="contact-brand-panel"
          style={{
            position: "relative",
            background: "#2c7de0",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Decorative background image (future2.png) */}
          <img
            src="/future2.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.18,
              pointerEvents: "none",
            }}
          />

          {/* Brand content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <img
              src="/logo.png"
              alt="Next Future Tech"
              style={{
                height: "60px",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                marginBottom: "0.75rem",
                display: "block",
                margin: "0 auto 0.5rem",
              }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                fontSize: "0.9rem",
                margin: "0 0 0.2rem",
                direction: "rtl",
              }}
            >
              نيكست فيوتشر للتقنية
            </p>
            <p
              style={{
                color: "#fff",
                fontSize: "1.2rem",
                fontWeight: "700",
                margin: 0,
                letterSpacing: "0.4px",
              }}
            >
              Next Future Tech
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT INFO CARDS SECTION
      ════════════════════════════════════════════ */}
      <style>{`
        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .contact-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        @media (max-width: 480px) {
          .contact-cards-grid {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
        }
      `}</style>
      <section style={{ background: "#f5f7fa", padding: "3rem 2rem" }}>
        {/* Three info cards */}
        <div
          className="contact-cards-grid"
          style={{
            maxWidth: "1080px",
            margin: "0 auto 2.5rem",
          }}
        >
          {contactInfo.map((info, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "1.5rem 1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                flexDirection: "row",
              }}
            >
              {/* Text - appears first in LTR, pushed to left/center */}
              <div style={{ textAlign: isArabic ? "right" : "left", flex: 1 }}>
                <p
                  style={{
                    margin: "0 0 0.2rem",
                    fontWeight: "700",
                    fontSize: "1rem",
                    color: "#1a1a2e",
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {info.label}
                </p>
                {info.link ? (
                  <a
                    href={info.link}
                    style={{
                      fontSize: "0.88rem",
                      color: "#555",
                      textDecoration: "none",
                      display: "block",
                      textAlign: isArabic ? "right" : "left",
                    }}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p style={{ margin: 0, fontSize: "0.88rem", color: "#555", lineHeight: 1.5, textAlign: isArabic ? "right" : "left" }}>
                    {info.value}
                  </p>
                )}
              </div>

              {/* Icon circle - pushed to right in RTL */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "#eef4fc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginLeft: isArabic ? "auto" : "0",
                }}
              >
                {info.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div
          style={{
            maxWidth: "1080px",
            margin: "0 auto",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <iframe
            src={contactInfo[0].iframe}
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="location map"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHATSAPP FAB
      ════════════════════════════════════════════ */}
     
    </div>
  );
}