#!/bin/bash
ARTIFACT_URL=$1  # Artifact URL 作为参数传递

cd /home/ubuntu/hotuns.me
# 下载构建文件
wget -O build.zip "$ARTIFACT_URL"  --header='Authorization: token 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' || { echo "下载失败"; exit 1; }

# 解压构建文件
unzip build.zip || { echo "解压失败"; exit 1; }

# 重启您的服务，例如使用 pm2
/home/ubuntu/.nvm/versions/node/v17.5.0/bin/pm2 restart all || { echo "PM2 重启失败"; exit 1; }
