# builder phase
FROM node:14-alpine AS builder

WORKDIR '/app'

COPY package.json ./
RUN npm install --legacy-peer-deps

COPY ./ ./

CMD ["npm", "run", "start"]

FROM nginx:latest
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html