import Hero from "../components/home/Hero";
import OffersStrip from "../components/home/OffersStrip";
import Intro from "../components/home/Intro";
import AppointmentSection from "../components/home/AppointmentSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Doctors from "../components/home/Doctors";
import Divisions from "../components/home/Divisions";
import Mission from "../components/home/Mission";
import Reviews from "../components/home/Reviews";
import Faq from "../components/home/Faq";
import FinalCta from "../components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <OffersStrip />
      <Intro />
      <AppointmentSection />
      <WhyChooseUs />
      <Doctors />
      <Divisions />
      <Mission />
      <Reviews />
      <Faq />
      <FinalCta />
    </>
  );
}
