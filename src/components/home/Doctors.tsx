import { doctors } from "../../lib/data";

export default function Doctors() {
  return (
    <section className="tint" id="doctors">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Meet Our Specialists</div>
          <h2>The doctors behind your care</h2>
        </div>
      </div>
      <div className="wrap doc-grid">
        {doctors.map((doctor) => (
          <div className="doc-card" key={doctor.slug}>
            {doctor.photo ? (
              <img className="avatar avatar-photo" src={doctor.photo} alt={doctor.name} />
            ) : (
              <div className="avatar">{doctor.initials}</div>
            )}
            <div>
              <h3>{doctor.name}</h3>
              <div className="role">{doctor.role}</div>
              <p>{doctor.bio}</p>
              <a href="#">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
