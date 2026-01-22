
import { Users, Stethoscope, HeartPulse, Building2, Shield, AlertTriangle, CheckCircle2, TrendingUp, FileText, BarChart3, Target, UserCheck } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";
import { useRef, useCallback } from "react";

const RequirementsSection = () => {
  const { t } = useTranslation();
  
  // Refs for animated components to trigger animations globally
  const counterRefs = useRef<Array<{ resetAnimation: () => void; startAnimation: () => void } | null>>([]);
  const progressBarRefs = useRef<Array<{ resetAnimation: () => void; startAnimation: () => void } | null>>([]);

  // Global animation trigger function
  const triggerAllAnimations = useCallback(() => {
    // Reset all animations first
    counterRefs.current.forEach(ref => {
      if (ref) ref.resetAnimation();
    });
    progressBarRefs.current.forEach(ref => {
      if (ref) ref.resetAnimation();
    });

    // Start all animations after a small delay
    setTimeout(() => {
      counterRefs.current.forEach(ref => {
        if (ref) ref.startAnimation();
      });
      progressBarRefs.current.forEach(ref => {
        if (ref) ref.startAnimation();
      });
    }, 50);
  }, []);

  // Requirements data redesigned according to correct regulations
  const requirementsData = [
    {
      categoryKey: "small",
      icon: Building2,
      requirements: ["contractDoctor", "contractNurse", "noFullTime"],
      progress: 60
    },
    {
      categoryKey: "medium",
      icon: Users,
      requirements: ["employNurse", "employOrContractDoctor", "healthService"],
      progress: 85
    },
    {
      categoryKey: "specialHazard",
      icon: AlertTriangle,
      requirements: ["specialEmployNurse", "specialDoctor", "specialExam"],
      progress: 90
    },
    {
      categoryKey: "consultant",
      icon: HeartPulse,
      requirements: ["secondThirdClass", "approvedConsultant", "qualifiedPersonnel"],
      progress: 75
    },
  ];

  const responsibilities = [
    {
      key: "healthExam",
      icon: Stethoscope,
      progress: 90
    },
    {
      key: "healthMgmt", 
      icon: TrendingUp,
      progress: 85
    },
    {
      key: "healthPromotion",
      icon: Shield,
      progress: 75
    }
  ];

  return (
    <section id="requirements" className="business-section-alt">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="business-badge mb-6 animate-bounce-in">
            <FileText className="w-5 h-5 text-amazon-orange" />
            <span className="text-amazon-blue font-semibold">{t("requirements.badge")}</span>
          </div>
          <h2 className="business-title mb-6 animate-slide-up">
            {t("requirements.title")}
          </h2>
          <p className="business-subtitle text-gray-600 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t("requirements.description")}
          </p>
          
          {/* Summary Stats */}
          <div className="flex justify-center gap-8 mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">
                <AnimatedCounter 
                  value={4} 
                  duration={1200}
                  startDelay={300}
                  triggerOnHover={true}
                />
              </div>
              <div className="business-metric-label">{t("requirements.medicalPersonnel.stats.configTypes")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-navy">
                <AnimatedCounter 
                  value={50} 
                  duration={1400}
                  startDelay={500}
                  triggerOnHover={true}
                />
              </div>
              <div className="business-metric-label">{t("requirements.medicalPersonnel.stats.minThreshold")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">
                <AnimatedCounter 
                  value={300} 
                  duration={1600}
                  startDelay={700}
                  triggerOnHover={true}
                />
              </div>
              <div className="business-metric-label">{t("requirements.medicalPersonnel.stats.employmentThreshold")}</div>
            </div>
          </div>
        </div>

        {/* Legal Requirements Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {requirementsData.map((item, index) => (
            <div key={index} className={`business-card bg-white animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="business-icon-wrapper bg-amazon-orange">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{t(`requirements.medicalPersonnel.categories.${item.categoryKey}.title`)}</h3>
                    <p className="text-sm text-gray-600">{t(`requirements.medicalPersonnel.categories.${item.categoryKey}.subtitle`)}</p>
                  </div>
                </div>
                <div className="business-number bg-amazon-navy text-sm">
                  {index + 1}
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4 p-3 bg-amazon-light-gray rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-amazon-orange" />
                    <span className="font-semibold text-gray-900">{t("requirements.medicalPersonnel.common.applicableScope")}</span>
                  </div>
                  <p className="text-sm text-gray-700">{t(`requirements.medicalPersonnel.categories.${item.categoryKey}.employeeRange`)}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {item.requirements.map((reqKey, reqIndex) => (
                    <div key={reqIndex} className="border border-gray-200 rounded-lg p-4 hover:bg-business-hover-gray transition-colors duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 bg-amazon-orange">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-sm mb-1">{t(`requirements.medicalPersonnel.requirements.${reqKey}.title`)}</div>
                          <div className="text-xs text-gray-600 mb-2">{t(`requirements.medicalPersonnel.requirements.${reqKey}.desc`)}</div>
                          <div className="text-xs text-amazon-orange font-medium">{t(`requirements.medicalPersonnel.requirements.${reqKey}.detail`)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500 mb-2">{t("requirements.medicalPersonnel.common.lawBasis")}</div>
                  <div className="text-sm font-medium text-amazon-navy">{t(`requirements.medicalPersonnel.categories.${item.categoryKey}.lawReference`)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Points Highlight */}
        <div className="business-highlight-box animate-fade-in mb-16" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-6 mb-8">
            <div className="business-icon-wrapper bg-amazon-navy shadow-lg">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {t("requirements.medicalPersonnel.keyPoints.title")}
              </h3>
              <div className="flex items-center gap-4">
                <div className="business-metric text-amazon-navy text-2xl">
                  <AnimatedCounter 
                    value={3} 
                    duration={1000}
                    startDelay={200}
                    triggerOnHover={true}
                  />
                </div>
                <div className="business-metric-label">{t("requirements.medicalPersonnel.keyPoints.subtitle")}</div>
              </div>
            </div>
          </div>
          
          <div className="business-timeline">
            {["employeeVsSpecial", "employVsContract", "consultantConditions"].map((pointKey, index) => (
              <div key={pointKey} className="business-timeline-item">
                <div className="business-timeline-dot bg-amazon-navy"></div>
                <div className="business-data-point bg-white border-amazon-navy">
                  <div className="flex items-start gap-4">
                    <div className="business-number bg-amazon-navy text-sm">{index + 1}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">{t(`requirements.medicalPersonnel.keyPoints.points.${pointKey}.title`)}</h4>
                      <p className="business-body text-gray-700 mb-2 whitespace-pre-line">
                        {t(`requirements.medicalPersonnel.keyPoints.points.${pointKey}.desc`)}
                      </p>
                      <div className="text-sm text-amazon-orange font-medium">{t(`requirements.medicalPersonnel.keyPoints.points.${pointKey}.note`)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employer Responsibilities - Enhanced Business Cards */}
        <div className="mb-20">
          <h3 className="business-title text-center mb-16 animate-slide-up">
            {t("requirements.responsibilities.title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {responsibilities.map((resp, index) => (
              <div 
                key={resp.key} 
                className={`business-interactive-card business-card bg-white animate-slide-up hover-sync-container`} 
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={triggerAllAnimations}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="business-icon-wrapper bg-amazon-orange shadow-lg">
                      <resp.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="business-number bg-amazon-navy">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-amazon-orange" />
                    {t(`requirements.responsibilities.${resp.key}.title`)}
                  </h4>
                  
                  <p className="business-body text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                    {t(`requirements.responsibilities.${resp.key}.desc`)}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="business-metric-label">{t("requirements.medicalPersonnel.common.importanceIndicator")}</span>
                    </div>
                    <div>
                      <div className="flex items-center justify-end mb-2">
                        <span className="text-2xl font-bold text-gray-700">
                          <AnimatedCounter 
                            ref={(el) => { counterRefs.current[index] = el; }}
                            value={resp.progress} 
                            suffix="%" 
                            duration={1200}
                            startDelay={index * 200}
                            triggerOnHover={false}
                            triggerOnView={true}
                          />
                        </span>
                      </div>
                      <AnimatedProgressBar 
                        ref={(el) => { progressBarRefs.current[index] = el; }}
                        progress={resp.progress}
                        duration={1500}
                        startDelay={index * 200}
                        triggerOnHover={false}
                        triggerOnView={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
