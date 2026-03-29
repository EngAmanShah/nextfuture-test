"use client";
import React, { useState, useEffect, useContext, use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Context } from "@/providers/ContextProvider";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function EditAdmin({ params }) {
  const { lang, adminId } = use(params);
  const router = useRouter();
  const { admins } = useContext(Context);
  
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentAdmin, setCurrentAdmin] = useState(null);

  const content = {
    en: {
      title: "Edit Administrator",
      subtitle: "Update administrator information and credentials",
      name: "Name",
      email: "Email",
      password: "New Password (leave empty to keep current)",
      namePlaceholder: "Enter admin name",
      emailPlaceholder: "Enter admin email",
      passwordPlaceholder: "Enter new password (optional)",
      update: "Update Admin",
      updating: "Updating...",
      cancel: "Cancel",
      success: "Admin updated successfully",
      error: "Failed to update admin",
      notFound: "Administrator not found",
      backToAdmins: "Back to Administrators",
    },
    ar: {
      title: "تعديل المسؤول",
      subtitle: "تحديث معلومات المسؤول والبيانات",
      name: "الاسم",
      email: "البريد الإلكتروني", 
      password: "كلمة المرور الجديدة (اتركها فارغة للاحتفاظ بالحالية)",
      namePlaceholder: "أدخل اسم المسؤول",
      emailPlaceholder: "أدخل بريد المسؤول",
      passwordPlaceholder: "أدخل كلمة مرور جديدة (اختياري)",
      update: "تحديث المسؤول",
      updating: "جارٍ التحديث...",
      cancel: "إلغاء",
      success: "تم تحديث المسؤول بنجاح",
      error: "فشل في تحديث المسؤول",
      notFound: "المسؤول غير موجود",
      backToAdmins: "العودة إلى المشرفين",
    },
  };

  const t = content[lang] || content.en;

  useEffect(() => {
    if (admins && admins.length > 0) {
      const admin = admins.find(a => a.id === adminId);
      if (admin) {
        setCurrentAdmin(admin);
        setAdminData({
          name: admin.name || "",
          email: admin.email || "",
          password: "", // Always empty for security
        });
      }
    }
  }, [admins, adminId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updateData = {
      uid: adminId,
      name: adminData.name,
      email: adminData.email,
    };

    // Only include password if it's not empty
    if (adminData.password.trim()) {
      updateData.password = adminData.password;
    }

    try {
      const res = await fetch("/api/update-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        console.error("Response is not valid JSON:", text);
        toast.error("Server returned invalid response");
        return;
      }

      if (res.ok) {
        console.log("Admin updated successfully:", data);
        toast.success(t.success);
        router.push(`/${lang}/admin/admins`);
      } else {
        const errorMsg = data.error || data.details || t.error;
        console.error("Failed to update admin:", errorMsg);
        toast.error(errorMsg);
      }
    } catch (err) {
      console.error("Error updating admin:", err);
      toast.error(t.error);
    } finally {
      setLoading(false);
    }
  };

  if (!currentAdmin && admins && admins.length > 0) {
    return (
      <div
        style={{
          backgroundColor: "white",
          padding: "16px",
          borderRadius: "18px",
          border: "1px solid rgba(227, 227, 227, 1)",
        }}
      >
        <div className="text-center py-5">
          <h5 className="text-danger">{t.notFound}</h5>
          <Link href={`/${lang}/admin/admins`} className="btn btn-primary mt-3">
            <ArrowBackIcon className="me-2" />
            {t.backToAdmins}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "16px",
        borderRadius: "18px",
        border: "1px solid rgba(227, 227, 227, 1)",
      }}
    >
      <div className="d-flex align-items-center mb-4">
        <Link 
          href={`/${lang}/admin/admins`}
          className="btn btn-outline-secondary me-3"
        >
          <ArrowBackIcon />
        </Link>
        <div>
          <h4 className="mb-1">{t.title}</h4>
          <p className="text-muted mb-0">{t.subtitle}</p>
        </div>
      </div>
      
      <form onSubmit={handleUpdateAdmin} className="w-md-75">
        <div className="mb-4">
          <label htmlFor="adminName" className="form-label">
            {t.name}
          </label>
          <input
            type="text"
            className="form-control"
            placeholder={t.namePlaceholder}
            style={{ borderRadius: "10px" }}
            id="adminName"
            name="name"
            value={adminData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="adminEmail" className="form-label">
            {t.email}
          </label>
          <input
            type="email"
            className="form-control"
            placeholder={t.emailPlaceholder}
            style={{ borderRadius: "10px" }}
            id="adminEmail"
            name="email"
            value={adminData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-5">
          <label htmlFor="adminPassword" className="form-label">
            {t.password}
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={visible ? "text" : "password"}
              className="form-control"
              placeholder={t.passwordPlaceholder}
              style={{ borderRadius: "10px" }}
              id="adminPassword"
              name="password"
              value={adminData.password}
              onChange={handleChange}
            />
            {visible ? (
              <VisibilityIcon
                style={{
                  position: "absolute",
                  top: 7,
                  right: lang === "en" ? 10 : "",
                  left: lang === "ar" ? 10 : "",
                  color: "rgba(134, 141, 151, 1)",
                  cursor: "pointer",
                }}
                onClick={() => setVisible(false)}
              />
            ) : (
              <VisibilityOffIcon
                style={{
                  position: "absolute",
                  top: 7,
                  right: lang === "en" ? 10 : "",
                  left: lang === "ar" ? 10 : "",
                  color: "rgba(134, 141, 151, 1)",
                  cursor: "pointer",
                }}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>

        <div className="d-flex gap-3">
          <button
            type="submit"
            disabled={loading}
            className="primaryButton border-0"
            style={{ borderRadius: "12px" }}
          >
            {loading ? (
              <>
                <span
                  className={`spinner-border spinner-border-sm ${
                    lang === "en" ? "me-2" : "ms-2"
                  }`}
                  role="status"
                  aria-hidden="true"
                ></span>
                {t.updating}
              </>
            ) : (
              t.update
            )}
          </button>
          
          <Link 
            href={`/${lang}/admin/admins`}
            className="btn btn-outline-secondary"
            style={{ borderRadius: "12px" }}
          >
            {t.cancel}
          </Link>
        </div>
      </form>
    </div>
  );
}