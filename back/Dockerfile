FROM php:fpm-alpine AS build
RUN echo "### PHP BASE CONTAINER INITIATED ###"

COPY . /var/www/app
USER root
RUN chmod 777 -R /var/www/app
WORKDIR /var/www/app

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
COPY composer.json ./
RUN composer install
RUN echo "### COMPOSER INSTALLED ###"

CMD ["php-fpm"]
