import React, { useMemo } from 'react';
import { TableType, TableRowData, HighlightConfig } from '@/types/complianceTypes';
import { APPENDIX2_DATA, APPENDIX3_DATA } from '@/data/complianceTableData';
import { useTranslation } from '@/hooks/useTranslation';
import { calculateMatchScore } from '@/utils/complianceUtils';

interface InteractiveTableProps {
  tableType: TableType;
  highlightRow?: HighlightConfig;
  onRowClick?: (rowData: TableRowData) => void;
  className?: string;
}

const InteractiveTable: React.FC<InteractiveTableProps> = ({
  tableType,
  highlightRow,
  onRowClick,
  className = ''
}) => {
  const { t } = useTranslation();

  // 獲取對應的表格數據
  const tableData = useMemo(() => {
    return tableType === 'appendix2' ? APPENDIX2_DATA : APPENDIX3_DATA;
  }, [tableType]);

  // 計算高亮行
  const highlightedRows = useMemo(() => {
    if (!highlightRow) return new Set<string>();
    
    const matchingRowIds = new Set<string>();
    
    tableData.forEach(row => {
      const score = calculateMatchScore(
        row,
        highlightRow.employeeCount,
        highlightRow.specialHazardCount,
        highlightRow.businessClass
      );
      
      if (score > 0) {
        matchingRowIds.add(row.id);
      }
    });
    
    return matchingRowIds;
  }, [tableData, highlightRow]);

  // 表格標題配置
  const getTableHeaders = () => {
    if (tableType === 'appendix2') {
      return [
        { key: 'businessClass', label: t('calculator.interactiveTable.businessClass'), width: 'w-24' },
        { key: 'employeeRange', label: t('calculator.interactiveTable.employeeRange'), width: 'w-32' },
        { key: 'requirement', label: t('calculator.interactiveTable.serviceFrequency'), width: 'flex-1' },
        { key: 'notes', label: t('calculator.interactiveTable.notes'), width: 'w-16' }
      ];
    } else {
      return [
        { key: 'employeeRange', label: t('calculator.interactiveTable.employeeRange'), width: 'w-32' },
        { key: 'specialHazardRange', label: t('calculator.interactiveTable.specialHazardRange'), width: 'w-32' },
        { key: 'requirement', label: t('calculator.interactiveTable.personnelRequirement'), width: 'flex-1' },
        { key: 'notes', label: t('calculator.interactiveTable.notes'), width: 'w-16' }
      ];
    }
  };

  const headers = getTableHeaders();

  // 渲染表格行內容
  const renderCellContent = (row: TableRowData, headerKey: string) => {
    switch (headerKey) {
      case 'businessClass':
        if (row.isSpecialHazard) {
          return (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
              各類
            </span>
          );
        }
        return row.businessClass ? (
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            row.businessClass === 1 ? 'bg-red-100 text-red-800' :
            row.businessClass === 2 ? 'bg-yellow-100 text-yellow-800' :
            'bg-green-100 text-green-800'
          }`}>
            第{row.businessClass}類
          </span>
        ) : '-';
        
      case 'employeeRange':
        return (
          <span className="font-medium text-gray-900">
            {row.employeeRange}
          </span>
        );
        
      case 'specialHazardRange':
        return row.specialHazardRange ? (
          <span className="text-sm text-gray-700">
            {row.specialHazardRange}
          </span>
        ) : (
          <span className="text-gray-400">-</span>
        );
        
      case 'requirement':
        return (
          <div className="space-y-1">
            <div className="font-medium text-gray-900">
              {row.requirement}
            </div>
            {row.frequency && (
              <div className="text-sm text-blue-600 font-medium">
                {row.frequency}
              </div>
            )}
            {row.personnelCount !== undefined && (
              <div className="text-sm text-green-600 font-medium">
                {row.personnelCount > 0 ? `${row.personnelCount}${t("calculator.personUnit")}` : t("calculator.nurseNotRequired")}
              </div>
            )}
          </div>
        );
        
      case 'notes':
        return row.notes ? (
          <button
            className="text-blue-500 hover:text-blue-700 text-sm"
            title={row.notes}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </button>
        ) : null;
        
      default:
        return '-';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      {/* 表格標題 */}
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {tableType === 'appendix2' 
                ? t('calculator.interactiveTable.appendix2Title')
                : t('calculator.interactiveTable.appendix3Title')
              }
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {tableType === 'appendix2' 
                ? t('calculator.interactiveTable.appendix2Description')
                : t('calculator.interactiveTable.appendix3Description')
              }
            </p>
          </div>
          
          {/* 表格圖標 */}
          <div className={`p-3 rounded-lg ${
            tableType === 'appendix2' ? 'bg-blue-100' : 'bg-green-100'
          }`}>
            <span className="text-2xl">
              {tableType === 'appendix2' ? '👨‍⚕️' : '👩‍⚕️'}
            </span>
          </div>
        </div>
      </div>

      {/* 表格內容 */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* 表格標頭 */}
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header) => (
                <th
                  key={header.key}
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${header.width}`}
                >
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* 表格內容 */}
          <tbody className="divide-y divide-gray-200">
            {tableData.map((row, index) => {
              const isHighlighted = highlightedRows.has(row.id);
              const isClickable = !!onRowClick;
              
              return (
                <tr
                  key={row.id}
                  onClick={() => onRowClick?.(row)}
                  className={`
                    transition-all duration-200
                    ${isHighlighted 
                      ? tableType === 'appendix2'
                        ? 'bg-blue-50 border-l-4 border-l-blue-500'
                        : 'bg-green-50 border-l-4 border-l-green-500'
                      : 'hover:bg-gray-50'
                    }
                    ${isClickable ? 'cursor-pointer' : ''}
                    ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}
                  `}
                >
                  {headers.map((header) => (
                    <td
                      key={header.key}
                      className={`px-4 py-4 text-sm ${header.width}`}
                    >
                      {renderCellContent(row, header.key)}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 表格註腳 */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div>
            {t('calculator.interactiveTable.totalRows')}: {tableData.length}
            {highlightedRows.size > 0 && (
              <span className="ml-4 text-blue-600 font-medium">
                {t('calculator.interactiveTable.matchingRows')}: {highlightedRows.size}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            {/* 圖例 */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${
                tableType === 'appendix2' ? 'bg-blue-500' : 'bg-green-500'
              }`}></div>
              <span className="text-xs">
                {t('calculator.interactiveTable.highlightedRow')}
              </span>
            </div>
            
            {onRowClick && (
              <span className="text-xs text-gray-500">
                {t('calculator.interactiveTable.clickToSelect')}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTable;