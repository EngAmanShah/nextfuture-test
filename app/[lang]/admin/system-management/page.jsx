"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { Context } from "@/providers/ContextProvider";
import styles from "@/styles/admin.module.css";
import { usePathname } from "next/navigation";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export default function SystemManagement({ params }) {
  const { lang } = React.use(params);
  const pathName = usePathname();
  const { contacts } = useContext(Context);
  const unreadMessages = contacts.filter((contact) => contact.read === false);

  const translations = {
    en: {
      systemTitle: "System Management",
      dashboard: "Dashboard",
      erpDetails: "Next ERP Details",
      contacts: "Contact Messages",
      admins: "Administrators",
      settings: "Contact Settings",
      welcome: "Welcome to Admin Control Panel",
      manageSystem: "Manage system settings, users, and content",
      unreadMessages: "Unread Messages:",
    },
    ar: {
      systemTitle: "إدارة النظام",
      dashboard: "لوحة التحكم",
      erpDetails: "تفاصيل نيكست  ERP",
      contacts: "رسائل التواصل",
      admins: "المشرفون",
      settings: "إعدادات التواصل",
      welcome: "مرحبا بك في لوحة التحكم",
      manageSystem: "إدارة إعدادات النظام والمستخدمين والمحتوى",
      unreadMessages: "الرسائل غير المقروءة:",
    },
  };

  const t = translations[lang] || translations.en;

  const menuItems = [
    {
      label: t.erpDetails,
      href: `/${lang}/admin/erp-details`,
      icon: <ArticleOutlinedIcon />,
      active: pathName === `/${lang}/admin/erp-details`,
    },
    {
      label: t.contacts,
      href: `/${lang}/admin/contacts`,
      icon: <ContactsOutlinedIcon />,
      badge: unreadMessages.length,
      active: pathName === `/${lang}/admin/contacts`,
    },
    {
      label: t.admins,
      href: `/${lang}/admin/admins`,
      icon: <SupervisorAccountIcon />,
      active: pathName === `/${lang}/admin/admins`,
    },
    {
      label: t.settings,
      href: `/${lang}/admin/contact-settings`,
      icon: <SettingsIcon />,
      active: pathName === `/${lang}/admin/contact-settings`,
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "40px" }}>
        <h1 style={{ color: "#005BAC", marginBottom: "10px" }}>{t.welcome}</h1>
        <p style={{ color: "#666", fontSize: "16px" }}>{t.manageSystem}</p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.href} style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "20px",
                borderRadius: "12px",
                background: item.active ? "#005BAC" : "#f0f4f8",
                color: item.active ? "white" : "#333",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid #e0e0e0",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = "#e8f0f8";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 91, 172, 0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = "#f0f4f8";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
            >
              <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                {item.icon}
              </div>
              <h3 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>
                {item.label}
              </h3>
              {item.badge && item.badge > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#ff4444",
                    color: "white",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {item.badge}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
