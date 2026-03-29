import Script from "next/script";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/providers/ContextProvider";
import LayoutWrapper from "./LayoutWrapper";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton"; // WhatsApp Floating Button


export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;

  const metas = {
    en: {
      title:
        "Next Future IT - Web & App Development, Digital Marketing, ERP Solutions",
      description:
        "Leading IT company in Saudi Arabia offering web development, mobile apps, digital marketing, ERP systems (Odoo, Property Management), and custom software solutions. Transform your business with Next Future Information Technology.",
      keywords:
        "IT solutions Saudi Arabia, web development, mobile app development, digital marketing, ERP systems, Odoo implementation, property management software, construction management, custom software development",
    },
    ar: {
      title: "نكست فيوتشر - تطوير المواقع والتطبيقات، التسويق الرقمي، أنظمة ERP",
      description:
        "شركة تقنية معلومات رائدة في السعودية متخصصة في تطوير المواقع، تطبيقات الجوال، التسويق الرقمي، أنظمة ERP (Odoo، إدارة العقارات)، وحلول برمجية مخصصة. حوّل أعمالك مع نكست فيوتشر.",
      keywords:
        "حلول تقنية المعلومات السعودية, تطوير المواقع, تطوير التطبيقات, التسويق الرقمي, أنظمة ERP, تطبيق Odoo, برنامج إدارة العقارات, إدارة المشاريع الإنشائية, تطوير برمجيات مخصصة",
    },
  };

  const baseUrl = "https://www.nextfuture-it.com";
  const canonicalUrl = `${baseUrl}/${lang}`;

  const meta = metas[lang] || metas.en;

  return {
    metadataBase: new URL(baseUrl),
    title: { default: meta.title, template: `%s | Next Future IT` },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Next Future Information Technology" }],
    creator: "Next Future IT",
    publisher: "Next Future Information Technology",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: lang === "ar" ? "ar_SA" : "en_US",
      url: canonicalUrl,
      siteName: "Next Future Information Technology",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: { google: "G-8R5DH60WGN" },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Next Future Information Technology",
    url: "https://www.nextfuture-it.com",
    logo: "https://www.nextfuture-it.com/logo.png",
    description:
      lang === "ar"
        ? "شركة تقنية معلومات رائدة في السعودية متخصصة في تطوير المواقع والتطبيقات والتسويق الرقمي"
        : "Leading IT company in Saudi Arabia offering web development, mobile apps, and digital marketing solutions",
    address: { "@type": "PostalAddress", addressCountry: "SA" },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
  };

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KRCBKS4J');`,
          }}
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </head>  
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRCBKS4J"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-8R5DH60WGN"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8R5DH60WGN', { page_path: window.location.pathname, anonymize_ip: true });
            `,
          }}
        />

        <ContextProvider>
          <LayoutWrapper lang={lang}>
            <ToastContainer position="top-center" autoClose={3000} />
            <main className="d-flex flex-column flex-grow-1" style={{ minHeight: "100vh" }}>
              {children}
            </main>
            <BackToTopButton />
            <WhatsAppButton lang={lang} />
          </LayoutWrapper>
        </ContextProvider>
      </body>
    </html>
  );
}
