FROM node:16-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

CMD [ "npm","start"]
