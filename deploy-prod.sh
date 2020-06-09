#!/bin/bash

docker build --build-arg NODE_ENV=production -t vikfand/strapi:latest .
docker push vikfand/strapi:latest

ssh root@140.82.37.146 << EOF
cd strapi
git fetch
git reset --hard origin/master
./update-prod.sh
EOF
