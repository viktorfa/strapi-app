#!/bin/bash
docker pull vikfand/strapi-dev:latest
docker-compose up -d --no-deps api-dev
