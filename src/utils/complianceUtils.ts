import { ValidationResult, ValidationLevel, HighlightConfig } from '@/types/complianceTypes';

// 驗證特別危害健康作業人數輸入
export const validateSpecialHazardInput = (
  value: string,
  totalEmployees: number,
  tableType: 'appendix2' | 'appendix3'
): ValidationResult => {
  if (!value) {
    return {
      isValid: true,
      message: '',
      warningLevel: 'info'
    };
  }

  const numericValue = parseInt(value.split('-')[0]) || 0;
  
  // 檢查是否超過總員工數
  if (numericValue > totalEmployees) {
    return {
      isValid: false,
      message: '特別危害健康作業人數不能超過總員工數',
      suggestion: `建議調整為不超過 ${totalEmployees} 人`,
      warningLevel: 'error'
    };
  }

  // 根據表格類型提供不同的建議
  if (tableType === 'appendix2') {
    if (numericValue >= 50 && numericValue < 100) {
      return {
        isValid: true,
        message: '將適用特別危害健康作業醫師服務頻率（1次/4個月）',
        warningLevel: 'info'
      };
    } else if (numericValue >= 100) {
      return {
        isValid: true,
        message: '將適用特別危害健康作業醫師服務頻率（1次/月）',
        warningLevel: 'info'
      };
    }
  } else if (tableType === 'appendix3') {
    if (numericValue >= 100) {
      return {
        isValid: true,
        message: '將影響護理人員配置要求',
        warningLevel: 'info'
      };
    }
  }

  return {
    isValid: true,
    message: '',
    warningLevel: 'info'
  };
};

// 檢查兩個特別危害健康作業設定的邏輯一致性
export const validateConsistency = (
  doctorCount: string,
  nurseCount: string,
  totalEmployees: number
): ValidationResult => {
  if (!doctorCount || !nurseCount) {
    return {
      isValid: true,
      message: '',
      warningLevel: 'info'
    };
  }

  const doctorNumeric = parseInt(doctorCount.split('-')[0]) || 0;
  const nurseNumeric = parseInt(nurseCount.split('-')[0]) || 0;

  // 檢查邏輯一致性
  if (Math.abs(doctorNumeric - nurseNumeric) > 50) {
    return {
      isValid: true,
      message: '兩個設定的人數差異較大，請確認是否正確',
      suggestion: '通常同一企業的特別危害健康作業人數應該相近',
      warningLevel: 'warning'
    };
  }

  return {
    isValid: true,
    message: '設定看起來合理',
    warningLevel: 'info'
  };
};

// 生成高亮配置
export const generateHighlightConfig = (
  employeeCount: number,
  specialHazardCount: number,
  businessClass?: number
): HighlightConfig => {
  return {
    employeeCount,
    specialHazardCount,
    businessClass
  };
};

// 格式化員工數範圍顯示
export const formatEmployeeRange = (range: string): string => {
  return range.replace(/人$/, '').replace(/,/g, ',');
};

// 格式化服務頻率顯示
export const formatFrequency = (frequency: string): string => {
  return frequency.replace(/次\//, '次/');
};

// 解析特別危害健康作業人數範圍
export const parseSpecialHazardRange = (range: string): { min: number; max: number } => {
  if (range === '50-99') return { min: 50, max: 99 };
  if (range === '100+') return { min: 100, max: Infinity };
  if (range === '0-99') return { min: 0, max: 99 };
  if (range === '100-299') return { min: 100, max: 299 };
  if (range === '300+') return { min: 300, max: Infinity };
  
  return { min: 0, max: 0 };
};

// 檢查數值是否在範圍內
export const isInRange = (value: number, range: string): boolean => {
  const { min, max } = parseSpecialHazardRange(range);
  return value >= min && value <= max;
};

// 生成建議文字
export const generateSuggestion = (
  tableType: 'appendix2' | 'appendix3',
  employeeCount: number,
  specialHazardCount: number
): string => {
  if (tableType === 'appendix2') {
    if (specialHazardCount >= 50 && specialHazardCount < 100) {
      return '建議選擇「50-99人」範圍，將適用每4個月1次的醫師臨場服務';
    } else if (specialHazardCount >= 100) {
      return '建議選擇「100人以上」範圍，將適用每月1次的醫師臨場服務';
    }
  } else if (tableType === 'appendix3') {
    if (specialHazardCount >= 100 && specialHazardCount < 300) {
      return '建議選擇「100-299人」範圍，將影響護理人員配置要求';
    } else if (specialHazardCount >= 300) {
      return '建議選擇「300人以上」範圍，將需要額外的護理人員配置';
    }
  }
  
  return '';
};

// 計算表格行的匹配度
export const calculateMatchScore = (
  row: any,
  employeeCount: number,
  specialHazardCount: number,
  businessClass?: number
): number => {
  let score = 0;
  
  // 員工數匹配度
  if (checkEmployeeRangeMatch(row.employeeRange, employeeCount)) {
    score += 3;
  }
  
  // 特殊危害作業人數匹配度
  if (row.specialHazardRange && checkSpecialHazardRangeMatch(row.specialHazardRange, specialHazardCount)) {
    score += 2;
  }
  
  // 事業分級匹配度
  if (row.businessClass && businessClass && row.businessClass === businessClass) {
    score += 1;
  }
  
  return score;
};

// 輔助函數：檢查員工數範圍匹配
const checkEmployeeRangeMatch = (range: string, count: number): boolean => {
  // 實作邏輯與 complianceTableData.ts 中的 checkEmployeeRange 相同
  if (range === '各類') return true;
  
  const ranges = [
    { pattern: /^1-299人$/, min: 1, max: 299 },
    { pattern: /^300-999人$/, min: 300, max: 999 },
    { pattern: /^1,000-1,999人$/, min: 1000, max: 1999 },
    { pattern: /^1,000-2,999人$/, min: 1000, max: 2999 },
    { pattern: /^2,000-2,999人$/, min: 2000, max: 2999 },
    { pattern: /^3,000-3,999人$/, min: 3000, max: 3999 },
    { pattern: /^3,000-5,999人$/, min: 3000, max: 5999 },
    { pattern: /^4,000-4,999人$/, min: 4000, max: 4999 },
    { pattern: /^5,000-5,999人$/, min: 5000, max: 5999 },
    { pattern: /^6,000人以上$/, min: 6000, max: Infinity }
  ];
  
  for (const { pattern, min, max } of ranges) {
    if (pattern.test(range)) {
      return count >= min && count <= max;
    }
  }
  
  return false;
};

// 輔助函數：檢查特殊危害作業人數範圍匹配
const checkSpecialHazardRangeMatch = (range: string, count: number): boolean => {
  const ranges = [
    { pattern: /^0-99$/, min: 0, max: 99 },
    { pattern: /^特別危害健康作業50-99人$/, min: 50, max: 99 },
    { pattern: /^100-299$/, min: 100, max: 299 },
    { pattern: /^特別危害健康作業100人以上$/, min: 100, max: Infinity },
    { pattern: /^300以上$/, min: 300, max: Infinity }
  ];
  
  for (const { pattern, min, max } of ranges) {
    if (pattern.test(range)) {
      return count >= min && count <= max;
    }
  }
  
  return false;
};