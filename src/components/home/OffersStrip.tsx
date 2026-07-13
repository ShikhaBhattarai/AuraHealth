import { offers } from "../../lib/data";

export default function OffersStrip() {
  return (
    <div className="offers">
      <div className="wrap">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.title}>
            <div className="tag">{offer.tag}</div>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <a href={offer.href}>{offer.linkLabel}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
