"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaPhone, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["600", "800"],
});

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isERPMenuOpen, setERPMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileERPOpen, setMobileERPOpen] = useState(false);
  const erpHoverTimeout = useRef(null);
  const erpMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close menus when clicking outside
    const handleClickOutside = (event) => {
      if (erpMenuRef.current && !erpMenuRef.current.contains(event.target)) {
        setERPMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".navbar-toggler")
      ) {
        setMobileMenuOpen(false);
        setMobileERPOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileERPOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === `/${lang}` || pathname === "/";
    return pathname === `/${lang}${href}`;
  };

  const menuItems = [
    { href: "/", label: lang === "ar" ? "الرئيسية" : "Home" },
    {
      href: "/service",
      label: lang === "ar" ? "خدماتنا" : "Services",
    },
    {
      href: "/ERP/Next-Future-ERP",
      label: "Next Future ERP",
    },
    { href: "/about-us", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/contact-us", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  // Don't render navbar on admin pages
  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const callNumber = "+966539983393";

  const handleERPMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(erpHoverTimeout.current);
      setERPMenuOpen(true);
    }
  };

  const handleERPMouseLeave = () => {
    if (window.innerWidth > 768) {
      clearTimeout(erpHoverTimeout.current);
      erpHoverTimeout.current = setTimeout(() => {
        setERPMenuOpen(false);
      }, 300);
    }
  };

  const handleERPClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileERPOpen(!isMobileERPOpen);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileERPOpen(false);
    }
  };

  const handleLinkClick = () => {
    setERPMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileERPOpen(false);
  };

  // ERP Solutions data
  const erpSolutions = [
    {
      href: "/ERP/Next-Future-ERP",
      en: "Next Future ERP",
      ar: "نكست فيوتشر ERP",
      description: {
        en: "Modern, cloud‑based ERP for growing businesses",
        ar: "نظام ERP سحابي حديث للشركات النامية",
      },
    },
    {
      href: "/ERP/odoo",
      en: "Odoo ERP",
      ar: "أودو ERP",
      description: {
        en: "Open-source business management software",
        ar: "برنامج إدارة الأعمال مفتوح المصدر",
      },
    },
    {
      href: "/ERP/Construction-Management",
      en: "Construction Company ERP",
      ar: "نظام إدارة شركات المقاولات",
      description: {
        en: "Specialized ERP for construction companies",
        ar: "نظام متخصص لإدارة شركات المقاولات",
      },
    },
    {
      href: "/ERP/property-management",
      en: "Property Management ERP",
      ar: "نظام إدارة العقارات",
      description: {
        en: "Comprehensive property management solutions",
        ar: "حلول شاملة لإدارة العقارات",
      },
    },
    {
      href: "/ERP/custom",
      en: "Custom ERP Solutions",
      ar: "حلول ERP مخصصة",
      description: {
        en: "Tailored ERP systems for your business",
        ar: "أنظمة ERP مصممة خصيصًا لعملك",
      },
    },
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top header-root ${cairo.className}`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, #0a4d7c, #1277a8, #0a5a8c)"
            : "rgba(10, 36, 71, 0.85)",
          backdropFilter: scrolled ? "blur(10px)" : "blur(5px)",
          // boxShadow: scrolled ? "0 4px 20px rgba(10, 77, 124, 0.3)" : "none",
          transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="header-inner">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="navbar-brand"
            onClick={handleLinkClick}
          >
            <Image
              src="/logo-white.png"
              alt="Logo"
              width={160}
              height={60}
              priority
              style={{
                width: "160px",
                height: "auto",
                transition: "transform 0.3s ease",
              }}
            />
          </Link>

          {/* Mobile Top Buttons */}
          <div className="mobile-top-shell align-items-center gap-2">
            <div className="language-pill">
              <LanguageSwitcher lang={lang} showFlag={true} showText={false} />
            </div>
            <a
              href={`tel:${callNumber}`}
              className="btn btn-sm d-flex align-items-center gap-1"
              style={{
                backgroundColor: scrolled ? "#000000ff" : "#379DD7",
                borderColor: scrolled ? "#000000ff" : "#379DD7",
                color: "#fff",
              }}
            >
              <FaPhone size={12} />
            </a>
          </div>

          {/* Desktop Navbar Links */}
          <div className="desktop-nav-shell align-items-center">
            <ul className="navbar-nav mx-auto align-items-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    item.isERPDropdown ? "dropdown erp-menu" : ""
                  } mx-2`}
                  onMouseEnter={
                    item.isERPDropdown ? handleERPMouseEnter : undefined
                  }
                  onMouseLeave={
                    item.isERPDropdown ? handleERPMouseLeave : undefined
                  }
                  ref={item.isERPDropdown ? erpMenuRef : null}
                >
                  {item.isERPDropdown ? (
                    <>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={`nav-link ${
                          isActive(item.href) ? "active" : ""
                        } d-flex align-items-center gap-1`}
                        style={{
                          color: scrolled ? "#fff" : "#ffffffff",
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                        {lang === "ar" ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </Link>

                      {/* ERP Dropdown Menu - Desktop */}
                      <div
                        suppressHydrationWarning
                        className={`erp-dropdown-menu ${
                          isERPMenuOpen ? "show" : ""
                        }`}
                      >
                        <div className="erp-menu-content p-3">
                          <div className="row">
                            {erpSolutions.map((solution, index) => (
                              <div key={index} className="col-lg-12 mb-2">
                                <Link
                                  href={`/${lang}${solution.href}`}
                                  className="erp-dropdown-item"
                                  onClick={handleLinkClick}
                                >
                                  <div className="erp-item-content">
                                    <h6 className="erp-item-title mb-1">
                                      {solution[lang]}
                                    </h6>
                                    <p className="erp-item-description mb-0">
                                      {solution.description[lang]}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={`/${lang}${item.href === "/" ? "" : item.href}`}
                      className={`nav-link ${
                        isActive(item.href) ? "active" : ""
                      }`}
                      style={{
                        color: scrolled ? "#fff" : "#ffffffff",
                        fontWeight: 500,
                      }}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Language & Call Button */}
            <div className="d-flex align-items-center ms-4 gap-3">
              <div className="language-pill">
                <LanguageSwitcher lang={lang} showFlag={true} showText={false} />
              </div>
              <a
                href={`tel:${callNumber}`}
                className="btn d-flex align-items-center gap-2"
                style={{
                  backgroundColor: scrolled ? "#000000ff" : "#379DD7",
                  borderColor: scrolled ? "#000000ff" : "#379DD7",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
              </a>
            </div>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle navigation"
            style={{
              color: scrolled ? "#fff" : "#f0f0f0ff",
            }}
          >
            {isMobileMenuOpen ? (
              <FaTimes />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          suppressHydrationWarning
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        suppressHydrationWarning
        ref={mobileMenuRef}
        className={`mobile-sidebar ${isMobileMenuOpen ? "show" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="mobile-sidebar-header">
          <Link
            href={`/${lang}`}
            className="navbar-brand"
            onClick={handleLinkClick}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={52}
              priority
              style={{ width: "auto", height: "52px" }}
            />
          </Link>
          <button
            className="close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-sidebar-content">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {item.isERPDropdown ? (
                <>
                  <div
                    className="mobile-menu-link dropdown-toggle"
                    onClick={handleERPClick}
                  >
                    <span>{item.label}</span>
                    {isMobileERPOpen ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </div>

                  <div
                    className={`mobile-submenu ${
                      isMobileERPOpen ? "show" : ""
                    }`}
                  >
                    <div className="mobile-submenu-section">
                      <ul>
                        {erpSolutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex}>
                            <Link
                              href={`/${lang}${solution.href}`}
                              onClick={handleLinkClick}
                              className="erp-mobile-link"
                            >
                              <div>
                                <strong>{solution[lang]}</strong>
                                <small className="d-block text-muted">
                                  {solution.description[lang]}
                                </small>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className="mobile-menu-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Call Button */}
          <div className="mobile-buttons">
            <a
              href={`tel:${callNumber}`}
              className="btn d-flex align-items-center gap-2 w-100 justify-content-center"
              style={{
                backgroundColor: "#379DD7",
                borderColor: "#379DD7",
                color: "#fff",
              }}
              onClick={handleLinkClick}
            >
              <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
            </a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .navbar {
          padding: 0;
          z-index: 9999 !important;
          position: fixed !important;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
        }

        .header-root {
          height: 75px;
          z-index: 9999 !important;
        }

        .header-inner {
          width: 100%;
          max-width: 1440px;
          height: 75px;
          margin: 0 auto;
          padding-left: 50px;
          padding-right: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
.text-muted {
    --bs-text-opacity: 1;
    color: rgb(235 238 240 / 75%) !important;
}
        .navbar-nav .nav-link {
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.4rem 1rem;
          position: relative;
          font-weight: 600;
          color: #fff !important;
          font-family: "Cairo", sans-serif;
        }

        /* Circle hover effect */
        .navbar-nav .nav-link: {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          bottom: 4px;
          left: 50%;
          background: #fff;
          border-radius: 50%;
          transform: translateX(-50%) scale(0);
          opacity: 0;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .navbar-nav .nav-link:hover::before,
        .navbar-nav .nav-link.active::before {
          transform: translateX(-50%) scale(1);
          opacity: 1;
        }

        .navbar-nav .nav-link:hover {
          color: #fff !important;
        }

        .navbar-nav .nav-link.active {
          color: #fff !important;
        }
        }

        /* Mega Menu Styles */
        .mega-menu {
          position: static;
        }

        .mega-menu-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 90%;
          max-width: 1200px;
          background: linear-gradient(135deg, #f8f9fa, #ffffff);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 9995;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 1.5rem;
        }

        .mega-menu-dropdown.show {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        /* ERP Dropdown Menu Styles */
        .erp-menu {
          position: relative;
        }

        .erp-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 380px;
          background: linear-gradient(135deg, #f0f7fc, #ffffff);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          display: none;
          transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
          z-index: 9995;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          padding: 1.5rem;
        }

        .erp-dropdown-menu.show {
          display: block;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        [dir="rtl"] .mega-menu-dropdown,
        [dir="rtl"] .erp-dropdown-menu {
          left: 50%;
          right: auto;
          transform: translateX(-50%) translateY(15px);
        }

        [dir="rtl"] .mega-menu-dropdown.show,
        [dir="rtl"] .erp-dropdown-menu.show {
          transform: translateX(-50%) translateY(0);
        }

        .mega-menu-content {
          width: 100%;
        }

        .erp-menu-content {
          width: 100%;
        }

        /* Category titles */
        .mega-menu-content .category-title {
          color: #379DD7 !important;
          font-size: 0.95rem;
          border-bottom: 2px solid #379DD7;
          padding-bottom: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
        }

        .mega-menu-content .dropdown-item {
          padding: 0.7rem 0;
          color: #333333;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          font-size: 0.88rem;
          border: none;
          background: none;
          display: block;
          position: relative;
          padding-left: 0;
        }

        .mega-menu-content .dropdown-item::before {
          content: '→';
          position: absolute;
          left: -15px;
          opacity: 0;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          color: #379DD7;
        }

        .mega-menu-content .dropdown-item:hover {
          color: #379DD7;
          background: rgba(55, 157, 215, 0.12);
          padding-left: 12px;
          border-radius: 6px;
        }

        .mega-menu-content .dropdown-item:hover::before {
          opacity: 1;
          left: 0;
        }

        .erp-dropdown-item {
          display: block;
          padding: 1rem;
          color: #333333;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border-radius: 10px;
          border: 1px solid rgba(55, 157, 215, 0.2);
          background: rgba(55, 157, 215, 0.06);
          margin-bottom: 0.5rem;
        }

        .erp-dropdown-item:hover {
          background: rgba(55, 157, 215, 0.15);
          border-color: #379DD7;
          text-decoration: none;
          color: #379DD7;
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(55, 157, 215, 0.2);
        }

        .erp-item-title {
          color: #379DD7 !important;
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.35rem;
        }

        .erp-item-description {
          color: #000000 !important;
          font-size: 0.82rem;
          line-height: 1.4;
        }

        [dir="rtl"] .mega-menu-content .dropdown-item:hover {
          padding-left: 0;
          padding-right: 12px;
        }

        [dir="rtl"] .erp-dropdown-item:hover {
          transform: translateX(-4px);
        }

        /* Mobile Menu Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9997;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: #1a2744;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
          transition: right 0.25s ease;
          z-index: 9998;
          overflow-y: auto;
          color: #fff;
          border-left: 2px solid #379DD7;
        }

        [dir="rtl"] .mobile-sidebar {
          right: auto;
          left: -100%;
          border-left: none;
          border-right: 2px solid #379DD7;
          box-shadow: 4px 0 30px rgba(0, 0, 0, 0.4);
        }

        .mobile-sidebar.show {
          right: 0;
        }

        [dir="rtl"] .mobile-sidebar.show {
          left: 0;
          right: auto;
        }

        .mobile-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1.5px solid rgba(55, 157, 215, 0.3);
          background: rgba(55, 157, 215, 0.08);
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #379DD7;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          color: #1277cf;
          transform: rotate(90deg);
        }

        .mobile-sidebar-content {
          padding: 1rem;
        }

        .mobile-menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-menu-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.1rem 0.8rem;
          color: #d0d0d0;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          border-radius: 8px;
        }

        [dir="rtl"] .mobile-menu-link {
          text-align: right;
        }

        .mobile-menu-link:hover {
          color: #379DD7;
          background: rgba(55, 157, 215, 0.12);
          padding-left: 1.5rem;
        }

        [dir="rtl"] .mobile-menu-link:hover {
          padding-left: 0.8rem;
          padding-right: 1.5rem;
        }

        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .mobile-submenu.show {
          max-height: 2000px;
        }

        .mobile-submenu-section {
          padding: 0.7rem 0 0.7rem 1.5rem;
        }

        [dir="rtl"] .mobile-submenu-section {
          padding: 0.7rem 1.5rem 0.7rem 0;
        }

        /* Mobile category titles */
        .mobile-category-title {
          color: #379DD7;
          font-weight: 700;
          margin-bottom: 0.8rem;
          font-size: 0.92rem;
          border-bottom: 1.5px solid #379DD7;
          padding-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .mobile-submenu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-submenu-section li {
          margin-bottom: 0.5rem;
        }

        .mobile-submenu-section a {
          color: #d0d0d0;
          text-decoration: none;
          font-size: 0.88rem;
          transition: all 0.3s ease;
          display: block;
          padding: 0.5rem 0.8rem;
          border-radius: 6px;
          position: relative;
        }

        .erp-mobile-link {
          padding: 0.9rem 0.8rem !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(55, 157, 215, 0.08) !important;
          border-radius: 8px !important;
          margin-bottom: 0.5rem;
        }

        .erp-mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-submenu-section a:hover {
          color: #379DD7;
          background: rgba(55, 157, 215, 0.12);
          padding-left: 1.2rem;
        }

        [dir="rtl"] .mobile-submenu-section a:hover {
          padding-left: 0.8rem;
          padding-right: 1.2rem;
        }

        .mobile-buttons {
          padding: 1.5rem;
          border-top: 1.5px solid rgba(55, 157, 215, 0.3);
          margin-top: 1rem;
          background: rgba(55, 157, 215, 0.08);
          border-radius: 10px;
        }

        .mobile-buttons .btn {
          background: linear-gradient(135deg, #379DD7, #1277cf) !important;
          border: none !important;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(55, 157, 215, 0.3);
        }

        .mobile-buttons .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(55, 157, 215, 0.4);
        }

        /* Flag-only Language Switcher */
        .flag-only-switcher {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: rgba(255, 255, 255, 0.12);
          padding: 5px 15px;
          border-radius: 20px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1.5px solid rgba(55, 157, 215, 0.3);
          width: 100px;
          height: 50px;
          cursor: pointer;
        }

        .language-pill {
          width: 100px;
          height: 50px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .flag-only-switcher:hover {
          background: rgba(55, 157, 215, 0.15);
          border-color: #379DD7;
          text-decoration: none;
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(55, 157, 215, 0.2);
        }

        .flag-icon-only {
          width: 28px;
          height: 18px;
          border-radius: 6px;
          object-fit: cover;
        }

        /* Call Button Styles */
        .navbar .btn {
          border-radius: 8px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid rgba(55, 157, 215, 0.4);
          background: linear-gradient(135deg, #379DD7, #1277cf);
          box-shadow: 0 4px 15px rgba(55, 157, 215, 0.25);
        }

        .navbar .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(55, 157, 215, 0.35);
          border-color: #379DD7;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .mega-menu-dropdown,
          .erp-dropdown-menu {
            display: none;
          }

          .navbar {
            padding: 0.6rem 0;
          }

          .header-root,
          .header-inner {
            height: auto;
          }

          .header-inner {
            padding-left: 16px;
            padding-right: 16px;
          }
        }

        @media (max-width: 768px) {
          .mobile-sidebar {
            width: 300px;
          }

          .navbar-brand img {
            width: 140px !important;
          }

          .mega-menu-dropdown {
            width: 95%;
          }

          .erp-dropdown-menu {
            width: 90%;
          }
        }

        @media (max-width: 575px) {
          .mega-menu-dropdown {
            width: 95%;
          }

          .erp-dropdown-menu {
            width: 90%;
          }

          .mobile-sidebar {
            width: 280px;
          }
        }

        @media (max-width: 400px) {
          .navbar-brand img {
            width: 120px !important;
          }

          .mobile-sidebar {
            width: 260px;
          }
        }

        /* Mobile Menu Toggle Icon */
        .navbar-toggler {
          color: #379DD7 !important;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .navbar-toggler:hover {
          color: #fff !important;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(55, 157, 215, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2.5' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          width: 1.5em;
          height: 1.5em;
        }

        /* Navbar Brand Hover */
        .navbar-brand {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .navbar-brand:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}
