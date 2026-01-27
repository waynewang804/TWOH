# SharePoint 部署完整指南

## 🎯 推薦方案：Modern Page + Embed Web Part

### 步驟 1: 準備文件
✅ 已準備好 `sharepoint-embed.html` - 專為 SharePoint 優化的版本

### 步驟 2: 登入 SharePoint
1. 前往您的 SharePoint 網站
2. 確保您有編輯權限

### 步驟 3: 創建新頁面
1. 點擊 **"+ New"** → **"Page"**
2. 選擇 **"Blank"** 模板
3. 頁面標題：`台灣職場健康管理工具`

### 步驟 4: 添加 Embed Web Part
1. 點擊頁面中的 **"+"** 按鈕
2. 搜索並選擇 **"Embed"** Web Part
3. 在 Embed Web Part 中：
   - 點擊 **"Add embed code"**
   - 將 `sharepoint-embed.html` 的完整內容複製貼上
   - 點擊 **"Apply"**

### 步驟 5: 調整頁面設置
1. 點擊右上角的 **"Settings"** (齒輪圖標)
2. 選擇 **"Page details"**
3. 設置：
   - **Title**: 台灣職場健康管理工具
   - **Description**: Amazon Taiwan 內部工具 - 企業合規需求試算器
   - **Page layout**: Full width column

### 步驟 6: 發布頁面
1. 點擊右上角的 **"Publish"**
2. 確認發布設置
3. 點擊 **"Publish"**

---

## 🗂️ 替代方案：文檔庫部署

### 步驟 1: 創建文檔庫
1. 在 SharePoint 網站中點擊 **"+ New"** → **"Document library"**
2. 命名：`Taiwan Workplace Health Tool`

### 步驟 2: 上傳文件
1. 將 `dist` 文件夾中的所有文件上傳到文檔庫
2. 文件結構：
   ```
   Taiwan Workplace Health Tool/
   ├── index.html
   ├── assets/
   │   ├── index-xxx.css
   │   ├── index-xxx.js
   │   ├── vendor-xxx.js
   │   └── ui-xxx.js
   ```

### 步驟 3: 設置默認文檔
1. 在文檔庫設置中
2. 設置 `index.html` 為默認打開文檔

### 步驟 4: 配置權限
1. 點擊文檔庫的 **"Settings"** → **"Library settings"**
2. 在 **"Permissions and Management"** 下點擊 **"Permissions for this document library"**
3. 設置適當的訪問權限

---

## 🔧 高級方案：SharePoint Framework (SPFx)

如果需要更深度的整合，可以考慮 SPFx：

### 前提條件
- Node.js 16.x
- SharePoint Framework 開發環境
- 管理員權限

### 快速開始
```bash
# 安裝 SPFx 工具
npm install -g @microsoft/generator-sharepoint

# 創建新項目
yo @microsoft/sharepoint

# 項目配置
# - Solution name: taiwan-workplace-health
# - Target: SharePoint Online
# - Framework: React
# - Web part name: WorkplaceHealthCalculator
```

---

## 📱 功能特色

部署後的 SharePoint 版本將包含：

### ✅ SharePoint 原生整合
- 符合 SharePoint 設計語言
- 響應式設計
- 無障礙功能支援

### ✅ 企業級功能
- 權限管理
- 版本控制
- 搜索整合
- 評論功能

### ✅ 核心計算功能
- 員工人數輸入
- 事業分級選擇
- 特殊危害作業評估
- 合規需求計算
- 成本估算

---

## 🚀 立即開始

**推薦使用方法 1（Modern Page + Embed）：**

1. 打開 `sharepoint-embed.html`
2. 複製全部內容
3. 在 SharePoint 中創建新頁面
4. 添加 Embed Web Part
5. 貼上代碼並發布

**預期結果：**
- 完整的職場健康管理工具
- SharePoint 原生外觀
- 所有計算功能正常運作
- 企業級用戶體驗

---

## 🔍 故障排除

### 常見問題：

1. **Embed Web Part 不顯示**
   - 檢查 HTML 代碼是否完整
   - 確認沒有被 SharePoint 安全策略阻擋

2. **樣式顯示異常**
   - 使用內嵌 CSS（已處理）
   - 避免與 SharePoint 樣式衝突

3. **JavaScript 不執行**
   - 確認 SharePoint 允許自定義腳本
   - 檢查瀏覽器控制台錯誤

需要任何協助請告訴我！