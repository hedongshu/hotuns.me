#!/bin/bash
cd /home/ubuntu/hotuns.me
# 下载构建文件
wget https://github.com/hedongshu/hotuns.me/actions/artifacts/build.tar.gz
# 解压构建文件
tar -xzf build.tar.gz
# 重启您的服务，例如使用 pm2
pm2 restart all
