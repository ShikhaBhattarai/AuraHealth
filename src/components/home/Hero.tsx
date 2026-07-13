import { useEffect, useState } from "react";
import { siteConfig } from "../../lib/data";
import Button from "../ui/Button";

// Picks up every image dropped into src/assets/homepage-slides/ automatically —
// Vite's glob import re-scans this folder on each dev reload and build.
const slideModules = import.meta.glob("../../assets/homepage-slides/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const slides = Object.keys(slideModules)
  .sort()
  .map((path) => slideModules[path]);

const SLIDE_INTERVAL_MS = 5000;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" style={{ paddingTop: 96 }}>
      {slides.length > 0 && (
        <>
          <div className="hero-slides" aria-hidden="true">
            {slides.map((src, i) => (
              <div
                key={src}
                className={`hero-slide${i === activeSlide ? " active" : ""}`}
                style={{ backgroundImage: `url(${src})` }}
              />
            ))}
          </div>
          <div className="hero-scrim" aria-hidden="true" />
        </>
      )}

      <div className="wrap">
        <div className="eyebrow-script">Welcome to</div>
        <h1>Aura Health Clinic</h1>
        <div className="tagline">{siteConfig.tagline}</div>
        <p className="sub">
          Compassionate pediatric, dental &amp; pharmacy care for families in modern,
          and genuinely welcoming, all under one roof.
        </p>
        <div className="cta-row">
          <Button href="#appointment">Book Appointment</Button>
          <Button href="#doctors" variant="outline">
            Meet Our Doctors
          </Button>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="hero-dots">
          {slides.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`hero-dot${i === activeSlide ? " active" : ""}`}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setActiveSlide(i)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
