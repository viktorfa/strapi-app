#!/bin/bash
git fetch
git reset --hard origin/master
docker pull vikfand/strapi-dev:latest
docker-compose up -d --no-deps api-dev
