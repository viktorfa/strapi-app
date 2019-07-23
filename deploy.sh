#!/bin/bash

yarn
NODE_ENV=production yarn build

docker build -t vikfand/strapi:latest .
docker push vikfand/strapi:latest

ssh root@45.76.89.214 << EOF
cd strapi-docker
./update.sh
EOF