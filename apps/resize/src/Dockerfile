FROM public.ecr.aws/lambda/nodejs:16

WORKDIR /usr/local

COPY main.js main.js.map package.json ./

RUN npm install --production

CMD ["main.handler"]
