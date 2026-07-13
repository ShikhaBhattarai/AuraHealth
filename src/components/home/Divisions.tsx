import { divisions, comingSoon, Division } from "../../lib/data";

const cardId: Record<Division["icon"], string | undefined> = {
  pediatric: undefined,
  dental: "dental",
  pharmacy: "pharmacy",
};

const icons: Record<Division["icon"], JSX.Element> = {
  pediatric: <path d="M12 21c-4-3-8-6-8-11a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5-4 8-8 11z" />,
  dental: (
    <path d="M12 3c-3 0-5 2-5 5 0 4 2 6 2 10 0 1.5 1 2 1.5 2s1.2-1 1.5-3c.3 2 .7 3 1.5 3s1.5-.5 1.5-2c0-4 2-6 2-10 0-3-2-5-5-5z" />
  ),
  pharmacy: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </>
  ),
};

export default function Divisions() {
  return (
    <section id="pediatric">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Our Care</div>
          <h2>Everything your family needs, under one roof</h2>
        </div>
      </div>
      <div className="wrap div-grid">
        {divisions.map((division) => (
          <div className="div-card" id={cardId[division.icon]} key={division.slug}>
            <div className="icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                {icons[division.icon]}
              </svg>
            </div>
            <h3>{division.name}</h3>
            <div className="who">{division.who}</div>
            <p>{division.description}</p>
            <div className="sublist">
              {division.services.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
            <a className="explore" href="#">
              Explore {division.name} →
            </a>
          </div>
        ))}
      </div>
      <div className="wrap">
        <div className="soon-card">
          <span className="tag">{comingSoon.tag}</span>
          <h3 style={{ fontSize: 18, marginTop: 12 }}>{comingSoon.title}</h3>
          <p>{comingSoon.description}</p>
        </div>
      </div>
    </section>
  );
}
