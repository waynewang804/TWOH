// 雙表格合規計算器的類型定義

export type TableType = 'appendix2' | 'appendix3';
export type BusinessClass = 1 | 2 | 3;
export type ValidationLevel = 'info' | 'warning' | 'error';

// 表格行數據接口
export interface TableRowData {
  id: string;
  businessClass?: BusinessClass;
  employeeRange: string;
  specialHazardRange?: string;
  requirement: string;
  frequency?: string;
  personnelCount?: number;
  notes?: string;
  isSpecialHazard?: boolean;
}

// 驗證結果接口
export interface ValidationResult {
  isValid: boolean;
  message?: string;
  suggestion?: string;
  warningLevel: ValidationLevel;
}

// 高亮行配置
export interface HighlightConfig {
  employeeCount: number;
  specialHazardCount: number;
  businessClass?: BusinessClass;
}

// 表格選擇器標籤配置
export interface TabConfig {
  id: TableType;
  title: string;
  icon: string;
  description: string;
  color: string;
}

// 輸入表單配置
export interface InputFormConfig {
  tableType: TableType;
  value: string;
  totalEmployees: number;
  businessClass?: BusinessClass;
}

// 結果預覽數據
export interface ResultPreview {
  tableType: TableType;
  requirement: string;
  frequency?: string;
  personnelCount?: number;
  legalReference: string;
  isActive: boolean;
}