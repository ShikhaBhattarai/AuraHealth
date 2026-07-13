import { whyChooseUs } from "../../lib/data";

const icons: Record<string, JSX.Element> = {
  "Experienced Specialists": (
    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
  ),
  "Personalized Care": (
    <>
      <path d="M4 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <circle cx="10" cy="7" r="4" />
    </>
  ),
  "Full Range of Care": (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
    </>
  ),
  "Modern Technology": (
    <>
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  "Convenient Location": <path d="M20 12H4M4 12l6-6M4 12l6 6" />,
  "Family-Friendly": (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  ),
};

export default function WhyChooseUs() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head center">
          <div className="eyebrow">Why Families Choose Us</div>
          <h2>Compassionate care, modern standards</h2>
          <p className="center">
            We combine attentive, unhurried care with genuinely modern facilities — the kind of clinic where you're
            never rushed, and never a stranger twice.
          </p>
        </div>
      </div>
      <div className="wrap feat-grid">
        {whyChooseUs.map((feature) => (
          <div className="feat-card" key={feature.title}>
            <div className="feat-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                {icons[feature.title]}
              </svg>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
