FROM node:alpine3.14 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.20.2-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]