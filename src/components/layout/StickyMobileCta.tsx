import { siteConfig } from "../../lib/data";

export default function StickyMobileCta() {
  return (
    <div className="sticky-cta">
      <div className="row">
        <a className="call" href={siteConfig.phoneHref}>
          Call Now
        </a>
        <a className="book" href="#appointment">
          Book Appointment
        </a>
      </div>
    </div>
  );
}
