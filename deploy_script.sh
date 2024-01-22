#!/bin/bash
ARTIFACT_ID=$1  # ARTIFACT_ID 作为参数传递

cd /home/ubuntu/hotuns.me
rm -rf artifact.zip ecosystem.config.js .output

# 加载 .env 文件
source .env

# 下载构建文件
curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  -o artifact.zip \
  https://api.github.com/repos/hedongshu/hotuns.me/actions/artifacts/"$ARTIFACT_ID"/zip


# 解压构建文件
unzip -q artifact.zip || { echo "解压失败"; exit 1; }


export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm use v18

# 重启您的服务，例如使用 pm2
pm2 restart all || { echo "PM2 重启失败"; exit 1; }
