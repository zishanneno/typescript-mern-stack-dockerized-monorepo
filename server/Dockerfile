ARG PORT=8000
FROM node:16-alpine AS node

RUN mkdir -p /server/dist && chown -R node:node /server
WORKDIR /server

ENV NODE_ENV production
RUN npm update -g npm
RUN npm i -g pm2

COPY ./package.json ./.env ./config/pm2-process.yml ./

USER node
RUN npm i --only=production

COPY --chown=node:node ./dist ./dist
EXPOSE ${PORT}

CMD ["pm2-runtime", "./pm2-process.yml"]