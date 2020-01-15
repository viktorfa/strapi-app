#!/bin/bash

yarn
NODE_ENV=production yarn build

docker build -t vikfand/strapi:latest .
docker push vikfand/strapi:latest

ssh root@140.82.37.146 << EOF
cd strapi
git fetch
git reset --hard origin/master
./update-prod.sh
EOF
