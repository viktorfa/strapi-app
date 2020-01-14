#!/bin/bash

yarn
yarn build

docker build -t vikfand/strapi-dev:latest .
docker push vikfand/strapi-dev:latest

ssh root@140.82.37.146 << EOF
cd strapi
./update-dev.sh
EOF
