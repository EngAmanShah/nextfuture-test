"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./erp-register.module.css";
import { db } from "@/configuration/firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Translations
const translations = {
  en: {
    title: "Create account",
    home: "Home",
    ar: "عربي",
    businessName: "Business Name *",
    email: "Email Address *",
    phone: "Mobile Number *",
    vat: "VAT Number",
    industry: "Industry *",
    agree:
      "I agree to receive calls and text messages for follow-up, support and promotions.",
    termsText: "Terms & Conditions",
    privacyText: "Privacy Policy",
    getStarted: "Submit and get free demo applictions",
    processing: "Processing...",
    validationError: "⚠️ Please fill in all required fields",
    phoneError: "⚠️ Phone must start with 05 and contain exactly 10 digits",
    successTitle: "Thank you !",
    successDesc:
      "The demo file with guideline. Enjoy your NextFuture experience!",
    continueBtn: "Download Now",
    continueStarted: "✓ Downloading...",
    guidelineBtn: "📖 Click here to download the user guide ",
    haveAccount: "Have an account? Sign in",
    leftTitle: "Everything you need to manage your business in one platform!",
    leftSub1:
      "Supports over 50 different industries and more than 20 professional business management apps!",
    leftSub2: "All these features are tailored to your specific industry!",
    features: [
      "Sales",
      "Accounting",
      "CRM",
      "Branches",
      "Invoicing",
      "Inventory",
      "HRM",
      "Operations",
    ],
    agreeFull: "fellow  NextFuture Terms & Conditions and Privacy Policy",
    placeholders: {
      businessName: "Your Company Name",
      email: "name@company.com",
      phone: "050 000 0000",
      vat: "300000434710003",
      industry: "Select your industry",
    },
  },
  ar: {
    title: "إنشاء حساب",
    home: "الرئيسية",
    ar: "En",
    businessName: "اسم الشركة *",
    email: "عنوان البريد الإلكتروني *",
    phone: "رقم الهاتف المحمول *",
    vat: "  رقم ضريبة القيمة المضافة",
    industry: "الصناعة *",
    agree:
      "أوافق على استقبال مكالمات ورسائل نصية للمتابعة والدعم والعروض الترويجية.",
    termsText: "شروط الخدمة",
    privacyText: "سياسة الخصوصية",
    getStarted: "سجّل الآن واحصل على نسختك التجريبية مجاناً",
    processing: "جاري المعالجة...",
    validationError: "⚠️ يرجى ملء جميع الحقول المطلوبة",
    phoneError: "⚠️ يجب أن يبدأ الهاتف برقم 05 ويحتوي على 10 أرقام بالضبط",
    successTitle: "شكراً لك !",
    successDesc: "تم إرسال ملف  النسخة التجريبية مع دليل الاستخدام. استمتع بتجربتك مع نكست فيوتشر!",
    continueBtn: "تنزيل الآن",
    continueStarted: "✓ جاري التنزيل...",
    guidelineBtn: "📖 اضغط هنا لتنزيل دليل الاستخدام",
    haveAccount: "هل لديك حساب؟ سجل الدخول",
    leftTitle: "كل ما تحتاجه لإدارة عملك في منصة واحدة!",
    leftSub1:
      "يدعم أكثر من 50 صناعة مختلفة وأكثر من 20 تطبيق إدارة أعمال احترافي!",
    leftSub2: "جميع هذه الميزات مخصصة حسب مجال عملك!",
    features: [
      "المبيعات",
      "المحاسبة",
      "CRM",
      "الفروع",
      "الفواتير",
      "المخزون",
      "الموارد البشرية",
      "العمليات",
    ],
    agreeFull: "بالتسجيل، فإنك توافق على شروط نكست فيوتشر وسياسة الخصوصية",
    placeholders: {
      businessName: "اسم شركتك",
      email: "name@company.com",
      phone: "050 000 0000",
      vat: "300000434710003",
      industry: "اختر صناعتك",
    },
  },
};

export default function ErpRegister() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = translations[currentLang] || translations.en;

  const defaultForm = {
    businessName: "",
    email: "",
    phone: "",
    vat: "",
    industry: "",
    agree: false,
  };

  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneHasError, setPhoneHasError] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear phone error on change
    if (name === "phone") {
      setPhoneHasError(false);
    }
  };

  const handlePhoneBlur = (e) => {
    const { value } = e.target;
    if (value.trim() !== "" && !isValidPhone(value)) {
      setPhoneHasError(true);
    } else {
      setPhoneHasError(false);
    }
  };

  const isValidPhone = (phone) => {
    // Remove spaces and check if it starts with 05 and has exactly 10 digits
    const cleanedPhone = phone.replace(/\s/g, "");
    return /^05\d{8}$/.test(cleanedPhone);
  };

  const isFormValid = () => {
    return (
      form.businessName.trim() !== "" &&
      form.email.trim() !== "" &&
      isValidPhone(form.phone) &&
      form.industry.trim() !== "" &&
      form.agree === true
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if phone is invalid
    if (form.phone.trim() !== "" && !isValidPhone(form.phone)) {
      setErrorMessage(t.phoneError);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    
    if (!isFormValid()) {
      setErrorMessage(t.validationError);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    setLoading(true);

    try {
      const collectionRef = collection(db, "erpDownloads");
      const docRef = await addDoc(collectionRef, {
        name: form.businessName,
        email: form.email,
        phone: form.phone,
        company: form.businessName,
        vat: form.vat,
        industry: form.industry,
        timestamp: serverTimestamp(),
      });

      console.log("Download lead saved successfully with ID:", docRef.id);
      
      // Trigger file download
      const downloadUrl = "https://test.tilalr.com/demo.exe";
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "demo.exe";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error("Error saving download lead:", error);
      setLoading(false);
      setSuccess(true);
    }
  };

  const handleStartDownload = () => {
    setDownloadStarted(true);
    const downloadUrl = "https://test.tilalr.com/demo.exe";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "demo.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setForm(defaultForm);
      setSuccess(false);
      setDownloadStarted(false);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      {/* small back button */}
      <button className={styles.backBtn} onClick={() => router.back()}>
        ← {currentLang === "ar" ? "عودة" : "Back"}
      </button>
      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          <Link href={`/${currentLang}`} style={{ display: "inline-block" }}>
            <img
              src="/logo.png"
              alt="NextFuture"
              style={{
                width: "320px",
                height: "auto",
                marginTop: "18px",
                padding: "28px 16px",
                margin: "4px",
                borderRadius: "4px",
                objectFit: "contain",
              }}
            />
          </Link>

          <h2 className={styles.leftTitle}>{t.leftTitle}</h2>
          <h1 className={styles.leftSub}>{t.leftSub1}</h1>

          <h1 className={styles.leftSub}>{t.leftSub2}</h1>

          <div className={styles.featureGrid}>
            {t.features.slice(0, 4).map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureIcon}>▶</span>
                <span className={styles.featureName}>{feature}</span>
              </div>
            ))}
            {t.features.slice(4, 8).map((feature, i) => (
              <div key={i + 4} className={styles.featureItem}>
                <span className={styles.featureIcon}>▶</span>
                <span className={styles.featureName}>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Form */}
        <div className={styles.rightColumn}>
          {!success ? (
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} noValidate>
                {showError && (
                  <div className={styles.errorBox}>{errorMessage || t.validationError}</div>
                )}

                <div className={styles.formStack}>
                  {/* Business Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="businessName">{t.businessName}</label>
                    <input
                      ref={nameInputRef}
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder={t.placeholders.businessName}
                      value={form.businessName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email">{t.email}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t.placeholders.email}
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">{t.phone}</label>
                    <div className={`${styles.phoneInput} ${phoneHasError ? styles.phoneInputError : ""}`}>
                      {/* <span className={styles.countryCode}></span> */}
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={t.placeholders.phone}
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handlePhoneBlur}
                        required
                      />
                    </div>
                  </div>

                  {/* VAT Number */}
                  <div className={styles.formGroup}>
                    <label htmlFor="vat">{t.vat}</label>
                    <input
                      id="vat"
                      name="vat"
                      type="text"
                      placeholder={t.placeholders.vat}
                      value={form.vat}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Industry */}
                  <div className={styles.formGroup}>
                    <label htmlFor="industry">{t.industry}</label>
                    <select
                      id="industry"
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t.placeholders.industry}</option>
                      {currentLang === "ar" ? (
                        <>
                          <option value="Retail">التجزئة</option>
                          <option value="Manufacturing">التصنيع</option>
                          <option value="Services">الخدمات</option>
                          <option value="Healthcare">الرعاية الصحية</option>
                          <option value="Education">التعليم</option>
                          <option value="Hospitality">الضيافة</option>
                          <option value="Technology">التكنولوجيا</option>
                          <option value="Finance">المالية</option>
                          <option value="Other">أخرى</option>
                        </>
                      ) : (
                        <>
                          <option value="Retail">Retail</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Services">Services</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Education">Education</option>
                          <option value="Hospitality">Hospitality</option>
                          <option value="Technology">Technology</option>
                          <option value="Finance">Finance</option>
                          <option value="Other">Other</option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* Checkbox */}
                  <div className={styles.checkboxGroup}>
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="agree">{t.agree}</label>
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className={styles.spinner} /> {t.processing}
                    </>
                  ) : (
                    t.getStarted
                  )}
                </button>
              </form>

              <p className={styles.agreeFull}>{t.agreeFull}</p>
              {/* <p className={styles.signInLink}>{t.haveAccount}</p> */}
            </div>
          ) : (
            <div className={styles.successContainer}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>{t.successTitle}</h2>
              <p className={styles.successDesc}>{t.successDesc}</p>
              {/* <button
                onClick={handleStartDownload}
                // className={styles.submitBtn}
                disabled={downloadStarted}
              >
                {downloadStarted ? t.continueStarted : t.continueBtn}
              </button> */}
              <a
                href="https://drive.google.com/file/d/19uvn1whb8he2_w1adjmnc4ED_iucg7e7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  padding: "0.85rem 1rem",
                  background: "linear-gradient(135deg, #0b66ff 0%, #0052cc 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontFamily: "'Cairo', sans-serif",
                  fontWeight: "600",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  boxShadow: "0 6px 20px rgba(11, 102, 255, 0.35)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 12px 35px rgba(11, 102, 255, 0.45)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 6px 20px rgba(11, 102, 255, 0.35)";
                }}
              >
                {t.guidelineBtn}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
