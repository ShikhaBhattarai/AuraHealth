import auraClinicImage from "../../assets/images/aura-clinic-baneswor.png";

export default function Intro() {
  return (
    <section id="about">
      <div className="wrap intro-grid">
        <div className="stat-card">
          <h2>Our Local Clinic in New Baneshwor</h2>
          <div className="eyebrow">Quality healthcare should feel like home</div>
          <p>
            At Aura Health Clinic Pvt. Ltd., we provide caring and reliable dental and pediatric services for individuals and families. Located in New Baneshwor, Kathmandu, our clinic offers a clean, comfortable, and friendly environment where patients of all ages feel welcome.
          </p>
          <p>
            Our goal is to help you and your family stay healthy. Whether you need a regular check-up, dental treatment, or care for your child, our experienced team is here to provide safe, quality healthcare with compassion and respect.
          </p>
        </div>
        <div className="intro-visual">
          <img
            src={auraClinicImage}
            alt="Aura Health Clinic in New Baneshwor"
            className="intro-image"
          />
        </div>
      </div>
    </section>
  );
}
