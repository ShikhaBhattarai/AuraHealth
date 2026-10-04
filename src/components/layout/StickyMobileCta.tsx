import { siteConfig } from "../../lib/data";

export default function StickyMobileCta() {
  return (
    <div className="sticky-cta">
      <div className="row">
        <a className="call" href={siteConfig.phoneHref}>
          Call Now To Book Appointment
        </a>
        <a
          className="whatsapp-link"
          href="https://wa.me/9779841476401?text=Hello%20Aura%20Health%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          Message On WHATSAPP
        </a>
        <a className="book" href="#appointment">
          Book Appointment
        </a>
      </div>
    </div>
  );
}
