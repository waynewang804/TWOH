import { ExternalLink, Award, Building, Hospital, GraduationCap, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const VendorSection = () => {
  const { t } = useTranslation();

  const vendorTiers = [
    {
      tier: t("vendors.tiers.medical"),
      icon: Hospital,
      description: t("vendors.tierDescs.medical"),
      features: [
        t("vendors.features.specialistDoctor"),
        t("vendors.features.completeHealthCheck"),
        t("vendors.features.medicalFollowup"),
        t("vendors.features.qualityAssurance"),
      ],
      suitable: t("vendors.suitable.large"),
      badge: t("vendors.badges.highest"),
      badgeColor: "bg-accent text-accent-foreground",
    },
    {
      tier: t("vendors.tiers.professional"),
      icon: Building,
      description: t("vendors.tierDescs.professional"),
      features: [
        t("vendors.features.qualifiedStaff"),
        t("vendors.features.standardProcess"),
        t("vendors.features.regularService"),
        t("vendors.features.healthConsulting"),
      ],
      suitable: t("vendors.suitable.medium"),
      badge: t("vendors.badges.recommended"),
      badgeColor: "bg-secondary text-secondary-foreground",
    },
    {
      tier: t("vendors.tiers.consultant"),
      icon: GraduationCap,
      description: t("vendors.tierDescs.consultant"),
      features: [
        t("vendors.features.customSolution"),
        t("vendors.features.legalConsulting"),
        t("vendors.features.training"),
        t("vendors.features.staffMatching"),
      ],
      suitable: t("vendors.suitable.planning"),
      badge: t("vendors.badges.flexible"),
      badgeColor: "bg-muted text-muted-foreground",
    },
  ];

  const resources = [
    {
      name: t("vendors.resources.osha"),
      url: "https://www.osha.gov.tw",
      description: t("vendors.resources.oshaDesc"),
    },
    {
      name: t("vendors.resources.healthService"),
      url: "https://hrpts.osha.gov.tw/Home/CertifiedHospInfoSearch",
      description: t("vendors.resources.healthServiceDesc"),
    },
    {
      name: t("vendors.resources.laborInsurance"),
      url: "https://www.bli.gov.tw/0105830.html",
      description: t("vendors.resources.laborInsuranceDesc"),
    },
  ];
  return (
    <section id="vendors" className="business-section">
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="business-badge mb-6 animate-bounce-in">
            <Building className="w-5 h-5 text-amazon-orange" />
            <span className="text-amazon-blue font-semibold">{t("vendors.badge")}</span>
          </div>
          <h2 className="business-title mb-6 animate-slide-up">
            {t("vendors.title")}
          </h2>
          <p className="business-subtitle text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t("vendors.description")}
          </p>
          
        {/* Summary Stats */}
          <div className="flex justify-center gap-8 mt-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">3</div>
              <div className="business-metric-label">{t("vendors.stats.serviceLevels")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-navy">5</div>
              <div className="business-metric-label">{t("vendors.stats.serviceItems")}</div>
            </div>
            <div className="text-center">
              <div className="business-metric text-amazon-orange">{t("vendors.badges.recommended")}</div>
              <div className="business-metric-label">{t("vendors.stats.certifiedInstitutions")}</div>
            </div>
          </div>
        </div>

        {/* Vendor Tiers */}
        <div className="grid md:grid-cols-3 gap-10 mb-24">
          {vendorTiers.map((vendor, index) => (
            <div key={index} className="business-interactive-card business-card bg-white animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="p-8 border-b border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className={`business-icon-wrapper ${
                    index === 0 ? 'bg-amazon-orange' :
                    index === 1 ? 'bg-amazon-navy' :
                    'bg-amazon-orange'
                  }`}>
                    <vendor.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="business-number bg-amazon-navy">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{vendor.tier}</h3>
                <p className="business-body text-gray-700 mb-4">{vendor.description}</p>
                <div className={`business-badge ${vendor.badgeColor} border-0`}>
                  {vendor.badge}
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-3 mb-6">
                  {vendor.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-gray-100">
                      <div className="w-6 h-6 rounded-full bg-amazon-orange flex items-center justify-center mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-gray-200">
                  <div className="business-metric-label mb-2">{t("vendors.suitableFor")}</div>
                  <div className="text-lg font-bold text-gray-900">{vendor.suitable}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cost Overview */}
        <div className="business-card mb-20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center gap-6 mb-4">
              <div className="business-icon-wrapper bg-amazon-orange shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {t("vendors.costTitle")}
                </h3>
                <p className="business-body text-gray-600">{t("vendors.costDescription")}</p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-bold text-gray-900 text-lg">{t("vendors.costTable.service")}</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900 text-lg">{t("vendors.costTable.cost")}</th>
                    <th className="text-left py-4 px-6 font-bold text-gray-900 text-lg">{t("vendors.costTable.note")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-business-hover-gray transition-colors duration-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">{t("vendors.costTable.doctorService")}</td>
                    <td className="py-4 px-6 text-amazon-orange font-bold text-lg">NT$ 8,000 - 15,000 / {t("vendors.costTable.perTime")}</td>
                    <td className="py-4 px-6 text-gray-600">{t("vendors.costTable.perVisit")}</td>
                  </tr>
                  <tr className="hover:bg-business-hover-gray transition-colors duration-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">{t("vendors.costTable.nurseService")}</td>
                    <td className="py-4 px-6 text-amazon-navy font-bold text-lg">NT$ 3,000 - 6,000 / {t("vendors.costTable.perTime")}</td>
                    <td className="py-4 px-6 text-gray-600">{t("vendors.costTable.per4Hours")}</td>
                  </tr>
                  <tr className="hover:bg-business-hover-gray transition-colors duration-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">{t("vendors.costTable.fullTimeNurse")}</td>
                    <td className="py-4 px-6 text-amazon-orange font-bold text-lg">NT$ 45,000 - 60,000</td>
                    <td className="py-4 px-6 text-gray-600">{t("vendors.costTable.fullTimeSalary")}</td>
                  </tr>
                  <tr className="hover:bg-business-hover-gray transition-colors duration-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">{t("vendors.costTable.generalHealthCheck")}</td>
                    <td className="py-4 px-6 text-amazon-navy font-bold text-lg">NT$ 1,500 - 3,000 / {t("vendors.costTable.perPerson")}</td>
                    <td className="py-4 px-6 text-gray-600">{t("vendors.costTable.dependsOnItems")}</td>
                  </tr>
                  <tr className="bg-amazon-warm-gray hover:bg-business-hover-gray transition-colors duration-200">
                    <td className="py-4 px-6 font-semibold text-gray-900">{t("vendors.costTable.specialHealthCheck")}</td>
                    <td className="py-4 px-6 text-amazon-orange font-bold text-xl">{t("vendors.costTable.freeSubsidy")}</td>
                    <td className="py-4 px-6 text-gray-600">{t("vendors.costTable.qualificationRequired")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 italic">
                {t("vendors.costTable.sourceLabel")}{t("vendors.costTable.sources")}
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="business-highlight-box max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="business-icon-wrapper bg-amazon-navy">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{t("vendors.resourcesTitle")}</h3>
                <p className="business-body text-gray-600">{t("vendors.resourcesDescription")}</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  onClick={() => window.open(resource.url, '_blank')}
                  className="business-interactive-card p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-amazon-orange cursor-pointer transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <ExternalLink className="w-5 h-5 text-amazon-orange" />
                    <span className="font-bold text-gray-900">{resource.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorSection;
