import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRequirements = () => {
    document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-teal-400" />
            <span className="text-teal-100 text-sm font-medium">職業安全衛生法 合規指南</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            台灣職場健康管理
            <br />
            <span className="text-teal-400">企業合規一站式服務</span>
          </h1>

          <p className="text-lg md:text-xl text-navy-200 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            根據《職業安全衛生法》與《勞工健康保護規則》，協助中小企業與外商快速了解法規要求，計算合規成本，找到合格服務商。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={scrollToCalculator}>
              <FileCheck className="w-5 h-5" />
              立即試算合規需求
            </Button>
            <Button 
              variant="hero-outline" 
              size="xl" 
              onClick={scrollToRequirements}
              className="text-teal-100 border-teal-400/40 hover:bg-teal-400/10"
            >
              <Users className="w-5 h-5" />
              查看法規要求
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-teal-400/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-400">300+</div>
              <div className="text-navy-200 text-sm mt-1">員工需設置護理人員</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-400">50+</div>
              <div className="text-navy-200 text-sm mt-1">員工需臨場健康服務</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-teal-400">免費</div>
              <div className="text-navy-200 text-sm mt-1">特殊危害勞保補助</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
