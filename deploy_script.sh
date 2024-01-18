#!/bin/bash
cd /path/to/your/project
git pull origin main
npm install
npm run build
# 重启您的服务，例如使用 pm2
pm2 restart all
