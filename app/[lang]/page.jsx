import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Features from "@/components/Feature";
import ERP from "@/components/ERP";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Badge from "@/components/Badge/Badge";
import Market from "@/components/MarketLeader/Market";
import ValueSlider from "@/components/ValueSlider";
import Products from "@/components/Products/Products";
import Skills from "@/components/Skills/Skills";
import StartProject from "@/components/StartProject/StartProject";
import Testimonials from "@/components/Testimonials";
import ZakatAuthoritySection from "@/components/ZakatAuthoritySection";
import LogosSlider from "@/components/LogosSlider";
import HomeFAQ from "@/components/HomeFAQ";

export default async function Home({ params }) {
  const { lang } = await params;

  const content = {
    en: {
      headingTitle: "Launch into the future with Next Future",
      heroHeadline:
        "We put you at the heart of digital transformation with innovative, comprehensive tech solutions.",
      heroBig:
        "We build solutions that support your ambitions and meet your business needs.",
      heroFooter:
        "Helping you adapt to rapid changes in the tech world.",
      shopNow: "Discover Our Services",
      whyChooseTitle: "Why Partner with Next Future Information",
      whyChooseDescription:
        "We deliver impactful solutions across industries, helping businesses grow sustainably and gain global recognition.",
    },
    ar: {
      headingTitle: "انطلق نحو المستقبل مع نكست فيوتشر",
      heroHeadline: "نضعك في قلب التحول الرقمي مع حلول تقنية مبتكرة وشاملة",
      heroBig:
        "نقدم لك حلولا مصممة لدعم طموحاتك ولتلبية احتياجات عملك، مما يساعدك على التكيف مع التغيرات السريعة في عالم التقنية.",
      heroFooter:
        "نساعدك على التأقلم مع التغيرات السريعة في عالم التقنية.",
      shopNow: "اكتشف خدماتنا",
      whyChooseTitle: "لماذا تختار نكست فيوتشر",
      whyChooseDescription:
        "نقدّم حلولاً مبتكرة عبر مختلف الصناعات، لمساعدة الشركات على تحقيق نمو مستدام وبناء سمعة قوية على المستوى العالمي.",
    },
  };

  const {
    headingTitle,
    heroHeadline,
    heroBig,
    heroFooter,
    shopNow,
    whyChooseTitle,
    whyChooseDescription,
  } = content[lang] || content.en;

  return (
    <>
      <Hero lang={lang} />

      <Offer lang={lang} />

        <Features lang={lang} />
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
