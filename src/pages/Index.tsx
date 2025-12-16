import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import RequirementsSection from "@/components/RequirementsSection";
import RiskAssessment from "@/components/RiskAssessment";
import ComplianceCalculator from "@/components/ComplianceCalculator";
import VendorSection from "@/components/VendorSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <RequirementsSection />
      <RiskAssessment />
      <ComplianceCalculator />
      <VendorSection />
      <Footer />
    </main>
  );
};

export default Index;
