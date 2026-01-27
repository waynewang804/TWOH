# SharePoint 部署指南

## 準備工作
1. 確保您有 SharePoint 網站的編輯權限
2. 準備構建後的文件

## 部署步驟

### 方法 1: 使用 SharePoint 頁面
1. 前往您的 SharePoint 網站
2. 創建新的 Modern Page
3. 添加 "Embed" Web Part
4. 將 `wiki-deploy.html` 的內容嵌入

### 方法 2: 文檔庫上傳
1. 在 SharePoint 中創建文檔庫
2. 上傳 `dist` 文件夾中的所有文件
3. 設置 `index.html` 為默認頁面

### 方法 3: SharePoint Framework (SPFx)
如果需要更高級的整合：
1. 使用 SPFx 創建 Web Part
2. 將 React 組件整合到 SharePoint
3. 部署到 App Catalog

## 權限設置
- 設置適當的用戶組權限
- 配置訪問控制
- 添加到導航菜單

## 優點
- 企業級安全性
- 與 Office 365 整合
- 版本控制
- 協作功能