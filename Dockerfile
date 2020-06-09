FROM node:12-alpine

ARG NODE_ENV=development

WORKDIR /usr/src/api

EXPOSE 1337

COPY / ./
RUN yarn install
ENV NODE_ENV=${NODE_ENV}
RUN yarn build

COPY healthcheck.js ./
HEALTHCHECK --interval=15s --timeout=5s --start-period=30s \
  CMD node /usr/src/api/healthcheck.js

CMD ["./strapi.sh"]
