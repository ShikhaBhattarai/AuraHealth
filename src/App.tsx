import { Routes, Route } from "react-router-dom";
import UtilityBar from "./components/layout/UtilityBar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import StickyMobileCta from "./components/layout/StickyMobileCta";
import WhatsAppFab from "./components/layout/WhatsAppFab";
import Home from "./pages/Home";

export default function App() {
  return (
    <>
      <UtilityBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <section className="map-section" aria-label="Clinic location map">
        <div className="wrap">
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5895030229485!2d85.33379117579415!3d27.692865026129542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900192c45c9%3A0x9ab988a09dae49d3!2sAURA%20HEALTH%20CLINIC!5e1!3m2!1sen!2sus!4v1783912286314!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Aura Health Clinic location"
            />
          </div>
        </div>
      </section>
      <Footer />
      <StickyMobileCta />
      <WhatsAppFab />
    </>
  );
}
