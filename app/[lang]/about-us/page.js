// app/[lang]/aboutus/page.js
import AboutUs from "../../../components/AboutUs/AboutUS";

export async function generateMetadata({ params }) {
  const lang = params.lang || "en";

const content = {
  en: {
    title: "About Next Future | Innovation, Technology & Growth",
    description:
      "Discover how Next Future Information Technology empowers businesses with innovative digital solutions. Learn about our mission, story, and comprehensive services in web development, mobile apps, IT consulting, digital marketing, and design.",
  },
  ar: {
    title: "عن نيكست  فيوتشر | الابتكار، التكنولوجيا والنمو",
    description:
      "اكتشف كيف تساهم شركة نيكست  فيوتشر لتقنية المعلومات في تمكين الشركات من خلال حلول رقمية مبتكرة. تعرف على مهمتنا وقصتنا وخدماتنا الشاملة في تطوير المواقع والتطبيقات، استشارات تكنولوجيا المعلومات، التسويق الرقمي، والتصميم.",
  },
};


  const t = content[lang];

  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://nextfuturetech.net/${lang}/aboutus`,
      images: [
        {
          url: "/aman.jpeg",
          width: 1200,
          height: 630,
          alt: "About Next Future",
        },
      ],
    },
    alternates: {
      languages: {
        en: "/en/aboutus",
        ar: "/ar/aboutus",
      },
    },
  };
}

export default function Page({ params }) {
  return <AboutUs params={params} />;
}
