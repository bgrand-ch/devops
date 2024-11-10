FROM node:alpine

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# RUN apk add --no-cache libc6-compat

# Copy local files
COPY . /var/www
WORKDIR /var/www

# Build files for production
RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
