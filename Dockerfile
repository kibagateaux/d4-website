FROM node:14.17-alpine

COPY . /app

WORKDIR /app

RUN --mount=type=secret,id=npm_auth_token,target=/root/.npmrc npm ci

ENTRYPOINT sh entry.sh
