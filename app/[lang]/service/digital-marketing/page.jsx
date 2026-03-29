// app/digital-marketing/[lang]/page.js

import React from "react";
import DigitalMarketingPage from "../../../../components/Service/servicepages/DigitalMarketingPage";

export async function generateMetadata({ params }) {
  const { lang } = params;

  const translations = {
    en: {
      title: "Digital Marketing Services | Next Future Information Technology",
      description:
        "Boost your online presence with Next Future Information Technology’s digital marketing services: SEO, PPC, social media, influencer, and video marketing strategies that deliver measurable results.",
      keywords:
        "digital marketing, SEO, PPC, social media marketing, influencer marketing, email campaigns, video marketing, Next Future Information Technology",
    },
    ar: {
      title: "خدمات التسويق الرقمي | نكست فيوتشر لتقنية المعلومات",
      description:
        "عزز وجودك على الإنترنت مع خدمات التسويق الرقمي من نكست فيوتشر لتقنية المعلومات: تحسين محركات البحث، PPC، التسويق عبر وسائل التواصل الاجتماعي، المؤثرين، والفيديو.",
      keywords:
        "التسويق الرقمي, تحسين محركات البحث, إعلانات PPC, التسويق عبر وسائل التواصل الاجتماعي, التسويق عبر المؤثرين, التسويق عبر البريد الإلكتروني, التسويق بالفيديو, نكست فيوتشر لتقنية المعلومات",
    },
  };

  const t = translations[lang] ?? translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://brandraize.com/digital-marketing/${lang}`,
      siteName: "Next Future Information Technology",
      images: [
        {
          url: "https://brandraize.com/images/digital-marketing-banner.jpg",
          width: 1200,
          height: 630,
          alt: t.title,
        },
      ],
      locale: lang === "ar" ? "ar" : "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["https://brandraize.com/images/digital-marketing-banner.jpg"],
    },
  };
}

export default function Page({ params }) {
  return <DigitalMarketingPage params={params} />;
}
