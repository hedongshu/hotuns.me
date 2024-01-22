#!/bin/bash
ARTIFACT_ID=$1  # ARTIFACT_ID 作为参数传递

cd /home/ubuntu/hotuns.me
# 下载构建文件
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer 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" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/hedongshu/hotuns.me/actions/artifacts/"$ARTIFACT_ID"/zip


# 解压构建文件
unzip build.zip || { echo "解压失败"; exit 1; }

# 重启您的服务，例如使用 pm2
/home/ubuntu/.nvm/versions/node/v17.5.0/bin/pm2 restart all || { echo "PM2 重启失败"; exit 1; }
