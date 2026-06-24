import Link from "next/link";
import BookingForm from "../../components/BookingForm";
import { phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

const seoTitle = "Taxi till Dalhalla från Rättvik | Boka Taxi dygnet runt";
const metaDescription = "Boka taxi till Dalhalla från Rättvik station, hotell, camping, Tällberg, Leksand och Mora. Trygg resa till och från konserten. Ring 0243-20 70 70.";
const pageTitle = "Taxi till Dalhalla från Rättvik";

const routes = [
  "Rättvik station → Dalhalla",
  "Hotell i Rättvik → Dalhalla",
  "Camping i Rättvik → Dalhalla",
  "Tällberg → Dalhalla",
  "Leksand → Dalhalla",
  "Mora → Dalhalla",
  "Vikarbyn → Dalhalla",
  "Dala Airport → Dalhalla",
];

const faqs = [
  {
    question: "Kan jag boka taxi till Dalhalla?",
    answer: "Ja. Du kan boka taxi till Dalhalla via telefon eller online. För större konserter och populära eventkvällar rekommenderar vi förbokning.",
  },
  {
    question: "Kör ni taxi från Rättvik station till Dalhalla?",
    answer: "Ja. Vi kör från Rättvik station till Dalhalla och kan även hjälpa med returresa efter konserten.",
  },
  {
    question: "Hur långt är det från Rättvik till Dalhalla?",
    answer: "Dalhalla ligger ungefär 7 km utanför Rättvik, vilket gör taxi till ett smidigt alternativ till och från evenemanget.",
  },
  {
    question: "Kan jag boka taxi efter konserten?",
    answer: "Ja. Returresa efter konserten går bra att boka, och vid större evenemang är det klokt att planera hämtning i förväg.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: pageTitle,
  serviceType: "Taxi till evenemang",
  url: `${siteConfig.url}/taxi-dalhalla-rattvik/`,
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
    canonical: "/taxi-dalhalla-rattvik/",
  },
  openGraph: {
    title: seoTitle,
    description: metaDescription,
    url: "/taxi-dalhalla-rattvik/",
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

export default function TaxiDalhallaPage() {
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
          <p className="eyebrow">Taxi till konserter & event</p>
          <h1>{pageTitle}</h1>
          <p>Boka taxi till Dalhalla från stationen, hotell, camping, Tällberg, Leksand, Mora, Vikarbyn eller Dala Airport.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`tel:${phoneHref}`}>Ring {phoneDisplay}</a>
            <a className="btn btn-secondary" href="#boka">Boka taxi online</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Fördelar med taxi till Dalhalla">
        <div className="container trust-grid">
          <div><strong>Ca 7 km</strong><span>Dalhalla ligger strax utanför Rättvik</span></div>
          <div><strong>Eventkvällar</strong><span>Smidig resa till och från konserten</span></div>
          <div><strong>Förboka</strong><span>Rekommenderas vid större konserter</span></div>
        </div>
      </section>

      <section className="section booking-section" id="boka">
        <div className="container split-grid">
          <BookingForm />
          <div className="content-stack">
            <p className="eyebrow">Dalhalla taxi</p>
            <h2>Bekväm resa till en konsertkväll nära Rättvik</h2>
            <p>Dalhalla ligger ungefär 7 km utanför Rättvik och lockar många besökare under konserter och evenemang. Taxi är ett enkelt val när du vill slippa parkering, väntetid och krångel med transport efter en sen kväll.</p>
            <p>Vi hjälper med körningar från Rättvik station, hotell, campingplatser och orter runt Siljan. Ska ni resa flera personer, komma med tåg eller boka retur efter evenemanget är det extra bra att boka i förväg.</p>
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
            <p className="eyebrow">När passar taxi?</p>
            <h2>Taxi för konsert, hotell, station och returresa</h2>
          </div>
          <div className="value-grid">
            <div>
              <h2>Före konserten</h2>
              <p>Kom fram i god tid från Rättvik station, hotell, camping eller närliggande orter utan att behöva leta parkering.</p>
            </div>
            <div>
              <h2>Efter evenemanget</h2>
              <p>Planera hemresan redan innan konserten, särskilt när många besökare ska resa samtidigt på kvällen.</p>
            </div>
            <div>
              <h2>För grupper</h2>
              <p>Taxi är praktiskt när flera personer reser tillsammans från boende, station eller flygplats till Dalhalla.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container local-grid">
          <div>
            <p className="eyebrow">Populära sträckor</p>
            <h2>Populära taxiresor till Dalhalla</h2>
            <p>Ring <a href={`tel:${phoneHref}`}>{phoneDisplay}</a> för snabb bokning eller använd formuläret om du vill förboka taxi till eller från Dalhalla.</p>
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
            <p className="eyebrow">Evenemang i Rättvik</p>
            <h2>Planera taxin innan det blir rusning</h2>
            <p>Vid större konserter och fullsatta kvällar reser många till och från Dalhalla samtidigt. Förbokning gör det enklare att samordna upphämtning, returresa och eventuell anslutning till tåg, hotell eller camping.</p>
          </div>
          <div className="event-links event-links--dark">
            <Link href="/taxi-classic-car-week-rattvik">Taxi till Classic Car Week i Rättvik</Link>
            <Link href="/bud-paket">Bud & paket med Taxi Rättvik</Link>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">FAQ</p>
            <h2>Vanliga frågor om taxi till Dalhalla</h2>
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
          <p>Taxi Rättvik är inte arrangör av Dalhalla, men hjälper besökare med resan till och från evenemanget.</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Boka taxi till Dalhalla</p>
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
