##
# Step 1: Build app static files (spa) with node
##

FROM node:alpine AS build
RUN echo "### NODE BASE CONTAINER INITIATED ###"

# Copy app files
COPY . /app
WORKDIR /app
RUN echo "### LOCAL APP FILES COPIED ###"

# Build app static files
RUN npm ci
RUN npm run build
RUN echo "### APP STATIC FILES BUILT ###"

##
# Step 2: Serve app static files (spa) with nginx
##

FROM nginx:alpine AS serve
RUN echo "### NGINX BASE CONTAINER INITIATED ###"

# Copy app static files
COPY --from=build /app/build /usr/share/nginx/html
RUN echo "### APP STATIC FILES COPIED ###"

EXPOSE 80
