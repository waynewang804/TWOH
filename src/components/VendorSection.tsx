import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Building, Hospital, GraduationCap, CheckCircle2 } from "lucide-react";

const vendorTiers = [
  {
    tier: "醫療機構",
    icon: Hospital,
    description: "具備醫療機構執照的醫院或診所",
    features: [
      "專任職業醫學科醫師",
      "完整健康檢查服務",
      "醫療後續處置能力",
      "較高的服務品質保證",
    ],
    suitable: "大型企業、高風險行業",
    badge: "最高等級",
    badgeColor: "bg-accent text-accent-foreground",
  },
  {
    tier: "專業機構",
    icon: Building,
    description: "經勞動部認可的勞工健康服務機構",
    features: [
      "合格的職業醫師與護理師",
      "標準化服務流程",
      "定期臨場服務",
      "健康管理諮詢",
    ],
    suitable: "中型企業、一般行業",
    badge: "推薦選擇",
    badgeColor: "bg-secondary text-secondary-foreground",
  },
  {
    tier: "顧問公司",
    icon: GraduationCap,
    description: "提供整合性職業健康管理服務",
    features: [
      "客製化方案設計",
      "法規諮詢服務",
      "人員教育訓練",
      "協助媒合醫護人員",
    ],
    suitable: "需要整體規劃的企業",
    badge: "彈性選擇",
    badgeColor: "bg-muted text-muted-foreground",
  },
];

const resources = [
  {
    name: "勞動部職業安全衛生署",
    url: "https://www.osha.gov.tw",
    description: "查詢認可機構名單與法規",
  },
  {
    name: "勞工健康服務網路平台",
    url: "https://ohsip.osha.gov.tw",
    description: "尋找合格服務機構",
  },
  {
    name: "勞保局",
    url: "https://www.bli.gov.tw",
    description: "申請特殊健檢補助",
  },
];

const VendorSection = () => {
  return (
    <section id="vendors" className="py-20 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-secondary text-secondary">
            成本與廠商
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            合格服務商哪裡找？
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            選擇經勞動部認可的合格機構，確保服務品質與法規合規
          </p>
        </div>

        {/* Vendor Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {vendorTiers.map((vendor, index) => (
            <Card key={index} className="card-elevated hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <vendor.icon className="w-6 h-6 text-accent" />
                  </div>
                  <Badge className={vendor.badgeColor}>{vendor.badge}</Badge>
                </div>
                <CardTitle className="text-xl">{vendor.tier}</CardTitle>
                <p className="text-sm text-muted-foreground">{vendor.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {vendor.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="text-xs text-muted-foreground">適合對象</div>
                  <div className="text-sm font-medium">{vendor.suitable}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cost Overview */}
        <Card className="card-elevated mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              服務費用參考
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-semibold">服務項目</th>
                    <th className="text-left py-3 px-4 font-semibold">費用範圍（月）</th>
                    <th className="text-left py-3 px-4 font-semibold">備註</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">臨場健康服務（醫師）</td>
                    <td className="py-3 px-4">NT$ 8,000 - 15,000 / 次</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">每次約2-4小時</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">臨場健康服務（護理師）</td>
                    <td className="py-3 px-4">NT$ 3,000 - 6,000 / 次</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">每次約4小時</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">專職護理人員</td>
                    <td className="py-3 px-4">NT$ 45,000 - 60,000</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">全職薪資+福利</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">一般健康檢查</td>
                    <td className="py-3 px-4">NT$ 1,500 - 3,000 / 人</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">依檢查項目而定</td>
                  </tr>
                  <tr className="bg-success/5">
                    <td className="py-3 px-4">特殊健檢（噪音）</td>
                    <td className="py-3 px-4 text-success font-semibold">免費（勞保補助）</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">需符合資格申請</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">官方資源連結</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {resources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                className="gap-2"
                onClick={() => window.open(resource.url, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                {resource.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
