FROM node:lts-alpine

WORKDIR /app

COPY ./config ./config
COPY ./database ./database
COPY ./public ./public
COPY ./src ./src
COPY ./favicon.ico ./package.json ./

RUN npm install --production

ENV NODE_ENV=production

CMD npm run start