import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Volume2, Radiation, FlaskConical, Thermometer, Eye, ChevronRight, CheckCircle2, Info } from "lucide-react";

const hazardTypes = [
  { id: "noise", label: "噪音作業", icon: Volume2, desc: "暴露於85分貝以上噪音" },
  { id: "radiation", label: "游離輻射作業", icon: Radiation, desc: "操作X光機、放射性物質" },
  { id: "chemical", label: "化學物質作業", icon: FlaskConical, desc: "有機溶劑、特定化學物質" },
  { id: "heat", label: "高溫作業", icon: Thermometer, desc: "熔爐、鍛造等高溫環境" },
  { id: "dust", label: "粉塵作業", icon: Eye, desc: "礦石、金屬粉塵暴露" },
];

type Step = "hazards" | "noise-detail" | "results";

const RiskAssessment = () => {
  const [currentStep, setCurrentStep] = useState<Step>("hazards");
  const [selectedHazards, setSelectedHazards] = useState<string[]>([]);
  const [noiseDetails, setNoiseDetails] = useState({
    hasMonitoring: "",
    hasReport: "",
    over85TWA: "",
  });

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
        <h3 className="font-semibold text-lg mb-2">您的事業單位是否有以下特別危害健康作業？</h3>
        <p className="text-sm text-muted-foreground mb-4">
          依《勞工健康保護規則》附表一，從事特別危害健康作業者需接受特殊健康檢查
        </p>
      </div>

      <div className="grid gap-3">
        {hazardTypes.map((hazard) => (
          <div
            key={hazard.id}
            className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-all ${
              selectedHazards.includes(hazard.id)
                ? "border-accent bg-accent/5"
                : "border-border hover:border-accent/50"
            }`}
            onClick={() => handleHazardToggle(hazard.id)}
          >
            <Checkbox 
              checked={selectedHazards.includes(hazard.id)}
              onCheckedChange={() => handleHazardToggle(hazard.id)}
            />
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              selectedHazards.includes(hazard.id) ? "bg-accent/20" : "bg-muted"
            }`}>
              <hazard.icon className={`w-5 h-5 ${
                selectedHazards.includes(hazard.id) ? "text-accent" : "text-muted-foreground"
              }`} />
            </div>
            <div className="flex-1">
              <div className="font-medium">{hazard.label}</div>
              <div className="text-sm text-muted-foreground">{hazard.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 p-4 rounded-lg bg-teal-50 border border-teal-200">
        <Info className="w-5 h-5 text-teal-600 flex-shrink-0" />
        <p className="text-sm text-teal-700">
          沒有選擇任何項目？仍可繼續，我們會提供一般職業健康管理建議。
        </p>
      </div>

      <Button onClick={handleNext} className="w-full" size="lg">
        下一步
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );

  const renderNoiseDetailStep = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 p-4 rounded-lg bg-warning/10 border border-warning/30">
        <Volume2 className="w-6 h-6 text-warning" />
        <div>
          <h3 className="font-semibold">噪音作業詳細評估</h3>
          <p className="text-sm text-muted-foreground">請回答以下問題以確認合規狀態</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-base font-medium">是否已安排作業環境監測？</Label>
          <RadioGroup 
            value={noiseDetails.hasMonitoring}
            onValueChange={(val) => setNoiseDetails(prev => ({ ...prev, hasMonitoring: val }))}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="monitoring-yes" />
              <Label htmlFor="monitoring-yes">是</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="monitoring-no" />
              <Label htmlFor="monitoring-no">否</Label>
            </div>
          </RadioGroup>
        </div>

        {noiseDetails.hasMonitoring === "yes" && (
          <div className="space-y-3 animate-fade-in">
            <Label className="text-base font-medium">是否有監測報告？</Label>
            <RadioGroup 
              value={noiseDetails.hasReport}
              onValueChange={(val) => setNoiseDetails(prev => ({ ...prev, hasReport: val }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="report-yes" />
                <Label htmlFor="report-yes">是</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="report-no" />
                <Label htmlFor="report-no">否</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        {noiseDetails.hasReport === "yes" && (
          <div className="space-y-3 animate-fade-in">
            <Label className="text-base font-medium">時量平均音壓級是否超過 85 dB(A) TWA？</Label>
            <RadioGroup 
              value={noiseDetails.over85TWA}
              onValueChange={(val) => setNoiseDetails(prev => ({ ...prev, over85TWA: val }))}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="twa-yes" />
                <Label htmlFor="twa-yes">是，超過85分貝</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="twa-no" />
                <Label htmlFor="twa-no">否，未超過85分貝</Label>
              </div>
            </RadioGroup>
          </div>
        )}
      </div>

      <Button onClick={handleNext} className="w-full" size="lg">
        查看評估結果
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );

  const renderResults = () => {
    const hasNoiseHazard = selectedHazards.includes("noise") && noiseDetails.over85TWA === "yes";
    const hasOtherHazards = selectedHazards.filter(h => h !== "noise").length > 0;
    const needsSpecialExam = hasNoiseHazard || hasOtherHazards;

    return (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b">
          <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-3" />
          <h3 className="text-xl font-semibold">風險評估完成</h3>
        </div>

        {needsSpecialExam ? (
          <div className="space-y-4">
            <Card className="border-warning/50 bg-warning/5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-warning">需要特別危害健康作業健康檢查</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      依據您的回答，貴公司員工需接受特殊健康檢查
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {hasNoiseHazard && (
              <Card className="border-success/50 bg-success/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-success">可申請勞保局補助</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        噪音作業特殊健康檢查可向勞保局申請補助，<span className="font-medium text-success">免費</span>進行檢查！
                      </p>
                      <a 
                        href="https://www.bli.gov.tw" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline mt-2 inline-block"
                      >
                        了解更多勞保局補助資訊 →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="p-4 rounded-lg bg-muted">
              <h4 className="font-medium mb-2">您選擇的危害作業：</h4>
              <div className="flex flex-wrap gap-2">
                {selectedHazards.map(hazardId => {
                  const hazard = hazardTypes.find(h => h.id === hazardId);
                  return hazard ? (
                    <Badge key={hazardId} variant="secondary">{hazard.label}</Badge>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        ) : (
          <Card className="border-success/50 bg-success/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-success">暫無特別危害健康作業</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    依據您的回答，目前不需要特殊健康檢查，但仍需執行一般健康管理
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Button onClick={handleReset} variant="outline" className="w-full">
          重新評估
        </Button>
      </div>
    );
  };

  return (
    <section id="risk-assessment" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-warning text-warning">
            風險評估
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            特別危害健康作業評估
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            回答幾個簡單問題，了解您是否有特別危害健康作業，以及可享有的勞保補助
          </p>
        </div>

        <Card className="max-w-2xl mx-auto card-elevated">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {["hazards", "noise-detail", "results"].map((step, index) => (
                  <div 
                    key={step}
                    className={`h-1.5 w-8 rounded-full transition-colors ${
                      (currentStep === "hazards" && index === 0) ||
                      (currentStep === "noise-detail" && index <= 1) ||
                      (currentStep === "results" && index <= 2)
                        ? "bg-accent"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {currentStep === "hazards" && renderHazardsStep()}
            {currentStep === "noise-detail" && renderNoiseDetailStep()}
            {currentStep === "results" && renderResults()}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RiskAssessment;
