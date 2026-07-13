import { sampleReviews, googleRating } from "../../lib/data";

export default function Reviews() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Hear From Our Families</div>
          <h2>Families across Kathmandu trust Aura</h2>
        </div>
        <div className="sample-note">Sample layout — to populate with real Google Reviews at launch</div>
        <div className="rating-row">
          <span className="stars">★★★★★</span>
          <span className="rating-num">{googleRating.score}</span>
          <span className="rating-src">{googleRating.source}</span>
        </div>
      </div>
      <div className="wrap rev-grid">
        {sampleReviews.map((review) => (
          <div className="rev-card" key={review.who}>
            <span className="stars">★★★★★</span>
            <p>"{review.quote}"</p>
            <div className="who">— {review.who}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
