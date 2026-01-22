import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Users, Stethoscope, Shield, FileText, Building2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const ComplianceCalculator = () => {
  const { t } = useTranslation();
  const [employeeCount, setEmployeeCount] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [hasSpecialHazards, setHasSpecialHazards] = useState(false);
  const [specialHazardDoctorCount, setSpecialHazardDoctorCount] = useState<string>("");
  const [specialHazardNurseCount, setSpecialHazardNurseCount] = useState<string>("");

  const industryTypes = [
    { value: "class1", label: t("businessClass.levels.first") + "（" + t("businessClass.riskTypes.high") + "）", riskMultiplier: 2, level: 1 },
    { value: "class2", label: t("businessClass.levels.second") + "（" + t("businessClass.riskTypes.medium") + "）", riskMultiplier: 1.5, level: 2 },
    { value: "class3", label: t("businessClass.levels.third") + "（" + t("businessClass.riskTypes.low") + "）", riskMultiplier: 1, level: 3 },
  ];

  const requirements = useMemo(() => {
    const count = parseInt(employeeCount) || 0;
    const industryData = industryTypes.find(i => i.value === industry);
    const riskMultiplier = industryData?.riskMultiplier || 1;
    const businessLevel = industryData?.level || 3;

    // 基本計算邏輯
    let nurseCount = 0;
    let needsOnSiteService = false;
    let onSiteFrequency = "";
    let needsFullTimeDoctor = false;
    let safetyPersonnelDetails = "";
    let estimatedCost = { min: 0, max: 0 };

    if (count >= 50) {
      needsOnSiteService = true;
      
      // 根據事業分級決定臨場服務頻率
      if (businessLevel === 1) {
        onSiteFrequency = t("businessClass.frequencies.monthly") + "（" + t("businessClass.levels.first") + "）";
      } else if (businessLevel === 2) {
        onSiteFrequency = t("businessClass.frequencies.bimonthly") + "（" + t("businessClass.levels.second") + "）";
      } else {
        onSiteFrequency = t("businessClass.frequencies.quarterly") + "（" + t("businessClass.levels.third") + "）";
      }
    }

    // 護理人員配置計算 - 使用分離的特殊危害作業人數
    let specialHazardEmployeeCountForNurse = 0;
    if (hasSpecialHazards && specialHazardNurseCount) {
      if (specialHazardNurseCount === "0-99") {
        specialHazardEmployeeCountForNurse = 50; // 使用中間值進行計算
      } else if (specialHazardNurseCount === "100-299") {
        specialHazardEmployeeCountForNurse = 200;
      } else if (specialHazardNurseCount === "300+") {
        specialHazardEmployeeCountForNurse = 300;
      }
    }

    // 護理人員需求計算（依據附表三）
    if (count >= 300) {
      // 一般事業單位300人以上需僱用護理人員
      nurseCount = Math.ceil((count - 300) / 300) + 1;
    }
    
    // 特殊危害健康作業護理人員需求（不論總員工數）
    if (hasSpecialHazards && specialHazardEmployeeCountForNurse >= 50) {
      let specialNurseCount = 0;
      if (specialHazardNurseCount === "0-99") {
        specialNurseCount = 1; // 50-99人需1名
      } else if (specialHazardNurseCount === "100-299") {
        specialNurseCount = 1; // 100-299人需1名
      } else if (specialHazardNurseCount === "300+") {
        specialNurseCount = Math.ceil(specialHazardEmployeeCountForNurse / 300); // 300人以上每300人1名
      }
      
      // 取較大值（一般要求 vs 特殊危害要求）
      nurseCount = Math.max(nurseCount, specialNurseCount);
    }

    if (count >= 50 && count < 300) {
      estimatedCost = { min: 8000, max: 25000 };
    } else if (count >= 300 && count < 500) {
      estimatedCost = { min: 45000, max: 75000 };
    } else if (count >= 500 && count < 1000) {
      estimatedCost = { min: 70000, max: 120000 };
    } else if (count >= 1000 && count < 3000) {
      estimatedCost = { min: 100000, max: 180000 };
    } else if (count >= 3000) {
      needsFullTimeDoctor = true;
      estimatedCost = { min: 250000, max: 400000 };
    }

    // 職業安全衛生人員設置（依據職業安全衛生管理辦法第3條及附表二）
    if (count < 30) {
      safetyPersonnelDetails = t("calculator.safetyRoles.employer");
    } else {
      // 根據事業類別和員工人數決定詳細配置
      if (businessLevel === 1) { // 第一類事業
        if (count >= 30 && count < 100) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class1.30to99");
        } else if (count >= 100 && count < 300) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class1.100to299");
        } else if (count >= 300 && count < 500) {
          // 需要區分營造業和非營造業
          safetyPersonnelDetails = t("calculator.safetyRoles.class1.300to499");
        } else if (count >= 500) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class1.500plus");
        }
      } else if (businessLevel === 2) { // 第二類事業
        if (count >= 30 && count < 100) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class2.30to99");
        } else if (count >= 100 && count < 300) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class2.100to299");
        } else if (count >= 300 && count < 500) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class2.300to499");
        } else if (count >= 500) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class2.500plus");
        }
      } else { // 第三類事業
        if (count >= 30 && count < 100) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class3.30to99");
        } else if (count >= 100 && count < 300) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class3.100to299");
        } else if (count >= 300 && count < 500) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class3.300to499");
        } else if (count >= 500) {
          safetyPersonnelDetails = t("calculator.safetyRoles.class3.500plus");
        }
      }
    }

    // 高風險行業調整
    if (riskMultiplier > 1) {
      estimatedCost.min = Math.round(estimatedCost.min * riskMultiplier);
      estimatedCost.max = Math.round(estimatedCost.max * riskMultiplier);
    }

    // 特殊危害額外成本
    if (hasSpecialHazards && count >= 50) {
      estimatedCost.min += 20000;
      estimatedCost.max += 50000;
    }

    return {
      count,
      nurseCount,
      needsOnSiteService,
      onSiteFrequency,
      needsFullTimeDoctor,
      safetyPersonnel: safetyPersonnelDetails,
      estimatedCost,
      industry: industryData?.label || "",
      businessLevel,
      specialHazardEmployeeCountForNurse,
    };
  }, [employeeCount, industry, hasSpecialHazards, specialHazardDoctorCount, specialHazardNurseCount, t]);

  // Calculate contract doctor service frequency based on Taiwan Labor Health Protection Rules Appendix 2
  const contractDoctorFrequency = useMemo(() => {
    const count = parseInt(employeeCount) || 0;
    const industryData = industryTypes.find(i => i.value === industry);
    const level = industryData?.level || 3;
    
    if (count < 50) return null;

    let specialHazardEmployeeCountForDoctor = 0;
    if (hasSpecialHazards && specialHazardDoctorCount) {
      if (specialHazardDoctorCount === "50-99") {
        specialHazardEmployeeCountForDoctor = 75; // 使用中間值進行計算
      } else if (specialHazardDoctorCount === "100+") {
        specialHazardEmployeeCountForDoctor = 100;
      }
    }

    // Determine frequency based on the updated table
    let frequency = "";
    let monthlyFrequency = 0;
    let doctorType = "";
    let isSpecialHazard = false;

    // Special hazardous work cases (priority)
    if (hasSpecialHazards && specialHazardEmployeeCountForDoctor >= 50) {
      isSpecialHazard = true;
      if (specialHazardDoctorCount === "50-99") {
        frequency = t("calculator.contractDoctor.frequency.specialHazard50to99");
        monthlyFrequency = 0.25;
        doctorType = t("calculator.contractDoctor.doctorType.occupationalMedicine");
      } else if (specialHazardEmployeeCountForDoctor >= 100) {
        frequency = t("calculator.contractDoctor.frequency.specialHazard100plus");
        monthlyFrequency = 1;
        doctorType = t("calculator.contractDoctor.doctorType.occupationalMedicine");
      }
    } else {
      // Regular cases based on business level and employee count
      if (level === 1) { // First class (high risk)
        if (count >= 50 && count < 300) {
          frequency = t("calculator.contractDoctor.frequency.monthly");
          monthlyFrequency = 1;
        } else if (count >= 300 && count <= 999) {
          frequency = t("calculator.contractDoctor.frequency.monthly");
          monthlyFrequency = 1;
        } else if (count >= 1000 && count <= 1999) {
          frequency = t("calculator.contractDoctor.frequency.threeTimesMonthly");
          monthlyFrequency = 3;
        } else if (count >= 2000 && count <= 2999) {
          frequency = t("calculator.contractDoctor.frequency.sixTimesMonthly");
          monthlyFrequency = 6;
        } else if (count >= 3000 && count <= 3999) {
          frequency = t("calculator.contractDoctor.frequency.nineTimesMonthly");
          monthlyFrequency = 9;
        } else if (count >= 4000 && count <= 4999) {
          frequency = t("calculator.contractDoctor.frequency.twelveTimesMonthly");
          monthlyFrequency = 12;
        } else if (count >= 5000 && count <= 5999) {
          frequency = t("calculator.contractDoctor.frequency.fifteenTimesMonthly");
          monthlyFrequency = 15;
        } else if (count >= 6000) {
          frequency = t("calculator.contractDoctor.frequency.fullTimeOrEighteen");
          monthlyFrequency = 18;
          doctorType = t("calculator.contractDoctor.doctorType.fullTimeSpecialist");
        }
      } else if (level === 2) { // Second class (medium risk)
        if (count >= 50 && count < 300) {
          frequency = t("calculator.contractDoctor.frequency.bimonthly");
          monthlyFrequency = 0.5;
        } else if (count >= 300 && count <= 999) {
          frequency = t("calculator.contractDoctor.frequency.bimonthly");
          monthlyFrequency = 0.5;
        } else if (count >= 1000 && count <= 1999) {
          frequency = t("calculator.contractDoctor.frequency.monthly");
          monthlyFrequency = 1;
        } else if (count >= 2000 && count <= 2999) {
          frequency = t("calculator.contractDoctor.frequency.threeTimesMonthly");
          monthlyFrequency = 3;
        } else if (count >= 3000 && count <= 3999) {
          frequency = t("calculator.contractDoctor.frequency.fiveTimesMonthly");
          monthlyFrequency = 5;
        } else if (count >= 4000 && count <= 4999) {
          frequency = t("calculator.contractDoctor.frequency.sevenTimesMonthly");
          monthlyFrequency = 7;
        } else if (count >= 5000 && count <= 5999) {
          frequency = t("calculator.contractDoctor.frequency.nineTimesMonthly");
          monthlyFrequency = 9;
        } else if (count >= 6000) {
          frequency = t("calculator.contractDoctor.frequency.twelveTimesMonthly");
          monthlyFrequency = 12;
        }
      } else if (level === 3) { // Third class (low risk)
        if (count >= 50 && count < 300) {
          frequency = t("calculator.contractDoctor.frequency.quarterly");
          monthlyFrequency = 0.33;
        } else if (count >= 300 && count <= 999) {
          frequency = t("calculator.contractDoctor.frequency.quarterly");
          monthlyFrequency = 0.33;
        } else if (count >= 1000 && count <= 1999) {
          frequency = t("calculator.contractDoctor.frequency.bimonthly");
          monthlyFrequency = 0.5;
        } else if (count >= 2000 && count <= 2999) {
          frequency = t("calculator.contractDoctor.frequency.monthly");
          monthlyFrequency = 1;
        } else if (count >= 3000 && count <= 3999) {
          frequency = t("calculator.contractDoctor.frequency.twoTimesMonthly");
          monthlyFrequency = 2;
        } else if (count >= 4000 && count <= 4999) {
          frequency = t("calculator.contractDoctor.frequency.threeTimesMonthly");
          monthlyFrequency = 3;
        } else if (count >= 5000 && count <= 5999) {
          frequency = t("calculator.contractDoctor.frequency.fourTimesMonthly");
          monthlyFrequency = 4;
        } else if (count >= 6000) {
          frequency = t("calculator.contractDoctor.frequency.sixTimesMonthly");
          monthlyFrequency = 6;
        }
      }
    }

    return {
      frequency,
      monthlyFrequency,
      doctorType,
      isSpecialHazard,
      needsSpecialist: isSpecialHazard || count >= 6000
    };
  }, [employeeCount, industry, hasSpecialHazards, specialHazardDoctorCount, t]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="calculator" className="business-section-alt">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="business-badge mb-6 animate-bounce-in">
            <Calculator className="w-5 h-5 text-amazon-orange" />
            <span className="text-amazon-navy font-semibold">{t("calculator.badge")}</span>
          </div>
          <h2 className="business-title mb-6 animate-slide-up">
            {t("calculator.title")}
          </h2>
          <p className="business-subtitle text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t("calculator.description")}
          </p>
          
          {/* Summary Stats */}
          <div className="flex justify-center gap-8 mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">5</div>
              <div className="business-metric-label">{t("calculator.stats.industryTypes")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-navy">4</div>
              <div className="business-metric-label">{t("calculator.stats.employeeScales")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">{t("calculator.stats.instantResults")}</div>
              <div className="business-metric-label">{t("calculator.stats.instantResults")}</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Input Card */}
          <div className="business-interactive-card business-card calculator-card bg-white animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="business-icon-wrapper bg-amazon-orange shadow-lg">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <div className="business-number bg-amazon-navy">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("calculator.inputTitle")}
              </h3>
              <p className="business-body text-gray-600">{t("calculator.inputDescription")}</p>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-3">
                <Label htmlFor="employees" className="text-base font-semibold text-gray-900">{t("calculator.employeeCount")}</Label>
                <Input
                  id="employees"
                  type="number"
                  placeholder={t("calculator.employeePlaceholder")}
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(e.target.value)}
                  className="text-lg h-12 border-2 border-gray-200 focus:border-amazon-orange rounded-xl"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-base font-semibold text-gray-900">{t("calculator.industryType")}</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-amazon-orange rounded-xl">
                    <SelectValue placeholder={t("calculator.selectIndustry")} />
                  </SelectTrigger>
                  <SelectContent>
                    {industryTypes.map(type => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-amazon-warm-gray rounded-xl border border-gray-100">
                <Checkbox 
                  id="hazards"
                  checked={hasSpecialHazards}
                  onCheckedChange={(checked) => setHasSpecialHazards(checked === true)}
                  className="w-5 h-5"
                />
                <Label htmlFor="hazards" className="text-base font-medium text-gray-900">
                  {t("calculator.hasSpecialHazards")}
                </Label>
              </div>

              {hasSpecialHazards && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-base font-semibold text-gray-900">{t("calculator.specialHazardDoctorCount")}</Label>
                    <Select value={specialHazardDoctorCount} onValueChange={setSpecialHazardDoctorCount}>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-amazon-orange rounded-xl">
                        <SelectValue placeholder={t("calculator.selectDoctorHazardRange")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50-99">{t("calculator.doctorHazardRanges.50-99")}</SelectItem>
                        <SelectItem value="100+">{t("calculator.doctorHazardRanges.100+")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base font-semibold text-gray-900">{t("calculator.specialHazardNurseCount")}</Label>
                    <Select value={specialHazardNurseCount} onValueChange={setSpecialHazardNurseCount}>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-amazon-orange rounded-xl">
                        <SelectValue placeholder={t("calculator.selectNurseHazardRange")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-99">{t("calculator.nurseHazardRanges.0-99")}</SelectItem>
                        <SelectItem value="100-299">{t("calculator.nurseHazardRanges.100-299")}</SelectItem>
                        <SelectItem value="300+">{t("calculator.nurseHazardRanges.300+")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Card */}
          <div className="business-interactive-card business-card calculator-card bg-amazon-warm-gray animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="business-icon-wrapper bg-amazon-navy">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="business-number bg-amazon-orange">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t("calculator.resultsTitle")}
              </h3>
              <p className="business-body text-gray-600">{t("calculator.resultsDescription")}</p>
            </div>
            <div className="p-8">
              {requirements.count > 0 ? (
                <div className="space-y-6">
                  {/* Employee Info */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100">
                    <div className="business-icon-wrapper bg-amazon-orange p-3">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-gray-900">{requirements.count} {t("calculator.employeeUnit")}</div>
                      {requirements.industry && (
                        <div className="text-gray-600">{requirements.industry}</div>
                      )}
                    </div>
                  </div>

                  {/* Requirements List */}
                  <div className="space-y-4">
                    <div className="business-data-point bg-white border-amazon-orange">
                      <div className="flex items-start gap-4">
                        <div className="business-icon-wrapper bg-amazon-orange shadow-md p-3">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-bold text-gray-900 mb-2">{t("calculator.requirements.fullTimeNurse")}</div>
                          <div className="business-body text-gray-700">
                            {requirements.nurseCount > 0 
                              ? t("calculator.nurseRequired").replace("{count}", requirements.nurseCount.toString())
                              : t("calculator.nurseNotRequired")
                            }
                          </div>
                          {requirements.nurseCount > 0 && (
                            <div className="mt-3 flex items-center gap-2">
                              <div className="business-progress-bar flex-1">
                                <div 
                                  className="business-progress-fill"
                                  style={{ width: `${Math.min(requirements.nurseCount * 25, 100)}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-600">{requirements.nurseCount} {t("calculator.personUnit")}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="business-data-point bg-white border-amazon-navy">
                      <div className="flex items-start gap-4">
                        <div className="business-icon-wrapper bg-amazon-navy shadow-md p-3">
                          <Stethoscope className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-bold text-gray-900 mb-2">{t("calculator.requirements.onSiteService")}</div>
                          <div className="business-body text-gray-700">
                            {requirements.needsOnSiteService 
                              ? requirements.onSiteFrequency
                              : t("calculator.serviceNotRequired")
                            }
                          </div>
                          {requirements.needsFullTimeDoctor && (
                            <div className="mt-3">
                              <div className="business-badge bg-amazon-orange text-white border-0">
                                {t("calculator.needsFullTimeDoctor")}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="business-data-point bg-white border-amazon-orange">
                      <div className="flex items-start gap-4">
                        <div className="business-icon-wrapper bg-amazon-orange shadow-md p-3">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg font-bold text-gray-900 mb-2">{t("calculator.requirements.safetyPersonnel")}</div>
                          <div className="business-body text-gray-700">
                            {requirements.safetyPersonnel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {contractDoctorFrequency && contractDoctorFrequency.frequency && (
                      <div className="business-data-point bg-white border-amazon-navy">
                        <div className="flex items-start gap-4">
                          <div className="business-icon-wrapper bg-amazon-navy shadow-md p-3">
                            <Stethoscope className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-lg font-bold text-gray-900 mb-2">{t("calculator.requirements.contractDoctor")}</div>
                            <div className="business-body text-gray-700 mb-2 font-medium">
                              {contractDoctorFrequency.frequency}
                            </div>
                            
                            {contractDoctorFrequency.doctorType && (
                              <div className="text-sm text-blue-600 font-medium mb-2">
                                👨‍⚕️ {contractDoctorFrequency.doctorType}
                              </div>
                            )}
                            
                            {contractDoctorFrequency.isSpecialHazard && (
                              <div className="text-xs text-orange-600 font-medium mb-1">
                                ⚠️ {t("calculator.contractDoctor.specialHazardNote")}
                              </div>
                            )}
                            
                            <div className="mt-3 flex items-center gap-2">
                              <div className="business-progress-bar flex-1">
                                <div 
                                  className="business-progress-fill"
                                  style={{ width: `${Math.min(contractDoctorFrequency.monthlyFrequency * 10, 100)}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-gray-600">
                                {contractDoctorFrequency.monthlyFrequency} {t("calculator.contractDoctor.timesPerMonth")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cost Estimate */}
                  {requirements.count >= 50 && (
                    <div className="business-highlight-box bg-amazon-warm-gray border-amazon-orange">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="business-icon-wrapper bg-amazon-orange shadow-lg">
                          <Calculator className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="business-metric-label">{t("calculator.costEstimate")}</div>
                          <div className="text-3xl font-bold text-amazon-orange">
                            {formatCurrency(requirements.estimatedCost.min)} - {formatCurrency(requirements.estimatedCost.max)}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 bg-white rounded-xl p-3 border border-gray-100">
                        {t("calculator.costDisclaimer")}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="business-icon-wrapper bg-gray-400 mx-auto mb-6 opacity-50">
                    <Calculator className="w-12 h-12 text-white" />
                  </div>
                  <p className="business-body text-gray-500">{t("calculator.enterEmployeeCount")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCalculator;
