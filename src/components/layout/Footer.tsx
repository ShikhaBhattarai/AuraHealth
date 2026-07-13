import { siteConfig } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot-grid">
        <div>
          <div className="foot-logo">Aura Health Clinic</div>
          <p style={{ color: "#A4B9C9", fontSize: "13.5px" }}>
            Pvt. Ltd. —{" "}
            <a href={siteConfig.addressHref} target="_blank" rel="noopener noreferrer">
              {siteConfig.address}
            </a>
            . Healthy Children. Beautiful Smiles. Healthier Families.
          </p>
        </div>
        <div>
          <h4>Care</h4>
          <ul>
            <li>
              <a href="#pediatric">Pediatric Care</a>
            </li>
            <li>
              <a href="#dental">Dental Care</a>
            </li>
            <li>
              <a href="#pharmacy">Pharmacy</a>
            </li>
            <li>
              <a href="#doctors">Doctors</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Clinic</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#appointment">Book Appointment</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Hours</h4>
          <table className="hours-table">
            <tbody>
              {siteConfig.hours.map((h) => (
                <tr key={h.days}>
                  <td>{h.days}</td>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="wrap bottom-bar">
        <span>© {siteConfig.legalName}</span>
        <span>Privacy Policy · Terms</span>
      </div>
    </footer>
  );
}
