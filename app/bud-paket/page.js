import BudPackageForm from "../../components/BudPackageForm";
import { phoneDisplay, phoneHref, siteConfig } from "../../lib/site";

const pageTitle = `Bud & paket med taxi i ${siteConfig.city}`;
const pageDescription = `Skicka bud och paket med ${siteConfig.name}. Snabb dörr-till-dörr-leverans i ${siteConfig.city}, Siljanområdet och Dalarna med enkel bokning online eller via telefon.`;

const deliveryItems = [
  "Dokument och avtal",
  "Nycklar och mindre föremål",
  "Reservdelar och arbetsmaterial",
  "Butiksvaror och lokala paket",
  "Akuta företagsleveranser",
  "Planerade budkörningar",
];

const faqs = [
  {
    question: `Kör ${siteConfig.name} bud och paket?`,
    answer: `Ja. Vi hjälper både privatpersoner och företag med bud, paket och mindre leveranser i ${siteConfig.city}, Siljanområdet och vidare i Dalarna.`,
  },
  {
    question: "Hur snabbt kan ett paket levereras?",
    answer: "Vid expressbud hämtar vi så snart en bil finns tillgänglig och kör direkt till mottagaren. För brådskande leveranser är telefon oftast snabbast.",
  },
  {
    question: "Kan jag få fast pris innan budet körs?",
    answer: "Ja. Skicka uppgifter om upphämtning, destination, storlek och önskad tid så återkommer vi med prisförslag innan körningen bekräftas.",
  },
  {
    question: "Vilka uppgifter behövs för att boka bud?",
    answer: "Vi behöver upphämtningsadress, mottagaradress, kontaktpersoner, telefonnummer, ungefärlig storlek på paketet och om leveransen är brådskande.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: pageTitle,
  serviceType: "Bud- och pakettransport med taxi",
  url: `${siteConfig.url}/bud-paket/`,
  description: pageDescription,
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
  title: `${pageTitle} | Snabb leverans dygnet runt`,
  description: pageDescription,
  alternates: {
    canonical: "/bud-paket/",
  },
  openGraph: {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: "/bud-paket/",
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

export default function BudPackagePage() {
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
          <p className="eyebrow">Snabb & säker leverans</p>
          <h1>Bud & paket med Taxi Rättvik</h1>
          <p>När en leverans inte kan vänta kör vi ditt paket direkt från dörr till dörr i Rättvik, Siljanområdet och Dalarna.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#budform">Boka bud online</a>
            <a className="btn btn-secondary" href={`tel:${phoneHref}`}>Ring {phoneDisplay}</a>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Fördelar med taxibud">
        <div className="container trust-grid">
          <div><strong>Direkt</strong><span>Leverans utan onödiga omlastningar</span></div>
          <div><strong>24/7</strong><span>Budservice när behovet uppstår</span></div>
          <div><strong>Dörr till dörr</strong><span>Personlig hämtning och överlämning</span></div>
        </div>
      </section>

      <section className="section booking-section" id="budform">
        <div className="container split-grid">
          <BudPackageForm />
          <div className="content-stack">
            <p className="eyebrow">Taxibud i Rättvik</p>
            <h2>Snabb direktleverans när tiden är viktig</h2>
            <p>Traditionell frakt passar inte alltid när ett paket, dokument eller en reservdel behöver komma fram samma dag. Med taxibud från {siteConfig.name} får du en smidig transport där försändelsen hämtas upp och körs direkt till mottagaren.</p>
            <p>Vi hjälper företag, butiker, hotell, restauranger och privatpersoner med lokala bud i Rättvik samt längre körningar inom Dalarna.</p>
            <div className="image-pair">
              <span className="photo-frame">
                <img src="/assets/img/service-train.webp" alt={`Taxibud i ${siteConfig.city}`} width="750" height="500" loading="lazy" />
              </span>
              <span className="photo-frame">
                <img src="/assets/img/taxi-interior.webp" alt="Säker pakettransport med taxi" width="750" height="500" loading="lazy" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Fördelar</p>
            <h2>Varför välja taxi för bud & paket?</h2>
          </div>
          <div className="value-grid">
            <div>
              <h2>Snabbare väg fram</h2>
              <p>En taxi kör direkt från upphämtning till mottagare, vilket passar extra bra för expressbud och tidskritiska leveranser.</p>
            </div>
            <div>
              <h2>Trygg hantering</h2>
              <p>Paketet ligger i bilen under körningen och lämnas personligen till mottagaren enligt de uppgifter du skickar in.</p>
            </div>
            <div>
              <h2>Flexibel bokning</h2>
              <p>Boka akuta bud via telefon eller använd formuläret för planerade körningar, återkommande företagsbud och prisförfrågan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container local-grid">
          <div>
            <p className="eyebrow">Så fungerar det</p>
            <h2>Från förfrågan till leverans</h2>
            <p>Beskriv vad som ska skickas, var det ska hämtas och när det behöver vara framme. För snabbast hjälp med akuta bud, ring oss direkt på <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>.</p>
          </div>
          <ol className="process-list">
            <li><span>1</span><strong>Skicka förfrågan</strong><p>Ange upphämtning, mottagare, kontaktuppgifter och ungefärlig storlek på paketet.</p></li>
            <li><span>2</span><strong>Få bekräftelse</strong><p>Vi återkommer med tillgänglighet, prisförslag och planerad upphämtningstid.</p></li>
            <li><span>3</span><strong>Direkt leverans</strong><p>Föraren hämtar paketet och kör det direkt till mottagaren utan onödiga mellanstopp.</p></li>
          </ol>
        </div>
      </section>

      <section className="section section-dark">
        <img className="section-bg" src="/assets/img/bg-1.webp" alt="" aria-hidden="true" loading="lazy" />
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Vad kan skickas?</p>
            <h2>Bud för vardag, företag och lokala behov</h2>
            <p>Taxibud passar mindre försändelser som behöver komma fram snabbt, tryggt och med tydlig kontakt hela vägen.</p>
          </div>
          <ul className="delivery-list">
            {deliveryItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">FAQ</p>
            <h2>Vanliga frågor om bud & paket</h2>
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

      <section className="cta-band">
        <div className="container cta-grid">
          <div>
            <p className="eyebrow">Behöver paketet iväg?</p>
            <h2>Ring {phoneDisplay} eller boka bud online.</h2>
          </div>
          <a className="btn btn-primary" href="#budform">Boka bud & paket</a>
        </div>
      </section>
    </>
  );
}
