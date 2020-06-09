#!/bin/bash

docker build -t vikfand/strapi-dev:latest .
docker push vikfand/strapi-dev:latest

ssh root@140.82.37.146 << EOF
cd strapi
git fetch
git reset --hard origin/master
./update-dev.sh
EOF
