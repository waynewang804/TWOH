import { TableRowData, TabConfig } from '@/types/complianceTypes';

// 標籤頁配置
export const TAB_CONFIGS: TabConfig[] = [
  {
    id: 'appendix2',
    title: '附表二',
    icon: '👨‍⚕️',
    description: '醫師臨場服務頻率',
    color: 'blue'
  },
  {
    id: 'appendix3',
    title: '附表三',
    icon: '👩‍⚕️',
    description: '護理人員配置要求',
    color: 'green'
  }
];

// 附表二：從事勞工健康服務之醫師人力配置及臨場服務頻率表
export const APPENDIX2_DATA: TableRowData[] = [
  // 各類事業 - 特別危害健康作業
  {
    id: 'special-50-99',
    employeeRange: '各類',
    specialHazardRange: '特別危害健康作業50-99人',
    requirement: '職業醫學科專科醫師：1次/4個月',
    frequency: '1次/4個月',
    isSpecialHazard: true,
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'special-100-plus',
    employeeRange: '各類',
    specialHazardRange: '特別危害健康作業100人以上',
    requirement: '職業醫學科專科醫師：1次/月',
    frequency: '1次/月',
    isSpecialHazard: true,
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  
  // 第一類事業
  {
    id: 'class1-300-999',
    businessClass: 1,
    employeeRange: '300-999人',
    requirement: '1次/月',
    frequency: '1次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class1-1000-1999',
    businessClass: 1,
    employeeRange: '1,000-1,999人',
    requirement: '3次/月',
    frequency: '3次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class1-2000-2999',
    businessClass: 1,
    employeeRange: '2,000-2,999人',
    requirement: '6次/月',
    frequency: '6次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class1-3000-3999',
    businessClass: 1,
    employeeRange: '3,000-3,999人',
    requirement: '9次/月',
    frequency: '9次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class1-4000-4999',
    businessClass: 1,
    employeeRange: '4,000-4,999人',
    requirement: '12次/月',
    frequency: '12次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class1-5000-5999',
    businessClass: 1,
    employeeRange: '5,000-5,999人',
    requirement: '15次/月',
    frequency: '15次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class1-6000-plus',
    businessClass: 1,
    employeeRange: '6,000人以上',
    requirement: '專任職業醫學科專科醫師一人或18次/月',
    frequency: '專任或18次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },

  // 第二類事業
  {
    id: 'class2-300-999',
    businessClass: 2,
    employeeRange: '300-999人',
    requirement: '1次/2個月',
    frequency: '1次/2個月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class2-1000-1999',
    businessClass: 2,
    employeeRange: '1,000-1,999人',
    requirement: '1次/月',
    frequency: '1次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class2-2000-2999',
    businessClass: 2,
    employeeRange: '2,000-2,999人',
    requirement: '3次/月',
    frequency: '3次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class2-3000-3999',
    businessClass: 2,
    employeeRange: '3,000-3,999人',
    requirement: '5次/月',
    frequency: '5次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class2-4000-4999',
    businessClass: 2,
    employeeRange: '4,000-4,999人',
    requirement: '7次/月',
    frequency: '7次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class2-5000-5999',
    businessClass: 2,
    employeeRange: '5,000-5,999人',
    requirement: '9次/月',
    frequency: '9次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class2-6000-plus',
    businessClass: 2,
    employeeRange: '6,000人以上',
    requirement: '12次/月',
    frequency: '12次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },

  // 第三類事業
  {
    id: 'class3-300-999',
    businessClass: 3,
    employeeRange: '300-999人',
    requirement: '1次/3個月',
    frequency: '1次/3個月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class3-1000-1999',
    businessClass: 3,
    employeeRange: '1,000-1,999人',
    requirement: '1次/2個月',
    frequency: '1次/2個月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class3-2000-2999',
    businessClass: 3,
    employeeRange: '2,000-2,999人',
    requirement: '1次/月',
    frequency: '1次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class3-3000-3999',
    businessClass: 3,
    employeeRange: '3,000-3,999人',
    requirement: '2次/月',
    frequency: '2次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class3-4000-4999',
    businessClass: 3,
    employeeRange: '4,000-4,999人',
    requirement: '3次/月',
    frequency: '3次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class3-5000-5999',
    businessClass: 3,
    employeeRange: '5,000-5,999人',
    requirement: '4次/月',
    frequency: '4次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  },
  {
    id: 'class3-6000-plus',
    businessClass: 3,
    employeeRange: '6,000人以上',
    requirement: '6次/月',
    frequency: '6次/月',
    notes: '一、勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：(一)第一類：3次/月。(二)第二類：2次/月。(三)第三類：1次/月。二、每次臨場服務之時間，應至少3小時以上。'
  }
];

// 附表三：從事勞工健康服務之護理人員人力配置表
export const APPENDIX3_DATA: TableRowData[] = [
  {
    id: 'nurse-1-299-0-99',
    employeeRange: '1-299人',
    specialHazardRange: '0-99',
    requirement: '無需配置',
    personnelCount: 0,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-1-299-100-299',
    employeeRange: '1-299人',
    specialHazardRange: '100-299',
    requirement: '1人',
    personnelCount: 1,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-1-299-300-plus',
    employeeRange: '1-299人',
    specialHazardRange: '300以上',
    requirement: '1人',
    personnelCount: 1,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-300-999-0-99',
    employeeRange: '300-999人',
    specialHazardRange: '0-99',
    requirement: '1人',
    personnelCount: 1,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-300-999-100-299',
    employeeRange: '300-999人',
    specialHazardRange: '100-299',
    requirement: '1人',
    personnelCount: 1,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-300-999-300-plus',
    employeeRange: '300-999人',
    specialHazardRange: '300以上',
    requirement: '2人',
    personnelCount: 2,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-1000-2999-0-99',
    employeeRange: '1,000-2,999人',
    specialHazardRange: '0-99',
    requirement: '2人',
    personnelCount: 2,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-1000-2999-100-299',
    employeeRange: '1,000-2,999人',
    specialHazardRange: '100-299',
    requirement: '2人',
    personnelCount: 2,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-1000-2999-300-plus',
    employeeRange: '1,000-2,999人',
    specialHazardRange: '300以上',
    requirement: '2人',
    personnelCount: 2,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-3000-5999-0-99',
    employeeRange: '3,000-5,999人',
    specialHazardRange: '0-99',
    requirement: '3人',
    personnelCount: 3,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-3000-5999-100-299',
    employeeRange: '3,000-5,999人',
    specialHazardRange: '100-299',
    requirement: '3人',
    personnelCount: 3,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-3000-5999-300-plus',
    employeeRange: '3,000-5,999人',
    specialHazardRange: '300以上',
    requirement: '4人',
    personnelCount: 4,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-6000-plus-0-99',
    employeeRange: '6,000人以上',
    specialHazardRange: '0-99',
    requirement: '4人',
    personnelCount: 4,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-6000-plus-100-299',
    employeeRange: '6,000人以上',
    specialHazardRange: '100-299',
    requirement: '4人',
    personnelCount: 4,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  },
  {
    id: 'nurse-6000-plus-300-plus',
    employeeRange: '6,000人以上',
    specialHazardRange: '300以上',
    requirement: '4人',
    personnelCount: 4,
    notes: '一、勞工人數超過6,000人以上者，每增加6,000人，應增加護理人員至少1人。二、事業單位設置護理人員數達3人以上者，得置護理主管1人。'
  }
];

// 輔助函數：根據條件查找匹配的表格行
export const findMatchingRows = (
  tableData: TableRowData[],
  employeeCount: number,
  specialHazardCount?: number,
  businessClass?: number
): TableRowData[] => {
  return tableData.filter(row => {
    // 檢查員工數範圍
    const employeeMatch = checkEmployeeRange(row.employeeRange, employeeCount);
    
    // 檢查特殊危害作業人數範圍
    const specialHazardMatch = specialHazardCount !== undefined && row.specialHazardRange
      ? checkSpecialHazardRange(row.specialHazardRange, specialHazardCount)
      : !row.specialHazardRange;
    
    // 檢查事業分級
    const businessClassMatch = businessClass !== undefined && row.businessClass
      ? row.businessClass === businessClass
      : !row.businessClass || row.isSpecialHazard;
    
    return employeeMatch && specialHazardMatch && businessClassMatch;
  });
};

// 檢查員工數範圍
const checkEmployeeRange = (range: string, count: number): boolean => {
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

// 檢查特殊危害作業人數範圍
const checkSpecialHazardRange = (range: string, count: number): boolean => {
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