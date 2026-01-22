// 行業代碼對應表 - 台灣標準行業分類
// Industry Code Mapping - Taiwan Standard Industrial Classification

export interface IndustryCodeMapping {
  code: string;           // 4碼行業代碼
  nameKey: string;        // 翻譯鍵值
  level: 1 | 2 | 3;      // 事業分級
  frequency: string;      // 服務頻率
  frequencyValue: number; // 年度服務次數
  riskLevel: number;      // 風險等級百分比
  category: string;       // 行業大類
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
  suggestions?: string[];
  result?: IndustryCodeMapping;
}

export enum InputMode {
  INDUSTRY_SELECTION = 'selection',
  CODE_INPUT = 'code'
}

// 完整的台灣標準行業分類4碼代碼對應表
export const industryCodeDatabase: Record<string, IndustryCodeMapping> = {
  // 第一級事業（高風險）- 每月至少1次
  
  // 礦業及土石採取業 (0500-0990)
  "0510": { code: "0510", nameKey: "mining_coal", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "mining" },
  "0520": { code: "0520", nameKey: "mining_crude_oil", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "mining" },
  "0610": { code: "0610", nameKey: "mining_metal", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "mining" },
  "0810": { code: "0810", nameKey: "quarrying_stone", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "mining" },
  "0891": { code: "0891", nameKey: "mining_chemical", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "mining" },
  
  // 金屬製品製造業 (2400-2599)
  "2410": { code: "2410", nameKey: "manufacturing_basic_iron_steel", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_metal" },
  "2420": { code: "2420", nameKey: "manufacturing_basic_precious_metals", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_metal" },
  "2511": { code: "2511", nameKey: "manufacturing_metal_structures", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_metal" },
  "2520": { code: "2520", nameKey: "manufacturing_tanks_reservoirs", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_metal" },
  "2591": { code: "2591", nameKey: "manufacturing_metal_forging", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_metal" },
  
  // 化學材料製造業 (1700-1999)
  "1711": { code: "1711", nameKey: "manufacturing_basic_chemicals", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_chemical" },
  "1712": { code: "1712", nameKey: "manufacturing_fertilizers", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_chemical" },
  "1721": { code: "1721", nameKey: "manufacturing_plastics", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_chemical" },
  "1722": { code: "1722", nameKey: "manufacturing_synthetic_rubber", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_chemical" },
  "1730": { code: "1730", nameKey: "manufacturing_synthetic_fibers", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_chemical" },
  
  // 石油及煤製品製造業 (1900-1999)
  "1910": { code: "1910", nameKey: "manufacturing_coke_oven", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_petroleum" },
  "1920": { code: "1920", nameKey: "manufacturing_refined_petroleum", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_petroleum" },
  
  // 機械設備製造業 (2900-3099)
  "2911": { code: "2911", nameKey: "manufacturing_engines_turbines", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_machinery" },
  "2912": { code: "2912", nameKey: "manufacturing_fluid_power", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_machinery" },
  "2920": { code: "2920", nameKey: "manufacturing_general_machinery", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_machinery" },
  "2930": { code: "2930", nameKey: "manufacturing_agricultural_machinery", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_machinery" },
  "2940": { code: "2940", nameKey: "manufacturing_machine_tools", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "manufacturing_machinery" },
  
  // 營造業 (4100-4399)
  "4111": { code: "4111", nameKey: "construction_residential", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "construction" },
  "4112": { code: "4112", nameKey: "construction_non_residential", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "construction" },
  "4211": { code: "4211", nameKey: "construction_roads_highways", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "construction" },
  "4212": { code: "4212", nameKey: "construction_railways", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "construction" },
  "4290": { code: "4290", nameKey: "construction_other_civil", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "construction" },
  
  // 電力及燃氣供應業 (3500-3599)
  "3510": { code: "3510", nameKey: "electricity_generation", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "electricity" },
  "3520": { code: "3520", nameKey: "gas_manufacture", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "electricity" },
  "3530": { code: "3530", nameKey: "steam_air_conditioning", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "electricity" },
  
  // 廢棄物清理業 (3700-3900)
  "3811": { code: "3811", nameKey: "waste_collection_non_hazardous", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "waste_management" },
  "3812": { code: "3812", nameKey: "waste_collection_hazardous", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "waste_management" },
  "3821": { code: "3821", nameKey: "waste_treatment_non_hazardous", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "waste_management" },
  "3822": { code: "3822", nameKey: "waste_treatment_hazardous", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "waste_management" },
  
  // 環境衛生及病媒防治業 (8100-8199)
  "8110": { code: "8110", nameKey: "environmental_sanitation", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "environmental_services" },
  "8120": { code: "8120", nameKey: "pest_control", level: 1, frequency: "monthly", frequencyValue: 12, riskLevel: 100, category: "environmental_services" },
  
  // 第二級事業（中風險）- 每2個月至少1次
  
  // 農、林、漁、牧業 (0100-0399)
  "0111": { code: "0111", nameKey: "agriculture_rice", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0112": { code: "0112", nameKey: "agriculture_corn", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0121": { code: "0121", nameKey: "agriculture_vegetables", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0122": { code: "0122", nameKey: "agriculture_fruits", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0210": { code: "0210", nameKey: "forestry", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0311": { code: "0311", nameKey: "fishing_marine", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0312": { code: "0312", nameKey: "fishing_freshwater", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0321": { code: "0321", nameKey: "aquaculture_marine", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0322": { code: "0322", nameKey: "aquaculture_freshwater", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0410": { code: "0410", nameKey: "livestock_cattle", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  "0420": { code: "0420", nameKey: "livestock_poultry", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "agriculture" },
  
  // 食品製造業 (0800-1199)
  "0811": { code: "0811", nameKey: "manufacturing_meat_processing", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0812": { code: "0812", nameKey: "manufacturing_poultry_processing", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0820": { code: "0820", nameKey: "manufacturing_seafood_processing", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0830": { code: "0830", nameKey: "manufacturing_vegetables_fruits", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0840": { code: "0840", nameKey: "manufacturing_oils_fats", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0851": { code: "0851", nameKey: "manufacturing_dairy_products", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0852": { code: "0852", nameKey: "manufacturing_ice_cream", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0861": { code: "0861", nameKey: "manufacturing_flour_milling", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0862": { code: "0862", nameKey: "manufacturing_starch", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0871": { code: "0871", nameKey: "manufacturing_bakery_products", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0872": { code: "0872", nameKey: "manufacturing_sugar", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0873": { code: "0873", nameKey: "manufacturing_cocoa_chocolate", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0874": { code: "0874", nameKey: "manufacturing_noodles", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0875": { code: "0875", nameKey: "manufacturing_prepared_meals", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0879": { code: "0879", nameKey: "manufacturing_other_food", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "0880": { code: "0880", nameKey: "manufacturing_animal_feeds", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "1101": { code: "1101", nameKey: "manufacturing_alcoholic_beverages", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "1102": { code: "1102", nameKey: "manufacturing_wine", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "1103": { code: "1103", nameKey: "manufacturing_malt_liquors", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "1104": { code: "1104", nameKey: "manufacturing_soft_drinks", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  "1200": { code: "1200", nameKey: "manufacturing_tobacco", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_food" },
  
  // 紡織業 (1300-1399)
  "1311": { code: "1311", nameKey: "manufacturing_cotton_textiles", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_textile" },
  "1312": { code: "1312", nameKey: "manufacturing_wool_textiles", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_textile" },
  "1313": { code: "1313", nameKey: "manufacturing_silk_textiles", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_textile" },
  "1314": { code: "1314", nameKey: "manufacturing_synthetic_textiles", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_textile" },
  "1320": { code: "1320", nameKey: "manufacturing_fabric_weaving", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_textile" },
  "1330": { code: "1330", nameKey: "manufacturing_fabric_finishing", level: 2, frequency: "bimonthly", frequencyValue: 6, riskLevel: 65, category: "manufacturing_textile" },
  
  // 第三級事業（低風險）- 每3個月至少1次
  
  // 批發及零售業 (4500-4799)
  "4511": { code: "4511", nameKey: "wholesale_agricultural_products", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4512": { code: "4512", nameKey: "wholesale_food_beverages", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4521": { code: "4521", nameKey: "wholesale_textiles", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4522": { code: "4522", nameKey: "wholesale_clothing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4531": { code: "4531", nameKey: "wholesale_household_appliances", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4532": { code: "4532", nameKey: "wholesale_electronic_equipment", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4711": { code: "4711", nameKey: "retail_food_beverages", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4719": { code: "4719", nameKey: "retail_general_merchandise", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4721": { code: "4721", nameKey: "retail_textiles", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  "4722": { code: "4722", nameKey: "retail_clothing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "wholesale_retail" },
  
  // 資訊及通訊傳播業 (5800-6399)
  "5811": { code: "5811", nameKey: "publishing_books", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "5812": { code: "5812", nameKey: "publishing_newspapers", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "5813": { code: "5813", nameKey: "publishing_magazines", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "5821": { code: "5821", nameKey: "software_publishing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "5911": { code: "5911", nameKey: "motion_picture_production", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "5912": { code: "5912", nameKey: "motion_picture_distribution", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6010": { code: "6010", nameKey: "radio_broadcasting", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6020": { code: "6020", nameKey: "television_broadcasting", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6110": { code: "6110", nameKey: "wired_telecommunications", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6120": { code: "6120", nameKey: "wireless_telecommunications", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6130": { code: "6130", nameKey: "satellite_telecommunications", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6190": { code: "6190", nameKey: "other_telecommunications", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6201": { code: "6201", nameKey: "computer_programming", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6202": { code: "6202", nameKey: "computer_consultancy", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6209": { code: "6209", nameKey: "other_information_technology", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6311": { code: "6311", nameKey: "data_processing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  "6312": { code: "6312", nameKey: "web_portals", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "information" },
  
  // 金融及保險業 (6400-6799)
  "6411": { code: "6411", nameKey: "central_banking", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6412": { code: "6412", nameKey: "commercial_banking", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6413": { code: "6413", nameKey: "credit_cooperatives", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6419": { code: "6419", nameKey: "other_monetary_intermediation", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6421": { code: "6421", nameKey: "financial_leasing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6422": { code: "6422", nameKey: "credit_card_services", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6511": { code: "6511", nameKey: "life_insurance", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6512": { code: "6512", nameKey: "non_life_insurance", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6520": { code: "6520", nameKey: "reinsurance", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6611": { code: "6611", nameKey: "securities_dealing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  "6612": { code: "6612", nameKey: "securities_brokerage", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "finance" },
  
  // 不動產業 (6800-6899)
  "6810": { code: "6810", nameKey: "real_estate_own_property", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "real_estate" },
  "6821": { code: "6821", nameKey: "real_estate_rental_residential", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "real_estate" },
  "6822": { code: "6822", nameKey: "real_estate_rental_non_residential", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "real_estate" },
  "6831": { code: "6831", nameKey: "real_estate_agencies", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "real_estate" },
  "6832": { code: "6832", nameKey: "real_estate_management", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "real_estate" },
  
  // 專業、科學及技術服務業 (7000-7499)
  "7111": { code: "7111", nameKey: "architectural_services", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7112": { code: "7112", nameKey: "engineering_services", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7120": { code: "7120", nameKey: "technical_testing", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7211": { code: "7211", nameKey: "research_natural_sciences", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7212": { code: "7212", nameKey: "research_social_sciences", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7311": { code: "7311", nameKey: "advertising_agencies", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7312": { code: "7312", nameKey: "media_representation", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7320": { code: "7320", nameKey: "market_research", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7411": { code: "7411", nameKey: "specialized_design", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7412": { code: "7412", nameKey: "interior_design", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  "7420": { code: "7420", nameKey: "photographic_activities", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "professional" },
  
  // 教育業 (8500-8599)
  "8511": { code: "8511", nameKey: "pre_primary_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8521": { code: "8521", nameKey: "primary_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8522": { code: "8522", nameKey: "secondary_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8531": { code: "8531", nameKey: "higher_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8541": { code: "8541", nameKey: "sports_recreation_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8542": { code: "8542", nameKey: "cultural_arts_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8549": { code: "8549", nameKey: "other_education", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" },
  "8550": { code: "8550", nameKey: "educational_support", level: 3, frequency: "quarterly", frequencyValue: 4, riskLevel: 30, category: "education" }
};

// 代碼驗證函數
export function validateIndustryCode(code: string): ValidationResult {
  // 檢查格式：必須是4碼數字
  if (!code || code.length !== 4) {
    return {
      isValid: false,
      errorMessage: "請輸入4碼數字格式的行業代碼",
      suggestions: []
    };
  }

  // 檢查是否全為數字
  if (!/^\d{4}$/.test(code)) {
    return {
      isValid: false,
      errorMessage: "行業代碼必須為4碼數字",
      suggestions: []
    };
  }

  // 檢查代碼是否存在於資料庫中
  const result = industryCodeDatabase[code];
  if (!result) {
    // 尋找相似的代碼建議
    const suggestions = findSimilarCodes(code);
    return {
      isValid: false,
      errorMessage: "找不到此行業代碼，請檢查代碼是否正確",
      suggestions
    };
  }

  return {
    isValid: true,
    result
  };
}

// 尋找相似代碼的函數
function findSimilarCodes(inputCode: string): string[] {
  const suggestions: string[] = [];
  const codes = Object.keys(industryCodeDatabase);
  
  // 尋找前3碼相同的代碼
  const prefix3 = inputCode.substring(0, 3);
  const similar3 = codes.filter(code => code.startsWith(prefix3));
  suggestions.push(...similar3.slice(0, 3));
  
  // 如果前3碼相同的不足3個，尋找前2碼相同的
  if (suggestions.length < 3) {
    const prefix2 = inputCode.substring(0, 2);
    const similar2 = codes.filter(code => 
      code.startsWith(prefix2) && !suggestions.includes(code)
    );
    suggestions.push(...similar2.slice(0, 3 - suggestions.length));
  }
  
  return suggestions;
}

// 根據代碼查詢行業資訊
export function getIndustryByCode(code: string): IndustryCodeMapping | null {
  return industryCodeDatabase[code] || null;
}

// 取得所有代碼列表
export function getAllIndustryCodes(): string[] {
  return Object.keys(industryCodeDatabase).sort();
}

// 根據分級篩選代碼
export function getCodesByLevel(level: 1 | 2 | 3): IndustryCodeMapping[] {
  return Object.values(industryCodeDatabase).filter(item => item.level === level);
}

// 根據類別篩選代碼
export function getCodesByCategory(category: string): IndustryCodeMapping[] {
  return Object.values(industryCodeDatabase).filter(item => item.category === category);
}