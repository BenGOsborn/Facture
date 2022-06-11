FROM node:latest

WORKDIR /usr/local/app

ENV NODE_ENV=production

CMD npm run start -w @bengosborn/cms