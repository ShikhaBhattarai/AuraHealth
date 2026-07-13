import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { siteConfig } from "../../lib/data";

export default function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap">
        <div className="left">
          <a href={siteConfig.addressHref} target="_blank" rel="noopener noreferrer">
            📍 {siteConfig.address}
          </a>
          <a href={siteConfig.phoneHref}>📞 {siteConfig.phone}</a>
        </div>
        <div className="left">
          <a href="https://facebook.com/Aurahealthclinic" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} aria-hidden="true" />
          </a>
          <a href="https://www.tiktok.com/@aura.health.clinic/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FontAwesomeIcon icon={faTiktok} aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/aura.health.clinic" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
