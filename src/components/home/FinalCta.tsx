import Button from "../ui/Button";

export default function FinalCta() {
  return (
    <section className="cta-band" style={{ paddingTop: 100 }}>
      <div className="wrap">
        <h2>Ready to visit Aura Health Clinic?</h2>
        <p>Healthy children. Beautiful smiles. Healthier families. Book your appointment today.</p>
        <Button href="#appointment" variant="onlight">
          Book Appointment
        </Button>
      </div>
    </section>
  );
}
