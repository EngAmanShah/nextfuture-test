import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Features from "@/components/Feature";
import ERP from "@/components/ERP";
import ZakatAuthoritySection from "@/components/ZakatAuthoritySection";

const Testimonials = dynamic(() => import("@/components/Testimonials"));
const LogosSlider = dynamic(() => import("@/components/LogosSlider"));
const HomeFAQ = dynamic(() => import("@/components/HomeFAQ"));

export default async function Home({ params }) {
  const { lang } = await params;

  const content = {
    en: {
      headingTitle: "Step into the future with Next Future",
      heroHeadline:
        "We place you at the center of digital transformation with innovative, comprehensive tech solutions.",
      heroBig:
        "We create solutions that support your ambitions and meet your business needs.",
      heroFooter: "Helping you adapt to rapid changes in the tech world.",
      shopNow: "Discover Our Services",
      whyChooseTitle: "Why Partner with Next Future",
      whyChooseDescription:
        "We understand your needs and deliver innovative, tailored solutions.",
    },
    ar: {
      headingTitle: "انطلق نحو المستقبل مع نكست فيوتشر",
      heroHeadline: "نضعك في قلب التحول الرقمي مع حلول تقنية مبتكرة وشاملة",
      heroBig:
        "نقدم لك حلولا مصممة لدعم طموحاتك ولتلبية احتياجات عملك، مما يساعدك على التكيف مع التغيرات السريعة في عالم التقنية.",
      heroFooter: "نساعدك على التأقلم مع التغيرات السريعة في عالم التقنية.",
      shopNow: "اكتشف خدماتنا",
      whyChooseTitle: "لماذا تختار نكست فيوتشر",
      whyChooseDescription: "نتفهم احتياجاتك ونقدم حلولاً مبتكرة",
    },
  };

  const { whyChooseTitle, whyChooseDescription } = content[lang] || content.en;

  return (
    <>
      <Hero lang={lang} />

      <Offer lang={lang} />

      <Features
        lang={lang}
        title={whyChooseTitle}
        subtitle={whyChooseDescription}
      />
      <ERP lang={lang} />

      <ZakatAuthoritySection lang={lang} />

      {/* <ServicesSection params={{ lang }} /> */}

      {/* NextFuture ERP Section */}

      {/* <Badge lang={lang} /> */}
      {/* <Market lang={lang} /> */}
      {/* <ValueSlider lang={lang} /> */}

      {/* <Products lang={lang} /> */}
      <Testimonials lang={lang} />
      <LogosSlider lang={lang} />
      <HomeFAQ lang={lang} />
      {/* <Skills lang={lang} /> */}
      {/* <StartProject lang={lang} /> */}
    </>
  );
}
