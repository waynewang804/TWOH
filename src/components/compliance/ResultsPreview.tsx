import React from 'react';
import { TableType, ResultPreview } from '@/types/complianceTypes';
import { useTranslation } from '@/hooks/useTranslation';
import { ExternalLink, FileText, Users, Calendar } from 'lucide-react';

interface ResultsPreviewProps {
  results: ResultPreview[];
  onViewFullResults?: () => void;
  className?: string;
}

const ResultsPreview: React.FC<ResultsPreviewProps> = ({
  results,
  onViewFullResults,
  className = ''
}) => {
  const { t } = useTranslation();

  // 獲取結果卡片的圖標
  const getResultIcon = (tableType: TableType) => {
    return tableType === 'appendix2' ? (
      <Calendar className="w-5 h-5" />
    ) : (
      <Users className="w-5 h-5" />
    );
  };

  // 獲取結果卡片的顏色主題
  const getResultTheme = (tableType: TableType) => {
    return tableType === 'appendix2' ? {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      titleColor: 'text-blue-900',
      valueColor: 'text-blue-700',
      badgeColor: 'bg-blue-100 text-blue-800'
    } : {
      bg: 'bg-green-50',
      border: 'border-green-200',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      titleColor: 'text-green-900',
      valueColor: 'text-green-700',
      badgeColor: 'bg-green-100 text-green-800'
    };
  };

  // 格式化結果顯示
  const formatResultValue = (result: ResultPreview) => {
    if (result.tableType === 'appendix2') {
      return {
        primary: result.frequency || result.requirement,
        secondary: t('calculator.resultsPreview.serviceFrequency'),
        icon: '👨‍⚕️'
      };
    } else {
      return {
        primary: result.personnelCount !== undefined 
          ? result.personnelCount > 0 
            ? `${result.personnelCount}${t('calculator.resultsPreview.peopleUnit')}`
            : t('calculator.resultsPreview.notRequired')
          : result.requirement,
        secondary: t('calculator.resultsPreview.nursingPersonnel'),
        icon: '👩‍⚕️'
      };
    }
  };

  if (results.length === 0) {
    return (
      <div className={`bg-gray-50 rounded-xl border border-gray-200 p-6 text-center ${className}`}>
        <div className="text-gray-400 mb-3">
          <FileText className="w-12 h-12 mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">
          {t('calculator.resultsPreview.noResults')}
        </h3>
        <p className="text-sm text-gray-500">
          {t('calculator.resultsPreview.noResultsDescription')}
        </p>
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`}>
      {/* 標題區域 */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {t('calculator.resultsPreview.title')}
          </h3>
          <p className="text-sm text-gray-600">
            {t('calculator.resultsPreview.description')}
          </p>
        </div>
        
        {onViewFullResults && (
          <button
            onClick={onViewFullResults}
            className="flex items-center gap-2 px-4 py-2 bg-amazon-orange text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            {t('calculator.resultsPreview.viewFullResults')}
          </button>
        )}
      </div>

      {/* 結果卡片 */}
      <div className="grid gap-4 md:grid-cols-2">
        {results.map((result, index) => {
          const theme = getResultTheme(result.tableType);
          const formattedResult = formatResultValue(result);
          
          return (
            <div
              key={`${result.tableType}-${index}`}
              className={`
                ${theme.bg} ${theme.border} border rounded-xl p-6
                transition-all duration-300 hover:shadow-md
                ${result.isActive ? 'ring-2 ring-amazon-orange ring-opacity-50' : ''}
              `}
            >
              {/* 卡片標題 */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`${theme.iconBg} p-2 rounded-lg`}>
                  <span className="text-xl">{formattedResult.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold ${theme.titleColor}`}>
                    {result.tableType === 'appendix2' 
                      ? t('calculator.resultsPreview.appendix2Title')
                      : t('calculator.resultsPreview.appendix3Title')
                    }
                  </h4>
                  <p className="text-sm text-gray-600">
                    {formattedResult.secondary}
                  </p>
                </div>
                
                {result.isActive && (
                  <div className="bg-amazon-orange text-white text-xs px-2 py-1 rounded-full">
                    {t('calculator.resultsPreview.active')}
                  </div>
                )}
              </div>

              {/* 主要結果 */}
              <div className="mb-4">
                <div className={`text-2xl font-bold ${theme.valueColor} mb-1`}>
                  {formattedResult.primary}
                </div>
                <div className="text-sm text-gray-600">
                  {result.requirement}
                </div>
              </div>

              {/* 法規參考 */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">
                    {t('calculator.resultsPreview.legalReference')}
                  </span>
                </div>
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${theme.badgeColor}`}>
                  {result.legalReference}
                </div>
              </div>

              {/* 額外資訊 */}
              {result.tableType === 'appendix2' && result.frequency && (
                <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {t('calculator.resultsPreview.serviceSchedule')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {result.frequency}
                  </div>
                </div>
              )}

              {result.tableType === 'appendix3' && result.personnelCount !== undefined && result.personnelCount > 0 && (
                <div className="mt-3 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {t('calculator.resultsPreview.personnelDetails')}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {t('calculator.resultsPreview.fullTimeNurseRequired').replace('{count}', result.personnelCount.toString())}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 重要提醒 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-yellow-500 text-lg">⚠️</span>
          <div>
            <h4 className="font-medium text-yellow-800 mb-1">
              {t('calculator.resultsPreview.importantNote')}
            </h4>
            <p className="text-sm text-yellow-700">
              {t('calculator.resultsPreview.importantNoteDescription')}
            </p>
          </div>
        </div>
      </div>

      {/* 下一步建議 */}
      {onViewFullResults && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-blue-500 text-lg">💡</span>
            <div className="flex-1">
              <h4 className="font-medium text-blue-800 mb-1">
                {t('calculator.resultsPreview.nextSteps')}
              </h4>
              <p className="text-sm text-blue-700 mb-3">
                {t('calculator.resultsPreview.nextStepsDescription')}
              </p>
              <button
                onClick={onViewFullResults}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                {t('calculator.resultsPreview.viewDetailedAnalysis')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsPreview;