FROM public.ecr.aws/lambda/nodejs:16

COPY main.js main.js.map package.json ./

RUN npm install --production

CMD ["main.handler"]
