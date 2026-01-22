import React from 'react';
import { TableType } from '@/types/complianceTypes';
import { TAB_CONFIGS } from '@/data/complianceTableData';
import { useTranslation } from '@/hooks/useTranslation';

interface TableSelectorTabsProps {
  activeTable: TableType;
  onTableChange: (table: TableType) => void;
  doctorCount?: string;
  nurseCount?: string;
}

const TableSelectorTabs: React.FC<TableSelectorTabsProps> = ({
  activeTable,
  onTableChange,
  doctorCount,
  nurseCount
}) => {
  const { t } = useTranslation();

  return (
    <div className="w-full mb-6">
      {/* 標籤頁標題 */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {t("calculator.complianceTables.title")}
        </h3>
        <p className="text-sm text-gray-600">
          {t("calculator.complianceTables.description")}
        </p>
      </div>

      {/* 標籤頁切換器 */}
      <div className="flex bg-gray-100 rounded-xl p-1 max-w-2xl mx-auto">
        {TAB_CONFIGS.map((tab) => {
          const isActive = activeTable === tab.id;
          const hasValue = tab.id === 'appendix2' ? doctorCount : nurseCount;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTableChange(tab.id)}
              className={`
                flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-lg
                transition-all duration-200 ease-in-out
                ${isActive 
                  ? tab.color === 'blue'
                    ? 'bg-blue-500 text-white shadow-lg transform scale-[1.02]'
                    : 'bg-green-500 text-white shadow-lg transform scale-[1.02]'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }
              `}
            >
              {/* 圖標 */}
              <span className="text-2xl">{tab.icon}</span>
              
              {/* 內容 */}
              <div className="text-left">
                <div className="font-semibold text-base">
                  {tab.title}
                </div>
                <div className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                  {tab.description}
                </div>
                
                {/* 顯示當前選擇的值 */}
                {hasValue && (
                  <div className={`text-xs mt-1 px-2 py-1 rounded-full inline-block
                    ${isActive 
                      ? 'bg-white bg-opacity-20 text-white' 
                      : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tab.id === 'appendix2' 
                      ? t("calculator.doctorHazardRanges." + doctorCount)
                      : t("calculator.nurseHazardRanges." + nurseCount)
                    }
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* 說明文字 */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 max-w-3xl mx-auto">
          {activeTable === 'appendix2' 
            ? t("calculator.complianceTables.appendix2Description")
            : t("calculator.complianceTables.appendix3Description")
          }
        </p>
      </div>

      {/* 法規參考 */}
      <div className="mt-3 text-center">
        <span className="inline-flex items-center gap-2 text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          {activeTable === 'appendix2' 
            ? t("calculator.complianceTables.appendix2Reference")
            : t("calculator.complianceTables.appendix3Reference")
          }
        </span>
      </div>
    </div>
  );
};

export default TableSelectorTabs;