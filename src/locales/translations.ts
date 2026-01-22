export const translations = {
  "zh-TW": {
    // Navigation
    nav: {
      title: "台灣職場健康",
      requirements: "法規要求",
      riskAssessment: "風險評估",
      calculator: "合規試算",
      vendors: "廠商資訊",
      startCalculation: "立即試算"
    },
    // Hero Section
    hero: {
      badge: "職業安全衛生法 合規指南",
      title: "台灣職場健康管理",
      subtitle: "企業合規一站式服務",
      description: "根據《職業安全衛生法》與《勞工健康保護規則》，協助企業快速了解法規要求，計算合規成本，找到合格職業安全衛生服務商。",
      startButton: "立即試算合規需求",
      requirementsButton: "查看法規要求",
      stats: {
        nurses: "員工需設置護理人員",
        healthService: "員工需臨場健康服務",
        subsidy: "特殊危害勞保補助"
      }
    },
    // Requirements Section
    requirements: {
      badge: "職業安全衛生法 第22條 & 勞工健康保護規則",
      title: "醫護人員配置法規要求",
      description: "根據《職業安全衛生法》第22條及《勞工健康保護規則》第3-6條，不同規模事業單位需配置相應的職業健康人員",
      
      // New structure for medical personnel requirements
      medicalPersonnel: {
        stats: {
          configTypes: "配置情況類型",
          minThreshold: "最低人數門檻",
          employmentThreshold: "僱用門檻人數"
        },
        categories: {
          small: {
            title: "50-299人事業單位",
            subtitle: "勞工健康保護規則第4條",
            employeeRange: "50-299人",
            lawReference: "勞工健康保護規則第4條"
          },
          medium: {
            title: "300人以上事業單位", 
            subtitle: "勞工健康保護規則第3條",
            employeeRange: "300人以上",
            lawReference: "勞工健康保護規則第3條"
          },
          specialHazard: {
            title: "特別危害健康作業",
            subtitle: "50人以上特殊規定", 
            employeeRange: "特殊作業50人以上",
            lawReference: "勞工健康保護規則第3條"
          },
          consultant: {
            title: "委託顧問機構",
            subtitle: "勞工健康保護規則第13條",
            employeeRange: "特定情況適用", 
            lawReference: "勞工健康保護規則第13條及附表七"
          }
        },
        requirements: {
          contractDoctor: {
            title: "特約醫師",
            desc: "依附表四頻率提供臨場健康服務",
            detail: "視事業規模性質決定服務頻率"
          },
          contractNurse: {
            title: "特約護理人員", 
            desc: "配合醫師提供健康服務",
            detail: "毋須僱用，以特約方式即可"
          },
          noFullTime: {
            title: "專職人員",
            desc: "不需設置專職醫護人員", 
            detail: "特約方式即符合法規要求"
          },
          employNurse: {
            title: "僱用護理人員",
            desc: "應僱用從事勞工健康服務之護理人員",
            detail: "必須為正式僱用關係"
          },
          employOrContractDoctor: {
            title: "僱用或特約醫師",
            desc: "僱用或特約從事勞工健康服務之醫師", 
            detail: "可選擇僱用或特約方式"
          },
          healthService: {
            title: "辦理勞工健康服務",
            desc: "完整的勞工健康服務計畫",
            detail: "包含健檢、管理、促進等服務"
          },
          specialEmployNurse: {
            title: "僱用護理人員",
            desc: "從事特別危害健康作業勞工50人以上",
            detail: "不論總員工數，特殊作業達50人即需僱用"
          },
          specialDoctor: {
            title: "僱用或特約醫師", 
            desc: "提供特殊健康管理服務",
            detail: "熟悉特別危害健康作業之醫師"
          },
          specialExam: {
            title: "特殊健康檢查",
            desc: "定期特殊健康檢查與管理",
            detail: "依危害物質種類決定檢查頻率"
          },
          secondThirdClass: {
            title: "第二、三類事業",
            desc: "工作場所分布不同地區", 
            detail: "符合附表七規定之事業單位"
          },
          approvedConsultant: {
            title: "認可顧問機構",
            desc: "委由中央主管機關認可機構",
            detail: "勞工健康顧問服務類機構"
          },
          qualifiedPersonnel: {
            title: "符合資格醫護",
            desc: "指派符合資格醫護人員", 
            detail: "辦理臨場健康服務"
          }
        },
        keyPoints: {
          title: "重要法規要點",
          subtitle: "關鍵判斷標準",
          points: {
            employeeVsSpecial: {
              title: "員工總數 vs 特殊作業人數",
              desc: "300人以上事業單位：需僱用護理人員\n特殊作業50人以上：不論總人數，需僱用護理人員",
              note: "兩個條件任一符合即需僱用"
            },
            employVsContract: {
              title: "僱用 vs 特約差異", 
              desc: "50-299人：護理人員可特約，毋須僱用\n300人以上：護理人員必須僱用，醫師可僱用或特約",
              note: "僱用關係較特約關係更嚴格"
            },
            consultantConditions: {
              title: "委託顧問機構條件",
              desc: "第二、三類事業單位且工作場所分布不同地區\n勞工提供勞務場所非於雇主設施內或其可支配管理者", 
              note: "需符合特定條件才可委託"
            }
          }
        },
        common: {
          applicableScope: "適用範圍",
          lawBasis: "法規依據",
          importanceIndicator: "重要性指標"
        }
      },
      
      employeeRanges: {
        "50-299": "50-299人",
        "300-499": "300-499人", 
        "500-999": "500-999人",
        "1000+": "1000人以上"
      },
      services: {
        onSiteHealth: "臨場健康服務",
        healthManagement: "健康管理",
        fullTimeNurse: "專職護理師",
        fullTimeNurseRequired: "專職護理人員",
        healthPlan: "健康管理計畫",
        riskAssessment: "健康風險評估",
        fullTimeDoctor: "專任醫師",
        healthUnit: "健康服務單位"
      },
      descriptions: {
        onSiteFrequency: "依事業分級每1-3個月1次",
        healthCheck: "員工健康檢查與分級管理",
        notRequired: "不需專職設置",
        nurseRequired: "勞工300人以上需設置1名",
        doctorService: "勞工健康服務醫師",
        writtenPlan: "完整書面健康管理計畫",
        nurseIncrease: "勞工500人以上每增300人增設1名",
        increaseFrequency: "增加醫師臨場頻率",
        systematicRisk: "系統化風險管理",
        doctorRequired: "3000人以上需專任醫師",
        nurseRatio: "每300人設置1名",
        healthServiceUnit: "設置勞工健康服務單位",
        doctorOrGraded: "專任醫師或依分級辦理"
      },
      responsibilities: {
        title: "雇主法定責任",
        healthExam: {
          title: "健康檢查",
          desc: "僱用前健康檢查、定期健康檢查（40歲以下每3年1次，40歲以上每年1次，65歲以上每年1次）、特殊健康檢查"
        },
        healthMgmt: {
          title: "健康管理", 
          desc: "依照年度健康檢查結果四級分級管理、異常個案追蹤輔導、工作適性評估、復工適性評估\n "
        },
        healthPromotion: {
          title: "健康促進",
          desc: "職場健康促進活動、人因性危害預防、異常工作負荷促發疾病預防、職場暴力預防"
        }
      },
      specialHazard: {
        title: "特別危害健康作業特殊規定",
        rules: [
          "從事特別危害健康作業勞工人數達100人以上者，應增設專職護理人員1名",
          "特別危害健康作業不論事業分級，臨場健康服務頻率皆為每月至少1次",
          "特殊健康檢查頻率依危害物質種類而定（每6個月至2年1次不等）",
          "作業環境監測結果超過容許濃度時，應立即改善並增加健康檢查頻率"
        ]
      }
    },
    // Business Classification
    businessClass: {
      badge: "事業分級制度",
      title: "臨場健康服務頻率依事業分級決定",
      description: "依據《勞工健康保護規則》附表二，事業單位依行業別及災害風險分為三級，決定臨場健康服務頻率",
      stats: {
        businessLevels: "事業分級",
        maxServiceFrequency: "最高服務次數/年",
        riskCoverage: "風險覆蓋率"
      },
      levels: {
        first: "第一類",
        second: "第二類", 
        third: "第三類"
      },
      riskTypes: {
        high: "高風險事業",
        medium: "中風險事業",
        low: "低風險事業"
      },
      frequencies: {
        monthly: "每月至少1次",
        bimonthly: "每2個月至少1次",
        quarterly: "每3個月至少1次"
      },
      industries: {
        construction: "營造業",
        metalManufacturing: "製造業（金屬、化學）",
        mining: "礦業",
        petrochemical: "石油化學工業",
        foodManufacturing: "製造業（食品、紡織）",
        transportation: "運輸業",
        warehousing: "倉儲業",
        agriculture: "農林漁牧業",
        finance: "金融保險業",
        realEstate: "不動產業",
        professional: "專業服務業",
        retail: "批發零售業"
      },
      serviceFrequency: "臨場服務頻率",
      industryExamples: "行業範例",
      labels: {
        riskLevel: "風險等級",
        serviceDensity: "服務密度",
        timesPerYear: "次/年",
        comparisonChart: "事業分級比較圖表",
        comparisonDescription: "不同事業分級的風險程度與服務頻率對比分析",
        importantReminders: "重要提醒事項"
      },
      reminder: {
        title: "重要提醒",
        points: [
          "事業分級依據《勞工健康保護規則》附表二認定",
          "同一事業單位如有多種行業，以風險最高者為準",
          "從事特別危害健康作業者，不論事業分級皆需每月至少1次臨場服務",
          "勞工健康服務醫師須具備職業醫學專科醫師或相關訓練資格"
        ]
      },
      // Industry Classification Tool
      classificationTool: {
        title: "不知道您的事業分級？",
        subtitle: "選擇您的行業類別或輸入行業代碼，我們幫您判定事業分級",
        selectIndustry: "請選擇您的主要行業類別",
        searchPlaceholder: "搜尋行業類別...",
        
        // 新增：輸入模式選擇
        inputModeSelection: {
          title: "請選擇查詢方式",
          industrySelection: "選擇行業類別",
          codeInput: "輸入行業代碼",
          industrySelectionDesc: "從清單中選擇您的行業類別",
          codeInputDesc: "直接輸入4碼標準行業分類代碼"
        },
        
        // 新增：代碼輸入功能
        codeInput: {
          title: "輸入行業代碼查詢",
          placeholder: "請輸入4碼行業代碼（例如：4711）",
          formatHint: "格式：4碼數字",
          examples: "範例：4711（食品零售）、6201（軟體開發）、8521（小學教育）",
          validation: {
            formatError: "請輸入4碼數字格式",
            notFoundError: "找不到此行業代碼",
            emptyError: "請輸入行業代碼"
          },
          suggestions: {
            title: "您是否要找：",
            noSuggestions: "沒有找到相似的代碼"
          },
          help: {
            title: "需要幫助？",
            description: "如果不確定您的行業代碼，可以切換到「選擇行業類別」模式",
            switchMode: "切換到選擇模式"
          }
        },
        
        result: {
          title: "您的事業分級結果",
          classification: "事業分級：",
          frequency: "臨場服務頻率：",
          riskLevel: "風險等級：",
          description: "根據您選擇的行業，系統判定結果如下：",
          codeDescription: "根據您輸入的代碼，系統判定結果如下：",
          industryCode: "行業代碼：",
          industryName: "行業名稱："
        },
        industries: {
          // 第一級 - 高風險
          mining: "礦業及土石採取業",
          manufacturing_metal: "金屬製品製造業",
          manufacturing_chemical: "化學材料製造業",
          manufacturing_petroleum: "石油及煤製品製造業",
          manufacturing_machinery: "機械設備製造業",
          construction: "營造業",
          electricity: "電力及燃氣供應業",
          waste_management: "廢棄物清理業",
          environmental_services: "環境衛生及病媒防治業",
          
          // 第二級 - 中風險  
          agriculture: "農、林、漁、牧業",
          manufacturing_food: "食品製造業",
          manufacturing_textile: "紡織業",
          manufacturing_wood: "木竹製品製造業",
          manufacturing_paper: "紙漿、紙及紙製品製造業",
          manufacturing_rubber: "橡膠製品製造業",
          manufacturing_glass: "玻璃及其製品製造業",
          manufacturing_pharmaceutical: "藥品及醫用化學製品製造業",
          transportation: "運輸及倉儲業",
          postal: "郵政及快遞業",
          accommodation: "住宿及餐飲業",
          healthcare: "醫療保健及社會工作服務業",
          
          // 第三級 - 低風險
          wholesale_retail: "批發及零售業",
          information: "資訊及通訊傳播業",
          finance: "金融及保險業",
          real_estate: "不動產業",
          professional: "專業、科學及技術服務業",
          support_services: "支援服務業",
          public_admin: "公共行政及國防事務",
          education: "教育業",
          arts: "藝術、娛樂及休閒服務業",
          other_services: "其他服務業"
        },
        
        // 新增：詳細行業代碼名稱
        industryCodeNames: {
          // 礦業
          mining_coal: "煤礦開採業",
          mining_crude_oil: "原油開採業",
          mining_metal: "金屬礦開採業",
          quarrying_stone: "石材開採業",
          mining_chemical: "化學原料礦開採業",
          
          // 金屬製品製造業
          manufacturing_basic_iron_steel: "鋼鐵基本工業",
          manufacturing_basic_precious_metals: "貴金屬基本工業",
          manufacturing_metal_structures: "金屬結構製造業",
          manufacturing_tanks_reservoirs: "金屬容器製造業",
          manufacturing_metal_forging: "金屬鍛造業",
          
          // 化學材料製造業
          manufacturing_basic_chemicals: "基本化學材料製造業",
          manufacturing_fertilizers: "肥料製造業",
          manufacturing_plastics: "塑膠原料製造業",
          manufacturing_synthetic_rubber: "合成橡膠製造業",
          manufacturing_synthetic_fibers: "人造纖維製造業",
          
          // 石油及煤製品製造業
          manufacturing_coke_oven: "焦炭及其製品製造業",
          manufacturing_refined_petroleum: "石油煉製業",
          
          // 機械設備製造業
          manufacturing_engines_turbines: "發動機及渦輪機製造業",
          manufacturing_fluid_power: "流體動力設備製造業",
          manufacturing_general_machinery: "通用機械設備製造業",
          manufacturing_agricultural_machinery: "農業機械製造業",
          manufacturing_machine_tools: "工具機製造業",
          
          // 營造業
          construction_residential: "住宅建築工程業",
          construction_non_residential: "非住宅建築工程業",
          construction_roads_highways: "道路工程業",
          construction_railways: "鐵路工程業",
          construction_other_civil: "其他土木工程業",
          
          // 電力及燃氣供應業
          electricity_generation: "發電業",
          gas_manufacture: "氣體燃料製造業",
          steam_air_conditioning: "蒸汽供應及空調業",
          
          // 廢棄物清理業
          waste_collection_non_hazardous: "一般廢棄物清除業",
          waste_collection_hazardous: "有害廢棄物清除業",
          waste_treatment_non_hazardous: "一般廢棄物處理業",
          waste_treatment_hazardous: "有害廢棄物處理業",
          
          // 環境衛生及病媒防治業
          environmental_sanitation: "環境衛生業",
          pest_control: "病媒防治業",
          
          // 農林漁牧業
          agriculture_rice: "稻作栽培業",
          agriculture_corn: "玉米栽培業",
          agriculture_vegetables: "蔬菜栽培業",
          agriculture_fruits: "果樹栽培業",
          forestry: "林業",
          fishing_marine: "海面漁業",
          fishing_freshwater: "內陸漁業",
          aquaculture_marine: "海面養殖業",
          aquaculture_freshwater: "內陸養殖業",
          livestock_cattle: "牛隻飼育業",
          livestock_poultry: "家禽飼育業",
          
          // 食品製造業
          manufacturing_meat_processing: "屠宰業",
          manufacturing_poultry_processing: "家禽屠宰業",
          manufacturing_seafood_processing: "水產品製造業",
          manufacturing_vegetables_fruits: "蔬果製造業",
          manufacturing_oils_fats: "油脂製造業",
          manufacturing_dairy_products: "乳品製造業",
          manufacturing_ice_cream: "冰品製造業",
          manufacturing_flour_milling: "製粉業",
          manufacturing_starch: "澱粉製造業",
          manufacturing_bakery_products: "烘焙炊蒸食品製造業",
          manufacturing_sugar: "製糖業",
          manufacturing_cocoa_chocolate: "糖果及巧克力製造業",
          manufacturing_noodles: "麵條、粉條類食品製造業",
          manufacturing_prepared_meals: "調理食品製造業",
          manufacturing_other_food: "其他食品製造業",
          manufacturing_animal_feeds: "動物飼品製造業",
          manufacturing_alcoholic_beverages: "酒精飲料製造業",
          manufacturing_wine: "葡萄酒製造業",
          manufacturing_malt_liquors: "啤酒製造業",
          manufacturing_soft_drinks: "非酒精飲料製造業",
          manufacturing_tobacco: "菸草製造業",
          
          // 紡織業
          manufacturing_cotton_textiles: "棉紡織業",
          manufacturing_wool_textiles: "毛紡織業",
          manufacturing_silk_textiles: "絲紡織業",
          manufacturing_synthetic_textiles: "人造纖維紡織業",
          manufacturing_fabric_weaving: "織布業",
          manufacturing_fabric_finishing: "織物整理業",
          
          // 批發零售業
          wholesale_agricultural_products: "農產品批發業",
          wholesale_food_beverages: "食品及飲料批發業",
          wholesale_textiles: "紡織品批發業",
          wholesale_clothing: "服裝批發業",
          wholesale_household_appliances: "家用電器批發業",
          wholesale_electronic_equipment: "電子設備批發業",
          retail_food_beverages: "食品及飲料零售業",
          retail_general_merchandise: "綜合商品零售業",
          retail_textiles: "紡織品零售業",
          retail_clothing: "服裝零售業",
          
          // 資訊及通訊傳播業
          publishing_books: "圖書出版業",
          publishing_newspapers: "報紙出版業",
          publishing_magazines: "雜誌出版業",
          software_publishing: "軟體出版業",
          motion_picture_production: "電影製作業",
          motion_picture_distribution: "電影發行業",
          radio_broadcasting: "廣播業",
          television_broadcasting: "電視業",
          wired_telecommunications: "有線通信業",
          wireless_telecommunications: "無線通信業",
          satellite_telecommunications: "衛星通信業",
          other_telecommunications: "其他電信業",
          computer_programming: "電腦程式設計業",
          computer_consultancy: "電腦諮詢業",
          other_information_technology: "其他資訊科技服務業",
          data_processing: "資料處理業",
          web_portals: "入口網站經營業",
          
          // 金融及保險業
          central_banking: "中央銀行",
          commercial_banking: "銀行業",
          credit_cooperatives: "信用合作社",
          other_monetary_intermediation: "其他貨幣中介業",
          financial_leasing: "融資租賃業",
          credit_card_services: "信用卡業",
          life_insurance: "人壽保險業",
          non_life_insurance: "產物保險業",
          reinsurance: "再保險業",
          securities_dealing: "證券商",
          securities_brokerage: "證券經紀業",
          
          // 不動產業
          real_estate_own_property: "不動產開發業",
          real_estate_rental_residential: "住宅租賃業",
          real_estate_rental_non_residential: "非住宅租賃業",
          real_estate_agencies: "不動產仲介業",
          real_estate_management: "不動產管理業",
          
          // 專業、科學及技術服務業
          architectural_services: "建築設計業",
          engineering_services: "工程技術服務業",
          technical_testing: "技術檢測業",
          research_natural_sciences: "自然科學研究業",
          research_social_sciences: "社會科學研究業",
          advertising_agencies: "廣告業",
          media_representation: "媒體代理業",
          market_research: "市場研究業",
          specialized_design: "專業設計業",
          interior_design: "室內設計業",
          photographic_activities: "攝影業",
          
          // 教育業
          pre_primary_education: "學前教育業",
          primary_education: "小學教育業",
          secondary_education: "中學教育業",
          higher_education: "高等教育業",
          sports_recreation_education: "運動及休閒教育業",
          cultural_arts_education: "文化藝術教育業",
          other_education: "其他教育業",
          educational_support: "教育輔助業"
        },
        
        categories: {
          first: "第一類（高風險）",
          second: "第二類（中風險）", 
          third: "第三類（低風險）"
        },
        reset: "重新選擇",
        close: "關閉",
        
        // 新增：企業合規需求試算器的翻譯
        complianceCalculator: {
          title: "企業合規需求試算器",
          inputTitle: "輸入企業資訊",
          resultsTitle: "合規需求結果",
          noSpecialHazards: "無特別危害健康作業",
          hasSpecialHazards: "有特別危害健康作業",
          specialHazardCount: "從事特別危害健康作業人數",
          selectHazardRange: "選擇特別危害健康作業人數範圍",
          hazardRanges: {
            "0-99": "0-99人",
            "100-299": "100-299人", 
            "300+": "300人以上"
          }
        },
        
        // 新增：事業分級判定工具的翻譯
        startClassification: "開始判定"
      }
    },
    // Risk Assessment
    riskAssessment: {
      badge: "風險評估",
      title: "特別危害健康作業評估",
      description: "回答幾個簡單問題，了解您是否有特別危害健康作業，以及可享有的勞保補助",
      stats: {
        hazardTypes: "危害作業類型",
        assessmentSteps: "評估步驟",
        accuracy: "準確度"
      },
      question: "您的事業單位是否有以下特別危害健康作業？",
      subtitle: "依《勞工健康保護規則》附表一，從事特別危害健康作業者需接受特殊健康檢查",
      hazards: {
        noise: "噪音作業",
        radiation: "游離輻射作業", 
        chemical: "有機溶劑作業",
        lead: "鉛作業",
        dust: "粉塵作業",
        heat: "高溫作業",
        asbestos: "石綿作業",
        vinyl: "氯乙烯作業",
        chromium: "六價鉻化合物作業",
        benzene: "苯作業",
        formaldehyde: "甲醛作業",
        vibration: "局部振動作業"
      },
      hazardDescs: {
        noise: "時量平均音壓級85分貝以上",
        radiation: "X光、放射性物質等作業",
        chemical: "甲苯、二甲苯等有機溶劑",
        lead: "鉛及其化合物作業",
        dust: "石綿、矽砂等粉塵作業",
        heat: "WBGT值超過28°C作業",
        asbestos: "石綿纖維暴露作業",
        vinyl: "氯乙烯單體暴露作業",
        chromium: "六價鉻化合物暴露作業",
        benzene: "苯及其化合物暴露作業",
        formaldehyde: "甲醛暴露作業",
        vibration: "手持振動工具作業"
      },
      noHazardInfo: "沒有選擇任何項目？仍可繼續，我們會提供一般職業健康管理建議。",
      nextStep: "下一步",
      noiseDetail: {
        title: "噪音作業詳細評估",
        subtitle: "請回答以下問題以確認合規狀態",
        hasMonitoring: "是否已安排作業環境監測？",
        hasReport: "是否有監測報告？",
        over85TWA: "時量平均音壓級是否超過 85 dB(A) TWA？",
        yes: "是",
        no: "否",
        yesOver85: "是，超過85分貝",
        noUnder85: "否，未超過85分貝"
      },
      results: {
        title: "風險評估完成",
        needsSpecialExam: "需要特別危害健康作業健康檢查",
        needsSpecialExamDesc: "依據您的回答，貴公司員工需接受特殊健康檢查",
        subsidyAvailable: "可申請勞保局補助",
        subsidyDesc: "噪音作業特殊健康檢查可向勞保局申請補助，免費進行檢查！",
        subsidyLink: "了解更多勞保局補助資訊 →",
        selectedHazards: "您選擇的危害作業：",
        noSpecialHazard: "暫無特別危害健康作業",
        noSpecialHazardDesc: "依據您的回答，目前不需要特殊健康檢查，但仍需執行一般健康管理",
        needMonitoring: "需要進行作業環境監測",
        needMonitoringDesc: "請依照認可之作業環境監測機構諮詢作業環境監測",
        monitoringLink: "查看認可監測機構名單 →",
        continueObservation: "持續觀察",
        continueObservationDesc: "未超過85分貝，建議視情況2-3年或有重大變更作業時重新進行作業環境監測",
        reassess: "重新評估"
      },
      viewResults: "查看評估結果"
    },
    // Calculator
    calculator: {
      badge: "合規試算",
      title: "企業合規需求試算器",
      description: "輸入您的企業資訊，快速了解職業健康法規要求與預估成本",
      inputTitle: "輸入企業資訊",
      employeeCount: "員工人數",
      employeePlaceholder: "請輸入員工人數",
      industryType: "行業類別",
      selectIndustry: "選擇行業類別",
      hasSpecialHazards: "有特別危害健康作業（噪音、化學物質、輻射等）",
      resultsTitle: "合規需求結果",
      industries: {
        general: "一般行業",
        manufacturing: "製造業",
        construction: "營造業",
        chemical: "化學工業",
        mining: "礦業"
      },
      requirements: {
        fullTimeNurse: "專職護理人員",
        onSiteService: "臨場健康服務",
        occupationalMedicine: "職業醫學專科醫師",
        safetyPersonnel: "職業安全衛生人員",
        contractDoctor: "特約醫師最低臨場服務頻率"
      },
      specialHazardCount: "從事特別危害健康作業人數",
      specialHazardDoctorCount: "影響醫師服務頻率的特別危害健康作業從事人員人數",
      specialHazardNurseCount: "影響護理人員配置的特別危害健康作業從事人員人數",
      doctorFrequencyCard: "醫師臨場服務頻率設定",
      nurseAllocationCard: "護理人員配置設定",
      doctorFrequencyNote: "此分類影響職業醫學科專科醫師服務頻率（附表二）",
      nurseAllocationNote: "此分類影響專職護理人員配置要求（附表三）",
      dualCardExplanation: "說明：特別危害健康作業包括噪音、化學物質、輻射、高溫、粉塵等作業。兩個設定可以獨立選擇，分別對應不同的法規要求。",
      selectHazardRange: "選擇特別危害健康作業人數範圍",
      selectDoctorHazardRange: "選擇影響醫師服務頻率的人數範圍",
      selectNurseHazardRange: "選擇影響護理人員配置的人數範圍",
      hazardRanges: {
        "0-99": "0-99人",
        "100-299": "100-299人", 
        "300+": "300人以上"
      },
      doctorHazardRanges: {
        "50-99": "50-99人",
        "100+": "100人以上"
      },
      specialHazardOptions: {
        doctor5099: {
          title: "特別危害健康作業 50-99人",
          subtitle: "職業醫學科專科醫師：1次/4個月"
        },
        doctor100plus: {
          title: "特別危害健康作業 100人以上",
          subtitle: "職業醫學科專科醫師：1次/月"
        }
      },
      nurseHazardRanges: {
        "0-99": "0-99人",
        "100-299": "100-299人", 
        "300+": "300人以上"
      },
      contractDoctor: {
        frequency: {
          monthly: "1次/月",
          bimonthly: "1次/2個月",
          quarterly: "1次/3個月",
          twoTimesMonthly: "2次/月",
          threeTimesMonthly: "3次/月",
          fourTimesMonthly: "4次/月",
          fiveTimesMonthly: "5次/月",
          sixTimesMonthly: "6次/月",
          sevenTimesMonthly: "7次/月",
          nineTimesMonthly: "9次/月",
          twelveTimesMonthly: "12次/月",
          fifteenTimesMonthly: "15次/月",
          fullTimeOrEighteen: "專任職業醫學科專科醫師一人或18次/月",
          specialHazard50to99: "1次/4個月（特別危害健康作業50-99人）",
          specialHazard100plus: "1次/月（特別危害健康作業100人以上）"
        },
        doctorType: {
          contractDoctor: "特約醫師",
          occupationalMedicine: "職業醫學科專科醫師",
          fullTimeSpecialist: "專任職業醫學科專科醫師"
        },
        specialHazardNote: "特別危害健康作業適用",
        timesPerMonth: "次/月"
      },
      nurseRequired: "需配置 {count} 名專職護理人員",
      nurseNotRequired: "不需專職設置",
      serviceNotRequired: "50人以下可視需要辦理",
      needsFullTimeDoctor: "需專任醫師",
      needsOccupationalMedicine: "需職業醫學科專科醫師",
      costEstimate: "預估每月成本範圍",
      costDisclaimer: "*實際費用依服務內容與廠商而異",
      enterEmployeeCount: "請輸入員工人數以查看合規需求",
      inputDescription: "輸入您的企業資訊以獲得精確的合規建議",
      resultsDescription: "根據您的資訊生成的合規要求分析",
      employeeUnit: "名員工",
      personUnit: "人",
      stats: {
        industryTypes: "行業類型",
        employeeScales: "員工規模等級",
        instantResults: "計算結果"
      },
      complianceTables: {
        title: "法規表格選擇",
        description: "請選擇要查看的法規表格，了解不同的合規要求",
        appendix2Description: "附表二規定醫師臨場健康服務的頻率要求，依據事業分級和特別危害健康作業人數決定",
        appendix3Description: "附表三規定護理人員的配置要求，依據總員工數和特別危害健康作業人數決定",
        appendix2Reference: "勞工健康保護規則附表二",
        appendix3Reference: "勞工健康保護規則附表三"
      },
      safetyRoles: {
        employer: "可由雇主或代理人擔任",
        class1: {
          "30to99": "乙種職業安全衛生業務主管1人",
          "100to299": "甲種職業安全衛生業務主管1人、職業安全衛生管理員1人（專職）",
          "300to499": "甲種職業安全衛生業務主管1人、職業安全(衛生)管理師1人、職業安全衛生管理員2人",
          "500plus": "甲種職業安全衛生業務主管1人、職業安全(衛生)管理師與職業安全衛生管理員各2人以上"
        },
        class2: {
          "30to99": "乙種職業安全衛生業務主管1人",
          "100to299": "甲種職業安全衛生業務主管1人",
          "300to499": "甲種職業安全衛生業務主管1人、職業安全衛生管理員1人（專職）",
          "500plus": "甲種職業安全衛生業務主管1人、職業安全(衛生)管理師及職業安全衛生管理員各2人以上"
        },
        class3: {
          "30to99": "乙種職業安全衛生業務主管1人",
          "100to299": "甲種職業安全衛生業務主管1人",
          "300to499": "甲種職業安全衛生業務主管1人",
          "500plus": "甲種職業安全衛生業務主管1人、職業安全衛生管理員各2人以上"
        }
      },
      interactiveTable: {
        businessClass: "事業分級",
        employeeRange: "員工人數範圍",
        serviceFrequency: "臨場服務頻率",
        personnelRequirement: "護理人員配置",
        specialHazardRange: "特別危害健康作業人數",
        notes: "備註",
        appendix2Title: "附表二：醫師臨場服務頻率表",
        appendix2Description: "從事勞工健康服務之醫師人力配置及臨場服務頻率",
        appendix3Title: "附表三：護理人員配置表",
        appendix3Description: "從事勞工健康服務之護理人員人力配置",
        totalRows: "總計",
        matchingRows: "符合條件",
        highlightedRow: "符合條件的行",
        clickToSelect: "點擊選擇"
      },
      inputForm: {
        emptyError: "請輸入特別危害健康作業人數",
        invalidNumberError: "請輸入有效的數字",
        exceedsEmployeeCountError: "不能超過總員工數 {total} 人",
        appendix2HighRiskSuggestion: "100人以上需要每月臨場服務",
        monthlyServiceRequired: "建議安排每月至少1次醫師臨場服務",
        appendix2MediumRiskSuggestion: "50-99人需要定期臨場服務",
        quarterlyServiceRequired: "建議安排每4個月至少1次醫師臨場服務",
        appendix3HighRiskSuggestion: "300人以上需要額外護理人員",
        additionalNurseRequired: "建議增設專職護理人員",
        appendix3MediumRiskSuggestion: "100人以上需要護理人員配置",
        nurseRequired: "建議配置專職護理人員",
        validInput: "輸入值符合法規要求",
        doctorFrequencyLabel: "醫師臨場服務頻率設定",
        doctorFrequencyDescription: "設定影響醫師服務頻率的特別危害健康作業人數",
        doctorFrequencyPlaceholder: "請輸入從事特別危害健康作業的人數",
        appendix2Reference: "勞工健康保護規則附表二",
        nurseAllocationLabel: "護理人員配置設定",
        nurseAllocationDescription: "設定影響護理人員配置的特別危害健康作業人數",
        nurseAllocationPlaceholder: "請輸入從事特別危害健康作業的人數",
        appendix3Reference: "勞工健康保護規則附表三",
        legalBasis: "法規依據",
        specialHazardCount: "特別危害健康作業人數",
        smartSuggestions: "智能建議",
        suggestion50People: "50人",
        suggestion100People: "100人",
        suggestion300People: "300人",
        suggestion500People: "500人",
        inputProgress: "輸入進度",
        helpTitle: "輸入說明",
        helpDescription: "請輸入從事特別危害健康作業的員工人數，系統將根據法規自動計算相應的合規要求。",
        totalEmployeesNote: "總員工數：{total}人",
        inputInstructions: {
          employeeCount: "員工人數：填寫貴公司總員工人數",
          businessLevel: "事業分級：根據行業風險程度選擇（可使用上方分級工具）",
          specialHazard: "特別危害健康作業：如有噪音、化學物質、輻射等作業請勾選"
        }
      },
      resultsPreview: {
        title: "合規需求預覽",
        description: "根據您的輸入生成的法規要求摘要",
        noResults: "暫無結果",
        noResultsDescription: "請完成輸入以查看合規要求預覽",
        viewFullResults: "查看完整結果",
        appendix2Title: "醫師臨場服務",
        appendix3Title: "護理人員配置",
        serviceFrequency: "服務頻率要求",
        nursingPersonnel: "人員配置要求",
        peopleUnit: "人",
        notRequired: "無需配置",
        active: "啟用",
        legalReference: "法規依據",
        serviceSchedule: "服務排程",
        personnelDetails: "人員詳情",
        fullTimeNurseRequired: "需配置 {count} 名專職護理人員",
        importantNote: "重要提醒",
        importantNoteDescription: "以上結果僅供參考，實際合規要求請以最新法規公告為準。建議諮詢專業顧問確認具體實施方案。",
        nextSteps: "下一步建議",
        nextStepsDescription: "查看詳細的合規分析報告，包含成本估算、廠商推薦等完整資訊。",
        viewDetailedAnalysis: "查看詳細分析"
      },
      legalNotes: {
        title: "法規備註",
        subtitle: "重要法規條文說明",
        over6000Rule: {
          title: "超過6,000人增加標準",
          content: "勞工人數超過6,000人者，每增勞工1,000人，應依下列標準增加其從事勞工健康服務之醫師臨場服務頻率：",
          categories: {
            class1: "第一類事業：3次/月",
            class2: "第二類事業：2次/月", 
            class3: "第三類事業：1次/月"
          }
        },
        serviceTimeRule: {
          title: "臨場服務時間規定",
          content: "每次臨場服務之時間，應至少3小時以上。"
        },
        specialHazardRule: {
          title: "特別危害健康作業規定",
          content: "從事特別危害健康作業勞工，不論事業分級，均需職業醫學科專科醫師提供臨場服務。"
        },
        legalBasis: "法規依據：勞工健康保護規則"
      },
      errorMessages: {
        confirmEmployeeAndLevel: "請確認員工人數和事業分級",
        calculationError: "計算錯誤，請重新輸入",
        calculationErrorShort: "計算錯誤",
        pleaseReselect: "請重新選擇"
      },
      placeholders: {
        selectSpecialHazardType: "請選擇特別危害健康作業人數類型",
        selectNurseAllocationCount: "請選擇影響護理人員配置的人數"
      },
      noSpecialHazardThreshold: "職業醫學科專科醫師服務頻率：0次，未達門檻",
      noSpecialHazardDisplay: "0次（未達門檻）",
      specialHazardRequirement: "說明：50人以上特別危害健康作業才需要",
      specialHazardMinimum: "50人以上特別危害健康作業才需要"
    },
    // Vendors
    vendors: {
      badge: "成本與廠商",
      title: "合格服務商哪裡找？",
      description: "選擇經勞動部認可的合格機構，確保服務品質與法規合規",
      tiers: {
        medical: "醫療機構",
        professional: "專業機構",
        consultant: "顧問公司"
      },
      tierDescs: {
        medical: "具備醫療機構執照的醫院或診所",
        professional: "經勞動部認可的勞工健康服務機構",
        consultant: "提供整合性職業健康管理服務"
      },
      badges: {
        highest: "最高等級",
        recommended: "推薦選擇",
        flexible: "彈性選擇"
      },
      features: {
        specialistDoctor: "專任職業醫學科醫師",
        completeHealthCheck: "完整健康檢查服務",
        medicalFollowup: "醫療後續處置能力",
        qualityAssurance: "較高的服務品質保證",
        qualifiedStaff: "合格的職業醫師與護理師",
        standardProcess: "標準化服務流程",
        regularService: "定期臨場服務",
        healthConsulting: "健康管理諮詢",
        customSolution: "客製化方案設計",
        legalConsulting: "法規諮詢服務",
        training: "人員教育訓練",
        staffMatching: "協助媒合醫護人員"
      },
      suitable: {
        large: "大型企業、高風險行業",
        medium: "中型企業、一般行業",
        planning: "需要整體規劃的企業"
      },
      suitableFor: "適合對象",
      costTitle: "服務費用參考",
      costDescription: "各項健康服務的市場參考價格",
      resourcesTitle: "官方資源連結",
      resourcesDescription: "官方認證機構與相關資源連結",
      stats: {
        serviceLevels: "服務等級",
        serviceItems: "服務項目", 
        certifiedInstitutions: "認證機構"
      },
      costTable: {
        service: "服務項目",
        cost: "費用範圍（月）",
        note: "備註",
        doctorService: "臨場健康服務（醫師）",
        nurseService: "臨場健康服務（護理師）",
        fullTimeNurse: "專職護理人員",
        generalHealthCheck: "一般健康檢查",
        specialHealthCheck: "特殊健檢（噪音）",
        perVisit: "每次約2-4小時",
        per4Hours: "每次約4小時",
        fullTimeSalary: "全職薪資+福利",
        dependsOnItems: "依檢查項目而定",
        freeSubsidy: "免費（勞保補助）",
        qualificationRequired: "需符合資格申請",
        perTime: "次",
        perPerson: "人"
      },
      resources: {
        osha: "勞動部職業安全衛生署",
        oshaDesc: "查詢認可機構名單與法規",
        healthService: "勞工健康服務網路平台",
        healthServiceDesc: "尋找合格服務機構",
        laborInsurance: "勞保局",
        laborInsuranceDesc: "申請特殊健檢補助"
      }
    },
    // Footer
    footer: {
      title: "台灣職場健康",
      description: "協助企業了解職業安全衛生法規要求，打造健康安全的工作環境。",
      regulations: "相關法規",
      disclaimer: "本網站僅供參考，實際法規要求請以政府公告為準",
      copyright: "台灣職場健康管理資訊平台",
      laws: {
        oshAct: "職業安全衛生法",
        healthRules: "勞工健康保護規則",
        managementRules: "職業安全衛生管理辦法"
      }
    },
    // Common
    common: {
      loading: "載入中...",
      error: "發生錯誤",
      success: "成功",
      cancel: "取消",
      confirm: "確認"
    },
    // 404 Page
    notFound: {
      title: "404",
      message: "糟糕！找不到頁面",
      backHome: "返回首頁"
    }
  },
  "zh-CN": {
    // Navigation
    nav: {
      title: "台湾职场健康",
      requirements: "法规要求",
      riskAssessment: "风险评估",
      calculator: "合规试算",
      vendors: "厂商信息",
      startCalculation: "立即试算"
    },
    // Hero Section
    hero: {
      badge: "职业安全卫生法 合规指南",
      title: "台湾职场健康管理",
      subtitle: "企业合规一站式服务",
      description: "根据《职业安全卫生法》与《劳工健康保护规则》，协助企业快速了解法规要求，计算合规成本，找到合格职业安全卫生服务商。",
      startButton: "立即试算合规需求",
      requirementsButton: "查看法规要求",
      stats: {
        nurses: "员工需设置护理人员",
        healthService: "员工需临场健康服务",
        subsidy: "特殊危害劳保补助"
      }
    },
    // Requirements Section
    requirements: {
      badge: "职业安全卫生法 第22条 & 劳工健康保护规则",
      title: "医护人员配置法规要求",
      description: "根据《职业安全卫生法》第22条及《劳工健康保护规则》第3-6条，不同规模事业单位需配置相应的职业健康人员",
      
      // New structure for medical personnel requirements
      medicalPersonnel: {
        stats: {
          configTypes: "配置情况类型",
          minThreshold: "最低人数门槛",
          employmentThreshold: "雇用门槛人数"
        },
        categories: {
          small: {
            title: "50-299人事业单位",
            subtitle: "劳工健康保护规则第4条",
            employeeRange: "50-299人",
            lawReference: "劳工健康保护规则第4条"
          },
          medium: {
            title: "300人以上事业单位", 
            subtitle: "劳工健康保护规则第3条",
            employeeRange: "300人以上",
            lawReference: "劳工健康保护规则第3条"
          },
          specialHazard: {
            title: "特别危害健康作业",
            subtitle: "50人以上特殊规定", 
            employeeRange: "特殊作业50人以上",
            lawReference: "劳工健康保护规则第3条"
          },
          consultant: {
            title: "委托顾问机构",
            subtitle: "劳工健康保护规则第13条",
            employeeRange: "特定情况适用", 
            lawReference: "劳工健康保护规则第13条及附表七"
          }
        },
        requirements: {
          contractDoctor: {
            title: "特约医师",
            desc: "依附表四频率提供临场健康服务",
            detail: "视事业规模性质决定服务频率"
          },
          contractNurse: {
            title: "特约护理人员", 
            desc: "配合医师提供健康服务",
            detail: "毋须雇用，以特约方式即可"
          },
          noFullTime: {
            title: "专职人员",
            desc: "不需设置专职医护人员", 
            detail: "特约方式即符合法规要求"
          },
          employNurse: {
            title: "雇用护理人员",
            desc: "应雇用从事劳工健康服务之护理人员",
            detail: "必须为正式雇用关系"
          },
          employOrContractDoctor: {
            title: "雇用或特约医师",
            desc: "雇用或特约从事劳工健康服务之医师", 
            detail: "可选择雇用或特约方式"
          },
          healthService: {
            title: "办理劳工健康服务",
            desc: "完整的劳工健康服务计划",
            detail: "包含健检、管理、促进等服务"
          },
          specialEmployNurse: {
            title: "雇用护理人员",
            desc: "从事特别危害健康作业劳工50人以上",
            detail: "不论总员工数，特殊作业达50人即需雇用"
          },
          specialDoctor: {
            title: "雇用或特约医师", 
            desc: "提供特殊健康管理服务",
            detail: "熟悉特别危害健康作业之医师"
          },
          specialExam: {
            title: "特殊健康检查",
            desc: "定期特殊健康检查与管理",
            detail: "依危害物质种类决定检查频率"
          },
          secondThirdClass: {
            title: "第二、三类事业",
            desc: "工作场所分布不同地区", 
            detail: "符合附表七规定之事业单位"
          },
          approvedConsultant: {
            title: "认可顾问机构",
            desc: "委由中央主管机关认可机构",
            detail: "劳工健康顾问服务类机构"
          },
          qualifiedPersonnel: {
            title: "符合资格医护",
            desc: "指派符合资格医护人员", 
            detail: "办理临场健康服务"
          }
        },
        keyPoints: {
          title: "重要法规要点",
          subtitle: "关键判断标准",
          points: {
            employeeVsSpecial: {
              title: "员工总数 vs 特殊作业人数",
              desc: "300人以上事业单位：需雇用护理人员\n特殊作业50人以上：不论总人数，需雇用护理人员",
              note: "两个条件任一符合即需雇用"
            },
            employVsContract: {
              title: "雇用 vs 特约差异", 
              desc: "50-299人：护理人员可特约，毋须雇用\n300人以上：护理人员必须雇用，医师可雇用或特约",
              note: "雇用关系较特约关系更严格"
            },
            consultantConditions: {
              title: "委托顾问机构条件",
              desc: "第二、三类事业单位且工作场所分布不同地区\n劳工提供劳务场所非于雇主设施内或其可支配管理者", 
              note: "需符合特定条件才可委托"
            }
          }
        },
        common: {
          applicableScope: "适用范围",
          lawBasis: "法规依据",
          importanceIndicator: "重要性指标"
        }
      },
      employeeRanges: {
        "50-299": "50-299人",
        "300-499": "300-499人", 
        "500-999": "500-999人",
        "1000+": "1000人以上"
      },
      services: {
        onSiteHealth: "临场健康服务",
        healthManagement: "健康管理",
        fullTimeNurse: "专职护理师",
        fullTimeNurseRequired: "专职护理人员",
        healthPlan: "健康管理计划",
        riskAssessment: "健康风险评估",
        fullTimeDoctor: "专任医师",
        healthUnit: "健康服务单位"
      },
      descriptions: {
        onSiteFrequency: "依事业分级每1-3个月1次",
        healthCheck: "员工健康检查与分级管理",
        notRequired: "不需专职设置",
        nurseRequired: "劳工300人以上需设置1名",
        doctorService: "劳工健康服务医师",
        writtenPlan: "完整书面健康管理计划",
        nurseIncrease: "劳工500人以上每增300人增设1名",
        increaseFrequency: "增加医师临场频率",
        systematicRisk: "系统化风险管理",
        doctorRequired: "3000人以上需专任医师",
        nurseRatio: "每300人设置1名",
        healthServiceUnit: "设置劳工健康服务单位",
        doctorOrGraded: "专任医师或依分级办理"
      },
      responsibilities: {
        title: "雇主法定责任",
        healthExam: {
          title: "健康检查",
          desc: "雇用前健康检查、定期健康检查（40岁以下每3年1次，40岁以上每年1次，65岁以上每年1次）、特殊健康检查"
        },
        healthMgmt: {
          title: "健康管理", 
          desc: "健检结果四级分级管理、异常个案追踪辅导、工作适性评估、复工适性评估"
        },
        healthPromotion: {
          title: "健康促进",
          desc: "职场健康促进活动、人因性危害预防、异常工作负荷促发疾病预防、职场暴力预防"
        }
      },
      specialHazard: {
        title: "特别危害健康作业特殊规定",
        rules: [
          "从事特别危害健康作业劳工人数达100人以上者，应增设专职护理人员1名",
          "特别危害健康作业不论事业分级，临场健康服务频率皆为每月至少1次",
          "特殊健康检查频率依危害物质种类而定（每6个月至2年1次不等）",
          "作业环境监测结果超过容许浓度时，应立即改善并增加健康检查频率"
        ]
      }
    },
    // Business Classification
    businessClass: {
      badge: "事业分级制度",
      title: "临场健康服务频率依事业分级决定",
      description: "依据《劳工健康保护规则》附表二，事业单位依行业别及灾害风险分为三级，决定临场健康服务频率",
      stats: {
        businessLevels: "事业分级",
        maxServiceFrequency: "最高服务次数/年",
        riskCoverage: "风险覆盖率"
      },
      levels: {
        first: "第一类",
        second: "第二类", 
        third: "第三类"
      },
      riskTypes: {
        high: "高风险事业",
        medium: "中风险事业",
        low: "低风险事业"
      },
      frequencies: {
        monthly: "每月至少1次",
        bimonthly: "每2个月至少1次",
        quarterly: "每3个月至少1次"
      },
      industries: {
        construction: "营造业",
        metalManufacturing: "制造业（金属、化学）",
        mining: "矿业",
        petrochemical: "石油化学工业",
        foodManufacturing: "制造业（食品、纺织）",
        transportation: "运输业",
        warehousing: "仓储业",
        agriculture: "农林渔牧业",
        finance: "金融保险业",
        realEstate: "不动产业",
        professional: "专业服务业",
        retail: "批发零售业"
      },
      serviceFrequency: "临场服务频率",
      industryExamples: "行业范例",
      labels: {
        riskLevel: "风险等级",
        serviceDensity: "服务密度",
        timesPerYear: "次/年",
        comparisonChart: "事业分级比较图表",
        comparisonDescription: "不同事业分级的风险程度与服务频率对比分析",
        importantReminders: "重要提醒事项"
      },
      reminder: {
        title: "重要提醒",
        points: [
          "事业分级依据《劳工健康保护规则》附表二认定",
          "同一事业单位如有多种行业，以风险最高者为准",
          "从事特别危害健康作业者，不论事业分级皆需每月至少1次临场服务",
          "劳工健康服务医师须具备职业医学专科医师或相关训练资格"
        ]
      },
      // Industry Classification Tool
      classificationTool: {
        title: "不知道您的事业分级？",
        subtitle: "选择您的行业类别，我们帮您判定事业分级",
        selectIndustry: "请选择您的主要行业类别",
        searchPlaceholder: "搜索行业类别...",
        result: {
          title: "您的事业分级结果",
          classification: "事业分级：",
          frequency: "临场服务频率：",
          riskLevel: "风险等级：",
          description: "根据您选择的行业，系统判定结果如下："
        },
        industries: {
          // 第一级 - 高风险
          mining: "矿业及土石采取业",
          manufacturing_metal: "金属制品制造业",
          manufacturing_chemical: "化学材料制造业",
          manufacturing_petroleum: "石油及煤制品制造业",
          manufacturing_machinery: "机械设备制造业",
          construction: "营造业",
          electricity: "电力及燃气供应业",
          waste_management: "废弃物清理业",
          environmental_services: "环境卫生及病媒防治业",
          
          // 第二级 - 中风险  
          agriculture: "农、林、渔、牧业",
          manufacturing_food: "食品制造业",
          manufacturing_textile: "纺织业",
          manufacturing_wood: "木竹制品制造业",
          manufacturing_paper: "纸浆、纸及纸制品制造业",
          manufacturing_rubber: "橡胶制品制造业",
          manufacturing_glass: "玻璃及其制品制造业",
          manufacturing_pharmaceutical: "药品及医用化学制品制造业",
          transportation: "运输及仓储业",
          postal: "邮政及快递业",
          accommodation: "住宿及餐饮业",
          healthcare: "医疗保健及社会工作服务业",
          
          // 第三级 - 低风险
          wholesale_retail: "批发及零售业",
          information: "信息及通讯传播业",
          finance: "金融及保险业",
          real_estate: "不动产业",
          professional: "专业、科学及技术服务业",
          support_services: "支援服务业",
          public_admin: "公共行政及国防事务",
          education: "教育业",
          arts: "艺术、娱乐及休闲服务业",
          other_services: "其他服务业"
        },
        categories: {
          first: "第一类（高风险）",
          second: "第二类（中风险）", 
          third: "第三类（低风险）"
        },
        reset: "重新选择",
        close: "关闭",
        
        // 新增：企业合规需求试算器的翻译
        complianceCalculator: {
          title: "企业合规需求试算器",
          inputTitle: "输入企业信息",
          resultsTitle: "合规需求结果",
          noSpecialHazards: "无特别危害健康作业",
          hasSpecialHazards: "有特别危害健康作业",
          specialHazardCount: "从事特别危害健康作业人数",
          selectHazardRange: "选择特别危害健康作业人数范围",
          hazardRanges: {
            "0-99": "0-99人",
            "100-299": "100-299人", 
            "300+": "300人以上"
          }
        },
        
        // 新增：事业分级判定工具的翻译
        startClassification: "开始判定"
      }
    },
    // Risk Assessment
    riskAssessment: {
      badge: "风险评估",
      title: "特别危害健康作业评估",
      description: "回答几个简单问题，了解您是否有特别危害健康作业，以及可享有的劳保补助",
      stats: {
        hazardTypes: "危害作业类型",
        assessmentSteps: "评估步骤",
        accuracy: "准确度"
      },
      question: "您的事业单位是否有以下特别危害健康作业？",
      subtitle: "依《劳工健康保护规则》附表一，从事特别危害健康作业者需接受特殊健康检查",
      hazards: {
        noise: "噪音作业",
        radiation: "游离辐射作业", 
        chemical: "有机溶剂作业",
        lead: "铅作业",
        dust: "粉尘作业",
        heat: "高温作业",
        asbestos: "石棉作业",
        vinyl: "氯乙烯作业",
        chromium: "六价铬化合物作业",
        benzene: "苯作业",
        formaldehyde: "甲醛作业",
        vibration: "局部振动作业"
      },
      hazardDescs: {
        noise: "时量平均音压级85分贝以上",
        radiation: "X光、放射性物质等作业",
        chemical: "甲苯、二甲苯等有机溶剂",
        lead: "铅及其化合物作业",
        dust: "石棉、矽砂等粉尘作业",
        heat: "WBGT值超过28°C作业",
        asbestos: "石棉纤维暴露作业",
        vinyl: "氯乙烯单体暴露作业",
        chromium: "六价铬化合物暴露作业",
        benzene: "苯及其化合物暴露作业",
        formaldehyde: "甲醛暴露作业",
        vibration: "手持振动工具作业"
      },
      noHazardInfo: "没有选择任何项目？仍可继续，我们会提供一般职业健康管理建议。",
      nextStep: "下一步",
      noiseDetail: {
        title: "噪音作业详细评估",
        subtitle: "请回答以下问题以确认合规状态",
        hasMonitoring: "是否已安排作业环境监测？",
        hasReport: "是否有监测报告？",
        over85TWA: "时量平均音压级是否超过 85 dB(A) TWA？",
        yes: "是",
        no: "否",
        yesOver85: "是，超过85分贝",
        noUnder85: "否，未超过85分贝"
      },
      results: {
        title: "风险评估完成",
        needsSpecialExam: "需要特别危害健康作业健康检查",
        needsSpecialExamDesc: "依据您的回答，贵公司员工需接受特殊健康检查",
        subsidyAvailable: "可申请劳保局补助",
        subsidyDesc: "噪音作业特殊健康检查可向劳保局申请补助，免费进行检查！",
        subsidyLink: "了解更多劳保局补助信息 →",
        selectedHazards: "您选择的危害作业：",
        noSpecialHazard: "暂无特别危害健康作业",
        noSpecialHazardDesc: "依据您的回答，目前不需要特殊健康检查，但仍需执行一般健康管理",
        needMonitoring: "需要进行作业环境监测",
        needMonitoringDesc: "请依照认可之作业环境监测机构咨询作业环境监测",
        monitoringLink: "查看认可监测机构名单 →",
        continueObservation: "持续观察",
        continueObservationDesc: "未超过85分贝，建议视情况2-3年或有重大变更作业时重新进行作业环境监测",
        reassess: "重新评估"
      },
      viewResults: "查看评估结果"
    },
    // Calculator
    calculator: {
      badge: "合规试算",
      title: "企业合规需求试算器",
      description: "输入您的企业信息，快速了解职业健康法规要求与预估成本",
      inputTitle: "输入企业信息",
      employeeCount: "员工人数",
      employeePlaceholder: "请输入员工人数",
      industryType: "行业类别",
      selectIndustry: "选择行业类别",
      hasSpecialHazards: "有特别危害健康作业（噪音、化学物质、辐射等）",
      resultsTitle: "合规需求结果",
      industries: {
        general: "一般行业",
        manufacturing: "制造业",
        construction: "营造业",
        chemical: "化学工业",
        mining: "矿业"
      },
      requirements: {
        fullTimeNurse: "专职护理人员",
        onSiteService: "临场健康服务",
        occupationalMedicine: "职业医学专科医师",
        safetyPersonnel: "职业安全卫生人员",
        contractDoctor: "特约医师最低临场服务频率"
      },
      specialHazardCount: "从事特别危害健康作业人数",
      specialHazardDoctorCount: "影响医师服务频率的特别危害健康作业从事人员人数",
      specialHazardNurseCount: "影响护理人员配置的特别危害健康作业从事人员人数",
      doctorFrequencyCard: "医师临场服务频率设定",
      nurseAllocationCard: "护理人员配置设定",
      doctorFrequencyNote: "此分类影响职业医学科专科医师服务频率（附表二）",
      nurseAllocationNote: "此分类影响专职护理人员配置要求（附表三）",
      dualCardExplanation: "说明：特别危害健康作业包括噪音、化学物质、辐射、高温、粉尘等作业。两个设定可以独立选择，分别对应不同的法规要求。",
      selectHazardRange: "选择特别危害健康作业人数范围",
      selectDoctorHazardRange: "选择影响医师服务频率的人数范围",
      selectNurseHazardRange: "选择影响护理人员配置的人数范围",
      hazardRanges: {
        "0-99": "0-99人",
        "100-299": "100-299人", 
        "300+": "300人以上"
      },
      doctorHazardRanges: {
        "50-99": "50-99人",
        "100+": "100人以上"
      },
      specialHazardOptions: {
        doctor5099: {
          title: "特别危害健康作业 50-99人",
          subtitle: "职业医学科专科医师：1次/4个月"
        },
        doctor100plus: {
          title: "特别危害健康作业 100人以上",
          subtitle: "职业医学科专科医师：1次/月"
        }
      },
      nurseHazardRanges: {
        "0-99": "0-99人",
        "100-299": "100-299人", 
        "300+": "300人以上"
      },
      contractDoctor: {
        frequency: {
          monthly: "1次/月",
          bimonthly: "1次/2个月",
          quarterly: "1次/3个月",
          twoTimesMonthly: "2次/月",
          threeTimesMonthly: "3次/月",
          fourTimesMonthly: "4次/月",
          fiveTimesMonthly: "5次/月",
          sixTimesMonthly: "6次/月",
          sevenTimesMonthly: "7次/月",
          nineTimesMonthly: "9次/月",
          twelveTimesMonthly: "12次/月",
          fifteenTimesMonthly: "15次/月",
          fullTimeOrEighteen: "专任职业医学科专科医师一人或18次/月",
          specialHazard50to99: "1次/4个月（特别危害健康作业50-99人）",
          specialHazard100plus: "1次/月（特别危害健康作业100人以上）"
        },
        doctorType: {
          contractDoctor: "特约医师",
          occupationalMedicine: "职业医学科专科医师",
          fullTimeSpecialist: "专任职业医学科专科医师"
        },
        specialHazardNote: "特别危害健康作业适用",
        timesPerMonth: "次/月"
      },
      nurseRequired: "需配置 {count} 名专职护理人员",
      nurseNotRequired: "不需专职设置",
      serviceNotRequired: "50人以下可视需要办理",
      needsFullTimeDoctor: "需专任医师",
      needsOccupationalMedicine: "需职业医学科专科医师",
      costEstimate: "预估每月成本范围",
      costDisclaimer: "*实际费用依服务内容与厂商而异",
      enterEmployeeCount: "请输入员工人数以查看合规需求",
      inputDescription: "输入您的企业信息以获得精确的合规建议",
      resultsDescription: "根据您的信息生成的合规要求分析",
      employeeUnit: "名员工",
      personUnit: "人",
      stats: {
        industryTypes: "行业类型",
        employeeScales: "员工规模等级",
        instantResults: "计算结果"
      },
      complianceTables: {
        title: "法规表格选择",
        description: "请选择要查看的法规表格，了解不同的合规要求",
        appendix2Description: "附表二规定医师临场健康服务的频率要求，依据事业分级和特别危害健康作业人数决定",
        appendix3Description: "附表三规定护理人员的配置要求，依据总员工数和特别危害健康作业人数决定",
        appendix2Reference: "劳工健康保护规则附表二",
        appendix3Reference: "劳工健康保护规则附表三"
      },
      safetyRoles: {
        employer: "可由雇主或代理人担任",
        class1: {
          "30to99": "乙种职业安全卫生业务主管1人",
          "100to299": "甲种职业安全卫生业务主管1人、职业安全卫生管理员1人（专职）",
          "300to499": "甲种职业安全卫生业务主管1人、职业安全(卫生)管理师1人、职业安全卫生管理员2人",
          "500plus": "甲种职业安全卫生业务主管1人、职业安全(卫生)管理师与职业安全卫生管理员各2人以上"
        },
        class2: {
          "30to99": "乙种职业安全卫生业务主管1人",
          "100to299": "甲种职业安全卫生业务主管1人",
          "300to499": "甲种职业安全卫生业务主管1人、职业安全卫生管理员1人（专职）",
          "500plus": "甲种职业安全卫生业务主管1人、职业安全(卫生)管理师及职业安全卫生管理员各2人以上"
        },
        class3: {
          "30to99": "乙种职业安全卫生业务主管1人",
          "100to299": "甲种职业安全卫生业务主管1人",
          "300to499": "甲种职业安全卫生业务主管1人",
          "500plus": "甲种职业安全卫生业务主管1人、职业安全卫生管理员各2人以上"
        }
      },
      interactiveTable: {
        businessClass: "事业分级",
        employeeRange: "员工人数范围",
        serviceFrequency: "临场服务频率",
        personnelRequirement: "护理人员配置",
        specialHazardRange: "特别危害健康作业人数",
        notes: "备注",
        appendix2Title: "附表二：医师临场服务频率表",
        appendix2Description: "从事劳工健康服务之医师人力配置及临场服务频率",
        appendix3Title: "附表三：护理人员配置表",
        appendix3Description: "从事劳工健康服务之护理人员人力配置",
        totalRows: "总计",
        matchingRows: "符合条件",
        highlightedRow: "符合条件的行",
        clickToSelect: "点击选择"
      },
      inputForm: {
        emptyError: "请输入特别危害健康作业人数",
        invalidNumberError: "请输入有效的数字",
        exceedsEmployeeCountError: "不能超过总员工数 {total} 人",
        appendix2HighRiskSuggestion: "100人以上需要每月临场服务",
        monthlyServiceRequired: "建议安排每月至少1次医师临场服务",
        appendix2MediumRiskSuggestion: "50-99人需要定期临场服务",
        quarterlyServiceRequired: "建议安排每4个月至少1次医师临场服务",
        appendix3HighRiskSuggestion: "300人以上需要额外护理人员",
        additionalNurseRequired: "建议增设专职护理人员",
        appendix3MediumRiskSuggestion: "100人以上需要护理人员配置",
        nurseRequired: "建议配置专职护理人员",
        validInput: "输入值符合法规要求",
        doctorFrequencyLabel: "医师临场服务频率设定",
        doctorFrequencyDescription: "设定影响医师服务频率的特别危害健康作业人数",
        doctorFrequencyPlaceholder: "请输入从事特别危害健康作业的人数",
        appendix2Reference: "劳工健康保护规则附表二",
        nurseAllocationLabel: "护理人员配置设定",
        nurseAllocationDescription: "设定影响护理人员配置的特别危害健康作业人数",
        nurseAllocationPlaceholder: "请输入从事特别危害健康作业的人数",
        appendix3Reference: "劳工健康保护规则附表三",
        legalBasis: "法规依据",
        specialHazardCount: "特别危害健康作业人数",
        smartSuggestions: "智能建议",
        suggestion50People: "50人",
        suggestion100People: "100人",
        suggestion300People: "300人",
        suggestion500People: "500人",
        inputProgress: "输入进度",
        helpTitle: "输入说明",
        helpDescription: "请输入从事特别危害健康作业的员工人数，系统将根据法规自动计算相应的合规要求。",
        totalEmployeesNote: "总员工数：{total}人",
        inputInstructions: {
          employeeCount: "员工人数：填写贵公司总员工人数",
          businessLevel: "事业分级：根据行业风险程度选择（可使用上方分级工具）",
          specialHazard: "特别危害健康作业：如有噪音、化学物质、辐射等作业请勾选"
        }
      },
      resultsPreview: {
        title: "合规需求预览",
        description: "根据您的输入生成的法规要求摘要",
        noResults: "暂无结果",
        noResultsDescription: "请完成输入以查看合规要求预览",
        viewFullResults: "查看完整结果",
        appendix2Title: "医师临场服务",
        appendix3Title: "护理人员配置",
        serviceFrequency: "服务频率要求",
        nursingPersonnel: "人员配置要求",
        peopleUnit: "人",
        notRequired: "无需配置",
        active: "启用",
        legalReference: "法规依据",
        serviceSchedule: "服务排程",
        personnelDetails: "人员详情",
        fullTimeNurseRequired: "需配置 {count} 名专职护理人员",
        importantNote: "重要提醒",
        importantNoteDescription: "以上结果仅供参考，实际合规要求请以最新法规公告为准。建议咨询专业顾问确认具体实施方案。",
        nextSteps: "下一步建议",
        nextStepsDescription: "查看详细的合规分析报告，包含成本估算、厂商推荐等完整信息。",
        viewDetailedAnalysis: "查看详细分析"
      },
      legalNotes: {
        title: "法规备注",
        subtitle: "重要法规条文说明",
        over6000Rule: {
          title: "超过6,000人增加标准",
          content: "劳工人数超过6,000人者，每增劳工1,000人，应依下列标准增加其从事劳工健康服务之医师临场服务频率：",
          categories: {
            class1: "第一类事业：3次/月",
            class2: "第二类事业：2次/月", 
            class3: "第三类事业：1次/月"
          }
        },
        serviceTimeRule: {
          title: "临场服务时间规定",
          content: "每次临场服务之时间，应至少3小时以上。"
        },
        specialHazardRule: {
          title: "特别危害健康作业规定",
          content: "从事特别危害健康作业劳工，不论事业分级，均需职业医学科专科医师提供临场服务。"
        },
        legalBasis: "法规依据：劳工健康保护规则"
      },
      errorMessages: {
        confirmEmployeeAndLevel: "请确认员工人数和事业分级",
        calculationError: "计算错误，请重新输入",
        calculationErrorShort: "计算错误",
        pleaseReselect: "请重新选择"
      },
      placeholders: {
        selectSpecialHazardType: "请选择特别危害健康作业人数类型",
        selectNurseAllocationCount: "请选择影响护理人员配置的人数"
      },
      noSpecialHazardThreshold: "职业医学科专科医师服务频率：0次，未达门槛",
      noSpecialHazardDisplay: "0次（未达门槛）",
      specialHazardRequirement: "说明：50人以上特别危害健康作业才需要",
      specialHazardMinimum: "50人以上特别危害健康作业才需要"
    },
    // Vendors
    vendors: {
      badge: "成本与厂商",
      title: "合格服务商哪里找？",
      description: "选择经劳动部认可的合格机构，确保服务品质与法规合规",
      tiers: {
        medical: "医疗机构",
        professional: "专业机构",
        consultant: "顾问公司"
      },
      tierDescs: {
        medical: "具备医疗机构执照的医院或诊所",
        professional: "经劳动部认可的劳工健康服务机构",
        consultant: "提供整合性职业健康管理服务"
      },
      badges: {
        highest: "最高等级",
        recommended: "推荐选择",
        flexible: "弹性选择"
      },
      features: {
        specialistDoctor: "专任职业医学科医师",
        completeHealthCheck: "完整健康检查服务",
        medicalFollowup: "医疗后续处置能力",
        qualityAssurance: "较高的服务品质保证",
        qualifiedStaff: "合格的职业医师与护理师",
        standardProcess: "标准化服务流程",
        regularService: "定期临场服务",
        healthConsulting: "健康管理咨询",
        customSolution: "客制化方案设计",
        legalConsulting: "法规咨询服务",
        training: "人员教育训练",
        staffMatching: "协助媒合医护人员"
      },
      suitable: {
        large: "大型企业、高风险行业",
        medium: "中型企业、一般行业",
        planning: "需要整体规划的企业"
      },
      suitableFor: "适合对象",
      costTitle: "服务费用参考",
      costDescription: "各项健康服务的市场参考价格",
      resourcesTitle: "官方资源链接",
      resourcesDescription: "官方认证机构与相关资源链接",
      stats: {
        serviceLevels: "服务等级",
        serviceItems: "服务项目", 
        certifiedInstitutions: "认证机构"
      },
      costTable: {
        service: "服务项目",
        cost: "费用范围（月）",
        note: "备注",
        doctorService: "临场健康服务（医师）",
        nurseService: "临场健康服务（护理师）",
        fullTimeNurse: "专职护理人员",
        generalHealthCheck: "一般健康检查",
        specialHealthCheck: "特殊健检（噪音）",
        perVisit: "每次约2-4小时",
        per4Hours: "每次约4小时",
        fullTimeSalary: "全职薪资+福利",
        dependsOnItems: "依检查项目而定",
        freeSubsidy: "免费（劳保补助）",
        qualificationRequired: "需符合资格申请",
        perTime: "次",
        perPerson: "人"
      },
      resources: {
        osha: "劳动部职业安全卫生署",
        oshaDesc: "查询认可机构名单与法规",
        healthService: "劳工健康服务网络平台",
        healthServiceDesc: "寻找合格服务机构",
        laborInsurance: "劳保局",
        laborInsuranceDesc: "申请特殊健检补助"
      }
    },
    // Footer
    footer: {
      title: "台湾职场健康",
      description: "协助企业了解职业安全卫生法规要求，打造健康安全的工作环境。",
      regulations: "相关法规",
      disclaimer: "本网站仅供参考，实际法规要求请以政府公告为准",
      copyright: "台湾职场健康管理信息平台",
      laws: {
        oshAct: "职业安全卫生法",
        healthRules: "劳工健康保护规则",
        managementRules: "职业安全卫生管理办法"
      }
    },
    // Common
    common: {
      loading: "加载中...",
      error: "发生错误",
      success: "成功",
      cancel: "取消",
      confirm: "确认"
    },
    // 404 Page
    notFound: {
      title: "404",
      message: "糟糕！找不到页面",
      backHome: "返回首页"
    }
  },
  "en": {
    // Navigation
    nav: {
      title: "Taiwan Workplace Health",
      requirements: "Regulatory Requirements",
      riskAssessment: "Risk Assessment",
      calculator: "Compliance Calculator",
      vendors: "Service Providers",
      startCalculation: "Start Calculation"
    },
    // Hero Section
    hero: {
      badge: "Occupational Safety and Health Act Compliance Guide",
      title: "Taiwan Workplace Health Management",
      subtitle: "One-Stop Enterprise Compliance Service",
      description: "Based on the Occupational Safety and Health Act and Labor Health Protection Rules, we help enterprises quickly understand regulatory requirements, calculate compliance costs, and find qualified occupational safety and health service providers.",
      startButton: "Start Compliance Assessment",
      requirementsButton: "View Regulatory Requirements",
      stats: {
        nurses: "employees require nursing staff",
        healthService: "employees need on-site health services",
        subsidy: "Free special hazard labor insurance subsidy"
      }
    },
    // Requirements Section
    requirements: {
      badge: "Occupational Safety and Health Act Article 22 & Labor Health Protection Rules",
      title: "Medical Personnel Deployment Regulatory Requirements",
      description: "According to Article 22 of the Occupational Safety and Health Act and Articles 3-6 of the Labor Health Protection Rules, different sized enterprises need to deploy corresponding occupational health personnel",
      
      // New structure for medical personnel requirements
      medicalPersonnel: {
        stats: {
          configTypes: "Configuration Types",
          minThreshold: "Minimum Employee Threshold",
          employmentThreshold: "Employment Threshold"
        },
        categories: {
          small: {
            title: "50-299 Employee Enterprises",
            subtitle: "Labor Health Protection Rules Article 4",
            employeeRange: "50-299 employees",
            lawReference: "Labor Health Protection Rules Article 4"
          },
          medium: {
            title: "300+ Employee Enterprises", 
            subtitle: "Labor Health Protection Rules Article 3",
            employeeRange: "300+ employees",
            lawReference: "Labor Health Protection Rules Article 3"
          },
          specialHazard: {
            title: "Special Hazardous Work",
            subtitle: "50+ Special Regulations", 
            employeeRange: "50+ in special work",
            lawReference: "Labor Health Protection Rules Article 3"
          },
          consultant: {
            title: "Consultant Institution Delegation",
            subtitle: "Labor Health Protection Rules Article 13",
            employeeRange: "Specific conditions apply", 
            lawReference: "Labor Health Protection Rules Article 13 & Appendix 7"
          }
        },
        requirements: {
          contractDoctor: {
            title: "Contract Physician",
            desc: "Provide on-site health services per Appendix 4 frequency",
            detail: "Service frequency determined by business scale and nature"
          },
          contractNurse: {
            title: "Contract Nursing Staff", 
            desc: "Provide health services in coordination with physician",
            detail: "No employment required, contract basis sufficient"
          },
          noFullTime: {
            title: "Full-time Personnel",
            desc: "No full-time medical personnel required", 
            detail: "Contract basis meets regulatory requirements"
          },
          employNurse: {
            title: "Employ Nursing Staff",
            desc: "Must employ nursing staff for occupational health services",
            detail: "Must be formal employment relationship"
          },
          employOrContractDoctor: {
            title: "Employ or Contract Physician",
            desc: "Employ or contract physician for occupational health services", 
            detail: "Can choose employment or contract basis"
          },
          healthService: {
            title: "Conduct Occupational Health Services",
            desc: "Complete occupational health service program",
            detail: "Includes health exams, management, promotion services"
          },
          specialEmployNurse: {
            title: "Employ Nursing Staff",
            desc: "50+ workers in special hazardous work",
            detail: "Regardless of total employees, 50+ in special work requires employment"
          },
          specialDoctor: {
            title: "Employ or Contract Physician", 
            desc: "Provide special health management services",
            detail: "Physician familiar with special hazardous work"
          },
          specialExam: {
            title: "Special Health Examinations",
            desc: "Regular special health examinations and management",
            detail: "Frequency determined by hazardous substance type"
          },
          secondThirdClass: {
            title: "Class 2 & 3 Enterprises",
            desc: "Workplaces distributed across different regions", 
            detail: "Enterprises meeting Appendix 7 requirements"
          },
          approvedConsultant: {
            title: "Approved Consultant Institution",
            desc: "Delegate to central authority approved institution",
            detail: "Occupational health consulting service institution"
          },
          qualifiedPersonnel: {
            title: "Qualified Medical Personnel",
            desc: "Assign qualified medical personnel", 
            detail: "Conduct on-site health services"
          }
        },
        keyPoints: {
          title: "Important Regulatory Points",
          subtitle: "Key Judgment Criteria",
          points: {
            employeeVsSpecial: {
              title: "Total Employees vs Special Work Count",
              desc: "300+ employee enterprises: Must employ nursing staff\n50+ in special work: Regardless of total, must employ nursing staff",
              note: "Either condition requires employment"
            },
            employVsContract: {
              title: "Employment vs Contract Differences", 
              desc: "50-299 employees: Nursing staff can be contracted, no employment required\n300+ employees: Nursing staff must be employed, physicians can be employed or contracted",
              note: "Employment relationship is stricter than contract"
            },
            consultantConditions: {
              title: "Consultant Institution Conditions",
              desc: "Class 2 & 3 enterprises with workplaces in different regions\nWorkers provide services outside employer facilities or management control", 
              note: "Must meet specific conditions for delegation"
            }
          }
        },
        common: {
          applicableScope: "Applicable Scope",
          lawBasis: "Legal Basis",
          importanceIndicator: "Importance Indicator"
        }
      },
      employeeRanges: {
        "50-299": "50-299 employees",
        "300-499": "300-499 employees", 
        "500-999": "500-999 employees",
        "1000+": "1000+ employees"
      },
      services: {
        onSiteHealth: "On-site Health Services",
        healthManagement: "Health Management",
        fullTimeNurse: "Full-time Nurse",
        fullTimeNurseRequired: "Full-time Nursing Staff",
        healthPlan: "Health Management Plan",
        riskAssessment: "Health Risk Assessment",
        fullTimeDoctor: "Full-time Doctor",
        healthUnit: "Health Service Unit"
      },
      descriptions: {
        onSiteFrequency: "Every 1-3 months based on business classification",
        healthCheck: "Employee health examinations and graded management",
        notRequired: "No full-time setup required",
        nurseRequired: "1 nurse required for 300+ employees",
        doctorService: "Occupational health physician services",
        writtenPlan: "Complete written health management plan",
        nurseIncrease: "1 additional nurse per 300 employees above 500",
        increaseFrequency: "Increase physician on-site frequency",
        systematicRisk: "Systematic risk management",
        doctorRequired: "Full-time doctor required for 3000+ employees",
        nurseRatio: "1 nurse per 300 employees",
        healthServiceUnit: "Establish occupational health service unit",
        doctorOrGraded: "Full-time doctor or graded management"
      },
      responsibilities: {
        title: "Employer Legal Responsibilities",
        healthExam: {
          title: "Health Examinations",
          desc: "Pre-employment health exams, regular health exams (every 3 years for under 40, annually for 40+, annually for 65+), special health exams"
        },
        healthMgmt: {
          title: "Health Management", 
          desc: "Four-tier graded management of health exam results, abnormal case follow-up, work suitability assessment, return-to-work assessment"
        },
        healthPromotion: {
          title: "Health Promotion",
          desc: "Workplace health promotion activities, ergonomic hazard prevention, abnormal workload disease prevention, workplace violence prevention"
        }
      },
      specialHazard: {
        title: "Special Hazardous Work Regulations",
        rules: [
          "Enterprises with 100+ employees in special hazardous work must add 1 full-time nursing staff",
          "Special hazardous work requires monthly on-site health services regardless of business classification",
          "Special health exam frequency depends on hazardous substance type (every 6 months to 2 years)",
          "When workplace monitoring exceeds permissible limits, immediate improvement and increased health exam frequency required"
        ]
      }
    },
    // Business Classification
    businessClass: {
      badge: "Business Classification System",
      title: "On-site Health Service Frequency by Business Classification",
      description: "According to Appendix 2 of Labor Health Protection Rules, enterprises are classified into three levels based on industry and disaster risk, determining on-site health service frequency",
      stats: {
        businessLevels: "Business Classifications",
        maxServiceFrequency: "Max Service Times/Year",
        riskCoverage: "Risk Coverage"
      },
      levels: {
        first: "Class 1",
        second: "Class 2", 
        third: "Class 3"
      },
      riskTypes: {
        high: "High-risk Business",
        medium: "Medium-risk Business",
        low: "Low-risk Business"
      },
      frequencies: {
        monthly: "At least once per month",
        bimonthly: "At least once every 2 months",
        quarterly: "At least once every 3 months"
      },
      industries: {
        construction: "Construction",
        metalManufacturing: "Manufacturing (Metal, Chemical)",
        mining: "Mining",
        petrochemical: "Petrochemical Industry",
        foodManufacturing: "Manufacturing (Food, Textile)",
        transportation: "Transportation",
        warehousing: "Warehousing",
        agriculture: "Agriculture, Forestry, Fishery",
        finance: "Finance & Insurance",
        realEstate: "Real Estate",
        professional: "Professional Services",
        retail: "Wholesale & Retail"
      },
      serviceFrequency: "On-site Service Frequency",
      industryExamples: "Industry Examples",
      labels: {
        riskLevel: "Risk Level",
        serviceDensity: "Service Density",
        timesPerYear: "times/year",
        comparisonChart: "Business Classification Comparison Chart",
        comparisonDescription: "Comparative analysis of risk levels and service frequencies across different business classifications",
        importantReminders: "Important Reminders"
      },
      reminder: {
        title: "Important Reminders",
        points: [
          "Business classification based on Appendix 2 of Labor Health Protection Rules",
          "For enterprises with multiple industries, highest risk level applies",
          "Special hazardous work requires monthly on-site services regardless of classification",
          "Occupational health physicians must have occupational medicine specialty or relevant training"
        ]
      },
      // Industry Classification Tool
      classificationTool: {
        title: "Don't know your business classification?",
        subtitle: "Select your industry category, we'll help determine your business classification",
        selectIndustry: "Please select your main industry category",
        searchPlaceholder: "Search industry categories...",
        result: {
          title: "Your Business Classification Result",
          classification: "Business Classification:",
          frequency: "On-site Service Frequency:",
          riskLevel: "Risk Level:",
          description: "Based on your selected industry, the system determination is as follows:"
        },
        industries: {
          // Level 1 - High Risk
          mining: "Mining and Quarrying",
          manufacturing_metal: "Metal Products Manufacturing",
          manufacturing_chemical: "Chemical Materials Manufacturing",
          manufacturing_petroleum: "Petroleum and Coal Products Manufacturing",
          manufacturing_machinery: "Machinery and Equipment Manufacturing",
          construction: "Construction",
          electricity: "Electricity and Gas Supply",
          waste_management: "Waste Management",
          environmental_services: "Environmental Sanitation and Pest Control",
          
          // Level 2 - Medium Risk  
          agriculture: "Agriculture, Forestry, Fishing and Animal Husbandry",
          manufacturing_food: "Food Manufacturing",
          manufacturing_textile: "Textile Manufacturing",
          manufacturing_wood: "Wood and Bamboo Products Manufacturing",
          manufacturing_paper: "Pulp, Paper and Paper Products Manufacturing",
          manufacturing_rubber: "Rubber Products Manufacturing",
          manufacturing_glass: "Glass and Glass Products Manufacturing",
          manufacturing_pharmaceutical: "Pharmaceutical and Medical Chemical Products Manufacturing",
          transportation: "Transportation and Storage",
          postal: "Postal and Courier Services",
          accommodation: "Accommodation and Food Services",
          healthcare: "Healthcare and Social Work Services",
          
          // Level 3 - Low Risk
          wholesale_retail: "Wholesale and Retail Trade",
          information: "Information and Communication",
          finance: "Financial and Insurance Activities",
          real_estate: "Real Estate Activities",
          professional: "Professional, Scientific and Technical Activities",
          support_services: "Administrative and Support Service Activities",
          public_admin: "Public Administration and Defence",
          education: "Education",
          arts: "Arts, Entertainment and Recreation",
          other_services: "Other Service Activities"
        },
        categories: {
          first: "Class 1 (High Risk)",
          second: "Class 2 (Medium Risk)", 
          third: "Class 3 (Low Risk)"
        },
        reset: "Reset Selection",
        close: "Close",
        
        // Added: Enterprise compliance requirements calculator translations
        complianceCalculator: {
          title: "Enterprise Compliance Requirements Calculator",
          inputTitle: "Enter Enterprise Information",
          resultsTitle: "Compliance Requirements Results",
          noSpecialHazards: "No Special Hazardous Work",
          hasSpecialHazards: "Has Special Hazardous Work",
          specialHazardCount: "Number of Workers in Special Hazardous Work",
          selectHazardRange: "Select Special Hazardous Work Employee Count Range",
          hazardRanges: {
            "0-99": "0-99 people",
            "100-299": "100-299 people", 
            "300+": "300+ people"
          }
        },
        
        // Added: Business classification determination tool translations
        startClassification: "Start Classification"
      }
    },
    // Risk Assessment
    riskAssessment: {
      badge: "Risk Assessment",
      title: "Special Hazardous Work Assessment",
      description: "Answer a few simple questions to understand if you have special hazardous work and available labor insurance subsidies",
      stats: {
        hazardTypes: "Hazard Work Types",
        assessmentSteps: "Assessment Steps",
        accuracy: "Accuracy"
      },
      question: "Does your enterprise have any of the following special hazardous work?",
      subtitle: "According to Appendix 1 of Labor Health Protection Rules, workers engaged in special hazardous work need special health examinations",
      hazards: {
        noise: "Noise Work",
        radiation: "Ionizing Radiation Work", 
        chemical: "Organic Solvent Work",
        lead: "Lead Work",
        dust: "Dust Work",
        heat: "High Temperature Work",
        asbestos: "Asbestos Work",
        vinyl: "Vinyl Chloride Work",
        chromium: "Hexavalent Chromium Work",
        benzene: "Benzene Work",
        formaldehyde: "Formaldehyde Work",
        vibration: "Local Vibration Work"
      },
      hazardDescs: {
        noise: "Time-weighted average sound pressure level above 85 dB",
        radiation: "X-ray, radioactive materials work",
        chemical: "Toluene, xylene and other organic solvents",
        lead: "Lead and lead compound work",
        dust: "Asbestos, silica dust work",
        heat: "WBGT value exceeding 28°C work",
        asbestos: "Asbestos fiber exposure work",
        vinyl: "Vinyl chloride monomer exposure work",
        chromium: "Hexavalent chromium compound exposure work",
        benzene: "Benzene and benzene compound exposure work",
        formaldehyde: "Formaldehyde exposure work",
        vibration: "Hand-held vibrating tool work"
      },
      noHazardInfo: "No items selected? You can still continue, we'll provide general occupational health management advice.",
      nextStep: "Next Step",
      noiseDetail: {
        title: "Detailed Noise Work Assessment",
        subtitle: "Please answer the following questions to confirm compliance status",
        hasMonitoring: "Have you arranged workplace environmental monitoring?",
        hasReport: "Do you have monitoring reports?",
        over85TWA: "Does the time-weighted average sound pressure level exceed 85 dB(A) TWA?",
        yes: "Yes",
        no: "No",
        yesOver85: "Yes, exceeds 85 dB",
        noUnder85: "No, under 85 dB"
      },
      results: {
        title: "Risk Assessment Complete",
        needsSpecialExam: "Special Hazardous Work Health Examination Required",
        needsSpecialExamDesc: "Based on your answers, your company employees need special health examinations",
        subsidyAvailable: "Labor Insurance Bureau Subsidy Available",
        subsidyDesc: "Noise work special health examinations can apply for Labor Insurance Bureau subsidy - free examination!",
        subsidyLink: "Learn more about Labor Insurance Bureau subsidies →",
        selectedHazards: "Your selected hazardous work:",
        noSpecialHazard: "No Special Hazardous Work Currently",
        noSpecialHazardDesc: "Based on your answers, special health examinations are not currently required, but general health management is still needed",
        needMonitoring: "Workplace Environmental Monitoring Required",
        needMonitoringDesc: "Please consult with approved workplace environmental monitoring institutions",
        monitoringLink: "View approved monitoring institutions →",
        continueObservation: "Continue Observation",
        continueObservationDesc: "Under 85 dB, recommend re-monitoring every 2-3 years or when significant work changes occur",
        reassess: "Reassess"
      },
      viewResults: "View Assessment Results"
    },
    // Calculator
    calculator: {
      badge: "Compliance Calculator",
      title: "Enterprise Compliance Requirements Calculator",
      description: "Enter your enterprise information to quickly understand occupational health regulatory requirements and estimated costs",
      inputTitle: "Enter Enterprise Information",
      employeeCount: "Employee Count",
      employeePlaceholder: "Please enter employee count",
      industryType: "Industry Type",
      selectIndustry: "Select industry type",
      hasSpecialHazards: "Has special hazardous work (noise, chemicals, radiation, etc.)",
      resultsTitle: "Compliance Requirements Results",
      industries: {
        general: "General Industry",
        manufacturing: "Manufacturing",
        construction: "Construction",
        chemical: "Chemical Industry",
        mining: "Mining"
      },
      requirements: {
        fullTimeNurse: "Full-time Nursing Staff",
        onSiteService: "On-site Health Services",
        occupationalMedicine: "Occupational Medicine Specialist",
        safetyPersonnel: "Occupational Safety & Health Personnel",
        contractDoctor: "Contract Doctor Minimum On-site Service Frequency"
      },
      specialHazardCount: "Number of Workers in Special Hazardous Work",
      specialHazardDoctorCount: "Special Hazardous Work Personnel Count Affecting Doctor Service Frequency",
      specialHazardNurseCount: "Special Hazardous Work Personnel Count Affecting Nursing Staff Allocation",
      doctorFrequencyCard: "Doctor Service Frequency Settings",
      nurseAllocationCard: "Nursing Staff Allocation Settings",
      doctorFrequencyNote: "This classification affects occupational medicine specialist service frequency (Appendix 2)",
      nurseAllocationNote: "This classification affects full-time nursing staff allocation requirements (Appendix 3)",
      dualCardExplanation: "Note: Special hazardous work includes noise, chemicals, radiation, high temperature, dust, etc. The two settings can be selected independently, corresponding to different regulatory requirements.",
      selectHazardRange: "Select Special Hazardous Work Employee Count Range",
      selectDoctorHazardRange: "Select Personnel Count Range Affecting Doctor Service Frequency",
      selectNurseHazardRange: "Select Personnel Count Range Affecting Nursing Staff Allocation",
      hazardRanges: {
        "0-99": "0-99 people",
        "100-299": "100-299 people", 
        "300+": "300+ people"
      },
      doctorHazardRanges: {
        "50-99": "50-99 people",
        "100+": "100+ people"
      },
      specialHazardOptions: {
        doctor5099: {
          title: "Special Hazardous Work 50-99 people",
          subtitle: "Occupational Medicine Specialist: Once every 4 months"
        },
        doctor100plus: {
          title: "Special Hazardous Work 100+ people",
          subtitle: "Occupational Medicine Specialist: Once per month"
        }
      },
      nurseHazardRanges: {
        "0-99": "0-99 people",
        "100-299": "100-299 people", 
        "300+": "300+ people"
      },
      contractDoctor: {
        frequency: {
          monthly: "1 time/month",
          bimonthly: "1 time/2 months",
          quarterly: "1 time/3 months",
          twoTimesMonthly: "2 times/month",
          threeTimesMonthly: "3 times/month",
          fourTimesMonthly: "4 times/month",
          fiveTimesMonthly: "5 times/month",
          sixTimesMonthly: "6 times/month",
          sevenTimesMonthly: "7 times/month",
          nineTimesMonthly: "9 times/month",
          twelveTimesMonthly: "12 times/month",
          fifteenTimesMonthly: "15 times/month",
          fullTimeOrEighteen: "Full-time occupational medicine specialist or 18 times/month",
          specialHazard50to99: "1 time/4 months (Special hazardous work 50-99 people)",
          specialHazard100plus: "1 time/month (Special hazardous work 100+ people)"
        },
        doctorType: {
          contractDoctor: "Contract Physician",
          occupationalMedicine: "Occupational Medicine Specialist",
          fullTimeSpecialist: "Full-time Occupational Medicine Specialist"
        },
        specialHazardNote: "Special hazardous work applicable",
        timesPerMonth: "times/month"
      },
      nurseRequired: "Requires {count} full-time nursing staff",
      nurseNotRequired: "No full-time setup required",
      serviceNotRequired: "Under 50 employees - optional",
      needsFullTimeDoctor: "Requires full-time doctor",
      needsOccupationalMedicine: "Requires occupational medicine specialist",
      costEstimate: "Estimated Monthly Cost Range",
      costDisclaimer: "*Actual costs vary by service content and providers",
      enterEmployeeCount: "Please enter employee count to view compliance requirements",
      inputDescription: "Enter your enterprise information to get accurate compliance recommendations",
      resultsDescription: "Compliance requirements analysis generated based on your information",
      employeeUnit: "employees",
      personUnit: "people",
      stats: {
        industryTypes: "Industry Types",
        employeeScales: "Employee Scale Levels",
        instantResults: "Calculation Results"
      },
      complianceTables: {
        title: "Compliance Tables Selection",
        description: "Please select the compliance table to view different regulatory requirements",
        appendix2Description: "Appendix 2 specifies the frequency requirements for physician on-site health services, determined by business classification and special hazardous work personnel count",
        appendix3Description: "Appendix 3 specifies nursing personnel allocation requirements, determined by total employee count and special hazardous work personnel count",
        appendix2Reference: "Labor Health Protection Rules Appendix 2",
        appendix3Reference: "Labor Health Protection Rules Appendix 3"
      },
      safetyRoles: {
        employer: "Can be handled by employer or representative",
        class1: {
          "30to99": "1 Class B Occupational Safety & Health Supervisor",
          "100to299": "1 Class A Occupational Safety & Health Supervisor, 1 Safety & Health Manager (full-time)",
          "300to499": "1 Class A Occupational Safety & Health Supervisor, 1 Safety (Health) Manager, 2 Safety & Health Officers",
          "500plus": "1 Class A Occupational Safety & Health Supervisor, 2+ Safety (Health) Managers & Safety & Health Officers each"
        },
        class2: {
          "30to99": "1 Class B Occupational Safety & Health Supervisor",
          "100to299": "1 Class A Occupational Safety & Health Supervisor",
          "300to499": "1 Class A Occupational Safety & Health Supervisor, 1 Safety & Health Officer (full-time)",
          "500plus": "1 Class A Occupational Safety & Health Supervisor, 2+ Safety (Health) Managers & Safety & Health Officers each"
        },
        class3: {
          "30to99": "1 Class B Occupational Safety & Health Supervisor",
          "100to299": "1 Class A Occupational Safety & Health Supervisor",
          "300to499": "1 Class A Occupational Safety & Health Supervisor",
          "500plus": "1 Class A Occupational Safety & Health Supervisor, 2+ Safety & Health Officers each"
        }
      },
      interactiveTable: {
        businessClass: "Business Classification",
        employeeRange: "Employee Count Range",
        serviceFrequency: "On-site Service Frequency",
        personnelRequirement: "Nursing Personnel Allocation",
        specialHazardRange: "Special Hazardous Work Personnel Count",
        notes: "Notes",
        appendix2Title: "Appendix 2: Physician On-site Service Frequency Table",
        appendix2Description: "Personnel allocation and on-site service frequency for physicians engaged in worker health services",
        appendix3Title: "Appendix 3: Nursing Personnel Allocation Table",
        appendix3Description: "Personnel allocation for nursing staff engaged in worker health services",
        totalRows: "Total",
        matchingRows: "Matching",
        highlightedRow: "Matching row",
        clickToSelect: "Click to select"
      },
      inputForm: {
        emptyError: "Please enter the number of special hazardous work personnel",
        invalidNumberError: "Please enter a valid number",
        exceedsEmployeeCountError: "Cannot exceed total employee count of {total}",
        appendix2HighRiskSuggestion: "100+ people require monthly on-site service",
        monthlyServiceRequired: "Recommend arranging at least 1 physician on-site service per month",
        appendix2MediumRiskSuggestion: "50-99 people require regular on-site service",
        quarterlyServiceRequired: "Recommend arranging at least 1 physician on-site service every 4 months",
        appendix3HighRiskSuggestion: "300+ people require additional nursing personnel",
        additionalNurseRequired: "Recommend adding full-time nursing personnel",
        appendix3MediumRiskSuggestion: "100+ people require nursing personnel allocation",
        nurseRequired: "Recommend allocating full-time nursing personnel",
        validInput: "Input value meets regulatory requirements",
        doctorFrequencyLabel: "Physician On-site Service Frequency Setting",
        doctorFrequencyDescription: "Set the number of special hazardous work personnel affecting physician service frequency",
        doctorFrequencyPlaceholder: "Please enter the number of personnel engaged in special hazardous work",
        appendix2Reference: "Labor Health Protection Rules Appendix 2",
        nurseAllocationLabel: "Nursing Personnel Allocation Setting",
        nurseAllocationDescription: "Set the number of special hazardous work personnel affecting nursing personnel allocation",
        nurseAllocationPlaceholder: "Please enter the number of personnel engaged in special hazardous work",
        appendix3Reference: "Labor Health Protection Rules Appendix 3",
        legalBasis: "Legal Basis",
        specialHazardCount: "Special Hazardous Work Personnel Count",
        smartSuggestions: "Smart Suggestions",
        suggestion50People: "50 people",
        suggestion100People: "100 people",
        suggestion300People: "300 people",
        suggestion500People: "500 people",
        inputProgress: "Input Progress",
        helpTitle: "Input Instructions",
        helpDescription: "Please enter the number of employees engaged in special hazardous work. The system will automatically calculate corresponding compliance requirements based on regulations.",
        totalEmployeesNote: "Total employees: {total}",
        inputInstructions: {
          employeeCount: "Employee Count: Enter your company's total number of employees",
          businessLevel: "Business Classification: Select based on industry risk level (use the classification tool above)",
          specialHazard: "Special Hazardous Work: Check if you have noise, chemical, radiation or other hazardous operations"
        }
      },
      resultsPreview: {
        title: "Compliance Requirements Preview",
        description: "Summary of regulatory requirements generated based on your input",
        noResults: "No Results",
        noResultsDescription: "Please complete the input to view compliance requirements preview",
        viewFullResults: "View Full Results",
        appendix2Title: "Physician On-site Service",
        appendix3Title: "Nursing Personnel Allocation",
        serviceFrequency: "Service Frequency Requirements",
        nursingPersonnel: "Personnel Allocation Requirements",
        peopleUnit: " people",
        notRequired: "Not Required",
        active: "Active",
        legalReference: "Legal Reference",
        serviceSchedule: "Service Schedule",
        personnelDetails: "Personnel Details",
        fullTimeNurseRequired: "Requires {count} full-time nursing personnel",
        importantNote: "Important Note",
        importantNoteDescription: "The above results are for reference only. Actual compliance requirements should be based on the latest regulatory announcements. It is recommended to consult professional advisors to confirm specific implementation plans.",
        nextSteps: "Next Steps",
        nextStepsDescription: "View detailed compliance analysis reports, including cost estimates, vendor recommendations, and complete information.",
        viewDetailedAnalysis: "View Detailed Analysis"
      },
      legalNotes: {
        title: "Legal Notes",
        subtitle: "Important Legal Provisions",
        over6000Rule: {
          title: "Standards for Over 6,000 Employees",
          content: "For enterprises with more than 6,000 employees, for every additional 1,000 employees, the frequency of on-site health services by physicians engaged in occupational health services should be increased according to the following standards:",
          categories: {
            class1: "Class 1 Business: 3 times/month",
            class2: "Class 2 Business: 2 times/month", 
            class3: "Class 3 Business: 1 time/month"
          }
        },
        serviceTimeRule: {
          title: "On-site Service Time Requirements",
          content: "Each on-site service session should be at least 3 hours or more."
        },
        specialHazardRule: {
          title: "Special Hazardous Work Regulations",
          content: "Workers engaged in special hazardous work, regardless of business classification, require on-site services from occupational medicine specialists."
        },
        legalBasis: "Legal Basis: Labor Health Protection Rules"
      },
      errorMessages: {
        confirmEmployeeAndLevel: "Please confirm employee count and business classification",
        calculationError: "Calculation error, please re-enter",
        calculationErrorShort: "Calculation error",
        pleaseReselect: "Please reselect"
      },
      placeholders: {
        selectSpecialHazardType: "Please select special hazardous work personnel count type",
        selectNurseAllocationCount: "Please select personnel count affecting nursing staff allocation"
      },
      noSpecialHazardThreshold: "Occupational medicine specialist service frequency: 0 times, below threshold",
      noSpecialHazardDisplay: "0 times (below threshold)",
      specialHazardRequirement: "Note: Only required for 50+ people in special hazardous work",
      specialHazardMinimum: "Only required for 50+ people in special hazardous work"
    },
    // Vendors
    vendors: {
      badge: "Costs & Vendors",
      title: "Where to Find Qualified Service Providers?",
      description: "Choose qualified institutions approved by the Ministry of Labor to ensure service quality and regulatory compliance",
      tiers: {
        medical: "Medical Institutions",
        professional: "Professional Institutions",
        consultant: "Consulting Companies"
      },
      tierDescs: {
        medical: "Hospitals or clinics with medical institution licenses",
        professional: "Occupational health service institutions approved by Ministry of Labor",
        consultant: "Providers of integrated occupational health management services"
      },
      badges: {
        highest: "Highest Level",
        recommended: "Recommended Choice",
        flexible: "Flexible Option"
      },
      features: {
        specialistDoctor: "Dedicated occupational medicine specialists",
        completeHealthCheck: "Complete health examination services",
        medicalFollowup: "Medical follow-up treatment capabilities",
        qualityAssurance: "Higher service quality assurance",
        qualifiedStaff: "Qualified occupational physicians and nurses",
        standardProcess: "Standardized service processes",
        regularService: "Regular on-site services",
        healthConsulting: "Health management consulting",
        customSolution: "Customized solution design",
        legalConsulting: "Legal consulting services",
        training: "Personnel education and training",
        staffMatching: "Assistance in matching medical personnel"
      },
      suitable: {
        large: "Large enterprises, high-risk industries",
        medium: "Medium enterprises, general industries",
        planning: "Enterprises needing comprehensive planning"
      },
      suitableFor: "Suitable For",
      costTitle: "Service Fee Reference",
      costDescription: "Market reference prices for various health services",
      resourcesTitle: "Official Resource Links",
      resourcesDescription: "Official certified institutions and related resource links",
      stats: {
        serviceLevels: "Service Levels",
        serviceItems: "Service Items", 
        certifiedInstitutions: "Certified Institutions"
      },
      costTable: {
        service: "Service Item",
        cost: "Cost Range (Monthly)",
        note: "Notes",
        doctorService: "On-site Health Services (Doctor)",
        nurseService: "On-site Health Services (Nurse)",
        fullTimeNurse: "Full-time Nursing Staff",
        generalHealthCheck: "General Health Examination",
        specialHealthCheck: "Special Health Exam (Noise)",
        perVisit: "About 2-4 hours per visit",
        per4Hours: "About 4 hours per visit",
        fullTimeSalary: "Full-time salary + benefits",
        dependsOnItems: "Depends on examination items",
        freeSubsidy: "Free (Labor Insurance Subsidy)",
        qualificationRequired: "Must meet qualification requirements",
        perTime: "per visit",
        perPerson: "per person"
      },
      resources: {
        osha: "Ministry of Labor OSHA",
        oshaDesc: "Query approved institution lists and regulations",
        healthService: "Occupational Health Service Network Platform",
        healthServiceDesc: "Find qualified service institutions",
        laborInsurance: "Labor Insurance Bureau",
        laborInsuranceDesc: "Apply for special health exam subsidies"
      }
    },
    // Footer
    footer: {
      title: "Taiwan Workplace Health",
      description: "Helping enterprises understand occupational safety and health regulatory requirements to create healthy and safe work environments.",
      regulations: "Related Regulations",
      disclaimer: "This website is for reference only. Actual regulatory requirements are subject to government announcements",
      copyright: "Taiwan Workplace Health Management Information Platform",
      laws: {
        oshAct: "Occupational Safety and Health Act",
        healthRules: "Labor Health Protection Rules",
        managementRules: "Occupational Safety and Health Management Regulations"
      }
    },
    // Common
    common: {
      loading: "Loading...",
      error: "An error occurred",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm"
    },
    // 404 Page
    notFound: {
      title: "404",
      message: "Oops! Page not found",
      backHome: "Return to Home"
    }
  },
  "ko": {
    // Navigation
    nav: {
      title: "대만 직장 건강",
      requirements: "규정 요구사항",
      riskAssessment: "위험 평가",
      calculator: "규정 준수 계산기",
      vendors: "서비스 제공업체",
      startCalculation: "계산 시작"
    },
    // Hero Section
    hero: {
      badge: "직업안전보건법 준수 가이드",
      title: "대만 직장 건강 관리",
      subtitle: "기업 규정 준수 원스톱 서비스",
      description: "직업안전보건법과 근로자 건강보호 규칙에 따라 기업이 규정 요구사항을 빠르게 이해하고, 준수 비용을 계산하며, 자격을 갖춘 직업안전보건 서비스 제공업체를 찾을 수 있도록 지원합니다.",
      startButton: "규정 준수 평가 시작",
      requirementsButton: "규정 요구사항 보기",
      stats: {
        nurses: "직원은 간호 인력이 필요합니다",
        healthService: "직원은 현장 건강 서비스가 필요합니다",
        subsidy: "무료 특수 위험 근로자 보험 보조금"
      }
    },
    // Requirements Section
    requirements: {
      badge: "직업안전보건법 제22조 & 근로자 건강보호 규칙",
      title: "의료진 배치 규정 요구사항",
      description: "직업안전보건법 제22조 및 근로자 건강보호 규칙 제3-6조에 따라, 규모가 다른 사업장은 해당하는 직업 건강 인력을 배치해야 합니다",
      
      // New structure for medical personnel requirements
      medicalPersonnel: {
        stats: {
          configTypes: "배치 상황 유형",
          minThreshold: "최소 인원 기준",
          employmentThreshold: "고용 기준 인원"
        },
        categories: {
          small: {
            title: "50-299명 사업장",
            subtitle: "근로자 건강보호 규칙 제4조",
            employeeRange: "50-299명",
            lawReference: "근로자 건강보호 규칙 제4조"
          },
          medium: {
            title: "300명 이상 사업장", 
            subtitle: "근로자 건강보호 규칙 제3조",
            employeeRange: "300명 이상",
            lawReference: "근로자 건강보호 규칙 제3조"
          },
          specialHazard: {
            title: "특별 위험 건강 작업",
            subtitle: "50명 이상 특별 규정", 
            employeeRange: "특수 작업 50명 이상",
            lawReference: "근로자 건강보호 규칙 제3조"
          },
          consultant: {
            title: "컨설턴트 기관 위탁",
            subtitle: "근로자 건강보호 규칙 제13조",
            employeeRange: "특정 조건 적용", 
            lawReference: "근로자 건강보호 규칙 제13조 및 부표 7"
          }
        },
        requirements: {
          contractDoctor: {
            title: "계약 의사",
            desc: "부표 4 빈도에 따라 현장 건강 서비스 제공",
            detail: "사업 규모와 성격에 따라 서비스 빈도 결정"
          },
          contractNurse: {
            title: "계약 간호 인력", 
            desc: "의사와 협력하여 건강 서비스 제공",
            detail: "고용 불필요, 계약 방식으로 충분"
          },
          noFullTime: {
            title: "전담 인력",
            desc: "전담 의료진 설치 불필요", 
            detail: "계약 방식이 규정 요구사항 충족"
          },
          employNurse: {
            title: "간호 인력 고용",
            desc: "근로자 건강 서비스 간호 인력 고용 필요",
            detail: "정식 고용 관계여야 함"
          },
          employOrContractDoctor: {
            title: "의사 고용 또는 계약",
            desc: "근로자 건강 서비스 의사 고용 또는 계약", 
            detail: "고용 또는 계약 방식 선택 가능"
          },
          healthService: {
            title: "근로자 건강 서비스 실시",
            desc: "완전한 근로자 건강 서비스 프로그램",
            detail: "건강검진, 관리, 증진 서비스 포함"
          },
          specialEmployNurse: {
            title: "간호 인력 고용",
            desc: "특별 위험 건강 작업 근로자 50명 이상",
            detail: "총 직원 수와 관계없이 특수 작업 50명 시 고용 필요"
          },
          specialDoctor: {
            title: "의사 고용 또는 계약", 
            desc: "특수 건강 관리 서비스 제공",
            detail: "특별 위험 건강 작업에 익숙한 의사"
          },
          specialExam: {
            title: "특수 건강검진",
            desc: "정기 특수 건강검진 및 관리",
            detail: "위험 물질 종류에 따라 검진 빈도 결정"
          },
          secondThirdClass: {
            title: "2, 3급 사업장",
            desc: "작업장이 다른 지역에 분산", 
            detail: "부표 7 요구사항을 충족하는 사업장"
          },
          approvedConsultant: {
            title: "인가 컨설턴트 기관",
            desc: "중앙 관리 기관 인가 기관에 위탁",
            detail: "직업 건강 컨설팅 서비스 기관"
          },
          qualifiedPersonnel: {
            title: "자격 있는 의료진",
            desc: "자격 있는 의료진 배정", 
            detail: "현장 건강 서비스 실시"
          }
        },
        keyPoints: {
          title: "중요 규정 요점",
          subtitle: "핵심 판단 기준",
          points: {
            employeeVsSpecial: {
              title: "총 직원 수 vs 특수 작업 인원",
              desc: "300명 이상 사업장: 간호 인력 고용 필요\n특수 작업 50명 이상: 총 인원과 관계없이 간호 인력 고용 필요",
              note: "두 조건 중 하나라도 충족 시 고용 필요"
            },
            employVsContract: {
              title: "고용 vs 계약 차이", 
              desc: "50-299명: 간호 인력 계약 가능, 고용 불필요\n300명 이상: 간호 인력 고용 필수, 의사는 고용 또는 계약 가능",
              note: "고용 관계가 계약 관계보다 엄격"
            },
            consultantConditions: {
              title: "컨설턴트 기관 위탁 조건",
              desc: "2, 3급 사업장이며 작업장이 다른 지역에 분산\n근로자가 고용주 시설 외부 또는 관리 통제 밖에서 서비스 제공", 
              note: "위탁을 위해서는 특정 조건 충족 필요"
            }
          }
        },
        common: {
          applicableScope: "적용 범위",
          lawBasis: "법적 근거",
          importanceIndicator: "중요도 지표"
        }
      },
      employeeRanges: {
        "50-299": "50-299명",
        "300-499": "300-499명", 
        "500-999": "500-999명",
        "1000+": "1000명 이상"
      },
      services: {
        onSiteHealth: "현장 건강 서비스",
        healthManagement: "건강 관리",
        fullTimeNurse: "전담 간호사",
        fullTimeNurseRequired: "전담 간호 인력",
        healthPlan: "건강 관리 계획",
        riskAssessment: "건강 위험 평가",
        fullTimeDoctor: "전담 의사",
        healthUnit: "건강 서비스 부서"
      },
      descriptions: {
        onSiteFrequency: "사업 분류에 따라 1-3개월마다 1회",
        healthCheck: "직원 건강검진 및 등급별 관리",
        notRequired: "전담 설치 불필요",
        nurseRequired: "근로자 300명 이상 시 1명 설치 필요",
        doctorService: "근로자 건강 서비스 의사",
        writtenPlan: "완전한 서면 건강 관리 계획",
        nurseIncrease: "근로자 500명 이상 시 300명마다 1명 추가 설치",
        increaseFrequency: "의사 현장 방문 빈도 증가",
        systematicRisk: "체계적 위험 관리",
        doctorRequired: "3000명 이상 시 전담 의사 필요",
        nurseRatio: "300명당 1명 설치",
        healthServiceUnit: "근로자 건강 서비스 부서 설치",
        doctorOrGraded: "전담 의사 또는 분류별 관리"
      },
      responsibilities: {
        title: "고용주 법적 책임",
        healthExam: {
          title: "건강검진",
          desc: "채용 전 건강검진, 정기 건강검진(40세 미만 3년마다 1회, 40세 이상 매년 1회, 65세 이상 매년 1회), 특수 건강검진"
        },
        healthMgmt: {
          title: "건강 관리", 
          desc: "건강검진 결과 4단계 등급별 관리, 이상 사례 추적 지도, 업무 적합성 평가, 복직 적합성 평가"
        },
        healthPromotion: {
          title: "건강 증진",
          desc: "직장 건강 증진 활동, 인간공학적 위험 예방, 비정상적 업무 부하로 인한 질병 예방, 직장 폭력 예방"
        }
      },
      specialHazard: {
        title: "특별 위험 건강 작업 특별 규정",
        rules: [
          "특별 위험 건강 작업에 종사하는 근로자가 100명 이상인 경우 전담 간호 인력 1명 추가 설치",
          "특별 위험 건강 작업은 사업 분류와 관계없이 현장 건강 서비스 빈도가 매월 최소 1회",
          "특수 건강검진 빈도는 위험 물질 종류에 따라 결정(6개월~2년마다 1회)",
          "작업 환경 모니터링 결과가 허용 농도를 초과할 때 즉시 개선 및 건강검진 빈도 증가 필요"
        ]
      }
    },
    // Business Classification
    businessClass: {
      badge: "사업 분류 제도",
      title: "사업 분류에 따른 현장 건강 서비스 빈도",
      description: "근로자 건강보호 규칙 부표 2에 따라, 사업장은 업종별 및 재해 위험에 따라 3단계로 분류되어 현장 건강 서비스 빈도가 결정됩니다",
      stats: {
        businessLevels: "사업 분류",
        maxServiceFrequency: "최대 서비스 횟수/년",
        riskCoverage: "위험 커버리지"
      },
      levels: {
        first: "1류",
        second: "2류", 
        third: "3류"
      },
      riskTypes: {
        high: "고위험 사업",
        medium: "중위험 사업",
        low: "저위험 사업"
      },
      frequencies: {
        monthly: "매월 최소 1회",
        bimonthly: "2개월마다 최소 1회",
        quarterly: "3개월마다 최소 1회"
      },
      industries: {
        construction: "건설업",
        metalManufacturing: "제조업(금속, 화학)",
        mining: "광업",
        petrochemical: "석유화학공업",
        foodManufacturing: "제조업(식품, 섬유)",
        transportation: "운송업",
        warehousing: "창고업",
        agriculture: "농림어업",
        finance: "금융보험업",
        realEstate: "부동산업",
        professional: "전문서비스업",
        retail: "도소매업"
      },
      serviceFrequency: "현장 서비스 빈도",
      industryExamples: "업종 예시",
      labels: {
        riskLevel: "위험 수준",
        serviceDensity: "서비스 밀도",
        timesPerYear: "회/년",
        comparisonChart: "사업 분류 비교 차트",
        comparisonDescription: "다양한 사업 분류의 위험 수준과 서비스 빈도 비교 분석",
        importantReminders: "중요 알림 사항"
      },
      reminder: {
        title: "중요 알림",
        points: [
          "사업 분류는 근로자 건강보호 규칙 부표 2에 따라 인정",
          "동일 사업장에 여러 업종이 있는 경우 위험도가 가장 높은 것을 기준으로 함",
          "특별 위험 건강 작업에 종사하는 경우 사업 분류와 관계없이 매월 최소 1회 현장 서비스 필요",
          "근로자 건강 서비스 의사는 직업의학 전문의 또는 관련 교육 자격을 갖춰야 함"
        ]
      },
      // Industry Classification Tool
      classificationTool: {
        title: "사업 분류를 모르시나요?",
        subtitle: "업종을 선택하시면 사업 분류를 판정해드립니다",
        selectIndustry: "주요 업종을 선택해주세요",
        searchPlaceholder: "업종 검색...",
        result: {
          title: "사업 분류 결과",
          classification: "사업 분류:",
          frequency: "현장 서비스 빈도:",
          riskLevel: "위험 수준:",
          description: "선택하신 업종에 따른 시스템 판정 결과입니다:"
        },
        industries: {
          // 1급 - 고위험
          mining: "광업 및 토석 채취업",
          manufacturing_metal: "금속제품 제조업",
          manufacturing_chemical: "화학물질 제조업",
          manufacturing_petroleum: "석유 및 석탄제품 제조업",
          manufacturing_machinery: "기계장비 제조업",
          construction: "건설업",
          electricity: "전력 및 가스 공급업",
          waste_management: "폐기물 처리업",
          environmental_services: "환경위생 및 방역업",
          
          // 2급 - 중위험  
          agriculture: "농업, 임업, 어업 및 축산업",
          manufacturing_food: "식품 제조업",
          manufacturing_textile: "섬유 제조업",
          manufacturing_wood: "목재 및 대나무 제품 제조업",
          manufacturing_paper: "펄프, 종이 및 종이제품 제조업",
          manufacturing_rubber: "고무제품 제조업",
          manufacturing_glass: "유리 및 유리제품 제조업",
          manufacturing_pharmaceutical: "의약품 및 의료용 화학제품 제조업",
          transportation: "운송 및 창고업",
          postal: "우편 및 택배업",
          accommodation: "숙박 및 음식점업",
          healthcare: "보건 및 사회복지 서비스업",
          
          // 3급 - 저위험
          wholesale_retail: "도매 및 소매업",
          information: "정보통신업",
          finance: "금융 및 보험업",
          real_estate: "부동산업",
          professional: "전문, 과학 및 기술 서비스업",
          support_services: "사업시설관리 및 사업지원 서비스업",
          public_admin: "공공행정, 국방 및 사회보장 행정",
          education: "교육 서비스업",
          arts: "예술, 스포츠 및 여가관련 서비스업",
          other_services: "기타 서비스업"
        },
        categories: {
          first: "1류 (고위험)",
          second: "2류 (중위험)", 
          third: "3류 (저위험)"
        },
        reset: "다시 선택",
        close: "닫기",
        
        // 추가: 기업 규정 준수 요구사항 계산기 번역
        complianceCalculator: {
          title: "기업 규정 준수 요구사항 계산기",
          inputTitle: "기업 정보 입력",
          resultsTitle: "규정 준수 요구사항 결과",
          noSpecialHazards: "특별 위험 건강 작업 없음",
          hasSpecialHazards: "특별 위험 건강 작업 있음",
          specialHazardCount: "특별 위험 건강 작업 종사자 수",
          selectHazardRange: "특별 위험 건강 작업 직원 수 범위 선택",
          hazardRanges: {
            "0-99": "0-99명",
            "100-299": "100-299명", 
            "300+": "300명 이상"
          }
        },
        
        // 추가: 사업 분류 판정 도구 번역
        startClassification: "분류 시작"
      }
    },
    // Risk Assessment
    riskAssessment: {
      badge: "위험 평가",
      title: "특별 위험 건강 작업 평가",
      description: "몇 가지 간단한 질문에 답하여 특별 위험 건강 작업 여부와 이용 가능한 근로자 보험 보조금을 알아보세요",
      stats: {
        hazardTypes: "위험 작업 유형",
        assessmentSteps: "평가 단계",
        accuracy: "정확도"
      },
      question: "귀하의 사업장에 다음과 같은 특별 위험 건강 작업이 있습니까?",
      subtitle: "근로자 건강보호 규칙 부표 1에 따라, 특별 위험 건강 작업에 종사하는 근로자는 특수 건강검진을 받아야 합니다",
      hazards: {
        noise: "소음 작업",
        radiation: "이온화 방사선 작업", 
        chemical: "유기용제 작업",
        lead: "납 작업",
        dust: "분진 작업",
        heat: "고온 작업",
        asbestos: "석면 작업",
        vinyl: "염화비닐 작업",
        chromium: "6가 크롬 화합물 작업",
        benzene: "벤젠 작업",
        formaldehyde: "포름알데히드 작업",
        vibration: "국소 진동 작업"
      },
      hazardDescs: {
        noise: "시간가중평균 음압레벨 85데시벨 이상",
        radiation: "X선, 방사성 물질 등 작업",
        chemical: "톨루엔, 자일렌 등 유기용제",
        lead: "납 및 납 화합물 작업",
        dust: "석면, 실리카 분진 작업",
        heat: "WBGT 값이 28°C를 초과하는 작업",
        asbestos: "석면 섬유 노출 작업",
        vinyl: "염화비닐 단량체 노출 작업",
        chromium: "6가 크롬 화합물 노출 작업",
        benzene: "벤젠 및 벤젠 화합물 노출 작업",
        formaldehyde: "포름알데히드 노출 작업",
        vibration: "손으로 잡는 진동 도구 작업"
      },
      noHazardInfo: "선택한 항목이 없나요? 계속 진행할 수 있으며, 일반적인 직업 건강 관리 조언을 제공해드립니다.",
      nextStep: "다음 단계",
      noiseDetail: {
        title: "소음 작업 상세 평가",
        subtitle: "규정 준수 상태를 확인하기 위해 다음 질문에 답해주세요",
        hasMonitoring: "작업 환경 모니터링을 준비했습니까?",
        hasReport: "모니터링 보고서가 있습니까?",
        over85TWA: "시간가중평균 음압레벨이 85 dB(A) TWA를 초과합니까?",
        yes: "예",
        no: "아니오",
        yesOver85: "예, 85데시벨 초과",
        noUnder85: "아니오, 85데시벨 미만"
      },
      results: {
        title: "위험 평가 완료",
        needsSpecialExam: "특별 위험 건강 작업 건강검진 필요",
        needsSpecialExamDesc: "귀하의 답변에 따라, 귀사 직원들은 특수 건강검진을 받아야 합니다",
        subsidyAvailable: "근로자보험공단 보조금 신청 가능",
        subsidyDesc: "소음 작업 특수 건강검진은 근로자보험공단 보조금을 신청할 수 있어 무료로 검진을 받을 수 있습니다!",
        subsidyLink: "근로자보험공단 보조금에 대해 더 알아보기 →",
        selectedHazards: "선택한 위험 작업:",
        noSpecialHazard: "현재 특별 위험 건강 작업 없음",
        noSpecialHazardDesc: "귀하의 답변에 따라, 현재 특수 건강검진은 필요하지 않지만 일반적인 건강 관리는 여전히 필요합니다",
        needMonitoring: "작업 환경 모니터링 필요",
        needMonitoringDesc: "인가된 작업 환경 모니터링 기관에 문의하여 작업 환경 모니터링을 받으시기 바랍니다",
        monitoringLink: "인가된 모니터링 기관 목록 보기 →",
        continueObservation: "지속적 관찰",
        continueObservationDesc: "85데시벨 미만으로, 상황에 따라 2-3년마다 또는 작업에 중대한 변경이 있을 때 작업 환경 모니터링을 다시 실시할 것을 권장합니다",
        reassess: "재평가"
      },
      viewResults: "평가 결과 보기"
    },
    // Calculator
    calculator: {
      badge: "규정 준수 계산기",
      title: "기업 규정 준수 요구사항 계산기",
      description: "기업 정보를 입력하여 직업 건강 규정 요구사항과 예상 비용을 빠르게 파악하세요",
      inputTitle: "기업 정보 입력",
      employeeCount: "직원 수",
      employeePlaceholder: "직원 수를 입력해주세요",
      industryType: "업종",
      selectIndustry: "업종을 선택하세요",
      hasSpecialHazards: "특별 위험 건강 작업 보유(소음, 화학물질, 방사선 등)",
      resultsTitle: "규정 준수 요구사항 결과",
      industries: {
        general: "일반 업종",
        manufacturing: "제조업",
        construction: "건설업",
        chemical: "화학공업",
        mining: "광업"
      },
      requirements: {
        fullTimeNurse: "전담 간호 인력",
        onSiteService: "현장 건강 서비스",
        occupationalMedicine: "직업의학 전문의",
        safetyPersonnel: "직업안전보건 인력",
        contractDoctor: "계약 의사 최소 현장 서비스 빈도"
      },
      specialHazardCount: "특별 위험 건강 작업 종사자 수",
      specialHazardDoctorCount: "의사 서비스 빈도에 영향을 미치는 특별 위험 건강 작업 종사자 수",
      specialHazardNurseCount: "간호 인력 배치에 영향을 미치는 특별 위험 건강 작업 종사자 수",
      doctorFrequencyCard: "의사 현장 서비스 빈도 설정",
      nurseAllocationCard: "간호 인력 배치 설정",
      doctorFrequencyNote: "이 분류는 직업의학 전문의 서비스 빈도에 영향을 미칩니다 (부표 2)",
      nurseAllocationNote: "이 분류는 전담 간호 인력 배치 요구사항에 영향을 미칩니다 (부표 3)",
      dualCardExplanation: "참고: 특별 위험 건강 작업에는 소음, 화학물질, 방사선, 고온, 분진 등의 작업이 포함됩니다. 두 설정은 독립적으로 선택할 수 있으며, 각각 다른 규정 요구사항에 해당합니다.",
      selectHazardRange: "특별 위험 건강 작업 직원 수 범위 선택",
      selectDoctorHazardRange: "의사 서비스 빈도에 영향을 미치는 인원 수 범위 선택",
      selectNurseHazardRange: "간호 인력 배치에 영향을 미치는 인원 수 범위 선택",
      hazardRanges: {
        "0-99": "0-99명",
        "100-299": "100-299명", 
        "300+": "300명 이상"
      },
      doctorHazardRanges: {
        "50-99": "50-99명",
        "100+": "100명 이상"
      },
      specialHazardOptions: {
        doctor5099: {
          title: "특별 위험 건강 작업 50-99명",
          subtitle: "직업의학과 전문의: 4개월마다 1회"
        },
        doctor100plus: {
          title: "특별 위험 건강 작업 100명 이상",
          subtitle: "직업의학과 전문의: 월 1회"
        }
      },
      nurseHazardRanges: {
        "0-99": "0-99명",
        "100-299": "100-299명", 
        "300+": "300명 이상"
      },
      contractDoctor: {
        frequency: {
          monthly: "1회/월",
          bimonthly: "1회/2개월",
          quarterly: "1회/3개월",
          twoTimesMonthly: "2회/월",
          threeTimesMonthly: "3회/월",
          fourTimesMonthly: "4회/월",
          fiveTimesMonthly: "5회/월",
          sixTimesMonthly: "6회/월",
          sevenTimesMonthly: "7회/월",
          nineTimesMonthly: "9회/월",
          twelveTimesMonthly: "12회/월",
          fifteenTimesMonthly: "15회/월",
          fullTimeOrEighteen: "전담 직업의학 전문의 1명 또는 18회/월",
          specialHazard50to99: "1회/4개월 (특별 위험 건강 작업 50-99명)",
          specialHazard100plus: "1회/월 (특별 위험 건강 작업 100명 이상)"
        },
        doctorType: {
          contractDoctor: "계약 의사",
          occupationalMedicine: "직업의학과 전문의",
          fullTimeSpecialist: "전담 직업의학과 전문의"
        },
        specialHazardNote: "특별 위험 건강 작업 적용",
        timesPerMonth: "회/월"
      },
      nurseRequired: "{count}명의 전담 간호 인력 필요",
      nurseNotRequired: "전담 설치 불필요",
      serviceNotRequired: "50명 미만 - 선택사항",
      needsFullTimeDoctor: "전담 의사 필요",
      needsOccupationalMedicine: "직업의학과 전문의 필요",
      costEstimate: "예상 월간 비용 범위",
      costDisclaimer: "*실제 비용은 서비스 내용과 제공업체에 따라 다름",
      enterEmployeeCount: "규정 준수 요구사항을 보려면 직원 수를 입력하세요",
      inputDescription: "정확한 규정 준수 권장사항을 얻기 위해 기업 정보를 입력하세요",
      resultsDescription: "귀하의 정보를 바탕으로 생성된 규정 준수 요구사항 분석",
      employeeUnit: "명 직원",
      personUnit: "명",
      stats: {
        industryTypes: "업종",
        employeeScales: "직원 규모 등급",
        instantResults: "계산 결과"
      },
      complianceTables: {
        title: "규정 표 선택",
        description: "다른 규정 요구사항을 이해하기 위해 보고 싶은 규정 표를 선택하세요",
        appendix2Description: "부표 2는 사업 분류 및 특별 위험 건강 작업 인원 수에 따라 결정되는 의사 현장 건강 서비스 빈도 요구사항을 규정합니다",
        appendix3Description: "부표 3은 총 직원 수 및 특별 위험 건강 작업 인원 수에 따라 결정되는 간호 인력 배치 요구사항을 규정합니다",
        appendix2Reference: "근로자 건강보호 규칙 부표 2",
        appendix3Reference: "근로자 건강보호 규칙 부표 3"
      },
      safetyRoles: {
        employer: "고용주 또는 대리인이 담당 가능",
        class1: {
          "30to99": "을종 직업안전보건 업무담당자 1명",
          "100to299": "갑종 직업안전보건 업무담당자 1명, 직업안전보건 관리원 1명 (전담)",
          "300to499": "갑종 직업안전보건 업무담당자 1명, 직업안전(보건) 관리사 1명, 직업안전보건 관리원 2명",
          "500plus": "갑종 직업안전보건 업무담당자 1명, 직업안전(보건) 관리사와 직업안전보건 관리원 각 2명 이상"
        },
        class2: {
          "30to99": "을종 직업안전보건 업무담당자 1명",
          "100to299": "갑종 직업안전보건 업무담당자 1명",
          "300to499": "갑종 직업안전보건 업무담당자 1명, 직업안전보건 관리원 1명 (전담)",
          "500plus": "갑종 직업안전보건 업무담당자 1명, 직업안전(보건) 관리사 및 직업안전보건 관리원 각 2명 이상"
        },
        class3: {
          "30to99": "을종 직업안전보건 업무담당자 1명",
          "100to299": "갑종 직업안전보건 업무담당자 1명",
          "300to499": "갑종 직업안전보건 업무담당자 1명",
          "500plus": "갑종 직업안전보건 업무담당자 1명, 직업안전보건 관리원 각 2명 이상"
        }
      },
      interactiveTable: {
        businessClass: "사업 분류",
        employeeRange: "직원 수 범위",
        serviceFrequency: "현장 서비스 빈도",
        personnelRequirement: "간호 인력 배치",
        specialHazardRange: "특별 위험 건강 작업 인원 수",
        notes: "비고",
        appendix2Title: "부표 2: 의사 현장 서비스 빈도표",
        appendix2Description: "근로자 건강 서비스에 종사하는 의사의 인력 배치 및 현장 서비스 빈도",
        appendix3Title: "부표 3: 간호 인력 배치표",
        appendix3Description: "근로자 건강 서비스에 종사하는 간호 인력 배치",
        totalRows: "총계",
        matchingRows: "조건 일치",
        highlightedRow: "조건에 맞는 행",
        clickToSelect: "클릭하여 선택"
      },
      inputForm: {
        emptyError: "특별 위험 건강 작업 인원 수를 입력하세요",
        invalidNumberError: "유효한 숫자를 입력하세요",
        exceedsEmployeeCountError: "총 직원 수 {total}명을 초과할 수 없습니다",
        appendix2HighRiskSuggestion: "100명 이상은 월간 현장 서비스가 필요합니다",
        monthlyServiceRequired: "월 최소 1회 의사 현장 서비스 배치를 권장합니다",
        appendix2MediumRiskSuggestion: "50-99명은 정기 현장 서비스가 필요합니다",
        quarterlyServiceRequired: "4개월마다 최소 1회 의사 현장 서비스 배치를 권장합니다",
        appendix3HighRiskSuggestion: "300명 이상은 추가 간호 인력이 필요합니다",
        additionalNurseRequired: "전담 간호 인력 증설을 권장합니다",
        appendix3MediumRiskSuggestion: "100명 이상은 간호 인력 배치가 필요합니다",
        nurseRequired: "전담 간호 인력 배치를 권장합니다",
        validInput: "입력값이 규정 요구사항을 충족합니다",
        doctorFrequencyLabel: "의사 현장 서비스 빈도 설정",
        doctorFrequencyDescription: "의사 서비스 빈도에 영향을 주는 특별 위험 건강 작업 인원 수 설정",
        doctorFrequencyPlaceholder: "특별 위험 건강 작업에 종사하는 인원 수를 입력하세요",
        appendix2Reference: "근로자 건강보호 규칙 부표 2",
        nurseAllocationLabel: "간호 인력 배치 설정",
        nurseAllocationDescription: "간호 인력 배치에 영향을 주는 특별 위험 건강 작업 인원 수 설정",
        nurseAllocationPlaceholder: "특별 위험 건강 작업에 종사하는 인원 수를 입력하세요",
        appendix3Reference: "근로자 건강보호 규칙 부표 3",
        legalBasis: "법적 근거",
        specialHazardCount: "특별 위험 건강 작업 인원 수",
        smartSuggestions: "스마트 제안",
        suggestion50People: "50명",
        suggestion100People: "100명",
        suggestion300People: "300명",
        suggestion500People: "500명",
        inputProgress: "입력 진행률",
        helpTitle: "입력 안내",
        helpDescription: "특별 위험 건강 작업에 종사하는 직원 수를 입력하세요. 시스템이 규정에 따라 해당 규정 준수 요구사항을 자동으로 계산합니다.",
        totalEmployeesNote: "총 직원 수: {total}명",
        inputInstructions: {
          employeeCount: "직원 수: 귀하 회사의 총 직원 수를 입력하세요",
          businessLevel: "사업 분류: 업종 위험도에 따라 선택 (위의 분류 도구 사용 가능)",
          specialHazard: "특별 위험 건강 작업: 소음, 화학물질, 방사선 등의 작업이 있으면 체크하세요"
        }
      },
      resultsPreview: {
        title: "규정 준수 요구사항 미리보기",
        description: "입력하신 정보를 바탕으로 생성된 규정 요구사항 요약",
        noResults: "결과 없음",
        noResultsDescription: "규정 준수 요구사항 미리보기를 보려면 입력을 완료하세요",
        viewFullResults: "전체 결과 보기",
        appendix2Title: "의사 현장 서비스",
        appendix3Title: "간호 인력 배치",
        serviceFrequency: "서비스 빈도 요구사항",
        nursingPersonnel: "인력 배치 요구사항",
        peopleUnit: "명",
        notRequired: "필요 없음",
        active: "활성",
        legalReference: "법적 참조",
        serviceSchedule: "서비스 일정",
        personnelDetails: "인력 세부사항",
        fullTimeNurseRequired: "{count}명의 전담 간호 인력이 필요합니다",
        importantNote: "중요 참고사항",
        importantNoteDescription: "위 결과는 참고용이며, 실제 규정 준수 요구사항은 최신 규정 공고를 기준으로 해야 합니다. 구체적인 실행 계획 확인을 위해 전문 컨설턴트와 상담하시기 바랍니다.",
        nextSteps: "다음 단계 권장사항",
        nextStepsDescription: "비용 추정, 업체 추천 등 완전한 정보를 포함한 상세한 규정 준수 분석 보고서를 확인하세요.",
        viewDetailedAnalysis: "상세 분석 보기"
      },
      legalNotes: {
        title: "법규 비고",
        subtitle: "중요 법규 조항 설명",
        over6000Rule: {
          title: "6,000명 초과 시 증가 기준",
          content: "근로자 수가 6,000명을 초과하는 경우, 근로자 1,000명이 증가할 때마다 근로자 건강 서비스에 종사하는 의사의 현장 서비스 빈도를 다음 기준에 따라 증가시켜야 합니다:",
          categories: {
            class1: "제1류 사업: 3회/월",
            class2: "제2류 사업: 2회/월", 
            class3: "제3류 사업: 1회/월"
          }
        },
        serviceTimeRule: {
          title: "현장 서비스 시간 규정",
          content: "각 현장 서비스 세션은 최소 3시간 이상이어야 합니다."
        },
        specialHazardRule: {
          title: "특별 위험 건강 작업 규정",
          content: "특별 위험 건강 작업에 종사하는 근로자는 사업 분류에 관계없이 직업의학 전문의의 현장 서비스가 필요합니다."
        },
        legalBasis: "법적 근거: 근로자 건강보호 규칙"
      },
      errorMessages: {
        confirmEmployeeAndLevel: "직원 수와 사업 분류를 확인해 주세요",
        calculationError: "계산 오류, 다시 입력해 주세요",
        calculationErrorShort: "계산 오류",
        pleaseReselect: "다시 선택해 주세요"
      },
      placeholders: {
        selectSpecialHazardType: "특별 위험 건강 작업 인원 수 유형을 선택해 주세요",
        selectNurseAllocationCount: "간호 인력 배치에 영향을 미치는 인원 수를 선택해 주세요"
      },
      noSpecialHazardThreshold: "직업의학 전문의 서비스 빈도: 0회, 기준 미달",
      noSpecialHazardDisplay: "0회 (기준 미달)",
      specialHazardRequirement: "참고: 특별 위험 건강 작업 50명 이상만 필요",
      specialHazardMinimum: "특별 위험 건강 작업 50명 이상만 필요"
    },
    // Vendors
    vendors: {
      badge: "비용 및 업체",
      title: "자격을 갖춘 서비스 제공업체는 어디서 찾나요?",
      description: "노동부 인가를 받은 자격 있는 기관을 선택하여 서비스 품질과 규정 준수를 보장하세요",
      tiers: {
        medical: "의료기관",
        professional: "전문기관",
        consultant: "컨설팅 회사"
      },
      tierDescs: {
        medical: "의료기관 면허를 보유한 병원 또는 의원",
        professional: "노동부 인가를 받은 근로자 건강 서비스 기관",
        consultant: "통합 직업 건강 관리 서비스 제공업체"
      },
      badges: {
        highest: "최고 등급",
        recommended: "추천 선택",
        flexible: "유연한 선택"
      },
      features: {
        specialistDoctor: "전담 직업의학과 전문의",
        completeHealthCheck: "완전한 건강검진 서비스",
        medicalFollowup: "의료 후속 처치 능력",
        qualityAssurance: "높은 서비스 품질 보장",
        qualifiedStaff: "자격을 갖춘 직업의학 의사 및 간호사",
        standardProcess: "표준화된 서비스 프로세스",
        regularService: "정기 현장 서비스",
        healthConsulting: "건강 관리 컨설팅",
        customSolution: "맞춤형 솔루션 설계",
        legalConsulting: "법규 컨설팅 서비스",
        training: "인력 교육 및 훈련",
        staffMatching: "의료진 매칭 지원"
      },
      suitable: {
        large: "대기업, 고위험 업종",
        medium: "중기업, 일반 업종",
        planning: "종합적인 계획이 필요한 기업"
      },
      suitableFor: "적합 대상",
      costTitle: "서비스 요금 참고",
      costDescription: "다양한 건강 서비스의 시장 참고 가격",
      resourcesTitle: "공식 자료 링크",
      resourcesDescription: "공식 인증 기관 및 관련 자료 링크",
      stats: {
        serviceLevels: "서비스 레벨",
        serviceItems: "서비스 항목", 
        certifiedInstitutions: "인증 기관"
      },
      costTable: {
        service: "서비스 항목",
        cost: "비용 범위(월간)",
        note: "비고",
        doctorService: "현장 건강 서비스(의사)",
        nurseService: "현장 건강 서비스(간호사)",
        fullTimeNurse: "전담 간호 인력",
        generalHealthCheck: "일반 건강검진",
        specialHealthCheck: "특수 건강검진(소음)",
        perVisit: "방문당 약 2-4시간",
        per4Hours: "방문당 약 4시간",
        fullTimeSalary: "정규직 급여 + 복리후생",
        dependsOnItems: "검진 항목에 따라 다름",
        freeSubsidy: "무료(근로자보험 보조금)",
        qualificationRequired: "자격 요건 충족 필요",
        perTime: "회",
        perPerson: "명"
      },
      resources: {
        osha: "노동부 직업안전보건청",
        oshaDesc: "인가 기관 목록 및 규정 조회",
        healthService: "근로자 건강 서비스 네트워크 플랫폼",
        healthServiceDesc: "자격 있는 서비스 기관 찾기",
        laborInsurance: "근로자보험공단",
        laborInsuranceDesc: "특수 건강검진 보조금 신청"
      }
    },
    // Footer
    footer: {
      title: "대만 직장 건강",
      description: "기업이 직업안전보건 규정 요구사항을 이해하고 건강하고 안전한 작업 환경을 조성할 수 있도록 지원합니다.",
      regulations: "관련 규정",
      disclaimer: "이 웹사이트는 참고용이며, 실제 규정 요구사항은 정부 공고를 따릅니다",
      copyright: "대만 직장 건강 관리 정보 플랫폼",
      laws: {
        oshAct: "직업안전보건법",
        healthRules: "근로자 건강보호 규칙",
        managementRules: "직업안전보건 관리 규정"
      }
    },
    // Common
    common: {
      loading: "로딩 중...",
      error: "오류가 발생했습니다",
      success: "성공",
      cancel: "취소",
      confirm: "확인"
    },
    // 404 Page
    notFound: {
      title: "404",
      message: "죄송합니다! 페이지를 찾을 수 없습니다",
      backHome: "홈으로 돌아가기"
    }
  }
};

export type TranslationKey = keyof typeof translations["zh-TW"];
export type NestedTranslationKey = string;