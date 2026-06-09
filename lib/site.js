export const phoneDisplay = "0243-20 70 70";
export const phoneHref = "+46243207070";
export const bookingAppId = "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326";

export const siteConfig = {
  "folder": "taxirattvik.se",
  "packageName": "taxi-rattvik",
  "domain": "taxirattvik.se",
  "name": "Taxi Rättvik",
  "city": "Rättvik",
  "title": "Taxi Rättvik | Boka taxi dygnet runt",
  "description": "Taxi Rättvik erbjuder pålitlig taxi i Rättvik och Siljanområdet. Ring 0243-20 70 70 eller boka online för lokala resor, flygtaxi och tågtaxi.",
  "areaServed": [
    "Rättvik",
    "Vikarbyn",
    "Tällberg",
    "Siljan",
    "Dalarna"
  ],
  "intro": "Taxi Rättvik finns för dig som behöver en smidig resa i Rättvik, till stationen, hotellet, evenemanget eller vidare genom Siljanområdet.",
  "about": "Med fokus på punktlighet, trygg körning och enkel bokning hjälper vi privatpersoner, besökare och företag att resa bekvämt i Rättvik och Dalarna.",
  "routes": [
    "Rättvik station",
    "Vikarbyn",
    "Tällberg",
    "Leksand",
    "Mora",
    "Dala Airport"
  ],
  "mapQuery": "Rättvik,Dalarna,Sweden",
  "url": "https://taxirattvik.se",
  "phoneDisplay": "0243-20 70 70",
  "phoneHref": "+46243207070",
  "bookingAppId": "elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326"
};

export const navItems = [
  { href: "/", label: "Startsida" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakta-oss", label: "Kontakta oss" },
];

export const taxiSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: phoneHref,
  priceRange: "$$",
  image: `${siteConfig.url}/assets/img/hero-taxi.webp`,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: "Dalarna",
    addressCountry: "SE",
  },
  areaServed: siteConfig.areaServed.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: "Cash, Credit Card, Swish, Invoice",
};
