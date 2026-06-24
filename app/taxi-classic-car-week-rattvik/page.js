import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import { phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

const seoTitle = "Taxi till Classic Car Week i Rättvik | Boka Taxi dygnet runt";
const metaDescription = "Besöker du Classic Car Week i Rättvik? Boka taxi till Rättviksparken, centrum, stationen, hotell, camping och orter runt Siljan. Ring 0243-20 70 70.";
const pageTitle = "Taxi till Classic Car Week i Rättvik";

const routes = [
  "Rättvik station → Rättviksparken",
  "Centrum → hotell",
  "Camping → centrum",
  "Tällberg → Rättvik",
  "Leksand → Rättvik",
  "Mora → Rättvik",
  "Vikarbyn → Rättvik",
  "Dala Airport → Rättvik",
];

const faqs = [
  {
    question: "Kan jag boka taxi under Classic Car Week i Rättvik?",
    answer: "Ja. Du kan boka taxi under Classic Car Week via telefon eller online. Förbokning rekommenderas eftersom många reser samtidigt.",
  },
  {
    question: "Kör ni till Rättviksparken?",
    answer: "Ja. Vi kör till Rättviksparken, centrum, stationen, hotell, camping och andra platser i och runt Rättvik.",
  },
  {
    question: "Kan jag boka taxi på kvällen efter cruising?",
    answer: "Ja. Det går bra att boka taxi på kvällen, men under intensiva eventdagar är det klokt att planera resan i förväg.",
  },
  {
    question: "Kör ni från Tällberg, Leksand eller Mora till Rättvik?",
    answer: "Ja. Vi hjälper med resor från Tällberg, Leksand, Mora, Vikarbyn och andra orter runt Siljan till Rättvik.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: pageTitle,
  serviceType: "Taxi till evenemang",
  url: `${siteConfig.url}/taxi-classic-car-week-rattvik/`,
  description: metaDescription,
  provider: {
    "@type": "TaxiService",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: phoneHref,
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const metadata = {
  title: {
    absolute: seoTitle,
  },
  description: metaDescription,
  alternates: {
    canonical: "/taxi-classic-car-week-rattvik/",
  },
  openGraph: {
    title: seoTitle,
    description: metaDescription,
    url: "/taxi-classic-car-week-rattvik/",
    images: [
      {
        url: "/assets/img/hero-taxi.webp",
        width: 1600,
        height: 854,
        alt: pageTitle,
      },
    ],
  },
};

export default function TaxiClassicCarWeekPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, faqSchema]) }}
      />

      <section className="page-hero">
        <img src="/assets/img/hero-taxi.webp" alt={pageTitle} width="1600" height="854" />
        <div className="hero-overlay"></div>
        <div className="container page-hero-content">
          <p className="eyebrow">Taxi under Classic Car Week</p>
          <h1>{pageTitle}</h1>
          <p>Boka taxi till Rättviksparken, centrum, stationen, hotell, camping och orter runt Siljan under en av Rättviks mest besökta veckor.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring {phoneDisplay}</a>
            <a className="btn btn-secondary" href="#boka">Boka taxi online</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Fördelar med taxi under Classic Car Week">
        <div className="container trust-grid">
          <div><strong>Eventvecka</strong><span>Många besökare, bilar och aktiviteter</span></div>
          <div><strong>Kvällar</strong><span>Smidigt efter cruising och aktiviteter</span></div>
          <div><strong>Förboka</strong><span>Bäst när många reser samtidigt</span></div>
        </div>
      </section>

      <section className="section booking-section" id="boka">
        <div className="container split-grid">
          <BookingForm />
          <div className="content-stack">
            <p className="eyebrow">Classic Car Week taxi</p>
            <h2>Taxi när Rättvik fylls av bilar, besökare och aktiviteter</h2>
            <p>Classic Car Week är ett stort årligt bilevenemang i Rättvik med många besökare, veteranbilar, cruising och aktiviteter. Under intensiva dagar kan taxi vara ett bekvämt sätt att resa mellan stationen, Rättviksparken, centrum, hotell och camping.</p>
            <p>Taxi är särskilt praktiskt vid tågresor, sena kvällar, cruising, hotellresor, campingresor och returresor när många vill röra sig samtidigt. Förbokning rekommenderas under Classic Car Week.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring {phoneDisplay}</a>
              <Link className="btn btn-secondary" href="/kontakta-oss">Kontakta oss</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Under eventet</p>
            <h2>Smidig transport under livliga dagar i Rättvik</h2>
          </div>
          <div className="value-grid">
            <div>
              <h2>Tåg & station</h2>
              <p>Kommer du med tåg kan taxi ta dig vidare från Rättvik station till Rättviksparken, boende eller centrum.</p>
            </div>
            <div>
              <h2>Kväll & cruising</h2>
              <p>På kvällar och efter cruising är taxi ett tryggt alternativ för resan tillbaka till hotell, camping eller närliggande ort.</p>
            </div>
            <div>
              <h2>Hotell & camping</h2>
              <p>Boka resor mellan camping, hotell, centrum och aktiviteter så att du kan fokusera på upplevelsen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container local-grid">
          <div>
            <p className="eyebrow">Populära sträckor</p>
            <h2>Populära taxiresor under Classic Car Week</h2>
            <p>Ring <a href={`tel:${phoneHref}`}>{phoneDisplay}</a> för snabb bokning eller använd formuläret om du vill förboka taxi under Classic Car Week.</p>
          </div>
          <ul className="route-list">
            {routes.map((route) => <li key={route}>{route}</li>)}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <img className="section-bg" src="/assets/img/bg-1.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Planera resan</p>
            <h2>Förboka när många vill resa samtidigt</h2>
            <p>Under Classic Car Week kan trycket på transporter öka snabbt, särskilt vid ankomster, kvällsaktiviteter och sena returer. Förbokning gör det enklare att få en tydlig upphämtningstid och en smidig resa.</p>
          </div>
          <div className="event-links event-links--dark">
            <Link href="/taxi-dalhalla-rattvik">Taxi till Dalhalla från Rättvik</Link>
            <Link href="/bud-paket">Bud & paket med Taxi Rättvik</Link>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">FAQ</p>
            <h2>Vanliga frågor om taxi under Classic Car Week</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Information</h2>
          <p>Taxi Rättvik är inte arrangör av Classic Car Week, men hjälper besökare med resan till och från evenemanget.</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Boka taxi under Classic Car Week</p>
            <h2>Ring {phoneDisplay} eller boka taxi online.</h2>
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring {phoneDisplay}</a>
            <a className="btn btn-secondary" href="#boka">Boka taxi online</a>
          </div>
        </div>
      </section>
    </>
  );
}
