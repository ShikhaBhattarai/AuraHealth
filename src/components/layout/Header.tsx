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
          <a className="phone-link" href={siteConfig.phoneHref}>
            {siteConfig.phone}
          </a>
          <Button href="#appointment">Book Appointment</Button>
        </div>
      </div>
    </header>
  );
}
