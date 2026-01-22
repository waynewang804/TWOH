import React, { useState, useEffect } from 'react';
import { TableType, ValidationResult, ValidationLevel } from '@/types/complianceTypes';
import { useTranslation } from '@/hooks/useTranslation';

interface InputFormProps {
  tableType: TableType;
  value: string;
  onChange: (value: string) => void;
  totalEmployees: number;
  businessClass?: number;
  onValidationChange: (isValid: boolean, message?: string) => void;
  className?: string;
}

const InputForm: React.FC<InputFormProps> = ({
  tableType,
  value,
  onChange,
  totalEmployees,
  businessClass,
  onValidationChange,
  className = ''
}) => {
  const { t } = useTranslation();
  const [validation, setValidation] = useState<ValidationResult>({
    isValid: true,
    warningLevel: 'info'
  });

  // 驗證輸入值
  const validateInput = (inputValue: string): ValidationResult => {
    const numValue = parseInt(inputValue);
    
    if (!inputValue.trim()) {
      return {
        isValid: false,
        message: t('calculator.inputForm.emptyError'),
        warningLevel: 'error'
      };
    }

    if (isNaN(numValue) || numValue < 0) {
      return {
        isValid: false,
        message: t('calculator.inputForm.invalidNumberError'),
        warningLevel: 'error'
      };
    }

    // 檢查是否超過總員工數
    if (numValue > totalEmployees) {
      return {
        isValid: false,
        message: t('calculator.inputForm.exceedsEmployeeCountError').replace('{total}', totalEmployees.toString()),
        warningLevel: 'error'
      };
    }

    // 提供建議
    if (tableType === 'appendix2') {
      if (numValue >= 100) {
        return {
          isValid: true,
          message: t('calculator.inputForm.appendix2HighRiskSuggestion'),
          suggestion: t('calculator.inputForm.monthlyServiceRequired'),
          warningLevel: 'warning'
        };
      } else if (numValue >= 50) {
        return {
          isValid: true,
          message: t('calculator.inputForm.appendix2MediumRiskSuggestion'),
          suggestion: t('calculator.inputForm.quarterlyServiceRequired'),
          warningLevel: 'info'
        };
      }
    } else if (tableType === 'appendix3') {
      if (numValue >= 300) {
        return {
          isValid: true,
          message: t('calculator.inputForm.appendix3HighRiskSuggestion'),
          suggestion: t('calculator.inputForm.additionalNurseRequired'),
          warningLevel: 'warning'
        };
      } else if (numValue >= 100) {
        return {
          isValid: true,
          message: t('calculator.inputForm.appendix3MediumRiskSuggestion'),
          suggestion: t('calculator.inputForm.nurseRequired'),
          warningLevel: 'info'
        };
      }
    }

    return {
      isValid: true,
      message: t('calculator.inputForm.validInput'),
      warningLevel: 'info'
    };
  };

  // 當輸入值變化時進行驗證
  useEffect(() => {
    const result = validateInput(value);
    setValidation(result);
    onValidationChange(result.isValid, result.message);
  }, [value, totalEmployees, tableType, onValidationChange]);

  // 獲取輸入欄位的標籤和說明
  const getInputLabel = () => {
    if (tableType === 'appendix2') {
      return {
        label: t('calculator.inputForm.doctorFrequencyLabel'),
        description: t('calculator.inputForm.doctorFrequencyDescription'),
        placeholder: t('calculator.inputForm.doctorFrequencyPlaceholder'),
        legalReference: t('calculator.inputForm.appendix2Reference')
      };
    } else {
      return {
        label: t('calculator.inputForm.nurseAllocationLabel'),
        description: t('calculator.inputForm.nurseAllocationDescription'),
        placeholder: t('calculator.inputForm.nurseAllocationPlaceholder'),
        legalReference: t('calculator.inputForm.appendix3Reference')
      };
    }
  };

  const inputConfig = getInputLabel();

  // 獲取驗證狀態的樣式
  const getValidationStyles = () => {
    if (!validation.isValid) {
      return {
        border: 'border-red-300 focus:border-red-500 focus:ring-red-500',
        icon: '❌',
        textColor: 'text-red-600'
      };
    } else if (validation.warningLevel === 'warning') {
      return {
        border: 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500',
        icon: '⚠️',
        textColor: 'text-yellow-600'
      };
    } else {
      return {
        border: 'border-green-300 focus:border-green-500 focus:ring-green-500',
        icon: '✅',
        textColor: 'text-green-600'
      };
    }
  };

  const validationStyles = getValidationStyles();

  // 智能建議的預設值
  const getSmartSuggestions = () => {
    const suggestions = [];
    
    if (tableType === 'appendix2') {
      suggestions.push(
        { value: '50', label: t('calculator.inputForm.suggestion50People') },
        { value: '100', label: t('calculator.inputForm.suggestion100People') },
        { value: '300', label: t('calculator.inputForm.suggestion300People') }
      );
    } else {
      suggestions.push(
        { value: '100', label: t('calculator.inputForm.suggestion100People') },
        { value: '300', label: t('calculator.inputForm.suggestion300People') },
        { value: '500', label: t('calculator.inputForm.suggestion500People') }
      );
    }
    
    return suggestions.filter(s => parseInt(s.value) <= totalEmployees);
  };

  const smartSuggestions = getSmartSuggestions();

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}>
      {/* 標題區域 */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className={`p-2 rounded-lg ${
            tableType === 'appendix2' ? 'bg-blue-100' : 'bg-green-100'
          }`}>
            <span className="text-xl">
              {tableType === 'appendix2' ? '👨‍⚕️' : '👩‍⚕️'}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {inputConfig.label}
            </h3>
            <p className="text-sm text-gray-600">
              {inputConfig.description}
            </p>
          </div>
        </div>
        
        {/* 法規參考 */}
        <div className="bg-gray-50 rounded-lg p-3 mt-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">📋</span>
            <span className="text-sm text-gray-700">
              {t('calculator.inputForm.legalBasis')}: {inputConfig.legalReference}
            </span>
          </div>
        </div>
      </div>

      {/* 輸入欄位 */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('calculator.inputForm.specialHazardCount')}
          <span className="text-red-500 ml-1">*</span>
        </label>
        
        <div className="relative">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={inputConfig.placeholder}
            min="0"
            max={totalEmployees}
            className={`
              w-full px-4 py-3 rounded-lg text-sm
              ${validationStyles.border}
              focus:outline-none focus:ring-2 focus:ring-opacity-50
              transition-colors duration-200
            `}
          />
          
          {/* 驗證圖標 */}
          {value && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <span className="text-lg">{validationStyles.icon}</span>
            </div>
          )}
        </div>

        {/* 驗證訊息 */}
        {validation.message && (
          <div className={`mt-2 text-sm ${validationStyles.textColor}`}>
            <div className="flex items-start gap-2">
              <span className="text-base">{validationStyles.icon}</span>
              <div>
                <p>{validation.message}</p>
                {validation.suggestion && (
                  <p className="mt-1 font-medium">{validation.suggestion}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 智能建議 */}
      {smartSuggestions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            {t('calculator.inputForm.smartSuggestions')}
          </h4>
          <div className="flex flex-wrap gap-2">
            {smartSuggestions.map((suggestion) => (
              <button
                key={suggestion.value}
                onClick={() => onChange(suggestion.value)}
                className={`
                  px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                  ${value === suggestion.value
                    ? tableType === 'appendix2'
                      ? 'bg-blue-100 text-blue-700 border border-blue-300'
                      : 'bg-green-100 text-green-700 border border-green-300'
                    : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                  }
                `}
              >
                {suggestion.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 進度指示器 */}
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>{t('calculator.inputForm.inputProgress')}</span>
          <span>{value ? '100%' : '0%'}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-300 ${
              tableType === 'appendix2' ? 'bg-blue-500' : 'bg-green-500'
            }`}
            style={{ width: value ? '100%' : '0%' }}
          />
        </div>
      </div>

      {/* 輸入提示 */}
      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <span className="text-blue-500 text-lg">💡</span>
          <div className="text-sm text-blue-700">
            <p className="font-medium mb-1">{t('calculator.inputForm.helpTitle')}</p>
            <p>{t('calculator.inputForm.helpDescription')}</p>
            <p className="mt-2 text-xs text-blue-600">
              {t('calculator.inputForm.totalEmployeesNote').replace('{total}', totalEmployees.toString())}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputForm;