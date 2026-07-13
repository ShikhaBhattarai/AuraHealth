import React, { useRef, useState, useEffect } from "react";
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
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const check = () => setCanScroll(el.scrollWidth > el.clientWidth + 5);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const scrollByCard = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    // width of one card (approx) including gap
    const card = el.querySelector<HTMLElement>(".feat-card");
    const gap = 20; // matches CSS gap
    const step = (card?.clientWidth || (el.clientWidth / 3)) + gap;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="why-choose">
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

      <div className="feat-carousel wrap">
        {canScroll && (
          <div className="feat-nav">
            <button
              aria-label="Previous features"
              className="feat-prev"
              onClick={() => scrollByCard(-1)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              aria-label="Next features"
              className="feat-next"
              onClick={() => scrollByCard(1)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth={2}>
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        )}

        <div className="feat-grid" ref={scrollerRef}>
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
      </div>
    </section>
  );
}
