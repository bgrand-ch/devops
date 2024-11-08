FROM node:alpine

# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
# RUN apk add --no-cache libc6-compat

# Copy local files
COPY . /app
WORKDIR /app

# Configure Next.js
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build files for production
RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
