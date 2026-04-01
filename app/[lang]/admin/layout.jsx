"use client";
import styles from "@/styles/admin.module.css";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "@/providers/ContextProvider";
import ContextProvider from "@/providers/ContextProvider";
import { use } from "react";
import Link from "next/link";
import { auth } from "@/configuration/firebase-config";
import { signOut } from "firebase/auth";
import useAuth from "@/hooks/UseAuth";
import { usePathname, useRouter } from "next/navigation";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

import Loading from "@/components/Loading";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function AdminAccount({ params, children }) {
  return (
    <ContextProvider>
      <AdminAccountContent params={params}>{children}</AdminAccountContent>
    </ContextProvider>
  );
}

function AdminAccountContent({ params, children }) {
  const { lang } = use(params);
  const router = useRouter();
  const { contacts } = useContext(Context);
  const pathName = usePathname();
  const { loading, user, isAdmin } = useAuth();
  const [showSettingDropdown, setShowSettingDropdown] = useState(false);

  const unreadMessages = contacts.filter((contact) => contact.read === false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const toggleSettingDropdown = () => {
    setShowSettingDropdown(!showSettingDropdown);
  };

  const translations = {
    en: {
      systemManagement: "System Management",
      articles: "",
      contacts: "Contact Messages",
      erpDetails: "Next ERP Details",
      admins: "Administrators",
      settings: "Contact Settings",
      profile: "My Profile",
      password: "Change Password",
      email: "Change Email",
      signOut: "Sign Out",
    },
    ar: {
      contacts: "رسائل التواصل",
      erpDetails: "تفاصيل نكست ERP",
      admins: "المشرفون",
      profile: "ملفي الشخصي",
      password: "تغيير كلمة المرور",
      email: "تغيير البريد الإلكتروني",
    },
  };

  const t = translations[lang] || translations.en;

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push(`/${lang}/login`);
    }
  }, [loading, user, isAdmin]);

  if (loading) {
    return <Loading />;
  }

  return user && isAdmin ? (
    <>
      {/*Header*/}
      <div
        className={`${styles["admin-header-fixed"]} d-flex align-items-center justify-content-between px-3 py-2`}
      >
        <Link href={`/${lang}`} className="d-none d-lg-flex">
          <img
            src="/logo.png"
            alt="happy face logo"
            style={{ width: "140px" }}
          />
        </Link>

        <div className="d-flex align-items-center gap-3 ms-auto">
          {/* Language Switcher */}
          <LanguageSwitcher lang={lang} />

          {/* Settings/Profile Dropdown */}
          <div style={{ position: "relative" }}>
            <button
              className="btn btn-light border-0"
              onClick={toggleSettingDropdown}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <SettingsOutlinedIcon />
              {showSettingDropdown ? (
                <ArrowDropUpSharpIcon />
              ) : (
                <ArrowDropDownSharpIcon />
              )}
            </button>

            {showSettingDropdown && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  background: "white",
                  border: "1px solid #e0e0e0",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  minWidth: "200px",
                  marginTop: "8px",
                }}
              >
                <Link
                  href={`/${lang}/admin/edit-profile`}
                  className="dropdown-item"
                  style={{
                    display: "block",
                    padding: "10px 16px",
                    color: "#333",
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {t.profile}
                </Link>
                <Link
                  href={`/${lang}/admin/change-password`}
                  className="dropdown-item"
                  style={{
                    display: "block",
                    padding: "10px 16px",
                    color: "#333",
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {t.password}
                </Link>
                <Link
                  href={`/${lang}/admin/change-email`}
                  className="dropdown-item"
                  style={{
                    display: "block",
                    padding: "10px 16px",
                    color: "#333",
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {t.email}
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setShowSettingDropdown(false);
                  }}
                  className="dropdown-item"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 16px",
                    color: "#dc3545",
                    textDecoration: "none",
                    background: "transparent",
                    border: "none",
                    width: "100%",
                    cursor: "pointer",
                    fontWeight: "500",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f9f9f9")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <LogoutOutlinedIcon style={{ fontSize: "18px" }} />
                  {t.signOut}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="btn btn-light border-0 d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
          >
            <MenuOpenRoundedIcon />
          </button>
        </div>
      </div>
      <div className="d-flex bg-light">
        <div
          className={`offcanvas-lg offcanvas-${
            lang === "ar" ? "end" : "start"
          }`}
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
      
          <div className="offcanvas-body">
            <div
              className="navigation bg-white p-3"
              style={{
                position: "fixed",
                top: "88px",
                bottom: 0,
                overflowY: "auto",
              }}
            >
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
            
              </div>
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles[""]}  ${
                    pathName === `/${lang}/admin/`
                      ? styles[""]
                      : ""
                  }`}
                  href={`/${lang}/admin/`}
                >
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.articles}
                  </h5>
                </Link>
              </div>
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/erp-details`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/erp-details`}
                >
                  <ArticleOutlinedIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.erpDetails}
                  </h5>
                </Link>
              </div>
              <div
                data-bs-dismiss="offcanvas"
                data-bs-target="#offcanvasMenu"
                style={{ position: "relative" }}
              >
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/contacts`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/contacts`}
                >
                  <ContactsOutlinedIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.contacts}
                  </h5>
                  {unreadMessages.length > 0 && (
                    <div
                      className="badge rounded-pill bg-danger"
                      style={{ position: "absolute", top: 17, right: 53 }}
                    >
                      {unreadMessages.length}
                    </div>
                  )}
                </Link>
              </div>
              <div data-bs-dismiss="offcanvas" data-bs-target="#offcanvasMenu">
                <Link
                  className={`${styles["account-nav-item"]} mb-1 mb-xl-2 ${
                    pathName === `/${lang}/admin/admins`
                      ? styles["active-route"]
                      : ""
                  }`}
                  href={`/${lang}/admin/admins`}
                >
                  <SupervisorAccountIcon />
                  <h5 className={`m-0 ${lang === "en" ? "ms-3" : "me-3"}`}>
                    {t.admins}
                  </h5>
                </Link>
              </div>
             
             
          
           
            </div>
          </div>
        </div>
        <div className={`${styles["admin-body-wrapper"]} p-3 ${styles["account-child-container"]}`}>
          {children}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}
 