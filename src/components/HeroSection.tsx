import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Users, TrendingUp, Award, CheckCircle, BarChart3, Target, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation();
  
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRequirements = () => {
    document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 business-grid-pattern"></div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="business-badge mb-8 animate-bounce-in bg-amazon-orange text-white border-0">
            <Shield className="w-5 h-5 mr-2" />
            <span className="font-semibold">{t("hero.badge")}</span>
          </div>

          <h1 className="text-business-xl font-bold text-white mb-8 animate-slide-up hero-title" style={{ animationDelay: '0.1s' }}>
            {t("hero.title")}
            <br />
            <span className="text-amazon-orange hero-subtitle">{t("hero.subtitle")}</span>
          </h1>

          <p className="text-business-md text-gray-300 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button 
              onClick={scrollToCalculator} 
              className="business-button-primary-large"
            >
              <FileCheck className="w-5 h-5 mr-3" />
              {t("hero.startButton")}
            </button>
            <button 
              onClick={scrollToRequirements}
              className="business-button-secondary-large"
            >
              <Users className="w-5 h-5 mr-3" />
              {t("hero.requirementsButton")}
            </button>
          </div>

          {/* Clean Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-600 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="business-card bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="business-number bg-amazon-orange">
                  300+
                </div>
                <Target className="w-6 h-6 text-amazon-orange" />
              </div>
              <div className="text-business-dark-text font-medium">{t("hero.stats.nurses")}</div>
              <div className="business-progress-bar mt-3">
                <div className="business-progress-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="business-card bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="business-number bg-amazon-navy">
                  50+
                </div>
                <Zap className="w-6 h-6 text-amazon-navy" />
              </div>
              <div className="text-business-dark-text font-medium">{t("hero.stats.healthService")}</div>
              <div className="business-progress-bar mt-3">
                <div className="business-progress-fill bg-amazon-navy" style={{ width: '70%' }}></div>
              </div>
            </div>
            
            <div className="business-card bg-white p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="business-number bg-amazon-orange">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <Award className="w-6 h-6 text-amazon-orange" />
              </div>
              <div className="text-business-dark-text font-medium">
                {t("hero.stats.subsidy")
                  .replace("Free ", "")
                  .replace("무료 ", "")
                  .replace("免費", "")}
              </div>
              <div className="business-progress-bar mt-3">
                <div className="business-progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
