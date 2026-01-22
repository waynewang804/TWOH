import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Volume2, Radiation, FlaskConical, Thermometer, Eye, ChevronRight, CheckCircle2, Info, Zap, Droplets, Wind, Skull, Factory, Waves } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useRef, useCallback } from "react";

type Step = "hazards" | "noise-detail" | "results";

const RiskAssessment = () => {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<Step>("hazards");
  const [selectedHazards, setSelectedHazards] = useState<string[]>([]);
  const [noiseDetails, setNoiseDetails] = useState({
    hasMonitoring: "",
    hasReport: "",
    over85TWA: "",
  });

  // Refs for animated components to trigger animations globally
  const counterRefs = useRef<Array<{ resetAnimation: () => void; startAnimation: () => void } | null>>([]);

  // Global animation trigger function
  const triggerAllAnimations = useCallback(() => {
    // Reset all animations first
    counterRefs.current.forEach(ref => {
      if (ref) ref.resetAnimation();
    });

    // Start all animations after a small delay
    setTimeout(() => {
      counterRefs.current.forEach(ref => {
        if (ref) ref.startAnimation();
      });
    }, 50);
  }, []);

  const hazardTypes = [
    { id: "noise", label: t("riskAssessment.hazards.noise"), icon: Volume2, desc: t("riskAssessment.hazardDescs.noise") },
    { id: "radiation", label: t("riskAssessment.hazards.radiation"), icon: Radiation, desc: t("riskAssessment.hazardDescs.radiation") },
    { id: "chemical", label: t("riskAssessment.hazards.chemical"), icon: FlaskConical, desc: t("riskAssessment.hazardDescs.chemical") },
    { id: "lead", label: t("riskAssessment.hazards.lead"), icon: AlertTriangle, desc: t("riskAssessment.hazardDescs.lead") },
    { id: "dust", label: t("riskAssessment.hazards.dust"), icon: Eye, desc: t("riskAssessment.hazardDescs.dust") },
    { id: "heat", label: t("riskAssessment.hazards.heat"), icon: Thermometer, desc: t("riskAssessment.hazardDescs.heat") },
    { id: "asbestos", label: t("riskAssessment.hazards.asbestos"), icon: Factory, desc: t("riskAssessment.hazardDescs.asbestos") },
    { id: "vinyl", label: t("riskAssessment.hazards.vinyl"), icon: Droplets, desc: t("riskAssessment.hazardDescs.vinyl") },
    { id: "chromium", label: t("riskAssessment.hazards.chromium"), icon: Skull, desc: t("riskAssessment.hazardDescs.chromium") },
    { id: "benzene", label: t("riskAssessment.hazards.benzene"), icon: Wind, desc: t("riskAssessment.hazardDescs.benzene") },
    { id: "formaldehyde", label: t("riskAssessment.hazards.formaldehyde"), icon: Waves, desc: t("riskAssessment.hazardDescs.formaldehyde") },
    { id: "vibration", label: t("riskAssessment.hazards.vibration"), icon: Zap, desc: t("riskAssessment.hazardDescs.vibration") },
  ];

  const handleHazardToggle = (hazardId: string) => {
    setSelectedHazards(prev => 
      prev.includes(hazardId) 
        ? prev.filter(h => h !== hazardId)
        : [...prev, hazardId]
    );
  };

  const handleNext = () => {
    if (currentStep === "hazards") {
      if (selectedHazards.includes("noise")) {
        setCurrentStep("noise-detail");
      } else {
        setCurrentStep("results");
      }
    } else if (currentStep === "noise-detail") {
      setCurrentStep("results");
    }
  };

  const handleReset = () => {
    setCurrentStep("hazards");
    setSelectedHazards([]);
    setNoiseDetails({ hasMonitoring: "", hasReport: "", over85TWA: "" });
  };

  const renderHazardsStep = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">{t("riskAssessment.question")}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {t("riskAssessment.subtitle")}
        </p>
      </div>

      <div className="hazard-grid">
        {hazardTypes.map((hazard) => (
          <div
            key={hazard.id}
            className={`hazard-card ${selectedHazards.includes(hazard.id) ? 'selected' : ''}`}
            onClick={() => handleHazardToggle(hazard.id)}
          >
            <div className="hazard-card-checkbox">
              <Checkbox 
                checked={selectedHazards.includes(hazard.id)}
                onCheckedChange={() => handleHazardToggle(hazard.id)}
              />
            </div>
            <div className="hazard-card-icon">
              <hazard.icon className={`w-6 h-6 ${
                selectedHazards.includes(hazard.id) ? "text-amazon-orange" : "text-muted-foreground"
              }`} />
            </div>
            <div className="hazard-card-content">
              <div className="hazard-card-title">{hazard.label}</div>
              <div className="hazard-card-desc">{hazard.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 rounded-lg bg-teal-50 border border-teal-200">
        <Info className="w-5 h-5 text-teal-600 flex-shrink-0" />
        <p className="text-sm text-teal-700">
          {t("riskAssessment.noHazardInfo")}
        </p>
      </div>

      <Button onClick={handleNext} className="w-full" size="lg">
        {t("riskAssessment.nextStep")}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );

  const renderNoiseDetailStep = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/30">
        <Volume2 className="w-6 h-6 text-warning" />
        <div>
          <h3 className="font-semibold">{t("riskAssessment.noiseDetail.title")}</h3>
          <p className="text-sm text-muted-foreground">{t("riskAssessment.noiseDetail.subtitle")}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <Label className="text-base font-medium">{t("riskAssessment.noiseDetail.hasMonitoring")}</Label>
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="button"
              variant={noiseDetails.hasMonitoring === "yes" ? "default" : "outline"}
              className={`h-12 text-base font-medium transition-all duration-200 ${
                noiseDetails.hasMonitoring === "yes" 
                  ? "bg-accent text-accent-foreground shadow-md" 
                  : "hover:border-accent hover:text-accent"
              }`}
              onClick={() => setNoiseDetails(prev => ({ ...prev, hasMonitoring: "yes" }))}
            >
              {t("riskAssessment.noiseDetail.yes")}
            </Button>
            <Button
              type="button"
              variant={noiseDetails.hasMonitoring === "no" ? "default" : "outline"}
              className={`h-12 text-base font-medium transition-all duration-200 ${
                noiseDetails.hasMonitoring === "no" 
                  ? "bg-accent text-accent-foreground shadow-md" 
                  : "hover:border-accent hover:text-accent"
              }`}
              onClick={() => setNoiseDetails(prev => ({ ...prev, hasMonitoring: "no" }))}
            >
              {t("riskAssessment.noiseDetail.no")}
            </Button>
          </div>
        </div>

        {noiseDetails.hasMonitoring === "yes" && (
          <div className="space-y-4 animate-fade-in">
            <Label className="text-base font-medium">{t("riskAssessment.noiseDetail.hasReport")}</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant={noiseDetails.hasReport === "yes" ? "default" : "outline"}
                className={`h-12 text-base font-medium transition-all duration-200 ${
                  noiseDetails.hasReport === "yes" 
                    ? "bg-accent text-accent-foreground shadow-md" 
                    : "hover:border-accent hover:text-accent"
                }`}
                onClick={() => setNoiseDetails(prev => ({ ...prev, hasReport: "yes" }))}
              >
                {t("riskAssessment.noiseDetail.yes")}
              </Button>
              <Button
                type="button"
                variant={noiseDetails.hasReport === "no" ? "default" : "outline"}
                className={`h-12 text-base font-medium transition-all duration-200 ${
                  noiseDetails.hasReport === "no" 
                    ? "bg-accent text-accent-foreground shadow-md" 
                    : "hover:border-accent hover:text-accent"
                }`}
                onClick={() => setNoiseDetails(prev => ({ ...prev, hasReport: "no" }))}
              >
                {t("riskAssessment.noiseDetail.no")}
              </Button>
            </div>
          </div>
        )}

        {noiseDetails.hasReport === "yes" && (
          <div className="space-y-4 animate-fade-in">
            <Label className="text-base font-medium">{t("riskAssessment.noiseDetail.over85TWA")}</Label>
            <div className="grid grid-cols-1 gap-3">
              <Button
                type="button"
                variant={noiseDetails.over85TWA === "yes" ? "default" : "outline"}
                className={`h-14 text-base font-medium transition-all duration-200 ${
                  noiseDetails.over85TWA === "yes" 
                    ? "bg-accent text-accent-foreground shadow-md" 
                    : "hover:border-accent hover:text-accent"
                }`}
                onClick={() => setNoiseDetails(prev => ({ ...prev, over85TWA: "yes" }))}
              >
                {t("riskAssessment.noiseDetail.yesOver85")}
              </Button>
              <Button
                type="button"
                variant={noiseDetails.over85TWA === "no" ? "default" : "outline"}
                className={`h-14 text-base font-medium transition-all duration-200 ${
                  noiseDetails.over85TWA === "no" 
                    ? "bg-accent text-accent-foreground shadow-md" 
                    : "hover:border-accent hover:text-accent"
                }`}
                onClick={() => setNoiseDetails(prev => ({ ...prev, over85TWA: "no" }))}
              >
                {t("riskAssessment.noiseDetail.noUnder85")}
              </Button>
            </div>
          </div>
        )}
      </div>

      <Button onClick={handleNext} className="w-full" size="lg">
        {t("riskAssessment.viewResults")}
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );

  const renderResults = () => {
    const hasNoiseHazard = selectedHazards.includes("noise");
    const hasOtherHazards = selectedHazards.filter(h => h !== "noise").length > 0;
    
    // Noise work assessment logic
    let noiseAssessmentResult = null;
    if (hasNoiseHazard) {
      if (noiseDetails.hasMonitoring === "no") {
        // No workplace environmental monitoring conducted
        noiseAssessmentResult = "needMonitoring";
      } else if (noiseDetails.hasMonitoring === "yes" && noiseDetails.hasReport === "yes") {
        if (noiseDetails.over85TWA === "yes") {
          // Exceeds 85 dB, requires special health examination
          noiseAssessmentResult = "needsSpecialExam";
        } else if (noiseDetails.over85TWA === "no") {
          // Under 85 dB, continue observation
          noiseAssessmentResult = "continueObservation";
        }
      }
    }
    
    const needsSpecialExam = (hasNoiseHazard && noiseAssessmentResult === "needsSpecialExam") || hasOtherHazards;

    return (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b">
          <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
          <h3 className="text-xl font-semibold">{t("riskAssessment.results.title")}</h3>
        </div>

        {/* 需要特殊健檢的情況 */}
        {needsSpecialExam && (
          <div className="space-y-4">
            <Card className="border-warning/50 bg-warning/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-warning">{t("riskAssessment.results.needsSpecialExam")}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("riskAssessment.results.needsSpecialExamDesc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {hasNoiseHazard && noiseAssessmentResult === "needsSpecialExam" && (
              <Card className="border-success/50 bg-success/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-success">{t("riskAssessment.results.subsidyAvailable")}</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {t("riskAssessment.results.subsidyDesc")}
                      </p>
                      <a 
                        href="https://www.bli.gov.tw/0105830.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline mt-2 inline-block"
                      >
                        {t("riskAssessment.results.subsidyLink")}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* 需要進行作業環境監測的情況 */}
        {hasNoiseHazard && noiseAssessmentResult === "needMonitoring" && (
          <Card className="border-warning/50 bg-warning/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-warning">{t("riskAssessment.results.needMonitoring")}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("riskAssessment.results.needMonitoringDesc")}
                  </p>
                  <a 
                    href="https://oemd.osha.gov.tw/exposure/content/plan/Dept.aspx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline mt-2 inline-block"
                  >
                    {t("riskAssessment.results.monitoringLink")}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 持續觀察的情況 */}
        {hasNoiseHazard && noiseAssessmentResult === "continueObservation" && (
          <Card className="border-blue-500/50 bg-blue-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-700">{t("riskAssessment.results.continueObservation")}</h4>
                  <p className="text-sm text-blue-600 mt-1">
                    {t("riskAssessment.results.continueObservationDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 暫無特別危害健康作業的情況 */}
        {!hasNoiseHazard && !hasOtherHazards && (
          <Card className="border-success/50 bg-success/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-success">{t("riskAssessment.results.noSpecialHazard")}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t("riskAssessment.results.noSpecialHazardDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 顯示選擇的危害作業 */}
        {selectedHazards.length > 0 && (
          <div className="p-4 rounded-lg bg-muted">
            <h4 className="font-medium mb-2">{t("riskAssessment.results.selectedHazards")}</h4>
            <div className="flex flex-wrap gap-2">
              {selectedHazards.map(hazardId => {
                const hazard = hazardTypes.find(h => h.id === hazardId);
                return hazard ? (
                  <Badge key={hazardId} variant="secondary">{hazard.label}</Badge>
                ) : null;
              })}
            </div>
          </div>
        )}

        <Button onClick={handleReset} variant="outline" className="w-full">
          {t("riskAssessment.results.reassess")}
        </Button>
      </div>
    );
  };

  return (
    <section id="risk-assessment" className="business-section-alt">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="business-badge mb-8 animate-bounce-in">
            <AlertTriangle className="w-5 h-5 text-amazon-orange" />
            <span className="text-amazon-blue font-semibold">{t("riskAssessment.badge")}</span>
          </div>
          <h2 className="business-title mb-8 animate-slide-up">
            {t("riskAssessment.title")}
          </h2>
          <p className="business-subtitle text-gray-600 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t("riskAssessment.description")}
          </p>
          
          {/* Business Summary Stats */}
          <div className="flex justify-center gap-12 mt-12 animate-fade-in hover-sync-container" style={{ animationDelay: '0.3s' }} onMouseEnter={triggerAllAnimations}>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">
                <AnimatedCounter 
                  ref={(el) => { counterRefs.current[0] = el; }}
                  value={12} 
                  duration={1000}
                  startDelay={200}
                  triggerOnHover={false}
                  triggerOnView={true}
                />
              </div>
              <div className="business-metric-label">{t("riskAssessment.stats.hazardTypes")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-navy">
                <AnimatedCounter 
                  ref={(el) => { counterRefs.current[1] = el; }}
                  value={3} 
                  duration={1200}
                  startDelay={400}
                  triggerOnHover={false}
                  triggerOnView={true}
                />
              </div>
              <div className="business-metric-label">{t("riskAssessment.stats.assessmentSteps")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">
                <AnimatedCounter 
                  ref={(el) => { counterRefs.current[2] = el; }}
                  value={100} 
                  suffix="%" 
                  duration={1400}
                  startDelay={600}
                  triggerOnHover={false}
                  triggerOnView={true}
                />
              </div>
              <div className="business-metric-label">{t("riskAssessment.stats.accuracy")}</div>
            </div>
          </div>
        </div>

        <div className="business-interactive-card business-card risk-assessment-card max-w-7xl mx-auto animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {["hazards", "noise-detail", "results"].map((step, index) => (
                  <div 
                    key={step}
                    className={`h-2 w-12 rounded-full transition-all duration-300 ${
                      (currentStep === "hazards" && index === 0) ||
                      (currentStep === "noise-detail" && index <= 1) ||
                      (currentStep === "results" && index <= 2)
                        ? "bg-amazon-orange"
                        : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
              <div className="ml-auto business-number bg-amazon-orange text-sm">
                {currentStep === "hazards" ? "1" : currentStep === "noise-detail" ? "2" : "3"}
              </div>
            </div>
          </div>
          <div className="p-8">
            {currentStep === "hazards" && renderHazardsStep()}
            {currentStep === "noise-detail" && renderNoiseDetailStep()}
            {currentStep === "results" && renderResults()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskAssessment;
