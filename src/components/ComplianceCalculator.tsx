import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Users, Stethoscope, Shield, FileText, Building2 } from "lucide-react";

const industryTypes = [
  { value: "general", label: "一般行業", riskMultiplier: 1 },
  { value: "manufacturing", label: "製造業", riskMultiplier: 1.5 },
  { value: "construction", label: "營造業", riskMultiplier: 2 },
  { value: "chemical", label: "化學工業", riskMultiplier: 2 },
  { value: "mining", label: "礦業", riskMultiplier: 2.5 },
];

const ComplianceCalculator = () => {
  const [employeeCount, setEmployeeCount] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [hasSpecialHazards, setHasSpecialHazards] = useState(false);

  const requirements = useMemo(() => {
    const count = parseInt(employeeCount) || 0;
    const industryData = industryTypes.find(i => i.value === industry);
    const riskMultiplier = industryData?.riskMultiplier || 1;

    // 基本計算邏輯
    let nurseCount = 0;
    let needsOnSiteService = false;
    let onSiteFrequency = "";
    let needsFullTimeDoctor = false;
    let safetyPersonnel = "";
    let estimatedCost = { min: 0, max: 0 };

    if (count >= 50) {
      needsOnSiteService = true;
    }

    if (count >= 50 && count < 300) {
      onSiteFrequency = "每月至少1次（依風險等級調整）";
      estimatedCost = { min: 15000, max: 30000 };
    } else if (count >= 300 && count < 500) {
      nurseCount = 1;
      onSiteFrequency = "每月至少1次";
      estimatedCost = { min: 50000, max: 80000 };
    } else if (count >= 500 && count < 1000) {
      nurseCount = 2;
      onSiteFrequency = "每月至少2次";
      estimatedCost = { min: 80000, max: 120000 };
    } else if (count >= 1000 && count < 3000) {
      nurseCount = Math.ceil(count / 500);
      onSiteFrequency = "每週多次";
      estimatedCost = { min: 120000, max: 200000 };
    } else if (count >= 3000) {
      nurseCount = Math.ceil(count / 500);
      needsFullTimeDoctor = true;
      onSiteFrequency = "專任醫師常駐";
      estimatedCost = { min: 300000, max: 500000 };
    }

    // 職業安全衛生人員設置
    if (count < 30) {
      safetyPersonnel = "可由雇主或代理人擔任";
    } else if (count < 100) {
      safetyPersonnel = "應設甲種或乙種業務主管1人";
    } else if (count < 300) {
      safetyPersonnel = "應設甲種業務主管1人";
    } else if (count < 500) {
      safetyPersonnel = "應設甲種業務主管1人 + 安全衛生管理員1人";
    } else {
      safetyPersonnel = "應設職業安全衛生管理單位";
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
      safetyPersonnel,
      estimatedCost,
      industry: industryData?.label || "",
    };
  }, [employeeCount, industry, hasSpecialHazards]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('zh-TW', {
      style: 'currency',
      currency: 'TWD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="calculator" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            合規試算
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            企業合規需求試算器
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            輸入您的企業資訊，快速了解職業健康法規要求與預估成本
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Input Card */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                輸入企業資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="employees">員工人數</Label>
                <Input
                  id="employees"
                  type="number"
                  placeholder="請輸入員工人數"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label>行業類別</Label>
                <Select value={industry} onValueChange={setIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="選擇行業類別" />
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

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="hazards"
                  checked={hasSpecialHazards}
                  onCheckedChange={(checked) => setHasSpecialHazards(checked === true)}
                />
                <Label htmlFor="hazards" className="text-sm">
                  有特別危害健康作業（噪音、化學物質、輻射等）
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="card-elevated border-accent/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                合規需求結果
              </CardTitle>
            </CardHeader>
            <CardContent>
              {requirements.count > 0 ? (
                <div className="space-y-5">
                  {/* Employee Info */}
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Building2 className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <span className="font-semibold">{requirements.count} 名員工</span>
                      {requirements.industry && (
                        <span className="text-muted-foreground"> · {requirements.industry}</span>
                      )}
                    </div>
                  </div>

                  {/* Requirements List */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg border">
                      <Users className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">專職護理人員</div>
                        <div className="text-sm text-muted-foreground">
                          {requirements.nurseCount > 0 
                            ? `需配置 ${requirements.nurseCount} 名專職護理人員`
                            : "不需專職設置"
                          }
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg border">
                      <Stethoscope className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">臨場健康服務</div>
                        <div className="text-sm text-muted-foreground">
                          {requirements.needsOnSiteService 
                            ? requirements.onSiteFrequency
                            : "50人以下可視需要辦理"
                          }
                        </div>
                        {requirements.needsFullTimeDoctor && (
                          <Badge className="mt-1 bg-warning text-warning-foreground">需專任醫師</Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg border">
                      <Shield className="w-5 h-5 text-accent mt-0.5" />
                      <div>
                        <div className="font-medium">職業安全衛生人員</div>
                        <div className="text-sm text-muted-foreground">
                          {requirements.safetyPersonnel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Estimate */}
                  {requirements.count >= 50 && (
                    <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                      <div className="text-sm text-muted-foreground mb-1">預估每月成本範圍</div>
                      <div className="text-2xl font-bold text-accent">
                        {formatCurrency(requirements.estimatedCost.min)} - {formatCurrency(requirements.estimatedCost.max)}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        *實際費用依服務內容與廠商而異
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Calculator className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>請輸入員工人數以查看合規需求</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCalculator;
