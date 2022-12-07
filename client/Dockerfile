FROM node:16-alpine3.15 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
ENTRYPOINT ["npm","start"]