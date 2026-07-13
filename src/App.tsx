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
      <Footer />
      <StickyMobileCta />
      <WhatsAppFab />
    </>
  );
}
