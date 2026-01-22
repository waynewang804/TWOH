import { Shield, FileText } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-amazon-navy text-white py-16 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amazon-orange rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-amazon-orange rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="business-icon-wrapper bg-amazon-orange shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">{t("footer.title")}</span>
            </div>
            <p className="business-body text-gray-300 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6 text-amazon-orange" />
              {t("footer.regulations")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060001" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-amazon-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{t("footer.laws.oshAct")}</span>
                </a>
              </li>
              <li>
                <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060022" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-amazon-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{t("footer.laws.healthRules")}</span>
                </a>
              </li>
              <li>
                <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060009" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-amazon-orange flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{t("footer.laws.managementRules")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="business-highlight-box bg-white/5 border-white/20 max-w-4xl mx-auto">
            <p className="text-gray-300 mb-4">{t("footer.disclaimer")}</p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>{new Date().getFullYear()} {t("footer.copyright")}</span>
              <span className="text-amazon-orange">|</span>
              <span>© Wayne Wang</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
