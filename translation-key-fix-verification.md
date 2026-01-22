# 翻譯鍵修正驗證

## 問題描述
用戶報告看到 `calculator.safetyRoles.supervisor` 或 `calculator.safetyRoles.unit` 等翻譯鍵直接顯示，而不是翻譯後的文字。

## 根本原因
1. ComplianceCalculator組件中使用了新的詳細翻譯鍵結構，但變數宣告有問題
2. BusinessClassification組件仍在使用舊的翻譯鍵（supervisor, unit, manager等）
3. 變數重複宣告導致邏輯錯誤

## 修正內容

### 1. ComplianceCalculator組件修正
- ✅ 修正變數重複宣告問題（safetyPersonnelDetails）
- ✅ 確保使用新的翻譯鍵結構：
  - `calculator.safetyRoles.class1.30to99`
  - `calculator.safetyRoles.class1.100to299`
  - `calculator.safetyRoles.class1.300to499`
  - `calculator.safetyRoles.class1.500plus`
  - 以此類推 class2, class3

### 2. BusinessClassification組件修正
- ✅ 更新safetyPersonnel邏輯使用新的翻譯鍵結構
- ✅ 更新businessLevels數組：level1 → class1, level2 → class2, level3 → class3
- ✅ 根據事業類別（第一類、第二類、第三類）和員工人數提供詳細配置

### 3. 翻譯鍵結構確認
```typescript
safetyRoles: {
  employer: "可由雇主或代理人擔任",
  class1: {
    "30to99": "乙種職業安全衛生業務主管1人",
    "100to299": "甲種職業安全衛生業務主管1人、職業安全衛生管理員1人（專職）",
    "300to499": "甲種職業安全衛生業務主管1人、職業安全(衛生)管理師1人、職業安全衛生管理員2人",
    "500plus": "甲種職業安全衛生業務主管1人、職業安全(衛生)管理師與職業安全衛生管理員各2人以上"
  },
  class2: { ... },
  class3: { ... }
}
```

## 測試驗證

### 測試案例1：第一類事業，500名員工
**預期顯示**：「甲種職業安全衛生業務主管1人、職業安全(衛生)管理師與職業安全衛生管理員各2人以上」
**不應顯示**：`calculator.safetyRoles.unit`

### 測試案例2：第二類事業，150名員工
**預期顯示**：「甲種職業安全衛生業務主管1人」
**不應顯示**：`calculator.safetyRoles.supervisor`

### 測試案例3：第三類事業，50名員工
**預期顯示**：「乙種職業安全衛生業務主管1人」
**不應顯示**：`calculator.safetyRoles.supervisor`

## 修正狀態
✅ ComplianceCalculator組件變數宣告修正
✅ BusinessClassification組件翻譯鍵更新
✅ 移除所有舊的翻譯鍵引用（supervisor, unit, manager, seniorSupervisor）
✅ TypeScript診斷檢查通過
✅ 開發服務器正常運行並檢測到更改

## 確認事項
- 不再顯示原始翻譯鍵字符串
- 所有職業安全衛生人員配置都顯示詳細的法規要求
- 支援所有語言（繁中、簡中、英文、韓文）