import { siteConfig, pediatricNavLinks, dentalNavLinks } from "../../lib/data";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <Logo />
        <nav className="primary">
          <div className="item">
            <a className="top" href="#pediatric">
              Pediatric Care ▾
            </a>
            <div className="drop">
              {pediatricNavLinks.map((label) => (
                <a key={label} href="#pediatric">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="item">
            <a className="top" href="#dental">
              Dental Care ▾
            </a>
            <div className="drop">
              {dentalNavLinks.map((label) => (
                <a key={label} href="#dental">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <a className="top" href="#pharmacy">
            Pharmacy
          </a>
          <a className="top" href="#doctors">
            Doctors
          </a>
          <a className="top" href="#faq">
            FAQ
          </a>
        </nav>
        <div className="head-actions">
          <a className="phone-link" href="tel:+97714533417">
            Book Appointment <br />
            +977 1-4533417
          </a>
          <a
            className="whatsapp-link"
            href="https://wa.me/9779841476401?text=Hello%20Aura%20Health%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            +9779841476401
          </a>
          <Button href="#appointment">Book Appointment</Button>
        </div>
      </div>
    </header>
  );
}
