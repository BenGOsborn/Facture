FROM node:18-alpine3.16

ENV NODE_ENV=production

WORKDIR /usr/local/app

COPY package*.json ./
COPY services/cms services/cms

RUN npm install --production

CMD npm run start -w @bengosborn/cms