#!/bin/bash
docker pull vikfand/strapi:latest
docker-compose up -d --no-deps api-prod
