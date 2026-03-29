"use client";
import React, { useState } from "react";
import { use } from "react";
import { useRouter } from "next/navigation";
import {
  AdminPanelSettings,
  Security,
  Language,
  Palette,
  Notifications,
  Storage,
  Email,
  Public,
  Code,
  Build,
} from "@mui/icons-material";

export default function SystemManagement({ params }) {
  const { lang } = use(params);
  const router = useRouter();

  const translations = {
    en: {
      title: "System Management",
      subtitle: "Manage system-wide configurations and settings",
      adminManagement: "Admin Management",
      adminDesc: "Manage administrator accounts and permissions",
      contactSettings: "Contact Settings",
      contactDesc: "Configure contact information and social media",
      security: "Security Settings",
      securityDesc: "Manage security policies and authentication",
      notifications: "Notifications",
      notificationsDesc: "Configure email and push notifications",
      appearance: "Appearance",
      appearanceDesc: "Customize theme and branding",
      language: "Language Settings",
      languageDesc: "Manage supported languages and translations",
      storage: "Storage Management",
      storageDesc: "Manage file storage and media assets",
      api: "API Configuration",
      apiDesc: "Configure API keys and integrations",
      general: "General",
      advanced: "Advanced",
    },
    ar: {
      title: "إدارة النظام",
      subtitle: "إدارة إعدادات النظام والتكوينات",
      adminManagement: "إدارة المشرفين",
      adminDesc: "إدارة حسابات المشرفين والصلاحيات",
      contactSettings: "إعدادات الاتصال",
      contactDesc: "تكوين معلومات الاتصال ووسائل التواصل",
      security: "إعدادات الأمان",
      securityDesc: "إدارة سياسات الأمان والمصادقة",
      notifications: "الإشعارات",
      notificationsDesc: "تكوين إشعارات البريد والدفع",
      appearance: "المظهر",
      appearanceDesc: "تخصيص الثيم والعلامة التجارية",
      language: "إعدادات اللغة",
      languageDesc: "إدارة اللغات المدعومة والترجمات",
      storage: "إدارة التخزين",
      storageDesc: "إدارة ملفات التخزين والوسائط",
      api: "تكوين API",
      apiDesc: "تكوين مفاتيح API والتكاملات",
      general: "عام",
      advanced: "متقدم",
    },
  };

  const t = translations[lang] || translations.en;

  const settingsCards = [
    {
      title: t.adminManagement,
      description: t.adminDesc,
      icon: AdminPanelSettings,
      color: "#3b82f6",
      path: "/admin/admins",
    },
    {
      title: t.contactSettings,
      description: t.contactDesc,
      icon: Email,
      color: "#10b981",
      path: "/admin/settings",
    },
    {
      title: t.security,
      description: t.securityDesc,
      icon: Security,
      color: "#ef4444",
      path: "/admin/security-settings",
    },
    {
      title: t.notifications,
      description: t.notificationsDesc,
      icon: Notifications,
      color: "#f59e0b",
      path: "/admin/notification-settings",
    },
    {
      title: t.appearance,
      description: t.appearanceDesc,
      icon: Palette,
      color: "#8b5cf6",
      path: "/admin/appearance-settings",
    },
    {
      title: t.language,
      description: t.languageDesc,
      icon: Language,
      color: "#06b6d4",
      path: "/admin/language-settings",
    },
    {
      title: t.storage,
      description: t.storageDesc,
      icon: Storage,
      color: "#ec4899",
      path: "/admin/storage-settings",
    },
    {
      title: t.api,
      description: t.apiDesc,
      icon: Code,
      color: "#6366f1",
      path: "/admin/api-settings",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h2 className="fw-bold mb-2">{t.title}</h2>
        <p className="text-muted">{t.subtitle}</p>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold mb-3">{t.general}</h5>
        <div className="row g-4">
          {settingsCards.slice(0, 4).map((card, index) => {
            const Icon = card.icon;
            return (
              <div className="col-md-6 col-lg-3" key={index}>
                <div
                  className="card border-0 shadow-sm h-100 cursor-pointer hover-shadow transition-all"
                  onClick={() => router.push(`/${lang}${card.path}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body p-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: `${card.color}15`,
                      }}
                    >
                      <Icon style={{ fontSize: 30, color: card.color }} />
                    </div>
                    <h5 className="fw-semibold mb-2">{card.title}</h5>
                    <p className="text-muted small mb-0">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mb-4">
        <h5 className="fw-semibold mb-3">{t.advanced}</h5>
        <div className="row g-4">
          {settingsCards.slice(4).map((card, index) => {
            const Icon = card.icon;
            return (
              <div className="col-md-6 col-lg-3" key={index}>
                <div
                  className="card border-0 shadow-sm h-100 cursor-pointer hover-shadow transition-all"
                  onClick={() => router.push(`/${lang}${card.path}`)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-body p-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: `${card.color}15`,
                      }}
                    >
                      <Icon style={{ fontSize: 30, color: card.color }} />
                    </div>
                    <h5 className="fw-semibold mb-2">{card.title}</h5>
                    <p className="text-muted small mb-0">{card.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
