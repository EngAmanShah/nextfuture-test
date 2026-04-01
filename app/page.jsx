import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Features from "@/components/Feature";
import ERP from "@/components/ERP";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Badge from "@/components/Badge/Badge";
import Market from "@/components/MarketLeader/Market";
import ValueSlider from "@/components/ValueSlider";
import Skills from "@/components/Skills/Skills";
import StartProject from "@/components/StartProject/StartProject";
import Testimonials from "@/components/Testimonials";
import ZakatAuthoritySection from "@/components/ZakatAuthoritySection";
import LogosSlider from "@/components/LogosSlider";
import HomeFAQ from "@/components/HomeFAQ";

export async function generateMetadata() {
  const baseUrl = "https://www.nextfuture-it.com";
  const canonicalUrl = `${baseUrl}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Next Future IT - Web & App Development, Digital Marketing, ERP Solutions",
    description:
      "Leading IT company in Saudi Arabia offering web development, mobile apps, digital marketing, ERP systems (Odoo, Property Management), and custom software solutions. Transform your business with Next Future Information Technology.",
    keywords:
      "IT solutions Saudi Arabia, web development, mobile app development, digital marketing, ERP systems, Odoo implementation, property management software, construction management, custom software development",
    authors: [{ name: "Next Future Information Technology" }],
    creator: "Next Future IT",
    openGraph: {
      url: canonicalUrl,
      type: "website",
      title: "Next Future IT - Web & App Development, Digital Marketing, ERP Solutions",
      description:
        "Leading IT company in Saudi Arabia offering web development, mobile apps, digital marketing, ERP systems (Odoo, Property Management), and custom software solutions.",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
  };
}

export default function Home() {
  const lang = "en";

  return (
    <>
      <Hero lang={lang} />
      <Offer lang={lang} />
      <Features lang={lang} />
      <ERP lang={lang} />
      <ZakatAuthoritySection lang={lang} />
      <Testimonials lang={lang} />
      <LogosSlider lang={lang} />
      <HomeFAQ lang={lang} />
    </>
  );
}
