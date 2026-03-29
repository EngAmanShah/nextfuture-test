"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { db } from "@/configuration/firebase-config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import styles from "@/styles/admin.module.css";

const translations = {
  en: {
    title: "Paid Clients",
    subtitle: "View all customers who have made payments",
    noData: "No paid clients yet",
    loading: "Loading...",
    name: "Full Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
    plan: "Plan",
    amount: "Amount",
    date: "Payment Date",
    back: "Back to Admin",
    total: "Total Payments",
    exportCSV: "Export CSV",
  },
  ar: {
    title: "العملاء المدفوعون",
    subtitle: "عرض جميع العملاء الذين أجروا عمليات دفع",
    noData: "لا توجد عملاء مدفوعون حتى الآن",
    loading: "جاري التحميل...",
    name: "الاسم كاملاً",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    company: "الشركة",
    plan: "الخطة",
    amount: "المبلغ",
    date: "تاريخ الدفع",
    back: "العودة إلى الإدارة",
    total: "إجمالي الدفعات",
    exportCSV: "تصدير CSV",
  },
};

export default function PaidClientsPage() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLang = pathname?.startsWith("/ar") ? "ar" : "en";
  const t = translations[currentLang] || translations.en;

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const collectionRef = collection(db, "paidClients");
    const q = query(collectionRef, orderBy("paymentDate", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = [];
        let total = 0;
        snapshot.forEach((doc) => {
          const clientData = doc.data();
          data.push({
            id: doc.id,
            ...clientData,
          });
          total += parseInt(clientData.amount || 0);
        });
        setClients(data);
        setTotalAmount(total);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching paid clients:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "—";
    const date = timestamp.toDate();
    return date.toLocaleDateString(currentLang === "ar" ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportToCSV = () => {
    const headers = [t.name, t.email, t.phone, t.company, t.plan, t.amount, t.date];
    const rows = clients.map((client) => [
      client.fullName,
      client.email,
      client.phone,
      client.company,
      client.plan,
      client.amount,
      formatDate(client.paymentDate),
    ]);

    let csvContent = headers.join(",") + "\n";
    rows.forEach((row) => {
      csvContent += row.map((cell) => `"${cell}"`).join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `paid-clients-${new Date().toISOString().split("T")[0]}.csv`);
    link.click();
  };

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <p>{t.loading}</p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        direction: currentLang === "ar" ? "rtl" : "ltr",
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: 24,
          padding: "10px 16px",
          borderRadius: 8,
          border: "none",
          background: "rgba(0, 83, 199, 0.1)",
          color: "#0053c7",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        ← {t.back}
      </button>

      <div style={{ marginBottom: 32 }}>
        <h1 style={{ margin: "0 0 8px 0", fontSize: 32 }}>{t.title}</h1>
        <p style={{ margin: 0, color: "rgba(0,0,0,0.7)" }}>{t.subtitle}</p>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            padding: 20,
            borderRadius: 12,
            background: "rgba(0, 83, 199, 0.05)",
            border: "1px solid rgba(0, 83, 199, 0.15)",
          }}
        >
          <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)", marginBottom: 8 }}>
            {t.total}
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#0053c7" }}>
            {clients.length}
          </div>
        </div>
        <div
          style={{
            padding: 20,
            borderRadius: 12,
            background: "rgba(0, 175, 76, 0.05)",
            border: "1px solid rgba(0, 175, 76, 0.15)",
          }}
        >
          <div style={{ fontSize: 12, color: "rgba(0,0,0,0.6)", marginBottom: 8 }}>
            {currentLang === "en" ? "Total Revenue" : "إجمالي الإيرادات"}
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#00af4c" }}>
            ﷼ {totalAmount}
          </div>
        </div>
      </div>

      {/* Export Button */}
      <button
        onClick={exportToCSV}
        style={{
          marginBottom: 20,
          padding: "10px 16px",
          borderRadius: 8,
          border: "1px solid rgba(0,0,0,0.15)",
          background: "white",
          color: "rgba(0,0,0,0.8)",
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 500,
        }}
      >
        📥 {t.exportCSV}
      </button>

      {/* Table */}
      {clients.length > 0 ? (
        <div
          style={{
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.08)",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 14,
            }}
          >
            <thead>
              <tr style={{ background: "rgba(0, 83, 199, 0.05)", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.name}
                </th>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.email}
                </th>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.phone}
                </th>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.company}
                </th>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.plan}
                </th>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.amount}
                </th>
                <th style={{ padding: "16px", textAlign: "left", fontWeight: 600, color: "#0053c7" }}>
                  {t.date}
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client, idx) => (
                <tr
                  key={client.id}
                  style={{
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    background: idx % 2 === 0 ? "rgba(0,0,0,0.01)" : "white",
                  }}
                >
                  <td style={{ padding: "12px 16px" }}>{client.fullName}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <a href={`mailto:${client.email}`} style={{ color: "#0053c7", textDecoration: "none" }}>
                      {client.email}
                    </a>
                  </td>
                  <td style={{ padding: "12px 16px" }}>{client.phone}</td>
                  <td style={{ padding: "12px 16px" }}>{client.company}</td>
                  <td style={{ padding: "12px 16px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: "rgba(0, 83, 199, 0.1)",
                        color: "#0053c7",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {client.plan}
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", fontWeight: 600, color: "#00af4c" }}>
                    ﷼ {client.amount}
                  </td>
                  <td style={{ padding: "12px 16px", color: "rgba(0,0,0,0.6)", fontSize: 13 }}>
                    {formatDate(client.paymentDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          style={{
            padding: 40,
            textAlign: "center",
            background: "rgba(0,0,0,0.02)",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.08)",
          }}
        >
          <p style={{ color: "rgba(0,0,0,0.6)" }}>{t.noData}</p>
        </div>
      )}
    </div>
  );
}
