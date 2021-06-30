FROM node:16-buster-slim AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run-script build:prod


FROM node:16-buster-slim
RUN npm install -g http-server
ENV API_BASE_URL=''
WORKDIR /public
EXPOSE 8080
COPY --from=builder /usr/src/app/dist .
CMD echo "{\"apiBaseUrl\":\"${API_BASE_URL}\"}" > config.json && \
    http-server -p 8080