FROM node:19-bullseye-slim as build

WORKDIR /usr/local/app

COPY ./src ./src
COPY ./angular.json .
COPY ./package-lock.json .
COPY ./package.json .
COPY ./tailwind.config.js .
COPY ./tsconfig.json .
COPY ./tsconfig.app.json .

RUN npm install -g @angular/cli@13
RUN npm ci

RUN ng build

FROM nginx:latest as deploy

COPY --from=build /usr/local/app/dist/exowebapp /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/

EXPOSE 80
