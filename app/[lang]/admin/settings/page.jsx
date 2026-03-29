"use client";
import React, { useState, useEffect } from "react";
import { use } from "react";
import { toast } from "react-toastify";
import Loading from "@/components/Loading";

export default function AdminSettings({ params }) {
  const { lang } = use(params);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState({
    email: "",
    phone: "",
    address: "",
    workingHours: "",
    whatsapp: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  });

  const translations = {
    en: {
      title: "Admin Settings",
      subtitle: "Manage your application settings",
      contactInfo: "Contact Information",
      email: "Email Address",
      phone: "Phone Number",
      address: "Business Address",
      workingHours: "Working Hours",
      whatsapp: "WhatsApp Number",
      socialMedia: "Social Media Links",
      facebook: "Facebook URL",
      twitter: "Twitter URL",
      linkedin: "LinkedIn URL",
      instagram: "Instagram URL",
      save: "Save Settings",
      cancel: "Cancel",
      success: "Settings saved successfully!",
      error: "Failed to save settings",
      loading: "Loading settings...",
    },
    ar: {
      title: "إعدادات المشرف",
      subtitle: "إدارة إعدادات التطبيق",
      contactInfo: "معلومات الاتصال",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      address: "عنوان العمل",
      workingHours: "ساعات العمل",
      whatsapp: "رقم الواتساب",
      socialMedia: "روابط التواصل الاجتماعي",
      facebook: "رابط فيسبوك",
      twitter: "رابط تويتر",
      linkedin: "رابط لينكدإن",
      instagram: "رابط إنستغرام",
      save: "حفظ الإعدادات",
      cancel: "إلغاء",
      success: "تم حفظ الإعدادات بنجاح!",
      error: "فشل في حفظ الإعدادات",
      loading: "جاري تحميل الإعدادات...",
    },
  };

  const t = translations[lang] || translations.en;

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch("/api/contact-settings/get");
      const data = await response.json();
      setSettings(data);
    } catch (error) {
      console.error("Error fetching settings:", error);
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch("/api/contact-settings/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      if (response.ok) {
        toast.success(t.success);
      } else {
        toast.error(t.error);
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error(t.error);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container-fluid">
      <div className="mb-4">
        <h2 className="fw-bold mb-2">{t.title}</h2>
        <p className="text-muted">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-4">{t.contactInfo}</h5>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">{t.email}</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={settings.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">{t.phone}</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={settings.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">{t.address}</label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={settings.address}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">{t.workingHours}</label>
                <input
                  type="text"
                  name="workingHours"
                  className="form-control"
                  value={settings.workingHours}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-medium">{t.whatsapp}</label>
                <input
                  type="tel"
                  name="whatsapp"
                  className="form-control"
                  value={settings.whatsapp}
                  onChange={handleChange}
                  placeholder="+966500000000"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body p-4">
            <h5 className="fw-semibold mb-4">{t.socialMedia}</h5>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-medium">{t.facebook}</label>
                <input
                  type="url"
                  name="facebook"
                  className="form-control"
                  value={settings.facebook}
                  onChange={handleChange}
                  placeholder="https://facebook.com/yourpage"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">{t.twitter}</label>
                <input
                  type="url"
                  name="twitter"
                  className="form-control"
                  value={settings.twitter}
                  onChange={handleChange}
                  placeholder="https://twitter.com/yourhandle"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">{t.linkedin}</label>
                <input
                  type="url"
                  name="linkedin"
                  className="form-control"
                  value={settings.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/company/yourcompany"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-medium">{t.instagram}</label>
                <input
                  type="url"
                  name="instagram"
                  className="form-control"
                  value={settings.instagram}
                  onChange={handleChange}
                  placeholder="https://instagram.com/yourhandle"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 justify-content-end">
          <button
            type="submit"
            className="btn btn-primary px-4"
            disabled={saving}
          >
            {saving ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {t.save}
              </>
            ) : (
              t.save
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
