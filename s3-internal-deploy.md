# Amazon 內部 S3 部署指南

## 前提條件
- 需要內部 AWS 帳戶權限
- S3 bucket 創建權限

## 部署步驟

### 1. 創建 S3 Bucket
```bash
aws s3 mb s3://taiwan-workplace-health-internal --region us-west-2
```

### 2. 配置靜態網站託管
```bash
aws s3 website s3://taiwan-workplace-health-internal \
  --index-document index.html \
  --error-document index.html
```

### 3. 上傳文件
```bash
# 構建項目
npm run build

# 上傳到 S3
aws s3 sync dist/ s3://taiwan-workplace-health-internal --delete
```

### 4. 設置 Bucket Policy（內網訪問）
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::taiwan-workplace-health-internal/*",
      "Condition": {
        "IpAddress": {
          "aws:SourceIp": ["10.0.0.0/8", "172.16.0.0/12"]
        }
      }
    }
  ]
}
```

### 5. 自動化部署腳本
```bash
#!/bin/bash
# deploy-internal.sh
npm run build
aws s3 sync dist/ s3://taiwan-workplace-health-internal --delete
echo "部署完成: http://taiwan-workplace-health-internal.s3-website-us-west-2.amazonaws.com"
```

## 優點
- 熟悉的 AWS 環境
- 高可用性
- 成本低廉
- 易於維護