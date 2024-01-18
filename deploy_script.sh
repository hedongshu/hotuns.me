#!/bin/bash
ARTIFACT_URL=$1  # Artifact URL 作为参数传递

cd /home/ubuntu/hotuns.me
# 下载构建文件
wget -O build.zip "$ARTIFACT_URL" --header='Authorization: token ${{ secrets.GITHUB_TOKEN }}'
# 解压构建文件
unzip build.zip
# 重启您的服务，例如使用 pm2
pm2 restart all
