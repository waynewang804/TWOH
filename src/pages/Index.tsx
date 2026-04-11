import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RequirementsSection from "@/components/RequirementsSection";
import BusinessClassification from "@/components/BusinessClassification";
import RiskAssessment from "@/components/RiskAssessment";
import VendorSection from "@/components/VendorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <RequirementsSection />
      <BusinessClassification />
      <RiskAssessment />
      <VendorSection />
      <Footer />
    </main>
  );
};

export default Index;
