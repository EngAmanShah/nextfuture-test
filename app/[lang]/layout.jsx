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
  await params;

  return (
    <>{children}</>
  );
}
