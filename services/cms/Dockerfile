FROM node:lts-alpine

WORKDIR /app

COPY ./build/ .
COPY package.json package-lock.json

RUN npm install --production

CMD npm run start