"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { db } from "@/configuration/firebase-config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const translations = {
  en: {
    title: "Checkout & Payment",
    subtitle: "Enter your details and payment info",
    planLabel: "Selected plan",
    amountLabel: "Amount",
    payButton: "Pay now (Test)",
    processing: "Processing payment...",
    success: "Payment successful!",
    download: "Download your demo file",
    back: "Back to plans",
    note:
      "This is a test payment flow. No real card is charged. Your information will be stored securely.",
    gateway: "Maysor Test Checkout",
    fullName: "Full Name *",
    email: "Email Address *",
    phone: "Phone Number *",
    company: "Company Name *",
    cardNumber: "Card Number (Test: use any 15+ digits)",
    cardExpiry: "MM/YY *",
    cardCVV: "CVV *",
    validationError: "⚠️ Please fill in all required fields",
  },
  ar: {
    title: "الدفع والتحقق",
    subtitle: "أدخل بيانات الدفع الخاصة بك",
    planLabel: "الخطة المختارة",
    amountLabel: "المبلغ",
    payButton: "الدفع الآن (تجريبي)",
    processing: "جارٍ معالجة الدفع...",
    success: "تم الدفع بنجاح!",
    download: "قم بتنزيل ملف العرض التجريبي",
    back: "العودة إلى الخطط",
    note:
      "هذه تجربة دفع تجريبية. لن يتم تحصيل أي مبلغ فعلي. سيتم حفظ معلوماتك بأمان.",
    gateway: "بوابة مايسور (تجريبي)",
    fullName: "الاسم كاملاً *",
    email: "عنوان البريد الإلكتروني *",
    phone: "رقم الهاتف *",
    company: "اسم الشركة *",
    cardNumber: "رقم البطاقة (تجريبي: استخدم أي 15+ أرقام)",
    cardExpiry: "MM/YY *",
    cardCVV: "CVV *",
    validationError: "⚠️ يرجى ملء جميع الحقول المطلوبة",
  },
};

export default function PaymentPage() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = translations[currentLang] || translations.en;

  const plan = useMemo(() => searchParams.get("plan") || "", [searchParams]);
  const price = useMemo(() => searchParams.get("price") || "", [searchParams]);
  const currency = "﷼";

  const [status, setStatus] = useState("ready"); // ready, processing, success
  const [downloaded, setDownloaded] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const downloadUrl = "https://test.tilalr.com/demo.exe";

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number: add spaces after every 4 digits
    if (name === "cardNumber") {
      formattedValue = value
        .replace(/\s/g, "") // Remove existing spaces
        .replace(/(\d{4})/g, "$1 ") // Add space after every 4 digits
        .trim(); // Remove trailing space
    }

    // Format card expiry: MM/YY format
    if (name === "cardExpiry") {
      formattedValue = value
        .replace(/\D/g, "") // Remove non-digits
        .slice(0, 4); // Max 4 digits
      if (formattedValue.length > 2) {
        formattedValue = formattedValue.slice(0, 2) + "/" + formattedValue.slice(2);
      }
    }

    // Format CVV: only digits, max 4
    if (name === "cardCVV") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.company.trim() !== "" &&
      formData.cardNumber.trim() !== "" &&
      formData.cardExpiry.trim() !== "" &&
      formData.cardCVV.trim() !== ""
    );
  };

  const handlePay = async () => {
    if (status !== "ready") return;

    if (!isFormValid()) {
      setErrorMessage(t.validationError);
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }

    setStatus("processing");

    try {
      // Save payment data to Firebase
      const collectionRef = collection(db, "paidClients");
      const docRef = await addDoc(collectionRef, {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        plan: plan || "",
        amount: price || "",
        currency: currency,
        cardLastFour: formData.cardNumber.slice(-4),
        paymentDate: serverTimestamp(),
        status: "completed",
        language: currentLang,
      });

      console.log("Payment record saved with ID:", docRef.id);

      // Simulate payment processing
      setTimeout(() => {
        setStatus("success");
        triggerDownload();
      }, 1400);
    } catch (error) {
      console.error("Error saving payment:", error);
      setErrorMessage("Error processing payment. Please try again.");
      setShowError(true);
      setStatus("ready");
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const triggerDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "NextFuture-Demo.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  const handleBack = () => {
    router.push(`/${currentLang}`);
  };

  useEffect(() => {
    // If the user lands here without a plan, redirect to home where pricing lives
    if (!plan) {
      router.replace(`/${currentLang}`);
    }
  }, [plan, router, currentLang]);

  return (
    <div style={{ padding: "3rem 1.5rem", maxWidth: 960, margin: "0 auto", direction: currentLang === "ar" ? "rtl" : "ltr" }}>
      <button
        onClick={handleBack}
        style={{
          border: "none",
          background: "transparent",
          color: "#0053c7",
          cursor: "pointer",
          marginBottom: 24,
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        ← {t.back}
      </button>

      {showError && (
        <div
          style={{
            marginBottom: 20,
            padding: 14,
            borderRadius: 10,
            background: "rgba(220, 53, 69, 0.1)",
            border: "1px solid rgba(220, 53, 69, 0.3)",
            color: "#843534",
            fontSize: 14,
          }}
        >
          {errorMessage}
        </div>
      )}

      <div
        style={{
          borderRadius: 18,
          border: "1px solid rgba(0,0,0,0.08)",
          padding: 32,
          boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
          background: "white",
        }}
      >
        <h1 style={{ margin: 0, fontSize: 32 }}>{t.title}</h1>
        <p style={{ marginTop: 10, color: "rgba(0,0,0,0.7)" }}>{t.subtitle}</p>

        {/* Order Summary */}
        <div
          style={{
            marginTop: 28,
            padding: 20,
            borderRadius: 14,
            background: "rgba(0, 83, 199, 0.05)",
            border: "1px solid rgba(0, 83, 199, 0.15)",
            marginBottom: 28,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, color: "#00347a" }}>
            {t.gateway}
          </div>
          <div style={{ marginTop: 12, display: "flex", gap: 32, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)" }}>{t.planLabel}</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{plan || "—"}</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)" }}>{t.amountLabel}</div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>
                {currency} {price || "0"}
              </div>
            </div>
          </div>
        </div>

        {status !== "success" ? (
          <>
            {/* Customer Info Section */}
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
                {currentLang === "en" ? "Your Information" : "معلوماتك"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <input
                  type="text"
                  name="fullName"
                  placeholder={t.fullName}
                  value={formData.fullName}
                  onChange={handleFormChange}
                  disabled={status === "processing"}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: 14,
                    fontFamily: "inherit",
                    disabled: "rgba(0,0,0,0.05)",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t.email}
                  value={formData.email}
                  onChange={handleFormChange}
                  disabled={status === "processing"}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder={t.phone}
                  value={formData.phone}
                  onChange={handleFormChange}
                  disabled={status === "processing"}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                />
                <input
                  type="text"
                  name="company"
                  placeholder={t.company}
                  value={formData.company}
                  onChange={handleFormChange}
                  disabled={status === "processing"}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: 14,
                    fontFamily: "inherit",
                  }}
                />
              </div>
            </div>

            {/* Payment Info Section */}
            <div style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
                {currentLang === "en" ? "Payment Details" : "تفاصيل الدفع"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="4111 1111 1111 1111"
                  value={formData.cardNumber}
                  onChange={handleFormChange}
                  disabled={status === "processing"}
                  maxLength="19"
                  inputMode="numeric"
                  style={{
                    padding: "12px 14px",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,0.15)",
                    fontSize: 14,
                    fontFamily: "monospace",
                    letterSpacing: "2px",
                  }}
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleFormChange}
                    disabled={status === "processing"}
                    maxLength="5"
                    inputMode="numeric"
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.15)",
                      fontSize: 14,
                      fontFamily: "monospace",
                      letterSpacing: "1px",
                    }}
                  />
                  <input
                    type="text"
                    name="cardCVV"
                    placeholder="CVV"
                    value={formData.cardCVV}
                    onChange={handleFormChange}
                    disabled={status === "processing"}
                    maxLength="4"
                    inputMode="numeric"
                    style={{
                      padding: "12px 14px",
                      borderRadius: 8,
                      border: "1px solid rgba(0,0,0,0.15)",
                      fontSize: 14,
                      fontFamily: "monospace",
                      letterSpacing: "2px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Pay Button */}
            <div style={{ marginTop: 24 }}>
              <button
                onClick={handlePay}
                disabled={status === "processing"}
                style={{
                  width: "100%",
                  padding: "14px 18px",
                  borderRadius: 10,
                  border: "none",
                  cursor: status === "processing" ? "not-allowed" : "pointer",
                  background: status === "processing" ? "rgba(0, 83, 199, 0.35)" : "#0053c7",
                  color: "white",
                  fontSize: 16,
                  fontWeight: 600,
                  transition: "background 0.2s",
                }}
              >
                {status === "processing" ? t.processing : t.payButton}
              </button>
            </div>

            <p style={{ marginTop: 20, fontSize: 13, color: "rgba(0,0,0,0.55)" }}>{t.note}</p>
          </>
        ) : (
          /* Success State */
          <div
            style={{
              marginTop: 24,
              borderRadius: 14,
              padding: 22,
              background: "rgba(0, 175, 76, 0.1)",
              border: "1px solid rgba(0, 175, 76, 0.3)",
            }}
          >
            <div style={{ fontWeight: 600, color: "#007a2b", fontSize: 18 }}>{t.success}</div>
            <div style={{ marginTop: 12, color: "rgba(0,0,0,0.75)", fontSize: 15 }}>{t.download}</div>
            {downloaded ? (
              <div style={{ marginTop: 12, fontSize: 14, color: "rgba(0,0,0,0.7)" }}>
                ✅ {currentLang === "ar" ? "تم بدء التنزيل تلقائياً" : "Download started automatically."}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
