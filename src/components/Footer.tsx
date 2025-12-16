import { Shield, Mail, FileText } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-navy-200 py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-teal-400" />
              <span className="font-bold text-primary-foreground text-lg">台灣職場健康</span>
            </div>
            <p className="text-sm text-navy-300">
              協助企業了解職業安全衛生法規要求，打造健康安全的工作環境。
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">相關法規</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060001" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  職業安全衛生法
                </a>
              </li>
              <li>
                <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060022" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  勞工健康保護規則
                </a>
              </li>
              <li>
                <a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=N0060009" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="hover:text-teal-400 transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  職業安全衛生管理辦法
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">聯絡資訊</h4>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>諮詢請洽專業服務機構</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-navy-700 text-center text-sm text-navy-400">
          <p>本網站僅供參考，實際法規要求請以政府公告為準</p>
          <p className="mt-2">© {new Date().getFullYear()} 台灣職場健康管理資訊平台</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
