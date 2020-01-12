FROM node:12-alpine

WORKDIR /usr/src/api

EXPOSE 1337

COPY / ./

COPY healthcheck.js ./
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
  CMD node /usr/src/api/healthcheck.js

CMD ["./strapi.sh"]
