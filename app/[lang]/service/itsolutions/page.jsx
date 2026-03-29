import React from "react";
import ITSolutionsPage from "../../../../components/Service/servicepages/ITSolutionsPage";

export async function generateMetadata({ params }) {
  const { lang } = params;

  const translations = {
    en: {
      title: "IT Solutions Services | Next Future Information Technology",
      description:
        "Innovative IT solutions by Next Future Information Technology: Cloud, Cybersecurity, Infrastructure, Networking, Software Support, and Database Management to grow your business.",
      keywords:
        "IT solutions, cloud services, cybersecurity, IT infrastructure, network management, software support, database management, Next Future Information Technology",
    },
    ar: {
      title: "خدمات حلول تكنولوجيا المعلومات | نكست فيوتشر لتقنية المعلومات",
      description:
        "خدمات تكنولوجيا المعلومات من نكست فيوتشر لتقنية المعلومات: حلول السحابة، الأمن السيبراني، البنية التحتية، الشبكات، دعم البرمجيات، وإدارة قواعد البيانات لتطوير أعمالك.",
      keywords:
        "حلول تكنولوجيا المعلومات, الخدمات السحابية, الأمن السيبراني, البنية التحتية لتكنولوجيا المعلومات, إدارة الشبكات, دعم البرمجيات, إدارة قواعد البيانات, نكست فيوتشر لتقنية المعلومات",
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
      url: `https://Next Future Information Technology.com/it-solutions/${lang}`,
      siteName: "Next Future Information Technology",
      images: [
        {
          url: "https://Next Future Information Technology.com/images/it-solutions-banner.jpg",
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
      images: ["https://Next Future Information Technology.com/images/it-solutions-banner.jpg"],
    },
  };
}

export default function Page({ params }) {
  return <ITSolutionsPage params={params} />;
}
