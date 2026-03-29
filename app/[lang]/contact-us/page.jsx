import ContactUsClient from "@/components/ClientContact";

export async function generateMetadata({ params }) {
  const { lang } = await params;

const metaContent = {
  en: {
    title: "Next Future",
    description:
      "Get in touch with Next Future Information Technology for questions, feedback, or inquiries. Our team is ready to assist you!",
  },
  ar: {
    title: "تواصل معنا",
    description:
      "تواصل مع شركة نكست فيوتشر لتقنية المعلومات لأي استفسارات أو ملاحظات أو استفسارات عامة. فريقنا جاهز لمساعدتك!",
  },
};


  const { title, description } = metaContent[lang] || metaContent.en;
  const baseUrl = "https://NextFutureTech.net";
  const canonicalUrl = `${baseUrl}/${lang}/contact-us`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en/contact-us`,
        ar: `${baseUrl}/ar/contact-us`,
      },
    },
    openGraph: { title, description, type: "website", url: canonicalUrl },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ContactUsPage({ params }) {
  const { lang } = await params;
  return <ContactUsClient lang={lang} />;
}
