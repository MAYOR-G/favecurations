import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CollectionGrid from "@/components/CollectionGrid";
import CustomizationGrid from "@/components/CustomizationGrid";
import EventsSection from "@/components/EventsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";

export default function Home() {
  return (
    <main className="relative">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Noise Overlay */}
      <NoiseOverlay />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <AboutSection />
      <CollectionGrid />
      <CustomizationGrid />
      <EventsSection />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
