FROM node:15.8.0-alpine AS build
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run export

FROM node:15.8.0-alpine
WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/out /app/
