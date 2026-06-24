"use client";

import Script from "next/script";
import { budPackageAppId } from "../lib/site";

export default function BudPackageForm({ variant = "light" }) {
  return (
    <div className={`booking-box booking-box--${variant}`}>
      <p className="eyebrow">Boka bud online</p>
      <h2>Skicka bud & paket</h2>
      <p className="form-note">Fyll i formuläret med upphämtning, mottagare och vad som ska levereras så återkommer vi med bekräftelse.</p>
      <div className={budPackageAppId} data-elfsight-app-lazy></div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </div>
  );
}
