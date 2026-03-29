export const dynamic = "force-dynamic";
import AllProducts from "@/components/AllProducts";
import Products from "@/components/Products/Products";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const metas = {
    en: {
      title: "Our Services - Next Future",
      description:
        "Explore Next Future Information Technology's full range of digital and IT services! From web and mobile app development to digital marketing and IT solutions, we deliver innovative services that elevate your business and drive measurable results.",
    },
    ar: {
      title: "خدماتنا - نكست فيوتشر",
      description:
        "استعرض مجموعة نكست فيوتشر الكاملة من الخدمات الرقمية وحلول تكنولوجيا المعلومات! من تطوير المواقع والتطبيقات إلى التسويق الرقمي وحلول تقنية مبتكرة، نقدم خدمات ترتقي بأعمالك وتحقق نتائج ملموسة.",
    },
  };

  const meta = metas[lang] || metas.en;
  const baseUrl = "https://nextfuture.com";

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}/${lang}/projects`,
    },
    alternates: {
      languages: {
        en: "/en/projects",
        ar: "/ar/projects",
      },
    },
  };
}

export default function Page({ params }) {
  const { lang } = params;

  return (
    <>
      <AllProducts lang={lang} />
      <Products lang={lang} />
    </>
  );
}

