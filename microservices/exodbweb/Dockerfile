FROM node:19-bullseye-slim

ENV MARIADB_ADDR=host.docker.internal

COPY ./src/ ./src/
COPY ./package.json .
COPY ./package-lock.json .

RUN npm ci

ENTRYPOINT []
CMD ["node","src/index.js"]
