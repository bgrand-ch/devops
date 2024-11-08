FROM php:apache

# Install required PHP extensions
# RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install zip

# Copy local files
COPY . /var/www/html
WORKDIR /var/www/html

# Configure Compose
ENV COMPOSER_ALLOW_SUPERUSER=1

# Install dependencies for production
COPY --from=composer /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev

EXPOSE 80
EXPOSE 443

CMD ["apache2ctl", "-D", "FOREGROUND"]
