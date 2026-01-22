
import { AlertTriangle, Building, Factory, BarChart3, TrendingUp, Target, Calendar, Award, Search, X, CheckCircle2, Hash, List, Calculator } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  InputMode, 
  validateIndustryCode
} from "@/lib/industryCodeMapping";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedProgressBar from "@/components/AnimatedProgressBar";
import AnimatedVerticalProgressBar from "@/components/AnimatedVerticalProgressBar";

const BusinessClassification = () => {
  const { t } = useTranslation();
  const [showClassificationTool, setShowClassificationTool] = useState(false);
  const [inputMode, setInputMode] = useState<InputMode>(InputMode.INDUSTRY_SELECTION);
  const [searchTerm, setSearchTerm] = useState("");
  const [industryCode, setIndustryCode] = useState("");
  const [codeValidation, setCodeValidation] = useState<any>(null);
  const [classificationResult, setClassificationResult] = useState<any>(null);

  // Refs for animated components to trigger animations globally
  const counterRefs = useRef<Array<{ resetAnimation: () => void; startAnimation: () => void } | null>>([]);
  const progressBarRefs = useRef<Array<{ resetAnimation: () => void; startAnimation: () => void } | null>>([]);
  const verticalProgressBarRefs = useRef<Array<{ resetAnimation: () => void; startAnimation: () => void } | null>>([]);

  // Global animation trigger function
  const triggerAllAnimations = useCallback(() => {
    // Reset all animations first
    counterRefs.current.forEach(ref => {
      if (ref) ref.resetAnimation();
    });
    progressBarRefs.current.forEach(ref => {
      if (ref) ref.resetAnimation();
    });
    verticalProgressBarRefs.current.forEach(ref => {
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
      verticalProgressBarRefs.current.forEach(ref => {
        if (ref) ref.startAnimation();
      });
    }, 50);
  }, []);

  // Control background scrolling
  useEffect(() => {
    if (showClassificationTool) {
      // Disable background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Restore background scrolling
      document.body.style.overflow = 'unset';
    }

    // Cleanup function: restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showClassificationTool]);

  // Industry classification mapping
  const industryClassification = {
    // Level 1 - High Risk
    mining: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    manufacturing_metal: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    manufacturing_chemical: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    manufacturing_petroleum: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    manufacturing_machinery: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    construction: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    electricity: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    waste_management: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    environmental_services: { level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100 },
    
    // Level 2 - Medium Risk
    agriculture: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_food: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_textile: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_wood: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_paper: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_rubber: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_glass: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    manufacturing_pharmaceutical: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    transportation: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    postal: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    accommodation: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    healthcare: { level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65 },
    
    // Level 3 - Low Risk
    wholesale_retail: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    information: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    finance: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    real_estate: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    professional: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    support_services: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    public_admin: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    education: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    arts: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 },
    other_services: { level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30 }
  };

  const handleIndustrySelect = (industryKey: string) => {
    const classification = industryClassification[industryKey as keyof typeof industryClassification];
    if (classification) {
      setClassificationResult({
        industry: industryKey,
        level: classification.level,
        frequency: classification.frequency,
        frequencyValue: classification.frequencyValue,
        riskLevel: classification.riskLevel
      });
    }
  };

  const resetTool = () => {
    setIndustryCode("");
    setCodeValidation(null);
    setClassificationResult(null);
    setSearchTerm("");
  };

  // Handle code input
  const handleCodeInput = (code: string) => {
    setIndustryCode(code);
    
    if (code.length === 0) {
      setCodeValidation(null);
      setClassificationResult(null);
      return;
    }

    const validation = validateIndustryCode(code);
    setCodeValidation(validation);

    if (validation.isValid && validation.result) {
      setClassificationResult({
        industry: validation.result.code,
        industryName: validation.result.nameKey,
        level: validation.result.level,
        frequency: validation.result.frequency,
        frequencyValue: validation.result.frequencyValue,
        riskLevel: validation.result.riskLevel,
        isCodeResult: true
      });
    } else {
      setClassificationResult(null);
    }
  };

  // Switch input mode
  const switchInputMode = (mode: InputMode) => {
    setInputMode(mode);
    resetTool();
  };

  const closeTool = () => {
    setShowClassificationTool(false);
    resetTool();
  };

  // Filter industries based on search term
  const filteredIndustries = Object.keys(industryClassification).filter(key =>
    t(`businessClass.classificationTool.industries.${key}`).toLowerCase().includes(searchTerm.toLowerCase())
  );

  const classificationData = [
    {
      level: t("businessClass.levels.first"),
      icon: AlertTriangle,
      description: t("businessClass.riskTypes.high"),
      examples: [
        t("businessClass.industries.construction"), 
        t("businessClass.industries.metalManufacturing"), 
        t("businessClass.industries.mining"), 
        t("businessClass.industries.petrochemical")
      ],
      frequency: t("businessClass.frequencies.monthly"),
      frequencyValue: 12,
      riskLevel: 100
    },
    {
      level: t("businessClass.levels.second"), 
      icon: Factory,
      description: t("businessClass.riskTypes.medium"),
      examples: [
        t("businessClass.industries.foodManufacturing"), 
        t("businessClass.industries.transportation"), 
        t("businessClass.industries.warehousing"), 
        t("businessClass.industries.agriculture")
      ],
      frequency: t("businessClass.frequencies.bimonthly"),
      frequencyValue: 6,
      riskLevel: 65
    },
    {
      level: t("businessClass.levels.third"),
      icon: Building,
      description: t("businessClass.riskTypes.low"),
      examples: [
        t("businessClass.industries.finance"), 
        t("businessClass.industries.realEstate"), 
        t("businessClass.industries.professional"), 
        t("businessClass.industries.retail")
      ],
      frequency: t("businessClass.frequencies.quarterly"),
      frequencyValue: 4,
      riskLevel: 30
    },
  ];

  return (
    <section className="business-section">
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <div className="business-badge mb-8 animate-bounce-in">
            <BarChart3 className="w-5 h-5 text-amazon-orange" />
            <span className="text-amazon-blue font-semibold">{t("businessClass.badge")}</span>
          </div>
          <h2 className="business-title mb-8 animate-slide-up">
            {t("businessClass.title")}
          </h2>
          <p className="business-subtitle text-gray-600 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t("businessClass.description")}
          </p>
          
          {/* Business Summary Stats */}
          <div className="flex justify-center gap-12 mt-12 animate-fade-in hover-sync-container" style={{ animationDelay: '0.3s' }} onMouseEnter={triggerAllAnimations}>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">
                <AnimatedCounter 
                  ref={(el) => { counterRefs.current[0] = el; }}
                  value={3} 
                  duration={1000}
                  startDelay={200}
                  triggerOnHover={false}
                  triggerOnView={true}
                />
              </div>
              <div className="business-metric-label">{t("businessClass.stats.businessLevels")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-navy">
                <AnimatedCounter 
                  ref={(el) => { counterRefs.current[1] = el; }}
                  value={12} 
                  duration={1200}
                  startDelay={400}
                  triggerOnHover={false}
                  triggerOnView={true}
                />
              </div>
              <div className="business-metric-label">{t("businessClass.stats.maxServiceFrequency")}</div>
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
              <div className="business-metric-label">{t("businessClass.stats.riskCoverage")}</div>
            </div>
          </div>
        </div>

        {/* Enhanced Classification Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-24 hover-sync-container" onMouseEnter={triggerAllAnimations}>
          {classificationData.map((item, index) => (
            <div 
              key={index}
              className={`business-interactive-card business-card bg-white animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className={`business-icon-wrapper bg-amazon-orange shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="business-number bg-amazon-navy">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-amazon-orange" />
                  {item.level}
                </h3>
                <p className="business-body text-gray-700 mb-6">{item.description}</p>
                
                {/* Enhanced Risk Level Chart */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="business-metric-label">{t("businessClass.labels.riskLevel")}</span>
                    <span className="text-2xl font-bold text-gray-700">
                      <AnimatedCounter 
                        ref={(el) => { counterRefs.current[3 + index] = el; }}
                        value={item.riskLevel} 
                        suffix="%" 
                        duration={1200}
                        startDelay={index * 150}
                        triggerOnHover={false}
                        triggerOnView={true}
                      />
                    </span>
                  </div>
                  <AnimatedProgressBar 
                    ref={(el) => { progressBarRefs.current[index] = el; }}
                    progress={item.riskLevel}
                    duration={1500}
                    startDelay={index * 150}
                    triggerOnHover={false}
                    triggerOnView={true}
                  />
                </div>
              </div>
              
              <div className="p-8">
                  <div className="flex items-center gap-4 mb-6 p-4 bg-amazon-light-gray backdrop-blur-sm rounded-xl border border-gray-100">
                  <Calendar className="w-6 h-6 text-amazon-orange" />
                  <div className="flex-1">
                    <div className="business-metric-label">{t("businessClass.serviceFrequency")}</div>
                    <div className="text-lg font-bold text-gray-900">{item.frequency}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amazon-orange">
                      <AnimatedCounter 
                        ref={(el) => { counterRefs.current[6 + index] = el; }}
                        value={item.frequencyValue} 
                        duration={1000}
                        startDelay={index * 200 + 300}
                        triggerOnHover={false}
                        triggerOnView={true}
                      />
                    </div>
                    <div className="text-sm text-gray-500">{t("businessClass.labels.timesPerYear")}</div>
                  </div>
                </div>
                
                {/* Industry Examples */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-amazon-navy" />
                    {t("businessClass.industryExamples")}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {item.examples.map((example, exIndex) => (
                      <div key={exIndex} className="text-sm bg-amazon-warm-gray backdrop-blur-sm border border-gray-200 rounded-xl px-3 py-2 text-center font-medium text-gray-700 hover:border-gray-300 transition-colors duration-200">
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Frequency Visualization */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="business-metric-label">{t("businessClass.labels.serviceDensity")}</span>
                    <span className="text-lg font-bold text-gray-700">
                      <AnimatedCounter 
                        ref={(el) => { counterRefs.current[9 + index] = el; }}
                        value={Math.round((item.frequencyValue / 12) * 100)} 
                        suffix="%" 
                        duration={1000}
                        startDelay={index * 200 + 500}
                        triggerOnHover={false}
                        triggerOnView={true}
                      />
                    </span>
                  </div>
                  <AnimatedProgressBar 
                    ref={(el) => { progressBarRefs.current[3 + index] = el; }}
                    progress={(item.frequencyValue / 12) * 100}
                    duration={1200}
                    startDelay={index * 200 + 500}
                    triggerOnHover={false}
                    triggerOnView={true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Comparison Chart */}
        <div className="business-card mb-20 animate-fade-in hover-sync-container" style={{ animationDelay: '0.5s' }} onMouseEnter={triggerAllAnimations}>
          <div className="p-8 border-b border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-amazon-orange" />
              {t("businessClass.labels.comparisonChart")}
            </h3>
            <p className="business-body text-gray-600">{t("businessClass.labels.comparisonDescription")}</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {classificationData.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-xl font-bold text-gray-900 mb-2">{item.level}</div>
                  <div className="business-body text-gray-600 mb-6">{item.description}</div>
                  
                  {/* Enhanced Vertical Bar Chart */}
                  <AnimatedVerticalProgressBar 
                    ref={(el) => { verticalProgressBarRefs.current[index] = el; }}
                    progress={item.riskLevel}
                    duration={2000}
                    startDelay={index * 300 + 800}
                    className="h-40 w-12 mx-auto bg-gray-200 rounded-full overflow-hidden relative shadow-inner"
                    triggerOnHover={false}
                    triggerOnView={true}
                  />
                  <div className="text-sm text-gray-500 mt-3">
                    <AnimatedCounter 
                      ref={(el) => { counterRefs.current[12 + index] = el; }}
                      value={item.riskLevel} 
                      suffix={`% ${t("businessClass.labels.riskLevel")}`}
                      duration={1000}
                      startDelay={index * 300 + 1000}
                      triggerOnHover={false}
                      triggerOnView={true}
                    />
                  </div>
                  <div className="text-lg font-bold text-amazon-orange mt-2">
                    <AnimatedCounter 
                      ref={(el) => { counterRefs.current[15 + index] = el; }}
                      value={item.frequencyValue} 
                      suffix={t("businessClass.labels.timesPerYear")}
                      duration={1200}
                      startDelay={index * 300 + 1200}
                      triggerOnHover={false}
                      triggerOnView={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Important Reminders */}
        <div className="business-highlight-box animate-fade-in hover-sync-container" style={{ animationDelay: '0.7s' }} onMouseEnter={triggerAllAnimations}>
          <div className="flex items-center gap-6 mb-8">
            <div className="business-icon-wrapper bg-amazon-navy shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {t("businessClass.reminder.title")}
              </h3>
              <div className="flex items-center gap-4">
                <div className="business-metric text-amazon-navy text-2xl">
                  <AnimatedCounter 
                    ref={(el) => { counterRefs.current[18] = el; }}
                    value={4} 
                    duration={800}
                    startDelay={300}
                    triggerOnHover={false}
                    triggerOnView={true}
                  />
                </div>
                <div className="business-metric-label">{t("businessClass.labels.importantReminders")}</div>
              </div>
            </div>
          </div>
          
          <div className="business-timeline">
            {t("businessClass.reminder.points").map((point: string, index: number) => (
              <div key={index} className="business-timeline-item">
                <div className="business-timeline-dot bg-amazon-navy"></div>
                <div className="business-data-point bg-white border-amazon-navy">
                  <div className="flex items-start gap-4">
                    <div className="business-number bg-amazon-navy text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="business-body text-gray-700">{point}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <AnimatedProgressBar 
                          ref={(el) => { progressBarRefs.current[6 + index] = el; }}
                          progress={100 - index * 15}
                          duration={1000}
                          startDelay={index * 200 + 600}
                          className="flex-1"
                          barClassName="bg-amazon-navy"
                          triggerOnHover={false}
                          triggerOnView={true}
                        />
                        <span className="text-sm font-medium text-gray-600">{t("businessClass.labels.riskLevel")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Classification Tool */}
        <div className="business-card mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Search className="w-8 h-8 text-amazon-orange" />
                  {t("businessClass.classificationTool.title")}
                </h3>
                <p className="business-body text-gray-600">{t("businessClass.classificationTool.subtitle")}</p>
              </div>
              <Button 
                onClick={() => setShowClassificationTool(true)}
                className="business-button-primary"
              >
                <Search className="w-5 h-5 mr-2" />
                {t("businessClass.classificationTool.startClassification")}
              </Button>
            </div>
          </div>
        </div>

        {/* Classification Tool Modal */}
        {showClassificationTool && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" 
            style={{ zIndex: 9999 }}
            onClick={closeTool}
          >
            <div 
              className="business-card bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white z-10">
                <h3 className="text-2xl font-bold text-gray-900">{t("businessClass.classificationTool.title")}</h3>
                <Button variant="ghost" size="icon" onClick={closeTool}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="p-6">
                {!classificationResult ? (
                  <div className="space-y-6">
                    {/* Input Mode Selection */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">{t("businessClass.classificationTool.inputModeSelection.title")}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => switchInputMode(InputMode.INDUSTRY_SELECTION)}
                          className={`p-4 border-2 rounded-lg transition-all duration-200 text-left ${
                            inputMode === InputMode.INDUSTRY_SELECTION 
                              ? 'border-amazon-orange bg-amazon-light-gray' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <List className="w-6 h-6 text-amazon-orange" />
                            <span className="font-semibold text-gray-900">
                              {t("businessClass.classificationTool.inputModeSelection.industrySelection")}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {t("businessClass.classificationTool.inputModeSelection.industrySelectionDesc")}
                          </p>
                        </button>
                        
                        <button
                          onClick={() => switchInputMode(InputMode.CODE_INPUT)}
                          className={`p-4 border-2 rounded-lg transition-all duration-200 text-left ${
                            inputMode === InputMode.CODE_INPUT 
                              ? 'border-amazon-orange bg-amazon-light-gray' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <Hash className="w-6 h-6 text-amazon-orange" />
                            <span className="font-semibold text-gray-900">
                              {t("businessClass.classificationTool.inputModeSelection.codeInput")}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">
                            {t("businessClass.classificationTool.inputModeSelection.codeInputDesc")}
                          </p>
                        </button>
                      </div>
                    </div>

                    {/* Display different input interfaces based on mode */}
                    {inputMode === InputMode.INDUSTRY_SELECTION ? (
                      <div className="space-y-4">
                        <p className="text-gray-600">{t("businessClass.classificationTool.selectIndustry")}</p>
                        
                        {/* Search Input */}
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            type="text"
                            placeholder={t("businessClass.classificationTool.searchPlaceholder")}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                          />
                        </div>

                        {/* Industry Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
                          {filteredIndustries.map((industryKey) => {
                            const classification = industryClassification[industryKey as keyof typeof industryClassification];
                            const levelColor = classification.level === 1 ? 'amazon-orange' : 
                                             classification.level === 2 ? 'amazon-navy' : 'gray-500';
                            
                            return (
                              <button
                                key={industryKey}
                                onClick={() => handleIndustrySelect(industryKey)}
                                className="text-left p-4 border border-gray-200 rounded-lg hover:border-amazon-orange hover:bg-amazon-light-gray transition-all duration-200"
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <div className={`w-3 h-3 rounded-full bg-${levelColor}`}></div>
                                  <span className="text-sm font-medium text-gray-600">
                                    {t(`businessClass.classificationTool.categories.${classification.level === 1 ? 'first' : classification.level === 2 ? 'second' : 'third'}`)}
                                  </span>
                                </div>
                                <div className="font-medium text-gray-900">
                                  {t(`businessClass.classificationTool.industries.${industryKey}`)}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            {t("businessClass.classificationTool.codeInput.title")}
                          </h4>
                          <p className="text-gray-600 mb-4">
                            {t("businessClass.classificationTool.codeInput.examples")}
                          </p>
                        </div>
                        
                        {/* Code Input */}
                        <div className="space-y-2">
                          <div className="relative">
                            <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <Input
                              type="text"
                              placeholder={t("businessClass.classificationTool.codeInput.placeholder")}
                              value={industryCode}
                              onChange={(e) => handleCodeInput(e.target.value)}
                              className="pl-10 text-lg font-mono"
                              maxLength={4}
                            />
                          </div>
                          <p className="text-sm text-gray-500">
                            {t("businessClass.classificationTool.codeInput.formatHint")}
                          </p>
                        </div>

                        {/* Validation results and error messages */}
                        {codeValidation && !codeValidation.isValid && (
                          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-700 font-medium mb-2">
                              {codeValidation.errorMessage}
                            </p>
                            {codeValidation.suggestions && codeValidation.suggestions.length > 0 && (
                              <div>
                                <p className="text-sm text-red-600 mb-2">
                                  {t("businessClass.classificationTool.codeInput.suggestions.title")}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {codeValidation.suggestions.map((suggestion: string) => (
                                    <button
                                      key={suggestion}
                                      onClick={() => handleCodeInput(suggestion)}
                                      className="px-3 py-1 bg-red-100 text-red-700 rounded-md text-sm hover:bg-red-200 transition-colors"
                                    >
                                      {suggestion}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Help Information */}
                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                          <h5 className="font-medium text-blue-900 mb-2">
                            {t("businessClass.classificationTool.codeInput.help.title")}
                          </h5>
                          <p className="text-blue-700 text-sm mb-3">
                            {t("businessClass.classificationTool.codeInput.help.description")}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => switchInputMode(InputMode.INDUSTRY_SELECTION)}
                            className="text-blue-700 border-blue-300 hover:bg-blue-100"
                          >
                            {t("businessClass.classificationTool.codeInput.help.switchMode")}
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{t("businessClass.classificationTool.result.title")}</h4>
                      <p className="text-gray-600">
                        {classificationResult.isCodeResult 
                          ? t("businessClass.classificationTool.result.codeDescription")
                          : t("businessClass.classificationTool.result.description")
                        }
                      </p>
                    </div>

                    {/* Display code and industry name (if code query result) */}
                    {classificationResult.isCodeResult && (
                      <div className="business-card bg-blue-50 border-blue-200 p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-sm text-blue-600 mb-2">{t("businessClass.classificationTool.result.industryCode")}</div>
                            <div className="text-xl font-bold text-blue-900 font-mono">{classificationResult.industry}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-blue-600 mb-2">{t("businessClass.classificationTool.result.industryName")}</div>
                            <div className="text-lg font-bold text-blue-900">
                              {t(`businessClass.classificationTool.industryCodeNames.${classificationResult.industryName}`)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="business-card bg-amazon-light-gray p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-2">{t("businessClass.classificationTool.result.classification")}</div>
                          <div className="text-2xl font-bold text-amazon-orange">
                            {t(`businessClass.classificationTool.categories.${classificationResult.level === 1 ? 'first' : classificationResult.level === 2 ? 'second' : 'third'}`)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-2">{t("businessClass.classificationTool.result.frequency")}</div>
                          <div className="text-lg font-bold text-amazon-navy">
                            {t(`businessClass.frequencies.${classificationResult.frequency}`)}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-2">{t("businessClass.classificationTool.result.riskLevel")}</div>
                          <div className="text-lg font-bold text-gray-700">{classificationResult.riskLevel}%</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center space-y-4">
                      {!classificationResult.isCodeResult && (
                        <div className="text-lg font-medium text-gray-900">
                          {t(`businessClass.classificationTool.industries.${classificationResult.industry}`)}
                        </div>
                      )}
                      <div className="flex justify-center gap-4">
                        <Button onClick={resetTool} variant="outline">
                          {t("businessClass.classificationTool.reset")}
                        </Button>
                        <Button onClick={closeTool} className="business-button-primary">
                          {t("businessClass.classificationTool.close")}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Enterprise Compliance Requirements Calculator */}
        <div className="business-card mb-20 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Calculator className="w-8 h-8 text-amazon-orange" />
                  {t("businessClass.classificationTool.complianceCalculator.title")}
                </h3>
                <p className="business-body text-gray-600">{t("calculator.description")}</p>
              </div>
            </div>
          </div>
          
          <div className="p-8">
            <ComplianceCalculatorIntegrated />
          </div>
        </div>
      </div>
    </section>
  );
};

// Integrated Calculator Component
const ComplianceCalculatorIntegrated = () => {
  const { t } = useTranslation();
  const [employeeCount, setEmployeeCount] = useState<string>("");
  const [businessLevel, setBusinessLevel] = useState<string>("");
  const [hasSpecialHazards, setHasSpecialHazards] = useState(false);
  const [specialHazardDoctorCount, setSpecialHazardDoctorCount] = useState<string>("");
  const [specialHazardNurseCount, setSpecialHazardNurseCount] = useState<string>("");

  const businessLevels = [
    { value: "class1", label: t("businessClass.levels.first") + "（" + t("businessClass.riskTypes.high") + "）", riskMultiplier: 2, level: 1 },
    { value: "class2", label: t("businessClass.levels.second") + "（" + t("businessClass.riskTypes.medium") + "）", riskMultiplier: 1.5, level: 2 },
    { value: "class3", label: t("businessClass.levels.third") + "（" + t("businessClass.riskTypes.low") + "）", riskMultiplier: 1, level: 3 },
  ];

  const requirements = useMemo(() => {
    const count = parseInt(employeeCount) || 0;
    const levelData = businessLevels.find(l => l.value === businessLevel);
    const riskMultiplier = levelData?.riskMultiplier || 1;
    const level = levelData?.level || 3;

    let nurseCount = 0;
    let needsOnSiteService = false;
    let onSiteFrequency = "";
    let needsFullTimeDoctor = false;
    let safetyPersonnel = "";
    let estimatedCost = { min: 0, max: 0 };

    if (count >= 50) {
      needsOnSiteService = true;
      
      if (level === 1) {
        onSiteFrequency = t("businessClass.frequencies.monthly") + "（" + t("businessClass.levels.first") + "）";
      } else if (level === 2) {
        onSiteFrequency = t("businessClass.frequencies.bimonthly") + "（" + t("businessClass.levels.second") + "）";
      } else {
        onSiteFrequency = t("businessClass.frequencies.quarterly") + "（" + t("businessClass.levels.third") + "）";
      }
    }

    // Nursing staff allocation (according to Labor Health Protection Rules Article 3 and Appendix 3)
    let baseNurseCount = 0;
    
    // First determine basic nursing staff allocation based on total employee count
    if (count >= 6000) {
      baseNurseCount = 4;
    } else if (count >= 3000) {
      baseNurseCount = 3;
    } else if (count >= 1000) {
      baseNurseCount = 2;
    } else if (count >= 300) {
      baseNurseCount = 1;
    }

    // Adjust nursing staff allocation based on special hazardous work employee count
    if (hasSpecialHazards && specialHazardNurseCount) {
      let hazardCount = 0;
      
      // Parse selected range for nursing staff calculation
      if (specialHazardNurseCount === "0-99") {
        hazardCount = 50; // Take middle value
      } else if (specialHazardNurseCount === "100-299") {
        hazardCount = 200; // Take middle value
      } else if (specialHazardNurseCount === "300+") {
        hazardCount = 300; // Minimum value
      }
      
      // Determine nursing staff count based on Appendix 3
      let specialNurseCount = 0;
      
      if (count >= 6000) {
        // 6000+ employees
        if (hazardCount >= 300) {
          specialNurseCount = 4;
        } else if (hazardCount >= 100) {
          specialNurseCount = 4;
        } else if (hazardCount >= 50) {
          specialNurseCount = 4;
        }
      } else if (count >= 3000) {
        // 3000-5999 employees
        if (hazardCount >= 300) {
          specialNurseCount = 4;
        } else if (hazardCount >= 100) {
          specialNurseCount = 3;
        } else if (hazardCount >= 50) {
          specialNurseCount = 3;
        }
      } else if (count >= 1000) {
        // 1000-2999 employees
        if (hazardCount >= 300) {
          specialNurseCount = 2;
        } else if (hazardCount >= 100) {
          specialNurseCount = 2;
        } else if (hazardCount >= 50) {
          specialNurseCount = 2;
        }
      } else if (count >= 300) {
        // 300-999 employees
        if (hazardCount >= 300) {
          specialNurseCount = 2;
        } else if (hazardCount >= 100) {
          specialNurseCount = 1;
        } else if (hazardCount >= 50) {
          specialNurseCount = 1;
        }
      } else if (count >= 1) {
        // 1-299 employees
        if (hazardCount >= 100) {
          specialNurseCount = 1;
        }
      }
      
      // Take the larger value as final nursing staff count
      nurseCount = Math.max(baseNurseCount, specialNurseCount);
    } else {
      // Use basic configuration when no special hazardous work
      nurseCount = baseNurseCount;
    }

    // Full-time doctor allocation (3000+ employees)
    if (count >= 3000) {
      needsFullTimeDoctor = true;
    }

    // Cost estimation (based on service frequency and personnel allocation)
    if (count >= 50 && count < 300) {
      // Only on-site health services required
      const baseFrequency = level === 1 ? 12 : level === 2 ? 6 : 4;
      estimatedCost = { 
        min: baseFrequency * 3000, 
        max: baseFrequency * 8000 
      };
    } else if (count >= 300 && count < 1000) {
      // Requires 1 nursing staff + on-site health services
      estimatedCost = { min: 45000, max: 75000 };
    } else if (count >= 1000 && count < 3000) {
      // Requires 2 nursing staff + on-site health services
      estimatedCost = { min: 90000, max: 150000 };
    } else if (count >= 3000 && count < 6000) {
      // Requires 3 nursing staff + full-time doctor + on-site health services
      estimatedCost = { min: 200000, max: 300000 };
    } else if (count >= 6000) {
      // Requires 4 nursing staff + full-time doctor + on-site health services
      estimatedCost = { min: 250000, max: 400000 };
    }

    // 職業安全衛生人員設置（依據職業安全衛生管理辦法第3條及附表二）
    if (count < 30) {
      safetyPersonnel = t("calculator.safetyRoles.employer");
    } else {
      // 根據事業類別和員工人數決定詳細配置
      if (level === 1) { // 第一類事業
        if (count >= 30 && count < 100) {
          safetyPersonnel = t("calculator.safetyRoles.class1.30to99");
        } else if (count >= 100 && count < 300) {
          safetyPersonnel = t("calculator.safetyRoles.class1.100to299");
        } else if (count >= 300 && count < 500) {
          safetyPersonnel = t("calculator.safetyRoles.class1.300to499");
        } else if (count >= 500) {
          safetyPersonnel = t("calculator.safetyRoles.class1.500plus");
        }
      } else if (level === 2) { // 第二類事業
        if (count >= 30 && count < 100) {
          safetyPersonnel = t("calculator.safetyRoles.class2.30to99");
        } else if (count >= 100 && count < 300) {
          safetyPersonnel = t("calculator.safetyRoles.class2.100to299");
        } else if (count >= 300 && count < 500) {
          safetyPersonnel = t("calculator.safetyRoles.class2.300to499");
        } else if (count >= 500) {
          safetyPersonnel = t("calculator.safetyRoles.class2.500plus");
        }
      } else { // 第三類事業
        if (count >= 30 && count < 100) {
          safetyPersonnel = t("calculator.safetyRoles.class3.30to99");
        } else if (count >= 100 && count < 300) {
          safetyPersonnel = t("calculator.safetyRoles.class3.100to299");
        } else if (count >= 300 && count < 500) {
          safetyPersonnel = t("calculator.safetyRoles.class3.300to499");
        } else if (count >= 500) {
          safetyPersonnel = t("calculator.safetyRoles.class3.500plus");
        }
      }
    }

    if (riskMultiplier > 1) {
      estimatedCost.min = Math.round(estimatedCost.min * riskMultiplier);
      estimatedCost.max = Math.round(estimatedCost.max * riskMultiplier);
    }

    // Special hazard additional costs (mainly special health examinations and monitoring costs)
    if (hasSpecialHazards && (specialHazardDoctorCount || specialHazardNurseCount)) {
      let hazardCount = 0;
      
      // Use the higher count for cost estimation
      const doctorCount = specialHazardDoctorCount === "50-99" ? 75 : 
                         specialHazardDoctorCount === "100+" ? 200 : 0;
      
      const nurseCount = specialHazardNurseCount === "0-99" ? 50 :
                        specialHazardNurseCount === "100-299" ? 200 :
                        specialHazardNurseCount === "300+" ? 300 : 0;
      
      hazardCount = Math.max(doctorCount, nurseCount);
      
      // Special health examination and workplace environmental monitoring costs
      if (hazardCount > 0) {
        const specialExamCost = hazardCount * 2000; // About 2000 TWD per person per year for special health exams
        const monitoringCost = 20000; // Annual workplace environmental monitoring fee
        
        estimatedCost.min += (specialExamCost + monitoringCost) / 12; // Convert to monthly fee
        estimatedCost.max += (specialExamCost * 1.5 + monitoringCost * 2) / 12;
      }
    }

    return {
      count,
      nurseCount,
      needsOnSiteService,
      onSiteFrequency,
      needsFullTimeDoctor,
      safetyPersonnel,
      estimatedCost,
      businessLevel: levelData?.label || "",
    };
  }, [employeeCount, businessLevel, hasSpecialHazards, specialHazardNurseCount]);

  // Calculate contract doctor service frequency based on the provided table
  const contractDoctorFrequency = useMemo(() => {
    const count = parseInt(employeeCount) || 0;
    const levelData = businessLevels.find(l => l.value === businessLevel);
    const level = levelData?.level || 3;
    
    if (count < 50) return null;

    try {
      // Determine frequency based on business level and employee count (regular service)
      let frequency = "";
      let monthlyFrequency = 0;
      let doctorType = t("calculator.contractDoctor.doctorType.contractDoctor");

      if (level === 1) { // First class (high risk)
        if (count >= 50 && count <= 299) {
          frequency = "1次/月";
          monthlyFrequency = 1;
        } else if (count >= 300 && count <= 999) {
          frequency = "1次/月";
          monthlyFrequency = 1;
        } else if (count >= 1000 && count <= 1999) {
          frequency = "3次/月";
          monthlyFrequency = 3;
        } else if (count >= 2000 && count <= 2999) {
          frequency = "6次/月";
          monthlyFrequency = 6;
        } else if (count >= 3000 && count <= 3999) {
          frequency = "9次/月";
          monthlyFrequency = 9;
        } else if (count >= 4000 && count <= 4999) {
          frequency = "12次/月";
          monthlyFrequency = 12;
        } else if (count >= 5000 && count <= 5999) {
          frequency = "15次/月";
          monthlyFrequency = 15;
        } else if (count >= 6000) {
          frequency = t("calculator.contractDoctor.frequency.fullTimeOrEighteen");
          monthlyFrequency = 18;
          doctorType = t("calculator.contractDoctor.doctorType.fullTimeSpecialist");
        }
      } else if (level === 2) { // Second class (medium risk)
        if (count >= 50 && count <= 299) {
          frequency = "1次/2個月";
          monthlyFrequency = 0.5;
        } else if (count >= 300 && count <= 999) {
          frequency = "1次/2個月";
          monthlyFrequency = 0.5;
        } else if (count >= 1000 && count <= 1999) {
          frequency = "1次/月";
          monthlyFrequency = 1;
        } else if (count >= 2000 && count <= 2999) {
          frequency = "3次/月";
          monthlyFrequency = 3;
        } else if (count >= 3000 && count <= 3999) {
          frequency = "5次/月";
          monthlyFrequency = 5;
        } else if (count >= 4000 && count <= 4999) {
          frequency = "7次/月";
          monthlyFrequency = 7;
        } else if (count >= 5000 && count <= 5999) {
          frequency = "9次/月";
          monthlyFrequency = 9;
        } else if (count >= 6000) {
          frequency = "12次/月";
          monthlyFrequency = 12;
        }
      } else if (level === 3) { // Third class (low risk)
        if (count >= 50 && count <= 299) {
          frequency = "1次/3個月";
          monthlyFrequency = 0.33;
        } else if (count >= 300 && count <= 999) {
          frequency = "1次/3個月";
          monthlyFrequency = 0.33;
        } else if (count >= 1000 && count <= 1999) {
          frequency = "1次/2個月";
          monthlyFrequency = 0.5;
        } else if (count >= 2000 && count <= 2999) {
          frequency = "1次/月";
          monthlyFrequency = 1;
        } else if (count >= 3000 && count <= 3999) {
          frequency = "2次/月";
          monthlyFrequency = 2;
        } else if (count >= 4000 && count <= 4999) {
          frequency = "3次/月";
          monthlyFrequency = 3;
        } else if (count >= 5000 && count <= 5999) {
          frequency = "4次/月";
          monthlyFrequency = 4;
        } else if (count >= 6000) {
          frequency = "6次/月";
          monthlyFrequency = 6;
        }
      }

      // Handle edge case where no frequency is determined
      if (!frequency) {
        frequency = t("calculator.errorMessages.confirmEmployeeAndLevel");
        monthlyFrequency = 0;
      }

      return {
        frequency,
        monthlyFrequency,
        doctorType,
        needsSpecialist: count >= 6000
      };
    } catch (error) {
      // Fallback for any calculation errors
      console.warn("Error calculating contract doctor frequency:", error);
      return {
        frequency: t("calculator.errorMessages.calculationError"),
        monthlyFrequency: 0,
        doctorType: t("calculator.contractDoctor.doctorType.contractDoctor"),
        needsSpecialist: false
      };
    }
  }, [employeeCount, businessLevel, t]);

  // Calculate special hazard doctor frequency (separate from regular contract doctor)
  const specialHazardDoctorFrequency = useMemo(() => {
    // Return null if no special hazards or invalid input
    if (!hasSpecialHazards || !specialHazardDoctorCount) {
      return null;
    }

    let frequency = "";
    let doctorType = t("calculator.contractDoctor.doctorType.occupationalMedicine");
    let isRequired = false;

    try {
      // Based on requirements: 50-99人 → 1次/4個月, 100人以上 → 1次/月
      if (specialHazardDoctorCount === "50-99") {
        frequency = "1次/4個月";
        isRequired = true;
      } else if (specialHazardDoctorCount === "100+") {
        frequency = "1次/月";
        isRequired = true;
      } else {
        // Handle edge case: other values should not require specialist
        frequency = "0次";
        isRequired = false;
      }

      return {
        frequency,
        doctorType,
        isRequired,
        hazardPersonnelCount: specialHazardDoctorCount,
        note: t("calculator.contractDoctor.specialHazardNote"),
        legalBasis: "勞工健康保護規則附表二"
      };
    } catch (error) {
      // Fallback for any calculation errors
      console.warn("Error calculating special hazard doctor frequency:", error);
      return {
        frequency: t("calculator.errorMessages.calculationErrorShort"),
        doctorType,
        isRequired: false,
        hazardPersonnelCount: specialHazardDoctorCount,
        note: t("calculator.errorMessages.pleaseReselect"),
        legalBasis: t("calculator.legalNotes.legalBasis")
      };
    }
  }, [hasSpecialHazards, specialHazardDoctorCount, t]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Area */}
      <div className="space-y-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-2">📋 {t("calculator.inputForm.helpTitle")}</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>• <strong>{t("calculator.inputForm.inputInstructions.employeeCount")}</strong></p>
            <p>• <strong>{t("calculator.inputForm.inputInstructions.businessLevel")}</strong></p>
            <p>• <strong>{t("calculator.inputForm.inputInstructions.specialHazard")}</strong></p>
          </div>
        </div>
        
        <h4 className="text-xl font-semibold text-gray-900 mb-4">{t("businessClass.classificationTool.complianceCalculator.inputTitle")}</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("calculator.employeeCount")}</label>
            <Input
              type="number"
              placeholder={t("calculator.employeePlaceholder")}
              value={employeeCount}
              onChange={(e) => setEmployeeCount(e.target.value)}
              className="text-lg h-12"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("calculator.industryType")}</label>
            <Select value={businessLevel} onValueChange={setBusinessLevel}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder={t("calculator.selectIndustry")} />
              </SelectTrigger>
              <SelectContent>
                {businessLevels.map(level => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{t("calculator.hasSpecialHazards")}</label>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="no-hazards"
                  checked={!hasSpecialHazards}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setHasSpecialHazards(false);
                      setSpecialHazardDoctorCount("");
                      setSpecialHazardNurseCount("");
                    }
                  }}
                />
                <label htmlFor="no-hazards" className="text-sm font-medium text-gray-900">
                  {t("businessClass.classificationTool.complianceCalculator.noSpecialHazards")}
                </label>
              </div>
              
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="has-hazards"
                  checked={hasSpecialHazards}
                  onCheckedChange={(checked) => setHasSpecialHazards(checked === true)}
                />
                <label htmlFor="has-hazards" className="text-sm font-medium text-gray-900">
                  {t("businessClass.classificationTool.complianceCalculator.hasSpecialHazards")}
                </label>
              </div>
              
              {hasSpecialHazards && (
                <div className="ml-6 space-y-4">
                  {/* 醫師臨場服務頻率設定卡片 */}
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="mb-3">
                      <div className="text-sm font-medium text-blue-800 mb-2 flex items-center gap-2">
                        👨‍⚕️ {t("calculator.doctorFrequencyCard")}
                      </div>
                      <div className="text-xs text-blue-600 mb-3">
                        ※ {t("calculator.doctorFrequencyNote")}
                      </div>
                    </div>
                    <Select value={specialHazardDoctorCount} onValueChange={setSpecialHazardDoctorCount}>
                      <SelectTrigger className="h-10 border-blue-300 focus:border-blue-500">
                        <SelectValue placeholder={t("calculator.placeholders.selectSpecialHazardType")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-99">
                          <div className="flex flex-col">
                            <span className="font-medium">{t("calculator.specialHazardOptions.doctor5099.title")}</span>
                            <span className="text-xs text-gray-500">{t("calculator.specialHazardOptions.doctor5099.subtitle")}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="100+">
                          <div className="flex flex-col">
                            <span className="font-medium">{t("calculator.specialHazardOptions.doctor100plus.title")}</span>
                            <span className="text-xs text-gray-500">{t("calculator.specialHazardOptions.doctor100plus.subtitle")}</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* 護理人員配置設定卡片 */}
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="mb-3">
                      <div className="text-sm font-medium text-green-800 mb-2 flex items-center gap-2">
                        👩‍⚕️ {t("calculator.nurseAllocationCard")}
                      </div>
                      <div className="text-xs text-green-600 mb-3">
                        ※ {t("calculator.nurseAllocationNote")}
                      </div>
                    </div>
                    <Select value={specialHazardNurseCount} onValueChange={setSpecialHazardNurseCount}>
                      <SelectTrigger className="h-10 border-green-300 focus:border-green-500">
                        <SelectValue placeholder={t("calculator.placeholders.selectNurseAllocationCount")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-99">
                          <div className="flex flex-col">
                            <span className="font-medium">0-99人</span>
                            <span className="text-xs text-gray-500">依總員工數決定護理人員配置</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="100-299">
                          <div className="flex flex-col">
                            <span className="font-medium">100-299人</span>
                            <span className="text-xs text-gray-500">可能需要增設護理人員</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="300+">
                          <div className="flex flex-col">
                            <span className="font-medium">300人以上</span>
                            <span className="text-xs text-gray-500">需要增設護理人員</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-2 text-xs text-orange-600 p-3 bg-orange-50 border border-orange-200 rounded">
                    💡 <strong>{t("calculator.dualCardExplanation")}</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <div className="space-y-6">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">{t("businessClass.classificationTool.complianceCalculator.resultsTitle")}</h4>
        
        {requirements.count > 0 ? (
          <div className="space-y-4">
            <div className="p-4 bg-amazon-light-gray rounded-xl">
              <div className="text-lg font-bold text-gray-900 mb-2">{requirements.count} {t("calculator.employeeUnit")}</div>
              {requirements.businessLevel && (
                <div className="text-gray-600">{requirements.businessLevel}</div>
              )}
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <div className="font-semibold text-gray-900 mb-1">{t("calculator.requirements.fullTimeNurse")}</div>
                <div className="text-gray-700">
                  {requirements.nurseCount > 0 
                    ? t("calculator.nurseRequired").replace("{count}", requirements.nurseCount.toString())
                    : t("calculator.nurseNotRequired")
                  }
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <div className="font-semibold text-gray-900 mb-1">{t("calculator.requirements.onSiteService")}</div>
                <div className="text-gray-700">
                  {requirements.needsOnSiteService 
                    ? requirements.onSiteFrequency
                    : t("calculator.serviceNotRequired")
                  }
                </div>
                {requirements.needsFullTimeDoctor && (
                  <div className="mt-2 text-amazon-orange font-medium">{t("calculator.needsFullTimeDoctor")}</div>
                )}
              </div>

              <div className="p-4 bg-white border border-gray-200 rounded-xl">
                <div className="font-semibold text-gray-900 mb-1">{t("calculator.requirements.safetyPersonnel")}</div>
                <div className="text-gray-700">{requirements.safetyPersonnel}</div>
              </div>

              {contractDoctorFrequency && contractDoctorFrequency.frequency && (
                <div className="p-4 bg-white border border-gray-200 rounded-xl" role="region" aria-labelledby="occupational-medicine-title">
                  <div id="occupational-medicine-title" className="font-semibold text-gray-900 mb-1">{t("calculator.requirements.occupationalMedicine")}</div>
                  
                  {/* Regular contract doctor service */}
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg" role="group" aria-labelledby="contract-doctor-section">
                    <div id="contract-doctor-section" className="text-sm text-blue-700 font-medium mb-1">特約醫師臨場服務</div>
                    <div className="text-gray-700 font-medium" aria-label={`服務頻率：${contractDoctorFrequency.frequency}`}>
                      {contractDoctorFrequency.frequency}
                    </div>
                    {contractDoctorFrequency.doctorType && (
                      <div className="text-sm text-blue-600 font-medium mt-1" aria-label={`醫師類型：${contractDoctorFrequency.doctorType}`}>
                        👨‍⚕️ {contractDoctorFrequency.doctorType}
                      </div>
                    )}
                  </div>
                  
                  {/* Special hazard doctor service */}
                  {specialHazardDoctorFrequency && specialHazardDoctorFrequency.isRequired && (
                    <div className="mb-3 p-3 bg-orange-50 border border-orange-200 rounded-lg" role="group" aria-labelledby="special-hazard-section">
                      <div id="special-hazard-section" className="text-sm text-orange-700 font-medium mb-1">職業醫學科專科醫師</div>
                      <div className="text-gray-700 font-medium" aria-label={`特別危害健康作業服務頻率：${specialHazardDoctorFrequency.frequency}`}>
                        {specialHazardDoctorFrequency.frequency}
                      </div>
                      <div className="text-sm text-orange-600 font-medium mt-1" aria-label={`醫師類型：${specialHazardDoctorFrequency.doctorType}`}>
                        👨‍⚕️ {specialHazardDoctorFrequency.doctorType}
                      </div>
                      <div className="text-xs text-orange-600 font-medium mt-1" aria-label={`備註：${specialHazardDoctorFrequency.note}`}>
                        ⚠️ {specialHazardDoctorFrequency.note}
                      </div>
                    </div>
                  )}
                  
                  {!specialHazardDoctorFrequency?.isRequired && hasSpecialHazards && (
                    <div className="mb-3 p-3 bg-gray-50 border border-gray-200 rounded-lg" role="group" aria-labelledby="no-special-hazard-section">
                      <div id="no-special-hazard-section" className="text-sm text-gray-600 font-medium mb-1">職業醫學科專科醫師</div>
                      <div className="text-gray-500" aria-label={t("calculator.noSpecialHazardThreshold")}>{t("calculator.noSpecialHazardDisplay")}</div>
                      <div className="text-xs text-gray-500 mt-1" aria-label={t("calculator.specialHazardRequirement")}>
                        💡 {t("calculator.specialHazardMinimum")}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500 mt-3 p-2 bg-gray-50 rounded" role="note" aria-label="法規依據和服務時間說明">
                    📋 依據：勞工健康保護規則附表二
                    <br />
                    💡 每次臨場服務時間應至少3小時以上
                  </div>
                </div>
              )}
            </div>

            {requirements.count >= 50 && (
              <div className="p-6 bg-white border border-amazon-orange rounded-xl">
                <div className="text-sm text-gray-600 mb-1">{t("calculator.costEstimate")}</div>
                <div className="text-2xl font-bold text-amazon-orange">
                  {formatCurrency(requirements.estimatedCost.min)} - {formatCurrency(requirements.estimatedCost.max)}
                </div>
                <div className="text-xs text-gray-500 mt-2">{t("calculator.costDisclaimer")}</div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            {t("calculator.enterEmployeeCount")}
          </div>
        )}
      </div>
      
      {/* Legal Notes Section */}
      {requirements.count > 0 && (
        <div className="col-span-full mt-6 text-sm text-gray-600 space-y-2" role="region" aria-labelledby="legal-notes-title">
          <div id="legal-notes-title" className="font-medium text-gray-700 mb-3">
            {t("calculator.legalNotes.title")}
          </div>
          
          <div className="space-y-1">
            <div>• {t("calculator.legalNotes.over6000Rule.title")}：{t("calculator.legalNotes.over6000Rule.content")}</div>
            <div className="ml-4 text-xs text-gray-500">
              {t("calculator.legalNotes.over6000Rule.categories.class1")} / {t("calculator.legalNotes.over6000Rule.categories.class2")} / {t("calculator.legalNotes.over6000Rule.categories.class3")}
            </div>
            <div>• {t("calculator.legalNotes.serviceTimeRule.title")}：{t("calculator.legalNotes.serviceTimeRule.content")}</div>
            {hasSpecialHazards && (
              <div>• {t("calculator.legalNotes.specialHazardRule.title")}：{t("calculator.legalNotes.specialHazardRule.content")}</div>
            )}
            <div className="text-xs text-gray-500 mt-2">
              {t("calculator.legalNotes.legalBasis")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessClassification;