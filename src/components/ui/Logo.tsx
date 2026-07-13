import logoImage from "../../assets/logo/aura-health-logo.jpeg";

export default function Logo() {
  return (
    <a className="logo" href="/" aria-label="Aura Health Clinic — home">
      <img className="logo-image" src={logoImage} alt="Aura Health Clinic" />
    </a>
  );
}
