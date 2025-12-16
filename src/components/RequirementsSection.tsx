import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Stethoscope, HeartPulse, Building2 } from "lucide-react";

const requirementsData = [
  {
    employees: "50-299人",
    icon: Building2,
    color: "teal",
    requirements: [
      { title: "臨場健康服務", desc: "醫師+護理人員定期臨場", required: true },
      { title: "健康管理", desc: "員工健康檢查與追蹤", required: true },
      { title: "專職護理師", desc: "不需專職設置", required: false },
    ],
    frequency: "依事業規模與風險等級",
  },
  {
    employees: "300-499人",
    icon: Users,
    color: "secondary",
    requirements: [
      { title: "專職護理人員", desc: "至少1名專職", required: true },
      { title: "臨場健康服務", desc: "醫師定期臨場", required: true },
      { title: "健康管理計畫", desc: "完整書面計畫", required: true },
    ],
    frequency: "每月至少1次醫師臨場",
  },
  {
    employees: "500-999人",
    icon: Stethoscope,
    color: "accent",
    requirements: [
      { title: "專職護理人員", desc: "至少2名專職", required: true },
      { title: "臨場健康服務", desc: "增加醫師臨場頻率", required: true },
      { title: "健康風險評估", desc: "系統化風險管理", required: true },
    ],
    frequency: "每月至少2次醫師臨場",
  },
  {
    employees: "1000人以上",
    icon: HeartPulse,
    color: "primary",
    requirements: [
      { title: "專任醫師", desc: "3000人以上需專任", required: true },
      { title: "專職護理人員", desc: "依比例設置", required: true },
      { title: "完整健康服務", desc: "全方位健康管理", required: true },
    ],
    frequency: "每週多次醫師服務",
  },
];

const RequirementsSection = () => {
  return (
    <section id="requirements" className="py-20 bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            勞工健康保護規則
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            依員工人數的法規要求
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            根據《勞工健康保護規則》第3條至第6條，不同規模事業單位需配置相應的職業健康人員
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {requirementsData.map((item, index) => (
            <Card 
              key={index} 
              className="card-elevated hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <CardTitle className="text-xl">{item.employees}</CardTitle>
                <p className="text-sm text-muted-foreground">{item.frequency}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-start gap-2">
                      <span className={`mt-1 w-2 h-2 rounded-full ${req.required ? 'bg-success' : 'bg-muted-foreground'}`} />
                      <div>
                        <div className="font-medium text-sm">{req.title}</div>
                        <div className="text-xs text-muted-foreground">{req.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Employer Responsibilities */}
        <Card className="mt-12 card-elevated border-accent/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              雇主法定責任
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">健康檢查</h4>
                <p className="text-sm text-muted-foreground">
                  新進員工體格檢查、在職員工定期健康檢查、特殊危害作業健康檢查
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">健康管理</h4>
                <p className="text-sm text-muted-foreground">
                  健檢結果分級管理、異常追蹤、工作適性評估、復工評估
                </p>
              </div>
              <div className="p-4 rounded-lg bg-muted/50">
                <h4 className="font-semibold mb-2">健康促進</h4>
                <p className="text-sm text-muted-foreground">
                  職場健康促進活動、人因工程改善、心理健康支持
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

import { Shield } from "lucide-react";
export default RequirementsSection;
